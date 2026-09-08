"use client";

import React, { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Judging() {
  const containerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const bgArtRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // Parallax for Background Art
      gsap.to(bgArtRef.current, {
        y: 80,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      // Fade up header
      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });

      // Fade up card
      gsap.from(cardRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.1
      });
    });
  }, { scope: containerRef });

  return (
    <section
      id="judging"
      ref={containerRef}
      aria-label="Judging Process"
      className="relative bg-[#f7ecd0] pt-8 pb-14 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20 overflow-hidden border-b border-[#321F1F]/15"
    >
      {/* Background Graphic Art: Crimson Sun Disc & IIT Kharagpur Tower */}
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-full sm:w-[72%] lg:w-[62%] xl:w-[58%] overflow-hidden select-none z-0"
        aria-hidden="true"
      >
        <img
          ref={bgArtRef}
          src="/images/judging-bg-art.jpg"
          alt="IIT Kharagpur Main Tower Architectural Artwork"
          className="w-full h-full object-cover object-right select-none pointer-events-none -mt-10 h-[120%]"
        />
        {/* Soft edge blend overlay to seamlessly fade into background */}
        <div className="absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#f7ecd0] via-[#f7ecd0]/80 to-transparent" />
      </div>

      {/* Left Vertical Editorial Accent */}
      <div
        className="hidden lg:block absolute left-6 sm:left-10 lg:left-12 top-0 h-44 sm:h-52 w-px bg-[#972933]/25 z-10 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="hidden lg:flex flex-col items-start gap-1 absolute left-6 sm:left-10 lg:left-12 top-48 sm:top-56 text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.25em] text-[#321F1F]/45 select-none z-10 pointer-events-none"
        aria-hidden="true"
      >
        <span>FROM</span>
        <span>IDEAS</span>
        <span>TO</span>
        <span>IMPACT</span>
        <span className="w-5 h-[1.5px] bg-[#972933]/40 mt-1" />
      </div>

      {/* Right Vertical Editorial Accent */}
      <div
        className="hidden lg:flex flex-col items-start gap-1 absolute right-8 sm:right-12 top-8 sm:top-10 text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.25em] text-[#321F1F]/45 select-none z-10 pointer-events-none"
        aria-hidden="true"
      >
        <span>IDEAS</span>
        <span>PEOPLE</span>
        <span>IMPACT</span>
        <span className="w-5 h-[1.5px] bg-[#972933]/40 mt-1" />
      </div>

      {/* Giant Decorative 9.0 Watermark in Bottom Left */}
      <div
        className="pointer-events-none absolute -bottom-6 sm:bottom-2 left-4 sm:left-8 lg:left-10 text-[130px] sm:text-[170px] lg:text-[200px] font-serif font-light text-[#972933]/[0.08] select-none leading-none z-0 tracking-tighter"
        aria-hidden="true"
      >
        9.0
      </div>

      {/* Main Section Content Container */}
      <div className="relative z-10 max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline Header */}
        <div ref={headerRef} className="max-w-[580px] mb-6 sm:mb-8 lg:mb-9 pl-0 lg:pl-10">
          <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#972933] block mb-1.5">
            Startup Bootcamp 9.0
          </span>

          <h2 className="font-serif text-5xl sm:text-6xl lg:text-[70px] font-black text-[#111111] tracking-tight leading-none mb-3">
            Judging
          </h2>

          <p className="text-sm sm:text-base lg:text-[17px] text-[#321F1F]/75 font-serif leading-relaxed">
            A fair, rigorous and founder-friendly evaluation process designed with E-Cell IIT
            Kharagpur&rsquo;s advisory board.
          </p>
        </div>

        {/* Section 0.2: Content Pending Placeholder Block */}
        {/* <!-- CONTENT PENDING --> */}
        {/* Elevated Process Card matching Mockup */}
        <div ref={cardRef} className="max-w-[880px] bg-[#f7ecd0] rounded-2xl sm:rounded-3xl border border-[#321F1F]/10 p-6 sm:p-8 lg:p-9 shadow-[0_15px_40px_rgba(50,31,31,0.06)] relative z-10 lg:ml-10">
          {/* Card Top Row */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5">
            <div className="max-w-[560px]">
              <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#972933] block mb-1">
                Our Process
              </span>
              <h3 className="font-serif text-2xl sm:text-[28px] font-bold text-[#111111] tracking-tight leading-snug">
                Evaluation Framework & Jury Panel
              </h3>
              <p className="text-xs sm:text-[13.5px] text-[#321F1F]/70 mt-1.5 leading-relaxed">
                The formal evaluation criteria and jury panel for Startup Bootcamp 9.0 are being
                finalized with E-Cell IIT Kharagpur&rsquo;s advisory board.
              </p>
            </div>

            {/* Right Stacked Tagline with Divider */}
            <div className="hidden sm:flex items-start gap-4 shrink-0 pt-1">
              <span className="h-11 w-px bg-[#321F1F]/15" aria-hidden="true" />
              <div className="text-[9.5px] font-mono uppercase tracking-[0.25em] text-[#321F1F]/50 leading-relaxed">
                <div>REAL</div>
                <div>PROBLEMS.</div>
                <div>BOLDER</div>
                <div>BUILDERS.</div>
              </div>
            </div>
          </div>

          {/* 2 Round Sub-Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 my-5 sm:my-6">
            {/* Round 1 Card */}
            <div className="bg-[#FAF7F2] rounded-xl sm:rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 border border-[#321F1F]/5 hover:border-[#972933]/25 transition-colors">
              <div className="w-10 h-10 rounded-full bg-[#EFE6E2] text-[#222222] font-serif font-bold text-base sm:text-lg flex items-center justify-center shrink-0 shadow-2xs">
                1
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#972933] block">
                  Round 1
                </span>
                <h4 className="font-serif font-bold text-[15px] sm:text-base text-[#111111] leading-snug">
                  Initial Screening
                </h4>
                <p className="text-xs sm:text-[12.5px] text-[#321F1F]/75 leading-relaxed">
                  Clarity of problem statement, unique consumer or business insight, and initial
                  market validation.
                </p>
              </div>
            </div>

            {/* Round 2 Card */}
            <div className="bg-[#FAF7F2] rounded-xl sm:rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 border border-[#321F1F]/5 hover:border-[#972933]/25 transition-colors">
              <div className="w-10 h-10 rounded-full bg-[#EFE6E2] text-[#222222] font-serif font-bold text-base sm:text-lg flex items-center justify-center shrink-0 shadow-2xs">
                2
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#972933] block">
                  Round 2
                </span>
                <h4 className="font-serif font-bold text-[15px] sm:text-base text-[#111111] leading-snug">
                  Mentorship & Pitch
                </h4>
                <p className="text-xs sm:text-[12.5px] text-[#321F1F]/75 leading-relaxed">
                  Refinement across business model, unit economics, go-to-market plan, and pitch
                  execution before investors.
                </p>
              </div>
            </div>
          </div>

          {/* Card Bottom Row: CTA Button + Divider + Motto */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <Link
              href="/#register"
              className="inline-flex items-center justify-center gap-2.5 bg-[#4E0C16] hover:bg-[#3B0910] text-white text-xs sm:text-[13px] font-medium px-5 sm:px-6 py-3 rounded-lg shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto"
            >
              <span>Submit your team&rsquo;s pitch deck</span>
              <span className="text-sm font-light">→</span>
            </Link>

            <div className="flex items-center gap-3.5 self-center sm:self-auto">
              <span className="hidden sm:block h-7 w-px bg-[#321F1F]/15" aria-hidden="true" />
              <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.2em] text-[#321F1F]/50 leading-relaxed text-center sm:text-left">
                <div>IDEAS TODAY.</div>
                <div>IMPACT TOMORROW.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


