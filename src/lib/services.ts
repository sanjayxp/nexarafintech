import type { Icon } from "@phosphor-icons/react";
import {
  ArrowsLeftRight,
  Vault,
  ShieldCheck,
  Receipt,
  HandCoins,
  PaperPlaneTilt,
  Lightning,
  QrCode,
} from "@phosphor-icons/react/ssr";

export type Rail = "mint" | "saffron";

export type Service = {
  name: string;
  description: string;
  icon: Icon;
  platform: string;
  platformSlug: string;
};

export const railFor = (slug: string): Rail =>
  slug === "agency-banking-solutions" ? "saffron" : "mint";

export const services: Service[] = [
  {
    name: "Payout APIs",
    description:
      "Disburse to bank accounts, UPI, and wallets at scale — vendor payments, salary processing, and bulk transfers through a single API.",
    icon: ArrowsLeftRight,
    platform: "Connected Banking",
    platformSlug: "connected-banking-platform",
  },
  {
    name: "Collections & PayIn",
    description:
      "Collect at scale with PayIn APIs, virtual accounts, and escrow structures that keep customer funds correctly segregated.",
    icon: Vault,
    platform: "Connected Banking",
    platformSlug: "connected-banking-platform",
  },
  {
    name: "Account Verification",
    description:
      "Validate beneficiaries before you pay them — account validation and penny-drop checks that cut failed transfers and fraud.",
    icon: ShieldCheck,
    platform: "Connected Banking",
    platformSlug: "connected-banking-platform",
  },
  {
    name: "Reconciliation & Settlement",
    description:
      "A settlement engine and reconciliation layer with webhooks and dashboards, so finance closes the day without spreadsheets.",
    icon: Receipt,
    platform: "Connected Banking",
    platformSlug: "connected-banking-platform",
  },
  {
    name: "Cash In / Cash Out",
    description:
      "Cash deposit and withdrawal at agent points, extending branch-equivalent service into areas branch economics can't reach.",
    icon: HandCoins,
    platform: "Agency Banking",
    platformSlug: "agency-banking-solutions",
  },
  {
    name: "Domestic Remittance",
    description:
      "Assisted money transfer through your agent network, with limits, monitoring, and audit trails applied per transaction.",
    icon: PaperPlaneTilt,
    platform: "Agency Banking",
    platformSlug: "agency-banking-solutions",
  },
  {
    name: "Bill Payments & Benefits",
    description:
      "Utility bills, loan collections, insurance premiums, pension payouts, and government benefit distribution at the last mile.",
    icon: Lightning,
    platform: "Agency Banking",
    platformSlug: "agency-banking-solutions",
  },
  {
    name: "Merchant Acceptance",
    description:
      "QR payments, soundbox integration, and a merchant dashboard with settlement and commission handling built in.",
    icon: QrCode,
    platform: "Agency Banking",
    platformSlug: "agency-banking-solutions",
  },
];
