import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: {
    default: "PROEMFLEX S.A.S. | Empaques Flexibles Industriales — Colombia",
    template: "%s | PROEMFLEX S.A.S.",
  },
  description:
    "Más de 33 años fabricando empaques flexibles certificados BPM e ISO 9001 en Colombia. Soluciones para alimentos, farmacéuticos, textiles, aseo y más.",
  keywords: [
    "empaques flexibles Colombia",
    "bolsas industriales",
    "Cambreplast",
    "empaque alimentos",
    "empaque farmacéutico",
    "BPM empaques",
    "ISO 9001 empaques",
    "película stretch",
    "bolsas polietileno",
    "fajillas termoencogibles",
    "impresión flexográfica",
  ],
  metadataBase: new URL("https://proemflex.com"),
  openGraph: {
    title: "PROEMFLEX S.A.S. | Empaques Flexibles Industriales",
    description:
      "Fabricamos empaques flexibles certificados BPM & ISO 9001 con +33 años de experiencia en Colombia.",
    type: "website",
    locale: "es_CO",
    siteName: "PROEMFLEX S.A.S.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#0E1520" />
      </head>
      <body className="antialiased">
        {/* Skip to main content — accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:rounded-md focus:bg-[#00F2FE] focus:text-[#06121b] focus:font-display focus:font-semibold focus:text-sm focus:outline-none"
        >
          Ir al contenido principal
        </a>
        <ScrollToTop />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
