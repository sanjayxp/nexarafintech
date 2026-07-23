import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { categories, getSolutionsByCategory } from "@/lib/solutions";

export const metadata: Metadata = {
  title: "Solutions | Nexara Fintech",
  description:
    "28 banking and fintech solutions across agency banking, cards, merchant acquiring, transaction banking, compliance, lending, and core banking.",
};

export default function SolutionsIndex() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <PageHero
          eyebrow="Solutions"
          title="Every product in the banking and fintech stack"
          description="Organized across seven categories, from last-mile agency banking to core banking infrastructure. Each solution ships as a standalone module or as part of one integrated platform."
          breadcrumb={[{ label: "Solutions" }]}
        />

        <div className="container-page py-20">
          <div className="flex flex-col gap-20">
            {categories.map((category) => {
              const items = getSolutionsByCategory(category.slug);
              return (
                <div key={category.slug} id={category.slug} className="scroll-mt-24">
                  <div className="max-w-2xl">
                    <h2 className="text-2xl font-semibold tracking-tight text-brand-navy">
                      {category.name}
                    </h2>
                    <p className="mt-2 text-brand-slate">
                      {category.description}
                    </p>
                  </div>

                  <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((solution) => {
                      const Icon = solution.icon;
                      return (
                        <Link
                          key={solution.slug}
                          href={`/solutions/${solution.slug}`}
                          className="group rounded-xl border border-brand-border p-6 transition-colors hover:border-brand-teal/50 hover:bg-brand-surface"
                        >
                          <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-navy/5 text-brand-navy group-hover:bg-brand-teal/10 group-hover:text-brand-teal transition-colors">
                            <Icon size={22} />
                          </div>
                          <h3 className="mt-5 text-base font-semibold text-brand-navy">
                            {solution.name}
                          </h3>
                          <p className="mt-2 text-sm leading-6 text-brand-slate">
                            {solution.tagline}
                          </p>
                          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue group-hover:gap-2.5 transition-all">
                            Learn more
                            <ArrowRight size={14} />
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
