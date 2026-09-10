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
          className="w-full h-[120%] -top-[10%] absolute inset-x-0 object-cover object-right select-none pointer-events-none mix-blend-multiply filter contrast-[1.04]"
        />
        {/* Seamless Soft Edge Blend Overlays matching Past Mentors */}
        {/* 1. Left Edge Blend - wide gradual fade */}
        <div className="absolute inset-y-0 left-0 w-36 sm:w-56 lg:w-72 bg-gradient-to-r from-[#f7ecd0] via-[#f7ecd0]/85 to-transparent z-1" />
        {/* 2. Top Edge Blend - dissolves top crop */}
        <div className="absolute inset-x-0 top-0 h-24 sm:h-36 bg-gradient-to-b from-[#f7ecd0] via-[#f7ecd0]/75 to-transparent z-1" />
        {/* 3. Bottom Edge Blend - dissolves bottom crop */}
        <div className="absolute inset-x-0 bottom-0 h-28 sm:h-44 bg-gradient-to-t from-[#f7ecd0] via-[#f7ecd0]/80 to-transparent z-1" />
        {/* 4. Right Edge Blend */}
        <div className="absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#f7ecd0] to-transparent z-1" />
        {/* 5. Subtle radial atmospheric vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_65%_45%,transparent_40%,#f7ecd0_92%)] pointer-events-none z-1" />
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
      <div className="relative z-10 max-w-[1220px] mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Headline Header */}
        <div ref={headerRef} className="max-w-[580px] mb-6 sm:mb-8 lg:mb-9 pl-0 lg:pl-10">
          <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#972933] block mb-1.5">
            Startup Bootcamp 9.0
          </span>

          <h2 className="font-display font-black text-3xl min-[380px]:text-4xl sm:text-5xl lg:text-[60px] text-[#111111] tracking-wide leading-none mb-3 uppercase">
            Judging
          </h2>

          <p className="text-sm sm:text-base lg:text-[17px] text-[#321F1F]/75 font-serif leading-relaxed">
            A fair, rigorous and founder-friendly evaluation process designed with E-Cell IIT
            Kharagpur&rsquo;s advisory board.
          </p>
        </div>

        {/* Section 0.2: Content Pending Placeholder Block */}
        {/* <!-- CONTENT PENDING --> */}
        {/* Elevated Process Card with Rich Texture & High Contrast */}
        <div
          ref={cardRef}
          className="max-w-[880px] bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EB] to-[#F5EEDF] rounded-none border-2 border-[#111111]/85 p-4 sm:p-7 lg:p-9 shadow-[0_22px_50px_-10px_rgba(50,31,31,0.18),0_10px_20px_-5px_rgba(50,31,31,0.08),0_1px_3px_rgba(50,31,31,0.12)] relative z-10 lg:ml-10 overflow-hidden"
        >
          {/* Subtle Archival Stipple Paper Texture Overlay */}
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(#321F1F_0.75px,transparent_0.75px)] [background-size:16px_16px] opacity-[0.035]"
            aria-hidden="true"
          />

          {/* Inner Certificate Double-Hairline Frame Accent */}
          <div
            className="pointer-events-none absolute inset-1.5 sm:inset-2.5 rounded-none border border-[#972933]/25"
            aria-hidden="true"
          />

          {/* Corner Registration Crosshair Marks */}
          <div className="pointer-events-none absolute top-2.5 left-2.5 sm:top-3.5 sm:left-3.5 w-2.5 h-2.5 border-t-2 border-l-2 border-[#972933]/60" aria-hidden="true" />
          <div className="pointer-events-none absolute top-2.5 right-2.5 sm:top-3.5 sm:right-3.5 w-2.5 h-2.5 border-t-2 border-r-2 border-[#972933]/60" aria-hidden="true" />
          <div className="pointer-events-none absolute bottom-2.5 left-2.5 sm:bottom-3.5 sm:left-3.5 w-2.5 h-2.5 border-b-2 border-l-2 border-[#972933]/60" aria-hidden="true" />
          <div className="pointer-events-none absolute bottom-2.5 right-2.5 sm:bottom-3.5 sm:right-3.5 w-2.5 h-2.5 border-b-2 border-r-2 border-[#972933]/60" aria-hidden="true" />

          {/* Archival Dispatch Header Strip */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 sm:gap-4 border-b border-[#321F1F]/12 pb-3 mb-4 text-[10px] font-mono uppercase tracking-[0.2em] text-[#321F1F]/60">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#972933]" />
              <span className="font-semibold text-[#321F1F]/70">DISPATCH REF // SBC-9.0-EVAL</span>
            </div>
            <span className="inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-0.5 rounded-none bg-[#972933]/10 text-[#972933] font-bold text-[9px] sm:text-[9.5px] tracking-widest border border-[#972933]/25">
              <span className="w-1.5 h-1.5 bg-[#972933] animate-pulse" />
              STATUS: JURY FINALIZATION
            </span>
          </div>

          {/* Card Top Row */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-3 sm:pb-4">
            <div className="max-w-[560px]">
              <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#972933] block mb-1">
                Our Process
              </span>
              <h3 className="font-display font-black text-lg min-[380px]:text-xl sm:text-2xl text-[#1a1010] tracking-wide uppercase">
                Evaluation Framework & Jury Panel
              </h3>
              <p className="text-xs sm:text-[13.5px] text-[#321F1F]/80 mt-1.5 leading-relaxed font-serif">
                The formal evaluation criteria and jury panel for Startup Bootcamp 9.0 are being
                finalized with E-Cell IIT Kharagpur&rsquo;s advisory board.
              </p>
            </div>

            {/* Right Stacked Tagline with Divider */}
            <div className="hidden sm:flex items-start gap-4 shrink-0 pt-1">
              <span className="h-11 w-px bg-[#321F1F]/20" aria-hidden="true" />
              <div className="text-[9.5px] font-mono uppercase tracking-[0.25em] text-[#321F1F]/60 leading-relaxed">
                <div>REAL</div>
                <div className="font-bold text-[#972933]">PROBLEMS.</div>
                <div>BOLDER</div>
                <div className="font-bold text-[#972933]">BUILDERS.</div>
              </div>
            </div>
          </div>

          {/* 2 Round Sub-Cards with Warm Contrast */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-5 my-4 sm:my-6">
            {/* Round 1 Card */}
            <div className="bg-[#F4EBD6]/75 backdrop-blur-xs rounded-none p-3.5 sm:p-5 flex items-start gap-3 border border-[#321F1F]/15 hover:border-[#972933]/35 transition-all shadow-inner">
              <div className="w-8 h-8 rounded-none bg-[#972933] text-white font-serif font-bold text-sm flex items-center justify-center shrink-0 shadow-2xs">
                1
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#972933] block">
                  Round 1
                </span>
                <h4 className="font-serif font-bold text-sm sm:text-base text-[#1a1010] leading-snug">
                  Initial Screening
                </h4>
                <p className="text-xs sm:text-[12.5px] text-[#321F1F]/80 leading-relaxed">
                  Clarity of problem statement, unique consumer or business insight, and initial
                  market validation.
                </p>
              </div>
            </div>

            {/* Round 2 Card */}
            <div className="bg-[#F4EBD6]/75 backdrop-blur-xs rounded-none p-3.5 sm:p-5 flex items-start gap-3 border border-[#321F1F]/15 hover:border-[#972933]/35 transition-all shadow-inner">
              <div className="w-8 h-8 rounded-none bg-[#972933] text-white font-serif font-bold text-sm flex items-center justify-center shrink-0 shadow-2xs">
                2
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#972933] block">
                  Round 2
                </span>
                <h4 className="font-serif font-bold text-sm sm:text-base text-[#1a1010] leading-snug">
                  Mentorship & Pitch
                </h4>
                <p className="text-xs sm:text-[12.5px] text-[#321F1F]/80 leading-relaxed">
                  Refinement across business model, unit economics, go-to-market plan, and pitch
                  execution before investors.
                </p>
              </div>
            </div>
          </div>

          {/* Card Bottom Row: CTA Button + Divider + Motto */}
          <div className="relative z-10 pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 sm:gap-4">
            <Link
              href="/#register"
              className="inline-flex items-center justify-center gap-2.5 bg-[#4E0C16] hover:bg-[#38080F] text-white text-xs sm:text-[13px] font-semibold px-5 py-3.5 min-h-[44px] rounded-none shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all w-full sm:w-auto uppercase tracking-wider"
            >
              <span>Submit your team&rsquo;s pitch deck</span>
              <span className="text-sm font-light">→</span>
            </Link>

            <div className="flex items-center gap-3.5 self-center sm:self-auto">
              <span className="hidden sm:block h-8 w-px bg-[#321F1F]/20" aria-hidden="true" />
              <div className="text-[9.5px] sm:text-[10px] font-mono uppercase tracking-[0.22em] text-[#321F1F]/60 leading-relaxed text-center sm:text-left">
                <div className="font-bold text-[#972933]">IDEAS TODAY.</div>
                <div className="text-[#321F1F]/50">IMPACT TOMORROW.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


