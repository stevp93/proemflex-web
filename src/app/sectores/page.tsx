import type { Metadata } from "next";
import Sectors from "@/components/sections/Sectors";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Sectores — Soluciones de empaque por industria",
  description:
    "Empaques flexibles para alimentos, laboratorios farmacéuticos, textiles, líneas comerciales, almacenes de cadena y aseo. Soluciones con altos estándares de calidad.",
  alternates: { canonical: "/sectores" },
};

export default function SectoresPage() {
  return (
    <main id="main-content" style={{ paddingTop: "var(--nav-height)" }}>
      <PageHero
        overline="Soluciones por sector"
        title="Empaques flexibles para"
        titleHighlight="cada industria"
        description="Soluciones especializadas respaldadas por +30 años de experiencia y procesos con altos estándares de calidad. Empaque a medida para cada necesidad industrial."
        breadcrumb={{ label: "Sectores", href: "/sectores" }}
      />
      <Sectors />
    </main>
  );
}
