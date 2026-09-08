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
          src="/images/eligibility-bg-art.jpg"
          alt="Vintage academic illustration of columns and magnifying glass"
          className="w-full h-full object-cover object-right select-none pointer-events-none -mt-10 h-[120%]"
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

        {/* Content Card */}
        <div ref={cardRef} className="max-w-[880px] bg-[#f7ecd0] rounded-2xl sm:rounded-3xl border border-[#321F1F]/10 p-6 sm:p-8 lg:p-9 shadow-[0_15px_40px_rgba(50,31,31,0.06)] relative z-10 lg:ml-10">
          <div className="flex items-center gap-3 text-[#972933] mb-4 pb-4 border-b border-[#321F1F]/10">
            <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#111111] tracking-tight">
              Official Eligibility Criteria (Updating Soon)
            </h3>
          </div>

          <p className="text-sm sm:text-[15px] leading-relaxed text-[#321F1F]/80 mb-6">
            Detailed eligibility guidelines for Startup Bootcamp 9.0 are undergoing final review by the E-Cell IIT Kharagpur organizing committee.
          </p>

          <div className="p-5 rounded-xl bg-[#FAF7F2] border border-[#321F1F]/5 space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#972933] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-[13px] text-[#321F1F]/80">Open to student founders and early-stage ventures from colleges across India.</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#972933] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-[13px] text-[#321F1F]/80">Teams may consist of 1 to 4 members. Interdisciplinary teams are encouraged.</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#972933] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-[13px] text-[#321F1F]/80">Both idea-stage concepts and operational prototypes with traction are eligible.</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <Link
              href="/#register"
              className="inline-flex items-center justify-center gap-2.5 bg-[#4E0C16] hover:bg-[#3B0910] text-white text-xs sm:text-[13px] font-medium px-5 sm:px-6 py-3 rounded-lg shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto uppercase tracking-wider"
            >
              <span>Verify your team</span>
              <span className="text-sm font-light">→</span>
            </Link>
            
            <div className="flex items-center gap-3.5 self-center sm:self-auto">
              <span className="hidden sm:block h-7 w-px bg-[#321F1F]/15" aria-hidden="true" />
              <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.2em] text-[#321F1F]/50 leading-relaxed text-center sm:text-left">
                <div>FOUNDERS FIRST.</div>
                <div>NO EXCUSES.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
