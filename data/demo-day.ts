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

// The poster supplies the four milestones; the concept note supplies the
// proposed Demo Day format. December is the lead-in to the March 2027 event.
// Keep unconfirmed dates, venues and targets visibly labelled as planned.
export const DEMO_DAY_MILESTONES: DemoDayMilestone[] = [
  {
    id: "registration",
    number: "01",
    title: "Registration opens",
    date: "Opening date TBA",
    eyebrow: "The first step",
    headline: "Big ambitions. Start here.",
    description:
      "Tell us the problem, your solution and the team behind it. Share your venture details and pitch deck through the SBC registration form to begin your startup journey.",
    takeaways: [
      { title: "Your idea", detail: "A real problem and a clear solution." },
      { title: "Your team", detail: "The people building the venture." },
      { title: "Your pitch", detail: "What you are building and why it matters." },
    ],
    link: { label: "View registration form", href: "#register" },
  },
  {
    id: "mentorship-starts",
    number: "02",
    title: "Mentorship starts",
    date: "1 December 2026",
    dateTime: "2026-12-01",
    eyebrow: "Build with guidance",
    headline: "Find your edge. Forge ahead.",
    description:
      "Work with experienced founders, alumni and domain experts to sharpen your product, business model and go-to-market plan. Turn mentor feedback into practical next steps.",
    takeaways: [
      { title: "Expert mentorship", detail: "Focused advice for your venture." },
      { title: "Customer discovery", detail: "Test the problem and market demand." },
      { title: "Networking", detail: "Explore collaborators and pilot opportunities." },
    ],
    link: { label: "Meet past mentors", href: "#partners" },
  },
  {
    id: "mentorship-ends",
    number: "03",
    title: "Mentorship ends",
    date: "First week of March 2027",
    eyebrow: "Ready for the room",
    headline: "Sharpen the story. Show the proof.",
    description:
      "Refine your pitch, demonstrate your prototype and back your story with customer evidence. Finish with a clear ask for investors and industry partners.",
    takeaways: [
      { title: "Pitch practice", detail: "A focused story with confident Q&A." },
      { title: "Investor brief", detail: "Two pages on product, traction and market." },
      { title: "Demo video", detail: "Your product in action, in 90 seconds." },
    ],
    link: { label: "Talk to the SBC team", href: "#contact" },
  },
  {
    id: "demo-day",
    number: "04",
    title: "Demo Day",
    date: "March 2027",
    dateTime: "2027-03",
    eyebrow: "KGP Forge Demo Day 2027",
    headline: "Where engineering becomes enterprise.",
    description:
      "Pitch your venture, show a working product and connect with investors and industry. Open conversations around investment, customer pilots, licensing and manufacturing partnerships.",
    takeaways: [
      { title: "Live pitches", detail: "4 minutes to pitch. 3 minutes for Q&A." },
      { title: "Technology gallery", detail: "Faculty IP, prototypes and MSME-ready technologies." },
      { title: "Curated meetings", detail: "Pre-matched investor and corporate pilot meetings." },
    ],
    link: { label: "Enquire about Demo Day", href: "#contact" },
  },
];

export const DEMO_DAY_PLAN = {
  venue: "IIT Research Park",
  targets: [
    { value: "15", label: "venture pitches" },
    { value: "30", label: "technology exhibits" },
    { value: "100+", label: "investor & industry delegates" },
  ],
};
