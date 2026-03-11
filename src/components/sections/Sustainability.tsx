"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    letter: "R",
    title: "Reducir",
    description:
      "Optimizamos el calibre y peso de nuestros empaques sin sacrificar resistencia, reduciendo el consumo de materia prima hasta un 30%.",
    stat: "30%",
    statLabel: "menos materia prima",
    gradient: "from-[#10B981] to-[#059669]",
    glowColor: "rgba(16,185,129,0.15)",
  },
  {
    letter: "R",
    title: "Reusar",
    description:
      "Diseñamos empaques pensados para múltiples ciclos de uso, con sellos resellables y materiales que mantienen su integridad.",
    stat: "∞",
    statLabel: "ciclos de uso",
    gradient: "from-[#06B6D4] to-[#0891B2]",
    glowColor: "rgba(6,182,212,0.15)",
  },
  {
    letter: "R",
    title: "Reciclar",
    description:
      "El 100% de nuestras bolsas eco-friendly son reciclables, cerrando el ciclo de economía circular en la cadena productiva.",
    stat: "100%",
    statLabel: "reciclable",
    gradient: "from-[#22C55E] to-[#16A34A]",
    glowColor: "rgba(34,197,94,0.15)",
  },
];

export default function Sustainability() {
  return (
    <section
      id="sostenibilidad"
      className="relative py-20 sm:py-24 md:py-32 overflow-hidden scroll-mt-20"
      style={{ background: "#111820" }}
      aria-label="Sostenibilidad - Las 3 R's"
    >
      {/* Subtle eco glow */}
      <div
        className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <span className="eco-badge mb-4 sm:mb-6 inline-flex">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            Compromiso Ambiental
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl tracking-tight mb-4 sm:mb-6 mt-4 sm:mt-6">
            Las{" "}
            <span className="text-gradient-eco">3 R&apos;s</span>
            {" "}como Filosofía
          </h2>
          <p className="text-[#9CA3AF] text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            No es solo un eslogan. Es la ingeniería detrás de cada empaque que
            producimos, alineada con la economía circular.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative glass rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-8 lg:p-10 text-center hover:glass-strong transition-all duration-500"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: `0 0 40px ${pillar.glowColor}` }}
              />

              <div className="relative z-10">
                {/* Big letter */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className={`inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br ${pillar.gradient} mb-4 sm:mb-5 md:mb-6`}
                >
                  <span className="font-display font-black text-3xl sm:text-3xl md:text-4xl text-white">
                    {pillar.letter}
                  </span>
                </motion.div>

                <h3 className="font-display font-bold text-xl sm:text-xl md:text-2xl text-white mb-2 sm:mb-3">
                  {pillar.title}
                </h3>
                <p className="text-[#9CA3AF] text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                  {pillar.description}
                </p>

                {/* Stat */}
                <div className="pt-4 sm:pt-5 md:pt-6 border-t border-[rgba(255,255,255,0.06)]">
                  <p className="font-display font-bold text-2xl sm:text-2xl md:text-3xl text-gradient-eco">
                    {pillar.stat}
                  </p>
                  <p className="text-[0.65rem] sm:text-xs text-[#9CA3AF] uppercase tracking-wider mt-1">
                    {pillar.statLabel}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
