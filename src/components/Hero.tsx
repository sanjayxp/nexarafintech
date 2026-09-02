import Link from "next/link";

const facts = [
  ["Coverage", "India · Africa · Middle East · APAC"],
  ["Integration", "REST APIs on your existing core"],
  ["Time to pilot", "3–6 months"],
];

function Row({ k, children }: { k: string; children?: React.ReactNode }) {
  return (
    <div className="whitespace-pre">
      <span className="text-white/45">{k}</span>
      {children}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="border-b border-rule">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-16 pb-20 pt-16 lg:grid-cols-12 lg:gap-12 lg:pb-28 lg:pt-24">
          <div className="lg:col-span-7">
            <p className="label">Banking &amp; payments infrastructure</p>

            <h1 className="display mt-7 text-[clamp(2.9rem,7vw,5.6rem)]">
              Banking that reaches
              <br />
              the <em className="text-accent">last mile</em>.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-ink-soft">
              We build the payout rails, collection accounts and agent networks
              that banks, NBFCs and fintechs use to serve customers far past the
              branch — across India, Africa, the Middle East and Asia Pacific.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-base font-medium text-ink"
              >
                <span className="border-b border-ink pb-1 transition-colors group-hover:border-accent group-hover:text-accent">
                  Talk to our team
                </span>
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
              <Link
                href="/solutions"
                className="text-base text-ink-soft underline decoration-rule-strong underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
              >
                See what we build
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-sm bg-ink">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
                <span className="mono text-[0.7rem] uppercase tracking-[0.12em] text-white/40">
                  Payouts API
                </span>
                <span className="mono text-[0.7rem] text-[#7fbfa1]">
                  201 Created
                </span>
              </div>

              <pre className="mono overflow-x-auto px-5 py-5 text-[0.76rem] leading-[1.85] text-white/85">
                <Row k="POST ">
                  <span className="text-white">/v1/payouts</span>
                </Row>
                <Row k="{" />
                <Row k={'  "amount"'}>
                  <span className="text-white/45">: </span>
                  <span className="text-[#e3cb8a]">25000</span>
                  <span className="text-white/45">,</span>
                </Row>
                <Row k={'  "currency"'}>
                  <span className="text-white/45">: </span>
                  <span className="text-[#7fbfa1]">&quot;INR&quot;</span>
                  <span className="text-white/45">,</span>
                </Row>
                <Row k={'  "mode"'}>
                  <span className="text-white/45">: </span>
                  <span className="text-[#7fbfa1]">&quot;IMPS&quot;</span>
                  <span className="text-white/45">,</span>
                </Row>
                <Row k={'  "beneficiary"'}>
                  <span className="text-white/45">: {"{"}</span>
                </Row>
                <Row k={'    "account"'}>
                  <span className="text-white/45">: </span>
                  <span className="text-[#7fbfa1]">
                    &quot;5010•••••4471&quot;
                  </span>
                  <span className="text-white/45">,</span>
                </Row>
                <Row k={'    "ifsc"'}>
                  <span className="text-white/45">: </span>
                  <span className="text-[#7fbfa1]">&quot;HDFC0000123&quot;</span>
                </Row>
                <Row k="  }" />
                <Row k="}" />
              </pre>

              <div className="border-t border-white/10 px-5 py-4">
                <p className="mono text-[0.76rem] text-white/55">
                  <span className="text-[#7fbfa1]">→</span> settled in 8s ·
                  reconciled automatically
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-rule">
        <div className="container-page">
          <dl className="grid grid-cols-1 divide-y divide-rule sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {facts.map(([term, value]) => (
              <div
                key={term}
                className="py-6 sm:px-8 sm:first:pl-0 sm:last:pr-0"
              >
                <dt className="label">{term}</dt>
                <dd className="mt-2 text-[0.95rem] text-ink">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
