"use client";

import { motion } from "framer-motion";

const timeline = [
  { year: "1993", title: "Fundación", desc: "Nace CAMBREPLAST S.A.S. con la visión de producir empaques flexibles de calidad para la industria colombiana." },
  { year: "2002", title: "Certificación ISO 9001", desc: "Obtenemos la certificación internacional de gestión de calidad, validando nuestros procesos y estándares." },
  { year: "2010", title: "Ampliación de Planta", desc: "Duplicamos nuestra capacidad de producción con nuevas líneas de extrusión e impresión de última generación." },
  { year: "2018", title: "Implementación BPM", desc: "Adoptamos Buenas Prácticas de Manufactura para garantizar la inocuidad en empaques alimentarios y farmacéuticos." },
  { year: "2024", title: "Innovación Continua", desc: "Inversión en tecnología de impresión flexográfica de 6 colores con tambor central y sellado automático de alta velocidad." },
  { year: "2026", title: "33+ Años de Liderazgo", desc: "Más de tres décadas sirviendo a la industria colombiana con empaques flexibles de precisión y calidad certificada." },
];

const values = [
  { title: "Calidad", desc: "Procesos certificados ISO 9001 y BPM que garantizan la excelencia en cada producto.", icon: "🏅" },
  { title: "Innovación", desc: "Inversión continua en tecnología de punta para ofrecer las mejores soluciones de empaque.", icon: "💡" },
  { title: "Responsabilidad", desc: "Compromiso con la sostenibilidad ambiental y la economía circular.", icon: "🌿" },
  { title: "Servicio", desc: "Acompañamiento integral desde el diseño hasta la entrega, con tiempos de respuesta ágiles.", icon: "🤝" },
];

const anim = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function NosotrosContent() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section
        className="relative py-16 sm:py-24 md:py-32 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #111820 0%, #1a2332 40%, #0d1f2d 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="font-display text-xs sm:text-sm uppercase tracking-[0.3em] text-[#00F2FE] mb-4">
              Nosotros
            </p>
            <h1 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight mb-6">
              Más de 33 Años{" "}
              <span className="text-gradient-cyan">Fabricando Confianza</span>
            </h1>
            <p className="text-[#9CA3AF] text-base sm:text-lg md:text-xl leading-relaxed">
              CAMBREPLAST S.A.S. es una empresa colombiana especializada en la fabricación de
              empaques flexibles para múltiples sectores industriales. Con más de tres décadas
              de experiencia, nos hemos consolidado como un referente en calidad, innovación y
              servicio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Misión & Visión */}
      <section className="py-16 sm:py-20 md:py-28" style={{ background: "#111820" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-2xl p-6 sm:p-8 lg:p-10"
            >
              <div className="w-12 h-12 rounded-xl bg-[rgba(0,242,254,0.1)] flex items-center justify-center mb-4 text-2xl">
                🎯
              </div>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-4">Misión</h2>
              <p className="text-[#9CA3AF] text-sm sm:text-base leading-relaxed">
                Fabricar empaques flexibles de alta calidad que satisfagan las necesidades de
                nuestros clientes industriales, operando bajo estándares de Buenas Prácticas
                de Manufactura (BPM) e ISO 9001, con un firme compromiso con la sostenibilidad
                ambiental y el desarrollo continuo de nuestro equipo humano.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass rounded-2xl p-6 sm:p-8 lg:p-10"
            >
              <div className="w-12 h-12 rounded-xl bg-[rgba(0,242,254,0.1)] flex items-center justify-center mb-4 text-2xl">
                🔭
              </div>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-4">Visión</h2>
              <p className="text-[#9CA3AF] text-sm sm:text-base leading-relaxed">
                Ser reconocidos como la empresa líder en empaques flexibles en Colombia,
                distinguidos por la innovación tecnológica, la excelencia operativa y el
                compromiso con prácticas de manufactura que garanticen la inocuidad y
                sostenibilidad de nuestros productos.
              </p>
            </motion.div>
          </div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-14"
          >
            <h2 className="font-display font-bold text-2xl sm:text-4xl tracking-tight mb-4">
              Nuestros <span className="text-gradient-cyan">Valores</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                custom={i}
                variants={anim}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="glass rounded-xl p-5 sm:p-6 text-center"
              >
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-display font-bold text-lg text-white mb-2">{v.title}</h3>
                <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        className="py-16 sm:py-20 md:py-28"
        style={{ background: "linear-gradient(180deg, #111820 0%, #0e1520 50%, #111820 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="font-display font-bold text-2xl sm:text-4xl tracking-tight mb-4">
              Nuestra <span className="text-gradient-cyan">Trayectoria</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00F2FE]/30 via-[#00F2FE]/10 to-transparent" />

            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative flex items-start gap-4 sm:gap-8 mb-8 sm:mb-10 ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 hidden sm:block ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                  <div className="glass rounded-xl p-5">
                    <h3 className="font-display font-bold text-lg text-white mb-1">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">{item.desc}</p>
                  </div>
                </div>

                {/* Dot */}
                <div className="shrink-0 relative z-10">
                  <div className="w-8 h-8 rounded-full bg-[#111820] border-2 border-[#00F2FE] flex items-center justify-center">
                    <span className="font-display font-bold text-[0.5rem] text-[#00F2FE]">
                      {item.year.slice(-2)}
                    </span>
                  </div>
                </div>

                {/* Mobile card */}
                <div className="flex-1 sm:hidden">
                  <div className="glass rounded-xl p-4">
                    <p className="font-display text-xs text-[#00F2FE] font-semibold mb-1">{item.year}</p>
                    <h3 className="font-display font-bold text-base text-white mb-1">{item.title}</h3>
                    <p className="text-xs text-[#9CA3AF] leading-relaxed">{item.desc}</p>
                  </div>
                </div>

                <div className={`flex-1 hidden sm:flex items-center ${i % 2 === 0 ? "" : "justify-end"}`}>
                  <span className="font-display font-bold text-xl text-gradient-cyan">{item.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
