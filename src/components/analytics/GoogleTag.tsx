import { GA_MEASUREMENT_ID, GTAG_INIT_SCRIPT } from "./config";

/**
 * ── ETIQUETA DE GOOGLE (gtag.js) ──
 * Se renderiza dentro del <head> del layout raíz, como indica Google
 * ("justo después del elemento <head>, en todas las páginas").
 * El consentimiento por defecto va dentro de GTAG_INIT_SCRIPT (Consent Mode v2).
 */
export default function GoogleTag() {
  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
      <script id="google-tag-init" dangerouslySetInnerHTML={{ __html: GTAG_INIT_SCRIPT }} />
    </>
  );
}
