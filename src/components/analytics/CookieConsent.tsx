"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { OPEN_CONSENT_EVENT } from "./config";
import { saveConsent, useCookieConsent } from "./consent";

/**
 * ── BANNER DE CONSENTIMIENTO DE COOKIES ──
 * Cumple con Ley 1581 de 2012 (Habeas Data — Colombia) y GDPR básico.
 * Estados guardados en localStorage ("pf-cookie-consent"):
 *   - "accepted": el usuario aceptó cookies analíticas
 *   - "rejected": el usuario las rechazó
 *   - null: aún no decide → se muestra el banner
 *
 * Emite eventos personalizados que los componentes de analítica escuchan:
 *   - "pf:consent-granted" cuando el usuario acepta
 *   - "pf:consent-revoked" cuando el usuario rechaza o revoca
 * El enlace "Configurar cookies" del footer vuelve a abrirlo ("pf:open-consent").
 */
export default function CookieConsent() {
  const consent = useCookieConsent();
  const [ready, setReady] = useState(false);
  const [reopened, setReopened] = useState(false);

  useEffect(() => {
    // pequeño delay para no competir con el hero
    const t = setTimeout(() => setReady(true), 800);
    const onOpen = () => setReopened(true);
    window.addEventListener(OPEN_CONSENT_EVENT, onOpen);
    return () => {
      clearTimeout(t);
      window.removeEventListener(OPEN_CONSENT_EVENT, onOpen);
    };
  }, []);

  // Muestra el banner si el usuario aún no ha decidido o si lo reabrió desde el footer
  const visible = reopened || (ready && consent === null);

  const accept = () => {
    saveConsent("accepted");
    setReopened(false);
  };

  const reject = () => {
    saveConsent("rejected");
    setReopened(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-live="polite"
          aria-label="Consentimiento de cookies"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 32 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-3 bottom-3 sm:inset-x-6 sm:bottom-6 z-[9998] max-w-[640px] sm:mx-auto"
        >
          <div
            className="glass-card rounded-2xl p-5 sm:p-6 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-xl"
            style={{ background: "rgba(14, 21, 32, 0.92)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <span
                aria-hidden
                className="grid place-items-center w-10 h-10 rounded-xl bg-[#00F2FE]/12 text-[#00F2FE] shrink-0 mt-0.5"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="8.5" cy="10" r="0.8" fill="currentColor" />
                  <circle cx="15" cy="9" r="0.8" fill="currentColor" />
                  <circle cx="14" cy="14" r="0.8" fill="currentColor" />
                  <circle cx="9" cy="15" r="0.8" fill="currentColor" />
                </svg>
              </span>

              <div className="flex-1 min-w-0">
                <h2 className="font-display font-bold text-white text-sm sm:text-base mb-1.5">
                  Usamos cookies para mejorar tu experiencia
                </h2>
                <p className="text-[#9CA3AF] text-xs sm:text-sm leading-relaxed">
                  Utilizamos cookies y herramientas de analítica (Google Analytics, Microsoft Clarity)
                  para entender cómo navegas por nuestro sitio y mejorarlo. Consulta nuestra{" "}
                  <Link
                    href="/privacidad"
                    className="text-[#00F2FE] hover:underline underline-offset-2 font-semibold"
                  >
                    política de privacidad
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row gap-2 sm:gap-3 sm:justify-end">
              <button
                type="button"
                onClick={reject}
                className="order-2 sm:order-1 inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs sm:text-sm font-display font-semibold text-[#9CA3AF] hover:text-white border border-white/[0.08] hover:border-white/20 transition-colors"
              >
                Rechazar
              </button>
              <button
                type="button"
                onClick={accept}
                className="order-1 sm:order-2 btn-primary justify-center text-xs sm:text-sm px-5 py-2"
                autoFocus={reopened}
              >
                Aceptar todas
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
