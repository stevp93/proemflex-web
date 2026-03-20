"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface PageHeroProps {
  overline: string;
  title: string;
  titleHighlight?: string;  // highlighted part (cyan gradient)
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
      className="relative py-20 sm:py-28 md:py-36 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #111820 0%, #1a2332 50%, #0d1f2d 100%)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(circle at 70% 30%, rgba(0,242,254,0.07) 0%, transparent 60%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        {breadcrumb && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
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

        {/* Overline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-display text-xs sm:text-sm uppercase tracking-[0.3em] text-[#00F2FE] mb-3 sm:mb-4"
        >
          {overline}
        </motion.p>

        {/* Badge */}
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="inline-flex items-center gap-2 eco-badge mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            {badge}
          </motion.div>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight mb-4 sm:mb-6 max-w-4xl"
        >
          {title}{" "}
          {titleHighlight && (
            <span className="text-gradient-cyan">{titleHighlight}</span>
          )}
        </motion.h1>

        {/* Description */}
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#9CA3AF] text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl"
          >
            {description}
          </motion.p>
        )}
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#111820] to-transparent pointer-events-none" />
    </section>
  );
}
