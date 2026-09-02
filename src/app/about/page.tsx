import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import Markets from "@/components/Markets";
import Team from "@/components/Team";
import Stats from "@/components/Stats";
import Quote from "@/components/Quote";
import ClosingCta from "@/components/ClosingCta";

export const metadata: Metadata = {
  title: "About",
  description:
    "Nexara Fintech builds agency banking and connected banking infrastructure for regulated financial institutions across India, Africa, the Middle East, and Asia Pacific.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <PageHero
          eyebrow="About"
          title="Infrastructure for the next billion banking relationships."
          description="The objective, the standards, and the people behind every module we ship."
          breadcrumb={[{ label: "About" }]}
        />

        <About />
        <Stats />
        <Markets />
        <Team />
        <Quote />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
