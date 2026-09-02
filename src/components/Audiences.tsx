import Link from "next/link";

const audiences = [
  {
    label: "For banks",
    headline: "Reach past the branch",
    body: "Extend branch-equivalent service through an agent network without branch economics, on top of the core you already run.",
    points: ["Agent onboarding & hierarchy", "Cash in / cash out", "Audit-ready reporting"],
    href: "/solutions/agency-banking-solutions",
  },
  {
    label: "For lenders & NBFCs",
    headline: "Collect where borrowers are",
    body: "Disburse at volume and collect at the last mile, with verified beneficiaries and reconciliation that closes without manual effort.",
    points: ["Loan collections", "Bulk disbursal", "Penny-drop verification"],
    href: "/solutions/connected-banking-platform",
  },
  {
    label: "For fintechs & enterprises",
    headline: "Ship without the licence",
    body: "Launch regulated financial products alongside a sponsor bank, using one integration for payouts, collections and settlement.",
    points: ["Payout & PayIn APIs", "Virtual accounts", "Webhooks & dashboards"],
    href: "/solutions/connected-banking-platform",
  },
];

export default function Audiences() {
  return (
    <section className="border-b border-rule py-24 lg:py-32">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="label">Who we build for</p>
            <h2 className="display mt-6 max-w-2xl text-[clamp(2.1rem,4.4vw,3.4rem)]">
              Three ways in.
            </h2>
          </div>
          <Link
            href="/industries"
            className="text-[0.95rem] text-ink-soft underline decoration-rule-strong underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
          >
            By institution type
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-y-12 border-t border-rule-strong lg:grid-cols-3 lg:gap-y-0 lg:divide-x lg:divide-rule">
          {audiences.map((a) => (
            <div key={a.label} className="pt-10 lg:px-10 lg:first:pl-0 lg:last:pr-0">
              <p className="label">{a.label}</p>
              <h3 className="display mt-5 text-[1.85rem] leading-tight">
                {a.headline}
              </h3>
              <p className="mt-4 text-[0.95rem] leading-7 text-ink-soft">
                {a.body}
              </p>
              <ul className="mt-7">
                {a.points.map((p) => (
                  <li
                    key={p}
                    className="border-t border-rule py-2.5 text-[0.88rem] text-ink"
                  >
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                href={a.href}
                className="group mt-7 inline-flex items-center gap-2 text-[0.9rem] font-medium text-ink"
              >
                <span className="border-b border-ink pb-0.5 transition-colors group-hover:border-accent group-hover:text-accent">
                  What applies
                </span>
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
