import type { Metadata } from "next";
import CalidadContent from "@/components/pages/CalidadContent";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Calidad (BPF) — Buenas Prácticas de Fabricación",
  description:
    "Nuestro sistema de gestión de calidad con BPF y concepto favorable de la Secretaría garantiza la inocuidad y excelencia de cada empaque flexible.",
  alternates: { canonical: "/calidad" },
};

export default function CalidadPage() {
  return (
    <main id="main-content" style={{ paddingTop: "var(--nav-height)" }}>
      <PageHero
        overline="Sistema de gestión"
        title="Calidad que"
        titleHighlight="se certifica"
        description="Nuestro sistema de BPF y concepto favorable de la Secretaría garantiza que cada producto cumpla los más altos estándares de calidad e inocuidad en la industria colombiana."
        badge="BPF Certificado"
        breadcrumb={{ label: "Calidad (BPF)", href: "/calidad" }}
      />
      <CalidadContent />
    </main>
  );
}
