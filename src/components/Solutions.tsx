import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "@phosphor-icons/react/ssr";
import Reveal from "./Reveal";
import { verticals } from "@/lib/verticals";

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="container-page">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-teal">
                What we do
              </h2>
              <p className="mt-3 text-3xl font-semibold tracking-tight text-brand-navy sm:text-4xl">
                Three business units, one platform
              </p>
              <p className="mt-4 text-lg text-brand-slate">
                From enterprise banking APIs to last-mile agency banking and
                market-entry advisory — built to move fast without breaking
                compliance.
              </p>
            </div>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:gap-2.5 transition-all shrink-0"
            >
              See all business units
              <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {verticals.map((vertical, i) => {
            const Icon = vertical.icon;
            const highlights = vertical.groups[0]?.items.slice(0, 4) ?? [];
            return (
              <Reveal key={vertical.slug} delay={i * 80} className="h-full">
                <Link
                  href={`/solutions/${vertical.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-border transition-colors hover:border-brand-teal/50"
                >
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                      src={vertical.photo}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 opacity-60"
                      style={{
                        background: `linear-gradient(160deg, ${vertical.color} 0%, transparent 75%)`,
                      }}
                    />
                    <div
                      className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/95 shadow-sm"
                      style={{ color: vertical.color }}
                    >
                      <Icon size={20} weight="duotone" />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <span
                      className="text-xs font-semibold uppercase tracking-wide"
                      style={{ color: vertical.color }}
                    >
                      Business Unit {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold text-brand-navy">
                      {vertical.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-brand-slate">
                      {vertical.tagline}
                    </p>

                    <ul className="mt-4 flex flex-col gap-2">
                      {highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-sm text-brand-slate"
                        >
                          <CheckCircle
                            size={14}
                            weight="duotone"
                            className="shrink-0 text-brand-teal"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue group-hover:gap-2.5 transition-all">
                      Explore {vertical.shortName}
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
