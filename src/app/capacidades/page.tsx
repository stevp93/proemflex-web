import type { Metadata } from "next";
import Capabilities from "@/components/sections/Capabilities";
import ProductBand from "@/components/sections/ProductBand";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Capacidades — Planta de Producción y Proceso de Manufactura",
  description:
    "Conozca nuestra planta de producción: extrusión de 3 a 100cm, impresión flexográfica de 6 colores con tambor central y sellado automático. Certificados BPM e ISO 9001.",
  alternates: { canonical: "/capacidades" },
};

export default function CapacidadesPage() {
  return (
    <main className="pt-20">
      <PageHero
        overline="Proceso de Producción"
        title="Nuestra Planta de"
        titleHighlight="Manufactura"
        description="Maquinaria de última generación y procesos certificados BPM. Más de 33 años perfeccionando cada etapa de producción para garantizar la calidad en cada metro de película."
        breadcrumb={{ label: "Capacidades", href: "/capacidades" }}
      />
      <Capabilities />
      <div className="section-divider" />
      <ProductBand />
    </main>
  );
}
