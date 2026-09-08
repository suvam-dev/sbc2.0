import Header from "../components/Header";
import Footer from "../components/Footer";
import RegisterWizard from "../components/RegisterWizard";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f7ecd0] text-[#321F1F]">
      <Header />
      <main className="flex-1 py-6 sm:py-10">
        <RegisterWizard />
      </main>
      <Footer />
    </div>
  );
}
