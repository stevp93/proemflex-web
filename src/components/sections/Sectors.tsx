"use client";

import { motion } from "framer-motion";
import {
  FoodIcon,
  PharmaIcon,
  TextileIcon,
  RetailIcon,
  ChainIcon,
  CleaningIcon,
} from "@/components/ui/ProcessIcons";

const sectors = [
  {
    tag: "Sector Alimentario",
    title: "Alimentos",
    description:
      "Empaques flexibles de alta barrera para productos alimenticios. Certificados para contacto directo con alimentos bajo normativas BPM.",
    specs: ["Panela", "Leche larga vida", "Six-packs", "Barrera UV"],
    Icon: FoodIcon,
    accent: "#F59E0B",
  },
  {
    tag: "Sector Farmacéutico",
    title: "Laboratorios Farmacéuticos",
    description:
      "Empaque especializado para laboratorios farmacéuticos y dispositivos médicos. Estándares de higiene, trazabilidad y BPM garantizados.",
    specs: ["Medicamentos", "Dispositivos Médicos", "Empaques estériles", "Trazabilidad"],
    Icon: PharmaIcon,
    accent: "#EC4899",
  },
  {
    tag: "Sector Textil",
    title: "Textiles",
    description:
      "Películas y bolsas para la protección, empaque y presentación de productos textiles. Resistencia y transparencia para exhibición óptima.",
    specs: ["Bolsas camisa", "Película stretch", "Empaque al vacío", "Presentación"],
    Icon: TextileIcon,
    accent: "#8B5CF6",
  },
  {
    tag: "Líneas Comerciales",
    title: "Líneas Comerciales y Publicitarias",
    description:
      "Soluciones de empaque con impresión personalizada de alta calidad para campañas publicitarias, retail y presentación de marca.",
    specs: ["Impresión 6 colores", "Diseño personalizado", "Branding", "Retail"],
    Icon: RetailIcon,
    accent: "#06B6D4",
  },
  {
    tag: "Grandes Superficies",
    title: "Almacenes de Cadena",
    description:
      "Bolsas y empaques para grandes superficies y cadenas de distribución. Volúmenes altos con calidad constante y entregas programadas.",
    specs: ["Alto volumen", "Entregas programadas", "Estándares cadena", "Co-branding"],
    Icon: ChainIcon,
    accent: "#14B8A6",
  },
  {
    tag: "Sector Limpieza",
    title: "Aseo y Desinfección",
    description:
      "Fajillas, mangas y envoltorios para blanqueadores, detergentes y desinfectantes. Resistencia química y acabados visuales de alta calidad.",
    specs: ["Blanqueadores", "Detergentes", "Desinfectantes", "Fajillas & mangas"],
    Icon: CleaningIcon,
    accent: "#22D3EE",
  },
];

export default function Sectors() {
  return (
    <section
      id="sectores"
      className="section scroll-mt-20"
      style={{
        background: "linear-gradient(180deg, #111820 0%, #0e1a26 50%, #111820 100%)",
      }}
      aria-label="Soluciones de empaque por sector"
    >
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[600px] md:h-[900px] rounded-full pointer-events-none -z-10"
        style={{ background: "radial-gradient(ellipse, rgba(0,242,254,0.045) 0%, transparent 60%)" }}
      />

      <div className="container-pf">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {sectors.map((sector, index) => (
            <motion.article
              key={sector.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="rounded-xl sm:rounded-2xl p-5 sm:p-6 transition-all duration-500 hover:-translate-y-1"
              style={{
                background: `linear-gradient(180deg, ${sector.accent}10 0%, transparent 65%)`,
                border: `1px solid ${sector.accent}26`,
              }}
            >
              <span
                className="grid place-items-center w-12 h-12 rounded-xl mb-4"
                style={{ background: `${sector.accent}1f`, color: sector.accent }}
              >
                <sector.Icon size={26} />
              </span>

              <p
                className="font-display text-[0.65rem] uppercase tracking-[0.2em] mb-1"
                style={{ color: sector.accent }}
              >
                {sector.tag}
              </p>
              <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-2 sm:mb-3 tracking-tight">
                {sector.title}
              </h3>
              <p className="text-sm text-[#9CA3AF] leading-relaxed mb-4">
                {sector.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {sector.specs.map((spec) => (
                  <span
                    key={spec}
                    className="text-[0.65rem] sm:text-xs font-display px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-[#cbd5e1]"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
