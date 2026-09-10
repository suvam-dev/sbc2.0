import Header from "../components/Header";
import Footer from "../components/Footer";

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
            Startup Bootcamp 9.0 and Entrepreneurship Cell, IIT Kharagpur respect the privacy of all participating founders, team members, and visitors.
          </p>
          <p>
            Any information submitted through the registration portal (including personal contact details, startup overview, and pitch deck materials) will be utilized solely for the evaluation, mentorship pairing, and administrative operations of Startup Bootcamp 9.0.
          </p>
          <p>
            For questions regarding privacy practices, please reach out through our{" "}
            <a href="/#contact" className="text-[#972933] font-medium underline">
              Contact Desk
            </a>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
