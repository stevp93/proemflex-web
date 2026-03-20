"use client";

import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Extrusión",
    description:
      "Película flexible en anchos de 3cm hasta 100cm con control preciso de calibre y resistencia mecánica.",
    stat: "3–100",
    statUnit: "CM DE ANCHO",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00F2FE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: "Impresión Tambor Central",
    description:
      "Sistema de impresión flexográfica de 6 colores con registro perfecto y alta definición para branding premium.",
    stat: "6",
    statUnit: "COLORES",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00F2FE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="3" />
        <line x1="12" y1="2" x2="12" y2="6" />
        <line x1="12" y1="18" x2="12" y2="22" />
      </svg>
    ),
  },
  {
    title: "Sellado Automático",
    description:
      "Líneas de sellado de alta velocidad con control de temperatura y presión para juntas herméticas impecables.",
    stat: "100%",
    statUnit: "HERMÉTICO",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00F2FE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
];

export default function Capabilities() {
  return (
    <section
      id="capacidades"
      className="relative py-16 sm:py-20 md:py-28 overflow-hidden scroll-mt-20"
      style={{
        background: "linear-gradient(180deg, #111820 0%, #0a1018 50%, #111820 100%)",
      }}
      aria-label="Nuestro Proceso de Manufactura"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="font-display text-xs sm:text-sm uppercase tracking-[0.25em] text-[#00F2FE] mb-3">
            Proceso de Producción
          </p>
          <h2 className="font-display font-bold text-2xl sm:text-4xl md:text-5xl tracking-tight mb-4 sm:mb-6">
            Nuestro Proceso de{" "}
            <span className="text-gradient-cyan">Manufactura</span>
          </h2>
          <p className="text-[#9CA3AF] text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Maquinaria de última generación y procesos certificados BPM para garantizar la
            calidad en cada metro de película producido.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group glass rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 flex flex-col transition-all duration-300 hover:border-[rgba(0,242,254,0.15)]"
            >
              {/* Icon */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[rgba(0,242,254,0.08)] flex items-center justify-center mb-4">
                {cap.icon}
              </div>

              {/* Content */}
              <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-2 tracking-tight">
                {cap.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed flex-1 mb-4 sm:mb-6">
                {cap.description}
              </p>

              {/* Stat */}
              <div className="border-t border-[rgba(255,255,255,0.06)] pt-4">
                <div className="flex items-baseline justify-between">
                  <span className="font-display font-bold text-2xl sm:text-3xl text-gradient-cyan">
                    {cap.stat}
                  </span>
                  <span className="font-display text-[0.6rem] sm:text-xs text-[#6B7280] uppercase tracking-wider">
                    {cap.statUnit}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-8 sm:mt-12"
        >
          <a href="#contacto" className="btn-primary text-sm sm:text-base inline-flex items-center gap-2">
            Solicitar Ficha Técnica Completa
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
