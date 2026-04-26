"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRightIcon, SendIcon } from "@/components/ui/ProcessIcons";

export default function CtaBanner() {
  return (
    <section
      className="section"
      style={{ background: "linear-gradient(180deg, #111820 0%, #0d1f2d 50%, #111820 100%)" }}
      aria-label="Llamado a cotizar"
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(0,242,254,0.07) 0%, transparent 60%)",
        }}
      />

      <div className="container-pf relative z-10 grid place-items-center text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid place-items-center gap-6"
        >
          <h2 className="h-section text-3xl sm:text-4xl md:text-5xl">
            ¿Listo para cotizar su{" "}
            <span className="text-gradient-cyan">proyecto de empaque?</span>
          </h2>
          <p className="text-[#9CA3AF] text-base sm:text-lg max-w-xl">
            Nuestro equipo de ingeniería diseña soluciones a medida.
            Reciba una propuesta personalizada en menos de 48 horas hábiles.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <Link href="/contacto" className="btn-primary">
              Solicitar Cotización <SendIcon size={16} />
            </Link>
            <Link href="/sectores" className="btn-outline">
              Explorar Productos <ArrowRightIcon size={14} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
