import Header from "../components/Header";
import Footer from "../components/Footer";
import RegisterWizard from "../components/RegisterWizard";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f7ecd0] text-[#321F1F]">
      <Header />
      <main className="flex-1 pt-24 sm:pt-28 pb-6 sm:pb-10">
        <RegisterWizard />
      </main>
      <Footer />
    </div>
  );
}
