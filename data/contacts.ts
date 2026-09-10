export interface ContactPerson {
  name: string;
  role?: string;
  phone: string;
  email: string;
  linkedinUrl: string;
  photoUrl: string;
}

export const CONTACT_LEADS: ContactPerson[] = [
  {
    name: "Yash Gupta",
    role: "Core Team Member",
    phone: "9818278581",
    email: "gupta.yash01@ecell-iitkgp.in",
    linkedinUrl: "https://www.linkedin.com/in/iamyash011/",
    photoUrl: "/images/contact-yash-gupta.png",
  },
  {
    name: "Sanya Aggarwal",
    role: "Core Team Member",
    phone: "8307768940",
    email: "aggarwal.sanya@ecell-iitkgp.in",
    linkedinUrl: "https://www.linkedin.com/in/sanya-aggarwal-b75111314/",
    photoUrl: "/images/contact-sanya-aggarwal.png",
  },
];

export const GENERAL_CONTACT = {
  organization: "E-Cell, IIT Kharagpur",
  address: "RMSOEE, IIT Kharagpur, West Bengal 721302",
  socials: [
    { platform: "Website", url: "https://www.ecell-iitkgp.in/" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/company/ecellkgp/" },
    { platform: "Instagram", url: "https://www.instagram.com/iitkgp_ecell/" },
    { platform: "Twitter", url: "https://x.com/ecelliitkgp" },
  ],
};
