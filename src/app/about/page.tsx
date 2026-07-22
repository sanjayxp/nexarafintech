import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "About | NecNexara Fintech",
  description:
    "NecNexara Fintech builds agency banking, payments, and connected banking infrastructure for regulated financial institutions across India.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <PageHero
          eyebrow="About NecNexara"
          title="Infrastructure for the next billion banking relationships"
          description="We build exclusively for regulated financial institutions, which means every product is designed around compliance, auditability, and uptime first, features second."
          breadcrumb={[{ label: "About" }]}
        />
        <About compact />
        <Stats />
        <Testimonial />
      </main>
      <Footer />
    </>
  );
}
