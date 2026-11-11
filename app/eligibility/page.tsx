import Header from "../components/Header";
import Footer from "../components/Footer";
import Eligibility from "../components/Eligibility";

export default function EligibilityPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f7ecd0] text-[#321F1F]">
      <Header />
      <main className="flex-1">
        {/* <!-- CONTENT PENDING --> */}
        <Eligibility />
      </main>
      <Footer />
    </div>
  );
}
