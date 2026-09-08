"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Clock } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TheCase() {
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
      id="case"
      ref={containerRef}
      className="relative bg-[#f7ecd0] py-14 sm:py-20 lg:py-24 border-b border-[#321F1F]/15 overflow-hidden"
    >
      {/* Background Graphic Art: KGP Tower & Gears */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[52%] xl:w-[50%] pointer-events-none select-none z-0 overflow-hidden" aria-hidden="true">
        <img
          ref={bgArtRef}
          src="/images/case-bg-art.jpg"
          alt="Vintage architectural illustration of IIT Kharagpur tower with gears"
          className="w-full h-[120%] -top-[10%] absolute inset-x-0 object-cover object-left pointer-events-none mix-blend-multiply filter contrast-[1.04]"
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
        className="hidden lg:flex flex-col items-start gap-1 absolute left-6 sm:left-10 lg:left-12 top-48 sm:top-56 text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.25em] text-[#321F1F]/45 select-none z-10 pointer-events-none"
        aria-hidden="true"
      >
        <span>PROBLEM</span>
        <span>SPACE</span>
        <span>TRACKS</span>
        <span className="w-5 h-[1.5px] bg-[#972933]/40 mt-1" />
      </div>

      {/* Giant Decorative Watermark */}
      <div
        className="pointer-events-none absolute -bottom-6 sm:-bottom-10 right-4 sm:right-10 text-[100px] sm:text-[150px] lg:text-[180px] font-serif font-light text-[#972933]/[0.05] select-none leading-none z-0 tracking-tighter"
        aria-hidden="true"
      >
        CASE
      </div>

      <div className="relative z-10 max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="max-w-[580px] mb-8 sm:mb-12 pl-0 lg:pl-10">
          <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#972933] block mb-1.5">
            Startup Bootcamp 9.0
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-[56px] text-[#111111] tracking-wide leading-none mb-4 uppercase">
            The Case
          </h2>
          <p className="text-sm sm:text-base lg:text-[17px] text-[#321F1F]/75 font-serif leading-relaxed">
            Case Studies, Tracks & Problem Spaces
          </p>
        </div>

        {/* Content Card with Rich Editorial Texture & High Contrast */}
        <div
          ref={cardRef}
          className="max-w-[880px] bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EB] to-[#F5EEDF] rounded-none border-2 border-[#111111]/85 p-6 sm:p-8 lg:p-9 shadow-[0_22px_50px_-10px_rgba(50,31,31,0.18),0_10px_20px_-5px_rgba(50,31,31,0.08),0_1px_3px_rgba(50,31,31,0.12)] relative z-10 lg:ml-10 overflow-hidden"
        >
          {/* Subtle Archival Stipple Paper Texture Overlay */}
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(#321F1F_0.75px,transparent_0.75px)] [background-size:16px_16px] opacity-[0.035]"
            aria-hidden="true"
          />

          {/* Inner Certificate Double-Hairline Frame Accent */}
          <div
            className="pointer-events-none absolute inset-2 sm:inset-2.5 rounded-none border border-[#972933]/25"
            aria-hidden="true"
          />

          {/* Corner Registration Crosshair Marks */}
          <div className="pointer-events-none absolute top-3.5 left-3.5 w-2.5 h-2.5 border-t-2 border-l-2 border-[#972933]/60" aria-hidden="true" />
          <div className="pointer-events-none absolute top-3.5 right-3.5 w-2.5 h-2.5 border-t-2 border-r-2 border-[#972933]/60" aria-hidden="true" />
          <div className="pointer-events-none absolute bottom-3.5 left-3.5 w-2.5 h-2.5 border-b-2 border-l-2 border-[#972933]/60" aria-hidden="true" />
          <div className="pointer-events-none absolute bottom-3.5 right-3.5 w-2.5 h-2.5 border-b-2 border-r-2 border-[#972933]/60" aria-hidden="true" />

          {/* Archival Dispatch Header Strip */}
          <div className="relative z-10 flex items-center justify-between gap-4 border-b border-[#321F1F]/12 pb-3.5 mb-5 text-[10px] font-mono uppercase tracking-[0.2em] text-[#321F1F]/60">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#972933]" />
              <span className="font-semibold text-[#321F1F]/70">DISPATCH REF // SBC-9.0-CASE</span>
            </div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-none bg-[#972933]/10 text-[#972933] font-bold text-[9.5px] tracking-widest border border-[#972933]/25">
              <span className="w-1.5 h-1.5 bg-[#972933] animate-pulse" />
              STATUS: CASE FORMULATION
            </span>
          </div>

          <div className="relative z-10 flex items-center gap-3.5 text-[#972933] mb-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-none bg-[#972933]/10 border border-[#972933]/25 flex items-center justify-center text-[#972933] shrink-0 shadow-2xs">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 className="font-serif font-black text-xl sm:text-2xl text-[#1a1010] tracking-tight leading-snug">
                Problem Statements & Case Guide Announcement
              </h3>
              <span className="text-[11px] font-mono text-[#972933] font-bold tracking-wider uppercase">
                (Announcement Scheduled • Phase I Track)
              </span>
            </div>
          </div>

          <p className="relative z-10 text-sm sm:text-[15px] leading-relaxed text-[#321F1F]/85 mb-5 font-serif">
            Detailed case problems, tracks (Product Strategy & Technical Builder), and industry problem statements for <strong className="font-semibold text-[#1a1010]">Startup Bootcamp 9.0</strong> are currently being finalized with partner companies and mentors.
          </p>

          <div className="relative z-10 p-5 rounded-none bg-[#F4EBD6]/70 backdrop-blur-xs border border-[#321F1F]/15 text-xs sm:text-[13px] text-[#321F1F]/80 space-y-2.5 mb-7 shadow-inner">
            <p className="font-bold text-[#1a1010] font-serif text-sm">What to expect:</p>
            <p>&bull; 20+ verified problem statements crowdsourced from real industry and consumer pain points.</p>
            <p>&bull; Dedicated tracks for no-code product strategists and hands-on technical builders.</p>
            <p>&bull; Direct access to API rails and sandboxes from partner companies.</p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
            <Link
              href="/#register"
              className="inline-flex items-center justify-center gap-2.5 bg-[#4E0C16] hover:bg-[#38080F] text-white text-xs sm:text-[13px] font-semibold px-6 py-3.5 rounded-none shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all w-full sm:w-auto uppercase tracking-wider"
            >
              <span>Register Ahead of Case Release</span>
              <span className="text-sm font-light">→</span>
            </Link>

            <div className="flex items-center gap-3.5 self-center sm:self-auto">
              <span className="hidden sm:block h-8 w-px bg-[#321F1F]/20" aria-hidden="true" />
              <div className="text-[9.5px] sm:text-[10px] font-mono uppercase tracking-[0.22em] text-[#321F1F]/60 leading-relaxed text-center sm:text-left">
                <div className="font-bold text-[#972933]">REAL PROBLEMS.</div>
                <div className="text-[#321F1F]/50">BOLDER BUILDERS.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
