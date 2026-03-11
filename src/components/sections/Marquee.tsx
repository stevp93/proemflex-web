"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const MARQUEE_TEXT =
  "REDUCE • REÚSA • RECICLA • 100% ECO-FRIENDLY • ISO 9001 • 33+ AÑOS • EMPAQUES FLEXIBLES • ";

export default function Marquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    let lastScroll = 0;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScroll = window.scrollY;
          const velocity = Math.abs(currentScroll - lastScroll);
          setSpeed(Math.min(1 + velocity * 0.05, 5));
          lastScroll = currentScroll;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative py-4 sm:py-6 overflow-hidden border-y border-[rgba(255,255,255,0.03)]"
      style={{ background: "rgba(0,242,254,0.02)" }}
      aria-hidden="true"
    >
      <div
        ref={marqueeRef}
        className="flex whitespace-nowrap"
        style={{ animationDuration: `${20 / speed}s` }}
      >
        <motion.div
          animate={{ x: [0, -2400] }}
          transition={{
            x: { repeat: Infinity, repeatType: "loop", duration: 20 / speed, ease: "linear" },
          }}
          className="flex shrink-0"
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="font-display font-bold text-2xl sm:text-3xl md:text-5xl tracking-tight text-transparent mx-3 sm:mx-4"
              style={{
                WebkitTextStroke: "1px rgba(0,242,254,0.15)",
              }}
            >
              {MARQUEE_TEXT}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
