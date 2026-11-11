export interface UpdateItem {
  id: string;
  date: string;
  category: "new" | "upcoming";
  text: string;
  cta?: {
    label: string;
    href: string;
  };
}

export const UPDATES_DATA: UpdateItem[] = [
  {
    id: "demo-day-2027",
    date: "FEB–MAR 2027",
    category: "upcoming",
    text: "KGP Forge Demo Day 2027 at IIT Research Park brings together venture pitches, a technology-to-market gallery and curated investor and industry meetings. Exact event date to be announced.",
    cta: {
      label: "Explore the Timeline",
      href: "#timeline",
    },
  },
  {
    id: "registration-open",
    date: "VENTURE CALL",
    category: "new",
    text: "Student ventures, research spinouts, alumni ventures and faculty technologies from the IIT Kharagpur ecosystem can submit their details for consideration. Student founders pay no participation fee.",
    cta: {
      label: "Submit Your Venture",
      href: "#register",
    },
  },
  {
    id: "mentor-registration-open",
    date: "MENTOR CALL",
    category: "new",
    text: "Founders, alumni and domain experts are invited to support customer discovery, product validation, commercialisation and pitch readiness during the 10–12-week accelerator.",
    cta: {
      label: "Register as a Mentor",
      href: "#partners",
    },
  },
];
