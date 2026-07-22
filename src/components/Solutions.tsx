import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories, getSolutionsByCategory } from "@/lib/solutions";

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-teal">
              Solutions
            </h2>
            <p className="mt-3 text-3xl font-semibold tracking-tight text-brand-navy sm:text-4xl">
              28 products across 7 categories
            </p>
            <p className="mt-4 text-lg text-brand-slate">
              Every product is built to integrate with existing core banking
              systems and to meet the compliance bar banks and regulators
              expect from day one.
            </p>
          </div>
          <Link
            href="/solutions"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:gap-2.5 transition-all shrink-0"
          >
            View all solutions
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const items = getSolutionsByCategory(category.slug);
            const FeaturedIcon = items[0]?.icon;
            return (
              <Link
                key={category.slug}
                href={`/solutions#${category.slug}`}
                className="group rounded-xl border border-brand-border p-6 transition-colors hover:border-brand-teal/50 hover:bg-brand-surface"
              >
                {FeaturedIcon && (
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-navy/5 text-brand-navy group-hover:bg-brand-teal/10 group-hover:text-brand-teal transition-colors">
                    <FeaturedIcon size={22} />
                  </div>
                )}
                <h3 className="mt-5 text-base font-semibold text-brand-navy">
                  {category.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-brand-slate">
                  {category.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue group-hover:gap-2.5 transition-all">
                  {items.length} solutions
                  <ArrowRight size={14} />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
