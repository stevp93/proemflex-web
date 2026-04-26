import type { Metadata } from "next";
import NoticiasGrid from "@/components/pages/NoticiasGrid";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Noticias — Novedades y actualizaciones",
  description:
    "Últimas noticias de PROEMFLEX S.A.S.: innovaciones, certificaciones, ampliaciones de planta y novedades del sector de empaques flexibles.",
  alternates: { canonical: "/noticias" },
};

export default function NoticiasPage() {
  return (
    <main id="main-content" style={{ paddingTop: "var(--nav-height)" }}>
      <PageHero
        overline="Novedades"
        title="Noticias y"
        titleHighlight="actualizaciones"
        description="Mantente al día con las últimas innovaciones, certificaciones y novedades de PROEMFLEX S.A.S."
        breadcrumb={{ label: "Noticias", href: "/noticias" }}
      />
      <NoticiasGrid />
    </main>
  );
}
