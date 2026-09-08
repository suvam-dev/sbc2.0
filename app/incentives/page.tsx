import Header from "../components/Header";
import Footer from "../components/Footer";
import IncentivesSection from "../components/IncentivesSection";

export default function IncentivesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f7ecd0] text-[#321F1F]">
      <Header />
      <main className="flex-1">
        <IncentivesSection />
      </main>
      <Footer />
    </div>
  );
}
