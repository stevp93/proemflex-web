import type { Metadata } from "next";
import CalidadContent from "@/components/pages/CalidadContent";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Calidad (BPM) — Buenas prácticas de manufactura e ISO 9001",
  description:
    "Nuestro sistema de gestión de calidad certificado ISO 9001 y Buenas Prácticas de Manufactura (BPM) garantizan la inocuidad y excelencia de cada empaque.",
  alternates: { canonical: "/calidad" },
};

export default function CalidadPage() {
  return (
    <main id="main-content" style={{ paddingTop: "var(--nav-height)" }}>
      <PageHero
        overline="Sistema de gestión"
        title="Calidad que"
        titleHighlight="se certifica"
        description="Nuestro sistema integra ISO 9001 y BPM para garantizar que cada producto cumpla los más altos estándares de calidad e inocuidad en la industria colombiana."
        badge="Certificado ISO 9001 & BPM"
        breadcrumb={{ label: "Calidad (BPM)", href: "/calidad" }}
      />
      <CalidadContent />
    </main>
  );
}
