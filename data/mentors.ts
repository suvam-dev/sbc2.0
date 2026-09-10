export interface Mentor {
  id: string;
  name: string;
  role: string;
  organization?: string;
  alumnusTag: string;
  imageUrl?: string;
  linkedinUrl?: string;
}

export const PAST_MENTORS_DATA: Mentor[] = [
  {
    id: "kavindra-kumar",
    name: "Kavindra Kumar",
    role: "Ex CEO - NITI Aayog, Member - Steering Committee, Min of Communications",
    organization: "NITI Aayog & Govt of India",
    alumnusTag: "Batch: IIT Kharagpur Alumnus",
    imageUrl: "/images/mentor-kavindra-kumar.png",
    linkedinUrl: "https://www.linkedin.com/in/kavindra-kumar",
  },
  {
    id: "archimedha",
    name: "Archimedha Mohapatra",
    role: "Founder & CEO, StartSmart | Technology & Innovation Mentor",
    organization: "StartSmart",
    alumnusTag: "SBC Mentor",
    // File to drop in public/images/: mentor-archimedha.png
    imageUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/archimedha/",
  },
  {
    id: "rohit-gambhir",
    name: "Rohit Gambhir",
    role: "Managing Director, ESAB India | Executive Industry Leader & Speaker",
    organization: "ESAB India",
    alumnusTag: "Industry Mentor",
    imageUrl: "/images/mentor-rohit-gambhir.png",
    linkedinUrl: "https://www.linkedin.com/in/rohitgambhir/?originalSubdomain=in",
  },
  {
    id: "vivek-kumar",
    name: "Vivek Kumar",
    role: "Strategy, Product & Technology Advisor | IIT Kharagpur Alumnus",
    organization: "Ecosystem Advisor",
    alumnusTag: "Batch: IIT Kharagpur Alumnus",
    imageUrl: "/images/mentor-vivek-kumar.png",
    linkedinUrl: "https://www.linkedin.com/in/vivekiitkgp/?originalSubdomain=in",
  },
  {
    id: "uttam-kumar",
    name: "Uttam Kumar",
    role: "Senior Business & Technology Strategist | Growth Mentor",
    organization: "Strategic Advisor",
    alumnusTag: "SBC Mentor",
    imageUrl: "/images/mentor-uttam-kumar.png",
    linkedinUrl: "https://www.linkedin.com/in/uttam-kumar-50984262/?originalSubdomain=in",
  },
  {
    id: "titas-ganguly",
    name: "Titas Ganguly",
    role: "Product & Engineering Leader | Innovation & Tech Advisor",
    organization: "Technology Advisor",
    alumnusTag: "SBC Mentor",
    // File to drop in public/images/: mentor-titas-ganguly.png
    imageUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/titas-ganguly-62349550/?originalSubdomain=in",
  },
  {
    id: "arindham",
    name: "Arindham",
    role: "Startup Growth Strategist & Early-Stage Venture Mentor",
    organization: "Startup Ecosystem",
    alumnusTag: "SBC Mentor",
    // File to drop in public/images/: mentor-arindham.png
    imageUrl: "",
  },
  {
    id: "amlan-sen",
    name: "Amlan Sen",
    role: "Strategic Business & Venture Advisor (Offline Session Mentor)",
    organization: "Offline Session Mentor",
    alumnusTag: "Offline Mentor",
    // File to drop in public/images/: mentor-amlan-sen.png
    imageUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/amlan-sen-69843a16a/?originalSubdomain=in",
  },
  {
    id: "rajiv-aggarwal",
    name: "Rajiv Aggarwal",
    role: "Founder & CEO, Eduverse | EdTech & Innovation Leader (Offline Session Mentor)",
    organization: "Eduverse",
    alumnusTag: "Offline Mentor",
    // File to drop in public/images/: mentor-rajiv-aggarwal.png
    imageUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/rajivagarwaleduverse/?originalSubdomain=in",
  },
  {
    id: "sudeep-sharma",
    name: "Sudeep Sharma",
    role: "Executive Leader & Scale-Up Mentor | Venture Advisor",
    organization: "Ecosystem Mentor",
    alumnusTag: "SBC Mentor",
    imageUrl: "/images/mentor-sudeep-sharma.png",
    linkedinUrl: "https://www.linkedin.com/in/sudeep-sharma-466a41174/?originalSubdomain=in",
  },
];
