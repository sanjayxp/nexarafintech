import Link from "next/link";

const audiences = [
  {
    label: "For banks",
    headline: "Reach past the branch",
    body: "Extend branch-equivalent service through an agent network without branch economics, on top of the core you already run.",
    points: [
      "Agent onboarding & hierarchy",
      "Cash in / cash out",
      "Audit-ready reporting",
    ],
    href: "/solutions/agency-banking-solutions",
    tone: "saffron",
  },
  {
    label: "For lenders & NBFCs",
    headline: "Collect where borrowers are",
    body: "Disburse at volume and collect at the last mile, with verified beneficiaries and reconciliation that closes without manual effort.",
    points: ["Loan collections", "Bulk disbursal", "Penny-drop verification"],
    href: "/solutions/connected-banking-platform",
    tone: "mint",
  },
  {
    label: "For fintechs & enterprises",
    headline: "Ship without the licence",
    body: "Launch regulated financial products alongside a sponsor bank, using one integration for payouts, collections and settlement.",
    points: ["Payout & PayIn APIs", "Virtual accounts", "Webhooks & dashboards"],
    href: "/solutions/connected-banking-platform",
    tone: "sky",
  },
] as const;

const tones = {
  mint: { bar: "bg-mint", text: "text-mint", dot: "bg-mint" },
  saffron: { bar: "bg-saffron", text: "text-saffron", dot: "bg-saffron" },
  sky: { bar: "bg-sky", text: "text-sky", dot: "bg-sky" },
} as const;

export default function Audiences() {
  return (
    <section className="py-14 lg:py-20">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="label">Who we build for</p>
            <h2 className="display mt-5 text-[clamp(2rem,4.4vw,3.5rem)]">
              Three ways in.
            </h2>
          </div>
          <Link
            href="/industries"
            className="text-[1rem] text-bone-dim underline decoration-rule-strong underline-offset-4 transition-colors hover:text-bone hover:decoration-bone"
          >
            By institution type
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-0.5 lg:grid-cols-3">
          {audiences.map((a) => {
            const tone = tones[a.tone];
            return (
              <div key={a.label} className="bg-ground-2 p-8 lg:p-9">
                <span className={`block h-1 w-11 rounded-sm ${tone.bar}`} />
                <p className={`mono mt-6 text-[0.78rem] uppercase tracking-[0.12em] ${tone.text}`}>
                  {a.label}
                </p>
                <h3 className="display mt-4 text-[1.65rem] leading-tight">
                  {a.headline}
                </h3>
                <p className="mt-4 text-[0.98rem] leading-[1.6] text-bone-dim">
                  {a.body}
                </p>
                <ul className="mt-7 flex flex-col gap-2.5">
                  {a.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-3 text-[0.94rem] text-bone"
                    >
                      <span
                        className={`h-1.5 w-1.5 shrink-0 rounded-full ${tone.dot}`}
                      />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  href={a.href}
                  className={`group mt-8 inline-flex items-center gap-2 text-[0.95rem] font-medium ${tone.text}`}
                >
                  <span className="border-b border-current pb-0.5">
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
