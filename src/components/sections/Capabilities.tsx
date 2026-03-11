"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface Capability {
  title: string;
  description: string;
  spec: string;
  specLabel: string;
  icon: React.ReactNode;
}

const capabilities: Capability[] = [
  {
    title: "Extrusión",
    description:
      "Película flexible en anchos de 3cm hasta 100cm con control preciso de calibre y resistencia mecánica.",
    spec: "3–100",
    specLabel: "cm de ancho",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
      </svg>
    ),
  },
  {
    title: "Impresión Tambor Central",
    description:
      "Sistema de impresión flexográfica de 6 colores con registro perfecto y alta definición para branding premium.",
    spec: "6",
    specLabel: "colores",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: "Sellado Automático",
    description:
      "Líneas de sellado de alta velocidad con control de temperatura y presión para juntas herméticas impecables.",
    spec: "100%",
    specLabel: "hermético",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: "Pre-Corte",
    description:
      "Perforaciones de precisión para fácil apertura y dosificado, adaptables a cualquier especificación del cliente.",
    spec: "∞",
    specLabel: "configuraciones",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <line x1="20" y1="4" x2="8.12" y2="15.88" />
        <line x1="14.47" y1="14.48" x2="20" y2="20" />
        <line x1="8.12" y1="8.12" x2="12" y2="12" />
      </svg>
    ),
  },
];

function AnimatedCounter({ target, suffix }: { target: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const numericTarget = parseInt(target.replace(/[^0-9]/g, ""), 10);
    if (isNaN(numericTarget) || target === "∞") {
      setDisplay(target);
      return;
    }

    let current = 0;
    const step = Math.max(1, Math.ceil(numericTarget / 40));
    const interval = setInterval(() => {
      current += step;
      if (current >= numericTarget) {
        setDisplay(target);
        clearInterval(interval);
      } else {
        setDisplay(String(current));
      }
    }, 40);

    return () => clearInterval(interval);
  }, [isInView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      <span className="text-xl md:text-2xl text-[#9CA3AF] ml-1">{suffix}</span>
    </span>
  );
}

export default function Capabilities() {
  return (
    <section
      id="capacidades"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #111820 0%, #0d1f2d 50%, #111820 100%)",
      }}
      aria-label="Capacidades de Producción"
    >
      {/* Glow accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,242,254,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="font-display text-sm uppercase tracking-[0.3em] text-[#00F2FE] mb-4">
            Planta de Producción
          </p>
          <h2 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl tracking-tight mb-6">
            Ingeniería de{" "}
            <span className="text-gradient-cyan">Precisión</span>
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
            Maquinaria de última generación y procesos certificados para
            garantizar la calidad en cada metro de película producido.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative glass rounded-2xl p-8 md:p-10 hover:glass-strong transition-all duration-500"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none glow-cyan" />

              <div className="relative z-10 flex flex-col sm:flex-row sm:items-start gap-6">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[rgba(0,242,254,0.1)] to-[rgba(79,172,254,0.05)] flex items-center justify-center text-[#00F2FE] shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {cap.icon}
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3 className="font-display font-bold text-xl md:text-2xl text-white mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed mb-4">
                    {cap.description}
                  </p>
                </div>

                {/* Stat */}
                <div className="text-right shrink-0">
                  <p className="font-display font-bold text-3xl md:text-4xl text-gradient-cyan">
                    <AnimatedCounter target={cap.spec} suffix="" />
                  </p>
                  <p className="text-xs text-[#9CA3AF] uppercase tracking-wider mt-1">
                    {cap.specLabel}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a href="#contacto" className="btn-primary text-base inline-flex items-center gap-2">
            Solicitar Ficha Técnica Completa
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
