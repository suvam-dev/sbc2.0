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
    id: "arjun-malhotra",
    name: "Arjun Malhotra",
    role: "Co-Founder, HCL Group & Headstrong, Distinguished Veteran Investor",
    organization: "HCL Technologies",
    alumnusTag: "Batch: IIT Kharagpur Alumnus",
    imageUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/arjun-malhotra",
  },
  {
    id: "anuradha-acharya",
    name: "Anuradha Acharya",
    role: "Founder & CEO, Mapmygenome, Genomics & Preventive Healthcare Pioneer",
    organization: "Mapmygenome",
    alumnusTag: "Batch: IIT Kharagpur Alumna",
    imageUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/anuradha-acharya",
  },
  {
    id: "duvvuri-subbarao",
    name: "Dr. Duvvuri Subbarao",
    role: "22nd Governor of the Reserve Bank of India, Eminent Economist & Policy Leader",
    organization: "Reserve Bank of India",
    alumnusTag: "Batch: IIT Kharagpur Alumnus",
    imageUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/d-subbarao",
  },
  {
    id: "pradeep-gupta",
    name: "Pradeep Gupta",
    role: "Chairman & Managing Director, CyberMedia Group, Angel Investor",
    organization: "CyberMedia",
    alumnusTag: "Batch: IIT Kharagpur Alumnus",
    imageUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/pradeep-gupta-cybermedia",
  },
  {
    id: "bikash-barai",
    name: "Bikash Barai",
    role: "Co-founder, FireCompass & CISO Platform, AI Cybersecurity Pioneer",
    organization: "FireCompass",
    alumnusTag: "Batch: IIT Kharagpur Alumnus",
    imageUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/bikashbarai",
  },
  {
    id: "vinod-gupta",
    name: "Vinod Gupta",
    role: "Founder & Former Chairman, InfoGROUP & Everest Group, Global Venture Philanthropist",
    organization: "VGSoM Founder",
    alumnusTag: "Batch: IIT Kharagpur Alumnus",
    imageUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/vinod-gupta",
  },
  {
    id: "rohit-bansal",
    name: "Rohit Bansal",
    role: "Co-Founder, Titan Capital & Angel Investor in 250+ High-Growth Tech Ventures",
    organization: "Titan Capital",
    alumnusTag: "Ecosystem Mentor & VC Partner",
    imageUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/rohit-bansal-snapdeal",
  },
];
