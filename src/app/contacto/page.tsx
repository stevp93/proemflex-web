import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Contacto — Solicitar cotización de empaques flexibles",
  description:
    "Contáctenos para una cotización personalizada de empaques flexibles. Respuesta en menos de 48 horas. Soluciones para alimentos, farmacéuticos, textiles, aseo y más.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <main id="main-content" style={{ paddingTop: "var(--nav-height)" }}>
      <PageHero
        overline="Contáctanos"
        title="Cotice su proyecto de"
        titleHighlight="empaque"
        description="Nuestro equipo de ingeniería diseña soluciones a medida. Cuéntenos sus necesidades y recibirá una propuesta personalizada en menos de 48 horas hábiles."
        breadcrumb={{ label: "Contacto", href: "/contacto" }}
      />
      <Contact />
    </main>
  );
}
