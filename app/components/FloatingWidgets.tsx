"use client";

import React, { useEffect, useState } from "react";

export default function FloatingWidgets() {
  const [showResumePill, setShowResumePill] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const registerSection = document.getElementById("register-team");
      const heroSection = document.querySelector("section");

      const heroHeight = heroSection ? heroSection.offsetHeight : 500;
      const registerTop = registerSection ? registerSection.offsetTop : 3000;

      // Show pill after scrolling past hero, but hide once inside or past register section
      if (scrollY > heroHeight && scrollY < registerTop - 200) {
        setShowResumePill(true);
      } else {
        setShowResumePill(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePillClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const regEl = document.getElementById("register-team");
    if (regEl) {
      window.scrollTo({
        top: regEl.offsetTop - 70,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Floating Rotating Sunburst Badge (Fixed Right Edge) */}
      <div
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden sm:flex items-center justify-center p-2 bg-[#1e2022] rounded-l-md shadow-lg border-l border-t border-b border-black/30 select-none pointer-events-none"
        aria-hidden="true"
      >
        <svg
          className="w-5 h-5 text-[#e5ee25] animate-spin-slow"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* 8-Point Asterisk / Sunburst Flower shape */}
          <path d="M12 0C12.5523 0 13 0.447715 13 1V23C13 23.5523 12.5523 24 12 24C11.4477 24 11 23.5523 11 23V1C11 0.447715 11.4477 0 12 0Z" />
          <path d="M0 12C0 11.4477 0.447715 11 1 11H23C23.5523 11 24 11.4477 24 12C24 12.5523 23.5523 13 23 13H1C0.447715 13 0 12.5523 0 12Z" />
          <path d="M3.51472 3.51472C3.90524 3.12419 4.53841 3.12419 4.92893 3.51472L20.4853 19.0711C20.8758 19.4616 20.8758 20.0948 20.4853 20.4853C20.0948 20.8758 19.4616 20.8758 19.0711 20.4853L3.51472 4.92893C3.12419 4.53841 3.12419 3.90524 3.51472 3.51472Z" />
          <path d="M20.4853 3.51472C20.8758 3.90524 20.8758 4.53841 20.4853 4.92893L4.92893 20.4853C4.53841 20.8758 3.90524 20.8758 3.51472 20.4853C3.12419 20.0948 3.12419 19.4616 3.51472 19.0711L19.0711 3.51472C19.4616 3.12419 20.0948 3.12419 20.4853 3.51472Z" />
        </svg>
      </div>

      {/* Floating Resume Pill Button */}
      <a
        href="#register-team"
        onClick={handlePillClick}
        className={`fixed right-4 sm:right-7 bottom-4 sm:bottom-7 z-40 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#912831] hover:bg-[#74001c] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-xl border border-black/10 transition-all duration-300 transform ${
          showResumePill
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <span>Continue registration</span>
        <svg
          className="w-3.5 h-3.5"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 2V13M8 13L13 8M8 13L3 8"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </>
  );
}
