import Link from "next/link";
import { services } from "@/lib/services";
import { verticals } from "@/lib/verticals";

const totalCapabilities = verticals.reduce(
  (sum, v) => sum + v.groups.reduce((n, g) => n + g.items.length, 0),
  0
);

export default function ServicesIndex() {
  return (
    <section id="services" className="border-b border-rule py-24 lg:py-32">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <p className="label">Index of services</p>
              <h2 className="display mt-6 text-[clamp(2.1rem,4vw,3.2rem)]">
                Everything runs on
                <br />
                one ledger.
              </h2>
              <p className="mt-6 max-w-sm text-[0.95rem] leading-7 text-ink-soft">
                Take a single module or the whole stack. Compliance,
                reconciliation and settlement are shared underneath, so nothing
                has to be stitched together afterwards.
              </p>
              <p className="mono mt-8 text-[0.8rem] text-ink-faint">
                {totalCapabilities} capabilities · 2 platforms
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-rule">
              {services.map((service, i) => (
                <Link
                  key={service.name}
                  href={`/solutions/${service.platformSlug}`}
                  className="index-row group grid grid-cols-12 items-baseline gap-4 border-b border-rule py-6"
                >
                  <span className="mono col-span-2 text-[0.78rem] text-ink-faint sm:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="col-span-10 sm:col-span-4">
                    <h3 className="text-[1.05rem] font-medium leading-snug text-ink">
                      {service.name}
                    </h3>
                    <p className="mono mt-1.5 text-[0.72rem] text-ink-faint">
                      {service.platform}
                    </p>
                  </div>

                  <p className="col-span-12 text-[0.9rem] leading-7 text-ink-soft sm:col-span-6 sm:col-start-6">
                    {service.description}
                  </p>

                  <span
                    aria-hidden
                    className="col-span-1 hidden text-right text-ink-faint transition-all group-hover:translate-x-1 group-hover:text-accent sm:block"
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
