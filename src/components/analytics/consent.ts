import { useSyncExternalStore } from "react";
import {
  CONSENT_GRANTED_EVENT,
  CONSENT_REVOKED_EVENT,
  CONSENT_STORAGE_KEY,
  OPEN_CONSENT_EVENT,
} from "./config";

export type ConsentValue = "accepted" | "rejected" | null;

// Respaldo en memoria para navegadores que bloquean localStorage (p. ej. Safari privado):
// así la decisión se respeta al menos durante la visita actual.
let memoryConsent: ConsentValue = null;

export function readConsent(): ConsentValue {
  try {
    const stored = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (stored === "accepted" || stored === "rejected") return stored;
  } catch {
    // localStorage no disponible
  }
  return memoryConsent;
}

export function saveConsent(value: "accepted" | "rejected") {
  memoryConsent = value;
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, value);
  } catch {
    // localStorage no disponible: queda solo en memoria
  }
  if (value === "rejected") clearAnalyticsCookies();
  window.dispatchEvent(
    new Event(value === "accepted" ? CONSENT_GRANTED_EVENT : CONSENT_REVOKED_EVENT)
  );
}

/** Abre de nuevo el banner para que el usuario cambie su decisión (enlace del footer). */
export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_CONSENT_EVENT));
}

/** Borra las cookies de GA4 (_ga*) y Clarity (_clck, _clsk) al revocar el consentimiento. */
function clearAnalyticsCookies() {
  const host = window.location.hostname;
  const domains = ["", host, `.${host.replace(/^www\./, "")}`];
  for (const cookie of document.cookie.split(";")) {
    const name = cookie.split("=")[0].trim();
    if (!/^(_ga|_clck$|_clsk$)/.test(name)) continue;
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ""}`;
    }
  }
}

function subscribe(onChange: () => void) {
  window.addEventListener(CONSENT_GRANTED_EVENT, onChange);
  window.addEventListener(CONSENT_REVOKED_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CONSENT_GRANTED_EVENT, onChange);
    window.removeEventListener(CONSENT_REVOKED_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

/** Decisión actual del usuario; `null` en el servidor o si aún no ha decidido. */
export function useCookieConsent(): ConsentValue {
  return useSyncExternalStore(subscribe, readConsent, () => null);
}
