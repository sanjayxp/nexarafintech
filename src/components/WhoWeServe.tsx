import Link from "next/link";
import { ArrowRight, Bank, HandCoins, Rocket } from "@phosphor-icons/react/ssr";
import Reveal from "./Reveal";

const audiences = [
  {
    icon: Bank,
    label: "For Banks",
    description:
      "Extend branch-equivalent service through an agent network without branch economics. Add channels on top of your existing core, with reporting your regulator already expects.",
    points: ["Agent onboarding & hierarchy", "Cash in / cash out", "Audit-ready reporting"],
    href: "/solutions/agency-banking-solutions",
    color: "#2563eb",
  },
  {
    icon: HandCoins,
    label: "For Lenders & NBFCs",
    description:
      "Collect repayments at the last mile and disburse at volume. Verified beneficiaries, escrow-backed flows, and reconciliation that closes without manual effort.",
    points: ["Loan collections", "Bulk disbursal", "Penny-drop verification"],
    href: "/solutions/connected-banking-platform",
    color: "#4f46e5",
  },
  {
    icon: Rocket,
    label: "For Fintechs & Enterprises",
    description:
      "Launch regulated financial products without holding the licence yourself. One integration for payouts, collections, virtual accounts, and settlement.",
    points: ["Payout & PayIn APIs", "Virtual accounts", "Webhooks & dashboards"],
    href: "/solutions/connected-banking-platform",
    color: "#7c3aed",
  },
];

export default function WhoWeServe() {
  return (
    <section className="bg-white py-24">
      <div className="container-page">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-teal">
                Who we serve
              </h2>
              <p className="font-heading mt-3 text-4xl font-bold tracking-tight text-brand-navy sm:text-5xl">
                Because we built it for your side of the table
              </p>
            </div>
            <Link
              href="/industries"
              className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand-blue transition-all hover:gap-2.5"
            >
              See all industries
              <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {audiences.map((audience, i) => {
            const Icon = audience.icon;
            return (
              <Reveal key={audience.label} delay={i * 90} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-brand-border bg-white p-8 transition-shadow hover:shadow-lg">
                  <span
                    className="inline-flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: `${audience.color}1A`,
                      color: audience.color,
                    }}
                  >
                    <Icon size={24} weight="duotone" />
                  </span>
                  <h3 className="font-heading mt-5 text-xl font-bold text-brand-navy">
                    {audience.label}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-brand-slate">
                    {audience.description}
                  </p>
                  <ul className="mt-5 flex flex-col gap-2">
                    {audience.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-2 text-sm text-brand-navy"
                      >
                        <span
                          className="h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: audience.color }}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={audience.href}
                    className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold transition-all hover:gap-2.5"
                    style={{ color: audience.color }}
                  >
                    See what applies
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
