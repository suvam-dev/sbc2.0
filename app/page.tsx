"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Bulletin from "./components/Bulletin";
import StickyTabs from "./components/StickyTabs";
import TheCase from "./components/TheCase";
import ThePartners from "./components/ThePartners";
import Eligibility from "./components/Eligibility";
import Judging from "./components/Judging";
import Registration from "./components/Registration";
import TheSurvey from "./components/TheSurvey";
import Footnote from "./components/Footnote";
import FloatingWidgets from "./components/FloatingWidgets";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f7ebd0] text-[#321F1F]">
      {/* Top Header Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 w-full flex flex-col">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Bulletin / Updates Section */}
        <Bulletin />

        {/* 3. Sticky Section Tabs */}
        <StickyTabs />

        {/* 4. The Case Section */}
        <TheCase />

        {/* 5. The Partners Section */}
        <ThePartners />

        {/* 6. Eligibility Section */}
        <Eligibility />

        {/* 7. Judging / Evaluation Section */}
        <Judging />

        {/* 8. Register Your Team Form Section */}
        <Registration />

        {/* 9. The Survey Band */}
        <TheSurvey />
      </main>

      {/* Footnote & Legal Footer */}
      <Footnote />

      {/* Floating Action Pill & Rotating Badge */}
      <FloatingWidgets />
    </div>
  );
}
