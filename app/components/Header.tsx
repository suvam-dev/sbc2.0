"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export interface NavTab {
  label: string;
  href: string;
  sectionId: string;
  aliases: string[];
}

export const NAV_TABS: NavTab[] = [
  { label: "The Case", href: "/#case", sectionId: "case", aliases: ["case"] },
  { label: "Past Mentors", href: "/#partners", sectionId: "partners", aliases: ["partners", "mentors", "sponsors"] },
  { label: "Eligibility", href: "/#eligibility", sectionId: "eligibility", aliases: ["eligibility"] },
  { label: "Judging", href: "/#judging", sectionId: "judging", aliases: ["judging", "evaluation-criteria"] },
  { label: "Incentives", href: "/#incentives", sectionId: "incentives", aliases: ["incentives", "survey"] },
  { label: "FAQs", href: "/#faq", sectionId: "faq", aliases: ["faq", "faqs"] },
];

export default function Header() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<string>("case");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const activeTabIndex = NAV_TABS.findIndex(
    (t) => t.sectionId === activeTab || t.aliases.includes(activeTab)
  );

  // Sync active tab with pathname or scroll position on homepage
  useEffect(() => {
    const routeName = pathname.replace(/^\//, "");
    if (routeName) {
      const matched = NAV_TABS.find((t) => t.sectionId === routeName || t.aliases.includes(routeName));
      if (matched) {
        setActiveTab(matched.sectionId);
        return;
      }
    }

    // Scroll spy for single-page view
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const scrollPosition = window.scrollY + 180;
      for (let i = NAV_TABS.length - 1; i >= 0; i--) {
        const tab = NAV_TABS[i];
        for (const id of tab.aliases) {
          const el = document.getElementById(id);
          if (el && el.offsetTop <= scrollPosition) {
            setActiveTab(tab.sectionId);
            return;
          }
        }
      }
      setActiveTab("case");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleTabClick = (e?: React.MouseEvent, tab?: NavTab) => {
    if (!tab) return;
    let targetEl: HTMLElement | null = null;
    for (const id of tab.aliases) {
      const el = document.getElementById(id);
      if (el) {
        targetEl = el;
        break;
      }
    }

    if (pathname === "/" && targetEl) {
      e?.preventDefault();
      const topOffset = targetEl.offsetTop - 110;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
      setActiveTab(tab.sectionId);
      setMobileMenuOpen(false);
    } else {
      setMobileMenuOpen(false);
    }
  };

  const handleScrollToRegister = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      const el = document.getElementById("register") || document.getElementById("register-team");
      if (el) {
        window.scrollTo({ top: el.offsetTop - 110, behavior: "smooth" });
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "top-2 sm:top-4 px-2 sm:px-4 lg:px-8" : "top-4 sm:top-6 px-4"
      }`}
    >
      {/* Main Single Bar: Logo on one side, Central Nav in center, CTA button on other side */}
      <div 
        className={`mx-auto flex items-center justify-between gap-4 backdrop-blur-md border border-[#321F1F]/10 shadow-sm px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          isScrolled 
            ? "bg-[#fcfbf8]/95 max-w-[1260px] w-full h-[68px] rounded-2xl" 
            : "bg-[#fcfbf8] w-full lg:w-[90%] xl:w-[90%] max-w-[1600px] h-[76px] rounded-[1.25rem]"
        }`}
      >
        {/* Left: Brand Logo & Details */}
        <Link
          href="/"
          className="flex items-center gap-3 group py-1 shrink-0"
          aria-label="Startup Bootcamp 9.0 - E-Cell IIT Kharagpur"
        >
          {/* IIT KGP / E-Cell Emblem */}
          <div className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform">
            <img src="/images/sbc-logo.png" alt="SBC Logo" className="w-full h-full object-contain mix-blend-multiply" />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-[13px] sm:text-[15px] font-bold tracking-wide text-[#111111] font-serif leading-tight">
              STARTUP BOOTCAMP 9.0
            </span>
            <span className="text-[11px] sm:text-[12px] text-[#321F1F]/60 tracking-tight font-medium mt-[1px]">
              E-Cell, IIT Kharagpur
            </span>
          </div>
        </Link>

        {/* Center: Central Navigation */}
        <nav className="hidden lg:flex items-center justify-center flex-1 gap-1" aria-label="Desktop navigation">
          {NAV_TABS.map((tab) => {
            const isActive = activeTab === tab.sectionId;
            return (
              <Link
                key={tab.sectionId}
                href={tab.href}
                onClick={(e) => handleTabClick(e, tab)}
                className={`relative px-3 py-2 text-[14px] transition-colors whitespace-nowrap ${
                  isActive
                    ? "text-[#111111] font-semibold"
                    : "text-[#321F1F]/70 hover:text-[#111111] font-medium"
                }`}
              >
                <span>{tab.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="desktop-nav-underline"
                    className="absolute bottom-[2px] left-3 right-3 h-[2px] bg-[#6B1B26]"
                    aria-hidden="true"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA / Actions */}
        <div className="flex items-center gap-3 sm:gap-5 shrink-0">
          <div className="hidden lg:block w-[1px] h-6 bg-[#321F1F]/15"></div>
          
          <Link
            href="/#register"
            onClick={handleScrollToRegister}
            className="hidden sm:inline-flex text-[14px] font-medium text-[#7a6458] hover:text-[#4E0C16] transition"
          >
            Sign In
          </Link>

          <Link
            href="/#register"
            onClick={handleScrollToRegister}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#6B1B26] hover:bg-[#52131D] text-white text-[13px] sm:text-[14px] font-medium rounded-lg shadow-sm transition active:scale-95"
          >
            <span>Register Now</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-md text-[#321F1F] hover:bg-[#321F1F]/10 focus:outline-none ml-1"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Sub-bar for Mobile / Tablet under lg */}
      <nav
        className={`lg:hidden border border-[#321F1F]/10 bg-[#fcfbf8]/95 backdrop-blur-md mx-auto shadow-sm transition-all duration-300 ${
          isScrolled ? "mt-2 rounded-xl w-full max-w-[1260px]" : "mt-2 rounded-xl w-full"
        }`}
        aria-label="Mobile tab navigation"
      >
        <div className="flex items-center justify-start overflow-x-auto no-scrollbar py-2 px-2 gap-1">
          {NAV_TABS.map((tab) => {
            const isActive = activeTab === tab.sectionId;
            return (
              <Link
                key={tab.sectionId}
                href={tab.href}
                onClick={(e) => handleTabClick(e, tab)}
                className={`relative px-3 py-1.5 text-[13px] font-medium tracking-wide transition-colors whitespace-nowrap ${
                  isActive
                    ? "text-[#6B1B26] font-semibold"
                    : "text-[#321F1F]/70 hover:text-[#321F1F]"
                }`}
              >
                <span>{tab.label}</span>
                {isActive && (
                  <span
                    className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#6B1B26] rounded-full"
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 bg-[#fcfbf8]/95 backdrop-blur-md border border-[#321F1F]/10 rounded-xl px-4 py-3 space-y-1 shadow-sm max-w-[1260px] mx-auto">
          {NAV_TABS.map((tab) => {
            const isActive = activeTab === tab.sectionId;
            return (
              <Link
                key={tab.sectionId}
                href={tab.href}
                onClick={(e) => handleTabClick(e, tab)}
                className={`block px-3 py-2.5 rounded-lg text-[14px] font-medium transition-colors ${
                  isActive
                    ? "bg-[#6B1B26]/10 text-[#6B1B26] font-semibold"
                    : "text-[#321F1F]/80 hover:bg-[#321F1F]/5"
                }`}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
