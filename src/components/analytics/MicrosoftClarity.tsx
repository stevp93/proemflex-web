"use client";

import Script from "next/script";
import { useEffect } from "react";
import { useCookieConsent } from "./consent";

/**
 * ── MICROSOFT CLARITY ──
 * Proyecto PROEMFLEX en https://clarity.microsoft.com/ (Settings → Setup).
 * El script solo se inyecta cuando el usuario acepta las cookies en el banner
 * (Ley 1581/2012); al aceptar se envía además la señal de consentimiento de Clarity.
 * Para desactivarlo, vuelve a poner el placeholder "XXXXXXXXXX".
 */
export const CLARITY_PROJECT_ID = "yp4txlj1gm";

declare global {
  interface Window {
    clarity?: (...args: unknown[]) => void;
  }
}

export default function MicrosoftClarity() {
  const consent = useCookieConsent();
  const enabled = consent === "accepted";

  // Sincroniza cambios posteriores desde "Configurar cookies": al revocar, Clarity borra
  // sus cookies y cierra la sesión; al volver a aceptar en la misma visita, se reactiva.
  useEffect(() => {
    if (consent === "accepted") window.clarity?.("consent");
    else if (consent === "rejected") window.clarity?.("consent", false);
  }, [consent]);

  if (!enabled || !CLARITY_PROJECT_ID || CLARITY_PROJECT_ID.includes("XXXXXXXXXX")) return null;

  return (
    <Script id="microsoft-clarity-init" strategy="afterInteractive">
      {`
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
        window.clarity("consent");
      `}
    </Script>
  );
}
