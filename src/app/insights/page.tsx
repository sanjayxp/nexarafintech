import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { getPublishedArticles } from "@/lib/articles";
import { formatArticleDate } from "@/lib/format-date";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Perspectives on agency banking, payments, connected banking, compliance and lending infrastructure from the Nexara Fintech team.",
};

export const dynamic = "force-dynamic";

export default async function InsightsIndex() {
  const articles = await getPublishedArticles();

  return (
    <>
      <Nav />
      <main className="flex flex-1 flex-col">
        <PageHero
          eyebrow="Insights"
          title="Perspectives from the field"
          description="Notes from building and operating banking infrastructure — regulatory shifts, design lessons, and what actually breaks at scale."
          breadcrumb={[{ label: "Insights" }]}
        />

        <div className="container-page py-24">
          {articles.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-rule p-16 text-center text-[0.95rem] text-bone-dim">
              No articles published yet. Check back soon.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((post, i) => (
                <Reveal key={post.slug} delay={i * 60}>
                  <Link
                    href={`/insights/${post.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-rule transition-colors hover:border-mint/50 hover:bg-ground-2"
                  >
                    <div className="relative h-36 w-full bg-gradient-to-br from-bone to-ground-3">
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
                      <div className="flex items-center gap-3 text-[0.8rem]">
                        <span className="rounded-full bg-mint-soft px-2.5 py-1 font-semibold text-mint">
                          {post.tag}
                        </span>
                        <span className="text-bone-faint">
                          {formatArticleDate(post.published_at)}
                        </span>
                      </div>
                      <h2 className="mt-4 text-base font-semibold leading-6 text-bone">
                        {post.title}
                      </h2>
                      <p className="mt-2 flex-1 text-[0.95rem] leading-6 text-bone-dim">
                        {post.excerpt}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-[0.95rem] font-semibold text-mint group-hover:gap-2.5 transition-all">
                        Read more
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
