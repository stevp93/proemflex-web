// ── HERO SECTION: Sección principal con imagen, textos y botones CTA ──
import Hero from "@/components/sections/Hero";
// ── NOTICIAS CARRUSEL: Sección de noticias rotativas ──
import NewsCarousel from "@/components/sections/NewsCarousel";
// ── MARQUEE: Franja de texto deslizante ──
import Marquee from "@/components/sections/Marquee";
// ── SECTORES PREVIEW: Muestra los sectores servidos ──
import SectorsPreview from "@/components/home/SectorsPreview";
// ── CAPACIDADES PREVIEW: 3 procesos principales (Extrusión, Impresión, Sellado) ──
import CapabilitiesPreview from "@/components/home/CapabilitiesPreview";
// ── GALERÍA PLANTA: Mosaico de fotos de la planta de producción ──
import PlantGallery from "@/components/home/PlantGallery";
// ── SOSTENIBILIDAD PREVIEW: Sección sobre sustentabilidad ──
import SustainabilityPreview from "@/components/home/SustainabilityPreview";
// ── CTA BANNER: Banner final con llamada a la acción ──
import CtaBanner from "@/components/home/CtaBanner";

export default function Home() {
  return (
    <main id="main-content" style={{ paddingTop: "var(--nav-height)" }}>
      <Hero />
      <NewsCarousel />
      <Marquee />
      <SectorsPreview />
      <div className="section-divider" />
      <CapabilitiesPreview />
      <div className="section-divider" />
      <PlantGallery />
      <div className="section-divider" />
      <SustainabilityPreview />
      <div className="section-divider" />
      <CtaBanner />
    </main>
  );
}
