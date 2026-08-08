import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, SquaresFour } from "@phosphor-icons/react/ssr";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { verticals } from "@/lib/verticals";

export const metadata: Metadata = {
  title: "What We Do | Nexara Fintech",
  description:
    "Nexara Fintech operates through three business units: Connected Banking Platform, Agency Banking Solutions, and Consulting & Advisory.",
};

export default function SolutionsIndex() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <PageHero
          eyebrow="What we do"
          title="Three business units, one platform"
          description="Enterprise banking APIs, last-mile agency banking, and market-entry advisory — each built to help banks, fintechs and enterprises move faster."
          breadcrumb={[{ label: "Solutions" }]}
          icon={SquaresFour}
          photo="/images/hero-solutions-payment.jpg"
        />

        <div className="container-page py-24">
          <div className="flex flex-col gap-8">
            {verticals.map((vertical, i) => {
              const Icon = vertical.icon;
              const allItems = vertical.groups.flatMap((g) => g.items);
              return (
                <Reveal key={vertical.slug} delay={i * 60}>
                  <div
                    id={vertical.slug}
                    className="grid scroll-mt-24 grid-cols-1 gap-10 rounded-2xl border border-brand-border p-8 lg:grid-cols-5 lg:p-10"
                  >
                    <div className="lg:col-span-2">
                      <span className="text-xs font-semibold text-brand-slate-light">
                        BUSINESS UNIT {String(i + 1).padStart(2, "0")} / {String(verticals.length).padStart(2, "0")}
                      </span>
                      <div
                        className="mt-4 inline-flex h-12 w-12 items-center justify-center rounded-lg"
                        style={{ backgroundColor: `${vertical.color}1A`, color: vertical.color }}
                      >
                        <Icon size={24} weight="duotone" />
                      </div>
                      <h2 className="mt-5 text-2xl font-semibold tracking-tight text-brand-navy">
                        {vertical.name}
                      </h2>
                      <p className="mt-3 text-brand-slate leading-7">
                        {vertical.summary}
                      </p>
                      <Link
                        href={`/solutions/${vertical.slug}`}
                        className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105"
                        style={{ backgroundColor: vertical.color }}
                      >
                        View full details
                        <ArrowRight size={16} />
                      </Link>
                    </div>

                    <div className="lg:col-span-3">
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-teal">
                        {allItems.length} services &amp; capabilities
                      </h3>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {allItems.slice(0, 14).map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-brand-border px-3 py-1.5 text-xs font-medium text-brand-slate"
                          >
                            {item}
                          </span>
                        ))}
                        {allItems.length > 14 && (
                          <span className="rounded-full px-3 py-1.5 text-xs font-semibold text-brand-blue">
                            +{allItems.length - 14} more
                          </span>
                        )}
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
