import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import { getPublishedArticles } from "@/lib/articles";
import { formatArticleDate } from "@/lib/format-date";
import Reveal from "./Reveal";

export default async function Insights() {
  const articles = await getPublishedArticles();
  const featured = articles.slice(0, 3);

  if (featured.length === 0) return null;

  return (
    <section id="insights" className="py-24 bg-brand-surface">
      <div className="container-page">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-teal">
                Insights
              </h2>
              <p className="font-heading mt-3 text-4xl font-bold tracking-tight text-brand-navy sm:text-5xl">
                Perspectives from the field
              </p>
            </div>
            <Link
              href="/insights"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:gap-2.5 transition-all shrink-0"
            >
              View all insights
              <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((post, i) => (
            <Reveal key={post.slug} delay={i * 80}>
              <Link
                href={`/insights/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-border bg-white transition-colors hover:border-brand-teal/50"
              >
                <div className="relative h-36 w-full bg-gradient-to-br from-brand-navy to-brand-navy-2">
                  {post.cover_image_url && (
                    <Image
                      src={post.cover_image_url}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="rounded-full bg-brand-teal-light px-2.5 py-1 font-semibold text-brand-teal">
                      {post.tag}
                    </span>
                    <span className="text-brand-slate-light">
                      {formatArticleDate(post.published_at)}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-semibold leading-6 text-brand-navy">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-brand-slate">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue group-hover:gap-2.5 transition-all">
                    Read more
                    <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
