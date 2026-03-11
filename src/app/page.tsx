import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Sectors from "@/components/sections/Sectors";
import Capabilities from "@/components/sections/Capabilities";
import Sustainability from "@/components/sections/Sustainability";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <Sectors />
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
