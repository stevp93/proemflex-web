import type { Metadata } from "next";
import Capabilities from "@/components/sections/Capabilities";
import ProductBand from "@/components/sections/ProductBand";

export const metadata: Metadata = {
  title: "Capacidades — Planta de Producción y Proceso de Manufactura",
  description:
    "Conozca nuestra planta de producción: extrusión de 3 a 100cm, impresión flexográfica de 6 colores con tambor central y sellado automático. Certificados BPM e ISO 9001.",
  alternates: { canonical: "/capacidades" },
};

export default function CapacidadesPage() {
  return (
    <main className="pt-20">
      <Capabilities />
      <div className="section-divider" />
      <ProductBand />
    </main>
  );
}
