"use client";

import React from "react";

export default function Hero() {
  const phases = [
    { no: "Phase I", name: "Survey", when: "Open now", noColor: "#9d0026", whenColor: "#838b61" },
    { no: "Phase II", name: "Registration", when: "Open now", noColor: "#9d0026", whenColor: "#838b61" },
    { no: "Phase III", name: "Solution assembly", when: "From 31 Aug", noColor: "#9d0026", whenColor: "#838b61" },
    { no: "Phase IV", name: "Finale", when: "10 Oct", noColor: "#9d0026", whenColor: "#838b61" },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f7ebd0] pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20">
      {/* Background Poster Texture collage */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply bg-center bg-cover"
        style={{
          backgroundImage: "url('/images/hero-poster-collage-bg.webp')",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Infinite Phase Dateline Marquee */}
        <div className="w-full overflow-hidden mb-6 sm:mb-8 py-1 border-y border-[#321F1F]/10">
          <div className="animate-phase-marquee flex items-center gap-6 text-xs sm:text-sm font-medium uppercase tracking-wider text-[#321F1F]">
            {/* Set 1 */}
            <div className="flex items-center gap-4 sm:gap-6 shrink-0">
              {phases.map((phase, idx) => (
                <React.Fragment key={`p1-${idx}`}>
                  <span className="inline-flex items-baseline gap-1.5 whitespace-nowrap">
                    <span className="font-semibold text-[#9d0026]">{phase.no}</span>
                    <span className="text-[#321F1F]/80">{phase.name}</span>
                    <span className="text-[#838b61] font-medium">{phase.when}</span>
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[#50427b] shrink-0 inline-block" />
                </React.Fragment>
              ))}
            </div>

            {/* Set 2 */}
            <div className="flex items-center gap-4 sm:gap-6 shrink-0" aria-hidden="true">
              {phases.map((phase, idx) => (
                <React.Fragment key={`p2-${idx}`}>
                  <span className="inline-flex items-baseline gap-1.5 whitespace-nowrap">
                    <span className="font-semibold text-[#9d0026]">{phase.no}</span>
                    <span className="text-[#321F1F]/80">{phase.name}</span>
                    <span className="text-[#838b61] font-medium">{phase.when}</span>
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[#50427b] shrink-0 inline-block" />
                </React.Fragment>
              ))}
            </div>

            {/* Set 3 */}
            <div className="flex items-center gap-4 sm:gap-6 shrink-0" aria-hidden="true">
              {phases.map((phase, idx) => (
                <React.Fragment key={`p3-${idx}`}>
                  <span className="inline-flex items-baseline gap-1.5 whitespace-nowrap">
                    <span className="font-semibold text-[#9d0026]">{phase.no}</span>
                    <span className="text-[#321F1F]/80">{phase.name}</span>
                    <span className="text-[#838b61] font-medium">{phase.when}</span>
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[#50427b] shrink-0 inline-block" />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* 3D Title Art */}
        <div className="mb-2 sm:mb-4 flex flex-col items-center">
          <img
            src="/images/hero-great-rewiring-title.png"
            alt="The Great Rewiring"
            className="w-[290px] sm:w-[480px] lg:w-[600px] h-auto object-contain mx-auto drop-shadow-sm select-none"
          />
          <h1 className="mt-2 sm:mt-1 font-bold text-sm sm:text-base lg:text-lg tracking-wide text-[#321F1F]/80">
            The Ken&rsquo;s Case-Build Competition 2026
          </h1>
        </div>

        {/* Sponsors Lockup */}
        <div className="flex flex-col items-center gap-3 sm:gap-4 my-4 sm:my-6 text-sm sm:text-base lg:text-lg text-[#321F1F]/80">
          {/* Title partner line */}
          <div className="inline-flex items-center justify-center flex-wrap gap-2 text-sm sm:text-base">
            <span className="font-normal">In partnership with</span>
            <img
              src="/images/hero-sponsor-zerodha.png"
              alt="Zerodha"
              className="h-3.5 sm:h-4 lg:h-4.5 w-auto object-contain"
            />
          </div>

          {/* 3 Rails Partners */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-[460px] w-full items-start mt-1">
            {/* Logistics */}
            <div className="flex flex-col items-center justify-start gap-1 text-center">
              <span className="text-xs sm:text-sm text-[#321F1F]/70">Logistics</span>
              <img
                src="/images/hero-sponsor-delhivery.png"
                alt="Delhivery"
                className="h-3.5 sm:h-4 lg:h-4.5 w-auto object-contain mt-1"
              />
            </div>

            {/* Voice Interface */}
            <div className="flex flex-col items-center justify-start gap-1 text-center">
              <span className="text-xs sm:text-sm text-[#321F1F]/70">Voice interface</span>
              <img
                src="/images/hero-sponsor-gnani.svg"
                alt="Gnani"
                className="h-5 sm:h-6 lg:h-7 w-auto object-contain"
              />
            </div>

            {/* Payments */}
            <div className="flex flex-col items-center justify-start gap-1 text-center">
              <span className="text-xs sm:text-sm text-[#321F1F]/70">Payments</span>
              <img
                src="/images/hero-sponsor-pinelabs.png"
                alt="Pine Labs"
                className="h-4.5 sm:h-5 lg:h-6 w-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Editorial Copy */}
        <div className="max-w-[720px] mx-auto text-sm sm:text-base lg:text-lg leading-relaxed text-[#321F1F]/85 space-y-3 sm:space-y-4 my-4">
          <p>
            Every business in India built on owning your attention, your habit, or your
            indecision will discover that an AI agent has none of the three. This is the
            Great Rewiring.
          </p>
          <p>
            In this year&rsquo;s edition, teams pick unique and interesting problems India&rsquo;s
            consumers have shared first-hand, find surprising insights nobody noticed, design
            the agent that solves the problem, then take it to the companies who own the rails
            and find out where it breaks.
          </p>
          <p>
            Two tracks: one for product strategy to work out what to build, and one for
            builders who build it. No code is required to advance, reach the finale, or win.
          </p>

          {/* Prize Callout */}
          <div className="pt-2">
            <p className="font-bold text-sm sm:text-base lg:text-lg text-[#321F1F]">
              <span className="text-[#972933] font-bold">&#8377;20 lakh</span> in cash prizes
            </p>
            <p className="text-xs sm:text-sm text-[#321F1F]/65 mt-0.5">
              Open to full-time college students across India, in any discipline.
            </p>
          </div>
        </div>

        {/* Register CTA Button */}
        <div className="mt-6 mb-6">
          <a
            href="#register-team"
            className="inline-flex items-center justify-center px-6 py-3 sm:px-7 sm:py-3.5 bg-[#912831] hover:bg-[#74001c] text-white font-semibold text-xs sm:text-sm tracking-wider uppercase rounded-xs transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Register your team
          </a>
        </div>

        {/* Hairline Divider */}
        <div className="w-full max-w-[720px] h-[0.5px] bg-[#321F1F]/25 my-4 sm:my-6" />

        {/* Footer Survey Note */}
        <div className="max-w-[720px] mx-auto text-center space-y-2">
          <p className="text-xs sm:text-sm lg:text-[15px] leading-relaxed text-[#321F1F]/80">
            Right now, readers across India are naming the parts of daily life that annoy and
            frustrate them, and the strange workarounds they&rsquo;ve built in their routines.
            Tell us yours, then also see what everyone else confessed.
          </p>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://theken.typeform.com/great-rewiring"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#972933] hover:text-[#74001c] group transition"
            >
              <span>Take the survey</span>
              <img
                src="/images/hero-arrow.svg"
                alt=""
                className="w-3.5 h-auto transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
