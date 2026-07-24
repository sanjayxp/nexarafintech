import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Nexara Fintech",
  description:
    "Talk to the Nexara Fintech solutions team about agency banking, payments, cards, compliance, or lending infrastructure.",
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
          icon={Mail}
        />
        <Contact compact />
      </main>
      <Footer />
    </>
  );
}
