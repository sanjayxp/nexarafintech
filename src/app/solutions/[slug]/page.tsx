import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle } from "@phosphor-icons/react/ssr";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
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
  return {
    title: vertical.name,
    description: vertical.summary,
  };
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
  const verticalIndex = verticals.findIndex((v) => v.slug === slug);

  return (
    <>
      <Nav />
      <main className="flex-1">
        <PageHero
          eyebrow={`Business Unit ${String(verticalIndex + 1).padStart(2, "0")}`}
          title={vertical.name}
          description={vertical.tagline}
          icon={vertical.icon}
          breadcrumb={[
            { label: "Solutions", href: "/solutions" },
            { label: vertical.name },
          ]}
        />

        <div className="container-page py-24">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Reveal>
                <h2 className="text-2xl font-semibold tracking-tight text-brand-navy">
                  Overview
                </h2>
                <p className="mt-4 text-lg leading-8 text-brand-slate">
                  {vertical.summary}
                </p>
              </Reveal>

              <Reveal delay={40}>
                <div className="relative mt-8 h-56 w-full overflow-hidden rounded-2xl sm:h-72">
                  <Image
                    src={vertical.photo}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 66vw, 100vw"
                    className="object-cover object-center"
                  />
                  <div
                    className="absolute inset-0 opacity-70"
                    style={{
                      background: `linear-gradient(160deg, ${vertical.color} 0%, transparent 65%)`,
                    }}
                  />
                </div>
              </Reveal>

              {vertical.vision && (
                <Reveal delay={60}>
                  <div
                    className="mt-8 rounded-2xl border-l-4 bg-brand-surface p-6"
                    style={{ borderColor: vertical.color }}
                  >
                    <h3 className="text-sm font-semibold uppercase tracking-wide" style={{ color: vertical.color }}>
                      Vision
                    </h3>
                    <p className="mt-2 text-brand-navy leading-7">{vertical.vision}</p>
                  </div>
                </Reveal>
              )}

              {vertical.valueProposition && (
                <Reveal delay={80}>
                  <div className="mt-6 rounded-2xl border border-brand-border p-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-teal">
                      Value Proposition
                    </h3>
                    <p className="mt-2 text-brand-navy leading-7">
                      {vertical.valueProposition}
                    </p>
                  </div>
                </Reveal>
              )}

              {vertical.groups.map((group, gi) => (
                <Reveal key={group.title} delay={100 + gi * 60}>
                  <h2 className="mt-14 text-2xl font-semibold tracking-tight text-brand-navy">
                    {group.title}
                  </h2>
                  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {group.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-xl border border-brand-border p-4"
                      >
                        <CheckCircle
                          size={18}
                          weight="duotone"
                          className="shrink-0"
                          style={{ color: vertical.color }}
                        />
                        <span className="text-sm font-medium text-brand-navy">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </Reveal>
              ))}

              {vertical.regions && (
                <Reveal delay={160}>
                  <h2 className="mt-14 text-2xl font-semibold tracking-tight text-brand-navy">
                    Target Markets
                  </h2>
                  <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {vertical.regions.map((r) => (
                      <div
                        key={r.region}
                        className="rounded-2xl border border-brand-border p-6"
                      >
                        <h3 className="text-base font-semibold text-brand-navy">
                          {r.region}
                        </h3>
                        {r.items && r.items.length > 0 && (
                          <ul className="mt-3 flex flex-col gap-2">
                            {r.items.map((item) => (
                              <li
                                key={item}
                                className="flex items-center gap-2 text-sm text-brand-slate"
                              >
                                <CheckCircle
                                  size={14}
                                  weight="duotone"
                                  className="shrink-0 text-brand-teal"
                                />
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </Reveal>
              )}

              {vertical.targetCustomers && (
                <Reveal delay={180}>
                  <h2 className="mt-14 text-2xl font-semibold tracking-tight text-brand-navy">
                    Target Customers
                  </h2>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {vertical.targetCustomers.map((c) => (
                      <span
                        key={c}
                        className="rounded-full border border-brand-border px-4 py-2 text-sm font-medium text-brand-navy"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </Reveal>
              )}

              {vertical.benefits && (
                <Reveal delay={200}>
                  <h2 className="mt-14 text-2xl font-semibold tracking-tight text-brand-navy">
                    Customer Benefits
                  </h2>
                  <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {vertical.benefits.map((b) => (
                      <li key={b} className="flex gap-3">
                        <CheckCircle
                          size={18}
                          weight="duotone"
                          className="mt-0.5 shrink-0"
                          style={{ color: vertical.color }}
                        />
                        <span className="text-brand-slate leading-6">{b}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )}
            </div>

            <div className="lg:col-span-1">
              <Reveal delay={80} className="lg:sticky lg:top-24">
                <div
                  className="rounded-2xl border border-t-4 border-brand-border bg-brand-surface p-7"
                  style={{ borderTopColor: vertical.color }}
                >
                  {vertical.revenueModel && (
                    <>
                      <h3
                        className="text-sm font-semibold uppercase tracking-wide"
                        style={{ color: vertical.color }}
                      >
                        Revenue Model
                      </h3>
                      <ul className="mt-5 flex flex-col gap-4">
                        {vertical.revenueModel.map((item) => (
                          <li key={item} className="flex gap-3">
                            <CheckCircle
                              size={18}
                              weight="duotone"
                              className="mt-0.5 shrink-0"
                              style={{ color: vertical.color }}
                            />
                            <span className="text-sm leading-6 text-brand-navy">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  <Link
                    href="/contact"
                    className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-navy px-6 py-3 text-sm font-semibold text-white hover:bg-brand-navy-2 transition-colors"
                  >
                    Talk to our team
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>

          {related.length > 0 && (
            <div className="mt-20 border-t border-brand-border pt-14">
              <Reveal>
                <h2 className="text-2xl font-semibold tracking-tight text-brand-navy">
                  Other business units
                </h2>
                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {related.map((item) => {
                    const RelIcon = item.icon;
                    return (
                      <Link
                        key={item.slug}
                        href={`/solutions/${item.slug}`}
                        className="group flex overflow-hidden rounded-2xl border border-brand-border transition-colors hover:border-brand-teal/50 hover:bg-brand-surface"
                      >
                        <div className="relative h-auto w-28 shrink-0 overflow-hidden sm:w-36">
                          <Image
                            src={item.photo}
                            alt=""
                            fill
                            sizes="144px"
                            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                          />
                          <div
                            className="absolute inset-0 opacity-70"
                            style={{
                              background: `linear-gradient(160deg, ${item.color} 0%, transparent 75%)`,
                            }}
                          />
                        </div>
                        <div className="flex-1 p-6">
                          <div
                            className="inline-flex h-9 w-9 items-center justify-center rounded-lg"
                            style={{ backgroundColor: `${item.color}1A`, color: item.color }}
                          >
                            <RelIcon size={18} weight="duotone" />
                          </div>
                          <h3 className="mt-4 text-base font-semibold text-brand-navy">
                            {item.name}
                          </h3>
                          <p className="mt-2 text-sm leading-6 text-brand-slate">
                            {item.tagline}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </Reveal>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
