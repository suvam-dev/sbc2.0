import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { PROGRAMME } from "@/data/programme";

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f7ecd0] text-[#321F1F]">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-3.5 sm:px-6 pt-28 sm:pt-36 pb-12 sm:pb-16 w-full">
        <h1 className="text-2xl sm:text-4xl font-display font-black text-[#321F1F] mb-6 uppercase">
          Terms & Conditions
        </h1>
        <div className="bg-[#fff8e8] p-5 sm:p-8 rounded-none shadow-sm border border-[#321F1F]/15 space-y-4 text-xs sm:text-base leading-relaxed text-[#321F1F]/80">
          <p>
            By participating in {PROGRAMME.name}, teams agree to comply with programme guidelines, event schedules and mentorship codes of conduct. Selection considers innovation, product readiness, customer need, the team and commercialisation potential.
          </p>
          <p>
            All submitted pitch decks and venture ideas remain the intellectual property of the respective teams. Judges, mentors, and organizers evaluate submissions under strict professional discretion.
          </p>
          <p>
            There are no participation fees for student founders. Sponsorship does not influence venture selection. Curated introductions and commercialisation support do not guarantee investment, a pilot or a licensing agreement.
          </p>
          <p>
            For queries or disputes regarding these terms, please contact our organizers through the{" "}
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
