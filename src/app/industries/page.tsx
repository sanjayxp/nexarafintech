import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ClosingCta from "@/components/ClosingCta";
import { industries } from "@/lib/industries";
import { getVerticalBySlug } from "@/lib/verticals";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "How banks, NBFCs, MFIs, fintech startups, cooperative banks, and government programmes use Nexara Fintech's infrastructure.",
};

export default function IndustriesPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <PageHero
          eyebrow="Industries"
          title="Every tier of the financial system."
          description="Each institution type works with a different slice of the platform. The segments below reflect our India practice; equivalent institutions elsewhere map to the same modules."
          breadcrumb={[{ label: "Industries" }]}
          meta={[
            { term: "Segments", value: String(industries.length) },
            { term: "Regions", value: "India · Africa · Middle East · APAC" },
            { term: "Deployment", value: "On your existing core" },
          ]}
        />

        <section className="border-b border-rule py-20 lg:py-28">
          <div className="container-page">
            <div className="border-t border-rule-strong">
              {industries.map((industry, i) => (
                <div
                  key={industry.slug}
                  id={industry.slug}
                  className="grid scroll-mt-24 grid-cols-1 gap-8 border-b border-rule py-12 lg:grid-cols-12 lg:gap-10"
                >
                  <div className="lg:col-span-4">
                    <p className="mono text-[0.78rem] text-ink-faint">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h2 className="display mt-3 text-[clamp(1.7rem,2.8vw,2.3rem)] leading-tight">
                      {industry.name}
                    </h2>
                  </div>

                  <div className="lg:col-span-5">
                    <p className="text-[1rem] leading-8 text-ink-soft">
                      {industry.summary}
                    </p>
                    <ul className="mt-6">
                      {industry.challenges.map((c) => (
                        <li
                          key={c}
                          className="border-t border-rule py-3 text-[0.9rem] leading-6 text-ink"
                        >
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-3">
                    <p className="label">Runs on</p>
                    <ul className="mt-4 flex flex-col gap-3">
                      {industry.relevantVerticals.map((slug) => {
                        const vertical = getVerticalBySlug(slug);
                        if (!vertical) return null;
                        return (
                          <li key={slug}>
                            <Link
                              href={`/solutions/${slug}`}
                              className="group inline-flex items-center gap-2 text-[0.9rem] text-ink"
                            >
                              <span className="border-b border-rule-strong pb-0.5 transition-colors group-hover:border-accent group-hover:text-accent">
                                {vertical.name}
                              </span>
                              <span
                                aria-hidden
                                className="text-ink-faint transition-transform group-hover:translate-x-1"
                              >
                                →
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
