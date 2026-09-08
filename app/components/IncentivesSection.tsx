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
  const card0 = useRef<HTMLDivElement>(null);
  const card1 = useRef<HTMLDivElement>(null);
  const card2 = useRef<HTMLDivElement>(null);
  const cardRefs = [card0, card1, card2];

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // Header fade up
      gsap.from(headerRef.current, {
        scrollTrigger: { trigger: headerRef.current, start: "top 88%" },
        y: 36,
        opacity: 0,
        duration: 0.75,
        ease: "power3.out",
      });

      // Each card individually — safe, no stagger race condition
      cardRefs.forEach((ref, i) => {
        gsap.from(ref.current, {
          scrollTrigger: { trigger: ref.current, start: "top 90%" },
          y: 40,
          opacity: 0,
          duration: 0.65,
          delay: i * 0.12,
          ease: "power3.out",
        });
      });
    });
  }, { scope: sectionRef });

  return (
    <section
      id="incentives"
      ref={sectionRef}
      aria-label="Our Incentives"
      className="relative bg-[#f7ecd0] py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#321F1F]/15 overflow-hidden"
    >
      {/* Giant background watermark */}
      <div
        className="pointer-events-none select-none absolute -right-8 top-0 bottom-0 flex items-center z-0"
        aria-hidden="true"
      >
        <span className="text-[220px] sm:text-[300px] lg:text-[380px] font-serif font-black text-[#972933]/[0.035] leading-none tracking-tighter">
          ₹
        </span>
      </div>

      {/* Left vertical rule accent */}
      <div className="hidden lg:block absolute left-12 top-16 bottom-16 w-px bg-[#972933]/20 z-0 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-[1100px] mx-auto">

        {/* Header */}
        <div ref={headerRef} className="mb-14 sm:mb-16 lg:mb-20 lg:pl-12">
          <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-[0.28em] text-[#972933] block mb-2">
            Startup Bootcamp 9.0
          </span>
          <h2 className="font-serif text-5xl sm:text-6xl lg:text-[72px] font-black text-[#111111] tracking-tight leading-none mb-4">
            Our Incentives
          </h2>
          <p className="max-w-[560px] text-base sm:text-lg text-[#321F1F]/70 leading-relaxed font-serif">
            More than a competition — a launchpad for ideas that solve real problems and create real impact.
          </p>
          {!incentivesCopyVerified && (
            <span className="inline-block mt-4 text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-[#321F1F]/5 text-[#321F1F]/50 border border-[#321F1F]/10 tracking-wider">
              Figures subject to final confirmation
            </span>
          )}
        </div>

        {/* Cards — editorial horizontal layout */}
        <div className="space-y-5 lg:pl-12">
          {INCENTIVES.map((item, i) => (
            <div
              key={item.id}
              ref={cardRefs[i]}
              className="group relative bg-[#f7ecd0] border border-[#321F1F]/12 rounded-2xl p-6 sm:p-8 hover:border-[#972933]/30 hover:shadow-[0_8px_32px_rgba(151,41,51,0.07)] transition-all duration-300"
            >
              {/* Top strip accent */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#972933]/20 to-transparent" />

              <div className="flex items-start gap-6 sm:gap-8">
                {/* Number + icon stack */}
                <div className="shrink-0 flex flex-col items-center gap-3 pt-1">
                  <div className="w-10 h-10 rounded-xl bg-[#f2e4c8] border border-[#a26028]/20 flex items-center justify-center group-hover:bg-[#ead9b5] transition-colors">
                    {item.icon}
                  </div>
                  <span className="font-mono text-[10px] font-bold text-[#321F1F]/30 tracking-wider">
                    {item.label}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4 mb-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-[0.22em] text-[#972933]">
                      {item.eyebrow}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl lg:text-[26px] font-bold text-[#111111] leading-snug mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-[15px] leading-relaxed text-[#321F1F]/75">
                    {item.description}
                  </p>
                </div>

                {/* Right decorative number */}
                <div
                  className="hidden lg:block shrink-0 font-serif font-black text-[72px] leading-none text-[#321F1F]/[0.04] select-none self-center"
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
