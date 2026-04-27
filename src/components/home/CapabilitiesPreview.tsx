"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExtrusionIcon, PrintingIcon, SealingIcon, ArrowRightIcon } from "@/components/ui/ProcessIcons";

const caps = [
  {
    title: "Extrusión",
    detail: "Película flexible 3 — 100 cm",
    description: "Control preciso de calibre y resistencia mecánica en cada metro.",
    Icon: ExtrusionIcon,
    image: "/proemflex-web/images/procesos/optimized/extrusion-2.jpg",
    accent: "#00F2FE",
  },
  {
    title: "Impresión 6 colores",
    detail: "Tambor central flexográfico",
    description: "Registro perfecto y alta definición para branding premium.",
    Icon: PrintingIcon,
    image: "/proemflex-web/images/procesos/optimized/sellado-2.jpg",
    accent: "#4FACFE",
  },
  {
    title: "Sellado automático",
    detail: "Juntas 100% herméticas",
    description: "Líneas de alta velocidad con control de temperatura y presión.",
    Icon: SealingIcon,
    image: "/proemflex-web/images/procesos/optimized/sellado-3.jpg",
    accent: "#10B981",
  },
];

export default function CapabilitiesPreview() {
  return (
    <section
      className="section"
      style={{ background: "linear-gradient(180deg, #111820 0%, #0a1018 50%, #111820 100%)" }}
      aria-label="Capacidades de manufactura"
    >
      <div className="container-pf">
        {/* Header — centered */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid place-items-center text-center max-w-2xl mx-auto mb-12 sm:mb-14"
        >
          <p className="eyebrow mb-3">Proceso de producción</p>
          <h2 className="h-section text-3xl sm:text-4xl md:text-5xl">
            Nuestro proceso de{" "}
            <span className="text-gradient-cyan">manufactura</span>
          </h2>
          <p className="mt-4 text-[#9CA3AF] text-base sm:text-lg leading-relaxed">
            Maquinaria de última generación y procesos certificados BPM, supervisados
            metro a metro para garantizar calidad constante.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {caps.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-xl overflow-hidden flex flex-col group transition-colors duration-300 hover:border-white/15"
            >
              {/* Photo */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={c.image}
                  alt={`Proceso de ${c.title} en planta PROEMFLEX`}
                  width={480}
                  height={360}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1520] via-[#0e1520]/30 to-transparent" />
                <span
                  className="absolute top-3 left-3 grid place-items-center w-10 h-10 rounded-lg backdrop-blur-md"
                  style={{ background: `${c.accent}24`, color: c.accent }}
                >
                  <c.Icon size={22} />
                </span>
              </div>

              {/* Body */}
              <div className="flex-1 flex flex-col p-5 sm:p-6 gap-2">
                <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                  {c.title}
                </h3>
                <p className="font-display font-semibold text-sm" style={{ color: c.accent }}>
                  {c.detail}
                </p>
                <p className="text-sm text-[#9CA3AF] leading-relaxed">
                  {c.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 grid place-items-center">
          <Link href="/capacidades" className="btn-outline">
            Conocer nuestra planta
            <ArrowRightIcon size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
