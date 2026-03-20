import type { Metadata } from "next";
import Sectors from "@/components/sections/Sectors";
import ProductBand from "@/components/sections/ProductBand";

export const metadata: Metadata = {
  title: "Sectores — Soluciones de Empaque por Industria",
  description:
    "Empaques flexibles para alimentos, laboratorios farmacéuticos, textiles, líneas comerciales, almacenes de cadena y aseo. Soluciones certificadas BPM e ISO 9001.",
  alternates: { canonical: "/sectores" },
};

export default function SectoresPage() {
  return (
    <main className="pt-20">
      <Sectors />
      <div className="section-divider" />
      <ProductBand />
    </main>
  );
}
