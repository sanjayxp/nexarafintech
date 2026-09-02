export type Market = {
  region: string;
  tone: "mint" | "saffron" | "coral" | "sky";
  blurb: string;
  institutions: string[];
};

export const markets: Market[] = [
  {
    region: "India",
    tone: "mint",
    blurb:
      "Our home market. Agency banking networks, connected banking APIs, and last-mile distribution for institutions serving semi-urban and rural customers.",
    institutions: [
      "Small Finance Banks",
      "Cooperative Banks",
      "Regional Rural Banks",
      "NBFCs",
    ],
  },
  {
    region: "Africa",
    tone: "saffron",
    blurb:
      "Agent-led banking and mobile money infrastructure for institutions extending reach beyond the branch footprint.",
    institutions: [
      "Commercial Banks",
      "Microfinance Banks",
      "Digital Banks",
      "Mobile Money Operators",
    ],
  },
  {
    region: "Middle East",
    tone: "coral",
    blurb:
      "Remittance rails, digital onboarding, and agency banking for exchange houses and digital-first institutions.",
    institutions: [
      "Islamic Banks",
      "Money Exchange Companies",
      "Digital Banks",
      "Fintechs",
    ],
  },
  {
    region: "Asia Pacific",
    tone: "sky",
    blurb:
      "Platform deployments for banks, payment companies, and rural financial institutions across Southeast Asia.",
    institutions: [
      "Banks",
      "Payment Companies",
      "Rural Financial Institutions",
    ],
  },
];
