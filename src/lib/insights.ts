export type Insight = {
  slug: string;
  tag: string;
  date: string;
  title: string;
  excerpt: string;
  body: { heading?: string; paragraphs: string[] }[];
};

export const insights: Insight[] = [
  {
    slug: "rbi-revised-bc-guidelines",
    tag: "Regulatory",
    date: "Jun 2026",
    title: "What the RBI's revised BC guidelines mean for agency banking",
    excerpt:
      "A practical breakdown of the updated business correspondent framework and what banks need to change in their agent networks.",
    body: [
      {
        paragraphs: [
          "Every revision to the business correspondent framework ripples through agent onboarding, transaction limits, and reporting obligations at once. Institutions running large BC networks tend to feel it first in onboarding — new documentation and training requirements slow down agent activation right when volume is growing.",
          "The practical fix is less about policy interpretation and more about system design: onboarding workflows that can absorb a new mandatory field or verification step without a re-build, and reporting pipelines that already produce the granularity regulators are asking for.",
        ],
      },
      {
        heading: "Where networks usually fall behind",
        paragraphs: [
          "Two patterns show up repeatedly. First, agent hierarchy data that was never modeled cleanly — sub-agents attached informally to a corporate BC with no system record — becomes a scramble to reconstruct when a compliance review asks for it. Second, transaction-limit enforcement that was hardcoded rather than configuration-driven, which turns a rule change into a code deployment instead of a settings update.",
          "Institutions that treat the agent hierarchy and limit configuration as first-class, editable data — rather than something baked into application logic — tend to absorb regulatory revisions in days, not release cycles.",
        ],
      },
      {
        heading: "What to check now",
        paragraphs: [
          "Confirm your onboarding flow can add a new verification step without a code change. Confirm agent hierarchy is queryable, not just enforced. And confirm your commission and limit engine is a configuration layer, not application logic — that's usually the fastest way to tell whether the next guideline update will be a settings change or a project.",
        ],
      },
    ],
  },
  {
    slug: "account-aggregator-adoption-plateau",
    tag: "Connected Banking",
    date: "May 2026",
    title: "Account aggregator adoption is plateauing — here's why",
    excerpt:
      "Consent flow friction and data-fetch latency are the two biggest blockers we see in AA integrations today.",
    body: [
      {
        paragraphs: [
          "Account aggregator volumes grew fast in the framework's early years, largely on the back of lending use cases. But adoption curves across several institutions we work with have flattened well short of where transaction-data-driven underwriting should plateau — and the reasons are more operational than architectural.",
        ],
      },
      {
        heading: "The consent screen is a drop-off point, not a formality",
        paragraphs: [
          "Every additional bank a customer has to select, every extra consent-artefact screen, costs completion rate. Institutions that treat the AA consent journey as a single well-designed flow — pre-filling known information, minimising the number of screens between intent and completion — see materially better completion than those that bolt the AA SDK on as an afterthought.",
        ],
      },
      {
        heading: "Latency changes what the data is useful for",
        paragraphs: [
          "A data-fetch that takes 30 seconds is fine for an overnight underwriting batch and unworkable for a real-time credit decision at checkout. Several BNPL and credit-line integrations we've reviewed were designed assuming near-instant data-fetch, then had to be redesigned around asynchronous decisioning once real-world FIP response times became clear.",
          "The fix isn't waiting for FIPs to get faster — it's designing the credit decision flow to work with the latency that exists today, with a fallback path when data doesn't arrive inside the decisioning window.",
        ],
      },
    ],
  },
  {
    slug: "payment-switch-design-for-upi-scale",
    tag: "Payments",
    date: "May 2026",
    title: "Designing a payment switch that survives UPI's growth curve",
    excerpt:
      "Lessons from scaling switching infrastructure past a billion monthly transactions without a re-platform.",
    body: [
      {
        paragraphs: [
          "UPI's transaction growth has outpaced almost every internal capacity model built five years ago. Switches designed for the volumes of 2021 have needed multiple emergency scaling exercises since — and each one is more disruptive than the last if the underlying architecture wasn't built to scale horizontally from day one.",
        ],
      },
      {
        heading: "Stateless routing beats clever routing",
        paragraphs: [
          "The switches that scaled smoothly share one trait: routing logic that doesn't depend on in-memory state tied to a specific node. That sounds obvious, but a surprising number of switches accumulated per-node caching or session affinity over time as quick fixes for performance problems, and those shortcuts are exactly what makes horizontal scaling painful later.",
        ],
      },
      {
        heading: "Retry logic is a capacity problem too",
        paragraphs: [
          "Naive retry-on-timeout logic quietly multiplies load during exactly the moments a switch is already under stress — a downstream rail slows down, timeouts trigger, retries pile on top of an already-slow system, and a localized slowdown turns into a cascading failure.",
          "Exponential backoff with jitter, and circuit breakers that fail fast to a queued-retry path instead of hammering a struggling rail, are the difference between a rail-level hiccup and a system-wide incident.",
        ],
      },
    ],
  },
  {
    slug: "aeps-cooperative-bank-90-day-rollout",
    tag: "Case Study",
    date: "Apr 2026",
    title: "How a cooperative bank network went live on AePS in 90 days",
    excerpt:
      "A look at the agent onboarding, device provisioning, and compliance workstreams that ran in parallel.",
    body: [
      {
        paragraphs: [
          "A regional cooperative bank network with member coverage across several districts needed AePS-based cash access live before the start of a state benefit disbursal cycle — a fixed deadline with no room to slip. The constraint that mattered most wasn't the technology integration itself; it was running device provisioning, agent training, and NPCI compliance sign-off as parallel workstreams instead of a sequential chain.",
        ],
      },
      {
        heading: "Parallel, not sequential",
        paragraphs: [
          "Device procurement and provisioning started in week one, in parallel with the AePS switch integration — rather than waiting for integration sign-off before ordering hardware. Agent training content was built against the switch's staging environment before production credentials existed, so agents were certified and ready the day devices arrived.",
        ],
      },
      {
        heading: "What made the compliance sign-off fast",
        paragraphs: [
          "NPCI's certification process rewards institutions that submit clean, complete test logs the first time. Building the reconciliation and settlement reporting layer before certification testing began — rather than as a follow-up task — meant the test transactions produced audit-ready logs from the first submission, avoiding a second certification round.",
          "The network processed its first live disbursal-linked withdrawal on day 84, six days ahead of the deadline.",
        ],
      },
    ],
  },
  {
    slug: "video-kyc-at-scale",
    tag: "Compliance",
    date: "Mar 2026",
    title: "Video KYC at scale: what breaks past 10,000 verifications a day",
    excerpt:
      "Operational and technical bottlenecks in high-volume VKYC, and the queuing model that fixed them.",
    body: [
      {
        paragraphs: [
          "Video KYC works cleanly in a pilot. The failure modes only show up at volume — and by the time an institution notices rising abandonment rates, the queuing model is usually the root cause, not the verification logic itself.",
        ],
      },
      {
        heading: "Fixed agent pools don't scale with demand curves",
        paragraphs: [
          "Customer onboarding demand isn't flat through the day — it spikes around lunch hours and evenings. A fixed agent roster sized for average demand means long queues at peak and idle agents off-peak. Dynamic agent allocation, with overflow to a secondary pool during peak windows, cut peak-hour wait times substantially in every deployment we've measured.",
        ],
      },
      {
        heading: "Liveness checks need a fallback path",
        paragraphs: [
          "Network quality varies enormously across a customer base, and a liveness check that times out on a poor connection shouldn't dead-end the session. Building a graceful degradation path — a shorter liveness sequence, or a retry with reduced video quality — recovers a meaningful share of sessions that would otherwise abandon.",
          "The institutions that get VKYC economics right treat the queuing and fallback design as core to the product, not an operations afterthought bolted onto a verification API.",
        ],
      },
    ],
  },
  {
    slug: "wallets-as-dbt-rail",
    tag: "Financial Inclusion",
    date: "Mar 2026",
    title: "Wallets as a DBT rail: design notes from a state rollout",
    excerpt:
      "Why semi-closed wallets remain the fastest path to last-mile benefit transfer in low-connectivity districts.",
    body: [
      {
        paragraphs: [
          "Direct benefit transfer programs default to bank account crediting for good reason — it's the most auditable path. But in districts where beneficiaries don't reliably have an active bank account, or where the nearest branch is hours away, a semi-closed wallet remains the fastest way to get funds into someone's hands.",
        ],
      },
      {
        heading: "Offline tolerance is the real requirement",
        paragraphs: [
          "The technical brief for a rural DBT wallet program almost always undersells how much connectivity varies district to district. A wallet architecture that queues transactions locally and syncs when connectivity returns — rather than assuming a live connection for every operation — is what actually determines whether disbursal reaches beneficiaries on schedule.",
        ],
      },
      {
        heading: "Utilisation reporting is the program's real deliverable",
        paragraphs: [
          "Disbursal is the easy half. Programs are increasingly judged on utilisation reporting — showing where and how funds were actually spent, broken down by merchant category and geography. Building that reporting layer into the wallet from day one, rather than retrofitting it once auditors ask, is the difference between a smooth program review and a scramble.",
        ],
      },
    ],
  },
];

export function getInsightBySlug(slug: string) {
  return insights.find((i) => i.slug === slug);
}
