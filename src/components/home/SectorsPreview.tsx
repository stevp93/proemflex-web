"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const sectors = [
  {
    title: "Alimentos",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
  {
    title: "Lab. Farmacéuticos",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3h6v7a6 6 0 0 1-6 6H9V3z" /><path d="M15 10h-6" /><path d="M12 16v5" /><path d="M9 21h6" />
      </svg>
    ),
  },
  {
    title: "Textiles",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.38 3.46L16 2 12 4 8 2 3.62 3.46a2 2 0 0 0-1.34 1.88v14.12a2 2 0 0 0 1.34 1.88L8 22l4-2 4 2 4.38-1.54a2 2 0 0 0 1.34-1.88V5.34a2 2 0 0 0-1.34-1.88z" />
      </svg>
    ),
  },
  {
    title: "Líneas Comerciales",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Almacenes de Cadena",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    title: "Aseo y Desinfección",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z" />
      </svg>
    ),
  },
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
              <div className="flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
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
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
