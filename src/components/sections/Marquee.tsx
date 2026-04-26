"use client";

const TOKENS = [
  "REDUCE",
  "REÚSA",
  "RECICLA",
  "100% ECO-FRIENDLY",
  "ISO 9001",
  "33+ AÑOS",
  "EMPAQUES FLEXIBLES",
];

export default function Marquee() {
  // Render tokens twice for a perfect seamless loop with CSS-only animation.
  return (
    <section
      aria-hidden="true"
      className="relative py-5 sm:py-7 overflow-hidden border-y border-white/[0.04]"
      style={{ background: "rgba(0,242,254,0.025)" }}
    >
      <div className="flex whitespace-nowrap will-change-transform animate-marquee">
        {[0, 1].map((dup) => (
          <ul
            key={dup}
            className="flex shrink-0 items-center gap-10 sm:gap-14 pr-10 sm:pr-14"
            aria-hidden={dup === 1 ? "true" : undefined}
          >
            {TOKENS.map((t, i) => (
              <li key={`${dup}-${i}`} className="flex items-center gap-10 sm:gap-14">
                <span
                  className="font-display font-bold text-2xl sm:text-3xl md:text-5xl tracking-tight text-transparent leading-none"
                  style={{ WebkitTextStroke: "1px rgba(0,242,254,0.18)" }}
                >
                  {t}
                </span>
                <span
                  aria-hidden
                  className="block w-2 h-2 rounded-full bg-[#00F2FE]/35"
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
