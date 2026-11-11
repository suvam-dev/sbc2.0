import Header from "../components/Header";
import Footer from "../components/Footer";
import PartnersGrid from "../components/PartnersGrid";

export default function PartnersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f7ecd0] text-[#321F1F]">
      <Header />
      <main className="flex-1">
        <PartnersGrid />
      </main>
      <Footer />
    </div>
  );
}
