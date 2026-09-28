"use client";

import { useEffect } from "react";
import { useCookieConsent } from "./consent";

/**
 * ── GOOGLE ANALYTICS 4 — SINCRONIZACIÓN DEL CONSENTIMIENTO ──
 * La etiqueta de Google (G-MF7EXV75NP) se carga desde <GoogleTag /> en el <head>
 * con analytics_storage = denied por defecto. Este componente traslada a gtag la
 * decisión del banner de cookies (Ley 1581/2012 de Colombia):
 *   - "Aceptar todas" → analytics_storage = granted (GA4 usa cookies)
 *   - "Rechazar"      → analytics_storage = denied  (sin cookies de analítica)
 * El ID de medición se configura en ./config.ts
 */
export default function GoogleAnalytics() {
  const consent = useCookieConsent();

  useEffect(() => {
    if (consent === null) return;
    window.gtag?.("consent", "update", {
      analytics_storage: consent === "accepted" ? "granted" : "denied",
    });
  }, [consent]);

  return null;
}
