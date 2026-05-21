"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

/**
 * ── MICROSOFT CLARITY ──
 * Para activar:
 * 1. Crea un proyecto en https://clarity.microsoft.com/
 * 2. Reemplaza CLARITY_PROJECT_ID abajo por tu Project ID real (formato alfanumérico corto)
 * 3. La carga depende del consentimiento del banner de cookies.
 */
export const CLARITY_PROJECT_ID = "XXXXXXXXXX"; // ← Pegar aquí el Project ID real de Microsoft Clarity

export default function MicrosoftClarity() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem("pf-cookie-consent") : null;
    if (stored === "accepted") setEnabled(true);

    const onGranted = () => setEnabled(true);
    const onRevoked = () => setEnabled(false);
    window.addEventListener("pf:consent-granted", onGranted);
    window.addEventListener("pf:consent-revoked", onRevoked);
    return () => {
      window.removeEventListener("pf:consent-granted", onGranted);
      window.removeEventListener("pf:consent-revoked", onRevoked);
    };
  }, []);

  if (!enabled || !CLARITY_PROJECT_ID || CLARITY_PROJECT_ID.includes("XXXXXXXXXX")) return null;

  return (
    <Script id="microsoft-clarity-init" strategy="afterInteractive">
      {`
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
      `}
    </Script>
  );
}
