import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Platforms from "@/components/Platforms";
import ServicesIndex from "@/components/ServicesIndex";
import Stats from "@/components/Stats";
import Audiences from "@/components/Audiences";
import Approach from "@/components/Approach";
import Quote from "@/components/Quote";
import ClosingCta from "@/components/ClosingCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Platforms />
        <ServicesIndex />
        <Stats />
        <Audiences />
        <Approach />
        <Quote />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
