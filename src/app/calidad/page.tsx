import type { Metadata } from "next";
import CalidadContent from "@/components/pages/CalidadContent";

export const metadata: Metadata = {
  title: "Calidad (BPM) — Buenas Prácticas de Manufactura e ISO 9001",
  description:
    "Nuestro sistema de gestión de calidad certificado ISO 9001 y Buenas Prácticas de Manufactura (BPM) garantizan la inocuidad y excelencia de cada empaque.",
  alternates: { canonical: "/calidad" },
};

export default function CalidadPage() {
  return (
    <main className="pt-20">
      <CalidadContent />
    </main>
  );
}
