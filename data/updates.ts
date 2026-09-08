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
    id: "update-1",
    date: "15 AUGUST",
    category: "new",
    text: "Registration is open to students in every discipline. Form your team, then answer a few questions about who you are and how you think.",
    cta: {
      label: "Register Now",
      href: "#register",
    },
  },
  {
    id: "update-2",
    date: "06 AUGUST",
    category: "new",
    text: "The Great Rewiring survey is live. Readers across India are stating all the problems they face every day, and their answers become the problems teams pick from.",
    cta: {
      label: "Start with yours",
      href: "#incentives",
    },
  },
  {
    id: "update-3",
    date: "31 AUGUST",
    category: "upcoming",
    text: "Around 30 opportunities are published, drawn from the survey with the reader signals behind each. This is the list teams pick from.",
  },
  {
    id: "update-4",
    date: "31 AUGUST",
    category: "upcoming",
    text: "Solution assembly opens. Teams submit how their agent does the job for this problem they've identified.",
  },
];
