import { Building2, Banknote, Users, Layers, Landmark, Globe2, LucideIcon } from "lucide-react";

export type Industry = {
  slug: string;
  name: string;
  icon: LucideIcon;
  summary: string;
  challenges: string[];
  relevantSolutions: string[];
};

export const industries: Industry[] = [
  {
    slug: "banks",
    name: "Public & Private Sector Banks",
    icon: Building2,
    summary:
      "Banks use our platform to extend reach through agency networks, modernise payment switching, and launch digital-first products without replacing their core banking system.",
    challenges: [
      "Extending branch-equivalent services into geographies without branch economics",
      "Modernising payment switching without disrupting existing settlement processes",
      "Meeting RBI reporting and audit requirements across every new channel",
    ],
    relevantSolutions: [
      "agency-banking",
      "payment-switch",
      "core-banking",
      "digital-banking",
    ],
  },
  {
    slug: "nbfcs",
    name: "NBFCs & Housing Finance Companies",
    icon: Banknote,
    summary:
      "NBFCs rely on our origination, servicing, and account aggregator integrations to underwrite faster and service larger loan books without linear growth in operations headcount.",
    challenges: [
      "Underwriting at volume without proportional growth in credit teams",
      "Connecting to account aggregator data for faster, better-informed decisions",
      "Servicing and collecting across a growing, geographically spread loan book",
    ],
    relevantSolutions: [
      "loan-origination-system",
      "loan-management-system",
      "connected-open-banking",
      "fraud-risk-management",
    ],
  },
  {
    slug: "mfis",
    name: "Microfinance Institutions",
    icon: Users,
    summary:
      "MFIs use our agency banking and financial inclusion wallet infrastructure to reach borrower groups in low-connectivity areas while keeping disbursal and collection auditable.",
    challenges: [
      "Operating reliably in low-connectivity, rural service areas",
      "Keeping group-lending disbursal and collection fully auditable",
      "Managing a large, distributed field agent network",
    ],
    relevantSolutions: [
      "agency-banking",
      "bc-lifecycle-management",
      "financial-inclusion-wallets",
      "loan-management-system",
    ],
  },
  {
    slug: "fintech-startups",
    name: "Fintech Startups & Neobanks",
    icon: Layers,
    summary:
      "Fintech startups build on our neobanking, card issuance, and BNPL modules to launch consumer or embedded-finance products without acquiring their own banking or card licences.",
    challenges: [
      "Launching a licensed financial product without holding a licence directly",
      "Getting a card or BNPL program to market quickly against well-funded competitors",
      "Scaling fraud and risk operations without a large in-house team",
    ],
    relevantSolutions: [
      "neobanking",
      "prepaid-card-issuance",
      "bnpl-platform",
      "fraud-risk-management",
    ],
  },
  {
    slug: "cooperative-rural-banks",
    name: "Cooperative & Regional Rural Banks",
    icon: Landmark,
    summary:
      "Cooperative and regional rural banks deploy our AePS, micro-ATM, and remittance rails to serve members and customers across district-level networks with minimal infrastructure investment.",
    challenges: [
      "Serving members across district-level areas without ATM density",
      "Modernising member services without a full core banking replacement",
      "Meeting compliance expectations with limited in-house technology teams",
    ],
    relevantSolutions: [
      "aeps-micro-atm",
      "domestic-remittance",
      "onboarding-kyc",
      "reconciliation",
    ],
  },
  {
    slug: "government-psu",
    name: "Government & PSU Payment Programs",
    icon: Globe2,
    summary:
      "Government and PSU programs use our financial inclusion wallets and bulk payout platform to run direct benefit transfer and welfare disbursal at state or national scale.",
    challenges: [
      "Disbursing benefits accurately to large, verified beneficiary lists",
      "Operating in low-bandwidth rural and semi-urban deployment areas",
      "Producing transparent utilisation reports for program audits",
    ],
    relevantSolutions: [
      "financial-inclusion-wallets",
      "payout-platform",
      "onboarding-kyc",
      "reconciliation",
    ],
  },
];

export function getIndustryBySlug(slug: string) {
  return industries.find((i) => i.slug === slug);
}
