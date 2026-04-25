import type { Metadata } from "next";
import NewsCarousel from "@/components/sections/NewsCarousel";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Noticias — Novedades y Actualizaciones",
  description:
    "Últimas noticias de PROEMFLEX S.A.S.: innovaciones, certificaciones, ampliaciones de planta y novedades del sector de empaques flexibles.",
  alternates: { canonical: "/noticias" },
};

export default function NoticiasPage() {
  return (
    <main className="pt-20">
      <PageHero
        overline="Novedades"
        title="Noticias y"
        titleHighlight="Actualizaciones"
        description="Mantente al día con las últimas innovaciones, certificaciones y novedades de PROEMFLEX S.A.S."
        breadcrumb={{ label: "Noticias", href: "/noticias" }}
      />
      <NewsCarousel />
    </main>
  );
}
