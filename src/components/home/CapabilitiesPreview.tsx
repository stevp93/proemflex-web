"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const caps = [
  { title: "Extrusión", stat: "3–100cm", icon: "⚡" },
  { title: "Impresión 6 Colores", stat: "Tambor Central", icon: "🎨" },
  { title: "Sellado Automático", stat: "100% Hermético", icon: "🔒" },
];

export default function CapabilitiesPreview() {
  return (
    <section
      className="relative py-16 sm:py-20 md:py-28 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #111820 0%, #0a1018 50%, #111820 100%)" }}
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
            Proceso de Producción
          </p>
          <h2 className="font-display font-bold text-2xl sm:text-4xl md:text-5xl tracking-tight mb-4">
            Nuestro Proceso de{" "}
            <span className="text-gradient-cyan">Manufactura</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
          {caps.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass rounded-xl p-6 sm:p-8 text-center"
            >
              <div className="text-3xl mb-3">{c.icon}</div>
              <h3 className="font-display font-bold text-lg text-white mb-1">{c.title}</h3>
              <p className="font-display text-sm text-gradient-cyan font-semibold">{c.stat}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/capacidades" className="btn-outline text-sm sm:text-base inline-flex items-center gap-2">
            Conocer Nuestra Planta
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
