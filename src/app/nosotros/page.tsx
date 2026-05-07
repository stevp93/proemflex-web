import type { Metadata } from "next";
import NosotrosContent from "@/components/pages/NosotrosContent";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Nosotros — Historia, misión y valores",
  description:
    "Conozca PROEMFLEX S.A.S., alianza estratégica con más de 30 años de experiencia en empaques flexibles en Colombia. Misión, visión, valores y trayectoria.",
  alternates: { canonical: "/nosotros" },
};

export default function NosotrosPage() {
  return (
    <main id="main-content" style={{ paddingTop: "var(--nav-height)" }}>
      <PageHero
        overline="Quiénes somos"
        title="Más de 30 años"
        titleHighlight="fabricando confianza"
        description="PROEMFLEX S.A.S. — alianza estratégica con más de 30 años de experiencia en empaques flexibles, ofreciendo soluciones integrales con altos estándares de calidad para la industria."
        breadcrumb={{ label: "Nosotros", href: "/nosotros" }}
      />
      <NosotrosContent />
    </main>
  );
}
