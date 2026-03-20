import type { Metadata } from "next";
import NewsCarousel from "@/components/sections/NewsCarousel";

export const metadata: Metadata = {
  title: "Noticias — Novedades y Actualizaciones",
  description:
    "Últimas noticias de CAMBREPLAST S.A.S.: innovaciones, certificaciones, ampliaciones de planta y novedades del sector de empaques flexibles.",
  alternates: { canonical: "/noticias" },
};

export default function NoticiasPage() {
  return (
    <main className="pt-20">
      <section
        className="relative py-16 sm:py-24 md:py-32 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #111820 0%, #1a2332 40%, #0d1f2d 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
          <p className="font-display text-xs sm:text-sm uppercase tracking-[0.3em] text-[#00F2FE] mb-4">
            Novedades
          </p>
          <h1 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight mb-4">
            Noticias y{" "}
            <span className="text-gradient-cyan">Actualizaciones</span>
          </h1>
          <p className="text-[#9CA3AF] text-base sm:text-lg max-w-2xl">
            Mantente al día con las últimas innovaciones, certificaciones y novedades de CAMBREPLAST.
          </p>
        </div>
      </section>
      <NewsCarousel />
    </main>
  );
}
