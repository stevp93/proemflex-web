"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative py-12 sm:py-16 border-t border-[rgba(255,255,255,0.04)]"
      style={{ background: "#0a0f16" }}
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-[#00F2FE] to-[#4FACFE] flex items-center justify-center font-display font-bold text-[#111820] text-base sm:text-lg">
                C
              </div>
              <div>
                <span className="font-display font-bold text-white text-base sm:text-lg tracking-tight">
                  CAMBRE<span className="text-gradient-cyan">PLAST</span>
                </span>
                <p className="text-[0.55rem] sm:text-[0.6rem] text-[#9CA3AF] tracking-[0.2em] uppercase -mt-1">
                  S.A.S. — Empaques Flexibles
                </p>
              </div>
            </div>
            <p className="text-[#9CA3AF] text-xs sm:text-sm max-w-sm leading-relaxed">
              Más de 33 años fabricando empaques flexibles con certificación
              BPM e ISO 9001 en Colombia.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="eco-badge text-[0.6rem] sm:text-[0.65rem]">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                100% Reciclable
              </span>
              <span className="inline-flex items-center gap-1.5 text-[0.6rem] sm:text-[0.65rem] px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full glass text-[#9CA3AF] font-display font-semibold uppercase tracking-wider">
                BPM & ISO 9001
              </span>
            </div>
          </div>

          {/* Links — Sectors */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-3 sm:mb-4">
              Sectores
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {["Alimentos", "Farmacéuticos", "Textiles", "Aseo", "Comercial", "Cadena"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#sectores"
                      className="text-xs sm:text-sm text-[#9CA3AF] hover:text-[#00F2FE] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Links — Company */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-3 sm:mb-4">
              Empresa
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {[
                { label: "Nosotros", href: "#nosotros" },
                { label: "Capacidades", href: "#capacidades" },
                { label: "Calidad (BPM)", href: "#calidad" },
                { label: "Noticias", href: "#noticias" },
                { label: "Solicitar Cotización", href: "#contacto" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-xs sm:text-sm text-[#9CA3AF] hover:text-[#00F2FE] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-6 sm:mb-8" />

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4"
        >
          <p className="text-[0.65rem] sm:text-xs text-[#4B5563] text-center sm:text-left">
            © {currentYear} CAMBREPLAST S.A.S. Todos los derechos reservados.
          </p>
          <p className="text-[0.65rem] sm:text-xs text-[#4B5563]">
            Fabricado con precisión ·{" "}
            <a href="#hero" className="hover:text-[#00F2FE] transition-colors">
              Colombia 🇨🇴
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
