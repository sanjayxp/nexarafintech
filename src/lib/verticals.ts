import type { Icon } from "@phosphor-icons/react";
import { Plugs, Bank } from "@phosphor-icons/react/ssr";

export type ContentGroup = { title: string; items: string[] };
export type RegionGroup = { region: string; items?: string[] };

export type Vertical = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  summary: string;
  icon: Icon;
  photo: string;
  vision?: string;
  valueProposition?: string;
  groups: ContentGroup[];
  targetCustomers?: string[];
  regions?: RegionGroup[];
  benefits?: string[];
  revenueModel?: string[];
};

export const verticals: Vertical[] = [
  {
    slug: "connected-banking-platform",
    name: "Connected Banking Platform",
    shortName: "Connected Banking",
    tagline: "Banking infrastructure, as an API.",
    summary:
      "Enterprise APIs for payouts, collections, virtual accounts and reconciliation — so money moves without a separate build for every bank you work with.",
    icon: Plugs,
    photo: "/images/platform-connected-banking.jpg",
    groups: [
      {
        title: "Services",
        items: [
          "Payout APIs",
          "PayIn APIs",
          "Virtual Accounts",
          "Escrow Accounts",
          "Bulk Payments",
          "Vendor Payments",
          "Salary Processing",
          "Collections",
          "Account Validation",
          "Penny Drop Verification",
          "Reconciliation",
          "Webhooks",
          "Settlement Engine",
          "Dashboard",
          "ERP Integrations",
        ],
      },
    ],
    targetCustomers: [
      "Fintechs",
      "NBFCs",
      "Enterprises",
      "Marketplaces",
      "Payroll Companies",
      "SaaS Platforms",
      "ERP Providers",
    ],
    revenueModel: [
      "API Charges",
      "Transaction Fees",
      "Monthly Platform Fees",
      "Enterprise Licensing",
      "Integration Fees",
    ],
  },
  {
    slug: "agency-banking-solutions",
    name: "Agency Banking Solutions",
    shortName: "Agency Banking",
    tagline: "Extend the branch, without the branch.",
    summary:
      "Bank services delivered through merchants, correspondents, retailers and MFIs — so customers can deposit, withdraw and pay where there is no branch.",
    icon: Bank,
    photo: "/images/platform-agency-banking.jpg",
    vision:
      "To help banks digitally extend their branch network through merchants, business correspondents, retailers, MFIs, and agents.",
    valueProposition:
      "Instead of opening expensive branches, banks can acquire customers and deliver banking services through a secure digital agency banking platform.",
    groups: [
      {
        title: "Agent Management",
        items: [
          "Digital Agent Onboarding",
          "KYC",
          "Hierarchy Management",
          "Territory Management",
        ],
      },
      {
        title: "Customer Services",
        items: [
          "Cash Deposit",
          "Cash Withdrawal",
          "Domestic Remittance",
          "Bill Payments",
          "Merchant Payments",
          "Account Opening",
          "Loan Collections",
          "Insurance Distribution",
          "Government Benefit Distribution",
          "Pension Payments",
        ],
      },
      {
        title: "Merchant Services",
        items: [
          "QR Payments",
          "Soundbox Integration",
          "Settlement",
          "Merchant Dashboard",
        ],
      },
      {
        title: "Risk Management",
        items: [
          "Transaction Monitoring",
          "Fraud Detection",
          "Geo Tracking",
          "Agent Limits",
          "AML Monitoring",
          "Real-Time Alerts",
        ],
      },
      {
        title: "Management Dashboard",
        items: [
          "Live Transactions",
          "Revenue",
          "Agent Performance",
          "Customer Analytics",
          "Settlement Reports",
          "Commission Engine",
        ],
      },
    ],
    regions: [
      {
        region: "India",
        items: [
          "Small Finance Banks",
          "Cooperative Banks",
          "NBFCs",
          "Regional Rural Banks",
        ],
      },
      {
        region: "Africa",
        items: [
          "Commercial Banks",
          "Microfinance Banks",
          "Digital Banks",
          "Mobile Money Operators",
        ],
      },
      {
        region: "Middle East",
        items: [
          "Islamic Banks",
          "Money Exchange Companies",
          "Digital Banks",
          "Fintechs",
        ],
      },
      {
        region: "Asia Pacific",
        items: ["Banks", "Payment Companies", "Rural Financial Institutions"],
      },
    ],
    benefits: [
      "Expand banking reach without branches",
      "Lower operating costs",
      "Increase deposits",
      "Improve financial inclusion",
      "Generate new revenue streams",
      "Launch in weeks instead of years",
    ],
    revenueModel: [
      "Enterprise License",
      "Annual Maintenance Contract",
      "Implementation Fees",
      "Cloud Subscription",
      "Professional Services",
      "Custom Development",
    ],
  },
];

export function getVerticalBySlug(slug: string) {
  return verticals.find((v) => v.slug === slug);
}
