"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheckIcon, CertificateIcon, FactoryIcon, ArrowRightIcon } from "@/components/ui/ProcessIcons";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      containerRef.current.style.setProperty("--mouse-x", `${x}%`);
      containerRef.current.style.setProperty("--mouse-y", `${y}%`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.25 + i * 0.12,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      aria-label="PROEMFLEX — Empaques flexibles industriales"
      className="relative isolate overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #0F1620 0%, #1a2332 45%, #0d1f2d 100%)",
        minHeight: "calc(100vh - var(--nav-height))",
      }}
    >
      {/* Layer 0 — Mouse tracking spotlight */}
      <div
        className="absolute inset-0 -z-10 opacity-25 pointer-events-none"
        style={{
          background:
            "radial-gradient(620px circle at var(--mouse-x, 50%) var(--mouse-y, 30%), rgba(0,242,254,0.10), transparent 55%)",
        }}
      />

      {/* Layer 1 — Ambient orbs */}
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.18, 1], opacity: [0.18, 0.28, 0.18] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -z-10 top-[8%] right-[-6%] w-[300px] md:w-[520px] aspect-square rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,242,254,0.14) 0%, transparent 70%)" }}
      />
      <motion.div
        aria-hidden
        animate={{ scale: [1.08, 1, 1.08], opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -z-10 bottom-[6%] left-[-5%] w-[260px] md:w-[420px] aspect-square rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(16,185,129,0.10) 0%, transparent 70%)" }}
      />

      {/* Layer 2 — Grid */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="container-pf relative z-10 grid items-center lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 py-20 sm:py-24 lg:py-28">
        {/* Left — Copy */}
        <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-7 max-w-2xl">
          <motion.div custom={0} variants={textVariants} initial="hidden" animate="visible" className="flex flex-wrap gap-2">
            <span className="eco-badge">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Certificado BPM &amp; ISO 9001
            </span>
            <span className="trust-pill">+33 años en Colombia</span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="h-display text-[2.25rem] sm:text-5xl md:text-6xl lg:text-[3.6rem] xl:text-[4.25rem]"
          >
            Empaques Flexibles{" "}
            <span className="text-gradient-cyan">de Precisión.</span>
            <br />
            <span className="block mt-1 sm:mt-2">
              Calidad{" "}
              <span className="relative inline-block">
                Garantizada.
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-0.5 sm:-bottom-1 left-0 w-full h-[2px] sm:h-[3px] bg-gradient-to-r from-[#10B981] to-[#059669] origin-left rounded-full"
                />
              </span>
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-base sm:text-lg md:text-xl text-[#9CA3AF] leading-relaxed"
          >
            <span className="text-white font-semibold">PROEMFLEX S.A.S.</span> —
            fabricante colombiano de empaques flexibles con procesos certificados{" "}
            <span className="text-white font-semibold">BPM e ISO 9001</span>{" "}
            para alimentos, farmacéuticos, textiles, aseo y más.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={3}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link href="/contacto" className="btn-primary">
              Solicitar Cotización
              <ArrowRightIcon size={16} />
            </Link>
            <Link href="/capacidades" className="btn-outline">
              Conocer Nuestra Planta
            </Link>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            custom={4}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-3 gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-white/[0.06]"
          >
            {[
              { Icon: CertificateIcon, label: "ISO 9001:2015", color: "#00F2FE" },
              { Icon: ShieldCheckIcon, label: "BPM Certificado", color: "#10B981" },
              { Icon: FactoryIcon, label: "33+ años", color: "#9CA3AF" },
            ].map(({ Icon, label, color }) => (
              <div key={label} className="flex items-center gap-2.5">
                <span
                  className="grid place-items-center w-9 h-9 rounded-lg shrink-0"
                  style={{ background: `${color}1a`, color }}
                >
                  <Icon size={18} />
                </span>
                <span className="text-[0.72rem] sm:text-xs font-display font-semibold uppercase tracking-wider text-[#cbd5e1]">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — Real factory photo collage */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative hidden md:block"
        >
          <div className="relative aspect-[5/6] max-w-md ml-auto">
            {/* Main image — factory shot */}
            <div className="photo-frame absolute inset-0 ring-1 ring-white/10 shadow-[0_30px_80px_-20px_rgba(0,242,254,0.25)]">
              <Image
                src="/images/procesos/optimized/extrusion-detalle-1.jpg"
                alt="Línea de extrusión PROEMFLEX en operación — película flexible saliendo del dado de extrusión"
                width={480}
                height={576}
                priority
                className="w-full h-full object-cover"
              />
            </div>

            {/* Stat badge — top */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="absolute -top-4 -left-4 lg:-left-8 glass-card rounded-xl px-4 py-3 backdrop-blur-md"
            >
              <p className="text-[0.6rem] uppercase tracking-[0.2em] text-[#9CA3AF] font-display">Anchos</p>
              <p className="font-display font-bold text-xl text-gradient-cyan">3 — 100 cm</p>
            </motion.div>

            {/* Stat badge — middle right */}
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              className="absolute top-1/2 -right-4 lg:-right-8 -translate-y-1/2 glass-card rounded-xl px-4 py-3 backdrop-blur-md"
            >
              <p className="text-[0.6rem] uppercase tracking-[0.2em] text-[#9CA3AF] font-display">Impresión</p>
              <p className="font-display font-bold text-xl text-white">6 colores</p>
            </motion.div>

            {/* Stat badge — bottom */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="absolute -bottom-4 left-4 lg:left-8 glass-card rounded-xl px-4 py-3 backdrop-blur-md flex items-center gap-3"
            >
              <span className="grid place-items-center w-8 h-8 rounded-lg bg-emerald-500/15 text-emerald-400">
                <ShieldCheckIcon size={16} color="#10B981" />
              </span>
              <div>
                <p className="text-[0.6rem] uppercase tracking-[0.2em] text-[#9CA3AF] font-display">Sellado</p>
                <p className="font-display font-bold text-sm text-white">100% hermético</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Mobile — condensed photo strip (visible only on small screens) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="md:hidden col-span-full"
        >
          <div className="photo-frame rounded-xl aspect-[16/9] max-h-52 ring-1 ring-white/10">
            <Image
              src="/images/procesos/optimized/extrusion-detalle-1.jpg"
              alt="Línea de extrusión PROEMFLEX en operación"
              width={640}
              height={360}
              priority
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom fade — does not overlap content */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-20 sm:h-24"
        style={{ background: "linear-gradient(to top, #111820 0%, transparent 100%)" }}
      />
    </section>
  );
}
