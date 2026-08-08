import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Handshake } from "@phosphor-icons/react/ssr";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { industries } from "@/lib/industries";
import { getVerticalBySlug } from "@/lib/verticals";

export const metadata: Metadata = {
  title: "Industries | Nexara Fintech",
  description:
    "How banks, NBFCs, MFIs, fintech startups, cooperative banks, and government programs use Nexara Fintech's infrastructure.",
};

export default function IndustriesPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <PageHero
          eyebrow="Industries"
          title="Built for every tier of India's financial system"
          description="From national banks to district-level cooperative networks, each institution type works with a different slice of our platform. Here's how."
          breadcrumb={[{ label: "Industries" }]}
          icon={Handshake}
          photo="/images/hero-industries.jpg"
        />

        <div className="container-page py-24">
          <div className="flex flex-col gap-8">
            {industries.map((industry, i) => {
              const Icon = industry.icon;
              return (
                <Reveal key={industry.slug} delay={i * 60}>
                  <div
                    id={industry.slug}
                    className="grid scroll-mt-24 grid-cols-1 gap-10 rounded-2xl border border-brand-border p-8 lg:grid-cols-3 lg:p-10"
                  >
                    <div className="lg:col-span-1">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-navy/5 text-brand-navy">
                        <Icon size={24} weight="duotone" />
                      </div>
                      <h2 className="mt-5 text-2xl font-semibold tracking-tight text-brand-navy">
                        {industry.name}
                      </h2>
                      <p className="mt-3 text-brand-slate leading-7">
                        {industry.summary}
                      </p>
                    </div>

                    <div className="lg:col-span-2 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-[4.25rem]">
                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-teal">
                          What they&apos;re solving for
                        </h3>
                        <ul className="mt-4 flex flex-col gap-3">
                          {industry.challenges.map((c) => (
                            <li key={c} className="flex gap-2.5 text-sm text-brand-slate leading-6">
                              <CheckCircle size={16} weight="duotone" className="mt-0.5 shrink-0 text-brand-teal" />
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-teal">
                          Relevant business units
                        </h3>
                        <ul className="mt-4 flex flex-col gap-3">
                          {industry.relevantVerticals.map((slug) => {
                            const vertical = getVerticalBySlug(slug);
                            if (!vertical) return null;
                            return (
                              <li key={slug}>
                                <Link
                                  href={`/solutions/${slug}`}
                                  className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue hover:gap-2.5 transition-all"
                                >
                                  {vertical.name}
                                  <ArrowRight size={14} />
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
