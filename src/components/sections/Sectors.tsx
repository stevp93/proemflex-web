"use client";

import { motion } from "framer-motion";

const sectors = [
  {
    tag: "Sector Alimentario",
    title: "Alimentos",
    description:
      "Empaques flexibles de alta barrera para productos alimenticios. Certificados para contacto directo con alimentos bajo normativas BPM.",
    specs: ["Panela", "Leche Larga Vida", "Six-Packs", "Barrera UV"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
    gradient: "from-[#F59E0B]/8 to-transparent",
    borderColor: "rgba(245,158,11,0.15)",
  },
  {
    tag: "Sector Farmacéutico",
    title: "Laboratorios Farmacéuticos",
    description:
      "Empaque especializado para laboratorios farmacéuticos y dispositivos médicos. Estándares de higiene, trazabilidad y BPM garantizados.",
    specs: ["Medicamentos", "Dispositivos Médicos", "Empaques Estériles", "Trazabilidad"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3h6v7a6 6 0 0 1-6 6H9V3z" />
        <path d="M15 10h-6" />
        <path d="M12 16v5" />
        <path d="M9 21h6" />
      </svg>
    ),
    gradient: "from-[#EC4899]/8 to-transparent",
    borderColor: "rgba(236,72,153,0.15)",
  },
  {
    tag: "Sector Textil",
    title: "Textiles",
    description:
      "Películas y bolsas para la protección, empaque y presentación de productos textiles. Resistencia y transparencia para exhibición óptima.",
    specs: ["Bolsas Camisa", "Película Stretch", "Empaque al Vacío", "Presentación"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.38 3.46L16 2 12 4 8 2 3.62 3.46a2 2 0 0 0-1.34 1.88v14.12a2 2 0 0 0 1.34 1.88L8 22l4-2 4 2 4.38-1.54a2 2 0 0 0 1.34-1.88V5.34a2 2 0 0 0-1.34-1.88z" />
      </svg>
    ),
    gradient: "from-[#8B5CF6]/8 to-transparent",
    borderColor: "rgba(139,92,246,0.15)",
  },
  {
    tag: "Líneas Comerciales",
    title: "Líneas Comerciales y Publicitarias",
    description:
      "Soluciones de empaque con impresión personalizada de alta calidad para campañas publicitarias, retail y presentación de marca.",
    specs: ["Impresión 6 Colores", "Diseño Personalizado", "Branding", "Retail"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    gradient: "from-[#06B6D4]/8 to-transparent",
    borderColor: "rgba(6,182,212,0.15)",
  },
  {
    tag: "Grandes Superficies",
    title: "Almacenes de Cadena",
    description:
      "Bolsas y empaques para grandes superficies y cadenas de distribución. Volúmenes altos con calidad constante y entregas programadas.",
    specs: ["Alto Volumen", "Entregas Programadas", "Estándares Cadena", "Co-Branding"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
    gradient: "from-[#14B8A6]/8 to-transparent",
    borderColor: "rgba(20,184,166,0.15)",
  },
  {
    tag: "Sector Limpieza",
    title: "Aseo y Desinfección",
    description:
      "Fajillas, mangas y envoltorios para blanqueadores, detergentes y desinfectantes. Resistencia química y acabados visuales de alta calidad.",
    specs: ["Blanqueadores", "Detergentes", "Desinfectantes", "Fajillas & Mangas"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z" />
      </svg>
    ),
    gradient: "from-[#22D3EE]/8 to-transparent",
    borderColor: "rgba(34,211,238,0.15)",
  },
];

export default function Sectors() {
  return (
    <section
      id="sectores"
      className="relative py-16 sm:py-20 md:py-28 overflow-hidden scroll-mt-20"
      style={{
        background: "linear-gradient(180deg, #111820 0%, #0e1a26 50%, #111820 100%)",
      }}
      aria-label="Soluciones de Empaque por Sector"
    >
      {/* Ambient Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[600px] md:h-[900px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(0,242,254,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14 md:mb-16"
        >
          <p className="font-display text-xs sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#00F2FE] mb-3 sm:mb-4">
            Soluciones por Sector
          </p>
          <h2 className="font-display font-bold text-2xl sm:text-4xl md:text-5xl tracking-tight mb-4 sm:mb-6">
            Empaques Flexibles para{" "}
            <span className="text-gradient-cyan">Cada Industria</span>
          </h2>
          <p className="text-[#9CA3AF] text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Soluciones especializadas de empaque flexible respaldadas por más de 33 años de
            experiencia y procesos certificados bajo BPM e ISO 9001.
          </p>
        </motion.div>

        {/* Grid — 3 per row on lg+, 2 on sm, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {sectors.map((sector, index) => (
            <motion.article
              key={sector.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`group rounded-xl sm:rounded-2xl p-5 sm:p-6 bg-gradient-to-br ${sector.gradient} transition-all duration-500 hover:scale-[1.02]`}
              style={{ border: `1px solid ${sector.borderColor}` }}
            >
              {/* Icon */}
              <div className="mb-3 sm:mb-4">{sector.icon}</div>

              {/* Tag */}
              <p className="font-display text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.2em] text-[#00F2FE] mb-1.5">
                {sector.tag}
              </p>

              {/* Title */}
              <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-2 sm:mb-3 tracking-tight">
                {sector.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed mb-3 sm:mb-4">
                {sector.description}
              </p>

              {/* Spec Tags */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {sector.specs.map((spec) => (
                  <span
                    key={spec}
                    className="text-[0.6rem] sm:text-[0.65rem] font-display px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md glass text-[#9CA3AF]"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
