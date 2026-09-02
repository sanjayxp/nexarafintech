import Link from "next/link";
import { markets } from "@/lib/markets";

export default function Markets() {
  return (
    <section id="markets" className="bg-ink text-paper">
      <div className="container-page py-24 lg:py-32">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="mono text-[0.75rem] uppercase tracking-[0.12em] text-white/40">
              Where we operate
            </p>
            <h2 className="display mt-6 text-[clamp(2.1rem,4vw,3.2rem)] text-paper">
              Four regions,
              <br />
              localised — not
              <br />
              translated.
            </h2>
            <p className="mt-6 max-w-sm text-[1rem] leading-7 text-white/60">
              Regulators, rails and last-mile economics differ in every market.
              The platform is configured per region rather than exported from
              one.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-white/15">
              {markets.map((market, i) => (
                <div
                  key={market.region}
                  className="grid grid-cols-12 gap-4 border-b border-white/15 py-8"
                >
                  <span className="mono col-span-2 pt-2 text-[0.85rem] text-white/35 sm:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="col-span-10 sm:col-span-4">
                    <h3 className="display text-[1.75rem] leading-none text-paper">
                      {market.region}
                    </h3>
                  </div>

                  <div className="col-span-12 sm:col-span-7">
                    <p className="text-[0.98rem] leading-7 text-white/65">
                      {market.blurb}
                    </p>
                    <p className="mono mt-3 text-[0.8rem] leading-6 text-[#7fbfa1]">
                      {market.institutions.join("  ·  ")}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="group mt-10 inline-flex items-center gap-2 text-[1rem] font-medium text-paper"
            >
              <span className="border-b border-paper pb-0.5 transition-colors group-hover:border-[#7fbfa1] group-hover:text-[#7fbfa1]">
                Launching in a new market
              </span>
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
