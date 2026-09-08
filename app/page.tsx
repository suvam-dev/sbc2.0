"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Bulletin from "./components/Bulletin";
import TheCase from "./components/TheCase";
import PastMentorsMarquee from "./components/PastMentorsMarquee";
import Eligibility from "./components/Eligibility";
import Judging from "./components/Judging";
import Registration from "./components/Registration";
import TheSurvey from "./components/TheSurvey";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f7ecd0] text-[#321F1F]">
      {/* 1. Global Header Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 w-full flex flex-col">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Bulletin / Updates Section */}
        <Bulletin />

        {/* 4. The Case Section */}
        {/* <TheCase /> */}

        {/* 5. Past Mentors Infinite Horizontal Scroll Section (replaces Partners) */}
        <PastMentorsMarquee />

        {/* 6. Eligibility Section */}
        <Eligibility />

        {/* 7. Judging Section */}
        <Judging />

        {/* 8. Register Your Team Form Section */}
        <Registration />

        {/* 9. Our Incentives */}
        <TheSurvey />

        {/* 10. Contact Us */}
        <ContactSection />
      </main>

      {/* 11. Legal Footer */}
      <Footer />
    </div>
  );
}
