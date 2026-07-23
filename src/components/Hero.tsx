import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import GlobeGraphic from "./GlobeGraphic";

const points = [
  "RBI & NPCI aligned compliance",
  "API-first core integration",
  "Live in weeks, not quarters",
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-brand-navy text-white"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 0%, rgba(14,165,163,0.35), transparent 60%)",
        }}
      />
      <GlobeGraphic />
      <div className="container-page relative py-24 lg:py-32">
        <p className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-brand-teal-light uppercase">
          Banking & Fintech Infrastructure
        </p>
        <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Agency banking, payments and connected banking, engineered as one platform.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Nexara Fintech builds the infrastructure banks, NBFCs and fintech
          startups use to reach the last mile — business correspondent
          networks, real-time payment switching, open banking APIs, and
          compliance, unified under one contract and one integration.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-teal px-6 py-3.5 text-sm font-semibold text-brand-navy hover:bg-teal-300 transition-colors"
          >
            Talk to our team
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/solutions"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Explore solutions
          </Link>
        </div>

        <ul className="mt-12 flex flex-col gap-3 sm:flex-row sm:gap-8">
          {points.map((point) => (
            <li
              key={point}
              className="flex items-center gap-2 text-sm text-slate-300"
            >
              <CheckCircle2 size={16} className="text-brand-teal shrink-0" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
