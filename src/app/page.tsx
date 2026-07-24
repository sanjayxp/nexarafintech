import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Solutions from "@/components/Solutions";
import Capabilities from "@/components/Capabilities";
import Stats from "@/components/Stats";
import Testimonial from "@/components/Testimonial";
import Industries from "@/components/Industries";
import TrackRecord from "@/components/TrackRecord";
import Insights from "@/components/Insights";
import About from "@/components/About";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <TrustStrip />
        <Solutions />
        <Capabilities />
        <Stats />
        <Testimonial />
        <Industries />
        <TrackRecord />
        <About />
        <Insights />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
