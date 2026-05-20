"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
                En Proemflex S.A.S., fabricamos y comercializamos productos plásticos
                de alta calidad, ofreciendo soluciones innovadoras que responden a las
                necesidades de nuestros clientes, mientras nos comprometemos
                firmemente con la sostenibilidad. A través de la adopción de tecnologías
                avanzadas y el enfoque en las tres R (Reducir, Reutilizar, Reciclar),
                optimizamos el uso de recursos, minimizamos el impacto ambiental y
                promovemos una economía circular. Nuestro equipo experto trabaja
                continuamente en la mejora de procesos para ofrecer un servicio
                excepcional, contribuyendo al uso responsable del plástico y a la
                protección del medio ambiente.
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
                Para el año 2028, ser una empresa líder en la fabricación y
                comercialización de productos plásticos sostenibles e innovadores,
                reconocida a nivel internacional por nuestra contribución al desarrollo de
                soluciones que respeten el medio ambiente y promuevan una economía
                circular. Aspiramos a expandir nuestra presencia en América Latina,
                ofreciendo una amplia gama de productos accesibles y de alta calidad, que
                impulsen un crecimiento rentable y responsable. En Proemflex S.A.S.,
                buscamos no solo satisfacer las necesidades de nuestros clientes, sino
                también marcar la diferencia en la preservación del planeta a través de
                tecnologías avanzadas y prácticas sostenibles.
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
                className={`relative flex items-start gap-4 sm:gap-8 mb-8 sm:mb-10 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
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

      {/* ── ALIANZA ESTRATÉGICA: Sección que muestra la integración entre PROEMFLEX y su socio (Cambreplast). Para cambiar los logos, reemplaza los archivos en /public/images/logos/ ── */}
      <section
        className="section"
        style={{ background: "linear-gradient(180deg, #111820 0%, #0d1f2d 50%, #111820 100%)" }}
        aria-label="Alianza estratégica PROEMFLEX"
      >
        <div className="container-pf max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="grid place-items-center text-center mb-10 sm:mb-14"
          >
            <p className="eyebrow mb-3">Alianza estratégica</p>
            <h2 className="h-section text-3xl sm:text-4xl md:text-5xl text-center">
              Dos compañías,{" "}
              <span className="text-gradient-cyan whitespace-nowrap">una sola fuerza</span>
            </h2>
            <p className="mt-4 text-[#9CA3AF] text-base sm:text-lg leading-relaxed text-center max-w-2xl mx-auto">
              PROEMFLEX nace de la integración entre{" "}
              <span className="text-white font-semibold">Plásticos La Hogareña S.A.S.</span>{" "}
              y <span className="text-white font-semibold">Cambreplast</span>, uniendo
              experiencia, tecnología y capacidad productiva para ofrecer empaques
              flexibles con altos estándares de calidad a la industria.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-8 sm:gap-10 md:gap-12">
              {/* PROEMFLEX */}
              <div className="flex flex-col items-center text-center gap-4">
                <div className="relative w-full max-w-[220px] aspect-[3/2] grid place-items-center">
                  <Image
                    src="/proemflex-web/images/logos/LOGO PROEMFLEX SIN FONDO.png"
                    alt="Logo PROEMFLEX S.A.S."
                    width={440}
                    height={300}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="font-display text-[0.7rem] sm:text-xs uppercase tracking-[0.22em] text-[#9CA3AF]">
                  PROEMFLEX S.A.S.
                </p>
              </div>

              {/* Separator */}
              <div className="flex md:flex-col items-center justify-center gap-3 text-[#00F2FE]">
                <span className="hidden md:block w-px h-12 bg-gradient-to-b from-transparent via-[#00F2FE]/40 to-transparent" />
                <span className="grid place-items-center w-10 h-10 rounded-full bg-[#00F2FE]/15 border border-[#00F2FE]/30">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
                <span className="hidden md:block w-px h-12 bg-gradient-to-b from-[#00F2FE]/40 via-transparent to-transparent" />
              </div>

              {/* Cambreplast — Socio */}
              <div className="flex flex-col items-center text-center gap-4">
                <div className="relative w-full max-w-[220px] aspect-[3/2] grid place-items-center">
                  <Image
                    src="/proemflex-web/images/logos/LOGO 2018 GRANDE SIN FONDO.png"
                    alt="Logo Cambreplast — Socio estratégico de PROEMFLEX"
                    width={440}
                    height={300}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="font-display text-[0.7rem] sm:text-xs uppercase tracking-[0.22em] text-[#9CA3AF]">
                  Socio estratégico
                </p>
              </div>
            </div>

            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {[
                { value: "30+", label: "años de experiencia" },
                { value: "2", label: "plantas productivas" },
                { value: "100%", label: "cobertura nacional" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center text-center gap-1">
                  <span className="font-display font-bold text-2xl sm:text-3xl text-gradient-cyan">
                    {stat.value}
                  </span>
                  <span className="font-display text-[0.7rem] sm:text-xs uppercase tracking-[0.18em] text-[#9CA3AF]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
