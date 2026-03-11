"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

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
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.3 + i * 0.15, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #111820 0%, #1a2332 40%, #0d1f2d 100%)",
      }}
      aria-label="Sección principal"
    >
      {/* Animated gradient orbs */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0,242,254,0.08), transparent 50%)",
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] right-[10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,242,254,0.12) 0%, transparent 70%)",
        }}
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)",
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen py-28">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div custom={0} variants={textVariants} initial="hidden" animate="visible">
              <span className="eco-badge">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                100% Reciclable
              </span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                custom={1}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight"
              >
                Flexibilidad{" "}
                <span className="text-gradient-cyan">Diseñada.</span>
                <br />
                Sostenibilidad{" "}
                <span className="relative inline-block">
                  Garantizada.
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-[#10B981] to-[#059669] origin-left"
                  />
                </span>
              </motion.h1>

              <motion.p
                custom={2}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="text-lg md:text-xl text-[#9CA3AF] max-w-xl leading-relaxed"
              >
                Más de{" "}
                <span className="text-white font-semibold">33 años</span> impulsando
                la cadena de suministro B2B de Colombia con empaques flexibles{" "}
                <span className="text-white font-semibold">certificados ISO 9001</span>.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              custom={3}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4"
            >
              <a href="#contacto" className="btn-primary text-base">
                Solicitar Cotización Corporativa
              </a>
              <a href="#sectores" className="btn-outline text-base">
                Ver Sectores
              </a>
            </motion.div>

            {/* Authority strip */}
            <motion.div
              custom={4}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center gap-6 pt-4"
            >
              <div className="flex items-center gap-2 text-[#9CA3AF]">
                <div className="w-8 h-8 rounded-full glass flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <span className="text-sm">ISO 9001</span>
              </div>
              <div className="flex items-center gap-2 text-[#9CA3AF]">
                <div className="w-8 h-8 rounded-full glass flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="M8 12l3 3 5-5" />
                  </svg>
                </div>
                <span className="text-sm">3 R&apos;s Certificado</span>
              </div>
              <div className="flex items-center gap-2 text-[#9CA3AF]">
                <div className="w-8 h-8 rounded-full glass flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
                <span className="text-sm">33+ Años</span>
              </div>
            </motion.div>
          </div>

          {/* Right - Abstract Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-[500px] h-[500px]">
              {/* Outer ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-[rgba(0,242,254,0.1)]"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#00F2FE]" />
              </motion.div>

              {/* Mid ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-12 rounded-full border border-[rgba(16,185,129,0.1)]"
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-[#10B981]" />
              </motion.div>

              {/* Inner ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-24 rounded-full border border-[rgba(0,242,254,0.08)]"
              />

              {/* Central element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-40 h-40 rounded-3xl bg-gradient-to-br from-[rgba(0,242,254,0.1)] to-[rgba(79,172,254,0.05)] glass-strong flex items-center justify-center"
                >
                  <div className="text-center">
                    <p className="font-display font-bold text-4xl text-gradient-cyan">3R</p>
                    <p className="text-[0.6rem] text-[#9CA3AF] tracking-[0.2em] uppercase mt-1">
                      Reduce · Reúsa · Recicla
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Floating specs */}
              {[
                { label: "Extrusión", value: "3-100cm", x: "85%", y: "20%", delay: 0 },
                { label: "Impresión", value: "6 Colores", x: "90%", y: "65%", delay: 0.3 },
                { label: "Sellado", value: "Automático", x: "5%", y: "75%", delay: 0.6 },
              ].map((spec) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.5 + spec.delay, ease: "backOut" }}
                  className="absolute glass rounded-xl px-4 py-3"
                  style={{ left: spec.x, top: spec.y }}
                >
                  <p className="text-[0.6rem] text-[#9CA3AF] uppercase tracking-wider">
                    {spec.label}
                  </p>
                  <p className="font-display font-bold text-sm text-white">
                    {spec.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#111820] to-transparent pointer-events-none" />
    </section>
  );
}
