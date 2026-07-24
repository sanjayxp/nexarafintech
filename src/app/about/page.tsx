import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import Team from "@/components/Team";
import Stats from "@/components/Stats";
import Testimonial from "@/components/Testimonial";
import TrackRecord from "@/components/TrackRecord";
import { Buildings } from "@phosphor-icons/react/ssr";

export const metadata: Metadata = {
  title: "About | Nexara Fintech",
  description:
    "Nexara Fintech builds agency banking, payments, and connected banking infrastructure for regulated financial institutions across India.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <PageHero
          eyebrow="About Nexara"
          title="Infrastructure for the next billion banking relationships"
          description="The team, the approach, and the standards behind every module on the Nexara platform."
          breadcrumb={[{ label: "About" }]}
          icon={Buildings}
          photo="/images/about-team.jpg"
        />

        <About compact />
        <Team />
        <TrackRecord />
        <Stats />
        <Testimonial />
      </main>
      <Footer />
    </>
  );
}
