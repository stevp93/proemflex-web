"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/ProcessIcons";

// ── NOTICIAS: Para agregar o cambiar noticias, edita este array con objetos que tengan: id (número único), tag (categoría), title (título), description (contenido), cta (botón), accent (color) ──
const newsItems = [
  {
    id: 1,
    tag: "Sostenibilidad",
    title: "Innovación en empaques compostables",
    description:
      "En Proemflex avanzamos hacia soluciones más sostenibles con el desarrollo de empaques compostables, diseñados para reducir el impacto ambiental sin comprometer la calidad ni la funcionalidad en la industria.",
    cta: "Conocer más",
    accent: "#10B981",
  },
  {
    id: 2,
    tag: "Compromiso",
    title: "Compromiso con materiales reciclados",
    description:
      "Fortalecemos nuestra operación mediante el uso de materiales 100% reciclados, aportando a la economía circular y ofreciendo alternativas responsables para nuestros clientes.",
    cta: "Leer más",
    accent: "#F59E0B",
  },
  {
    id: 3,
    tag: "Crecimiento",
    title: "Fortalecimiento de nuestra capacidad productiva",
    description:
      "Gracias a la integración estratégica con aliados del sector, ampliamos nuestras capacidades en procesos como extrusión, impresión y laminación, garantizando mayor eficiencia y cumplimiento a nivel nacional.",
    cta: "Ver capacidades",
    accent: "#00F2FE",
  },
];

export default function NewsCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % newsItems.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? 64 : -64, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -64 : 64, opacity: 0 }),
  };

  const item = newsItems[current];

  return (
    <section
      id="noticias"
      className="section-tight scroll-mt-20"
      style={{ background: "#0e1520" }}
      aria-label="Noticias y novedades"
    >
      <div className="container-pf">
        {/* Section Label */}
        <div className="flex items-center justify-between gap-4 mb-6 sm:mb-8">
          <div className="flex items-center gap-3">
            <span className="block w-1.5 h-6 rounded-full bg-gradient-to-b from-[#00F2FE] to-[#4FACFE]" />
            <h2 className="font-display font-semibold text-xs sm:text-sm text-[#9CA3AF] uppercase tracking-[0.2em]">
              Noticias &amp; novedades
            </h2>
          </div>
          <div className="flex gap-2" role="tablist" aria-label="Noticias">
            {newsItems.map((n, i) => (
              <button
                key={n.id}
                onClick={() => goTo(i)}
                role="tab"
                aria-selected={i === current}
                aria-label={`Ir a noticia ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-7 bg-[#00F2FE]"
                    : "w-2 bg-white/15 hover:bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Card */}
        <div className="relative min-h-[220px] sm:min-h-[180px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={item.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="w-full rounded-2xl glass-card p-6 sm:p-8 lg:p-10 relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${item.accent}15 0%, transparent 60%)`,
              }}
            >
              <div className="grid sm:grid-cols-[1fr_auto] gap-6 sm:gap-8 items-center">
                <div className="space-y-3">
                  <span
                    className="inline-flex items-center text-[0.65rem] sm:text-xs font-display font-semibold uppercase tracking-[0.18em] px-3 py-1 rounded-full"
                    style={{
                      background: `${item.accent}20`,
                      color: item.accent,
                      border: `1px solid ${item.accent}40`,
                    }}
                  >
                    {item.tag}
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-white tracking-tight leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed max-w-2xl">
                    {item.description}
                  </p>
                </div>
                <div className="shrink-0">
                  <Link href="/noticias" className="btn-outline">
                    {item.cta} <ArrowRightIcon size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
