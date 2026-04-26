"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FoodIcon,
  PharmaIcon,
  TextileIcon,
  RetailIcon,
  ChainIcon,
  CleaningIcon,
  ArrowRightIcon,
} from "@/components/ui/ProcessIcons";

const sectors = [
  { title: "Alimentos", Icon: FoodIcon, color: "#F59E0B" },
  { title: "Farmacéuticos", Icon: PharmaIcon, color: "#EC4899" },
  { title: "Textiles", Icon: TextileIcon, color: "#8B5CF6" },
  { title: "Líneas Comerciales", Icon: RetailIcon, color: "#06B6D4" },
  { title: "Almacenes de Cadena", Icon: ChainIcon, color: "#14B8A6" },
  { title: "Aseo & Desinfección", Icon: CleaningIcon, color: "#22D3EE" },
];

export default function SectorsPreview() {
  return (
    <section
      className="section"
      style={{ background: "linear-gradient(180deg, #111820 0%, #0e1a26 50%, #111820 100%)" }}
      aria-label="Sectores que atendemos"
    >
      <div className="container-pf">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid place-items-center text-center max-w-2xl mx-auto mb-12 sm:mb-14"
        >
          <p className="eyebrow mb-3">Soluciones por sector</p>
          <h2 className="h-section text-3xl sm:text-4xl md:text-5xl">
            Empaques flexibles para{" "}
            <span className="text-gradient-cyan">cada industria</span>
          </h2>
          <p className="mt-4 text-[#9CA3AF] text-base sm:text-lg leading-relaxed">
            Soluciones especializadas respaldadas por +33 años de experiencia y procesos
            certificados BPM e ISO 9001.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {sectors.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="glass-card rounded-xl p-4 sm:p-5 grid place-items-center text-center gap-3 aspect-square hover:border-white/15 transition-colors"
            >
              <span
                className="grid place-items-center w-12 h-12 rounded-xl"
                style={{ background: `${s.color}1a`, color: s.color }}
              >
                <s.Icon size={26} />
              </span>
              <p className="font-display font-semibold text-xs sm:text-sm text-white leading-tight">
                {s.title}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 grid place-items-center">
          <Link href="/sectores" className="btn-primary">
            Ver todos los sectores
            <ArrowRightIcon size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
