"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const certifications = [
  {
    title: "ISO 9001:2015",
    description: "Sistema de Gestión de Calidad certificado internacionalmente. Garantiza procesos estandarizados, mejora continua y satisfacción del cliente en cada orden de producción.",
    items: ["Auditorías internas periódicas", "Control estadístico de procesos", "Gestión documental integrada", "Seguimiento de indicadores KPI"],
    icon: "🏆",
    color: "#00F2FE",
  },
  {
    title: "BPM — Buenas Prácticas de Manufactura",
    description: "Estándares de manufactura que aseguran la inocuidad, trazabilidad y calidad de los empaques en contacto con alimentos y productos farmacéuticos.",
    items: ["Control de contaminación cruzada", "Trazabilidad lote a lote", "Personal capacitado en higiene", "Inspección visual y dimensional"],
    icon: "🔬",
    color: "#10B981",
  },
];

const controlPoints = [
  { title: "Materia Prima", desc: "Inspección y certificación de resinas y tintas al ingreso.", step: "01" },
  { title: "Extrusión", desc: "Control de calibre, resistencia y transparencia en línea.", step: "02" },
  { title: "Impresión", desc: "Verificación de registro, color y adherencia de tintas.", step: "03" },
  { title: "Sellado", desc: "Pruebas de hermeticidad y resistencia de juntas.", step: "04" },
  { title: "Producto Terminado", desc: "Inspección final, empaque y liberación de lote.", step: "05" },
  { title: "Despacho", desc: "Documentación completa, trazabilidad y condiciones de transporte.", step: "06" },
];

export default function CalidadContent() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative py-16 sm:py-24 md:py-32 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #111820 0%, #0d1a14 40%, #111820 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="eco-badge mb-4 inline-flex">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              Calidad Certificada
            </span>
            <h1 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight mb-6">
              Calidad que{" "}
              <span className="text-gradient-eco">se Certifica</span>
            </h1>
            <p className="text-[#9CA3AF] text-base sm:text-lg md:text-xl leading-relaxed">
              Nuestro sistema de gestión integra ISO 9001 y Buenas Prácticas de Manufactura
              (BPM) para garantizar que cada metro de película y cada bolsa producida cumpla
              los más altos estándares de calidad e inocuidad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 sm:py-20 md:py-28" style={{ background: "#111820" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-24">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-6 sm:p-8 lg:p-10"
              >
                <div className="text-3xl mb-4">{cert.icon}</div>
                <h2 className="font-display font-bold text-xl sm:text-2xl text-white mb-3">{cert.title}</h2>
                <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed mb-5">{cert.description}</p>
                <ul className="space-y-2.5">
                  {cert.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#9CA3AF]">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={cert.color} strokeWidth="2" className="shrink-0 mt-0.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Control Points */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-14"
          >
            <h2 className="font-display font-bold text-2xl sm:text-4xl tracking-tight mb-4">
              Puntos de Control de{" "}
              <span className="text-gradient-cyan">Calidad</span>
            </h2>
            <p className="text-[#9CA3AF] text-sm sm:text-base max-w-2xl mx-auto">
              Cada etapa de producción cuenta con inspecciones rigurosas para asegurar el cumplimiento de especificaciones.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {controlPoints.map((cp, i) => (
              <motion.div
                key={cp.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass rounded-xl p-5 sm:p-6 flex items-start gap-4"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[#00F2FE]/20 to-[#4FACFE]/10 flex items-center justify-center font-display font-bold text-sm text-[#00F2FE]">
                  {cp.step}
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-white mb-1">{cp.title}</h3>
                  <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">{cp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-10 sm:mt-14">
            <Link href="/contacto" className="btn-primary text-sm sm:text-base inline-flex items-center gap-2">
              Solicitar Documentación de Calidad
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
