import type { Metadata } from "next";

/**
 * ── DATOS DEL SITIO ──
 * Dominio principal publicado en GitHub Pages (debe coincidir con el archivo CNAME
 * y con Settings → Pages → Custom domain). El dominio sin "www" redirige aquí.
 */
export const SITE_URL = "https://www.proemflex.com";
export const SITE_NAME = "PROEMFLEX S.A.S.";

/** Creador del sitio (crédito del footer y metadatos author/creator). */
export const SITE_CREATOR = {
  name: "SP AUTOMATIZACIONES",
  url: "https://www.instagram.com/sp930718/",
};

const baseOpenGraph = {
  type: "website" as const,
  locale: "es_CO",
  siteName: SITE_NAME,
  // Imagen al compartir el enlace en WhatsApp, Facebook, LinkedIn, etc.
  images: [
    {
      url: "/images/og-proemflex.jpg",
      width: 1200,
      height: 630,
      alt: "PROEMFLEX S.A.S. — Productos y Empaques Flexibles",
    },
  ],
};

/**
 * Metadatos por página: título, descripción, URL canónica y Open Graph propios.
 * `path` va con barra final porque el sitio se exporta con `trailingSlash: true`.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { ...baseOpenGraph, title: `${title} | ${SITE_NAME}`, description, url: path },
  };
}

export const homeOpenGraph = {
  ...baseOpenGraph,
  title: `${SITE_NAME} | Empaques Flexibles Industriales`,
  description:
    "Alianza estratégica con más de 30 años de experiencia en empaques flexibles en Colombia. Soluciones integrales con altos estándares de calidad.",
};

/** Datos estructurados (schema.org) de la empresa para Google. */
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/images/logos/LOGO%20PROEMFLEX%20SIN%20FONDO.png`,
  image: `${SITE_URL}/images/procesos/optimized/extrusion-3.jpg`,
  description:
    "Fabricante de empaques flexibles industriales en Bogotá, Colombia: extrusión, impresión flexográfica, laminación y sellado.",
  telephone: "+57 322 217 8185",
  email: "proemflex.sas@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Cra. 69c #24-20",
    addressLocality: "Bogotá",
    addressRegion: "Bogotá D.C.",
    addressCountry: "CO",
  },
  hasMap: "https://www.google.com/maps/place/Proemflex+s.a.s/data=!4m2!3m1!1s0x0:0x563a8254d7a4470d",
  areaServed: "CO",
  sameAs: [
    "https://www.facebook.com/profile.php?id=61581262456425",
    "https://www.instagram.com/proemflex/",
    "https://www.tiktok.com/@proemflex.sas",
  ],
};
