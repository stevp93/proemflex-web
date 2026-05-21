"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

/**
 * ── GOOGLE ANALYTICS 4 (GA4) ──
 * Para activar:
 * 1. Crea una propiedad GA4 en https://analytics.google.com/
 * 2. Reemplaza GA_MEASUREMENT_ID abajo por tu ID real (formato: G-XXXXXXXXXX)
 * 3. La carga del script depende del consentimiento del banner de cookies.
 *
 * El componente espera el evento `pf:consent-granted` antes de inyectar
 * el snippet de GA, cumpliendo con Ley 1581/2012 de Colombia.
 */
export const GA_MEASUREMENT_ID = "G-XXXXXXXXXX"; // ← Pegar aquí el ID real de Google Analytics 4

export default function GoogleAnalytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Verifica consentimiento previo guardado en localStorage
    const stored = typeof window !== "undefined" ? window.localStorage.getItem("pf-cookie-consent") : null;
    if (stored === "accepted") setEnabled(true);

    // Escucha eventos de aceptación/rechazo emitidos por el banner
    const onGranted = () => setEnabled(true);
    const onRevoked = () => setEnabled(false);
    window.addEventListener("pf:consent-granted", onGranted);
    window.addEventListener("pf:consent-revoked", onRevoked);
    return () => {
      window.removeEventListener("pf:consent-granted", onGranted);
      window.removeEventListener("pf:consent-revoked", onRevoked);
    };
  }, []);

  // No cargar si no hay ID configurado o consentimiento
  if (!enabled || !GA_MEASUREMENT_ID || GA_MEASUREMENT_ID.includes("XXXXXXXXXX")) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            anonymize_ip: true,
            cookie_flags: 'SameSite=None;Secure'
          });
        `}
      </Script>
    </>
  );
}
