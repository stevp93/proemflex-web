"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { RecycleIcon, ArrowRightIcon } from "@/components/ui/ProcessIcons";

export default function SustainabilityPreview() {
  return (
    <section
      className="section"
      style={{ background: "linear-gradient(180deg, #111820 0%, #0d1a14 50%, #111820 100%)" }}
      aria-label="Compromiso de sostenibilidad"
    >
      <div className="container-pf grid place-items-center text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid place-items-center gap-6"
        >
          <span className="eco-badge">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            Compromiso ambiental
          </span>

          <span
            aria-hidden
            className="grid place-items-center w-16 h-16 rounded-2xl bg-emerald-500/15 text-emerald-400 mb-1"
          >
            <RecycleIcon size={36} color="#10B981" />
          </span>

          <h2 className="h-section text-3xl sm:text-4xl md:text-5xl">
            Compromiso de{" "}
            <span className="text-gradient-eco">sostenibilidad</span>
          </h2>

          <p className="text-[#9CA3AF] text-base sm:text-lg leading-relaxed max-w-xl">
            En PROEMFLEX, la responsabilidad ambiental es parte integral de nuestra operación.
            Nuestros empaques son <span className="text-white font-semibold">100% reciclables</span>{" "}
            y trabajamos bajo estándares de manufactura limpia.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link href="/calidad" className="btn-outline">
              Calidad y BPM <ArrowRightIcon size={14} />
            </Link>
            <Link href="/nosotros" className="btn-outline">
              Nuestra historia <ArrowRightIcon size={14} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
