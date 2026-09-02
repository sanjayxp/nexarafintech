const principles = [
  {
    title: "Live in weeks",
    body: "Configure and ship a new territory, rail or programme instead of waiting on a core release cycle.",
  },
  {
    title: "Compliance per market",
    body: "Audit trails, monitoring and KYC/AML are native and configured to your regulator — not bolted on afterwards.",
  },
  {
    title: "On your existing core",
    body: "Every module integrates over APIs, so you add channels and reach without a migration.",
  },
  {
    title: "No re-platforming",
    body: "From one district to a national switch, the same architecture carries the volume as you grow.",
  },
];

export default function Approach() {
  return (
    <section className="border-b border-rule bg-paper-2 py-24 lg:py-32">
      <div className="container-page">
        <p className="label">Our approach</p>

        <p className="display mt-8 max-w-4xl text-[clamp(1.9rem,3.7vw,3rem)] leading-[1.18]">
          Most banking projects fail on the boring parts — reconciliation,
          reporting, the audit an inspector asks for two years later. We build
          those first, then the product on top.
        </p>

        <div className="mt-20 grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2">
          {principles.map((p, i) => (
            <div key={p.title} className="border-t border-rule-strong pt-6">
              <div className="flex items-baseline gap-4">
                <span className="mono text-[0.78rem] text-ink-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display text-[1.5rem] leading-tight">
                  {p.title}
                </h3>
              </div>
              <p className="mt-3 max-w-md pl-9 text-[0.95rem] leading-7 text-ink-soft">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
