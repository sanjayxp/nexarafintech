import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import { industries } from "@/lib/industries";
import Reveal from "./Reveal";

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-brand-surface text-brand-navy">
      <div className="container-page">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-teal">
                Industries
              </h2>
              <p className="font-heading mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                Built for regulated financial institutions
              </p>
              <p className="mt-4 text-lg text-brand-slate">
                From national banks to district-level cooperative networks, our
                platform is deployed across every tier of India&apos;s financial
                system.
              </p>
            </div>
            <Link
              href="/industries"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-teal hover:gap-2.5 transition-all shrink-0"
            >
              See all industries
              <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map(({ slug, icon: Icon, name }) => (
              <Link
                key={slug}
                href={`/industries#${slug}`}
                className="flex items-center gap-4 rounded-xl border border-brand-border bg-white p-5 hover:border-brand-teal/40 hover:bg-brand-teal-light/40 transition-colors"
              >
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-teal-light text-brand-teal">
                  <Icon size={20} weight="duotone" />
                </div>
                <p className="text-sm font-medium text-brand-navy">{name}</p>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
