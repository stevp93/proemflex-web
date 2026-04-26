"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/ProcessIcons";

const newsArticles = [
  {
    id: 1,
    tag: "Certificación",
    title: "Renovación Certificación ISO 9001:2015",
    excerpt:
      "Renovamos exitosamente nuestra certificación de gestión de calidad, reafirmando nuestro compromiso con los más altos estándares internacionales en cada proceso productivo.",
    date: "15 Ene 2026",
    readTime: "3 min",
    accent: "#00F2FE",
  },
  {
    id: 2,
    tag: "Innovación",
    title: "Nueva Línea de Impresión Flexográfica 6 Colores",
    excerpt:
      "Ampliamos nuestra capacidad con tecnología de punta en impresión de tambor central, permitiendo mayor definición, registro perfecto y acabados premium para branding de alto impacto.",
    date: "3 Dic 2025",
    readTime: "4 min",
    accent: "#10B981",
  },
  {
    id: 3,
    tag: "Sostenibilidad",
    title: "Compromiso con Empaques 100% Reciclables",
    excerpt:
      "Avanzamos en nuestra meta de producir soluciones de empaque que contribuyan a la economía circular, minimizando el impacto ambiental y promoviendo las 3R: Reducir, Reutilizar, Reciclar.",
    date: "18 Nov 2025",
    readTime: "5 min",
    accent: "#F59E0B",
  },
  {
    id: 4,
    tag: "Expansión",
    title: "Ampliación de Capacidad de Precorte",
    excerpt:
      "Incorporamos nueva maquinaria de precorte con capacidad ampliada de 20cm a 75cm de ancho, mejorando la precisión dimensional y reduciendo desperdicios en un 15%.",
    date: "5 Oct 2025",
    readTime: "3 min",
    accent: "#8B5CF6",
  },
  {
    id: 5,
    tag: "Alianza",
    title: "Nueva Alianza Estratégica con Proveedores Sostenibles",
    excerpt:
      "Establecemos alianzas con proveedores de materias primas recicladas y biodegradables, fortaleciendo nuestra cadena de suministro sostenible y ampliando nuestra oferta de productos ecoamigables.",
    date: "22 Sep 2025",
    readTime: "4 min",
    accent: "#EC4899",
  },
  {
    id: 6,
    tag: "Capacitación",
    title: "Programa de Formación Continua al 100% del Equipo",
    excerpt:
      "Completamos el programa de capacitación en calidad, BPM, trabajo en equipo y reducción de desperdicios, capacitando al 100% de nuestro equipo operativo y administrativo.",
    date: "10 Ago 2025",
    readTime: "3 min",
    accent: "#06B6D4",
  },
];

export default function NoticiasGrid() {
  return (
    <section
      className="section"
      style={{ background: "#111820" }}
      aria-label="Artículos de noticias"
    >
      <div className="container-pf">
        {/* Featured */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-14"
        >
          <article
            className="glass-card rounded-2xl p-6 sm:p-8 lg:p-10"
            style={{
              background: `linear-gradient(135deg, ${newsArticles[0].accent}12 0%, transparent 60%)`,
            }}
          >
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
              <div className="flex-1 space-y-4">
                <span
                  className="inline-block text-xs font-display font-semibold uppercase tracking-[0.2em] px-3 py-1 rounded-full"
                  style={{
                    background: `${newsArticles[0].accent}15`,
                    color: newsArticles[0].accent,
                    border: `1px solid ${newsArticles[0].accent}30`,
                  }}
                >
                  {newsArticles[0].tag}
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-white tracking-tight">
                  {newsArticles[0].title}
                </h3>
                <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed max-w-2xl">
                  {newsArticles[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-[#4B5563]">
                  <span>{newsArticles[0].date}</span>
                  <span aria-hidden>·</span>
                  <span>{newsArticles[0].readTime} de lectura</span>
                </div>
              </div>
              <Link href="/contacto" className="btn-outline shrink-0">
                Conocer más <ArrowRightIcon size={14} />
              </Link>
            </div>
          </article>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {newsArticles.slice(1).map((article, i) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group glass-card rounded-xl p-5 sm:p-6 flex flex-col transition-all duration-300 hover:border-white/15 hover:-translate-y-0.5"
              style={{
                background: `linear-gradient(180deg, ${article.accent}0d 0%, transparent 65%)`,
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className="text-[0.65rem] sm:text-xs font-display font-semibold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full"
                  style={{
                    background: `${article.accent}15`,
                    color: article.accent,
                  }}
                >
                  {article.tag}
                </span>
                <time className="text-[0.65rem] text-[#4B5563]">{article.date}</time>
              </div>

              <h3 className="font-display font-bold text-base sm:text-lg text-white mb-2 tracking-tight group-hover:text-[#00F2FE] transition-colors duration-200">
                {article.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed mb-4 flex-1">
                {article.excerpt}
              </p>

              <div className="flex items-center justify-between border-t border-white/[0.04] pt-3">
                <span className="text-[0.65rem] text-[#4B5563]">
                  {article.readTime} de lectura
                </span>
                <Link
                  href="/contacto"
                  className="text-xs text-[#00F2FE] hover:text-white transition-colors duration-200 font-display font-medium inline-flex items-center gap-1"
                >
                  Leer más
                  <ArrowRightIcon size={12} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 sm:mt-14 grid place-items-center"
        >
          <div className="glass-card rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-2xl w-full text-center">
            <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-2">
              ¿Quieres recibir nuestras novedades?
            </h3>
            <p className="text-sm text-[#9CA3AF] mb-5">
              Mantente al día con innovaciones, certificaciones y noticias de
              PROEMFLEX S.A.S.
            </p>
            <Link href="/contacto" className="btn-primary">
              Suscríbete a Novedades
              <ArrowRightIcon size={14} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
