import { CaretDown } from "@phosphor-icons/react/ssr";
import Reveal from "./Reveal";

const faqs = [
  {
    question: "Which markets do you work in?",
    answer:
      "India, Africa, the Middle East, and Asia Pacific. Our platform is deployed and localised per market — regulatory reporting, payment rails, and agent workflows differ in each, and we configure rather than force a single template.",
  },
  {
    question: "Do we need our own banking licence?",
    answer:
      "No. Most of our clients are already regulated institutions and we sit inside their licence as a technology provider. If you're a fintech or enterprise without one, we typically deploy alongside a sponsor bank and integrate against their licence.",
  },
  {
    question: "How long does a deployment take?",
    answer:
      "A focused agency banking or connected banking rollout typically runs 3–6 months from signed scope to live pilot, depending on your core system and certification requirements. We publish indicative timelines per stage rather than a single number.",
  },
  {
    question: "Do you replace our core banking system?",
    answer:
      "No. We integrate with it. Every module is built to sit on top of an existing core through APIs, so you can add channels and reach without a core migration or a forced re-platform later as volume grows.",
  },
  {
    question: "How do you handle compliance across different regulators?",
    answer:
      "Audit trails, transaction monitoring, KYC/AML checks, and reporting are native to the platform rather than added afterwards. The specific rule set is configured per market — RBI and NPCI frameworks in India, and the equivalent central bank and scheme requirements elsewhere.",
  },
  {
    question: "Can we start with a pilot?",
    answer:
      "Yes, and we recommend it. Most engagements begin with a single territory or customer segment so you can validate unit economics and operational load before committing to a wider rollout.",
  },
];

export default function Faq() {
  return (
    <section className="bg-white py-24">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <Reveal>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-teal">
                FAQ
              </h2>
              <p className="font-heading mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                Questions we get early
              </p>
              <p className="mt-4 text-brand-slate leading-7">
                If yours isn&apos;t here, send it over — we&apos;d rather
                answer it before a call than during one.
              </p>
            </div>
          </Reveal>

          <div className="lg:col-span-2">
            <Reveal delay={100}>
              <div className="divide-y divide-brand-border border-y border-brand-border">
                {faqs.map((faq) => (
                  <details key={faq.question} className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-base font-semibold text-brand-navy transition-colors hover:text-brand-teal [&::-webkit-details-marker]:hidden">
                      {faq.question}
                      <CaretDown
                        size={18}
                        className="shrink-0 text-brand-slate-light transition-transform duration-200 group-open:rotate-180"
                      />
                    </summary>
                    <p className="pb-5 pr-10 text-sm leading-7 text-brand-slate">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
