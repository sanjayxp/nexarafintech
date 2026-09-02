const principles = [
  {
    title: "Live in weeks",
    body: "Configure and ship a new territory, rail or programme instead of waiting on a core release cycle.",
    tone: "mint",
  },
  {
    title: "Compliance per market",
    body: "Audit trails, monitoring and KYC/AML are native and configured to your regulator — not bolted on afterwards.",
    tone: "saffron",
  },
  {
    title: "On your existing core",
    body: "Every module integrates over APIs, so you add channels and reach without a migration.",
    tone: "coral",
  },
  {
    title: "No re-platforming",
    body: "From one district to a national switch, the same architecture carries the volume as you grow.",
    tone: "sky",
  },
] as const;

const tones = {
  mint: "text-mint",
  saffron: "text-saffron",
  coral: "text-coral",
  sky: "text-sky",
} as const;

export default function Approach() {
  return (
    <section className="border-y border-rule bg-ground-2 py-24 lg:py-32">
      <div className="container-page">
        <p className="label">Our approach</p>

        <p className="display mt-7 max-w-4xl text-[clamp(1.7rem,3.7vw,2.9rem)] font-medium leading-[1.2]">
          Most banking projects fail on the boring parts —{" "}
          <span className="text-saffron">reconciliation</span>,{" "}
          <span className="text-mint">reporting</span>, the audit an inspector
          asks for two years later. We build those first, then the product on
          top.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
          {principles.map((p, i) => (
            <div key={p.title} className="border-t border-rule-strong pt-6">
              <div className="flex items-baseline gap-4">
                <span className={`mono text-[0.84rem] ${tones[p.tone]}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display text-[1.4rem] leading-tight">
                  {p.title}
                </h3>
              </div>
              <p className="mt-3 max-w-md pl-10 text-[0.98rem] leading-7 text-bone-dim">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
