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
      setIsScrolled(window.scrollY > 40);
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
      const topOffset = targetEl.offsetTop - 85;
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
        window.scrollTo({ top: el.offsetTop - 85, behavior: "smooth" });
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed left-0 right-0 z-50 w-full transition-all duration-300 ease-out ${
        isScrolled ? "top-2.5 sm:top-3 px-3 sm:px-6" : "top-4 sm:top-6 px-4 sm:px-8"
      }`}
    >
      {/* Main Single Bar: Significant width reduction on scroll, consistent height, original rounded-2xl shape */}
      <div 
        className={`mx-auto flex items-center justify-between border transition-all duration-300 ease-out rounded-2xl box-border ${
          isScrolled 
            ? "bg-[#fcfbf8]/92 backdrop-blur-xl border-[#321F1F]/15 shadow-[0_12px_32px_-4px_rgba(50,31,31,0.14),0_2px_8px_rgba(50,31,31,0.06)] max-w-[1020px] w-full h-[70px] sm:h-[72px] px-3.5 sm:px-5 gap-2 sm:gap-3" 
            : "bg-[#fcfbf8]/95 backdrop-blur-md border-[#321F1F]/10 shadow-sm w-full max-w-[1440px] h-[74px] sm:h-[78px] px-5 sm:px-8 gap-4 sm:gap-6"
        }`}
      >
        {/* Left: Brand Logo & Details */}
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-2.5 group shrink-0 min-w-0"
          aria-label="Startup Bootcamp 9.0 - E-Cell IIT Kharagpur"
        >
          {/* IIT KGP / E-Cell Emblem */}
          <div className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 overflow-hidden flex items-center justify-center group-hover:scale-105 transition-all duration-300">
            <img src="/images/sbc-logo.png" alt="SBC Logo" className="w-full h-full object-contain mix-blend-multiply" />
          </div>
          <div className="flex flex-col justify-center min-w-0">
            <span className="font-bold tracking-tight text-[#111111] font-serif leading-tight text-[12.5px] sm:text-[14px] truncate">
              STARTUP BOOTCAMP 9.0
            </span>
            <span className="text-[#321F1F]/60 tracking-tight font-medium text-[9.5px] sm:text-[11px] mt-[1px]">
              E-Cell, IIT Kharagpur
            </span>
          </div>
        </Link>

        {/* Center: Central Navigation */}
        <nav 
          className={`hidden lg:flex items-center justify-center flex-1 transition-all duration-300 ${
            isScrolled ? "gap-0.5 xl:gap-1.5" : "gap-1 xl:gap-2"
          }`} 
          aria-label="Desktop navigation"
        >
          {NAV_TABS.map((tab) => {
            const isActive = activeTab === tab.sectionId;
            return (
              <Link
                key={tab.sectionId}
                href={tab.href}
                onClick={(e) => handleTabClick(e, tab)}
                className={`relative font-medium transition-colors whitespace-nowrap ${
                  isScrolled 
                    ? "px-2 py-1 text-[12.5px] xl:text-[13px]" 
                    : "px-2.5 py-1.5 text-[13.5px]"
                } ${
                  isActive
                    ? "text-[#111111] font-semibold"
                    : "text-[#321F1F]/70 hover:text-[#111111]"
                }`}
              >
                <span>{tab.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="desktop-nav-underline"
                    className="absolute bottom-[2px] left-2 right-2 h-[2px] bg-[#6B1B26]"
                    aria-hidden="true"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA / Actions */}
        <div className={`flex items-center shrink-0 transition-all duration-300 ${isScrolled ? "gap-2 sm:gap-3" : "gap-2 sm:gap-4"}`}>
          <div className="hidden lg:block w-[1px] h-5 bg-[#321F1F]/15" />
          
          <Link
            href="/#register"
            onClick={handleScrollToRegister}
            className={`hidden sm:inline-flex font-medium text-[#7a6458] hover:text-[#4E0C16] transition-colors ${
              isScrolled ? "text-[12.5px] sm:text-[13px]" : "text-[13.5px]"
            }`}
          >
            Sign In
          </Link>

          <Link
            href="/#register"
            onClick={handleScrollToRegister}
            className={`inline-flex items-center gap-1.5 bg-[#6B1B26] hover:bg-[#52131D] text-white font-medium rounded-xl shadow-sm transition active:scale-95 whitespace-nowrap ${
              isScrolled 
                ? "px-3.5 py-2 text-[12px] sm:text-[13px]" 
                : "px-4 py-2 sm:px-5 sm:py-2.5 text-[12.5px] sm:text-[13.5px]"
            }`}
          >
            <span>Register Now</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          {/* Mobile Menu Button with 44px min touch target */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#321F1F] hover:bg-[#321F1F]/10 focus:outline-none flex items-center justify-center min-w-[40px] min-h-[40px]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#972933]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Sub-bar for Mobile / Tablet under lg */}
      <nav
        className={`lg:hidden border border-[#321F1F]/10 bg-[#fcfbf8]/95 backdrop-blur-md mx-auto shadow-sm rounded-xl transition-all duration-300 ${
          isScrolled ? "mt-1.5 px-2 max-w-[1020px]" : "mt-2 px-2 w-full max-w-[1440px]"
        }`}
        aria-label="Mobile tab navigation"
      >
        <div className="flex items-center justify-start overflow-x-auto no-scrollbar py-1.5 px-1 gap-1">
          {NAV_TABS.map((tab) => {
            const isActive = activeTab === tab.sectionId;
            return (
              <Link
                key={tab.sectionId}
                href={tab.href}
                onClick={(e) => handleTabClick(e, tab)}
                className={`relative px-2.5 py-1 text-[12px] sm:text-[13px] font-medium tracking-wide transition-colors whitespace-nowrap min-h-[32px] flex items-center ${
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

      {/* Mobile Drawer Menu with Backdrop & Touch-Friendly Rows */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 bg-[#fcfbf8]/98 backdrop-blur-xl border border-[#321F1F]/12 rounded-2xl p-3 shadow-xl max-w-[1080px] mx-auto space-y-1">
          {NAV_TABS.map((tab) => {
            const isActive = activeTab === tab.sectionId;
            return (
              <Link
                key={tab.sectionId}
                href={tab.href}
                onClick={(e) => handleTabClick(e, tab)}
                className={`block px-4 py-3 rounded-xl text-[14px] font-medium transition-colors ${
                  isActive
                    ? "bg-[#6B1B26]/10 text-[#6B1B26] font-bold"
                    : "text-[#321F1F]/80 hover:bg-[#321F1F]/5"
                }`}
              >
                {tab.label}
              </Link>
            );
          })}
          <div className="pt-2 border-t border-[#321F1F]/10 flex items-center justify-between px-2">
            <Link
              href="/#register"
              onClick={handleScrollToRegister}
              className="text-xs font-semibold text-[#972933] py-2"
            >
              Sign In to Account →
            </Link>
            <span className="text-[10px] font-mono uppercase text-[#321F1F]/40">
              E-Cell IIT KGP
            </span>
          </div>
        </div>
      )}
    </header>
  );
}
