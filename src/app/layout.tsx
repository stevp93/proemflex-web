import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import MotionProvider from "@/components/MotionProvider";
import GoogleTag from "@/components/analytics/GoogleTag";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import MicrosoftClarity from "@/components/analytics/MicrosoftClarity";
import CookieConsent from "@/components/analytics/CookieConsent";
import { SITE_CREATOR, SITE_NAME, SITE_URL, homeOpenGraph, organizationJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: "PROEMFLEX S.A.S. | Empaques Flexibles Industriales — Colombia",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Más de 30 años de experiencia en empaques flexibles: soluciones integrales con altos estándares de calidad para la industria en Colombia.",
  keywords: [
    "empaques flexibles Colombia",
    "bolsas industriales",
    "Proemflex",
    "Cambreplast",
    "empaque alimentos",
    "empaque farmacéutico",
    "BPF empaques",
    "bolsas polietileno",
    "fajillas termoencogibles",
    "impresión flexográfica",
    "laminación empaques",
    "empaques compostables",
  ],
  metadataBase: new URL(SITE_URL),
  authors: [SITE_CREATOR],
  creator: SITE_CREATOR.name,
  publisher: SITE_NAME,
  openGraph: homeOpenGraph,
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  referrer: "strict-origin-when-cross-origin",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Google tag (gtag.js) — GA4 G-MF7EXV75NP con Consent Mode v2 */}
        <GoogleTag />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* En App Router el <head> del layout raíz aplica a todas las páginas (la regla es de pages/) */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#0E1520" />
        {/* Sin JavaScript, el contenido animado (opacity:0 inicial) debe verse igual */}
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="antialiased">
        {/* Skip to main content — accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:rounded-md focus:bg-[#00F2FE] focus:text-[#06121b] focus:font-display focus:font-semibold focus:text-sm focus:outline-none"
        >
          Ir al contenido principal
        </a>
        <MotionProvider>
          <ScrollToTop />
          <Navbar />
          {children}
          <Footer />
        </MotionProvider>

        {/* Datos estructurados de la empresa (schema.org LocalBusiness) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") }}
        />

        {/* ── ANALÍTICAS Y CONSENTIMIENTO: GA4 no usa cookies y Clarity no se carga hasta que el usuario acepta. IDs en /src/components/analytics/ ── */}
        <CookieConsent />
        <GoogleAnalytics />
        <MicrosoftClarity />
      </body>
    </html>
  );
}
