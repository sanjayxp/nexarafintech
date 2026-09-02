import Link from "next/link";
import { services, railFor } from "@/lib/services";
import { verticals } from "@/lib/verticals";

const totalCapabilities = verticals.reduce(
  (sum, v) => sum + v.groups.reduce((n, g) => n + g.items.length, 0),
  0
);

const rail = {
  mint: { bar: "bg-mint", text: "text-mint" },
  saffron: { bar: "bg-saffron", text: "text-saffron" },
} as const;

export default function ServicesIndex() {
  return (
    <section id="services" className="py-14 lg:py-20">
      <div className="container-page">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="label">What you can build</p>
            <h2 className="display mt-5 text-[clamp(2rem,4.4vw,3.5rem)]">
              {services.length} services,
              <br />
              one ledger.
            </h2>
          </div>
          <p className="max-w-md text-[1.06rem] leading-[1.6] text-bone-dim">
            Colour tracks the rail each service runs on —{" "}
            <span className="text-mint">mint for connected banking</span>,{" "}
            <span className="text-saffron">saffron for the agent network</span>.
            Take one module or the whole stack.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-0.5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const tone = rail[railFor(service.platformSlug)];
            return (
              <Link
                key={service.name}
                href={`/solutions/${service.platformSlug}`}
                className="group flex min-h-[236px] flex-col gap-3 bg-ground-2 p-7 transition-colors hover:bg-ground-3"
              >
                <span className={`h-1 w-11 rounded-sm ${tone.bar}`} />
                <h3 className="display mt-1 text-[1.3rem] leading-tight">
                  {service.name}
                </h3>
                <p className="text-[0.94rem] leading-[1.6] text-bone-dim">
                  {service.description}
                </p>
                <span
                  className={`mono mt-auto text-[0.75rem] uppercase tracking-[0.08em] ${tone.text}`}
                >
                  {service.platform}
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2.5 rounded-full border border-rule-strong px-6 py-3 text-[0.95rem] font-medium text-bone transition-colors hover:border-bone"
          >
            See the full service list
            <span aria-hidden>→</span>
          </Link>
          <p className="mono text-[0.84rem] text-bone-faint">
            {totalCapabilities} capabilities · 2 platforms
          </p>
        </div>
      </div>
    </section>
  );
}
