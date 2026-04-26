/**
 * PROEMFLEX — Industrial Process Icon Set
 * SVG técnicos inline (no librería externa). 24x24 por defecto.
 * Cada icono es un diagrama técnico esquemático del proceso real.
 */

type IconProps = {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
};

const base = (p: IconProps) => ({
  width: p.size ?? 28,
  height: p.size ?? 28,
  viewBox: "0 0 32 32",
  fill: "none" as const,
  stroke: p.color ?? "currentColor",
  strokeWidth: p.strokeWidth ?? 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: p.className,
});

/* ─── Procesos industriales ─── */

// Extrusión: tornillo extrusor + dado + película saliendo
export const ExtrusionIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="11" width="18" height="10" rx="1.5" />
    <path d="M5 13l1.5 3 1.5-3 1.5 3 1.5-3 1.5 3 1.5-3 1.5 3 1.5-3 1.5 3 1.5-3" />
    <path d="M21 13v6" />
    <path d="M21 14h4l2 2-2 2h-4" />
    <path d="M27 16h3" strokeDasharray="1 2" />
  </svg>
);

// Impresión flexográfica tambor central: cilindro grande con 3 satélites
export const PrintingIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="16" cy="17" r="7" />
    <circle cx="16" cy="17" r="2.2" />
    <circle cx="9.5" cy="11.5" r="2" />
    <circle cx="22.5" cy="11.5" r="2" />
    <circle cx="9.5" cy="22.5" r="2" />
    <circle cx="22.5" cy="22.5" r="2" />
    <path d="M3 17h2M27 17h2" />
    <path d="M16 4v3" />
  </svg>
);

// Sellado: dos bandas + cuchilla térmica
export const SealingIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 11h26" />
    <path d="M3 21h26" />
    <path d="M10 11v10M22 11v10" strokeDasharray="2 2" />
    <path d="M14 6l2-2 2 2" />
    <path d="M16 4v6" />
    <path d="M14 28l2-2 2 2" />
    <path d="M16 22v6" />
  </svg>
);

// Laminación: 3 capas comprimidas
export const LaminationIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="4" y="9" width="24" height="3" rx="0.5" />
    <rect x="4" y="14" width="24" height="3" rx="0.5" />
    <rect x="4" y="19" width="24" height="3" rx="0.5" />
    <path d="M16 4v4M16 24v4" />
    <path d="M14 6l2-2 2 2M14 26l2 2 2-2" />
  </svg>
);

// Refilado: rodillos con cuchillas circulares
export const SlittingIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="8" cy="16" r="5" />
    <circle cx="24" cy="16" r="5" />
    <path d="M3 16h2M27 16h2" strokeDasharray="2 2" />
    <path d="M13 14l6 0M13 18l6 0" />
    <circle cx="16" cy="14" r="0.5" fill="currentColor" />
    <circle cx="16" cy="18" r="0.5" fill="currentColor" />
  </svg>
);

// Pre-corte: rollo con perforaciones
export const PrecutIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 8h22v16H5z" />
    <path d="M5 14h22M5 20h22" strokeDasharray="2 2" />
    <circle cx="9" cy="11" r="0.5" fill="currentColor" />
    <circle cx="14" cy="11" r="0.5" fill="currentColor" />
    <circle cx="19" cy="11" r="0.5" fill="currentColor" />
    <circle cx="24" cy="11" r="0.5" fill="currentColor" />
    <circle cx="9" cy="17" r="0.5" fill="currentColor" />
    <circle cx="14" cy="17" r="0.5" fill="currentColor" />
    <circle cx="19" cy="17" r="0.5" fill="currentColor" />
    <circle cx="24" cy="17" r="0.5" fill="currentColor" />
  </svg>
);

// Fajilla / manga termoencogible
export const SleeveIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M11 5h10v22H11z" />
    <path d="M11 9h10M11 23h10" />
    <path d="M8 8l3 1M8 24l3-1M24 8l-3 1M24 24l-3-1" />
    <path d="M14 13v6M18 13v6" />
  </svg>
);

/* ─── Sectores ─── */

export const FoodIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M22 12h2a4 4 0 010 8h-2" />
    <path d="M4 12h18v11a3 3 0 01-3 3H7a3 3 0 01-3-3V12z" />
    <path d="M9 4v4M14 4v4M19 4v4" />
  </svg>
);

export const PharmaIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="11" y="4" width="10" height="12" rx="5" />
    <path d="M11 10h10" />
    <path d="M16 16v8" />
    <path d="M12 24h8" />
    <path d="M14 28h4" />
  </svg>
);

export const TextileIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M8 6l8-3 8 3v4l-3 1v15h-10V11l-3-1V6z" />
    <path d="M13 11v15M19 11v15" />
  </svg>
);

export const RetailIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="6" width="26" height="18" rx="2" />
    <path d="M3 11h26" />
    <path d="M11 28h10M16 24v4" />
    <circle cx="6" cy="8.5" r="0.6" fill="currentColor" />
    <circle cx="9" cy="8.5" r="0.6" fill="currentColor" />
  </svg>
);

export const ChainIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M7 4l-3 5v17a2 2 0 002 2h20a2 2 0 002-2V9l-3-5z" />
    <path d="M4 9h24" />
    <path d="M21 14a5 5 0 01-10 0" />
  </svg>
);

export const CleaningIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M13 4h6v5l3 3v14a2 2 0 01-2 2H12a2 2 0 01-2-2V12l3-3V4z" />
    <path d="M10 14h12" />
    <path d="M14 19h4M14 23h4" />
  </svg>
);

/* ─── Trust / Quality ─── */

export const ShieldCheckIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M16 4l11 4v8c0 7-5 11-11 13C5 27 0 23 0 16V8l11-4z" transform="translate(5 0)" />
    <path d="M11 16l3.5 3.5L22 11" />
  </svg>
);

export const CertificateIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="16" cy="13" r="7" />
    <path d="M11 19l-2 9 7-3 7 3-2-9" />
    <path d="M13 13l2.5 2.5L20 11" />
  </svg>
);

export const FactoryIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 28V14l7 4v-4l7 4v-4l8 4v10z" />
    <path d="M3 28h22" />
    <path d="M9 22h2M15 22h2M21 22h2" />
    <path d="M5 14V4h4v10" />
  </svg>
);

export const TimerIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="16" cy="17" r="10" />
    <path d="M16 11v6l4 2" />
    <path d="M13 4h6" />
    <path d="M16 4v3" />
  </svg>
);

export const RecycleIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M9 12L4 17l5 5" />
    <path d="M4 17h12a4 4 0 004-4V9" />
    <path d="M28 20l-3 6h-7" />
    <path d="M14 23l-3-6 6-3" />
    <path d="M18 8h6l3 5" />
  </svg>
);

export const ArrowRightIcon = (p: IconProps) => (
  <svg {...base(p)} viewBox="0 0 24 24">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export const CheckIcon = (p: IconProps) => (
  <svg {...base(p)} viewBox="0 0 24 24">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const SendIcon = (p: IconProps) => (
  <svg {...base(p)} viewBox="0 0 24 24">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);
