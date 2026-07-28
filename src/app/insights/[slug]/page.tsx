import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Newspaper } from "@phosphor-icons/react/ssr";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ShareLinks from "@/components/ShareLinks";
import {
  getPublishedArticleBySlug,
  getPublishedArticles,
  parseArticleContent,
} from "@/lib/articles";
import { formatArticleDate } from "@/lib/format-date";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getPublishedArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} | Nexara Fintech`,
    description: article.excerpt,
  };
}

export default async function InsightDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getPublishedArticleBySlug(slug);
  if (!article) notFound();

  const allArticles = await getPublishedArticles();
  const more = allArticles.filter((a) => a.slug !== slug).slice(0, 3);
  const body = parseArticleContent(article.content);
  const shareUrl = `${SITE_URL}/insights/${article.slug}`;

  return (
    <>
      <Nav />
      <main className="flex-1">
        <PageHero
          eyebrow={`${article.tag} · ${formatArticleDate(article.published_at)}`}
          title={article.title}
          icon={Newspaper}
          breadcrumb={[
            { label: "Insights", href: "/insights" },
            { label: article.title },
          ]}
        />

        <div className="container-page py-24">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xl leading-9 text-brand-navy">
                  {article.excerpt}
                </p>
              </div>
              <div className="mt-6">
                <ShareLinks url={shareUrl} title={article.title} />
              </div>
            </Reveal>

            <div className="mt-10 flex flex-col gap-10">
              {body.map((block, i) => (
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
              <div className="mt-14 flex flex-col items-center gap-6 rounded-2xl border border-brand-border bg-brand-surface p-8 text-center">
                <ShareLinks url={shareUrl} title={article.title} />
                <div>
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
