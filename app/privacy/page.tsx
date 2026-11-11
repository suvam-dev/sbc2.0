import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { PROGRAMME } from "@/data/programme";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f7ecd0] text-[#321F1F]">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-3.5 sm:px-6 pt-28 sm:pt-36 pb-12 sm:pb-16 w-full">
        <h1 className="text-2xl sm:text-4xl font-display font-black text-[#321F1F] mb-6 uppercase">
          Privacy Policy
        </h1>
        <div className="bg-[#fff8e8] p-5 sm:p-8 rounded-none shadow-sm border border-[#321F1F]/15 space-y-4 text-xs sm:text-base leading-relaxed text-[#321F1F]/80">
          <p>
            {PROGRAMME.name} and Entrepreneurship Cell, IIT Kharagpur respect the privacy of all participating founders, team members, and visitors.
          </p>
          <p>
            Information submitted through the registration portal, including contact details, venture or technology information and pitch materials, is used for application review, mentor matching, programme coordination, investor or industry matchmaking and commercialisation follow-through.
          </p>
          <p>
            For questions regarding privacy practices, please reach out through our{" "}
            <Link href="/#contact" className="text-[#972933] font-medium underline">
              Contact Desk
            </Link>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
