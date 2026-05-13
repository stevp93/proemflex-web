"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CertificateIcon, ShieldCheckIcon, CheckIcon, ArrowRightIcon } from "@/components/ui/ProcessIcons";

// ── CERTIFICACIONES: Para agregar o cambiar certificaciones, edita este array con objetos que tengan: title (nombre), description (descripción), items (array de puntos), Icon (icono), color (color hexadecimal) ──
const certifications = [
  {
    title: "BPF — Buenas Prácticas de Fabricación",
    description:
      "Estándares de fabricación que aseguran la inocuidad, trazabilidad y calidad de los empaques en contacto con alimentos y productos farmacéuticos. Contamos con el concepto favorable de la Secretaría.",
    items: [
      "Control de contaminación cruzada",
      "Trazabilidad lote a lote",
      "Personal capacitado en higiene",
      "Concepto favorable de la Secretaría",
    ],
    Icon: ShieldCheckIcon,
    color: "#10B981",
  },
];

// ── PUNTOS DE CONTROL DE CALIDAD: Para cambiar los 6 puntos de control, edita este array con objetos que tengan: title (nombre del punto), desc (descripción), step (número) ──
const controlPoints = [
  { title: "Materia Prima", desc: "Verificamos la calidad de resinas y tintas desde su ingreso, asegurando que cumplan con los estándares requeridos.", step: "01" },
  { title: "Extrusión", desc: "Controlamos variables clave como calibre, resistencia y uniformidad para garantizar un material base de alta calidad.", step: "02" },
  { title: "Impresión", desc: "Supervisamos registro, color y adherencia, asegurando acabados consistentes y una correcta presentación del producto.", step: "03" },
  { title: "Sellado", desc: "Realizamos pruebas de hermeticidad y resistencia para garantizar empaques seguros y funcionales.", step: "04" },
  { title: "Producto Terminado", desc: "Inspeccionamos el producto final antes de su despacho, verificando calidad, presentación y cumplimiento de especificaciones.", step: "05" },
  { title: "Despacho", desc: "Aseguramos trazabilidad, documentación y condiciones óptimas de entrega para garantizar un servicio confiable.", step: "06" },
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
          <div className="flex flex-col items-center gap-6 sm:gap-8 mb-16 sm:mb-20">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 sm:p-8 lg:p-10 w-full max-w-2xl"
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

          {/* ── TÍTULO PUNTOS DE CONTROL: Encabezado de los 6 puntos de calidad ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="container-pf grid place-items-center text-center max-w-3xl mx-auto mb-14 sm:mb-16 px-4"
          >
            <p className="eyebrow mb-3">Control de procesos</p>
            <h2 className="h-section text-3xl sm:text-4xl md:text-5xl">
              Puntos de Control de{" "}
              <span className="text-gradient-cyan whitespace-nowrap">Calidad</span>
            </h2>
            <p className="mt-4 text-[#9CA3AF] text-base sm:text-lg leading-relaxed text-center max-w-2xl mx-auto">
              Cada etapa de producción cuenta con inspecciones rigurosas para asegurar el
              cumplimiento de especificaciones.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
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
          <div className="mt-20 sm:mt-24 mb-4 grid place-items-center">
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
