import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { categories, getSolutionsByCategory } from "@/lib/solutions";

export default function Solutions() {
  const [featured, ...rest] = categories;
  const featuredItems = getSolutionsByCategory(featured.slug);

  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="container-page">
        <Reveal>
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
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          <Reveal className="h-full lg:col-span-1">
            <Link
              href={`/solutions#${featured.slug}`}
              className="group relative flex h-full min-h-[420px] flex-col justify-end overflow-hidden rounded-2xl p-7 text-white lg:min-h-full"
            >
              <Image
                src="/images/agent-mobile-banking.jpg"
                alt=""
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/70 to-brand-navy/20" />
              <div className="relative">
                <span className="inline-flex rounded-full bg-brand-teal/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-teal-light">
                  Featured
                </span>
                <h3 className="mt-4 text-xl font-semibold">
                  {featured.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {featured.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-teal-light group-hover:gap-2.5 transition-all">
                  {featuredItems.length} solutions
                  <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-2">
            {rest.map((category, i) => {
              const items = getSolutionsByCategory(category.slug);
              const FeaturedIcon = items[0]?.icon;
              return (
                <Reveal key={category.slug} delay={i * 60}>
                  <Link
                    href={`/solutions#${category.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-brand-border p-6 transition-colors hover:border-brand-teal/50 hover:bg-brand-surface"
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
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
