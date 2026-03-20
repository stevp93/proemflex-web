import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contacto — Solicitar Cotización de Empaques Flexibles",
  description:
    "Contáctenos para una cotización personalizada de empaques flexibles. Respuesta en menos de 48 horas. Soluciones para alimentos, farmacéuticos, textiles y más.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <main className="pt-20">
      <Contact />
    </main>
  );
}
