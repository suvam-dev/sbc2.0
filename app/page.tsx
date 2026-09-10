"use client";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Bulletin from "./components/Bulletin";
import PastMentorsMarquee from "./components/PastMentorsMarquee";
import Eligibility from "./components/Eligibility";
import Judging from "./components/Judging";
import RegisterWizard from "./components/RegisterWizard";
import IncentivesSection from "./components/IncentivesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f7ecd0] text-[#321F1F]">
      {/* 1. Global Header Navigation */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 w-full flex flex-col">
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. Bulletin / Updates Section */}
        <Bulletin />

        {/* 4. Past Mentors Infinite Horizontal Scroll Section */}
        <PastMentorsMarquee />

        {/* 5. Eligibility Section */}
        <Eligibility />

        {/* 6. Judging Section */}
        <Judging />

        {/* 7. Register Your Team Form Section */}
        <RegisterWizard />

        {/* 8. Our Incentives */}
        <IncentivesSection />

        {/* 9. Contact Us */}
        <ContactSection />
      </main>

      {/* 10. Legal Footer */}
      <Footer />
    </div>
  );
}
