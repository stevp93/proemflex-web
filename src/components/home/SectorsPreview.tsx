"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const sectors = [
  { title: "Alimentos", icon: "🍞", color: "#F59E0B" },
  { title: "Lab. Farmacéuticos", icon: "💊", color: "#EC4899" },
  { title: "Textiles", icon: "🧵", color: "#8B5CF6" },
  { title: "Líneas Comerciales", icon: "📺", color: "#06B6D4" },
  { title: "Almacenes de Cadena", icon: "🛒", color: "#14B8A6" },
  { title: "Aseo y Desinfección", icon: "✨", color: "#22D3EE" },
];

export default function SectorsPreview() {
  return (
    <section
      className="relative py-16 sm:py-20 md:py-28 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #111820 0%, #0e1a26 50%, #111820 100%)" }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="font-display text-xs sm:text-sm uppercase tracking-[0.3em] text-[#00F2FE] mb-3">
            Soluciones por Sector
          </p>
          <h2 className="font-display font-bold text-2xl sm:text-4xl md:text-5xl tracking-tight mb-4">
            Empaques Flexibles para{" "}
            <span className="text-gradient-cyan">Cada Industria</span>
          </h2>
          <p className="text-[#9CA3AF] text-sm sm:text-base max-w-2xl mx-auto">
            Soluciones especializadas respaldadas por +33 años de experiencia y procesos certificados BPM e ISO 9001.
          </p>
        </motion.div>

        {/* Grid of sector cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-8 sm:mb-10">
          {sectors.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="glass rounded-xl p-4 sm:p-5 text-center hover:border-[rgba(0,242,254,0.15)] transition-all duration-300 group cursor-pointer"
            >
              <div className="text-2xl sm:text-3xl mb-2 group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <p className="font-display font-semibold text-xs sm:text-sm text-white leading-tight">
                {s.title}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/sectores" className="btn-primary text-sm sm:text-base inline-flex items-center gap-2">
            Ver Todos los Sectores
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
