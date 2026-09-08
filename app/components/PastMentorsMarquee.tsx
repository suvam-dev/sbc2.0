"use client";

import React, { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { PAST_MENTORS_DATA, Mentor } from "@/data/mentors";
import ApplyMentorModal from "./ApplyMentorModal";
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

function MentorAvatar({ name, imageUrl }: { name: string; imageUrl?: string }) {
  const [hasError, setHasError] = useState(false);

  const initials = name
    .replace(/^Dr\.\s+/, "")
    .split(" ")
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("");

  if (imageUrl && !hasError) {
    return (
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-full object-cover"
        onError={() => setHasError(true)}
      />
    );
  }

  return (
    <div className="w-full h-full flex items-center justify-center font-serif text-xl sm:text-2xl font-black text-[#972933]">
      {initials}
    </div>
  );
}

function MentorCard({ mentor, "aria-hidden": ariaHidden }: { mentor: Mentor; "aria-hidden"?: boolean }) {
  return (
    <div
      className="w-[250px] sm:w-[275px] xl:w-[290px] shrink-0 bg-[#f7ecd0]/95 backdrop-blur-xs rounded-xl border border-[#321F1F]/15 p-4 sm:p-4.5 flex flex-col justify-between shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 select-none"
      aria-hidden={ariaHidden}
    >
      <div>
        {/* Avatar & Batch Pill */}
        <div className="flex items-center gap-3 mb-2.5">
          <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-full overflow-hidden border-2 border-[#972933]/30 bg-[#f7ecd0] shrink-0 relative shadow-inner">
            <MentorAvatar name={mentor.name} imageUrl={mentor.imageUrl} />
          </div>
          <div className="space-y-0.5 min-w-0">
            <span className="inline-block px-2 py-0.5 bg-[#972933]/10 text-[#972933] font-semibold text-[10px] rounded-full truncate max-w-full">
              {mentor.alumnusTag}
            </span>
            {mentor.organization && (
              <span className="block text-[10.5px] text-[#321F1F]/60 truncate">
                {mentor.organization}
              </span>
            )}
          </div>
        </div>

        {/* Name */}
        <h3 className="font-serif text-[15px] sm:text-base font-bold text-[#321F1F] leading-snug">
          {mentor.name}
        </h3>

        {/* Role */}
        <p className="text-[11px] sm:text-xs text-[#321F1F]/80 mt-1 leading-relaxed line-clamp-2">
          {mentor.role}
        </p>
      </div>

      {/* LinkedIn Link */}
      {mentor.linkedinUrl && (
        <div className="mt-2.5 pt-2 border-t border-[#321F1F]/10 flex items-center justify-between">
          <a
            href={mentor.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#972933] hover:text-[#74001c] transition-colors"
          >
            <LinkedinIcon className="w-3 h-3" />
            <span>View Profile</span>
          </a>
          <span className="text-[9.5px] text-[#321F1F]/40 font-mono">SBC Mentor</span>
        </div>
      )}
    </div>
  );
}

interface PastMentorsMarqueeProps {
  mentors?: Mentor[];
  showApplyCta?: boolean;
  applyMentorHref?: string;
  showRegisterCta?: boolean;
}

export default function PastMentorsMarquee({
  mentors = PAST_MENTORS_DATA,
  showApplyCta = true,
  applyMentorHref,
  showRegisterCta,
}: PastMentorsMarqueeProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const bgArtRef = useRef<HTMLImageElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const shouldShowCta = showApplyCta ?? showRegisterCta ?? true;

  // Split mentors into two balanced groups for two opposing marquees
  const row1Mentors = mentors.filter((_, idx) => idx % 2 === 0);
  const row2Mentors = mentors.filter((_, idx) => idx % 2 !== 0);

  useGSAP(() => {
    const mm = gsap.matchMedia();

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

  const renderCtaButton = (extraClass = "") => {
    const buttonContent = (
      <>
        <span>Register as a Mentor</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
      </>
    );

    const baseClass = `group inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#972933] via-[#851822] to-[#600C16] hover:from-[#74001c] hover:via-[#600C16] hover:to-[#45050D] text-white text-xs sm:text-[13px] font-bold px-6 py-3.5 rounded-xl shadow-[0_8px_20px_-4px_rgba(151,41,51,0.45)] hover:shadow-[0_12px_28px_-4px_rgba(151,41,51,0.6)] hover:scale-[1.02] active:scale-98 transition-all duration-200 uppercase tracking-wider cursor-pointer border border-white/20 ${extraClass}`;

    if (applyMentorHref) {
      return (
        <a
          href={applyMentorHref}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClass}
        >
          {buttonContent}
        </a>
      );
    }
    return (
      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className={baseClass}
      >
        {buttonContent}
      </button>
    );
  };

  return (
    <section
      id="partners"
      ref={containerRef}
      className="relative bg-[#f7ecd0] py-12 sm:py-16 lg:py-20 overflow-hidden border-b border-[#321F1F]/15"
    >
      {/* Decorative Stamp Border Patterns */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-2 bg-[radial-gradient(#972933_1px,transparent_1px)] [background-size:12px_12px] opacity-40 z-20" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-2 bg-[radial-gradient(#972933_1px,transparent_1px)] [background-size:12px_12px] opacity-40 z-20" />

      {/* Left Vertical Editorial Accent */}
      <div
        className="hidden 2xl:flex flex-col items-start gap-1 absolute left-4 2xl:left-8 top-16 text-[9px] font-mono uppercase tracking-[0.25em] text-[#321F1F]/40 select-none z-20 pointer-events-none"
        aria-hidden="true"
      >
        <span>INDUSTRY</span>
        <span>LEADERS</span>
        <span>ALUMNI</span>
        <span>VCS</span>
        <span className="w-5 h-[1.5px] bg-[#972933]/40 mt-1" />
      </div>

      {/* Main Split Layout: Left Half (Marquees) & Right Half (Illustration) */}
      <div className="w-full flex flex-col lg:flex-row items-stretch relative">
        {/* LEFT HALF: Header + 2 Opposing Marquees (occupies 50% on lg) */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between relative z-10 py-1">
          {/* Section Header */}
          <div
            ref={headerRef}
            className="px-4 sm:px-8 lg:pl-12 lg:pr-6 xl:pl-16 mb-4 sm:mb-6"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#972933]" />
              <span className="text-[11px] font-mono tracking-widest uppercase text-[#972933] font-bold">
                MENTORS
              </span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="font-serif italic text-2xl sm:text-3xl text-[#972933]/80 font-bold">
                04
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#321F1F]">
                Past Mentors
              </h2>
            </div>
            <p className="text-xs sm:text-sm lg:text-[14px] text-[#321F1F]/80 font-serif leading-relaxed mt-2.5 max-w-[520px]">
              Distinguished founders, operators, and venture investors from IIT Kharagpur and top industry ecosystems who guided previous bootcamp cohorts from napkin sketch to seed round.
            </p>
          </div>

          {/* Dual Infinite Horizontal Scroll Marquees in Opposite Directions */}
          <div className="space-y-3 sm:space-y-3.5 my-auto">
            {/* ROW 1: Scrolls Leftwards */}
            <div className="relative w-full overflow-hidden py-1 cursor-grab active:cursor-grabbing">
              {/* Left edge fade overlay */}
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-14 bg-gradient-to-r from-[#f7ecd0] to-transparent z-10" />
              {/* Right blend overlay */}
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-14 sm:w-24 lg:w-32 bg-gradient-to-l from-[#f7ecd0] via-[#f7ecd0]/90 to-transparent z-10" />

              {/* Marquee Track 1 (Leftwards) */}
              <div className="animate-mentor-marquee flex items-stretch gap-4 sm:gap-5 px-4">
                {row1Mentors.map((mentor, idx) => (
                  <MentorCard key={`r1-m1-${mentor.id}-${idx}`} mentor={mentor} />
                ))}
                {row1Mentors.map((mentor, idx) => (
                  <MentorCard key={`r1-m2-${mentor.id}-${idx}`} mentor={mentor} aria-hidden={true} />
                ))}
              </div>
            </div>

            {/* ROW 2: Scrolls Rightwards in Opposite Direction */}
            <div className="relative w-full overflow-hidden py-1 cursor-grab active:cursor-grabbing">
              {/* Left edge fade overlay */}
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-14 bg-gradient-to-r from-[#f7ecd0] to-transparent z-10" />
              {/* Right blend overlay */}
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-14 sm:w-24 lg:w-32 bg-gradient-to-l from-[#f7ecd0] via-[#f7ecd0]/90 to-transparent z-10" />

              {/* Marquee Track 2 (Rightwards / Opposite Direction) */}
              <div className="animate-mentor-marquee-reverse flex items-stretch gap-4 sm:gap-5 px-4">
                {row2Mentors.map((mentor, idx) => (
                  <MentorCard key={`r2-m1-${mentor.id}-${idx}`} mentor={mentor} />
                ))}
                {row2Mentors.map((mentor, idx) => (
                  <MentorCard key={`r2-m2-${mentor.id}-${idx}`} mentor={mentor} aria-hidden={true} />
                ))}
              </div>
            </div>
          </div>

          {/* Mobile CTA (visible only on mobile/tablet screens < lg) */}
          {shouldShowCta && (
            <div className="lg:hidden px-4 mt-6 flex justify-center">
              <div className="bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F5ECE0] border border-[#972933]/25 rounded-2xl p-4 shadow-md max-w-[340px] w-full text-center">
                <div className="flex items-center justify-center gap-2 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#972933] animate-pulse" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#972933]">
                    CALL FOR MENTORS
                  </span>
                </div>
                <h4 className="font-serif font-bold text-sm text-[#1a1010] mb-1">
                  Guide Startup Bootcamp 9.0
                </h4>
                <p className="text-[11.5px] text-[#321F1F]/70 font-serif leading-snug mb-3">
                  Mentor early-stage ventures from colleges across India.
                </p>
                {renderCtaButton("w-full")}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT HALF: Illustration taking other half with multi-edge seamless blend */}
        <div className="hidden lg:flex lg:w-1/2 relative min-h-[520px] xl:min-h-[560px] flex-col justify-end items-end p-8 xl:p-12 overflow-hidden select-none">
          {/* Background Graphic Art with Parallax & Multiply Blend */}
          <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
            <img
              ref={bgArtRef}
              src="/images/past-mentors-bg.jpg"
              alt="Vintage illustration of a business mentor guiding startup founders"
              className="w-full h-[120%] -top-[10%] absolute inset-x-0 object-cover object-center mix-blend-multiply filter contrast-[1.04]"
            />
            {/* Seamless Soft Edge Blend Overlays */}
            {/* 1. Left Edge Blend - seamlessly fades into the center meeting the marquee */}
            <div className="absolute inset-y-0 left-0 w-32 xl:w-48 bg-gradient-to-r from-[#f7ecd0] via-[#f7ecd0]/80 to-transparent z-1" />
            {/* 2. Top Edge Blend */}
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#f7ecd0] via-[#f7ecd0]/60 to-transparent z-1" />
            {/* 3. Bottom Edge Blend */}
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#f7ecd0] via-[#f7ecd0]/75 to-transparent z-1" />
            {/* 4. Right Edge Blend */}
            <div className="absolute inset-y-0 right-0 w-16 xl:w-24 bg-gradient-to-l from-[#f7ecd0] to-transparent z-1" />
          </div>

          {/* Register as a Mentor High-Contrast Highlight Callout Card */}
          {shouldShowCta && (
            <div
              ref={ctaRef}
              className="relative z-10 bg-gradient-to-b from-[#FFFDF9]/95 via-[#FAF6EE]/95 to-[#F5ECE0]/95 backdrop-blur-md border-2 border-[#972933]/30 rounded-2xl p-4 sm:p-5 shadow-[0_22px_45px_-8px_rgba(50,31,31,0.25),0_6px_16px_rgba(151,41,51,0.15)] ring-4 ring-[#972933]/10 max-w-[340px] w-full"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#972933] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#972933]" />
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#972933]">
                  CALL FOR MENTORS • SBC 9.0
                </span>
              </div>
              <h4 className="font-serif font-bold text-base text-[#1a1010] leading-snug mb-1">
                Guide the Next Wave of Founders
              </h4>
              <p className="text-xs text-[#321F1F]/75 font-serif leading-relaxed mb-3.5">
                Share your operational experience and mentor ambitious early-stage startups from across India.
              </p>
              {renderCtaButton("w-full shadow-md")}
            </div>
          )}
        </div>
      </div>

      {/* Interactive Mentor Application Modal */}
      <ApplyMentorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
