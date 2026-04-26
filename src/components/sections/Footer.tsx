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
          <div className="sm:col-span-2 lg:col-span-5 flex flex-col gap-4">
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
          </div>

          {/* Sectors */}
          <div className="lg:col-span-3">
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
          <div className="lg:col-span-2">
            <h4 className="font-display font-semibold text-white text-sm mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-[#9CA3AF]">
              <li>
                <Link href="/contacto" className="hover:text-[#00F2FE] transition-colors">
                  Solicitar cotización
                </Link>
              </li>
              <li>
                <a href="mailto:contacto@proemflex.com" className="hover:text-[#00F2FE] transition-colors break-all">
                  contacto@proemflex.com
                </a>
              </li>
              <li>Bogotá, Colombia</li>
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
            Fabricado con precisión ·{" "}
            <Link href="/" className="hover:text-[#00F2FE] transition-colors">
              Colombia
            </Link>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
