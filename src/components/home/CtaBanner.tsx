"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CtaBanner() {
  return (
    <section
      className="relative py-16 sm:py-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #111820 0%, #0d1f2d 50%, #111820 100%)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(0,242,254,0.06) 0%, transparent 60%)",
        }}
      />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="font-display font-bold text-2xl sm:text-4xl md:text-5xl tracking-tight">
            ¿Listo para Cotizar su{" "}
            <span className="text-gradient-cyan">Proyecto de Empaque?</span>
          </h2>
          <p className="text-[#9CA3AF] text-sm sm:text-base md:text-lg max-w-xl mx-auto">
            Nuestro equipo de ingeniería diseña soluciones a medida.
            Reciba una propuesta personalizada en menos de 48 horas.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Link href="/contacto" className="btn-primary text-sm sm:text-base inline-flex items-center justify-center gap-2">
              Solicitar Cotización
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </Link>
            <Link href="/sectores" className="btn-outline text-sm sm:text-base inline-flex items-center justify-center gap-2">
              Explorar Productos
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
