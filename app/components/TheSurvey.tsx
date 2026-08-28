"use client";

import React from "react";

export default function TheSurvey() {
  return (
    <section
      id="survey"
      aria-label="Case competition survey"
      className="relative bg-[#d4c8ad] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background collage */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 bg-top bg-cover"
        style={{
          backgroundImage: "url('/images/survey-bg.webp')",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1332px] mx-auto bg-[#f9efd9] border border-[#321F1F]/15 rounded p-6 sm:p-10 lg:p-14 shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-4">
            <span className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-[#972933]">
              For the readers
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#a26028] tracking-tight leading-tight mb-4">
              What would you rewire first?
            </h2>

            <div className="space-y-3.5 text-sm sm:text-base lg:text-[17px] leading-relaxed text-[#111111]/90">
              <p>
                Every Indian life runs on three lists: the endlessly repeated, the
                dreaded-but-unavoidable and the forever-postponed. All of these are held
                together by strange workarounds, like a WhatsApp group with one member in it,
                an app that&rsquo;s half-logged, or a human agent whose only job is to send you
                gentle reminders.
              </p>
              <p className="font-semibold text-[#a26028]">
                Tell us about yours.
              </p>
              <p>
                As you go, you&rsquo;ll see what other subscribers confessed: some of it quirky,
                some eerily familiar.
              </p>
              <p>
                This is just the beginning. What you name here becomes the problem statement
                &mdash; over the next few weeks, India&rsquo;s sharpest student teams will
                compete to build AI assistants for annoyances like the ones you face, and
                you&rsquo;ll get first go at testing what they make and telling them where it
                falls short.
              </p>
              <p>
                And it all ends in a published map, which is The Ken&rsquo;s account of how India
                rewires itself. You&rsquo;ll be the first to read it.
              </p>
            </div>

            <div className="pt-3">
              <a
                href="https://theken.typeform.com/great-rewiring"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-7 py-3.5 bg-[#b5002c] hover:bg-[#8f0023] text-white font-semibold text-sm sm:text-base tracking-wider rounded transition-all duration-200 shadow-md hover:-translate-y-0.5"
              >
                Tell us yours
              </a>
            </div>
          </div>

          {/* Cluster Graphic */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative group max-w-[340px] sm:max-w-[400px] w-full">
              <img
                src="/images/survey-cluster.webp"
                alt="Reader Quirks & Annoyances Collage"
                className="w-full h-auto object-contain animate-survey-cluster drop-shadow-[0_16px_30px_rgba(60,44,18,0.34)] group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
