"use client";

import React, { useRef } from "react";
import { Trophy, GraduationCap, Briefcase } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * §0.3 Flag: "Our Incentives" copy (₹20L prize pool, alumni mentorship, VC Cohort)
 * is pending final verification from the organizing committee before public launch.
 */
export const incentivesCopyVerified = false;

const INCENTIVES = [
  {
    id: "cash-prizes",
    icon: <Trophy className="w-6 h-6 text-[#a26028]" />,
    label: "01",
    eyebrow: "Prize Pool",
    title: "Cash Prizes Worth ₹20 Lakh",
    description:
      "The top-performing teams will share a cash prize pool of ₹20 lakh, awarded across both tracks. These rewards acknowledge your innovation, validate your efforts, and provide early support to help you take the next step in your entrepreneurial journey.",
  },
  {
    id: "alumni-guidance",
    icon: <GraduationCap className="w-6 h-6 text-[#a26028]" />,
    label: "02",
    eyebrow: "Mentorship",
    title: "Guidance from Distinguished Alumni",
    description:
      "Top teams gain exclusive mentorship from IIT Kharagpur's accomplished alumni — entrepreneurs, industry leaders, and domain experts who have built, scaled, and transformed ideas into impactful ventures. Personalised sessions on strategy, product, GTM, and fundraising.",
  },
  {
    id: "vcs-cohort",
    icon: <Briefcase className="w-6 h-6 text-[#a26028]" />,
    label: "03",
    eyebrow: "Investment",
    title: "Chance to Join the VCs Cohort",
    description:
      "Outstanding teams will be considered for the exclusive VCs Cohort — a curated community of high-potential ventures. This opens doors to leading venture capitalists, angel investors, and incubation partners for funding opportunities and strategic partnerships.",
  },
];

