import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Testimonial from "@/components/Testimonial";
import Reveal from "@/components/Reveal";
import { Building2 } from "lucide-react";

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
          icon={Building2}
        />

        <section className="bg-white pt-24">
          <div className="container-page">
            <Reveal>
              <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/hero-team-tablet.jpg"
                  alt="Nexara Fintech solutions team reviewing a client rollout"
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-brand-navy/10 to-transparent" />
                <p className="absolute bottom-6 left-6 max-w-md text-sm font-medium text-white sm:text-base">
                  Our solutions engineers sit alongside your team from
                  scoping through go-live — and stay on after.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <About compact />
        <Stats />
        <Testimonial />
      </main>
      <Footer />
    </>
  );
}
