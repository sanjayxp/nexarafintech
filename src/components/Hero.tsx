import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight, CheckCircle } from "@phosphor-icons/react/ssr";
import { verticals } from "@/lib/verticals";

const points = [
  "RBI & NPCI aligned compliance",
  "API-first core integration",
  "Live in weeks, not quarters",
];

const modules = verticals.map((v) => ({
  icon: v.icon,
  label: v.shortName,
  href: `/solutions/${v.slug}`,
}));

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-brand-navy text-white"
    >
      <div className="bg-hero-gradient pointer-events-none absolute inset-0" />
      <div className="bg-dot-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="bg-glow-teal pointer-events-none absolute -left-24 -top-24 h-[28rem] w-[28rem]" />

      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-[46%] lg:block">
        <div className="relative h-full w-full">
          <Image
            src="/images/hero-team-tablet.jpg"
            alt=""
            fill
            priority
            sizes="46vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(115deg, #071224 0%, rgba(15,36,68,0.55) 18%, rgba(14,165,163,0.35) 60%, rgba(14,165,163,0.15) 100%)",
              mixBlendMode: "multiply",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, #071224 0%, transparent 18%)",
            }}
          />
        </div>

        <div className="absolute left-6 top-1/2 hidden h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-md xl:flex">
          <span className="h-6 w-6 rounded-[5px] bg-brand-teal" />
        </div>

        {modules.map((mod, i) => {
          const Icon = mod.icon;
          return (
            <Link
              key={mod.label}
              href={mod.href}
              className="animate-float-card pointer-events-auto absolute flex items-center gap-2.5 rounded-full bg-white px-4 py-3 shadow-xl transition-transform hover:scale-105"
              style={
                {
                  top: `${18 + i * 24}%`,
                  right: i % 2 === 0 ? "6%" : "16%",
                  animationDelay: `${i * 0.6}s`,
                } as CSSProperties
              }
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-teal-light text-brand-teal">
                <Icon size={16} weight="duotone" />
              </span>
              <span className="text-xs font-semibold text-brand-navy whitespace-nowrap">
                {mod.label}
              </span>
            </Link>
          );
        })}
      </div>

      <div className="container-page relative py-16 lg:py-24">
        <div className="max-w-2xl lg:max-w-xl">
          <p className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-brand-teal-light uppercase">
            Fintech Infrastructure &amp; Advisory
          </p>
          <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
            Digital financial infrastructure for banks and enterprises.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Nexara Fintech builds banking APIs, agency banking networks, and
            market-entry advisory that help financial institutions reach the
            last mile — across India, Africa, and the Middle East.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-teal px-6 py-3.5 text-sm font-semibold text-brand-navy hover:bg-teal-300 transition-colors"
            >
              Talk to our team
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Explore business units
            </Link>
          </div>

          <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-8">
            {points.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2 text-sm text-slate-300"
              >
                <CheckCircle size={16} weight="duotone" className="text-brand-teal shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
