import type { Metadata } from "next";
import Capabilities from "@/components/sections/Capabilities";
import ProductBand from "@/components/sections/ProductBand";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Capacidades — Planta de producción y proceso de manufactura",
  description:
    "Conozca nuestra planta: extrusión 3 — 100 cm, impresión flexográfica 6 colores con tambor central, sellado automático, laminación, refilado y pre-corte. Certificados BPM e ISO 9001.",
  alternates: { canonical: "/capacidades" },
};

export default function CapacidadesPage() {
  return (
    <main id="main-content" style={{ paddingTop: "var(--nav-height)" }}>
      <PageHero
        overline="Proceso de producción"
        title="Nuestra planta de"
        titleHighlight="manufactura"
        description="Maquinaria de última generación y procesos certificados BPM. Más de 33 años perfeccionando cada etapa de producción para garantizar calidad en cada metro de película."
        breadcrumb={{ label: "Capacidades", href: "/capacidades" }}
      />
      <Capabilities />
      <div className="section-divider" />
      <ProductBand />
    </main>
  );
}
