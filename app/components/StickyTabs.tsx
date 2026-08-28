"use client";

import React, { useEffect, useState } from "react";

const TABS = [
  { label: "The Case", href: "#case" },
  { label: "Partners", href: "#sponsors" },
  { label: "Eligibility", href: "#eligibility" },
  { label: "Judging", href: "#evaluation-criteria" },
  { label: "Register", href: "#register-team" },
  { label: "The Survey", href: "#survey" },
];

export default function StickyTabs() {
  const [activeTab, setActiveTab] = useState("#case");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      const sectionIds = [
        "case",
        "sponsors",
        "eligibility",
        "evaluation-criteria",
        "register-team",
        "survey",
      ];

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveTab(`#${sectionIds[i]}`);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTabClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const topOffset = targetEl.offsetTop - 70;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
      setActiveTab(href);
    }
  };

  return (
    <nav
      className="sticky top-14 sm:top-16 z-40 w-full bg-[#f7ebd0] border-b border-[#321F1F]/15 transition-all shadow-xs"
      aria-label="Section navigation"
    >
      <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar py-0">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.href;
            return (
              <a
                key={tab.href}
                href={tab.href}
                onClick={(e) => handleTabClick(e, tab.href)}
                className={`relative px-4 sm:px-6 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold tracking-wider transition-colors whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "text-[#321F1F]"
                    : "text-[#321F1F]/60 hover:text-[#321F1F]"
                }`}
              >
                <span>{tab.label}</span>
                {/* Active Indicator bar */}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#972933] transition-all"
                    aria-hidden="true"
                  />
                )}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
