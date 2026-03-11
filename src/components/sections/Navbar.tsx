"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Sectores", href: "#sectores" },
  { label: "Capacidades", href: "#capacidades" },
  { label: "Sostenibilidad", href: "#sostenibilidad" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-strong shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4"
        aria-label="Navegación principal"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group shrink-0" aria-label="PROEMFLEX - Inicio">
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-[#00F2FE] to-[#4FACFE] flex items-center justify-center font-display font-bold text-[#111820] text-base sm:text-lg transition-transform group-hover:scale-105">
            P
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#00F2FE] to-[#4FACFE] opacity-0 group-hover:opacity-40 blur-xl transition-opacity" />
          </div>
          <div className="hidden min-[400px]:block">
            <span className="font-display font-bold text-white text-base sm:text-lg tracking-tight">
              PROEM<span className="text-gradient-cyan">FLEX</span>
            </span>
            <p className="text-[0.55rem] sm:text-[0.6rem] text-[#9CA3AF] tracking-[0.2em] uppercase -mt-1">
              Cambreplast
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8" role="menubar">
          {navLinks.map((link) => (
            <li key={link.href} role="none">
              <a
                href={link.href}
                role="menuitem"
                className="font-display text-sm text-[#9CA3AF] hover:text-white transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-gradient-to-r after:from-[#00F2FE] after:to-[#4FACFE] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contacto"
            className="hidden lg:inline-flex btn-primary text-sm !py-2.5 !px-5"
          >
            Solicitar Cotización
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 -mr-2 group"
            aria-label="Menú de navegación"
            aria-expanded={mobileOpen}
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-white transition-colors group-hover:bg-[#00F2FE]"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-5 h-0.5 bg-white transition-colors group-hover:bg-[#00F2FE]"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-white transition-colors group-hover:bg-[#00F2FE]"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={mobileOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="lg:hidden overflow-hidden glass-strong"
      >
        <ul className="flex flex-col gap-1 px-4 sm:px-6 pb-6 pt-2">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, x: -20 }}
              animate={mobileOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: i * 0.05 }}
            >
              <a
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-display text-base text-[#9CA3AF] hover:text-white transition-colors block py-3 border-b border-[rgba(255,255,255,0.04)]"
              >
                {link.label}
              </a>
            </motion.li>
          ))}
          <li className="pt-3">
            <a
              href="#contacto"
              onClick={() => setMobileOpen(false)}
              className="btn-primary text-sm inline-block text-center w-full"
            >
              Solicitar Cotización
            </a>
          </li>
        </ul>
      </motion.div>
    </motion.header>
  );
}
