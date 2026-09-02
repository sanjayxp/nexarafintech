const faqs = [
  {
    question: "Which markets do you work in?",
    answer:
      "India, Africa, the Middle East and Asia Pacific. The platform is localised per market — regulatory reporting, payment rails and agent workflows differ in each, and we configure rather than force a single template.",
  },
  {
    question: "Do we need our own banking licence?",
    answer:
      "No. Most of our clients are already regulated institutions and we sit inside their licence as a technology provider. If you're a fintech or enterprise without one, we deploy alongside a sponsor bank and integrate against their licence.",
  },
  {
    question: "How long does a deployment take?",
    answer:
      "A focused agency banking or connected banking rollout typically runs three to six months from signed scope to live pilot, depending on your core system and certification requirements.",
  },
  {
    question: "Do you replace our core banking system?",
    answer:
      "No — we integrate with it. Every module sits on top of an existing core through APIs, so you add channels and reach without a core migration, or a forced re-platform later as volume grows.",
  },
  {
    question: "How do you handle compliance across regulators?",
    answer:
      "Audit trails, transaction monitoring, KYC/AML checks and reporting are native to the platform rather than added afterwards. The rule set is configured per market — RBI and NPCI frameworks in India, and the equivalent central bank and scheme requirements elsewhere.",
  },
  {
    question: "Can we start with a pilot?",
    answer:
      "Yes, and we recommend it. Most engagements begin with a single territory or customer segment so you can validate unit economics and operational load before a wider rollout.",
  },
];

export default function Faq() {
  return (
    <section className="border-b border-rule py-24 lg:py-32">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="label">Common questions</p>
            <h2 className="display mt-6 text-[clamp(1.9rem,3.4vw,2.8rem)]">
              Asked early,
              <br />
              answered here.
            </h2>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-rule-strong">
              {faqs.map((faq) => (
                <details key={faq.question} className="group border-b border-rule">
                  <summary className="flex cursor-pointer list-none items-baseline gap-6 py-5 text-[1.08rem] text-bone transition-colors hover:text-mint [&::-webkit-details-marker]:hidden">
                    <span className="flex-1">{faq.question}</span>
                    <span
                      aria-hidden
                      className="mono shrink-0 text-bone-faint transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="max-w-2xl pb-6 text-[1rem] leading-8 text-bone-dim">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
