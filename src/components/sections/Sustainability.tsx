"use client";

import { motion } from "framer-motion";

const commitments = [
  {
    title: "Materiales Reciclables",
    description:
      "Utilizamos materias primas que permiten el reciclaje completo de nuestros empaques, contribuyendo a la economía circular.",
    stat: "100%",
    statLabel: "Reciclable",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    title: "Optimización de Procesos",
    description:
      "Reducción continua de desperdicios y consumo energético en cada etapa del proceso de manufactura.",
    stat: "–30%",
    statLabel: "Desperdicio",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z" />
      </svg>
    ),
  },
  {
    title: "Responsabilidad Ambiental",
    description:
      "Compromiso con prácticas que minimizan nuestro impacto ambiental y promueven la sostenibilidad.",
    stat: "ISO",
    statLabel: "14001 en proceso",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 8C17 5.24 14.76 3 12 3S7 5.24 7 8c0 3.53 5 9 5 9s5-5.47 5-9z" />
        <circle cx="12" cy="8" r="2" />
        <path d="M12 17v4" />
        <path d="M8 21h8" />
      </svg>
    ),
  },
];

export default function Sustainability() {
  return (
    <section
      id="calidad"
      className="relative py-16 sm:py-20 md:py-28 overflow-hidden scroll-mt-20"
      style={{
        background: "linear-gradient(180deg, #111820 0%, #0d1a14 50%, #111820 100%)",
      }}
      aria-label="Compromiso de Sostenibilidad y Calidad"
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(16,185,129,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="eco-badge mb-4 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            Compromiso Ambiental
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-4xl md:text-5xl tracking-tight mb-4 sm:mb-6">
            Compromiso de{" "}
            <span className="text-gradient-eco">Sostenibilidad</span>
          </h2>
          <p className="text-[#9CA3AF] text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            En CAMBREPLAST, la responsabilidad ambiental es parte integral de nuestra
            operación. Trabajamos cada día para minimizar nuestro impacto y maximizar el valor.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {commitments.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="text-center glass rounded-xl sm:rounded-2xl p-6 sm:p-8 flex flex-col items-center transition-all duration-300 hover:border-[rgba(16,185,129,0.2)]"
            >
              <div className="w-14 h-14 rounded-2xl bg-[rgba(16,185,129,0.1)] flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2">{item.title}</h3>
              <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed mb-4 flex-1">
                {item.description}
              </p>
              <div className="border-t border-[rgba(255,255,255,0.06)] pt-4 w-full">
                <p className="font-display font-bold text-2xl text-gradient-eco">{item.stat}</p>
                <p className="text-[0.6rem] text-[#6B7280] uppercase tracking-wider">{item.statLabel}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
