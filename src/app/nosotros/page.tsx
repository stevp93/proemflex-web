import type { Metadata } from "next";
import NosotrosContent from "@/components/pages/NosotrosContent";

export const metadata: Metadata = {
  title: "Nosotros — Historia, Misión y Valores",
  description:
    "Conozca CAMBREPLAST S.A.S., más de 33 años de experiencia fabricando empaques flexibles certificados en Colombia. Misión, visión, valores y trayectoria.",
  alternates: { canonical: "/nosotros" },
};

export default function NosotrosPage() {
  return (
    <main>
      <NosotrosContent />
    </main>
  );
}
