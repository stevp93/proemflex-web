"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Nosotros", href: "/nosotros" },
  { label: "Capacidades", href: "/capacidades" },
  { label: "Sectores", href: "/sectores" },
  { label: "Calidad", href: "/calidad" },
  { label: "Noticias", href: "/noticias" },
  { label: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled || mobileOpen
          ? "glass-strong shadow-[0_4px_30px_rgba(0,0,0,0.35)]"
          : "bg-transparent"
      }`}
      style={{ ["--nav-pad" as string]: scrolled ? "10px" : "16px" }}
    >
      <nav
        className="container-pf flex items-center justify-between h-[var(--nav-height)]"
        aria-label="Navegación principal"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group shrink-0"
          aria-label="PROEMFLEX — Inicio"
        >
          <span className="grid place-items-center w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.06] overflow-hidden">
            <Image
              src="/proemflex-web/images/logos/LOGO PROEMFLEX SIN FONDO.png"
              alt=""
              width={32}
              height={32}
              priority
              className="object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </span>
          <span className="hidden min-[420px]:flex flex-col leading-none">
            <span className="font-display font-bold text-white text-base sm:text-lg tracking-tight">
              PROEM<span className="text-gradient-cyan">FLEX</span>
            </span>
            <span className="mt-1 text-[0.6rem] sm:text-[0.62rem] text-[#9CA3AF] tracking-[0.22em] uppercase">
              Empaques Flexibles
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1" role="menubar">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href} role="none">
                <Link
                  href={link.href}
                  role="menuitem"
                  aria-current={isActive ? "page" : undefined}
                  className={`relative inline-flex items-center font-display text-[0.92rem] font-medium px-3 py-2 rounded-md transition-colors duration-200 ${
                    isActive
                      ? "text-white"
                      : "text-[#9CA3AF] hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    aria-hidden
                    className={`absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] origin-left transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right cluster */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/contacto"
            className="hidden lg:inline-flex btn-primary !text-[0.85rem] !py-2.5 !px-4"
          >
            Cotizar
          </Link>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden grid place-items-center w-10 h-10 rounded-md border border-white/10 hover:border-cyan-400/40 transition-colors"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <span className="relative w-5 h-5 grid place-items-center">
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="absolute block w-5 h-0.5 bg-white rounded-full"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.15 }}
                className="absolute block w-5 h-0.5 bg-white rounded-full"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 5 }}
                transition={{ duration: 0.2 }}
                className="absolute block w-5 h-0.5 bg-white rounded-full"
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <motion.div
        id="mobile-menu"
        initial={false}
        animate={mobileOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.28, ease: "easeInOut" }}
        className="lg:hidden overflow-hidden border-t border-white/[0.05]"
      >
        <ul className="container-pf py-4 flex flex-col gap-1">
          {navLinks.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, x: -16 }}
                animate={mobileOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
                transition={{ delay: i * 0.04 }}
              >
                <Link
                  href={link.href}
                  className={`block font-display font-medium text-[0.95rem] py-3 px-3 rounded-md transition-colors ${
                    isActive
                      ? "text-white bg-white/[0.05]"
                      : "text-[#cbd5e1] hover:text-white hover:bg-white/[0.03]"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.li>
            );
          })}
          <li className="pt-2">
            <Link href="/contacto" className="btn-primary w-full justify-center">
              Solicitar Cotización
            </Link>
          </li>
        </ul>
      </motion.div>
    </motion.header>
  );
}
