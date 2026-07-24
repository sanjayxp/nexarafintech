import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Layers3 } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
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
          icon={Layers3}
        />

        <div className="container-page py-24">
          <div className="flex flex-col gap-20">
            {categories.map((category, catIndex) => {
              const items = getSolutionsByCategory(category.slug);
              return (
                <div key={category.slug} id={category.slug} className="scroll-mt-24">
                  <Reveal>
                    <div className="max-w-2xl border-l-2 border-brand-teal pl-5">
                      <span className="text-xs font-semibold text-brand-slate-light">
                        {String(catIndex + 1).padStart(2, "0")} / {String(categories.length).padStart(2, "0")}
                      </span>
                      <h2 className="mt-1 text-2xl font-semibold tracking-tight text-brand-navy">
                        {category.name}
                      </h2>
                      <p className="mt-2 text-brand-slate">
                        {category.description}
                      </p>
                    </div>
                  </Reveal>

                  <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((solution, i) => {
                      const Icon = solution.icon;
                      return (
                        <Reveal key={solution.slug} delay={i * 60}>
                          <Link
                            href={`/solutions/${solution.slug}`}
                            className="group flex h-full flex-col rounded-2xl border border-brand-border p-6 transition-colors hover:border-brand-teal/50 hover:bg-brand-surface"
                          >
                            <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-navy/5 text-brand-navy group-hover:bg-brand-teal/10 group-hover:text-brand-teal transition-colors">
                              <Icon size={22} />
                            </div>
                            <h3 className="mt-5 text-base font-semibold text-brand-navy">
                              {solution.name}
                            </h3>
                            <p className="mt-2 flex-1 text-sm leading-6 text-brand-slate">
                              {solution.tagline}
                            </p>
                            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue group-hover:gap-2.5 transition-all">
                              Learn more
                              <ArrowRight size={14} />
                            </span>
                          </Link>
                        </Reveal>
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
