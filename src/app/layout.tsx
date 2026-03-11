import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PROEMFLEX S.A.S. | Empaques Flexibles — 100% Reciclables | Colombia",
  description:
    "Más de 33 años de experiencia fabricando empaques flexibles con certificación ISO 9001. Soluciones para alimentos, construcción, laboratorios y aseo. 100% reciclables.",
  keywords: [
    "empaques flexibles Colombia",
    "bolsas reciclables",
    "Cambreplast",
    "PROEMFLEX",
    "empaque alimentos",
    "bolsas industriales",
    "ISO 9001 empaques",
  ],
  openGraph: {
    title: "PROEMFLEX S.A.S. | Empaques Flexibles Sostenibles en Colombia",
    description:
      "Fabricamos empaques flexibles 100% reciclables con certificación ISO 9001. Más de 33 años de experiencia en Colombia.",
    type: "website",
    locale: "es_CO",
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
