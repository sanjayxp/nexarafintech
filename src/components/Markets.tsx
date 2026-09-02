import Link from "next/link";
import { markets } from "@/lib/markets";

const tones = {
  mint: { border: "border-l-mint", text: "text-mint" },
  saffron: { border: "border-l-saffron", text: "text-saffron" },
  coral: { border: "border-l-coral", text: "text-coral" },
  sky: { border: "border-l-sky", text: "text-sky" },
} as const;

export default function Markets() {
  return (
    <section id="markets" className="py-24 lg:py-32">
      <div className="container-page">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="label">Where we operate</p>
            <h2 className="display mt-5 text-[clamp(2rem,4.4vw,3.5rem)]">
              Four regions,
              <br />
              four rulebooks.
            </h2>
          </div>
          <p className="max-w-md text-[1.06rem] leading-[1.6] text-bone-dim">
            Regulators, rails and last-mile economics differ in every market.
            The platform is configured per region rather than exported from one.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-0.5 md:grid-cols-2">
          {markets.map((market, i) => {
            const tone = tones[market.tone];
            return (
              <div
                key={market.region}
                className={`flex flex-col gap-3.5 border-l-[3px] bg-ground-2 p-8 ${tone.border}`}
              >
                <div className="flex items-baseline gap-3.5">
                  <span className={`mono text-[0.84rem] ${tone.text}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display text-[1.9rem] leading-none">
                    {market.region}
                  </h3>
                </div>
                <p className="text-[0.98rem] leading-[1.6] text-bone-dim">
                  {market.blurb}
                </p>
                <div className="mt-1 flex flex-wrap gap-1.5">
                  {market.institutions.map((institution) => (
                    <span
                      key={institution}
                      className="mono rounded-full border border-rule px-3 py-1.5 text-[0.75rem] text-bone-dim"
                    >
                      {institution}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <Link
          href="/contact"
          className="group mt-10 inline-flex items-center gap-2.5 text-[1rem] font-medium text-bone"
        >
          <span className="border-b border-bone pb-1 transition-colors group-hover:border-mint group-hover:text-mint">
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
    </section>
  );
}
