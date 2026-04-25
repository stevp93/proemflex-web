import type { Metadata } from "next";
import NosotrosContent from "@/components/pages/NosotrosContent";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Nosotros — Historia, Misión y Valores",
  description:
    "Conozca PROEMFLEX S.A.S., más de 33 años de experiencia fabricando empaques flexibles certificados en Colombia. Misión, visión, valores y trayectoria.",
  alternates: { canonical: "/nosotros" },
};

export default function NosotrosPage() {
  return (
    <main className="pt-20">
      <PageHero
        overline="Quiénes Somos"
        title="Más de 33 Años"
        titleHighlight="Fabricando Confianza"
        description="PROEMFLEX S.A.S. es una empresa colombiana con más de tres décadas especializados en la fabricación de empaques flexibles certificados para la industria."
        breadcrumb={{ label: "Nosotros", href: "/nosotros" }}
      />
      <NosotrosContent />
    </main>
  );
}
