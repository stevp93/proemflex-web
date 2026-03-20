import type { Metadata } from "next";
import Sectors from "@/components/sections/Sectors";
import ProductBand from "@/components/sections/ProductBand";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Sectores — Soluciones de Empaque por Industria",
  description:
    "Empaques flexibles para alimentos, laboratorios farmacéuticos, textiles, líneas comerciales, almacenes de cadena y aseo. Soluciones certificadas BPM e ISO 9001.",
  alternates: { canonical: "/sectores" },
};

export default function SectoresPage() {
  return (
    <main className="pt-20">
      <PageHero
        overline="Soluciones por Sector"
        title="Empaques Flexibles para"
        titleHighlight="Cada Industria"
        description="Soluciones especializadas respaldadas por +33 años de experiencia y procesos certificados BPM e ISO 9001. Empaque a medida para cada necesidad industrial."
        breadcrumb={{ label: "Sectores", href: "/sectores" }}
      />
      <Sectors />
      <div className="section-divider" />
      <ProductBand />
    </main>
  );
}
