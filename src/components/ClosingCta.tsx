import Link from "next/link";

export default function ClosingCta() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-page">
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h2 className="display text-[clamp(2.3rem,5.5vw,4.2rem)] leading-[1.05]">
              Tell us the market
              <br />
              and the segment.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pb-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-lg font-medium text-ink"
            >
              <span className="border-b border-ink pb-1 transition-colors group-hover:border-accent group-hover:text-accent">
                Talk to our experts
              </span>
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
            <p className="mono mt-4 text-[0.76rem] text-ink-faint">
              hello@nexarafintech.com · +91 9971886999
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
