"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/ProcessIcons";

/**
 * PROEMFLEX — Galería de planta
 * Usa fotografías reales de los procesos productivos.
 * Mosaico responsivo (CSS Grid), lazy loading y aspect-ratio fijo
 * para evitar Cumulative Layout Shift.
 */

const shots = [
  {
    src: "/images/procesos/optimized/extrusion-3.jpg",
    alt: "Extrusora industrial PROEMFLEX en operación",
    label: "Extrusión",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    src: "/images/procesos/optimized/sellado-2.jpg",
    alt: "Línea de sellado automático",
    label: "Sellado automático",
    span: "",
  },
  {
    src: "/images/procesos/optimized/fajilla-2.jpg",
    alt: "Producción de fajillas termoencogibles",
    label: "Fajillas",
    span: "",
  },
  {
    src: "/images/procesos/optimized/precorte-1.jpg",
    alt: "Sistema de precorte de película",
    label: "Pre-corte",
    span: "",
  },
  {
    src: "/images/procesos/optimized/sellado-3.jpg",
    alt: "Detalle del proceso de sellado",
    label: "Control de calidad",
    span: "",
  },
];

export default function PlantGallery() {
  return (
    <section
      className="section"
      style={{ background: "linear-gradient(180deg, #111820 0%, #0e1520 50%, #111820 100%)" }}
      aria-label="Galería de la planta PROEMFLEX"
    >
      <div className="container-pf">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid place-items-center text-center max-w-2xl mx-auto mb-10 sm:mb-12"
        >
          <p className="eyebrow mb-3">La planta</p>
          <h2 className="h-section text-3xl sm:text-4xl md:text-5xl">
            Manufactura{" "}
            <span className="text-gradient-cyan">en cada metro</span>
          </h2>
          <p className="mt-4 text-[#9CA3AF] text-base sm:text-lg leading-relaxed">
            Líneas certificadas BPM operadas por personal capacitado.
            Una mirada al interior de PROEMFLEX.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[140px] sm:auto-rows-[180px] lg:auto-rows-[200px]">
          {shots.map((s, i) => (
            <motion.figure
              key={s.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`photo-frame group relative ${s.span}`}
            >
              <Image
                src={s.src}
                alt={s.alt}
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
              <figcaption className="absolute left-3 bottom-3 z-10 inline-flex items-center gap-2">
                <span className="block w-1.5 h-1.5 rounded-full bg-[#00F2FE]" />
                <span className="font-display font-semibold text-[0.7rem] sm:text-xs uppercase tracking-[0.18em] text-white">
                  {s.label}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 grid place-items-center">
          <Link href="/capacidades" className="btn-outline">
            Ver capacidades técnicas <ArrowRightIcon size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
