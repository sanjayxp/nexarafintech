import Link from "next/link";

export default function ClosingCta() {
  return (
    <section className="bg-mint py-24 text-mint-deep lg:py-32">
      <div className="container-page">
        <p className="mono text-[0.75rem] uppercase tracking-[0.14em] text-[#0d3a2e]">
          Next step
        </p>
        <h2 className="display mt-5 max-w-[12em] text-[clamp(2.2rem,6vw,4.4rem)] font-extrabold">
          Tell us the market and the segment.
        </h2>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 rounded-full bg-mint-deep px-7 py-4 text-[1rem] font-semibold text-mint transition-opacity hover:opacity-90"
          >
            Talk to our experts
            <span aria-hidden>→</span>
          </Link>
          <p className="mono text-[0.88rem] text-[#0d3a2e]">
            hello@nexarafintech.com · +91 9971886999
          </p>
        </div>
      </div>
    </section>
  );
}
