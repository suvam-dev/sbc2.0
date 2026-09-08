import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f7ecd0] text-[#321F1F]">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#321F1F] mb-6">
          Privacy Policy
        </h1>
        <div className="bg-[#f7ecd0] p-6 sm:p-8 rounded-lg shadow-sm border border-[#321F1F]/15 space-y-4 text-sm sm:text-base leading-relaxed text-[#321F1F]/80">
          <p>
            Startup Bootcamp 9.0 and Entrepreneurship Cell, IIT Kharagpur respect the privacy of all participating founders, team members, and visitors.
          </p>
          <p>
            Any information submitted through the registration portal (including personal contact details, startup overview, and pitch deck materials) will be utilized solely for the evaluation, mentorship pairing, and administrative operations of Startup Bootcamp 9.0.
          </p>
          <p>
            For questions regarding privacy practices, please contact{" "}
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
