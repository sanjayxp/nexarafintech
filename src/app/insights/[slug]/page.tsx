import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Newspaper } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { insights, getInsightBySlug } from "@/lib/insights";

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight) return {};
  return {
    title: `${insight.title} | Nexara Fintech`,
    description: insight.excerpt,
  };
}

export default async function InsightDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight) notFound();

  const more = insights.filter((i) => i.slug !== slug).slice(0, 3);

  return (
    <>
      <Nav />
      <main className="flex-1">
        <PageHero
          eyebrow={`${insight.tag} · ${insight.date}`}
          title={insight.title}
          icon={Newspaper}
          breadcrumb={[
            { label: "Insights", href: "/insights" },
            { label: insight.title },
          ]}
        />

        <div className="container-page py-24">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <p className="text-xl leading-9 text-brand-navy">
                {insight.excerpt}
              </p>
            </Reveal>

            <div className="mt-10 flex flex-col gap-10">
              {insight.body.map((block, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div>
                    {block.heading && (
                      <h2 className="text-xl font-semibold tracking-tight text-brand-navy">
                        {block.heading}
                      </h2>
                    )}
                    <div className="mt-3 flex flex-col gap-4">
                      {block.paragraphs.map((p, j) => (
                        <p key={j} className="text-brand-slate leading-8">
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div className="mt-14 rounded-2xl border border-brand-border bg-brand-surface p-8 text-center">
                <p className="text-lg font-semibold text-brand-navy">
                  Want to talk through how this applies to your network?
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-brand-navy px-6 py-3 text-sm font-semibold text-white hover:bg-brand-navy-2 transition-colors"
                >
                  Talk to our team
                  <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
          </div>

          {more.length > 0 && (
            <div className="mx-auto mt-20 max-w-5xl border-t border-brand-border pt-14">
              <Reveal>
                <h2 className="text-2xl font-semibold tracking-tight text-brand-navy">
                  More insights
                </h2>
                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
                  {more.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/insights/${post.slug}`}
                      className="group flex flex-col rounded-2xl border border-brand-border p-6 transition-colors hover:border-brand-teal/50 hover:bg-brand-surface"
                    >
                      <span className="text-xs font-semibold text-brand-teal">
                        {post.tag}
                      </span>
                      <h3 className="mt-3 text-sm font-semibold leading-6 text-brand-navy">
                        {post.title}
                      </h3>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue group-hover:gap-2.5 transition-all">
                        Read more
                        <ArrowRight size={12} />
                      </span>
                    </Link>
                  ))}
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
