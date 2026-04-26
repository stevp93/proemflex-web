import type { Metadata } from "next";
import NosotrosContent from "@/components/pages/NosotrosContent";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Nosotros — Historia, misión y valores",
  description:
    "Conozca PROEMFLEX S.A.S., más de 33 años de experiencia fabricando empaques flexibles certificados en Colombia. Misión, visión, valores y trayectoria.",
  alternates: { canonical: "/nosotros" },
};

export default function NosotrosPage() {
  return (
    <main id="main-content" style={{ paddingTop: "var(--nav-height)" }}>
      <PageHero
        overline="Quiénes somos"
        title="Más de 33 años"
        titleHighlight="fabricando confianza"
        description="PROEMFLEX S.A.S. es una empresa colombiana con más de tres décadas especializada en la fabricación de empaques flexibles certificados para la industria."
        breadcrumb={{ label: "Nosotros", href: "/nosotros" }}
      />
      <NosotrosContent />
    </main>
  );
}
