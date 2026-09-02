import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import Reveal from "./Reveal";
import { services } from "@/lib/services";
import { verticals } from "@/lib/verticals";

const totalCapabilities = verticals.reduce(
  (sum, vertical) =>
    sum + vertical.groups.reduce((n, group) => n + group.items.length, 0),
  0
);

export default function ServicesGrid() {
  return (
    <section id="services" className="bg-brand-surface py-24">
      <div className="container-page">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-teal">
              What you can build
            </h2>
            <p className="font-heading mt-3 text-4xl font-bold tracking-tight text-brand-navy sm:text-5xl">
              Our services
            </p>
            <p className="mt-4 text-lg text-brand-slate">
              Every service below runs on the same compliance, reconciliation,
              and settlement layer — take one module or the whole stack.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.name} delay={i * 60} className="h-full">
                <Link
                  href={`/solutions/${service.platformSlug}`}
                  className="group flex h-full flex-col rounded-2xl border border-brand-border bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand-teal/40 hover:shadow-lg"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-teal-light text-brand-teal transition-colors group-hover:bg-brand-teal group-hover:text-white">
                    <Icon size={22} weight="duotone" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-brand-navy">
                    {service.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-brand-slate">
                    {service.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 border-t border-brand-border pt-4 text-xs font-semibold text-brand-slate-light">
                    {service.platform}
                    <ArrowRight
                      size={12}
                      className="text-brand-teal transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={480}>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 rounded-full bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-navy-2"
            >
              See the full service list
              <ArrowRight size={16} />
            </Link>
            <p className="text-sm text-brand-slate">
              {totalCapabilities} capabilities across both platforms,
              documented and API-first.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
