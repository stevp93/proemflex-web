"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Nosotros", href: "/nosotros" },
  { label: "Capacidades", href: "/capacidades" },
  { label: "Sectores", href: "/sectores" },
  { label: "Calidad (BPM)", href: "/calidad" },
  { label: "Noticias", href: "/noticias" },
  { label: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
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
          <img
            src="/images/logos/LOGO PROEMFLEX SIN FONDO.png"
            alt="PROEMFLEX"
            className="w-9 h-9 sm:w-10 sm:h-10 object-contain transition-transform group-hover:scale-105"
          />
          <div className="hidden min-[400px]:block">
            <span className="font-display font-bold text-white text-base sm:text-lg tracking-tight">
              PROEM<span className="text-gradient-cyan">FLEX</span>
            </span>
            <p className="text-[0.55rem] sm:text-[0.6rem] text-[#9CA3AF] tracking-[0.2em] uppercase -mt-1">
              S.A.S. — Empaques Flexibles
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden xl:flex items-center gap-5 2xl:gap-7" role="menubar">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href} role="none">
                <Link
                  href={link.href}
                  role="menuitem"
                  className={`font-display text-sm transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[1.5px] after:bg-gradient-to-r after:from-[#00F2FE] after:to-[#4FACFE] after:transition-all after:duration-300 hover:after:w-full ${isActive
                    ? "text-white after:w-full"
                    : "text-[#9CA3AF] hover:text-white after:w-0"
                    }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/contacto"
            className="hidden xl:inline-flex btn-primary text-sm !py-2.5 !px-5"
          >
            Solicitar Cotización
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden flex flex-col gap-1.5 p-2 -mr-2 group"
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
        className="xl:hidden overflow-hidden glass-strong"
      >
        <ul className="flex flex-col gap-1 px-4 sm:px-6 pb-6 pt-2">
          {navLinks.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={mobileOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={link.href}
                  className={`font-display text-base transition-colors block py-3 border-b border-[rgba(255,255,255,0.04)] ${isActive ? "text-[#00F2FE]" : "text-[#9CA3AF] hover:text-white"
                    }`}
                >
                  {link.label}
                </Link>
              </motion.li>
            );
          })}
          <li className="pt-3">
            <Link
              href="/contacto"
              className="btn-primary text-sm inline-block text-center w-full"
            >
              Solicitar Cotización
            </Link>
          </li>
        </ul>
      </motion.div>
    </motion.header>
  );
}
