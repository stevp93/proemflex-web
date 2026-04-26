"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import { TimerIcon, FactoryIcon, CheckIcon, SendIcon } from "@/components/ui/ProcessIcons";

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
      const res = await fetch("https://formspree.io/f/xpwdgpnj", {
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
                { Icon: FactoryIcon, label: "Volúmenes mínimos desde", value: "1,000 unidades" },
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
                  value: "+57 311 572 8520",
                  href: "https://wa.me/573115728520",
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
