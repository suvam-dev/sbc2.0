"use client";

import React, { useState } from "react";
import ExploreDrawer from "./ExploreDrawer";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-[#f7ebd0]/95 backdrop-blur-xs border-b border-[#321F1F]/10 transition-all duration-300">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
          {/* Official The Ken Small Logo */}
          <a
            href="https://the-ken.com"
            className="flex items-center gap-2 group py-1"
            aria-label="The Ken Homepage"
          >
            <img
              src="/images/logo-header-small.svg"
              alt="The Ken"
              className="h-5 sm:h-6 w-auto object-contain transition-opacity group-hover:opacity-85"
            />
          </a>

          {/* Right Action Units */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Explore Button */}
            <button
              type="button"
              onClick={() => setIsDrawerOpen(true)}
              className="flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#321F1F]/80 hover:text-[#972933] transition cursor-pointer"
            >
              <svg
                width="22"
                height="14"
                viewBox="0 0 25 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 11C19.2614 11 21.5 8.76142 21.5 6C21.5 3.23858 19.2614 1 16.5 1C13.7386 1 11.5 3.23858 11.5 6C11.5 8.76142 13.7386 11 16.5 11Z"
                  stroke="#321F1F"
                  strokeOpacity="0.8"
                  strokeWidth="1.5"
                />
                <path
                  d="M20.5 10L24.377 13.877"
                  stroke="#321F1F"
                  strokeOpacity="0.8"
                  strokeWidth="1.5"
                />
                <path
                  d="M0 4H8"
                  stroke="#321F1F"
                  strokeOpacity="0.8"
                  strokeWidth="1.5"
                />
                <path
                  d="M0 14H15"
                  stroke="#321F1F"
                  strokeOpacity="0.8"
                  strokeWidth="1.5"
                />
                <path
                  d="M0 9H8"
                  stroke="#321F1F"
                  strokeOpacity="0.8"
                  strokeWidth="1.5"
                />
              </svg>
              <span>Explore</span>
            </button>

            {/* Sign In */}
            <a
              href="#register-team"
              className="hidden sm:inline-block text-xs sm:text-sm font-medium text-[#321F1F]/80 hover:text-[#972933] transition"
            >
              Sign In
            </a>

            {/* Subscribe CTA */}
            <a
              href="https://the-ken.com/pricing/"
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-1.5 sm:px-4 py-2 bg-[#972933] hover:bg-[#74001c] text-white text-xs sm:text-sm font-semibold rounded transition shadow-xs"
            >
              Subscribe
            </a>
          </div>
        </div>
      </header>

      {/* Explore Drawer */}
      <ExploreDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </>
  );
}
