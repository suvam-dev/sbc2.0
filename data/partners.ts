export interface Partner {
  id: string;
  name: string;
  category: string;
  logoUrl: string;
  description: string;
  websiteUrl?: string;
}

export const PARTNERS_DATA: Partner[] = [
  {
    id: "zerodha",
    name: "Zerodha",
    category: "Title Partner",
    logoUrl: "/images/hero-sponsor-zerodha.png",
    description:
      "Zerodha is India's second-largest stockbroker and a fintech pioneer. It serves millions of retail investors, offering zero-brokerage equity trading, derivatives and commodities trading, and more. It was also one of the first stockbrokers in the country to integrate MCP and open up their systems to agents.",
    websiteUrl: "https://zerodha.com",
  },
  {
    id: "delhivery",
    name: "Delhivery",
    category: "Logistics Partner",
    logoUrl: "/images/hero-sponsor-delhivery.png",
    description:
      "Delhivery is India's largest logistics network, and has just opened test access to its Maps and MCP systems to outside developers for the first time. As logistics partner, they'll work with and support teams whose agents have to make something physically arrive.",
    websiteUrl: "https://delhivery.com",
  },
  {
    id: "pine-labs",
    name: "Pine Labs",
    category: "Payments & Authorisation Partner",
    logoUrl: "/images/hero-sponsor-pinelabs.png",
    description:
      "Pine Labs, India's leading payments company, has already shipped agentic payments end to end. The Pine Labs Payments Protocol (P3P) is the protocol that allows agent-to-agent autonomous payments over UPI and cards on someone's behalf; Grantex sets what that agent may spend, on whose authority, and keeps the record of what it did. As a payments and authorisation partner, they'll open both to teams whose agents have to move real money.",
    websiteUrl: "https://pinelabs.com",
  },
  {
    id: "gnani",
    name: "Gnani",
    category: "Voice Partner",
    logoUrl: "/images/hero-sponsor-gnani.svg",
    description:
      "Gnani is India's frontier Voice AI company — building real-world speech across every accent, language, and condition that production deployments demand. As voice partner, they'll open up their APIs for teams who build innovative solutions that are voice-first.",
    websiteUrl: "https://gnani.ai",
  },
];
