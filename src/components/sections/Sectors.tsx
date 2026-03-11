"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Sector {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  specs: string[];
  color: string;
  gradient: string;
}

const sectors: Sector[] = [
  {
    id: "alimentos",
    title: "Alimentos",
    subtitle: "Sector Alimentario",
    description:
      "Empaques flexibles de alta barrera para panela, leche larga vida, six-packs y más. Certificados para contacto directo con alimentos.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
    specs: ["Panela", "Leche Larga Vida", "Six-Packs", "Barrera UV"],
    color: "#00F2FE",
    gradient: "from-[rgba(0,242,254,0.08)] to-transparent",
  },
  {
    id: "construccion",
    title: "Construcción",
    subtitle: "Sector Industrial",
    description:
      "Bolsas de alta resistencia para sacos de 25kg: pegante cerámico, cemento, estuco y látex. Resistencia extrema al peso y la abrasión.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="12" width="22" height="10" rx="1" />
        <path d="M4 12V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v6" />
        <path d="M8 5V2" />
        <path d="M16 5V2" />
        <line x1="1" y1="17" x2="23" y2="17" />
      </svg>
    ),
    specs: ["Sacos 25kg", "Pegante Cerámico", "Látex", "Alta Resistencia"],
    color: "#F59E0B",
    gradient: "from-[rgba(245,158,11,0.08)] to-transparent",
  },
  {
    id: "laboratorios",
    title: "Laboratorios",
    subtitle: "Sector Médico",
    description:
      "Empaque especializado para equipos de oxigenoterapia y dispositivos médicos. Estándares de higiene y trazabilidad garantizados.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2v6.5a2.5 2.5 0 0 0 5 0V2" />
        <path d="M18 8.5c0 3.5-7 3.5-7 0" />
        <path d="M9 2h1.5v6.5a2.5 2.5 0 0 1-5 0V2H7" />
        <path d="M5 16h14" />
        <path d="M3 22h18" />
        <path d="M12 16v6" />
      </svg>
    ),
    specs: ["Oxigenoterapia", "Dispositivos Médicos", "Empaques Estériles", "Trazabilidad"],
    color: "#8B5CF6",
    gradient: "from-[rgba(139,92,246,0.08)] to-transparent",
  },
  {
    id: "aseo",
    title: "Aseo & Hogar",
    subtitle: "Sector Limpieza",
    description:
      "Fajillas, mangas y envoltorios para blanqueadores, detergentes y desinfectantes. Resistencia química y acabados de alta calidad visual.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    specs: ["Blanqueadores", "Detergentes", "Desinfectantes", "Fajillas & Mangas"],
    color: "#EC4899",
    gradient: "from-[rgba(236,72,153,0.08)] to-transparent",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Sectors() {
  const [hoveredSector, setHoveredSector] = useState<string | null>(null);

  return (
    <section
      id="sectores"
      className="relative py-20 sm:py-24 md:py-32 scroll-mt-20"
      style={{ background: "#111820" }}
      aria-label="Nuestros Sectores"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="font-display text-xs sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#00F2FE] mb-3 sm:mb-4">
            Portafolio Sectorial
          </p>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl tracking-tight mb-4 sm:mb-6">
            Soluciones que{" "}
            <span className="text-gradient-cyan">Empaquetan</span>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            cada Industria
          </h2>
          <p className="text-[#9CA3AF] text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Cuatro sectores. Una filosofía: empaques flexibles que protegen su producto
            y el medio ambiente al mismo tiempo.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6"
        >
          {sectors.map((sector) => {
            const isHovered = hoveredSector === sector.id;
            return (
              <motion.article
                key={sector.id}
                variants={cardVariants}
                onMouseEnter={() => setHoveredSector(sector.id)}
                onMouseLeave={() => setHoveredSector(null)}
                className={`group relative rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 cursor-pointer transition-all duration-500 overflow-hidden glass ${
                  isHovered ? "glass-strong" : ""
                }`}
                role="article"
                aria-label={`Sector ${sector.title}`}
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${sector.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Top accent line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isHovered ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute top-0 left-0 right-0 h-[2px] origin-left"
                  style={{ background: sector.color }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `rgba(${
                        sector.color === "#00F2FE" ? "0,242,254" :
                        sector.color === "#F59E0B" ? "245,158,11" :
                        sector.color === "#8B5CF6" ? "139,92,246" :
                        "236,72,153"
                      },0.1)`,
                      color: sector.color,
                    }}
                  >
                    {sector.icon}
                  </div>

                  {/* Content */}
                  <p className="text-[0.65rem] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#9CA3AF] mb-1.5 sm:mb-2 font-display">
                    {sector.subtitle}
                  </p>
                  <h3 className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-white mb-2 sm:mb-3">
                    {sector.title}
                  </h3>
                  <p className="text-[#9CA3AF] text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 max-w-md">
                    {sector.description}
                  </p>

                  {/* Spec tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {sector.specs.map((spec) => (
                      <span
                        key={spec}
                        className="text-[0.65rem] sm:text-xs px-2 sm:px-3 py-1 sm:py-1.5 rounded-full glass font-display text-[#9CA3AF] group-hover:text-white transition-colors"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  {/* Arrow */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    className="absolute top-5 right-5 sm:top-6 sm:right-6 md:top-8 md:right-8 lg:top-10 lg:right-10"
                    style={{ color: sector.color }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </motion.div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
