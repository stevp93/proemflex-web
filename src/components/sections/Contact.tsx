"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import { TimerIcon, CheckIcon, SendIcon } from "@/components/ui/ProcessIcons";

const sectorOptions = [
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
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://formsubmit.co/ajax/proemflex.sas@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          nombre: formState.name,
          empresa: formState.company,
          email: formState.email,
          telefono: formState.phone,
          sector: formState.sector,
          mensaje: formState.message,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormState({ name: "", company: "", email: "", phone: "", sector: "", message: "" });
        setTimeout(() => setStatus("idle"), 6000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section
      id="contacto"
      className="section scroll-mt-20"
      style={{ background: "linear-gradient(180deg, #111820 0%, #0d1f2d 50%, #111820 100%)" }}
      aria-label="Formulario de contacto"
    >
      <div
        aria-hidden
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[800px] h-[300px] md:h-[400px] rounded-full pointer-events-none -z-10"
        style={{ background: "radial-gradient(ellipse, rgba(0,242,254,0.06) 0%, transparent 60%)" }}
      />

      <div className="container-pf">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-start">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 sm:gap-8"
          >
            <div className="flex flex-col gap-3">
              {[
                { Icon: TimerIcon, label: "Respuesta en", value: "< 48 horas hábiles" },
                {
                  Icon: () => (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00F2FE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                  label: "Dirección",
                  value: "Cra. 69c #24-20, Bogotá",
                  href: "https://www.google.com/maps/place/Proemflex+s.a.s/data=!4m2!3m1!1s0x0:0x563a8254d7a4470d",
                },
                {
                  Icon: () => (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00F2FE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  ),
                  label: "Teléfono / WhatsApp",
                  value: "+57 322 217 8185",
                  href: "https://wa.me/573222178185",
                },
                {
                  Icon: () => (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00F2FE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  ),
                  label: "Correo electrónico",
                  value: "Proemflex.sas@gmail.com",
                  href: "mailto:Proemflex.sas@gmail.com",
                },
              ].map((info) => (
                <div
                  key={info.label}
                  className="flex items-center gap-4 glass-card rounded-xl px-4 sm:px-5 py-3 sm:py-4"
                >
                  <span className="grid place-items-center w-10 h-10 rounded-lg bg-[#00F2FE]/10 text-[#00F2FE] shrink-0">
                    <info.Icon size={18} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[0.7rem] sm:text-xs text-[#9CA3AF] uppercase tracking-[0.16em] font-display font-semibold">
                      {info.label}
                    </p>
                    {"href" in info && info.href ? (
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-display font-semibold text-sm sm:text-base text-white truncate block hover:text-[#00F2FE] transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-display font-semibold text-sm sm:text-base text-white truncate">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="flex flex-col gap-3">
              <p className="text-[0.7rem] sm:text-xs text-[#9CA3AF] uppercase tracking-[0.16em] font-display font-semibold">
                Síguenos en redes sociales
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/people/Proemflex/61559880714111/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid place-items-center w-11 h-11 rounded-lg glass-card text-[#9CA3AF] hover:text-[#00F2FE] hover:border-[#00F2FE]/30 transition-all"
                  aria-label="Facebook de PROEMFLEX"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/proemflex/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid place-items-center w-11 h-11 rounded-lg glass-card text-[#9CA3AF] hover:text-[#00F2FE] hover:border-[#00F2FE]/30 transition-all"
                  aria-label="Instagram de PROEMFLEX"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@proemflex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid place-items-center w-11 h-11 rounded-lg glass-card text-[#9CA3AF] hover:text-[#00F2FE] hover:border-[#00F2FE]/30 transition-all"
                  aria-label="TikTok de PROEMFLEX"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13.2a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-.81.07 4.84 4.84 0 01-2.38-.63v-4.07h4z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 space-y-5"
              aria-label="Formulario de cotización"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="rfq-name" className="field-label">Nombre completo *</label>
                  <input
                    id="rfq-name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="field"
                    placeholder="Juan Pérez"
                  />
                </div>
                <div>
                  <label htmlFor="rfq-company" className="field-label">Empresa *</label>
                  <input
                    id="rfq-company"
                    type="text"
                    required
                    value={formState.company}
                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                    className="field"
                    placeholder="Empresa S.A.S."
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="rfq-email" className="field-label">Email corporativo *</label>
                  <input
                    id="rfq-email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="field"
                    placeholder="juan@empresa.com"
                  />
                </div>
                <div>
                  <label htmlFor="rfq-phone" className="field-label">Teléfono</label>
                  <input
                    id="rfq-phone"
                    type="tel"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="field"
                    placeholder="+57 300 000 0000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="rfq-sector" className="field-label">Sector de interés *</label>
                <select
                  id="rfq-sector"
                  required
                  value={formState.sector}
                  onChange={(e) => setFormState({ ...formState, sector: e.target.value })}
                  className="field appearance-none cursor-pointer"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239CA3AF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>\")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 1rem center",
                    paddingRight: "2.5rem",
                  }}
                >
                  <option value="" disabled className="bg-[#111820]">Seleccione un sector</option>
                  {sectorOptions.map((s) => (
                    <option key={s} value={s} className="bg-[#111820]">{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="rfq-message" className="field-label">Detalles del proyecto</label>
                <textarea
                  id="rfq-message"
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="field resize-none"
                  placeholder="Cuéntenos sobre volúmenes, dimensiones, tipo de producto a empacar..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full"
                disabled={status === "sending" || status === "success"}
                aria-disabled={status === "sending" || status === "success"}
              >
                {status === "sending" ? (
                  <>
                    <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" className="opacity-25" /><path d="M4 12a8 8 0 018-8" className="opacity-75" /></svg>
                    Enviando...
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckIcon size={18} />
                    ¡Mensaje enviado con éxito!
                  </>
                ) : status === "error" ? (
                  <>
                    Error al enviar. Intente de nuevo.
                  </>
                ) : (
                  <>
                    Enviar solicitud
                    <SendIcon size={16} />
                  </>
                )}
              </button>

              {/* Live region for screen readers */}
              <div aria-live="polite" aria-atomic="true" className="sr-only">
                {status === "success" && "Su solicitud ha sido enviada exitosamente. Le responderemos en menos de 48 horas hábiles."}
              </div>

              <p className="text-center text-xs text-[#4B5563]">
                Sus datos están protegidos. No compartimos su información con terceros.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
