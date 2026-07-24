import type { Icon } from "@phosphor-icons/react";
import {
  Bank,
  UsersThree,
  Wallet,
  HandHeart,
  Fingerprint,
  CreditCard,
  IdentificationCard,
  Coins,
  Buildings,
  Scan,
  QrCode,
  SpeakerHigh,
  Storefront,
  ArrowsLeftRight,
  Receipt,
  PaperPlaneTilt,
  Money,
  Globe,
  UserFocus,
  ShieldWarning,
  ArrowsClockwise,
  Stack,
  MagnifyingGlass,
  CalendarCheck,
  CurrencyInr,
  Database,
  DeviceMobile,
  ShareNetwork,
} from "@phosphor-icons/react/ssr";

export type Category = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
};

export type Solution = {
  slug: string;
  category: string;
  name: string;
  tagline: string;
  icon: Icon;
  overview: string;
  features: { title: string; description: string }[];
  howItWorks: string[];
  benefits: string[];
};

export const categories: Category[] = [
  {
    slug: "agency-banking-financial-inclusion",
    name: "Agency Banking & Financial Inclusion",
    shortName: "Agency Banking",
    description:
      "Business correspondent networks, mobile money and wallet infrastructure that extend banking to the last mile.",
  },
  {
    slug: "cards-issuance",
    name: "Cards Issuance & Management",
    shortName: "Cards Issuance",
    description:
      "Debit, credit, prepaid and neobanking account platforms with full program lifecycle management.",
  },
  {
    slug: "merchant-acquiring",
    name: "Merchant Acquiring & Payments",
    shortName: "Merchant Acquiring",
    description:
      "POS, QR and soundbox acceptance infrastructure with settlement built in for offline and online commerce.",
  },
  {
    slug: "transaction-banking",
    name: "Transaction Banking & Switching",
    shortName: "Transaction Banking",
    description:
      "Payment switching, bill payments, bulk payouts and remittance rails that move money reliably at scale.",
  },
  {
    slug: "compliance-risk",
    name: "Compliance & Risk Operations",
    shortName: "Compliance & Risk",
    description:
      "Onboarding, KYC, fraud monitoring and reconciliation tooling built to regulatory expectations.",
  },
  {
    slug: "lending",
    name: "Lending Solutions",
    shortName: "Lending",
    description:
      "Origination, servicing, BNPL and embedded credit infrastructure for banks and lending-focused fintechs.",
  },
  {
    slug: "core-connected-banking",
    name: "Core & Connected Banking",
    shortName: "Core Banking",
    description:
      "Core banking, digital banking and open API layers that everything else in the stack plugs into.",
  },
];

