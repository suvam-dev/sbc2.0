"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PAST_MENTORS_DATA, Mentor } from "@/data/mentors";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function LinkedinIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

interface PastMentorsMarqueeProps {
  mentors?: Mentor[];
  showRegisterCta?: boolean;
}

export default function PastMentorsMarquee({
  mentors = PAST_MENTORS_DATA,
  showRegisterCta = true,
}: PastMentorsMarqueeProps) {
  const containerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const bgArtRef = useRef<HTMLImageElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

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

      // Fade up CTA
      if (ctaRef.current) {
        gsap.from(ctaRef.current, {
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 95%",
          },
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out"
        });
      }
    });
  }, { scope: containerRef });

  return (
    <section
      id="partners"
      ref={containerRef}
      className="relative bg-[#f7ecd0] py-14 sm:py-20 lg:py-24 overflow-hidden border-b border-[#321F1F]/15"
    >
      {/* Background Graphic Art: Mentor & Entrepreneur at IIT KGP */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[45%] pointer-events-none select-none z-0" aria-hidden="true">
        <img
          ref={bgArtRef}
          src="/images/mentors-bg-art.jpg"
          alt="Vintage illustration of a mentor and entrepreneur at IIT Kharagpur"
          className="w-full h-full object-cover object-right-top drop-shadow-sm pointer-events-none -mt-10 h-[120%]"
        />
        {/* Soft edge blend overlay to seamlessly fade into background */}
        <div className="absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#f7ecd0] via-[#f7ecd0]/90 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-[#f7ecd0] via-transparent to-transparent" />
      </div>

      {/* Left Vertical Editorial Accent */}
      <div
        className="hidden lg:flex flex-col items-start gap-1 absolute left-6 sm:left-10 lg:left-12 top-48 sm:top-56 text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.25em] text-[#321F1F]/45 select-none z-10 pointer-events-none"
        aria-hidden="true"
      >
        <span>INDUSTRY</span>
        <span>LEADERS</span>
        <span>ALUMNI</span>
        <span>VCS</span>
        <span className="w-5 h-[1.5px] bg-[#972933]/40 mt-1" />
      </div>

      {/* Giant Decorative Watermark */}
      <div
        className="pointer-events-none absolute -bottom-6 sm:-bottom-10 left-4 sm:left-10 text-[80px] sm:text-[130px] lg:text-[160px] font-serif font-light text-[#972933]/[0.05] select-none leading-none z-0 tracking-tighter"
        aria-hidden="true"
      >
        MENTORS
      </div>

      <div className="relative z-10 max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <div ref={headerRef} className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pl-0 lg:pl-10">
          <div className="max-w-[640px]">
            <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#972933] block mb-1.5">
              1-On-1 Guidance
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[60px] font-black text-[#111111] tracking-tight leading-none mb-3">
              Past Mentors
            </h2>
            <p className="text-sm sm:text-base lg:text-[17px] text-[#321F1F]/75 font-serif leading-relaxed">
              Selected startups are paired with prominent founders, IIT Kharagpur alumni, and
              top-tier venture capitalists for 1-on-1 mentorship.
            </p>
          </div>
        </div>
      </div>

      {/* Infinite Horizontal Scroll Marquee Container */}
      <div className="relative w-full overflow-hidden py-4 cursor-grab active:cursor-grabbing">
        {/* Subtle edge fade gradient overlays */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#f7ecd0] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#f7ecd0] to-transparent z-10" />

        {/* Marquee Track (Double set for seamless infinite loop) */}
        <div className="animate-mentor-marquee flex items-stretch gap-6 sm:gap-8 px-4">
          {/* Set 1 */}
          {mentors.map((mentor, idx) => (
            <div
              key={`m1-${mentor.id}-${idx}`}
              className="w-[290px] sm:w-[340px] shrink-0 bg-[#f7ecd0]/95 backdrop-blur-xs rounded-xl border border-[#321F1F]/15 p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 select-none"
            >
              <div>
                {/* Avatar & Batch Pill */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-[#972933]/30 bg-[#f7ecd0] shrink-0 relative shadow-inner">
                    {mentor.imageUrl ? (
                      <img
                        src={mentor.imageUrl}
                        alt={mentor.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center font-serif text-xl sm:text-2xl font-black text-[#972933]">
                        {mentor.name
                          .replace(/^Dr\.\s+/, "")
                          .split(" ")
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join("")}
                      </div>
                    )}
                  </div>
                  <div className="space-y-1 min-w-0">
                    <span className="inline-block px-2.5 py-0.5 bg-[#972933]/10 text-[#972933] font-semibold text-[11px] rounded-full truncate max-w-full">
                      {mentor.alumnusTag}
                    </span>
                    {mentor.organization && (
                      <span className="block text-[11px] text-[#321F1F]/60 truncate">
                        {mentor.organization}
                      </span>
                    )}
                  </div>
                </div>

                {/* Name */}
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#321F1F] leading-snug">
                  {mentor.name}
                </h3>

                {/* Role */}
                <p className="text-xs sm:text-sm text-[#321F1F]/80 mt-2 leading-relaxed line-clamp-3">
                  {mentor.role}
                </p>
              </div>

              {/* LinkedIn Link */}
              {mentor.linkedinUrl && (
                <div className="mt-5 pt-3 border-t border-[#321F1F]/10 flex items-center justify-between">
                  <a
                    href={mentor.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#972933] hover:text-[#74001c] transition-colors"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                    <span>View Profile</span>
                  </a>
                  <span className="text-[10px] text-[#321F1F]/40 font-mono">SBC Mentor</span>
                </div>
              )}
            </div>
          ))}

          {/* Set 2 (Identical for seamless looping) */}
          {mentors.map((mentor, idx) => (
            <div
              key={`m2-${mentor.id}-${idx}`}
              className="w-[290px] sm:w-[340px] shrink-0 bg-[#f7ecd0]/95 backdrop-blur-xs rounded-xl border border-[#321F1F]/15 p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 select-none"
              aria-hidden="true"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-[#972933]/30 bg-[#f7ecd0] shrink-0 relative shadow-inner">
                    {mentor.imageUrl ? (
                      <img
                        src={mentor.imageUrl}
                        alt={mentor.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center font-serif text-xl sm:text-2xl font-black text-[#972933]">
                        {mentor.name
                          .replace(/^Dr\.\s+/, "")
                          .split(" ")
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join("")}
                      </div>
                    )}
                  </div>
                  <div className="space-y-1 min-w-0">
                    <span className="inline-block px-2.5 py-0.5 bg-[#972933]/10 text-[#972933] font-semibold text-[11px] rounded-full truncate max-w-full">
                      {mentor.alumnusTag}
                    </span>
                    {mentor.organization && (
                      <span className="block text-[11px] text-[#321F1F]/60 truncate">
                        {mentor.organization}
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#321F1F] leading-snug">
                  {mentor.name}
                </h3>

                <p className="text-xs sm:text-sm text-[#321F1F]/80 mt-2 leading-relaxed line-clamp-3">
                  {mentor.role}
                </p>
              </div>

              {mentor.linkedinUrl && (
                <div className="mt-5 pt-3 border-t border-[#321F1F]/10 flex items-center justify-between">
                  <a
                    href={mentor.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#972933] hover:text-[#74001c] transition-colors"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                    <span>View Profile</span>
                  </a>
                  <span className="text-[10px] text-[#321F1F]/40 font-mono">SBC Mentor</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Continue Registration CTA Button */}
      {showRegisterCta && (
        <div ref={ctaRef} className="relative z-10 max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-14 flex justify-end">
          <Link
            href="/#register"
            className="inline-flex items-center justify-center gap-2.5 bg-[#4E0C16] hover:bg-[#3B0910] text-white text-xs sm:text-[13px] font-medium px-5 sm:px-6 py-3 rounded-lg shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto uppercase tracking-wider"
          >
            <span>Continue registration</span>
            <span className="text-sm font-light">→</span>
          </Link>
        </div>
      )}
    </section>
  );
}
