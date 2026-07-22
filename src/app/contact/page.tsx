import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact | NecNexara Fintech",
  description:
    "Talk to the NecNexara Fintech solutions team about agency banking, payments, cards, compliance, or lending infrastructure.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <PageHero
          eyebrow="Contact"
          title="Let's build your banking rail"
          description="Whether you're scoping a new agency banking network or upgrading a payment switch, our solutions team can walk you through architecture, compliance, and timelines."
          breadcrumb={[{ label: "Contact" }]}
        />
        <Contact compact />
      </main>
      <Footer />
    </>
  );
}
