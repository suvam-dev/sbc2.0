"use client";

import React from "react";
import Link from "next/link";
import { Globe, ArrowUpRight } from "lucide-react";
import { GENERAL_CONTACT } from "@/data/contacts";

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function TwitterIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer
      aria-label="Footer and Quick Links"
      className="bg-[#f5e7c8] border-t-2 border-[#321F1F]/15 pt-12 sm:pt-16 pb-8 px-4 sm:px-6 lg:px-8 text-[#321F1F]"
    >
      <div className="max-w-[1260px] mx-auto">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-12 border-b border-[#321F1F]/15">
          {/* Brand Column (2 cols on large screens) */}
          <div className="lg:col-span-2 space-y-4 flex flex-col items-center text-center md:items-start md:text-left">
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 text-center md:text-left">
              <img
                src="/images/sbc-logo.png"
                alt="Startup Bootcamp 9.0"
                className="w-14 h-14 sm:w-16 sm:h-16 object-contain mix-blend-multiply shrink-0"
              />
              <div>
                <h3 className="font-display font-black text-xl sm:text-2xl text-[#321F1F] tracking-wide uppercase">
                  Startup Bootcamp 9.0
                </h3>
                <p className="text-[11px] sm:text-xs font-mono text-[#972933] font-bold uppercase tracking-wider">
                  E-Cell • IIT Kharagpur
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#321F1F]/80 leading-relaxed font-serif max-w-sm mx-auto md:mx-0">
              The premier pan-India pre-accelerator initiative by Entrepreneurship Cell, IIT Kharagpur. Nurturing student innovation from prototype to pitch with world-class mentorship.
            </p>

            {/* Social Icons */}
            <div className="pt-2 flex justify-center md:justify-start w-full">
              <div className="flex items-center justify-center md:justify-start gap-2.5">
                <a
                  href={GENERAL_CONTACT.socials[0].url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-[#fbf3e0] border border-[#321F1F]/20 text-[#321F1F] hover:text-[#972933] hover:border-[#972933] hover:bg-white transition-all shadow-2xs"
                  aria-label="Website"
                >
                  <Globe className="w-4 h-4" />
                </a>
                <a
                  href={GENERAL_CONTACT.socials[1].url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-[#fbf3e0] border border-[#321F1F]/20 text-[#321F1F] hover:text-[#972933] hover:border-[#972933] hover:bg-white transition-all shadow-2xs"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={GENERAL_CONTACT.socials[2].url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-[#fbf3e0] border border-[#321F1F]/20 text-[#321F1F] hover:text-[#972933] hover:border-[#972933] hover:bg-white transition-all shadow-2xs"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={GENERAL_CONTACT.socials[3].url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-[#fbf3e0] border border-[#321F1F]/20 text-[#321F1F] hover:text-[#972933] hover:border-[#972933] hover:bg-white transition-all shadow-2xs"
                  aria-label="X (Twitter)"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3 flex flex-col items-center text-center md:items-start md:text-left">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#972933]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#321F1F]/80 flex flex-col items-center md:items-start">
              <li>
                <Link href="/" className="hover:text-[#972933] transition-colors inline-block py-0.5">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/case" className="hover:text-[#972933] transition-colors inline-block py-0.5">
                  The Case Problem
                </Link>
              </li>
              <li>
                <Link href="/eligibility" className="hover:text-[#972933] transition-colors inline-block py-0.5">
                  Eligibility Criteria
                </Link>
              </li>
              <li>
                <Link href="/judging" className="hover:text-[#972933] transition-colors inline-block py-0.5">
                  Judging Framework
                </Link>
              </li>
              <li>
                <Link href="/incentives" className="hover:text-[#972933] transition-colors inline-block py-0.5">
                  Our Incentives
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-[#972933] transition-colors inline-block py-0.5">
                  Partners & Sponsors
                </Link>
              </li>
            </ul>
          </div>

          {/* Program & Participation Column */}
          <div className="space-y-3 flex flex-col items-center text-center md:items-start md:text-left">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#972933]">
              Participation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#321F1F]/80 flex flex-col items-center md:items-start">
              <li>
                <Link
                  href="/register"
                  className="font-medium text-[#972933] hover:underline inline-flex items-center justify-center md:justify-start gap-1 py-0.5"
                >
                  <span>Register Venture</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <a href="/#partners" className="hover:text-[#972933] transition-colors inline-block py-0.5">
                  Past Mentors Carousel
                </a>
              </li>
              <li>
                <a href="/#bulletin" className="hover:text-[#972933] transition-colors inline-block py-0.5">
                  Updates & Bulletins
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-[#972933] transition-colors inline-block py-0.5">
                  Contact Team
                </a>
              </li>
              <li>
                <a
                  href="https://www.ecell-iitkgp.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#972933] transition-colors inline-flex items-center justify-center md:justify-start gap-1 py-0.5"
                >
                  <span>E-Cell Website</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Secretariat Column */}
          <div className="space-y-3 flex flex-col items-center text-center md:items-start md:text-left">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#972933]">
              Secretariat & Policy
            </h4>
            <div className="text-xs sm:text-sm text-[#321F1F]/80 space-y-2 flex flex-col items-center md:items-start max-w-xs">
              <p className="font-medium text-[#321F1F]">
                Entrepreneurship Cell
              </p>
              <p className="text-xs text-[#321F1F]/70 leading-relaxed font-serif text-center md:text-left">
                Rajendra Mishra School of Engineering Entrepreneurship (RMSOEE), IIT Kharagpur, WB 721302
              </p>
              <div className="pt-2 space-y-1.5 border-t border-[#321F1F]/10 w-full flex flex-col items-center md:items-start">
                <div>
                  <Link href="/privacy" className="hover:text-[#972933] transition-colors block py-0.5">
                    Privacy Policy
                  </Link>
                </div>
                <div>
                  <Link href="/terms" className="hover:text-[#972933] transition-colors block py-0.5">
                    Terms & Conditions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Notice & Copyright */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#321F1F]/65 text-center md:text-left">
          <p>
            © {new Date().getFullYear()} Entrepreneurship Cell, IIT Kharagpur. All rights reserved.
          </p>

          <p className="text-[11px] text-[#321F1F]/60 max-w-md">
            All participants agree to comply with the{" "}
            <Link href="/privacy" className="underline hover:text-[#972933]">Privacy Policy</Link>{" "}
            and{" "}
            <Link href="/terms" className="underline hover:text-[#972933]">Terms and Conditions</Link>{" "}
            of Startup Bootcamp 9.0.
          </p>

          <div className="flex items-center gap-3 text-xs">
            <Link href="/privacy" className="hover:text-[#972933] transition py-1">
              Privacy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-[#972933] transition py-1">
              Terms
            </Link>
            <span>•</span>
            <a href="/#contact" className="hover:text-[#972933] transition py-1">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
