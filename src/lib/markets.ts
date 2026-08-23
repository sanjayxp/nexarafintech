export type Market = {
  region: string;
  blurb: string;
  institutions: string[];
};

export const markets: Market[] = [
  {
    region: "India",
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
    blurb:
      "Platform deployments and market-entry advisory for banks and payment companies expanding across Southeast Asia.",
    institutions: [
      "Banks",
      "Payment Companies",
      "Rural Financial Institutions",
    ],
  },
];
