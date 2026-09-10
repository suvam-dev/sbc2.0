"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, ArrowRight, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
      setIsScrolled(window.scrollY > 30);
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

  // Lock body scroll and listen for Escape key when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setMobileMenuOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

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
    <>
      <header 
        className={`fixed left-0 right-0 z-40 w-full transition-all duration-300 ease-out ${
          isScrolled 
            ? "top-2 sm:top-3 px-3 sm:px-6" 
            : "top-3 sm:top-6 px-3.5 sm:px-8"
        }`}
      >
        {/* Main Bar: Width reduction on scroll for desktop, compact single bar on mobile */}
        <div 
          className={`mx-auto flex items-center justify-between border transition-all duration-300 ease-out rounded-2xl box-border ${
            isScrolled 
              ? "bg-[#fcfbf8]/94 backdrop-blur-xl border-[#321F1F]/15 shadow-[0_12px_32px_-4px_rgba(50,31,31,0.14),0_2px_8px_rgba(50,31,31,0.06)] max-w-[1020px] w-full h-[62px] sm:h-[68px] lg:h-[72px] px-3 sm:px-5 gap-2 sm:gap-3" 
              : "bg-[#fcfbf8]/95 backdrop-blur-md border-[#321F1F]/10 shadow-sm w-full max-w-[1440px] h-[66px] sm:h-[72px] lg:h-[78px] px-3.5 sm:px-6 lg:px-8 gap-3 sm:gap-6"
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
              <span className="font-bold tracking-tight text-[#111111] font-serif leading-tight text-[12px] sm:text-[14px] truncate">
                STARTUP BOOTCAMP 9.0
              </span>
              <span className="text-[#321F1F]/60 tracking-tight font-medium text-[9px] sm:text-[11px] mt-[1px]">
                E-Cell, IIT Kharagpur
              </span>
            </div>
          </Link>

          {/* Center: Desktop Navigation (>= 1024px) */}
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

          {/* Right CTA & Actions */}
          <div className="flex items-center shrink-0 gap-1.5 sm:gap-3">
            <div className="hidden lg:block w-[1px] h-5 bg-[#321F1F]/15" />
            
            <Link
              href="/#register"
              onClick={handleScrollToRegister}
              className="hidden md:inline-flex font-medium text-[#7a6458] hover:text-[#4E0C16] text-[12.5px] sm:text-[13px] transition-colors px-2 py-1"
            >
              Sign In
            </Link>

            <Link
              href="/#register"
              onClick={handleScrollToRegister}
              className={`inline-flex items-center gap-1 sm:gap-1.5 bg-[#6B1B26] hover:bg-[#52131D] text-white font-medium rounded-xl shadow-sm transition active:scale-95 whitespace-nowrap text-[11px] sm:text-[13px] px-3 py-1.5 sm:px-4 sm:py-2`}
            >
              <span>Register Now</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile / Tablet Menu Button with min 44x44px touch target */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-[#321F1F] hover:bg-[#321F1F]/10 focus:outline-none flex items-center justify-center w-11 h-11 transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#972933]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Accessible Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Slide-over Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-[340px] bg-[#FAF5EB] border-l-2 border-[#111111]/80 shadow-2xl flex flex-col justify-between overflow-y-auto"
              style={{ paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))" }}
            >
              {/* Drawer Top Header */}
              <div>
                <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#321F1F]/15 bg-[#F4EBD6]">
                  <div className="flex items-center gap-2.5">
                    <img src="/images/sbc-logo.png" alt="" className="w-7 h-7 object-contain mix-blend-multiply" />
                    <div>
                      <span className="font-bold font-serif text-[13px] text-[#111111] block leading-none">
                        STARTUP BOOTCAMP 9.0
                      </span>
                      <span className="text-[10px] text-[#321F1F]/60 block mt-0.5">
                        Navigation Menu
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-[#321F1F] hover:bg-[#321F1F]/10 transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Dispatch Status Tag */}
                <div className="px-5 pt-4 pb-2">
                  <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#972933] font-bold">
                    <span className="w-2 h-2 rounded-full bg-[#972933] animate-pulse" />
                    <span>SBC 9.0 // DIRECTORY</span>
                  </div>
                </div>

                {/* Nav Links with 48px Touch Targets */}
                <nav className="p-3 space-y-1">
                  {NAV_TABS.map((tab) => {
                    const isActive = activeTab === tab.sectionId;
                    return (
                      <Link
                        key={tab.sectionId}
                        href={tab.href}
                        onClick={(e) => handleTabClick(e, tab)}
                        className={`flex items-center justify-between px-4 py-3.5 rounded-lg text-sm font-medium transition-all min-h-[48px] ${
                          isActive
                            ? "bg-[#6B1B26] text-white font-bold shadow-xs"
                            : "text-[#321F1F]/85 hover:bg-[#321F1F]/8 hover:text-[#111111]"
                        }`}
                      >
                        <span className="font-serif tracking-wide">{tab.label}</span>
                        <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? "text-white" : "text-[#321F1F]/40"}`} />
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Drawer Bottom Actions */}
              <div className="p-4 sm:p-5 border-t border-[#321F1F]/15 bg-[#F4EBD6]/60 space-y-3">
                <Link
                  href="/#register"
                  onClick={handleScrollToRegister}
                  className="w-full min-h-[48px] flex items-center justify-center gap-2 bg-[#6B1B26] hover:bg-[#52131D] text-white font-bold text-xs uppercase tracking-wider rounded-none shadow-md transition active:scale-98"
                >
                  <span>Register Your Venture</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <div className="flex items-center justify-between pt-2 text-xs text-[#321F1F]/70">
                  <Link
                    href="/#register"
                    onClick={handleScrollToRegister}
                    className="font-medium hover:text-[#972933] underline underline-offset-2 py-1"
                  >
                    Founder Sign In
                  </Link>
                  <span className="text-[10px] font-mono text-[#321F1F]/50">
                    E-Cell IIT Kharagpur
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
