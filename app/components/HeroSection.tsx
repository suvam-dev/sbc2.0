"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const leftCollageRef = useRef<HTMLDivElement>(null);
  const rightCollageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // Entrance staggered animation
      gsap.from(".hero-anim-item", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2
      });

      // Parallax for side collages
      gsap.to(leftCollageRef.current, {
        y: 100,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      gsap.to(rightCollageRef.current, {
        y: 150,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    });
  }, { scope: containerRef });

  const phases = [
    { no: "Phase I", name: "Registration", when: "Open now", noColor: "#9d0026", whenColor: "#838b61" },
    { no: "Phase II", name: "Mentorship Round 1", when: "From 31 Aug", noColor: "#9d0026", whenColor: "#838b61" },
    { no: "Phase III", name: "Mentorship Round 2", when: "Mid September", noColor: "#9d0026", whenColor: "#838b61" },
    { no: "Phase IV", name: "Grand Finale", when: "Pitch Live to VCs", noColor: "#9d0026", whenColor: "#838b61" },
  ];

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-[#f7ecd0] pt-26 pb-10 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-16">
      {/* Left Side Retro Poster Collage Banner - Prominently Visible with Edge Fades */}
      <div
        ref={leftCollageRef}
        className="pointer-events-none absolute -left-20 sm:-left-28 md:-left-40 lg:-left-48 -top-12 bottom-0 w-24 sm:w-52 md:w-64 lg:w-80 overflow-hidden opacity-15 sm:opacity-35 md:opacity-40 mix-blend-multiply select-none z-0"
        aria-hidden="true"
      >
        <img
          src="/images/hero-side-collage-left.png"
          alt=""
          className="w-full h-full object-cover object-left"
        />
        {/* Soft edge dissolves to guarantee perfect text legibility */}
        <div className="absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#f7ecd0] via-[#f7ecd0]/85 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-16 sm:h-24 bg-gradient-to-b from-[#f7ecd0] to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-16 sm:h-24 bg-gradient-to-t from-[#f7ecd0] to-transparent pointer-events-none" />
      </div>

      {/* Right Side Retro Poster Collage Banner - Prominently Visible with Edge Fades */}
      <div
        ref={rightCollageRef}
        className="pointer-events-none absolute -right-20 sm:-right-28 md:-right-40 lg:-right-48 -top-16 bottom-0 w-24 sm:w-52 md:w-64 lg:w-80 overflow-hidden opacity-15 sm:opacity-35 md:opacity-40 mix-blend-multiply select-none z-0"
        aria-hidden="true"
      >
        <img
          src="/images/hero-side-collage-right.png"
          alt=""
          className="w-full h-full object-cover object-right"
        />
        {/* Soft edge dissolves to guarantee perfect text legibility */}
        <div className="absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#f7ecd0] via-[#f7ecd0]/85 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-16 sm:h-24 bg-gradient-to-b from-[#f7ecd0] to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-16 sm:h-24 bg-gradient-to-t from-[#f7ecd0] to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Infinite Phase Dateline Marquee */}
        <div className="w-full overflow-hidden mb-5 sm:mb-8 py-1.5 border-y border-[#321F1F]/10 hero-anim-item">
          <div className="animate-phase-marquee flex items-center gap-6 text-xs sm:text-sm font-medium uppercase tracking-wider text-[#321F1F]">
            {[0, 1, 2].map((setIdx) => (
              <div key={`set-${setIdx}`} className="flex items-center gap-4 sm:gap-6 shrink-0">
                {phases.map((phase, idx) => (
                  <React.Fragment key={`p-${setIdx}-${idx}`}>
                    <span className="inline-flex items-baseline gap-1.5 whitespace-nowrap">
                      <span className="font-bold text-[#9d0026]">{phase.no}</span>
                      <span className="text-[#321F1F]/80">{phase.name}</span>
                      <span className="text-[#838b61] font-semibold">{phase.when}</span>
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#50427b] shrink-0 inline-block" />
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* 3D Arched Hero Title Art */}
        <div className="mb-4 sm:mb-6 flex flex-col items-center select-none hero-anim-item">
          <img
            src="/images/hero-startup-bootcamp-title.png"
            alt="What is Startup Bootcamp?"
            className="w-[260px] min-[380px]:w-[300px] sm:w-[520px] lg:w-[680px] max-w-[90vw] h-auto object-contain mx-auto drop-shadow-md hover:scale-[1.02] transition-transform duration-300"
          />
          <h1 className="sr-only">What is Startup Bootcamp?</h1>
          <p className="mt-2.5 sm:mt-3 text-[11px] min-[380px]:text-xs sm:text-sm font-semibold uppercase tracking-wider sm:tracking-widest text-[#321F1F]/75 font-serif max-w-sm sm:max-w-none">
            Entrepreneurship Cell, IIT Kharagpur &bull; 9th Edition
          </p>
        </div>

        {/* Primary Mission Statement */}
        <div className="max-w-[820px] mx-auto text-[13.5px] min-[380px]:text-[14.5px] sm:text-lg lg:text-xl font-serif leading-relaxed text-[#321F1F] mb-6 sm:mb-8 hero-anim-item px-3.5 sm:px-6">
          <p>
            Startup Boot Camp (SBC) is the <strong>Entrepreneurship Cell, IIT Kharagpur&rsquo;s</strong> mentorship
            programme for early-stage student ventures, now in its ninth edition. Selected startups
            are paired with founders, alumni, and investors for two rounds of one-on-one mentorship
            on business model, strategy, and pitch, and the strongest ten pitch live on campus to
            venture capitalists.
          </p>
        </div>

        {/* Register CTA Button */}
        <div className="mt-4 mb-6 hero-anim-item">
          <a
            href="#register"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 min-h-[48px] bg-[#972933] hover:bg-[#74001c] text-white font-bold text-xs sm:text-sm tracking-wider uppercase rounded-none transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.03] active:scale-95"
          >
            <span>Register Your Team</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
