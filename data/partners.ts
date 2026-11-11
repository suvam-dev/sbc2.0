export interface Partner {
  id: string;
  name: string;
  category: string;
  logoUrl?: string;
  description: string;
  websiteUrl?: string;
}

// Institutional roles from the concept note. External partner and sponsor
// commitments require confirmation before their names are published.
export const PARTNERS_DATA: Partner[] = [
  {
    id: "kgp-forge",
    name: "KGP Forge Accelerator",
    category: "Venture readiness",
    description: "Cohort development, domain mentoring, pitch preparation and investor readiness throughout the accelerator.",
  },
  {
    id: "ecell",
    name: "E-Cell, IIT Kharagpur",
    category: "Founder engagement",
    description: "Student outreach, founder coordination and volunteer support for the programme and Demo Day.",
  },
  {
    id: "research-park",
    name: "Research Park & Incubators",
    category: "Industry connections",
    description: "Facilities, incubation links and investor or industry matchmaking to advance pilots and commercial partnerships.",
  },
  {
    id: "sric",
    name: "SRIC",
    category: "Technology transfer",
    description: "Faculty IP, licensing and industry agreements that help research-led technologies move towards the market.",
  },
];
