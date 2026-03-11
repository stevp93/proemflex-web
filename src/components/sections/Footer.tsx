"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative py-16 border-t border-[rgba(255,255,255,0.04)]"
      style={{ background: "#0a0f16" }}
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00F2FE] to-[#4FACFE] flex items-center justify-center font-display font-bold text-[#111820] text-lg">
                P
              </div>
              <div>
                <span className="font-display font-bold text-white text-lg tracking-tight">
                  PROEM<span className="text-gradient-cyan">FLEX</span>
                </span>
                <p className="text-[0.6rem] text-[#9CA3AF] tracking-[0.2em] uppercase -mt-1">
                  S.A.S. | Cambreplast
                </p>
              </div>
            </div>
            <p className="text-[#9CA3AF] text-sm max-w-sm leading-relaxed">
              Más de 33 años fabricando empaques flexibles 100% reciclables con
              certificación ISO 9001 en Colombia.
            </p>
            <div className="flex gap-2">
              <span className="eco-badge text-[0.65rem]">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                100% Reciclable
              </span>
              <span className="inline-flex items-center gap-1.5 text-[0.65rem] px-3 py-1.5 rounded-full glass text-[#9CA3AF] font-display font-semibold uppercase tracking-wider">
                ISO 9001
              </span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-4">
              Sectores
            </h4>
            <ul className="space-y-2.5">
              {["Alimentos", "Construcción", "Laboratorios", "Aseo & Hogar"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#sectores"
                      className="text-sm text-[#9CA3AF] hover:text-[#00F2FE] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-4">
              Empresa
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Capacidades", href: "#capacidades" },
                { label: "Sostenibilidad", href: "#sostenibilidad" },
                { label: "Solicitar Cotización", href: "#contacto" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-[#9CA3AF] hover:text-[#00F2FE] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-8" />

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-[#4B5563]">
            © {currentYear} PROEMFLEX S.A.S. Todos los derechos reservados.
          </p>
          <p className="text-xs text-[#4B5563]">
            Made with precision ·{" "}
            <a href="#hero" className="hover:text-[#00F2FE] transition-colors">
              Colombia
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
