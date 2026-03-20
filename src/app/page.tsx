import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import NewsCarousel from "@/components/sections/NewsCarousel";
import Marquee from "@/components/sections/Marquee";
import Sectors from "@/components/sections/Sectors";
import ProductBand from "@/components/sections/ProductBand";
import Capabilities from "@/components/sections/Capabilities";
import Sustainability from "@/components/sections/Sustainability";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <NewsCarousel />
      <Marquee />
      <Sectors />
      <div className="section-divider" />
      <ProductBand />
      <div className="section-divider" />
      <Capabilities />
      <div className="section-divider" />
      <Sustainability />
      <div className="section-divider" />
      <Contact />
      <Footer />
    </main>
  );
}
