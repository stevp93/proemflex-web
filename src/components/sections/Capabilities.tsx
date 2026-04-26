"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ExtrusionIcon,
  PrintingIcon,
  SealingIcon,
  LaminationIcon,
  SlittingIcon,
  PrecutIcon,
  ArrowRightIcon,
} from "@/components/ui/ProcessIcons";

const capabilities = [
  {
    title: "Extrusión",
    description:
      "Película flexible en anchos de 3 cm hasta 100 cm con control preciso de calibre y resistencia mecánica.",
    stat: "3 — 100",
    statUnit: "cm de ancho",
    image: "/images/procesos/optimized/extrusion-detalle-2.jpg",
    Icon: ExtrusionIcon,
  },
  {
    title: "Impresión Tambor Central",
    description:
      "Sistema de impresión flexográfica de 6 colores con registro perfecto y alta definición para branding premium.",
    stat: "6",
    statUnit: "colores",
    image: "/images/procesos/optimized/sellado-2.jpg",
    Icon: PrintingIcon,
  },
  {
    title: "Sellado Automático",
    description:
      "Líneas de sellado de alta velocidad con control de temperatura y presión para juntas herméticas impecables.",
    stat: "100%",
    statUnit: "hermético",
    image: "/images/procesos/optimized/sellado-3.jpg",
    Icon: SealingIcon,
  },
  {
    title: "Laminación",
    description:
      "Laminados multicapa con barrera a gases, humedad y UV para productos sensibles que requieren máxima protección.",
    stat: "Multi",
    statUnit: "capa barrera",
    image: "/images/procesos/optimized/extrusion-1.jpg",
    Icon: LaminationIcon,
  },
  {
    title: "Refilado",
    description:
      "Cortado longitudinal de bobinas en anchos personalizados con tolerancias estrechas y bordes uniformes.",
    stat: "±0.5",
    statUnit: "mm tolerancia",
    image: "/images/procesos/optimized/fajilla-3.jpg",
    Icon: SlittingIcon,
  },
  {
    title: "Pre-corte",
    description:
      "Líneas de perforación y pre-corte para empaques con apertura fácil y ahorro en operaciones aguas abajo.",
    stat: "20 — 75",
    statUnit: "cm de ancho",
    image: "/images/procesos/optimized/precorte-2.jpg",
    Icon: PrecutIcon,
  },
];

export default function Capabilities() {
  return (
    <section
      id="capacidades"
      className="section scroll-mt-20"
      style={{
        background: "linear-gradient(180deg, #111820 0%, #0a1018 50%, #111820 100%)",
      }}
      aria-label="Nuestro Proceso de Manufactura"
    >
      <div className="container-pf">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {capabilities.map((cap, index) => (
            <motion.article
              key={cap.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-card rounded-xl overflow-hidden flex flex-col group transition-colors duration-300 hover:border-white/15"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={cap.image}
                  alt={`Proceso de ${cap.title} en planta PROEMFLEX`}
                  width={560}
                  height={350}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1520]/80 via-[#0e1520]/30 to-transparent" />
                <span className="absolute top-3 left-3 grid place-items-center w-10 h-10 rounded-lg bg-[#00F2FE]/20 text-[#00F2FE] backdrop-blur-md">
                  <cap.Icon size={22} />
                </span>
              </div>

              <div className="p-5 sm:p-6 flex-1 flex flex-col gap-3">
                <h3 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight">
                  {cap.title}
                </h3>
                <p className="text-sm text-[#9CA3AF] leading-relaxed flex-1">
                  {cap.description}
                </p>
                <div className="border-t border-white/[0.06] pt-3 flex items-baseline justify-between">
                  <span className="font-display font-bold text-2xl sm:text-3xl text-gradient-cyan">
                    {cap.stat}
                  </span>
                  <span className="font-display text-xs text-[#6B7280] uppercase tracking-[0.18em]">
                    {cap.statUnit}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 sm:mt-12 grid place-items-center"
        >
          <Link href="/contacto" className="btn-primary">
            Solicitar ficha técnica completa
            <ArrowRightIcon size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
