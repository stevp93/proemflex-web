/**
 * ── CONFIGURACIÓN DE ANALÍTICA ──
 * Módulo sin dependencias de React: lo usan tanto el layout (Server Component)
 * como los componentes cliente de consentimiento.
 */

/** ID de medición de la propiedad GA4 de PROEMFLEX (etiqueta de Google gtag.js). */
export const GA_MEASUREMENT_ID = "G-MF7EXV75NP";

/** Clave de localStorage donde se guarda la decisión del banner de cookies. */
export const CONSENT_STORAGE_KEY = "pf-cookie-consent";

/** Eventos de ventana que coordinan el banner y las herramientas de analítica. */
export const CONSENT_GRANTED_EVENT = "pf:consent-granted";
export const CONSENT_REVOKED_EVENT = "pf:consent-revoked";
export const OPEN_CONSENT_EVENT = "pf:open-consent";

/**
 * Snippet oficial de la etiqueta de Google + Consent Mode v2.
 * Se inserta en el <head> de todas las páginas. Antes del `config` declara el
 * consentimiento por defecto: sin aceptación explícita, GA4 no escribe cookies
 * (analytics_storage = denied); tras "Aceptar todas" se actualiza a granted.
 */
export const GTAG_INIT_SCRIPT = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
(function () {
  var consent = null;
  try { consent = window.localStorage.getItem(${JSON.stringify(CONSENT_STORAGE_KEY)}); } catch (e) {}
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: consent === 'accepted' ? 'granted' : 'denied'
  });
})();
gtag('js', new Date());
gtag('config', ${JSON.stringify(GA_MEASUREMENT_ID)});
`;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}
