import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import PrivacidadContent from "@/components/pages/PrivacidadContent";

export const metadata: Metadata = {
  title: "Política de Privacidad y Tratamiento de Datos",
  description:
    "Política de tratamiento de datos personales de PROEMFLEX S.A.S. en cumplimiento de la Ley 1581 de 2012 y el Decreto 1377 de 2013 de Colombia.",
  alternates: { canonical: "/privacidad" },
  robots: { index: true, follow: true },
};

export default function PrivacidadPage() {
  return (
    <main id="main-content" style={{ paddingTop: "var(--nav-height)" }}>
      <PageHero
        overline="Marco legal"
        title="Política de"
        titleHighlight="privacidad"
        description="Tratamiento de datos personales en cumplimiento de la Ley 1581 de 2012 y el Decreto 1377 de 2013 de la República de Colombia."
        breadcrumb={{ label: "Privacidad", href: "/privacidad" }}
      />
      <PrivacidadContent />
    </main>
  );
}
