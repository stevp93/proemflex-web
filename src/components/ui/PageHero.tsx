"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface PageHeroProps {
  overline: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  badge?: string;
  breadcrumb?: { label: string; href: string };
}

export default function PageHero({
  overline,
  title,
  titleHighlight,
  description,
  badge,
  breadcrumb,
}: PageHeroProps) {
  return (
    <section
      className="relative pt-16 pb-20 sm:pt-24 sm:pb-28 md:pt-28 md:pb-32 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #111820 0%, #1a2332 50%, #0d1f2d 100%)" }}
      aria-label={overline}
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div
        aria-hidden
        className="absolute top-0 right-0 w-[480px] h-[480px] pointer-events-none -z-10"
        style={{ background: "radial-gradient(circle at 70% 30%, rgba(0,242,254,0.08) 0%, transparent 60%)" }}
      />

      <div className="container-pf relative z-10 flex flex-col items-center text-center">
        {breadcrumb && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 mb-5 text-xs sm:text-sm"
          >
            <Link href="/" className="text-[#4B5563] hover:text-[#9CA3AF] transition-colors font-display">
              Inicio
            </Link>
            <span className="text-[#4B5563]">/</span>
            <span className="text-[#9CA3AF] font-display">{breadcrumb.label}</span>
          </motion.div>
        )}

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow mb-3 sm:mb-4"
        >
          {overline}
        </motion.p>

        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mb-4"
          >
            <span className="eco-badge">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              {badge}
            </span>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="h-display text-[2.25rem] sm:text-5xl md:text-[3.4rem] lg:text-6xl mb-4 sm:mb-6 max-w-4xl"
        >
          {title}{" "}
          {titleHighlight && (
            <span className="text-gradient-cyan">{titleHighlight}</span>
          )}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#9CA3AF] text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl"
          >
            {description}
          </motion.p>
        )}
      </div>

      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#111820] to-transparent pointer-events-none"
      />
    </section>
  );
}
