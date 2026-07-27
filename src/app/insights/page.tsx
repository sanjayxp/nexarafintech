import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Newspaper } from "@phosphor-icons/react/ssr";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { insights } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights | Nexara Fintech",
  description:
    "Perspectives on agency banking, payments, connected banking, compliance and lending infrastructure from the Nexara Fintech team.",
};

export default function InsightsIndex() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <PageHero
          eyebrow="Insights"
          title="Perspectives from the field"
          description="Notes from building and operating banking infrastructure — regulatory shifts, design lessons, and what actually breaks at scale."
          breadcrumb={[{ label: "Insights" }]}
          icon={Newspaper}
          photo="/images/hero-insights.jpg"
        />

        <div className="container-page py-24">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {insights.map((post, i) => (
              <Reveal key={post.slug} delay={i * 60}>
                <Link
                  href={`/insights/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-border transition-colors hover:border-brand-teal/50 hover:bg-brand-surface"
                >
                  <div className="relative h-36 w-full">
                    <Image
                      src={post.cover}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-xs">
                      <span className="rounded-full bg-brand-teal-light px-2.5 py-1 font-semibold text-brand-teal">
                        {post.tag}
                      </span>
                      <span className="text-brand-slate-light">{post.date}</span>
                    </div>
                    <h2 className="mt-4 text-base font-semibold leading-6 text-brand-navy">
                      {post.title}
                    </h2>
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
      </main>
      <Footer />
    </>
  );
}
