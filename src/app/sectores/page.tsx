import type { Metadata } from "next";
import Sectors from "@/components/sections/Sectors";
import ProductBand from "@/components/sections/ProductBand";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Sectores — Soluciones de empaque por industria",
  description:
    "Empaques flexibles para alimentos, laboratorios farmacéuticos, textiles, líneas comerciales, almacenes de cadena y aseo. Soluciones certificadas BPM e ISO 9001.",
  alternates: { canonical: "/sectores" },
};

export default function SectoresPage() {
  return (
    <main id="main-content" style={{ paddingTop: "var(--nav-height)" }}>
      <PageHero
        overline="Soluciones por sector"
        title="Empaques flexibles para"
        titleHighlight="cada industria"
        description="Soluciones especializadas respaldadas por +33 años de experiencia y procesos certificados BPM e ISO 9001. Empaque a medida para cada necesidad industrial."
        breadcrumb={{ label: "Sectores", href: "/sectores" }}
      />
      <Sectors />
      <div className="section-divider" />
      <ProductBand />
    </main>
  );
}
