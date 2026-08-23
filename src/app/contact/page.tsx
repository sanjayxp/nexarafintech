import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import { EnvelopeSimple } from "@phosphor-icons/react/ssr";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to the Nexara Fintech solutions team about agency banking, connected banking APIs, or market-entry advisory across India, Africa, the Middle East, and Asia Pacific.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <PageHero
          eyebrow="Contact"
          title="Let's build your banking rail"
          description="Whether you're scoping a new agency banking network, upgrading a payment switch, or entering a new market, our solutions team can walk you through architecture, compliance, and timelines."
          breadcrumb={[{ label: "Contact" }]}
          icon={EnvelopeSimple}
          photo="/images/hero-contact.jpg"
        />
        <Contact compact />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
