"use client";

import React from "react";

export default function Eligibility() {
  return (
    <section
      id="eligibility"
      className="relative bg-[#f9efd9] py-12 sm:py-16 lg:py-20 overflow-hidden"
    >
      {/* Torn-Paper Texture Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/paper-torn-h.webp')",
          backgroundSize: "150% 130%",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[52px] font-bold text-[#972933] tracking-tight mb-6 sm:mb-8">
          Eligibility
        </h2>

        <div className="max-w-[760px] space-y-6">
          <p className="font-bold text-base sm:text-lg lg:text-[18px] leading-relaxed text-[#321F1F]/90">
            The Great Rewiring is open to full-time college students, UG or PG, at any
            institution in India.
          </p>

          <ul className="list-disc pl-5 space-y-4 text-sm sm:text-base lg:text-[18px] leading-relaxed text-[#321F1F]/80">
            <li>
              A team is one, two or three students. Most of the work rewards three.
            </li>
            <li>Everyone on a team must be from the same institution.</li>
            <li>There is no cap on how many teams one institution can enter.</li>
            <li>
              For both tracks, product strategy or building, you pick your track when you
              register and can change your mind up to the build stage.
            </li>
            <li>No code is required to advance, reach the finale, or win.</li>
            <li>
              <em className="italic">The Ken</em> may validate anything a team submits, and
              may disqualify a team at its sole discretion.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
