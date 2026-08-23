import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Solutions from "@/components/Solutions";
import GlobalPresence from "@/components/GlobalPresence";
import Capabilities from "@/components/Capabilities";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import Testimonial from "@/components/Testimonial";
import Industries from "@/components/Industries";
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
        <GlobalPresence />
        <Capabilities />
        <Process />
        <Stats />
        <Testimonial />
        <Industries />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
