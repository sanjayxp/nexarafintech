import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ClosingCta from "@/components/ClosingCta";
import { verticals, getVerticalBySlug } from "@/lib/verticals";

export function generateStaticParams() {
  return verticals.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const vertical = getVerticalBySlug(slug);
  if (!vertical) return {};
  return { title: vertical.name, description: vertical.summary };
}

export default async function VerticalDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const vertical = getVerticalBySlug(slug);
  if (!vertical) notFound();

  const related = verticals.filter((v) => v.slug !== slug);
  const index = verticals.findIndex((v) => v.slug === slug);
  const capabilityCount = vertical.groups.reduce(
    (n, g) => n + g.items.length,
    0
  );

  return (
    <>
      <Nav />
      <main className="flex-1">
        <PageHero
          eyebrow={`Platform ${String(index + 1).padStart(2, "0")}`}
          title={vertical.name}
          description={vertical.summary}
          breadcrumb={[
            { label: "Products", href: "/solutions" },
            { label: vertical.name },
          ]}
          meta={[
            { term: "Positioning", value: vertical.tagline },
            { term: "Capabilities", value: String(capabilityCount) },
            {
              term: "Markets",
              value: vertical.regions
                ? vertical.regions.map((r) => r.region).join(" · ")
                : "India · Africa · Middle East · APAC",
            },
          ]}
        />

        {/* Vision / value proposition set as an editorial statement */}
        {(vertical.vision || vertical.valueProposition) && (
          <section className="border-b border-rule py-20 lg:py-24">
            <div className="container-page">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
                {vertical.vision && (
                  <div className="lg:col-span-7">
                    <p className="label">Vision</p>
                    <p className="display mt-6 text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.25]">
                      {vertical.vision}
                    </p>
                  </div>
                )}
                {vertical.valueProposition && (
                  <div className="lg:col-span-5 lg:pt-14">
                    <p className="label">Value proposition</p>
                    <p className="mt-5 text-[1rem] leading-8 text-ink-soft">
                      {vertical.valueProposition}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Capability groups, set as an index rather than cards */}
        <section className="border-b border-rule py-20 lg:py-28">
          <div className="container-page">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-28">
                  <p className="label">What&apos;s included</p>
                  <h2 className="display mt-6 text-[clamp(1.9rem,3.4vw,2.8rem)]">
                    {capabilityCount} capabilities.
                  </h2>
                </div>
              </div>

              <div className="lg:col-span-8">
                {vertical.groups.map((group) => (
                  <div key={group.title} className="mb-14 last:mb-0">
                    <h3 className="mono border-b border-rule-strong pb-3 text-[0.78rem] uppercase tracking-[0.12em] text-ink">
                      {group.title}
                    </h3>
                    <ul className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="border-b border-rule py-3 text-[0.95rem] text-ink-soft"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Markets & customers */}
        {(vertical.regions || vertical.targetCustomers) && (
          <section className="border-b border-rule bg-paper-2 py-20 lg:py-24">
            <div className="container-page">
              {vertical.regions && (
                <>
                  <p className="label">Target markets</p>
                  <div className="mt-8 grid grid-cols-1 border-t border-rule-strong sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-rule">
                    {vertical.regions.map((r) => (
                      <div
                        key={r.region}
                        className="border-b border-rule py-7 lg:border-b-0 lg:px-7 lg:first:pl-0 lg:last:pr-0"
                      >
                        <h3 className="display text-[1.5rem] leading-none">
                          {r.region}
                        </h3>
                        {r.items && (
                          <ul className="mt-4">
                            {r.items.map((item) => (
                              <li
                                key={item}
                                className="py-1 text-[0.88rem] text-ink-soft"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </>
              )}

              {vertical.targetCustomers && (
                <div className={vertical.regions ? "mt-16" : ""}>
                  <p className="label">Who buys this</p>
                  <p className="mt-6 max-w-4xl text-[1.15rem] leading-9 text-ink">
                    {vertical.targetCustomers.join(" · ")}
                  </p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Benefits + revenue model */}
        {(vertical.benefits || vertical.revenueModel) && (
          <section className="border-b border-rule py-20 lg:py-24">
            <div className="container-page grid grid-cols-1 gap-14 lg:grid-cols-2">
              {vertical.benefits && (
                <div>
                  <p className="label">What it changes</p>
                  <ul className="mt-7 border-t border-rule-strong">
                    {vertical.benefits.map((b) => (
                      <li
                        key={b}
                        className="border-b border-rule py-4 text-[1rem] text-ink"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {vertical.revenueModel && (
                <div>
                  <p className="label">Commercial model</p>
                  <ul className="mt-7 border-t border-rule-strong">
                    {vertical.revenueModel.map((r) => (
                      <li
                        key={r}
                        className="border-b border-rule py-4 text-[1rem] text-ink-soft"
                      >
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}

        {related.length > 0 && (
          <section className="border-b border-rule py-16">
            <div className="container-page">
              <p className="label">
                {related.length > 1 ? "Other platforms" : "The other platform"}
              </p>
              <div className="mt-8">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/solutions/${item.slug}`}
                    className="index-row group flex flex-wrap items-baseline justify-between gap-4 border-t border-rule py-7 last:border-b"
                  >
                    <span className="display text-[clamp(1.6rem,3vw,2.2rem)]">
                      {item.name}
                    </span>
                    <span className="flex items-center gap-3 text-[0.95rem] text-ink-soft">
                      {item.tagline}
                      <span
                        aria-hidden
                        className="transition-transform group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
