"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";

const sectors = [
  "Alimentos",
  "Laboratorios Farmacéuticos",
  "Textiles",
  "Líneas Comerciales y Publicitarias",
  "Almacenes de Cadena",
  "Aseo y Desinfección",
  "Otro",
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    sector: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section
      id="contacto"
      className="relative py-20 sm:py-24 md:py-32 overflow-hidden scroll-mt-20"
      style={{
        background: "linear-gradient(180deg, #111820 0%, #0d1f2d 50%, #111820 100%)",
      }}
      aria-label="Contáctanos y Cotiza"
    >
      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[800px] h-[300px] md:h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(0,242,254,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-start">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <p className="font-display text-xs sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#00F2FE] mb-3 sm:mb-4">
                Contáctanos
              </p>
              <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4 sm:mb-6">
                Cotice su{" "}
                <span className="text-gradient-cyan">Proyecto de Empaque</span>
              </h2>
              <p className="text-[#9CA3AF] text-sm sm:text-base lg:text-lg leading-relaxed">
                Nuestro equipo de ingeniería diseña soluciones de empaque flexible a la
                medida de su operación. Cuéntenos sus necesidades y recibirá una propuesta
                personalizada.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              {[
                {
                  label: "Respuesta en",
                  value: "< 48 horas hábiles",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00F2FE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  ),
                },
                {
                  label: "Volúmenes mínimos desde",
                  value: "1,000 unidades",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00F2FE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h8" />
                      <rect x="10" y="2" width="12" height="12" rx="2" />
                    </svg>
                  ),
                },
                {
                  label: "Ubicación",
                  value: "Colombia 🇨🇴",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00F2FE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                },
              ].map((info) => (
                <div key={info.label} className="flex items-center gap-3 sm:gap-4 glass rounded-lg sm:rounded-xl px-4 sm:px-5 py-3 sm:py-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[rgba(0,242,254,0.08)] flex items-center justify-center shrink-0">
                    {info.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[0.65rem] sm:text-xs text-[#9CA3AF] uppercase tracking-wider">
                      {info.label}
                    </p>
                    <p className="font-display font-semibold text-sm sm:text-base text-white truncate">
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-strong rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 space-y-4 sm:space-y-5"
              aria-label="Formulario de cotización"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label htmlFor="rfq-name" className="block text-[0.65rem] sm:text-xs text-[#9CA3AF] uppercase tracking-wider mb-1.5 sm:mb-2 font-display">
                    Nombre Completo *
                  </label>
                  <input
                    id="rfq-name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white text-sm placeholder:text-[#4B5563] focus:border-[#00F2FE] focus:ring-1 focus:ring-[#00F2FE] focus:outline-none transition-all"
                    placeholder="Juan Pérez"
                  />
                </div>
                <div>
                  <label htmlFor="rfq-company" className="block text-[0.65rem] sm:text-xs text-[#9CA3AF] uppercase tracking-wider mb-1.5 sm:mb-2 font-display">
                    Empresa *
                  </label>
                  <input
                    id="rfq-company"
                    type="text"
                    required
                    value={formState.company}
                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                    className="w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white text-sm placeholder:text-[#4B5563] focus:border-[#00F2FE] focus:ring-1 focus:ring-[#00F2FE] focus:outline-none transition-all"
                    placeholder="Empresa S.A.S."
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label htmlFor="rfq-email" className="block text-[0.65rem] sm:text-xs text-[#9CA3AF] uppercase tracking-wider mb-1.5 sm:mb-2 font-display">
                    Email Corporativo *
                  </label>
                  <input
                    id="rfq-email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white text-sm placeholder:text-[#4B5563] focus:border-[#00F2FE] focus:ring-1 focus:ring-[#00F2FE] focus:outline-none transition-all"
                    placeholder="juan@empresa.com"
                  />
                </div>
                <div>
                  <label htmlFor="rfq-phone" className="block text-[0.65rem] sm:text-xs text-[#9CA3AF] uppercase tracking-wider mb-1.5 sm:mb-2 font-display">
                    Teléfono
                  </label>
                  <input
                    id="rfq-phone"
                    type="tel"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white text-sm placeholder:text-[#4B5563] focus:border-[#00F2FE] focus:ring-1 focus:ring-[#00F2FE] focus:outline-none transition-all"
                    placeholder="+57 300 000 0000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="rfq-sector" className="block text-[0.65rem] sm:text-xs text-[#9CA3AF] uppercase tracking-wider mb-1.5 sm:mb-2 font-display">
                  Sector de Interés *
                </label>
                <select
                  id="rfq-sector"
                  required
                  value={formState.sector}
                  onChange={(e) => setFormState({ ...formState, sector: e.target.value })}
                  className="w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white text-sm focus:border-[#00F2FE] focus:ring-1 focus:ring-[#00F2FE] focus:outline-none transition-all appearance-none cursor-pointer"
                >
                  <option value="" disabled className="bg-[#111820]">
                    Seleccione un sector
                  </option>
                  {sectors.map((s) => (
                    <option key={s} value={s} className="bg-[#111820]">
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="rfq-message" className="block text-[0.65rem] sm:text-xs text-[#9CA3AF] uppercase tracking-wider mb-1.5 sm:mb-2 font-display">
                  Detalles del Proyecto
                </label>
                <textarea
                  id="rfq-message"
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white text-sm placeholder:text-[#4B5563] focus:border-[#00F2FE] focus:ring-1 focus:ring-[#00F2FE] focus:outline-none transition-all resize-none"
                  placeholder="Cuéntenos sobre volúmenes, dimensiones, tipo de producto a empacar..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full text-sm sm:text-base flex items-center justify-center gap-2"
                disabled={submitted}
              >
                {submitted ? (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    ¡Mensaje Enviado!
                  </>
                ) : (
                  <>
                    Enviar Solicitud de Cotización
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </>
                )}
              </button>

              <p className="text-center text-[0.65rem] sm:text-xs text-[#4B5563]">
                Sus datos están protegidos. No compartimos su información con terceros.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
