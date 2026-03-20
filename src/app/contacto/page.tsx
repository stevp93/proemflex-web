import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Contacto — Solicitar Cotización de Empaques Flexibles",
  description:
    "Contáctenos para una cotización personalizada de empaques flexibles. Respuesta en menos de 48 horas. Soluciones para alimentos, farmacéuticos, textiles y más.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <main className="pt-20">
      <PageHero
        overline="Contáctanos"
        title="Cotice su Proyecto de"
        titleHighlight="Empaque"
        description="Nuestro equipo de ingeniería diseña soluciones a medida. Cuéntenos sus necesidades y recibirá una propuesta personalizada en menos de 48 horas hábiles."
        breadcrumb={{ label: "Contacto", href: "/contacto" }}
      />
      <Contact />
    </main>
  );
}
