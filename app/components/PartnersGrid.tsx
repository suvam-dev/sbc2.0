"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PARTNERS_DATA, Partner } from "@/data/partners";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface PartnersGridProps {
  partners?: Partner[];
  title?: string;
  showRegisterCta?: boolean;
}

export default function PartnersGrid({
  partners = PARTNERS_DATA,
  title = "The Partners",
  showRegisterCta = true,
}: PartnersGridProps) {
  const containerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
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

      // Stagger grid columns
      if (gridRef.current) {
        gsap.from(".partner-col", {
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
          },
          y: 40,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out"
        });
      }

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
      className="relative bg-[#d2e5e9] py-12 sm:py-16 lg:py-20 overflow-x-clip border-b border-[#321F1F]/10"
    >
      {/* Decorative Floating Right Clipping */}
      <div className="hidden lg:block deco-edge-right pointer-events-none" aria-hidden="true">
        <img
          src="/images/sponsors-deco-left.png"
          alt=""
          className="w-full h-auto aspect-[380/570] drop-shadow-[0_12px_22px_rgba(20,38,44,0.38)]"
        />
      </div>

      <div className="relative z-10 max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 sm:mb-12">
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-[48px] text-[#321F1F]/90 tracking-wide uppercase">
            {title}
          </h2>
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#321F1F]/70 mt-2 sm:mt-0">
            Infrastructure &bull; Tooling &bull; Mentorship
          </p>
        </div>

        {/* 4 Partner Columns */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-11 divide-y sm:divide-y-0 divide-[#321F1F]/15">
          {partners.map((partner) => (
            <div key={partner.id} className="partner-col pt-6 sm:pt-0 space-y-3 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono text-[#972933] font-bold block mb-1">
                  // {partner.category}
                </span>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#321F1F]">
                  {partner.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#321F1F]/80 mt-1 leading-relaxed">
                  {partner.description}
                </p>
              </div>

              {partner.logoUrl && (
                <div className="pt-4 flex items-center h-12">
                  <img
                    src={partner.logoUrl}
                    alt={partner.name}
                    className="max-h-8 max-w-[120px] object-contain opacity-75 hover:opacity-100 transition-opacity"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Continue Registration CTA as seen in PDF page 3 */}
        {showRegisterCta && (
          <div ref={ctaRef} className="mt-12 sm:mt-16 flex justify-end">
            <Link
              href="/#register"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#972933] hover:bg-[#74001c] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-none shadow-sm transition active:scale-98"
            >
              <span>Continue registration</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