export const solutions: Solution[] = [
  // Agency Banking & Financial Inclusion
  {
    slug: "agency-banking",
    category: "agency-banking-financial-inclusion",
    name: "Agency Banking Platform",
    tagline: "Turn any storefront into a banking touchpoint",
    icon: Bank,
    overview:
      "A plug-and-play platform that lets banks, NBFCs and MFIs stand up a business correspondent network without building agent management, transaction switching, and settlement infrastructure from scratch. Agents onboard, transact, and reconcile through one system, while the institution keeps full visibility and control.",
    features: [
      { title: "Agent onboarding", description: "Digital onboarding with document capture, biometric verification, and approval workflows." },
      { title: "Cash-in / cash-out", description: "Deposit, withdrawal, and mini-statement services at the agent counter." },
      { title: "Commission engine", description: "Configurable, slab-based commission and incentive calculation per agent tier." },
      { title: "Real-time dashboards", description: "Transaction volumes, agent liquidity, and network health in one console." },
    ],
    howItWorks: [
      "Institution defines agent tiers, service catalogue, and commission structure.",
      "Agents onboard through the mobile or web app with e-KYC verification.",
      "Agents perform cash-in, cash-out, and account services on behalf of customers.",
      "Transactions settle automatically with full audit trail and reconciliation.",
    ],
    benefits: [
      "Reach unbanked and underbanked customers without new branch capex",
      "Full agent lifecycle visibility for compliance and audit",
      "Configurable commercial model per region or agent tier",
    ],
  },
  {
    slug: "bc-lifecycle-management",
    category: "agency-banking-financial-inclusion",
    name: "BC Onboarding & Lifecycle Management",
    tagline: "Manage business correspondents end-to-end, not just at signup",
    icon: UsersThree,
    overview:
      "Corporate BC networks need more than onboarding — they need ongoing performance tracking, training, compliance renewal, and offboarding. This module manages the full lifecycle of business correspondents and their sub-agents across a multi-level hierarchy.",
    features: [
      { title: "Hierarchy management", description: "Model corporate BC, super-agent, and field-agent relationships accurately." },
      { title: "Performance scorecards", description: "Track transaction volume, error rates, and customer complaints per agent." },
      { title: "Compliance renewal", description: "Automated reminders for KYC, licensing, and training recertification." },
      { title: "Territory mapping", description: "Assign and visualise agent coverage by pincode or district." },
    ],
    howItWorks: [
      "Corporate BCs are onboarded with their sub-agent hierarchy mapped in the system.",
      "Each agent's performance, compliance status, and territory are tracked continuously.",
      "Underperforming or non-compliant agents are flagged for retraining or offboarding.",
      "Institution reviews network health through hierarchy-aware reporting.",
    ],
    benefits: [
      "Reduces manual oversight of large, distributed agent networks",
      "Keeps compliance renewal from becoming a manual chase",
      "Gives regional teams territory-level accountability",
    ],
  },
  {
    slug: "mobile-money-wallets",
    category: "agency-banking-financial-inclusion",
    name: "Mobile Money & Wallet Engine",
    tagline: "The ledger and rails behind every wallet transaction",
    icon: Wallet,
    overview:
      "A wallet engine that handles deposits, withdrawals, peer-to-peer transfers, and merchant payments, with the reporting and reconciliation layer institutions need to operate it as a regulated product rather than a black box.",
    features: [
      { title: "Multi-wallet support", description: "Semi-closed, closed, and PPI-compliant wallet types on one ledger." },
      { title: "P2P & P2M transfers", description: "Instant peer-to-peer and peer-to-merchant transaction flows." },
      { title: "Load & top-up rails", description: "Bank transfer, card, and cash-based wallet funding options." },
      { title: "Reporting & analytics", description: "Balance sheets, transaction logs, and usage analytics per wallet segment." },
    ],
    howItWorks: [
      "Institution configures wallet type, limits, and KYC tier requirements.",
      "Customers load wallets via bank transfer, card, or agent cash-in.",
      "Wallet balances move via P2P, P2M, or bill payment transactions.",
      "Engine reconciles every transaction against the ledger in real time.",
    ],
    benefits: [
      "Launch a compliant wallet product without building ledger infrastructure",
      "Support multiple wallet types on a single technical stack",
      "Full transaction-level audit trail for regulatory reporting",
    ],
  },
  {
    slug: "financial-inclusion-wallets",
    category: "agency-banking-financial-inclusion",
    name: "Financial Inclusion & DBT Wallets",
    tagline: "Purpose-built rails for benefit transfer and micro-savings",
    icon: HandHeart,
    overview:
      "Government and institutional direct benefit transfer programs need wallets that work in low-connectivity districts, support Aadhaar-based verification, and reconcile against beneficiary lists automatically. This solution is scoped specifically for that use case.",
    features: [
      { title: "Beneficiary management", description: "Bulk upload and verification of beneficiary lists against Aadhaar/PAN records." },
      { title: "Offline-tolerant design", description: "Transaction queuing for low-connectivity rural deployments." },
      { title: "Disbursal scheduling", description: "Recurring or one-time benefit disbursal with automatic notification." },
      { title: "Utilisation reporting", description: "Track how disbursed funds are spent across merchant categories." },
    ],
    howItWorks: [
      "Program administrator uploads and verifies the beneficiary list.",
      "Wallets are provisioned and linked to Aadhaar or another ID credential.",
      "Benefit amounts are disbursed on schedule directly into wallets.",
      "Utilisation and drawdown are tracked and reported back to the program.",
    ],
    benefits: [
      "Purpose-fit for state and central government DBT programs",
      "Works in low-bandwidth, rural deployment conditions",
      "Transparent utilisation reporting for program audits",
    ],
  },
  {
    slug: "aeps-micro-atm",
    category: "agency-banking-financial-inclusion",
    name: "AePS & Micro-ATM",
    tagline: "Cash access wherever the nearest agent is",
    icon: Fingerprint,
    overview:
      "Aadhaar-enabled Payment System integration and micro-ATM device provisioning that brings cash-in/cash-out, balance enquiry, and mini-statement services to areas without a nearby bank branch or ATM.",
    features: [
      { title: "Biometric authentication", description: "Fingerprint and iris-based transaction authorisation via Aadhaar." },
      { title: "Device provisioning", description: "Micro-ATM device onboarding, firmware updates, and health monitoring." },
      { title: "Interoperable withdrawals", description: "Customers withdraw against any bank account, not just the acquiring bank." },
      { title: "Settlement automation", description: "T+1 settlement across issuing and acquiring institutions." },
    ],
    howItWorks: [
      "Agent is provisioned with a micro-ATM device and AePS credentials.",
      "Customer authenticates the transaction with Aadhaar-linked biometrics.",
      "Withdrawal, deposit, or balance enquiry is processed in real time.",
      "Inter-bank settlement runs automatically against NPCI's AePS switch.",
    ],
    benefits: [
      "Extends cash access to areas without ATM infrastructure",
      "No card or PIN required — biometric-only authentication",
      "Interoperable across any issuing bank",
    ],
  },

  // Cards Issuance & Management
  {
    slug: "debit-card-issuance",
    category: "cards-issuance",
    name: "Debit Card Issuance",
    tagline: "Instant account-to-card issuance, physical or virtual",
    icon: CreditCard,
    overview:
      "A card issuance platform that provisions physical and virtual debit cards against savings or current accounts, with configurable branding, limits, and network routing for co-branded programs.",
    features: [
      { title: "Instant virtual issuance", description: "Virtual card available immediately on account opening." },
      { title: "Co-branded physical cards", description: "Custom card design and program branding for partner institutions." },
      { title: "Limit management", description: "Per-transaction, daily, and category-based spend limits." },
      { title: "Network flexibility", description: "Route across RuPay, Visa, or Mastercard rails as required." },
    ],
    howItWorks: [
      "Account is opened and linked to the card issuance module.",
      "Virtual card is issued instantly; physical card is dispatched for production.",
      "Cardholder activates and sets limits through the mobile app.",
      "Transactions route through the configured card network with real-time authorisation.",
    ],
    benefits: [
      "Launch co-branded debit programs without a card bureau of your own",
      "Instant virtual card reduces time-to-first-transaction",
      "Full control over limits and network routing",
    ],
  },
  {
    slug: "credit-card-issuance",
    category: "cards-issuance",
    name: "Credit Card Issuance",
    tagline: "One hub to design, launch and manage a credit program",
    icon: IdentificationCard,
    overview:
      "An end-to-end credit card issuance and management hub covering application, underwriting hooks, statement generation, billing, and collections — built for institutions launching or scaling a co-branded credit card program.",
    features: [
      { title: "Application & underwriting hooks", description: "Integrates with bureau checks and internal credit policy engines." },
      { title: "Statement & billing engine", description: "Automated statement generation, interest computation, and due-date management." },
      { title: "Rewards & offers", description: "Configurable cashback, points, and merchant-offer programs." },
      { title: "Collections workflow", description: "Delinquency bucketing and collections case management." },
    ],
    howItWorks: [
      "Applicant applies and is scored against the institution's credit policy.",
      "Approved cardholders are issued a physical or virtual credit card.",
      "Spends accrue against the credit line with real-time authorisation.",
      "Statements, billing, and collections run on a monthly cycle.",
    ],
    benefits: [
      "Faster path to launching a co-branded credit card program",
      "Reduces manual billing and collections overhead",
      "Configurable rewards to differentiate the program",
    ],
  },
  {
    slug: "prepaid-card-issuance",
    category: "cards-issuance",
    name: "Prepaid Card Issuance",
    tagline: "Load, spend, and track — without a bank account",
    icon: Coins,
    overview:
      "Rapid issuance of co-branded prepaid cards for payroll, gifting, and closed-loop use cases, with top-up, spend monitoring, and expiry management handled through a single admin console.",
    features: [
      { title: "Bulk card issuance", description: "Issue thousands of cards for payroll or incentive programs in one batch." },
      { title: "Top-up rails", description: "Bank transfer, UPI, or cash-based reload options." },
      { title: "Spend monitoring", description: "Merchant-category restrictions and real-time spend alerts." },
      { title: "Expiry & reissue", description: "Automated card expiry handling and reissuance workflows." },
    ],
    howItWorks: [
      "Institution defines the prepaid program type and spend restrictions.",
      "Cards are issued individually or in bulk against a funding account.",
      "Cardholders load and spend within the configured limits.",
      "Institution monitors usage and reissues cards on expiry.",
    ],
    benefits: [
      "Fast to launch for payroll, incentive, or gifting programs",
      "Spend controls reduce misuse risk for closed-loop programs",
      "Bulk issuance suits large employee or beneficiary populations",
    ],
  },
  {
    slug: "neobanking",
    category: "cards-issuance",
    name: "Neobanking Account Platform",
    tagline: "A fully digital account, no branch required",
    icon: Buildings,
    overview:
      "An online-only account platform covering account opening, transaction processing, and a collections engine, for institutions and fintechs building a neobank product on top of a partner bank's licence.",
    features: [
      { title: "Digital account opening", description: "Video KYC-based onboarding completed in minutes." },
      { title: "Transaction processing", description: "Full transaction ledger with statements and categorisation." },
      { title: "Collections engine", description: "Automated dues collection with configurable retry logic." },
      { title: "Partner bank integration", description: "Operates on top of a sponsor bank's core banking system." },
    ],
    howItWorks: [
      "Customer completes video KYC and account opening in the app.",
      "Account is provisioned against the partner bank's core system.",
      "Customer transacts, and the platform manages ledger and statements.",
      "Recurring dues, if any, are collected automatically on schedule.",
    ],
    benefits: [
      "Launch a neobank product without holding a banking licence",
      "Video KYC keeps onboarding fully digital",
      "Built-in collections reduces manual dues follow-up",
    ],
  },

  // Merchant Acquiring & Payments
  {
    slug: "pos-solution",
    category: "merchant-acquiring",
    name: "POS Terminal Solution",
    tagline: "Card and UPI acceptance at the counter",
    icon: Scan,
    overview:
      "Point-of-sale terminal deployment and management for merchants, supporting card, UPI, and contactless acceptance with same-day settlement reporting and terminal health monitoring.",
    features: [
      { title: "Multi-mode acceptance", description: "Card swipe, chip, contactless, and UPI on one terminal." },
      { title: "Terminal health monitoring", description: "Remote diagnostics and firmware update management." },
      { title: "Settlement reporting", description: "Merchant-level settlement statements available same day." },
      { title: "Multi-merchant management", description: "Manage terminal fleets across merchant chains from one console." },
    ],
    howItWorks: [
      "Merchant is onboarded and a terminal is provisioned to their outlet.",
      "Terminal accepts card, contactless, or UPI payments at checkout.",
      "Transactions authorise in real time against the acquiring network.",
      "Settlement is credited to the merchant account per the agreed cycle.",
    ],
    benefits: [
      "One terminal fleet supports card and UPI acceptance",
      "Remote monitoring cuts down truck-rolls for terminal issues",
      "Same-day settlement visibility for merchants",
    ],
  },
  {
    slug: "qr-payments",
    category: "merchant-acquiring",
    name: "QR Code Payments",
    tagline: "Static or dynamic QR acceptance for any merchant size",
    icon: QrCode,
    overview:
      "Static and dynamic QR code generation for merchant payment acceptance, with invoicing, payment links, and reconciliation built for merchants who don't need a physical terminal.",
    features: [
      { title: "Static & dynamic QR", description: "Fixed QR for small merchants, amount-embedded dynamic QR for retail." },
      { title: "Invoicing & payment links", description: "Generate shareable payment links for remote or online collection." },
      { title: "Auto-reconciliation", description: "Payments match automatically against invoices or order references." },
      { title: "Multi-rail settlement", description: "Accept via UPI and card-linked QR on the same code." },
    ],
    howItWorks: [
      "Merchant is issued a static QR or generates dynamic QR per transaction.",
      "Customer scans and pays via any UPI app or QR-linked card.",
      "Payment confirmation reaches the merchant in real time.",
      "Transaction reconciles automatically against the merchant's invoice or order ID.",
    ],
    benefits: [
      "No terminal hardware required for small and micro-merchants",
      "Dynamic QR reduces manual amount-entry errors",
      "Works for both in-person and remote collection",
    ],
  },
  {
    slug: "soundbox",
    category: "merchant-acquiring",
    name: "Soundbox Payment Devices",
    tagline: "Audible payment confirmation for busy counters",
    icon: SpeakerHigh,
    overview:
      "A portable, battery-powered soundbox device that gives merchants and agents an audible confirmation for every inward payment, reducing disputes and missed-payment fraud at high-footfall counters.",
    features: [
      { title: "Instant audio alerts", description: "Multi-language voice confirmation the moment payment lands." },
      { title: "Battery & connectivity", description: "Long battery life with SIM-based connectivity, no Wi-Fi dependency." },
      { title: "Transaction display", description: "Small screen showing amount and payer reference." },
      { title: "Fleet management", description: "Remote device monitoring across large merchant networks." },
    ],
    howItWorks: [
      "Soundbox is linked to the merchant's QR or payment account.",
      "Customer pays via UPI or card-linked QR at the counter.",
      "Device announces the amount received in the configured language.",
      "Merchant confirms goods or service delivery on the spot.",
    ],
    benefits: [
      "Reduces payment disputes at high-volume counters",
      "No smartphone or Wi-Fi required to run the device",
      "Multi-language support suits diverse merchant networks",
    ],
  },
  {
    slug: "merchant-acquiring",
    category: "merchant-acquiring",
    name: "Merchant Acquiring & Settlement",
    tagline: "Onboard, acquire, and settle — under one merchant ID",
    icon: Storefront,
    overview:
      "The acquiring backbone that ties POS, QR, and soundbox channels together under a single merchant onboarding and settlement process, with revenue-share and fee configuration per merchant segment.",
    features: [
      { title: "Unified merchant onboarding", description: "One KYC and onboarding flow across all acceptance channels." },
      { title: "Configurable MDR", description: "Merchant discount rate configuration by segment or transaction type." },
      { title: "T+1/T+2 settlement", description: "Configurable settlement cycles per merchant agreement." },
      { title: "Dispute management", description: "Chargeback and dispute workflow with evidence tracking." },
    ],
    howItWorks: [
      "Merchant completes KYC and is onboarded across chosen acceptance channels.",
      "Transactions across POS, QR, and soundbox settle to one merchant ledger.",
      "MDR and fees are deducted per the configured commercial terms.",
      "Net settlement is credited on the agreed T+1 or T+2 cycle.",
    ],
    benefits: [
      "Single merchant relationship across every acceptance channel",
      "Flexible commercial terms by merchant segment",
      "Structured dispute workflow reduces manual chargeback handling",
    ],
  },

  // Transaction Banking & Switching
  {
    slug: "payment-switch",
    category: "transaction-banking",
    name: "Payment Switch",
    tagline: "Real-time routing across UPI, IMPS, NEFT and RTGS",
    icon: ArrowsLeftRight,
    overview:
      "A high-throughput payment switch that routes transactions across UPI, IMPS, NEFT and RTGS rails, with intelligent routing, retry logic, and reconciliation built to handle national payment volumes without a re-platform.",
    features: [
      { title: "Multi-rail routing", description: "Single integration point across UPI, IMPS, NEFT, and RTGS." },
      { title: "Smart retry logic", description: "Automatic failover and retry on rail-level timeouts or failures." },
      { title: "Real-time reconciliation", description: "Transaction-level matching against NPCI and bank settlement files." },
      { title: "Dispute & chargeback workflow", description: "Structured case management for failed or disputed transactions." },
    ],
    howItWorks: [
      "Transaction request enters the switch from the initiating channel.",
      "Switch selects the optimal rail and routes the request in real time.",
      "Response is relayed back to the channel with sub-second latency.",
      "Nightly and real-time reconciliation confirms settlement accuracy.",
    ],
    benefits: [
      "Scales past a billion monthly transactions without re-platforming",
      "Reduces failed-transaction rates through intelligent retry",
      "One integration for every major domestic payment rail",
    ],
  },
  {
    slug: "bbps-bill-payments",
    category: "transaction-banking",
    name: "BBPS & Bharat Connect Bill Payments",
    tagline: "One connection to every biller category on BBPS",
    icon: Receipt,
    overview:
      "Bharat Bill Payment System integration that connects institutions to electricity, water, gas, education, and other recurring billers through a single interface, with biller reconciliation and dispute handling included.",
    features: [
      { title: "Full biller coverage", description: "Utility, education, insurance, loan EMI, and subscription billers." },
      { title: "Recurring bill reminders", description: "Auto-fetch and reminder scheduling for repeat bill payments." },
      { title: "Biller reconciliation", description: "Transaction matching against biller settlement files." },
      { title: "Complaint management", description: "BBPS-mandated complaint registration and resolution workflow." },
    ],
    howItWorks: [
      "Institution integrates once with the BBPS bill payment gateway.",
      "Customer selects a biller and fetches the due bill amount.",
      "Payment is processed and confirmation is sent to biller and customer.",
      "Settlement and complaints, if any, are reconciled against BBPS records.",
    ],
    benefits: [
      "Single integration reaches every registered BBPS biller",
      "Reduces manual reconciliation against individual billers",
      "Meets BBPS-mandated complaint handling requirements",
    ],
  },
  {
    slug: "payout-platform",
    category: "transaction-banking",
    name: "Bulk Payout & Disbursement Platform",
    tagline: "Move money to thousands of accounts in one batch",
    icon: PaperPlaneTilt,
    overview:
      "A bulk payment and disbursement platform for vendor payouts, salary disbursal, and loan disbursement, with approval workflows, multi-rail routing, and a real-time status dashboard for every payout batch.",
    features: [
      { title: "Batch upload & validation", description: "Bulk file upload with account and IFSC validation before processing." },
      { title: "Approval workflows", description: "Maker-checker approval chains configurable by payout size." },
      { title: "Multi-rail disbursal", description: "Routes across NEFT, IMPS, and UPI based on amount and urgency." },
      { title: "Status dashboard", description: "Real-time success, pending, and failure tracking per batch." },
    ],
    howItWorks: [
      "Payout file is uploaded and validated for account-level errors.",
      "Batch moves through the configured approval workflow.",
      "Approved payouts are disbursed across the appropriate payment rail.",
      "Dashboard tracks status and flags failures for reprocessing.",
    ],
    benefits: [
      "Handles vendor, payroll, and loan disbursal on one platform",
      "Maker-checker controls reduce disbursement error risk",
      "Real-time visibility into large batch payout status",
    ],
  },
  {
    slug: "domestic-remittance",
    category: "transaction-banking",
    name: "Domestic Money Remittance",
    tagline: "Cash-to-account transfers for the unbanked sender",
    icon: Money,
    overview:
      "A domestic remittance rail that lets a sender walk into any agent location, hand over cash, and have it credited to a receiver's bank account in real time — compliant with RBI's remittance guidelines throughout.",
    features: [
      { title: "Cash-to-account transfer", description: "Sender pays cash at the agent counter; receiver gets a bank credit." },
      { title: "Sender verification", description: "Mobile OTP and limit-based verification for AML compliance." },
      { title: "Real-time credit", description: "IMPS-based crediting to the receiver's account within seconds." },
      { title: "Transaction limits", description: "RBI-mandated per-transaction and monthly sender limits enforced automatically." },
    ],
    howItWorks: [
      "Sender visits an agent location and provides receiver account details.",
      "Sender is verified via mobile OTP against remittance limits.",
      "Agent collects cash and initiates the transfer through the platform.",
      "Receiver's account is credited in real time via IMPS.",
    ],
    benefits: [
      "Serves senders without a bank account or digital payment access",
      "Real-time crediting builds trust in the agent network",
      "Built-in limit enforcement keeps transactions compliant",
    ],
  },
  {
    slug: "cross-border-remittance",
    category: "transaction-banking",
    name: "Cross-Border Remittance",
    tagline: "Compliant inbound remittance for retail and wholesale flows",
    icon: Globe,
    overview:
      "An inbound cross-border remittance solution covering retail personal transfers and wholesale corridor volumes, with the compliance checks, FX handling, and correspondent banking integration such flows require.",
    features: [
      { title: "Corridor management", description: "Configure and monitor remittance corridors by source country." },
      { title: "FX rate management", description: "Live rate feeds with configurable margin per corridor." },
      { title: "AML & sanctions screening", description: "Automated screening against global watchlists on every transaction." },
      { title: "Correspondent bank integration", description: "SWIFT and correspondent banking connectivity for settlement." },
    ],
    howItWorks: [
      "Overseas partner or exchange house initiates the remittance instruction.",
      "Transaction is screened against AML and sanctions watchlists.",
      "FX conversion is applied per the corridor's configured rate.",
      "Funds are credited to the beneficiary account domestically.",
    ],
    benefits: [
      "Supports both retail personal and wholesale corridor volumes",
      "Automated screening reduces manual compliance review",
      "Configurable FX margin per corridor and partner",
    ],
  },

  // Compliance & Risk Operations
  {
    slug: "onboarding-kyc",
    category: "compliance-risk",
    name: "Onboarding, e-KYC & Video KYC",
    tagline: "Verify a customer in minutes, not branch visits",
    icon: UserFocus,
    overview:
      "A digital onboarding suite covering e-KYC via Aadhaar/PAN, and RBI-compliant video KYC with liveness detection, so institutions can open accounts and issue products without a physical branch visit.",
    features: [
      { title: "Aadhaar & PAN e-KYC", description: "Instant identity verification against government ID databases." },
      { title: "Video KYC with liveness", description: "Agent-assisted video verification with face-match and liveness checks." },
      { title: "Document capture & OCR", description: "Auto-extraction of details from ID and address proof documents." },
      { title: "Queue management", description: "Agent queuing and load balancing for high-volume VKYC operations." },
    ],
    howItWorks: [
      "Customer submits ID documents through the onboarding app.",
      "System performs e-KYC verification or routes to video KYC as required.",
      "Video KYC agent verifies liveness and matches the customer's face to ID.",
      "Verified customer record is passed to the core system for activation.",
    ],
    benefits: [
      "Removes branch visits from the onboarding journey",
      "Queue management keeps VKYC responsive at high volumes",
      "Meets RBI's video KYC and liveness requirements",
    ],
  },
  {
    slug: "fraud-risk-management",
    category: "compliance-risk",
    name: "Fraud & Risk Management (FRM)",
    tagline: "Catch the fraudulent transaction before it settles",
    icon: ShieldWarning,
    overview:
      "Real-time transaction monitoring and rule-based scoring that flags suspicious activity — velocity anomalies, device mismatches, geo-inconsistencies — before a fraudulent transaction settles, with a case management workflow for investigation teams.",
    features: [
      { title: "Real-time scoring", description: "Every transaction scored against configurable risk rules in milliseconds." },
      { title: "Velocity & device checks", description: "Flags unusual transaction frequency or new-device usage." },
      { title: "Case management", description: "Investigation workflow with evidence trail for flagged transactions." },
      { title: "Rule configuration", description: "Risk rules tunable per product, channel, or customer segment." },
    ],
    howItWorks: [
      "Transaction data streams into the FRM engine in real time.",
      "Engine scores the transaction against configured risk rules.",
      "High-risk transactions are held or flagged for review.",
      "Investigation team resolves the case through the management workflow.",
    ],
    benefits: [
      "Reduces fraud losses through pre-settlement intervention",
      "Configurable rules adapt to new fraud patterns quickly",
      "Structured case trail supports regulatory reporting",
    ],
  },
  {
    slug: "reconciliation",
    category: "compliance-risk",
    name: "Reconciliation Engine",
    tagline: "Every transaction matched, every day, automatically",
    icon: ArrowsClockwise,
    overview:
      "An automated reconciliation engine that matches transactions across switch logs, bank statements, and biller or partner settlement files, surfacing only the exceptions that need a human to look at them.",
    features: [
      { title: "Multi-source matching", description: "Reconciles switch, bank, and third-party settlement files together." },
      { title: "Exception-only review", description: "Auto-matches clean transactions; surfaces only mismatches for review." },
      { title: "Aging reports", description: "Tracks how long exceptions have remained unresolved." },
      { title: "Audit-ready exports", description: "Reconciliation reports formatted for internal and regulatory audit." },
    ],
    howItWorks: [
      "Transaction and settlement files are ingested from every source system.",
      "Engine matches records automatically based on configured keys.",
      "Unmatched or mismatched records are surfaced as exceptions.",
      "Operations team resolves exceptions and the ledger is closed for the day.",
    ],
    benefits: [
      "Cuts manual reconciliation effort to exception handling only",
      "Aging reports keep unresolved items from piling up",
      "Audit-ready output simplifies internal and RBI audits",
    ],
  },

  // Lending Solutions
  {
    slug: "loan-management-system",
    category: "lending",
    name: "Loan Management System (LMS)",
    tagline: "Servicing, repayments, and collections after disbursal",
    icon: Stack,
    overview:
      "A loan servicing platform that takes over after disbursal — EMI scheduling, repayment collection, delinquency tracking, and restructuring — with dashboards that give portfolio-level visibility across every active loan.",
    features: [
      { title: "EMI scheduling", description: "Automated repayment schedules with configurable moratoriums." },
      { title: "Digital repayment collection", description: "UPI, NACH, and card-based EMI collection channels." },
      { title: "Delinquency bucketing", description: "Automatic DPD bucketing feeding collections workflows." },
      { title: "Portfolio dashboards", description: "Real-time NPA, collection efficiency, and vintage analysis." },
    ],
    howItWorks: [
      "Disbursed loan is onboarded with its repayment schedule.",
      "EMI collection is attempted via the configured digital channel.",
      "Missed payments move the account through delinquency buckets.",
      "Collections team works overdue accounts through the case workflow.",
    ],
    benefits: [
      "Digitises repayment collection to reduce manual follow-up",
      "Early delinquency bucketing improves recovery rates",
      "Portfolio dashboards support real-time credit risk decisions",
    ],
  },
  {
    slug: "loan-origination-system",
    category: "lending",
    name: "Loan Origination System (LOS)",
    tagline: "Application to disbursal, with automated credit decisioning",
    icon: MagnifyingGlass,
    overview:
      "An origination platform covering application capture, bureau pulls, automated credit decisioning, and disbursal, built for institutions and lending marketplaces that need to underwrite at volume without growing underwriting headcount linearly.",
    features: [
      { title: "Digital application capture", description: "Web and app-based loan application with document upload." },
      { title: "Bureau & data integration", description: "Automated credit bureau pulls and alternate-data checks." },
      { title: "Rule-based decisioning", description: "Configurable credit policy engine for auto-approval or referral." },
      { title: "Disbursal integration", description: "Approved loans disburse directly via the payout platform." },
    ],
    howItWorks: [
      "Applicant submits a loan application with required documents.",
      "System pulls bureau data and runs it against the credit policy engine.",
      "Application is auto-approved, referred for review, or declined.",
      "Approved loans are disbursed and handed off to the servicing system.",
    ],
    benefits: [
      "Scales underwriting volume without proportional headcount growth",
      "Configurable policy engine adapts to changing credit criteria",
      "Straight-through processing for low-risk applications",
    ],
  },
  {
    slug: "bnpl-platform",
    category: "lending",
    name: "BNPL Platform",
    tagline: "Embedded short-term credit at the point of sale",
    icon: CalendarCheck,
    overview:
      "A buy-now-pay-later platform that plugs into merchant checkout flows, offering short-term credit lines with instant eligibility checks and repayment collection handled entirely in the background.",
    features: [
      { title: "Instant eligibility check", description: "Real-time credit eligibility scoring at checkout." },
      { title: "Merchant checkout integration", description: "Embeds into e-commerce and in-store checkout flows." },
      { title: "Flexible repayment plans", description: "Configurable instalment schedules by ticket size." },
      { title: "Automated repayment collection", description: "UPI autopay and NACH-based instalment collection." },
    ],
    howItWorks: [
      "Customer selects BNPL at merchant checkout.",
      "Platform runs an instant eligibility check and approves a credit limit.",
      "Purchase completes and is booked as an instalment plan.",
      "Repayments are collected automatically per the instalment schedule.",
    ],
    benefits: [
      "Increases checkout conversion for merchants with embedded credit",
      "Instant eligibility keeps checkout friction low",
      "Automated collection reduces servicing overhead",
    ],
  },
  {
    slug: "credit-line-on-upi",
    category: "lending",
    name: "Credit Line on UPI",
    tagline: "Pre-approved credit, spent through any UPI app",
    icon: CurrencyInr,
    overview:
      "A solution that links a pre-approved credit line to a customer's UPI handle, letting them spend against sanctioned credit at any UPI-accepting merchant, with repayment and interest computation handled behind the scenes.",
    features: [
      { title: "UPI handle linking", description: "Credit line linked directly to the customer's existing UPI ID." },
      { title: "Sanctioned limit management", description: "Configurable credit limits based on the institution's policy." },
      { title: "Merchant-agnostic spend", description: "Usable at any UPI-accepting merchant, online or offline." },
      { title: "Automated billing", description: "Interest computation and repayment scheduling handled automatically." },
    ],
    howItWorks: [
      "Customer is sanctioned a credit line based on the institution's policy.",
      "Credit line is linked to the customer's UPI handle.",
      "Customer spends against the credit line at any UPI merchant.",
      "Billing and repayment are processed on the configured cycle.",
    ],
    benefits: [
      "Distributes credit through UPI's existing merchant acceptance network",
      "No new payment habit required from the customer",
      "Automated billing keeps servicing overhead low",
    ],
  },

  // Core & Connected Banking
  {
    slug: "core-banking",
    category: "core-connected-banking",
    name: "Core Banking Platform",
    tagline: "The system of record everything else plugs into",
    icon: Database,
    overview:
      "A core banking platform covering deposits, accounts, and product configuration, deployable on-premises or in the cloud, built as the system of record that agency banking, cards, and payments modules all integrate with.",
    features: [
      { title: "Deposit & account management", description: "Savings, current, and term deposit product configuration." },
      { title: "Flexible deployment", description: "Cloud, on-premises, or hybrid deployment models." },
      { title: "Product configuration", description: "Configure interest rates, fees, and eligibility without code changes." },
      { title: "Open integration layer", description: "APIs for every module in the wider banking stack to connect to." },
    ],
    howItWorks: [
      "Institution configures deposit and account products in the core system.",
      "Customer accounts are opened and held as the system of record.",
      "Agency banking, cards, and payment modules integrate via open APIs.",
      "All transactions ultimately post back to the core ledger.",
    ],
    benefits: [
      "Single system of record across every banking channel",
      "Deployment flexibility fits institutions of different sizes",
      "Configuration-driven product changes reduce time-to-market",
    ],
  },
  {
    slug: "connected-open-banking",
    category: "core-connected-banking",
    name: "Connected & Open Banking APIs",
    tagline: "Consent-based data sharing across the fintech ecosystem",
    icon: ShareNetwork,
    overview:
      "Account aggregator integration and open API banking layers that let institutions share and consume financial data under explicit customer consent, connecting core banking systems to the wider lending, PFM, and fintech ecosystem.",
    features: [
      { title: "Account aggregator integration", description: "Consent-based data-sharing flows compliant with the AA framework." },
      { title: "Open API gateway", description: "Standardised APIs exposing account, transaction, and product data." },
      { title: "Consent management", description: "Full consent lifecycle tracking — grant, use, and revocation." },
      { title: "Partner sandbox", description: "Sandbox environment for fintech partners to build and test integrations." },
    ],
    howItWorks: [
      "Customer grants consent for data sharing via the AA framework.",
      "Requesting institution pulls data through the open API gateway.",
      "Consent status and data usage are logged for audit.",
      "Customer can revoke consent at any time, halting further access.",
    ],
    benefits: [
      "Connects core systems to the broader open finance ecosystem",
      "Consent lifecycle tracking simplifies compliance reporting",
      "Sandbox access speeds up fintech partner integrations",
    ],
  },
  {
    slug: "digital-banking",
    category: "core-connected-banking",
    name: "Digital Banking Suite",
    tagline: "Retail and corporate banking, on every device",
    icon: DeviceMobile,
    overview:
      "A digital banking front-end covering retail and corporate banking journeys — account opening, transfers, statements, and corporate approval workflows — delivered consistently across mobile, web, and assisted-agent channels.",
    features: [
      { title: "Retail banking journeys", description: "Account opening, transfers, bill pay, and statements for individual customers." },
      { title: "Corporate banking workflows", description: "Multi-user approval chains for business banking customers." },
      { title: "Omnichannel consistency", description: "Same journeys available on mobile, web, and agent-assisted channels." },
      { title: "Notification & alerts", description: "Configurable SMS, push, and email alerts for account activity." },
    ],
    howItWorks: [
      "Institution configures retail and corporate banking journeys once.",
      "Customers access consistent journeys across mobile, web, or agent channels.",
      "Corporate customers route transactions through configured approval chains.",
      "Account activity triggers alerts per the customer's notification preferences.",
    ],
    benefits: [
      "One configuration serves every channel consistently",
      "Corporate approval workflows fit business banking needs",
      "Reduces channel-specific development and maintenance effort",
    ],
  },
];

export function getSolutionBySlug(slug: string) {
  return solutions.find((s) => s.slug === slug);
}

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getSolutionsByCategory(categorySlug: string) {
  return solutions.filter((s) => s.category === categorySlug);
}

export function getRelatedSolutions(slug: string, limit = 3) {
  const current = getSolutionBySlug(slug);
  if (!current) return [];
  return solutions
    .filter((s) => s.category === current.category && s.slug !== slug)
    .slice(0, limit);
}
