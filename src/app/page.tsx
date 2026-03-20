import Hero from "@/components/sections/Hero";
import NewsCarousel from "@/components/sections/NewsCarousel";
import Marquee from "@/components/sections/Marquee";
import SectorsPreview from "@/components/home/SectorsPreview";
import CapabilitiesPreview from "@/components/home/CapabilitiesPreview";
import SustainabilityPreview from "@/components/home/SustainabilityPreview";
import CtaBanner from "@/components/home/CtaBanner";

export default function Home() {
  return (
    <main>
      <Hero />
      <NewsCarousel />
      <Marquee />
      <SectorsPreview />
      <div className="section-divider" />
      <CapabilitiesPreview />
      <div className="section-divider" />
      <SustainabilityPreview />
      <div className="section-divider" />
      <CtaBanner />
    </main>
  );
}
