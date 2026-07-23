import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import {
  solutions,
  getSolutionBySlug,
  getCategoryBySlug,
  getRelatedSolutions,
} from "@/lib/solutions";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return {};
  return {
    title: `${solution.name} | Nexara Fintech`,
    description: solution.overview,
  };
}

export default async function SolutionDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) notFound();

  const category = getCategoryBySlug(solution.category);
  const related = getRelatedSolutions(solution.slug);
  const Icon = solution.icon;

  return (
    <>
      <Nav />
      <main className="flex-1">
        <PageHero
          eyebrow={category?.shortName ?? "Solution"}
          title={solution.name}
          description={solution.tagline}
          breadcrumb={[
            { label: "Solutions", href: "/solutions" },
            ...(category
              ? [{ label: category.shortName, href: `/solutions#${category.slug}` }]
              : []),
            { label: solution.name },
          ]}
        />

        <div className="container-page py-20">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-navy/5 text-brand-navy">
                <Icon size={24} />
              </div>
              <h2 className="mt-6 text-2xl font-semibold tracking-tight text-brand-navy">
                Overview
              </h2>
              <p className="mt-4 text-lg leading-8 text-brand-slate">
                {solution.overview}
              </p>

              <h2 className="mt-14 text-2xl font-semibold tracking-tight text-brand-navy">
                Key features
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {solution.features.map((feature) => (
                  <div
                    key={feature.title}
                    className="rounded-xl border border-brand-border p-5"
                  >
                    <h3 className="text-sm font-semibold text-brand-navy">
                      {feature.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-6 text-brand-slate">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              <h2 className="mt-14 text-2xl font-semibold tracking-tight text-brand-navy">
                How it works
              </h2>
              <ol className="mt-6 flex flex-col gap-5">
                {solution.howItWorks.map((step, i) => (
                  <li key={step} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-navy text-sm font-semibold text-white">
                      {i + 1}
                    </span>
                    <p className="pt-1 text-brand-slate leading-7">{step}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-2xl border border-brand-border bg-brand-surface p-7">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-teal">
                  Why it matters
                </h3>
                <ul className="mt-5 flex flex-col gap-4">
                  {solution.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-3">
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-brand-teal"
                      />
                      <span className="text-sm leading-6 text-brand-navy">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-navy px-5 py-3 text-sm font-semibold text-white hover:bg-brand-navy-2 transition-colors"
                >
                  Talk to our team
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          {related.length > 0 && (
            <div className="mt-20 border-t border-brand-border pt-14">
              <h2 className="text-2xl font-semibold tracking-tight text-brand-navy">
                Related solutions
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((item) => {
                  const RelIcon = item.icon;
                  return (
                    <Link
                      key={item.slug}
                      href={`/solutions/${item.slug}`}
                      className="group rounded-xl border border-brand-border p-6 transition-colors hover:border-brand-teal/50 hover:bg-brand-surface"
                    >
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-navy/5 text-brand-navy group-hover:bg-brand-teal/10 group-hover:text-brand-teal transition-colors">
                        <RelIcon size={22} />
                      </div>
                      <h3 className="mt-5 text-base font-semibold text-brand-navy">
                        {item.name}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-brand-slate">
                        {item.tagline}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
