"use client";

import { motion } from "framer-motion";
import {
  ShieldCheckIcon,
  CertificateIcon,
  RecycleIcon,
  FactoryIcon,
} from "@/components/ui/ProcessIcons";

// ── LÍNEA DE TIEMPO/TRAYECTORIA: Para cambiar los eventos de la trayectoria, edita este array con objetos que tengan: year (año o "—" o "Hoy"), title (nombre del evento), desc (descripción) ──
const timeline = [
  { year: "1989", title: "Origen", desc: "Nace Plásticos La Hogareña S.A.S. con la iniciativa de fabricar y comercializar empaques plásticos para pequeños negocios, dando inicio a una trayectoria en el sector." },
  { year: "—", title: "Crecimiento industrial", desc: "La empresa evoluciona, incorporando procesos como extrusión y fortaleciendo su infraestructura productiva para responder a la demanda del mercado." },
  { year: "—", title: "Consolidación", desc: "Gracias a su compromiso con la calidad, La Hogareña logra posicionarse como un referente en empaques flexibles a nivel industrial." },
  { year: "—", title: "Evolución", desc: "Se fortalecen áreas clave como impresión, corte, sellado y laminación, permitiendo ofrecer soluciones más completas y eficientes." },
  { year: "—", title: "Alianza estratégica — Nace Proemflex", desc: "Surge Proemflex como la integración entre Plásticos La Hogareña S.A.S. y Cambreplast, uniendo experiencia, tecnología y capacidad productiva." },
  { year: "Hoy", title: "Proyección y liderazgo", desc: "Proemflex continúa creciendo como aliado estratégico en empaques flexibles, ofreciendo soluciones innovadoras, sostenibles y con cobertura a nivel nacional." },
];

// ── VALORES CORPORATIVOS: Para cambiar los 4 valores, edita este array con objetos que tengan: title (nombre del valor), desc (descripción), Icon (icono), color (código hexadecimal del color) ──
const values = [
  { title: "Calidad", desc: "Procesos con altos estándares y concepto favorable de la Secretaría que garantizan la excelencia en cada producto.", Icon: CertificateIcon, color: "#00F2FE" },
  { title: "Innovación", desc: "Inversión continua en tecnología de punta para ofrecer las mejores soluciones de empaque.", Icon: FactoryIcon, color: "#EC4899" },
  { title: "Responsabilidad", desc: "Compromiso con la sostenibilidad ambiental y la economía circular.", Icon: RecycleIcon, color: "#10B981" },
  { title: "Servicio", desc: "Acompañamiento integral desde el diseño hasta la entrega, con tiempos de respuesta ágiles.", Icon: ShieldCheckIcon, color: "#F59E0B" },
];

export default function NosotrosContent() {
  return (
    <div>
      {/* Misión / Visión */}
      <section className="section" style={{ background: "#111820" }}>
        <div className="container-pf">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-2xl p-6 sm:p-8 lg:p-10"
            >
              <span className="grid place-items-center w-12 h-12 rounded-xl bg-[#00F2FE]/10 text-[#00F2FE] mb-4">
                <CertificateIcon size={26} />
              </span>
              {/* ── MISIÓN: Aquí cambio el texto de la misión de la empresa ── */}
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-4">Misión</h2>
              <p className="text-[#9CA3AF] text-sm sm:text-base leading-relaxed">
                Fabricar empaques flexibles de alta calidad que satisfagan las necesidades de
                nuestros clientes industriales, operando bajo estándares de Buenas Prácticas
                de Fabricación (BPF), con un firme compromiso con la sostenibilidad
                ambiental y el desarrollo continuo de nuestro equipo humano.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card rounded-2xl p-6 sm:p-8 lg:p-10"
            >
              <span className="grid place-items-center w-12 h-12 rounded-xl bg-[#10B981]/10 text-[#10B981] mb-4">
                <ShieldCheckIcon size={26} color="#10B981" />
              </span>
              {/* ── VISIÓN: Aquí cambio el texto de la visión de la empresa ── */}
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-4">Visión</h2>
              <p className="text-[#9CA3AF] text-sm sm:text-base leading-relaxed">
                Ser reconocidos como la empresa líder en empaques flexibles en Colombia,
                distinguidos por la innovación tecnológica, la excelencia operativa y el
                compromiso con prácticas de manufactura que garanticen la inocuidad y
                sostenibilidad de nuestros productos.
              </p>
            </motion.div>
          </div>

          {/* ── TÍTULO VALORES: Encabezado de la sección de valores corporativos ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center mb-10 sm:mb-12"
          >
            <h2 className="h-section text-3xl sm:text-4xl">
              Nuestros <span className="text-gradient-cyan">valores</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-card rounded-xl p-5 sm:p-6 grid place-items-center text-center gap-3"
              >
                <span
                  className="grid place-items-center w-12 h-12 rounded-xl"
                  style={{ background: `${v.color}1f`, color: v.color }}
                >
                  <v.Icon size={26} color={v.color} />
                </span>
                <h3 className="font-display font-bold text-lg text-white">{v.title}</h3>
                <p className="text-sm text-[#9CA3AF] leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        className="section"
        style={{ background: "linear-gradient(180deg, #111820 0%, #0e1520 50%, #111820 100%)" }}
      >
        <div className="container-pf max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center mb-10 sm:mb-14"
          >
            {/* ── TÍTULO TRAYECTORIA: Encabezado del timeline ── */}
            <h2 className="h-section text-3xl sm:text-4xl">
              Nuestra <span className="text-gradient-cyan">trayectoria</span>
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00F2FE]/30 via-[#00F2FE]/10 to-transparent" />

            {timeline.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={`relative flex items-start gap-4 sm:gap-8 mb-8 sm:mb-10 ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 hidden sm:block ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                  <div className="glass-card rounded-xl p-5">
                    <h3 className="font-display font-bold text-lg text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-[#9CA3AF] leading-relaxed">{item.desc}</p>
                  </div>
                </div>

                <div className="shrink-0 relative z-10">
                  <div className="grid place-items-center w-9 h-9 rounded-full bg-[#111820] border-2 border-[#00F2FE]">
                    <span className="font-display font-bold text-[0.6rem] text-[#00F2FE]">
                      {item.year === "—" ? "•" : item.year.length <= 3 ? item.year : item.year.slice(-2)}
                    </span>
                  </div>
                </div>

                <div className="flex-1 sm:hidden">
                  <div className="glass-card rounded-xl p-4">
                    <p className="font-display text-xs text-[#00F2FE] font-semibold mb-1">{item.year === "—" ? "" : item.year}</p>
                    <h3 className="font-display font-bold text-base text-white mb-1">{item.title}</h3>
                    <p className="text-xs text-[#9CA3AF] leading-relaxed">{item.desc}</p>
                  </div>
                </div>

                <div className={`flex-1 hidden sm:flex items-center ${i % 2 === 0 ? "" : "justify-end"}`}>
                  <span className="font-display font-bold text-2xl text-gradient-cyan">{item.year === "—" ? "" : item.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
