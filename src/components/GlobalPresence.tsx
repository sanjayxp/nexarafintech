import Link from "next/link";
import { ArrowRight, GlobeHemisphereWest } from "@phosphor-icons/react/ssr";
import Reveal from "./Reveal";
import { markets } from "@/lib/markets";

export default function GlobalPresence() {
  return (
    <section id="markets" className="relative overflow-hidden bg-white py-24">
      <div className="bg-hero-gradient pointer-events-none absolute inset-0" />
      <div className="bg-dot-grid pointer-events-none absolute inset-0 opacity-40" />

      <div className="container-page relative">
        <Reveal>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:items-end">
            <div className="lg:col-span-2">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-teal">
                Global footprint
              </h2>
              <p className="font-heading mt-3 text-4xl font-bold tracking-tight text-brand-navy sm:text-5xl">
                Built for four regions, not one
              </p>
              <p className="mt-4 max-w-2xl text-lg text-brand-slate">
                Financial inclusion looks different in every market — different
                regulators, different rails, different economics at the last
                mile. Our platform is built to be localised, not translated.
              </p>
            </div>
            <div className="flex items-center gap-4 lg:justify-end">
              <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-teal-light text-brand-teal">
                <GlobeHemisphereWest size={28} weight="duotone" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-slate-light">
                  Target markets
                </p>
                <p className="mt-1 font-heading text-lg font-bold leading-snug text-brand-navy">
                  India · Africa
                  <br />
                  Middle East · Asia Pacific
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {markets.map((market, i) => (
            <Reveal key={market.region} delay={i * 80} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-brand-border bg-white/80 p-7 backdrop-blur-sm transition-colors hover:border-brand-teal/40">
                <div className="flex items-baseline gap-3">
                  <span className="font-heading text-xs font-bold text-brand-teal tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading text-2xl font-bold tracking-tight text-brand-navy">
                    {market.region}
                  </h3>
                </div>
                <p className="mt-3 flex-1 text-sm leading-6 text-brand-slate">
                  {market.blurb}
                </p>
                <div className="mt-5 flex flex-wrap gap-2 border-t border-brand-border pt-5">
                  {market.institutions.map((institution) => (
                    <span
                      key={institution}
                      className="rounded-full bg-brand-surface px-3 py-1.5 text-xs font-medium text-brand-slate"
                    >
                      {institution}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-teal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#b23d19]"
            >
              Launching in a new market?
              <ArrowRight size={16} />
            </Link>
            <p className="text-sm text-brand-slate">
              Tell us the market and the segment — we&apos;ll map the platform
              to your regulator and rails.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
