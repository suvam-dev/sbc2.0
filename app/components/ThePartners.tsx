"use client";

import React from "react";

export default function ThePartners() {
  return (
    <section
      id="sponsors"
      className="relative bg-[#d2e5e9] py-12 sm:py-16 lg:py-20 overflow-x-clip"
    >
      {/* Decorative Floating Right Clipping */}
      <div className="hidden lg:block deco-edge-right" aria-hidden="true">
        <img
          src="/images/sponsors-deco-left.png"
          alt=""
          className="w-full h-auto aspect-[380/570] drop-shadow-[0_12px_22px_rgba(20,38,44,0.38)]"
        />
      </div>

      <div className="relative z-10 max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[52px] font-bold text-[#321F1F]/90 tracking-tight mb-8 sm:mb-12">
          The Partners
        </h2>

        {/* 4 Partner Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-11 divide-y sm:divide-y-0 divide-[#321F1F]/15">
          {/* Zerodha */}
          <div className="pt-6 sm:pt-0 space-y-3">
            <span className="block text-xs font-semibold uppercase tracking-wider text-[#321F1F]/70">
              Title partner
            </span>
            <div className="h-10 flex items-center">
              <img
                src="/images/hero-sponsor-zerodha.png"
                alt="Zerodha"
                className="h-6 sm:h-7 lg:h-8 w-auto object-contain"
              />
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#321F1F]/80 pt-2">
              Zerodha is India&rsquo;s second-largest stockbroker and a fintech pioneer. It
              serves millions of retail investors, offering zero-brokerage equity trading,
              derivatives and commodities trading, and more. It was also one of the first
              stockbrokers in the country to integrate MCP and open up their systems to agents.
            </p>
          </div>

          {/* Delhivery */}
          <div className="pt-6 sm:pt-0 space-y-3">
            <span className="block text-xs font-semibold uppercase tracking-wider text-[#321F1F]/70">
              Logistics partner
            </span>
            <div className="h-10 flex items-center">
              <img
                src="/images/hero-sponsor-delhivery.png"
                alt="Delhivery"
                className="h-5 sm:h-6 lg:h-7 w-auto object-contain"
              />
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#321F1F]/80 pt-2">
              Delhivery is India’s largest logistics network, and has just opened test access to
              its Maps and MCP systems to outside developers for the first time. As logistics
              partner, they’ll work with and support teams whose agents have to make something
              physically arrive.
            </p>
          </div>

          {/* Pine Labs */}
          <div className="pt-6 sm:pt-0 space-y-3">
            <span className="block text-xs font-semibold uppercase tracking-wider text-[#321F1F]/70">
              Payments and authorisation partner
            </span>
            <div className="h-10 flex items-center">
              <img
                src="/images/hero-sponsor-pinelabs.png"
                alt="Pine Labs"
                className="h-7 sm:h-8 lg:h-9 w-auto object-contain"
              />
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#321F1F]/80 pt-2">
              Pine Labs, India's leading payments company, has already shipped agentic payments
              end to end. The Pine Labs Payments Protocol (P3P) is the protocol that allows
              agent-to-agent autonomous payments over UPI and cards on someone's behalf;
              Grantex sets what that agent may spend, on whose authority, and keeps the record of
              what it did. As a payments and authorisation partner, they'll open both to teams
              whose agents have to move real money.
            </p>
          </div>

          {/* Gnani */}
          <div className="pt-6 sm:pt-0 space-y-3">
            <span className="block text-xs font-semibold uppercase tracking-wider text-[#321F1F]/70">
              Voice partner
            </span>
            <div className="h-10 flex items-center">
              <img
                src="/images/hero-sponsor-gnani.svg"
                alt="Gnani"
                className="h-7 sm:h-8 lg:h-9 w-auto object-contain"
              />
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#321F1F]/80 pt-2">
              Gnani is India&rsquo;s frontier Voice AI company &mdash; building real-world
              speech across every accent, language, and condition that production deployments
              demand. As voice partner, they&rsquo;ll open up their APIs for teams who build
              innovative solutions that are voice-first.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
