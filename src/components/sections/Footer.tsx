"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheckIcon, RecycleIcon } from "@/components/ui/ProcessIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative py-14 sm:py-16 border-t border-white/[0.05]"
      style={{ background: "#0a0f16" }}
      role="contentinfo"
    >
      <div className="container-pf">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-4 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <span className="grid place-items-center w-11 h-11 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                <Image
                  src="/images/logos/LOGO PROEMFLEX SIN FONDO.png"
                  alt=""
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display font-bold text-white text-lg tracking-tight">
                  PROEM<span className="text-gradient-cyan">FLEX</span>
                </span>
                <span className="mt-1 text-[0.62rem] text-[#9CA3AF] tracking-[0.22em] uppercase">
                  S.A.S. — Empaques Flexibles
                </span>
              </span>
            </Link>
            <p className="text-[#9CA3AF] text-sm leading-relaxed max-w-sm">
              Más de 33 años fabricando empaques flexibles con certificación BPM e ISO 9001 en
              Colombia.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="eco-badge">
                <RecycleIcon size={12} color="#fff" />
                100% Reciclable
              </span>
              <span className="trust-pill">
                <ShieldCheckIcon size={12} color="#9CA3AF" />
                BPM &amp; ISO 9001
              </span>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-3 pt-2">
              {/* Facebook — Activo */}
              <a
                href="https://www.facebook.com/people/Proemflex/61559880714111/"
                target="_blank"
                rel="noopener noreferrer"
                className="grid place-items-center w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] text-[#9CA3AF] hover:text-[#00F2FE] hover:border-[#00F2FE]/30 transition-all"
                aria-label="Facebook de PROEMFLEX"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram — TODO: Agregar URL cuando esté disponible */}
              {/* <a
                href="#" // TODO: Insertar URL de Instagram aquí
                target="_blank"
                rel="noopener noreferrer"
                className="grid place-items-center w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] text-[#9CA3AF] hover:text-[#00F2FE] hover:border-[#00F2FE]/30 transition-all"
                aria-label="Instagram de PROEMFLEX"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a> */}

              {/* LinkedIn — TODO: Agregar URL cuando esté disponible */}
              {/* <a
                href="#" // TODO: Insertar URL de LinkedIn aquí
                target="_blank"
                rel="noopener noreferrer"
                className="grid place-items-center w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] text-[#9CA3AF] hover:text-[#00F2FE] hover:border-[#00F2FE]/30 transition-all"
                aria-label="LinkedIn de PROEMFLEX"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a> */}
            </div>
          </div>

          {/* Sectores */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-semibold text-white text-sm mb-4">Sectores</h4>
            <ul className="space-y-2">
              {["Alimentos", "Farmacéuticos", "Textiles", "Aseo", "Comercial", "Cadena"].map((item) => (
                <li key={item}>
                  <Link
                    href="/sectores"
                    className="text-sm text-[#9CA3AF] hover:text-[#00F2FE] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-semibold text-white text-sm mb-4">Empresa</h4>
            <ul className="space-y-2">
              {[
                { label: "Nosotros", href: "/nosotros" },
                { label: "Capacidades", href: "/capacidades" },
                { label: "Calidad (BPM)", href: "/calidad" },
                { label: "Noticias", href: "/noticias" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#9CA3AF] hover:text-[#00F2FE] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="lg:col-span-4">
            <h4 className="font-display font-semibold text-white text-sm mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm text-[#9CA3AF]">
              <li className="flex items-start gap-2.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00F2FE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <a
                  href="https://www.google.com/maps/place/Proemflex+s.a.s/data=!4m2!3m1!1s0x0:0x563a8254d7a4470d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00F2FE] transition-colors"
                >
                  Cra. 69c #24-20, Bogotá, Colombia
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00F2FE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                <a
                  href="tel:+573115728520"
                  className="hover:text-[#00F2FE] transition-colors"
                >
                  +57 311 572 8520
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00F2FE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a
                  href="mailto:contacto@proemflex.com"
                  className="hover:text-[#00F2FE] transition-colors break-all"
                >
                  contacto@proemflex.com
                </a>
              </li>
              <li>
                <Link href="/contacto" className="inline-flex items-center gap-1.5 text-[#00F2FE] hover:text-white transition-colors font-display font-semibold text-sm mt-1">
                  Solicitar cotización
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="section-divider mt-10 mb-6" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#4B5563]"
        >
          <p>© {currentYear} PROEMFLEX S.A.S. Todos los derechos reservados.</p>
          <p>
            Diseñado y desarrollado por{" "}
            <a
              href="https://www.instagram.com/sp930718/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9CA3AF] hover:text-[#00F2FE] transition-colors font-semibold"
            >
              Steven Pedraza
            </a>
          </p>
          <p>
            Fabricado con precisión · Bogotá, Colombia
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
