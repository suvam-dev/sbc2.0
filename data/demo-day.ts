import { PROGRAMME } from "./programme";

export interface DemoDayMilestone {
  id: string;
  number: string;
  title: string;
  date: string;
  dateTime?: string;
  eyebrow: string;
  headline: string;
  description: string;
  takeaways: { title: string; detail: string }[];
  link: { label: string; href: string };
}

export const DEMO_DAY_MILESTONES: DemoDayMilestone[] = [
  {
    id: "registration",
    number: "01",
    title: "Open call & scouting",
    date: "Days 1–20",
    eyebrow: "Bring your venture forward",
    headline: "Engineering ideas. Enterprise ambition.",
    description:
      "Submit your venture or technology for consideration. Departmental nominations, alumni outreach, E-Cell scouting, faculty IP and incubator referrals help surface promising ideas from the IIT Kharagpur ecosystem.",
    takeaways: [
      { title: "Venture applications", detail: "Student ventures, research spinouts and alumni teams." },
      { title: "Technology nominations", detail: "Faculty IP, prototypes and incubation-unit referrals." },
      { title: "A clear starting point", detail: "Explain your problem, solution, evidence and team." },
    ],
    link: { label: "Submit your venture", href: "#register" },
  },
  {
    id: "selection",
    number: "02",
    title: "Selection",
    date: "Days 21–30",
    eyebrow: "Build the flagship cohort",
    headline: "The idea. The evidence. The team.",
    description:
      "Applications are reviewed for innovation, product readiness, customer need, team capability and commercialisation potential. The programme targets 75–100 applications, a shortlist of 30 and 15 flagship ventures.",
    takeaways: [
      { title: "Innovation & readiness", detail: "A differentiated solution with credible technical proof." },
      { title: "Customer & commercial potential", detail: "Market need, willingness to pay and a viable route to market." },
      { title: "Execution team", detail: "The capability and commitment to build an enterprise." },
    ],
    link: { label: "Explore selection criteria", href: "#judging" },
  },
  {
    id: "acceleration",
    number: "03",
    title: "Venture acceleration",
    date: "Days 31–100 · 10–12 weeks",
    eyebrow: "Turn progress into readiness",
    headline: "Validate the venture. Prepare the pitch.",
    description:
      "Work through customer discovery, prototype validation, unit economics and IP or regulatory questions. Expert mentoring, pitch training and investor matchmaking prepare each venture for a focused, evidence-backed showcase.",
    takeaways: [
      { title: "Customer & product validation", detail: "Test demand, technical readiness and business assumptions." },
      { title: "Investor brief & demo", detail: "A two-page brief and a 90-second product video." },
      { title: "A specific partnership ask", detail: "Investment, a customer pilot, licensing or manufacturing." },
    ],
    link: { label: "Explore programme support", href: "#incentives" },
  },
  {
    id: "demo-day",
    number: "04",
    title: "Demo Day",
    date: "Day 101 · February–March 2027",
    eyebrow: PROGRAMME.name,
    headline: PROGRAMME.proposition,
    description:
      "Present your venture at IIT Research Park through live pitches, working demonstrations and the technology-to-market gallery. Meet investors, customers and industry partners to explore investment, pilots, licensing and manufacturing partnerships.",
    takeaways: [
      { title: "Live pitches", detail: `${PROGRAMME.pitchMinutes} minutes to pitch. ${PROGRAMME.questionsMinutes} minutes for Q&A.` },
      { title: "Technology-to-market gallery", detail: "Faculty IP, prototypes and MSME-ready technologies." },
      { title: "Pre-matched meetings", detail: "Focused conversations with investors and corporate pilot partners." },
    ],
    link: { label: "Enquire about Demo Day", href: "#contact" },
  },
];

export const DEMO_DAY_PLAN = {
  venue: PROGRAMME.venue,
  targets: [
    { value: "15", label: "flagship venture pitches" },
    { value: "30", label: "technology exhibits" },
    { value: "100+", label: "investor & industry delegates" },
  ],
};
