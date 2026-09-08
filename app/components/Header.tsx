"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

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
  { label: "Register", href: "/#register", sectionId: "register", aliases: ["register", "register-team"] },
  { label: "Previous Incentives", href: "/#incentives", sectionId: "incentives", aliases: ["incentives", "survey"] },
];

export default function Header() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<string>("case");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const handleTabClick = (e: React.MouseEvent<HTMLAnchorElement>, tab: NavTab) => {
    let targetEl: HTMLElement | null = null;
    for (const id of tab.aliases) {
      const el = document.getElementById(id);
      if (el) {
        targetEl = el;
        break;
      }
    }

    if (pathname === "/" && targetEl) {
      e.preventDefault();
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

  return (
    <header className="sticky top-0 z-50 w-full bg-[#f7ecd0]/95 backdrop-blur-md border-b border-[#321F1F]/15 transition-all shadow-xs">
      {/* Main Single Bar on Desktop / Dual Bar on Mobile */}
      <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
        {/* Brand Logo & Details */}
        <Link
          href="/"
          className="flex items-center gap-3 group py-1 shrink-0"
          aria-label="Startup Bootcamp 9.0 - E-Cell IIT Kharagpur"
        >
          {/* IIT KGP / E-Cell Emblem */}
          <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform">
            <img src="/images/sbc-logo.png" alt="SBC Logo" className="w-full h-full object-contain mix-blend-multiply" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#111111] font-serif leading-tight">
              Startup Bootcamp 9.0
            </span>
            <span className="text-[10px] sm:text-[11px] text-[#321F1F]/70 tracking-tight font-medium">
              E-Cell, IIT Kharagpur
            </span>
          </div>
        </Link>

        {/* Center Desktop Navigation Tabs */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Desktop navigation">
          {NAV_TABS.map((tab) => {
            const isActive = activeTab === tab.sectionId;
            return (
              <Link
                key={tab.sectionId}
                href={tab.href}
                onClick={(e) => handleTabClick(e, tab)}
                className={`relative px-3 py-1.5 text-xs xl:text-sm font-medium tracking-wide transition-colors whitespace-nowrap ${
                  isActive
                    ? "text-[#4E0C16] font-semibold"
                    : "text-[#321F1F]/75 hover:text-[#111111]"
                }`}
              >
                <span>{tab.label}</span>
                {isActive && (
                  <span
                    className="absolute -bottom-1.5 left-2 right-2 h-[2.5px] bg-[#4E0C16] rounded-full"
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA / Actions */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <Link
            href="/#register"
            onClick={(e) =>
              handleTabClick(
                e,
                NAV_TABS.find((t) => t.sectionId === "register") || NAV_TABS[4]
              )
            }
            className="hidden sm:inline-flex text-xs sm:text-sm font-medium text-[#321F1F]/80 hover:text-[#4E0C16] transition"
          >
            Sign In
          </Link>

          <Link
            href="/#register"
            onClick={(e) =>
              handleTabClick(
                e,
                NAV_TABS.find((t) => t.sectionId === "register") || NAV_TABS[4]
              )
            }
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#4E0C16] hover:bg-[#3B0910] text-white text-xs sm:text-[13px] font-medium rounded-md shadow-xs transition active:scale-95"
          >
            <span>Register Now</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-md text-[#321F1F] hover:bg-[#321F1F]/10 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Sub-bar for Mobile / Tablet under lg */}
      <nav
        className="lg:hidden border-t border-[#321F1F]/10 bg-[#f7ecd0]/90 backdrop-blur-xs w-full"
        aria-label="Mobile tab navigation"
      >
        <div className="max-w-[1260px] mx-auto px-4">
          <div className="flex items-center justify-start overflow-x-auto no-scrollbar py-2 gap-1">
            {NAV_TABS.map((tab) => {
              const isActive = activeTab === tab.sectionId;
              return (
                <Link
                  key={tab.sectionId}
                  href={tab.href}
                  onClick={(e) => handleTabClick(e, tab)}
                  className={`relative px-3 py-1.5 text-xs font-semibold tracking-wider transition-colors whitespace-nowrap ${
                    isActive
                      ? "text-[#4E0C16]"
                      : "text-[#321F1F]/70 hover:text-[#321F1F]"
                  }`}
                >
                  <span>{tab.label}</span>
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-1 right-1 h-[2px] bg-[#4E0C16] rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>


      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#f9efd9] border-b border-[#321F1F]/15 px-4 py-3 space-y-1">
          {NAV_TABS.map((tab) => {
            const isActive = activeTab === tab.sectionId;
            return (
              <Link
                key={tab.sectionId}
                href={tab.href}
                onClick={(e) => handleTabClick(e, tab)}
                className={`block px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-[#972933]/10 text-[#972933] font-bold"
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
