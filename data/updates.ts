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
    id: "registration-open",
    date: "OPEN NOW",
    category: "new",
    text: "Registration is open to student founders and teams from colleges across India. Submit your venture details to participate in Startup Bootcamp 9.0.",
    cta: {
      label: "Register Your Team",
      href: "#register",
    },
  },
  {
    id: "mentor-registration-open",
    date: "OPEN NOW",
    category: "new",
    text: "Call for mentors is open. Distinguished alumni, founders, and industry leaders are invited to guide the next wave of student entrepreneurs.",
    cta: {
      label: "Register as a Mentor",
      href: "#partners",
    },
  },
];
