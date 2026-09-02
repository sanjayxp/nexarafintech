import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, SquaresFour } from "@phosphor-icons/react/ssr";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { verticals } from "@/lib/verticals";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "Nexara Fintech operates two platforms: the Connected Banking Platform for enterprise banking APIs and Agency Banking Solutions for last-mile distribution.",
};

export default function SolutionsIndex() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <PageHero
          eyebrow="What we do"
          title="Two platforms, one integration"
          description="Enterprise banking APIs and last-mile agency banking — built to help banks, fintechs and enterprises move faster without breaking compliance."
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
                    className="grid scroll-mt-24 grid-cols-1 overflow-hidden rounded-2xl border border-brand-border lg:grid-cols-12"
                  >
                    <div
                      className={`relative h-56 lg:h-auto lg:col-span-4 ${
                        i % 2 === 1 ? "lg:order-2" : ""
                      }`}
                    >
                      <Image
                        src={vertical.photo}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        className="object-cover object-center"
                      />
                      <div
                        className="absolute inset-0 opacity-70"
                        style={{
                          background: `linear-gradient(160deg, ${vertical.color} 0%, transparent 65%)`,
                        }}
                      />
                      <div
                        className="absolute bottom-4 left-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/95 shadow-sm"
                        style={{ color: vertical.color }}
                      >
                        <Icon size={20} weight="duotone" />
                      </div>
                    </div>

                    <div className="p-8 lg:col-span-4 lg:p-10">
                      <span className="text-xs font-semibold text-brand-slate-light">
                        PLATFORM {String(i + 1).padStart(2, "0")} / {String(verticals.length).padStart(2, "0")}
                      </span>
                      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-brand-navy">
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

                    <div className="border-t border-brand-border p-8 lg:col-span-4 lg:border-l lg:border-t-0 lg:p-10">
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-teal">
                        {allItems.length} services &amp; capabilities
                      </h3>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {allItems.slice(0, 10).map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-brand-border px-3 py-1.5 text-xs font-medium text-brand-slate"
                          >
                            {item}
                          </span>
                        ))}
                        {allItems.length > 10 && (
                          <span className="rounded-full px-3 py-1.5 text-xs font-semibold text-brand-blue">
                            +{allItems.length - 10} more
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
