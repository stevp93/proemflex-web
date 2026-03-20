"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

const newsItems = [
  {
    id: 1,
    tag: "Certificación",
    title: "Renovación Certificación ISO 9001:2015",
    description:
      "Renovamos exitosamente nuestra certificación de gestión de calidad, reafirmando nuestro compromiso con los más altos estándares internacionales.",
    cta: "Conocer más",
    gradient: "from-[#00F2FE]/20 to-[#4FACFE]/10",
    accent: "#00F2FE",
  },
  {
    id: 2,
    tag: "Innovación",
    title: "Nueva Línea de Impresión Flexográfica 6 Colores",
    description:
      "Ampliamos nuestra capacidad con tecnología de punta en impresión de tambor central, permitiendo mayor definición y registro perfecto.",
    cta: "Ver capacidades",
    gradient: "from-[#10B981]/20 to-[#059669]/10",
    accent: "#10B981",
  },
  {
    id: 3,
    tag: "Sostenibilidad",
    title: "Compromiso con Empaques 100% Reciclables",
    description:
      "Avanzamos en nuestra meta de producir soluciones de empaque que contribuyan a la economía circular y la protección del medio ambiente.",
    cta: "Leer más",
    gradient: "from-[#F59E0B]/20 to-[#D97706]/10",
    accent: "#F59E0B",
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

  // Auto-advance every 6s
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % newsItems.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
  };

  const item = newsItems[current];

  return (
    <section
      id="noticias"
      className="relative py-8 sm:py-12 overflow-hidden scroll-mt-20"
      style={{ background: "#0e1520" }}
      aria-label="Noticias y Novedades"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 rounded-full bg-gradient-to-b from-[#00F2FE] to-[#4FACFE]" />
            <h2 className="font-display font-semibold text-sm sm:text-base text-[#9CA3AF] uppercase tracking-[0.2em]">
              Noticias & Novedades
            </h2>
          </div>
          {/* Dots */}
          <div className="flex gap-2">
            {newsItems.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-[#00F2FE] w-6"
                    : "bg-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.3)]"
                }`}
                aria-label={`Ir a noticia ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Carousel Content */}
        <div className="relative min-h-[200px] sm:min-h-[180px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={item.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className={`w-full rounded-xl sm:rounded-2xl glass-strong p-6 sm:p-8 lg:p-10 bg-gradient-to-r ${item.gradient}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                <div className="flex-1 space-y-3">
                  <span
                    className="inline-block text-[0.65rem] sm:text-xs font-display font-semibold uppercase tracking-[0.2em] px-3 py-1 rounded-full"
                    style={{
                      background: `${item.accent}15`,
                      color: item.accent,
                      border: `1px solid ${item.accent}30`,
                    }}
                  >
                    {item.tag}
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed max-w-2xl">
                    {item.description}
                  </p>
                </div>
                <div className="shrink-0">
                  <a
                    href="#contacto"
                    className="btn-outline text-sm inline-flex items-center gap-2 !py-2.5 whitespace-nowrap"
                  >
                    {item.cta}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
