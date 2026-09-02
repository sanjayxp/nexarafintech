import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Platforms from "@/components/Platforms";
import ServicesIndex from "@/components/ServicesIndex";
import ClosingCta from "@/components/ClosingCta";
import { verticals } from "@/lib/verticals";

const totalCapabilities = verticals.reduce(
  (sum, v) => sum + v.groups.reduce((n, g) => n + g.items.length, 0),
  0
);

export const metadata: Metadata = {
  title: "Products",
  description:
    "Nexara Fintech operates two platforms: the Connected Banking Platform for enterprise banking APIs and Agency Banking Solutions for last-mile distribution.",
};

export default function SolutionsIndex() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <PageHero
          eyebrow="Products"
          title="Two platforms, one integration."
          description="Enterprise banking APIs and last-mile agency banking, sharing one compliance and settlement layer underneath."
          breadcrumb={[{ label: "Products" }]}
          meta={[
            { term: "Platforms", value: "2" },
            { term: "Capabilities", value: String(totalCapabilities) },
            { term: "Integration", value: "REST APIs on your core" },
          ]}
        />
        <Platforms />
        <ServicesIndex />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
