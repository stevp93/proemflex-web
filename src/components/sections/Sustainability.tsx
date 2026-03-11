"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    letter: "R",
    title: "Reducir",
    description:
      "Optimizamos el calibre y peso de nuestros empaques sin sacrificar resistencia, reduciendo el consumo de materia prima hasta un 30%.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="17 1 21 5 17 9" />
        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
        <polyline points="7 23 3 19 7 15" />
        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </svg>
    ),
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
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        <polyline points="21 3 21 12 12 12" />
      </svg>
    ),
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
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
        <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" />
        <path d="M14 16l-3 3 3 3" />
        <path d="M8.293 13.596 4.875 7.97 8.27 2.35a1.84 1.84 0 0 1 3.157 0l1.313 2.27" />
        <path d="M14.5 7.5 12 12h6.5" />
      </svg>
    ),
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
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "#111820" }}
      aria-label="Sostenibilidad - Las 3 R's"
    >
      {/* Subtle eco glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="eco-badge mb-6 inline-flex">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            Compromiso Ambiental
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl tracking-tight mb-6 mt-6">
            Las{" "}
            <span className="text-gradient-eco">3 R&apos;s</span>
            {" "}como Filosofía
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
            No es solo un eslogan. Es la ingeniería detrás de cada empaque que
            producimos, alineada con la economía circular.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative glass rounded-2xl p-8 md:p-10 text-center hover:glass-strong transition-all duration-500"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: `0 0 40px ${pillar.glowColor}` }}
              />

              <div className="relative z-10">
                {/* Big letter */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${pillar.gradient} mb-6`}
                >
                  <span className="font-display font-black text-4xl text-white">
                    {pillar.letter}
                  </span>
                </motion.div>

                <h3 className="font-display font-bold text-2xl text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed mb-6">
                  {pillar.description}
                </p>

                {/* Stat */}
                <div className="pt-6 border-t border-[rgba(255,255,255,0.06)]">
                  <p className="font-display font-bold text-3xl text-gradient-eco">
                    {pillar.stat}
                  </p>
                  <p className="text-xs text-[#9CA3AF] uppercase tracking-wider mt-1">
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
