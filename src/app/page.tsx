import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Platforms from "@/components/Platforms";
import ServicesIndex from "@/components/ServicesIndex";
import Stats from "@/components/Stats";
import Audiences from "@/components/Audiences";
import Markets from "@/components/Markets";
import Approach from "@/components/Approach";
import Quote from "@/components/Quote";
import ClosingCta from "@/components/ClosingCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Platforms />
        <ServicesIndex />
        <Stats />
        <Audiences />
        <Markets />
        <Approach />
        <Quote />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
