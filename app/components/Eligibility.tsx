"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Clock, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Eligibility() {
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
      id="eligibility"
      ref={containerRef}
      className="relative bg-[#f7ecd0] py-14 sm:py-20 lg:py-24 overflow-hidden border-b border-[#321F1F]/15"
    >
      {/* Left Vertical Editorial Accent */}
      <div
        className="hidden lg:flex flex-col items-start gap-1 absolute left-6 sm:left-10 lg:left-12 top-48 sm:top-56 text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.25em] text-[#321F1F]/45 select-none z-10 pointer-events-none"
        aria-hidden="true"
      >
        <span>RULES</span>
        <span>GUIDELINES</span>
        <span>CRITERIA</span>
        <span className="w-5 h-[1.5px] bg-[#972933]/40 mt-1" />
      </div>

      {/* Background Graphic Art: Academic Columns & Magnifying Glass */}
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-full sm:w-[72%] lg:w-[62%] xl:w-[50%] overflow-hidden select-none z-0 "
        aria-hidden="true"
      >
        <img
          ref={bgArtRef}
          src="/images/eligibility-bg.jpg"
          alt="Vintage editorial illustration of a magnifying glass inspecting an academic rulebook"
          className="w-full h-full object-cover object-right select-none pointer-events-none -mt-10 h-[120%] mix-blend-multiply"
        />
        {/* Soft edge blend overlay to seamlessly fade into background */}
        <div className="absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#f7ecd0] via-[#f7ecd0]/90 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-[#f7ecd0] via-transparent to-transparent" />
      </div>

      {/* Giant Decorative Watermark */}
      <div
        className="pointer-events-none absolute -bottom-6 sm:-bottom-10 right-4 sm:right-10 text-[80px] sm:text-[130px] lg:text-[160px] font-serif font-light text-[#972933]/[0.05] select-none leading-none z-0 tracking-tighter"
        aria-hidden="true"
      >
        ELIGIBILITY
      </div>

      <div className="relative z-10 max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="max-w-[580px] mb-8 sm:mb-12 pl-0 lg:pl-10">
          <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#972933] block mb-1.5">
            Who Can Participate
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[60px] font-black text-[#111111] tracking-tight leading-none mb-4">
            Eligibility
          </h2>
          <p className="text-sm sm:text-base lg:text-[17px] text-[#321F1F]/75 font-serif leading-relaxed">
            Criteria for Participating Ventures & Student Teams
          </p>
        </div>

        {/* Content Card with Rich Editorial Texture & High Contrast */}
        <div
          ref={cardRef}
          className="max-w-[880px] bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EB] to-[#F5EEDF] rounded-2xl sm:rounded-3xl border border-[#321F1F]/20 p-6 sm:p-8 lg:p-9 shadow-[0_22px_50px_-10px_rgba(50,31,31,0.18),0_10px_20px_-5px_rgba(50,31,31,0.08),0_1px_3px_rgba(50,31,31,0.12)] relative z-10 lg:ml-10 overflow-hidden"
        >
          {/* Subtle Archival Stipple Paper Texture Overlay */}
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(#321F1F_0.75px,transparent_0.75px)] [background-size:16px_16px] opacity-[0.035]"
            aria-hidden="true"
          />

          {/* Inner Certificate Double-Hairline Frame Accent */}
          <div
            className="pointer-events-none absolute inset-2 sm:inset-2.5 rounded-[14px] sm:rounded-[22px] border border-[#972933]/15"
            aria-hidden="true"
          />

          {/* Corner Registration Crosshair Marks */}
          <div className="pointer-events-none absolute top-3.5 left-3.5 w-2 h-2 border-t border-l border-[#972933]/40" aria-hidden="true" />
          <div className="pointer-events-none absolute top-3.5 right-3.5 w-2 h-2 border-t border-r border-[#972933]/40" aria-hidden="true" />
          <div className="pointer-events-none absolute bottom-3.5 left-3.5 w-2 h-2 border-b border-l border-[#972933]/40" aria-hidden="true" />
          <div className="pointer-events-none absolute bottom-3.5 right-3.5 w-2 h-2 border-b border-r border-[#972933]/40" aria-hidden="true" />

          {/* Archival Dispatch Header Strip */}
          <div className="relative z-10 flex items-center justify-between gap-4 border-b border-[#321F1F]/12 pb-3.5 mb-5 text-[10px] font-mono uppercase tracking-[0.2em] text-[#321F1F]/60">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#972933]" />
              <span className="font-semibold text-[#321F1F]/70">DISPATCH REF // SBC-9.0-CRIT</span>
            </div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#972933]/10 text-[#972933] font-bold text-[9.5px] tracking-widest border border-[#972933]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#972933] animate-pulse" />
              STATUS: UNDER REVIEW
            </span>
          </div>

          {/* Title & Clock Icon */}
          <div className="relative z-10 flex items-center gap-3.5 text-[#972933] mb-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#972933]/10 border border-[#972933]/25 flex items-center justify-center text-[#972933] shrink-0 shadow-2xs">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 className="font-serif font-black text-xl sm:text-2xl text-[#1a1010] tracking-tight leading-snug">
                Official Eligibility Criteria
              </h3>
              <span className="text-[11px] font-mono text-[#972933] font-bold tracking-wider uppercase">
                (Updating Soon • Guidelines in Committee)
              </span>
            </div>
          </div>

          <p className="relative z-10 text-sm sm:text-[15px] leading-relaxed text-[#321F1F]/85 mb-5 font-serif">
            Detailed eligibility guidelines for <strong className="font-semibold text-[#1a1010]">Startup Bootcamp 9.0</strong> are undergoing final review by the E-Cell IIT Kharagpur organizing committee. Preview verified parameters below:
          </p>

          {/* Inner Checklist Container with Rich Warm Parchment & High Contrast */}
          <div className="relative z-10 p-5 rounded-xl bg-[#F4EBD6]/70 backdrop-blur-xs border border-[#321F1F]/15 space-y-3.5 mb-7 shadow-inner">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-[#972933] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-white stroke-[2.5]" />
              </div>
              <span className="text-xs sm:text-[13.5px] text-[#221616] font-medium leading-relaxed">
                Open to student founders and early-stage ventures from colleges across India.
              </span>
            </div>
            <div className="h-px w-full bg-[#321F1F]/10" aria-hidden="true" />
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-[#972933] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-white stroke-[2.5]" />
              </div>
              <span className="text-xs sm:text-[13.5px] text-[#221616] font-medium leading-relaxed">
                Teams may consist of 1 to 4 members. Interdisciplinary teams are encouraged.
              </span>
            </div>
            <div className="h-px w-full bg-[#321F1F]/10" aria-hidden="true" />
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-[#972933] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-white stroke-[2.5]" />
              </div>
              <span className="text-xs sm:text-[13.5px] text-[#221616] font-medium leading-relaxed">
                Both idea-stage concepts and operational prototypes with traction are eligible.
              </span>
            </div>
          </div>

          {/* Card Footer Actions */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
            <Link
              href="/#register"
              className="inline-flex items-center justify-center gap-2.5 bg-[#4E0C16] hover:bg-[#38080F] text-white text-xs sm:text-[13px] font-semibold px-6 py-3.5 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all w-full sm:w-auto uppercase tracking-wider"
            >
              <span>Verify your team</span>
              <span className="text-sm font-light">→</span>
            </Link>
            
            <div className="flex items-center gap-3.5 self-center sm:self-auto">
              <span className="hidden sm:block h-8 w-px bg-[#321F1F]/20" aria-hidden="true" />
              <div className="text-[9.5px] sm:text-[10px] font-mono uppercase tracking-[0.22em] text-[#321F1F]/60 leading-relaxed text-center sm:text-left">
                <div className="font-bold text-[#972933]">FOUNDERS FIRST.</div>
                <div className="text-[#321F1F]/50">NO EXCUSES.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