export default function IncentivesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const card0 = useRef<HTMLDivElement>(null);
  const card1 = useRef<HTMLDivElement>(null);
  const card2 = useRef<HTMLDivElement>(null);
  const cardRefs = [card0, card1, card2];

  useGSAP(() => {
    // Header entrance animation
    if (headerRef.current) {
      gsap.from(headerRef.current, {
        scrollTrigger: { 
          trigger: headerRef.current, 
          start: "top 88%",
          toggleActions: "play none none none"
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    }

    // Watermark dynamic parallax scroll & subtle tilt
    if (watermarkRef.current) {
      gsap.to(watermarkRef.current, {
        y: 130,
        rotate: 3,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    }

    // Left vertical editorial line drawing down on scroll
    if (lineRef.current) {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0, transformOrigin: "top" },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 85%",
            scrub: 0.8,
          },
        }
      );
    }

    // Staggered card entrance with slide-up + fade
    cardRefs.forEach((ref, i) => {
      if (ref.current) {
        gsap.from(ref.current, {
          scrollTrigger: { 
            trigger: ref.current, 
            start: "top 90%",
            toggleActions: "play none none none"
          },
          y: 45,
          opacity: 0,
          duration: 0.7,
          delay: i * 0.12,
          ease: "power3.out",
        });
      }
    });
  }, { scope: sectionRef });

  return (
    <section
      id="incentives"
      ref={sectionRef}
      aria-label="Our Incentives"
      className="relative bg-[#f7ecd0] py-14 sm:py-20 lg:py-28 px-3.5 sm:px-6 lg:px-8 border-b border-[#321F1F]/15 overflow-hidden"
    >
      {/* Giant background watermark with dynamic scroll parallax */}
      <div
        ref={watermarkRef}
        className="pointer-events-none select-none absolute -right-8 top-0 bottom-0 flex items-center z-0 will-change-transform opacity-80"
        aria-hidden="true"
      >
        <span className="text-[240px] sm:text-[320px] lg:text-[420px] font-serif font-black text-[#972933]/[0.045] leading-none tracking-tighter drop-shadow-sm select-none">
          ₹
        </span>
      </div>

      {/* Left vertical rule accent drawing down smoothly */}
      <div 
        ref={lineRef}
        className="hidden lg:block absolute left-12 top-16 bottom-16 w-[1.5px] bg-gradient-to-b from-[#972933]/40 via-[#972933]/25 to-transparent z-0 pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative z-10 max-w-[1100px] mx-auto">

        {/* Header */}
        <div ref={headerRef} className="mb-8 sm:mb-16 lg:mb-20 lg:pl-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#972933] animate-pulse" />
            <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-[0.28em] text-[#972933]">
              Startup Bootcamp 9.0
            </span>
          </div>
          <h2 className="font-display font-black text-3xl min-[380px]:text-4xl sm:text-5xl lg:text-[64px] text-[#111111] tracking-wide leading-[1.05] sm:leading-none mb-3 sm:mb-4 uppercase">
            Our Incentives
          </h2>
          <p className="max-w-[560px] text-sm sm:text-lg text-[#321F1F]/75 leading-relaxed font-serif">
            More than a competition — a launchpad for ideas that solve real problems and create real impact.
          </p>
          {!incentivesCopyVerified && (
            <span className="inline-flex items-center gap-1.5 mt-3 sm:mt-4 text-[10px] font-mono uppercase px-2.5 py-1 rounded-none bg-[#321F1F]/5 text-[#321F1F]/60 border border-[#321F1F]/10 tracking-wider hover:bg-[#321F1F]/10 transition-colors">
              <span className="w-1.5 h-1.5 bg-[#a26028]" />
              Figures subject to final confirmation
            </span>
          )}
        </div>

        {/* Cards — editorial horizontal layout with rich hover & shine */}
        <div className="space-y-3.5 sm:space-y-5 lg:pl-12">
          {INCENTIVES.map((item, i) => (
            <div
              key={item.id}
              ref={cardRefs[i]}
              className="group relative bg-gradient-to-br from-[#FFFDF9] via-[#FAF5EB] to-[#F5EEDF] border-2 border-[#111111]/80 rounded-none p-4 sm:p-7 lg:p-8 hover:border-[#972933] hover:shadow-[0_16px_40px_rgba(151,41,51,0.12)] hover:-translate-y-1 transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.04)] overflow-hidden cursor-default"
            >
              {/* Animated light sweep / foil shimmer on hover */}
              <div 
                className="pointer-events-none absolute -inset-y-10 -inset-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out z-20" 
                aria-hidden="true"
              />

              {/* Inner hairline border */}
              <div className="absolute inset-[3px] border border-[#111111]/15 rounded-none pointer-events-none group-hover:border-[#972933]/30 transition-colors duration-300" />
              
              {/* Top strip accent that illuminates on hover */}
              <div className="absolute top-0 left-6 sm:left-8 right-6 sm:right-8 h-[2px] bg-gradient-to-r from-transparent via-[#972933]/25 to-transparent group-hover:via-[#972933]/70 transition-all duration-300" />

              <div className="relative z-10 flex items-start gap-3.5 sm:gap-8">
                {/* Number + icon stack with animated micro-bounce on hover */}
                <div className="shrink-0 flex flex-col items-center gap-1.5 sm:gap-3 pt-0.5 sm:pt-1">
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-none bg-[#F2E8D5] border border-[#a26028]/25 flex items-center justify-center group-hover:bg-[#EAE0C8] group-hover:border-[#972933]/50 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 shadow-inner">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                  </div>
                  <span className="font-mono text-[9px] sm:text-[10px] font-bold text-[#321F1F]/40 tracking-wider group-hover:text-[#972933] transition-colors">
                    {item.label}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 sm:mb-2">
                    <span className="text-[9.5px] sm:text-[10px] font-mono font-bold uppercase tracking-[0.22em] text-[#972933]">
                      {item.eyebrow}
                    </span>
                    {item.id === "cash-prizes" && (
                      <span className="relative flex h-2 w-2 ml-1">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#972933] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#972933]" />
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif text-base min-[380px]:text-lg sm:text-2xl lg:text-[26px] font-bold text-[#111111] leading-snug mb-1.5 sm:mb-3 group-hover:text-[#972933] transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-[15px] leading-relaxed text-[#321F1F]/80 group-hover:text-[#321F1F] transition-colors duration-200">
                    {item.description}
                  </p>
                </div>

                {/* Right decorative large number with reactive hover scale & color shift */}
                <div
                  className="hidden lg:block shrink-0 font-serif font-black text-[72px] leading-none text-[#321F1F]/[0.05] group-hover:text-[#972933]/15 group-hover:scale-110 group-hover:-translate-x-1 transition-all duration-500 select-none self-center"
                  aria-hidden="true"
                >
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
