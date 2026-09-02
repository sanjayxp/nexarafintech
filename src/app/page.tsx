import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Solutions from "@/components/Solutions";
import ServicesGrid from "@/components/ServicesGrid";
import Stats from "@/components/Stats";
import WhoWeServe from "@/components/WhoWeServe";
import GlobalPresence from "@/components/GlobalPresence";
import Capabilities from "@/components/Capabilities";
import Testimonial from "@/components/Testimonial";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <TrustStrip />
        <Solutions />
        <ServicesGrid />
        <Stats />
        <WhoWeServe />
        <GlobalPresence />
        <Capabilities />
        <Testimonial />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
