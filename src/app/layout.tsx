import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: {
    default: "CAMBREPLAST S.A.S. | Empaques Flexibles Industriales — Colombia",
    template: "%s | CAMBREPLAST S.A.S.",
  },
  description:
    "Más de 33 años fabricando empaques flexibles certificados BPM e ISO 9001 en Colombia. Soluciones para alimentos, farmacéuticos, textiles y más.",
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
  ],
  metadataBase: new URL("https://cambreplast.com"),
  openGraph: {
    title: "CAMBREPLAST S.A.S. | Empaques Flexibles Industriales",
    description:
      "Fabricamos empaques flexibles certificados BPM & ISO 9001 con +33 años de experiencia en Colombia.",
    type: "website",
    locale: "es_CO",
    siteName: "CAMBREPLAST S.A.S.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
