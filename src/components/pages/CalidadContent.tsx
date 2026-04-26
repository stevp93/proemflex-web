"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CertificateIcon, ShieldCheckIcon, CheckIcon, ArrowRightIcon } from "@/components/ui/ProcessIcons";

const certifications = [
  {
    title: "ISO 9001:2015",
    description:
      "Sistema de Gestión de Calidad certificado internacionalmente. Garantiza procesos estandarizados, mejora continua y satisfacción del cliente en cada orden de producción.",
    items: [
      "Auditorías internas periódicas",
      "Control estadístico de procesos",
      "Gestión documental integrada",
      "Seguimiento de indicadores KPI",
    ],
    Icon: CertificateIcon,
    color: "#00F2FE",
  },
  {
    title: "BPM — Buenas Prácticas de Manufactura",
    description:
      "Estándares de manufactura que aseguran la inocuidad, trazabilidad y calidad de los empaques en contacto con alimentos y productos farmacéuticos.",
    items: [
      "Control de contaminación cruzada",
      "Trazabilidad lote a lote",
      "Personal capacitado en higiene",
      "Inspección visual y dimensional",
    ],
    Icon: ShieldCheckIcon,
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
      {/* Certifications */}
      <section
        className="section"
        style={{ background: "#111820" }}
        aria-label="Certificaciones de calidad"
      >
        <div className="container-pf">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 sm:p-8 lg:p-10"
              >
                <span
                  className="grid place-items-center w-12 h-12 rounded-xl mb-5"
                  style={{ background: `${cert.color}1a`, color: cert.color }}
                >
                  <cert.Icon size={26} color={cert.color} />
                </span>
                <h2 className="font-display font-bold text-xl sm:text-2xl text-white mb-3">
                  {cert.title}
                </h2>
                <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed mb-5">
                  {cert.description}
                </p>
                <ul className="space-y-2.5" role="list">
                  {cert.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#9CA3AF]">
                      <span className="shrink-0 mt-0.5" style={{ color: cert.color }}>
                        <CheckIcon size={16} color={cert.color} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Control Points */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="grid place-items-center text-center max-w-2xl mx-auto mb-10 sm:mb-14"
          >
            <p className="eyebrow mb-3">Control de procesos</p>
            <h2 className="h-section text-3xl sm:text-4xl md:text-5xl">
              Puntos de Control de{" "}
              <span className="text-gradient-cyan">Calidad</span>
            </h2>
            <p className="mt-4 text-[#9CA3AF] text-base sm:text-lg leading-relaxed">
              Cada etapa de producción cuenta con inspecciones rigurosas para asegurar el
              cumplimiento de especificaciones.
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
                className="glass-card rounded-xl p-5 sm:p-6 flex items-start gap-4 transition-colors duration-300 hover:border-white/15"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[#00F2FE]/20 to-[#4FACFE]/10 grid place-items-center font-display font-bold text-sm text-[#00F2FE]">
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
          <div className="mt-10 sm:mt-14 grid place-items-center">
            <Link href="/contacto" className="btn-primary">
              Solicitar Documentación de Calidad
              <ArrowRightIcon size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
