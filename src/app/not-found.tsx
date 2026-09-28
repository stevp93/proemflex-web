import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="section min-h-[70vh] flex items-center"
      style={{ paddingTop: "var(--nav-height)" }}
    >
      <div className="container-pf flex flex-col items-center text-center gap-5">
        <p className="eyebrow">Error 404</p>
        <h1 className="h-section text-3xl sm:text-5xl">
          Esta página <span className="text-gradient-cyan">no existe</span>
        </h1>
        <p className="text-[#9CA3AF] max-w-md">
          Es posible que el enlace esté roto o que la página se haya movido.
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Link href="/" className="btn-primary">
            Volver al inicio
          </Link>
          <Link href="/contacto" className="btn-outline">
            Contáctanos
          </Link>
        </div>
      </div>
    </main>
  );
}
