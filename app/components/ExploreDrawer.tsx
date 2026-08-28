"use client";

import React, { useState, useEffect } from "react";

interface ExploreDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const ROTATING_SEARCH_PROMPTS = [
  "Best podcast episodes from two by two..",
  "Best stories from last month..",
  "How do family firms handle succession?",
  "How do founders think about exits in India?",
];

export default function ExploreDrawer({ isOpen, onClose }: ExploreDrawerProps) {
  const [promptIndex, setPromptIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    newsletters: false,
    podcasts: false,
    events: false,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setPromptIndex((prev) => (prev + 1) % ROTATING_SEARCH_PROMPTS.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-xs z-90 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-[440px] bg-[#f7ebd0] z-100 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Explore menu"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#321F1F]/15">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#972933]">
            Explore The Ken
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-full hover:bg-black/5 transition cursor-pointer"
            aria-label="Close explore menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#321F1F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 divide-y divide-[#321F1F]/15">
          {/* Search bar */}
          <div className="relative mb-5 pb-5">
            <div className="relative flex items-center bg-[#fff8e8] border border-[#321F1F]/20 rounded px-3 py-2.5">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={ROTATING_SEARCH_PROMPTS[promptIndex]}
                className="w-full bg-transparent text-sm text-[#321F1F] placeholder-[#321F1F]/45 outline-none pr-8 font-sans"
              />
              <div className="absolute right-3 flex items-center gap-1">
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="text-xs text-[#321F1F]/50 hover:text-[#321F1F] cursor-pointer p-0.5"
                  >
                    ✕
                  </button>
                )}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#321F1F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-70"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
            </div>
          </div>

          {/* All Stories */}
          <div className="py-3">
            <a
              href="https://the-ken.com/all-stories/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between py-2 text-base font-medium text-[#321F1F] hover:text-[#972933] transition"
            >
              <span>All Stories</span>
              <span className="text-xs opacity-50">↗</span>
            </a>
          </div>

          {/* Newsletters Accordion */}
          <div className="py-3">
            <button
              onClick={() => toggleSection("newsletters")}
              className="w-full flex items-center justify-between py-2 text-base font-medium text-[#321F1F] hover:text-[#972933] cursor-pointer text-left"
            >
              <span>Newsletters</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={`transition-transform duration-200 ${
                  openSections.newsletters ? "rotate-180" : ""
                }`}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            {openSections.newsletters && (
              <div className="mt-2 pl-2 space-y-3 text-sm text-[#321F1F]/85 border-l-2 border-[#972933]/30">
                <a
                  href="https://the-ken.com/trade-tricks/stories/"
                  target="_blank"
                  rel="noreferrer"
                  className="block p-1 hover:text-[#972933] transition"
                >
                  <p className="font-semibold text-[#321F1F]">Trade Tricks</p>
                  <p className="text-xs text-[#321F1F]/70">
                    Tracking biggest shifts in e-commerce, retail and FMCG
                  </p>
                </a>
                <a
                  href="https://the-ken.com/long-and-short/stories/"
                  target="_blank"
                  rel="noreferrer"
                  className="block p-1 hover:text-[#972933] transition"
                >
                  <p className="font-semibold text-[#321F1F]">Long and Short</p>
                  <p className="text-xs text-[#321F1F]/70">
                    The story behind the numbers driving India's market
                  </p>
                </a>
                <a
                  href="https://the-ken.com/newsletters/two-by-two/"
                  target="_blank"
                  rel="noreferrer"
                  className="block p-1 hover:text-[#972933] transition"
                >
                  <p className="font-semibold text-[#321F1F]">Two by Two</p>
                  <p className="text-xs text-[#321F1F]/70">
                    Business stories visualised as a 2x2 matrix
                  </p>
                </a>
                <a
                  href="https://the-ken.com/newsletters/first-principles/"
                  target="_blank"
                  rel="noreferrer"
                  className="block p-1 hover:text-[#972933] transition"
                >
                  <p className="font-semibold text-[#321F1F]">First Principles</p>
                  <p className="text-xs text-[#321F1F]/70">
                    Leadership insights from disruptive entrepreneurs
                  </p>
                </a>
              </div>
            )}
          </div>

          {/* Podcasts Accordion */}
          <div className="py-3">
            <button
              onClick={() => toggleSection("podcasts")}
              className="w-full flex items-center justify-between py-2 text-base font-medium text-[#321F1F] hover:text-[#972933] cursor-pointer text-left"
            >
              <span>Podcasts</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={`transition-transform duration-200 ${
                  openSections.podcasts ? "rotate-180" : ""
                }`}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            {openSections.podcasts && (
              <div className="mt-2 pl-2 space-y-3 text-sm text-[#321F1F]/85 border-l-2 border-[#972933]/30">
                <a
                  href="https://the-ken.com/podcasts/daybreak/"
                  target="_blank"
                  rel="noreferrer"
                  className="block p-1 hover:text-[#972933] transition"
                >
                  <p className="font-semibold text-[#321F1F]">Daybreak</p>
                  <p className="text-xs text-[#321F1F]/70">
                    Significant, simple and powerful business stories
                  </p>
                </a>
                <a
                  href="https://the-ken.com/podcasts/zero-shot/"
                  target="_blank"
                  rel="noreferrer"
                  className="block p-1 hover:text-[#972933] transition"
                >
                  <p className="font-semibold text-[#321F1F]">Zero Shot</p>
                  <p className="text-xs text-[#321F1F]/70">
                    Big ideas and applications of artificial intelligence
                  </p>
                </a>
                <a
                  href="https://the-ken.com/podcasts/first-principles/"
                  target="_blank"
                  rel="noreferrer"
                  className="block p-1 hover:text-[#972933] transition"
                >
                  <p className="font-semibold text-[#321F1F]">First Principles</p>
                  <p className="text-xs text-[#321F1F]/70">
                    Interviews with India’s business leaders & change makers
                  </p>
                </a>
              </div>
            )}
          </div>

          {/* Events Accordion */}
          <div className="py-3">
            <button
              onClick={() => toggleSection("events")}
              className="w-full flex items-center justify-between py-2 text-base font-medium text-[#321F1F] hover:text-[#972933] cursor-pointer text-left"
            >
              <span>Events</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={`transition-transform duration-200 ${
                  openSections.events ? "rotate-180" : ""
                }`}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            {openSections.events && (
              <div className="mt-2 pl-2 space-y-3 text-sm text-[#321F1F]/85 border-l-2 border-[#972933]/30">
                <div className="block p-1">
                  <p className="font-semibold text-[#321F1F]">Products</p>
                  <p className="text-xs text-[#321F1F]/70">
                    How AI is breaking and remaking the way products are built
                  </p>
                </div>
                <div className="block p-1">
                  <p className="font-semibold text-[#321F1F]">Careers</p>
                  <p className="text-xs text-[#321F1F]/70">
                    Building unique career lattices in today’s changing world
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Intermission */}
          <div className="py-3">
            <a
              href="https://the-ken.com/intermission/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between py-2 text-base font-medium text-[#321F1F] hover:text-[#972933] transition"
            >
              <span>Intermission</span>
              <span className="text-[10px] uppercase font-semibold bg-[#eee7e7] text-[#ff3333] px-2 py-0.5 rounded -rotate-2">
                New Episode
              </span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-[#321F1F]/15 bg-[#fff8e8]/50 flex items-center justify-between">
          <a
            href="https://the-ken.com/pricing/"
            className="w-full text-center py-2.5 bg-[#972933] text-white rounded font-medium text-sm hover:bg-[#74001c] transition"
          >
            Subscribe to The Ken
          </a>
        </div>
      </aside>
    </>
  );
}
