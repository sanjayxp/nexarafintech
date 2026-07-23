import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
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
        />

        <div className="container-page py-20">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {insights.map((post) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                className="group flex flex-col rounded-xl border border-brand-border p-6 transition-colors hover:border-brand-teal/50 hover:bg-brand-surface"
              >
                <div className="h-32 w-full rounded-lg bg-gradient-to-br from-brand-navy to-brand-navy-2" />
                <div className="mt-5 flex items-center gap-3 text-xs">
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
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
