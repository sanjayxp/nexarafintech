import type { Icon } from "@phosphor-icons/react";
import {
  Bank,
  HandCoins,
  UsersThree,
  Rocket,
  Buildings,
  Globe,
} from "@phosphor-icons/react/ssr";

export type Industry = {
  slug: string;
  name: string;
  icon: Icon;
  color: string;
  summary: string;
  challenges: string[];
  relevantVerticals: string[];
};

export const industries: Industry[] = [
  {
    slug: "banks",
    name: "Public & Private Sector Banks",
    icon: Bank,
    color: "#9a3412",
    summary:
      "Banks use our platform to extend reach through agency networks, modernise payment switching, and launch digital-first products without replacing their core banking system.",
    challenges: [
      "Extending branch-equivalent services into geographies without branch economics",
      "Modernising payment switching without disrupting existing settlement processes",
      "Meeting RBI reporting and audit requirements across every new channel",
    ],
    relevantVerticals: ["agency-banking-solutions", "connected-banking-platform"],
  },
  {
    slug: "nbfcs",
    name: "NBFCs & Housing Finance Companies",
    icon: HandCoins,
    color: "#d97706",
    summary:
      "NBFCs rely on our origination, servicing, and account aggregator integrations to underwrite faster and service larger loan books without linear growth in operations headcount.",
    challenges: [
      "Underwriting at volume without proportional growth in credit teams",
      "Connecting to account aggregator data for faster, better-informed decisions",
      "Servicing and collecting across a growing, geographically spread loan book",
    ],
    relevantVerticals: ["connected-banking-platform", "consulting-advisory"],
  },
  {
    slug: "mfis",
    name: "Microfinance Institutions",
    icon: UsersThree,
    color: "#d2491f",
    summary:
      "MFIs use our agency banking and financial inclusion wallet infrastructure to reach borrower groups in low-connectivity areas while keeping disbursal and collection auditable.",
    challenges: [
      "Operating reliably in low-connectivity, rural service areas",
      "Keeping group-lending disbursal and collection fully auditable",
      "Managing a large, distributed field agent network",
    ],
    relevantVerticals: ["agency-banking-solutions"],
  },
  {
    slug: "fintech-startups",
    name: "Fintech Startups & Neobanks",
    icon: Rocket,
    color: "#9a3412",
    summary:
      "Fintech startups build on our neobanking, card issuance, and BNPL modules to launch consumer or embedded-finance products without acquiring their own banking or card licences.",
    challenges: [
      "Launching a licensed financial product without holding a licence directly",
      "Getting a card or BNPL program to market quickly against well-funded competitors",
      "Scaling fraud and risk operations without a large in-house team",
    ],
    relevantVerticals: ["connected-banking-platform"],
  },
  {
    slug: "cooperative-rural-banks",
    name: "Cooperative & Regional Rural Banks",
    icon: Buildings,
    color: "#d97706",
    summary:
      "Cooperative and regional rural banks deploy our AePS, micro-ATM, and remittance rails to serve members and customers across district-level networks with minimal infrastructure investment.",
    challenges: [
      "Serving members across district-level areas without ATM density",
      "Modernising member services without a full core banking replacement",
      "Meeting compliance expectations with limited in-house technology teams",
    ],
    relevantVerticals: ["agency-banking-solutions"],
  },
  {
    slug: "government-psu",
    name: "Government & PSU Payment Programs",
    icon: Globe,
    color: "#d2491f",
    summary:
      "Government and PSU programs use our financial inclusion wallets and bulk payout platform to run direct benefit transfer and welfare disbursal at state or national scale.",
    challenges: [
      "Disbursing benefits accurately to large, verified beneficiary lists",
      "Operating in low-bandwidth rural and semi-urban deployment areas",
      "Producing transparent utilisation reports for program audits",
    ],
    relevantVerticals: ["agency-banking-solutions", "connected-banking-platform"],
  },
];

export function getIndustryBySlug(slug: string) {
  return industries.find((i) => i.slug === slug);
}
