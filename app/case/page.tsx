import Header from "../components/Header";
import Footer from "../components/Footer";
import TheCase from "../components/TheCase";

export default function CasePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f7ecd0] text-[#321F1F]">
      <Header />
      <main className="flex-1">
        {/* <!-- CONTENT PENDING --> */}
        <TheCase />
      </main>
      <Footer />
    </div>
  );
}
