"use client";

import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "573001234567"; // Actualizar con número real

const products = [
  {
    title: "Bolsas de Polietileno",
    description: "Bolsas de alta y baja densidad en diversas medidas y calibres para uso industrial y comercial.",
    specs: "Calibres: 1 — 6 · Anchos: 3 — 100cm",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00F2FE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
  },
  {
    title: "Película Stretch",
    description: "Película extensible para embalaje y protección de productos en pallets y tarimas.",
    specs: "Manual e industrial · Alta adherencia",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00F2FE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Bolsas Impresas",
    description: "Bolsas con impresión flexográfica hasta 6 colores para branding y presentación de producto.",
    specs: "Hasta 6 colores · Registro perfecto",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00F2FE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3v18" />
        <path d="M18 3v18" />
        <path d="M6 8h12" />
        <path d="M6 16h12" />
        <rect x="6" y="8" width="12" height="8" rx="1" />
      </svg>
    ),
  },
  {
    title: "Fajillas y Mangas",
    description: "Mangas y fajillas termoencogibles para envases, botellas y empaques unitarios.",
    specs: "Termoencogible · Alta calidad visual",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00F2FE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Bolsas de Alta Barrera",
    description: "Empaques multicapa con barrera a gases, humedad y UV para productos sensibles.",
    specs: "Multicapa · Laminados · Barrera UV",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00F2FE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M12 8v4" />
        <path d="M12 16h.01" />
      </svg>
    ),
  },
  {
    title: "Sacos Industriales",
    description: "Sacos de alta resistencia para productos en polvo y granulados de hasta 50kg.",
    specs: "Hasta 50kg · Alta resistencia mecánica",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00F2FE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h8" />
        <rect x="10" y="2" width="12" height="12" rx="2" />
      </svg>
    ),
  },
];

export default function ProductBand() {
  return (
    <section
      id="productos"
      className="relative py-16 sm:py-20 md:py-28 overflow-hidden scroll-mt-20"
      style={{
        background: "linear-gradient(180deg, #111820 0%, #0d1520 50%, #111820 100%)",
      }}
      aria-label="Banda de Productos"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="font-display text-xs sm:text-sm uppercase tracking-[0.25em] text-[#00F2FE] mb-3">
            Catálogo de Productos
          </p>
          <h2 className="font-display font-bold text-2xl sm:text-4xl md:text-5xl tracking-tight mb-4">
            Nuestras{" "}
            <span className="text-gradient-cyan">Soluciones de Empaque</span>
          </h2>
          <p className="text-[#9CA3AF] text-sm sm:text-base max-w-2xl mx-auto">
            Línea completa de productos de empaque flexible adaptados a las necesidades de cada industria.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group glass rounded-xl sm:rounded-2xl p-5 sm:p-6 flex flex-col transition-all duration-300 hover:border-[rgba(0,242,254,0.2)] hover:bg-[rgba(0,242,254,0.03)]"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[rgba(0,242,254,0.08)] flex items-center justify-center mb-4">
                {product.icon}
              </div>

              {/* Content */}
              <h3 className="font-display font-bold text-lg text-white mb-2 tracking-tight">
                {product.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed mb-3 flex-1">
                {product.description}
              </p>

              {/* Specs */}
              <p className="text-[0.65rem] sm:text-xs text-[#6B7280] font-display uppercase tracking-wider mb-4">
                {product.specs}
              </p>

              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hola, estoy interesado en cotizar: ${product.title}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-display font-semibold text-white bg-[#25D366] hover:bg-[#20BD5C] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Cotizar por WhatsApp
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
