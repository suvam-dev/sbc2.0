import Header from "../components/Header";
import Footer from "../components/Footer";

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
            By participating in Startup Bootcamp 9.0 organized by E-Cell IIT Kharagpur, all teams and members agree to comply with program guidelines, event schedules, and mentorship codes of conduct.
          </p>
          <p>
            All submitted pitch decks and venture ideas remain the intellectual property of the respective teams. Judges, mentors, and organizers evaluate submissions under strict professional discretion.
          </p>
          <p>
            For inquiries regarding terms, contact{" "}
            <a href="mailto:admin@ecell-iitkgp.in" className="text-[#972933] font-medium underline">
              admin@ecell-iitkgp.in
            </a>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
