"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function SustainabilityPreview() {
  return (
    <section
      className="relative py-16 sm:py-20 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #111820 0%, #0d1a14 50%, #111820 100%)" }}
    >
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <span className="eco-badge inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            Compromiso Ambiental
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-4xl md:text-5xl tracking-tight">
            Compromiso de{" "}
            <span className="text-gradient-eco">Sostenibilidad</span>
          </h2>
          <p className="text-[#9CA3AF] text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            En CAMBREPLAST, la responsabilidad ambiental es parte integral de nuestra operación.
            Nuestros empaques son <span className="text-white font-semibold">100% reciclables</span> y
            trabajamos bajo estándares de manufactura limpia.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Link href="/calidad" className="btn-outline text-sm inline-flex items-center gap-2">
              Calidad y BPM
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/nosotros" className="btn-outline text-sm inline-flex items-center gap-2">
              Conocer Nuestra Historia
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
