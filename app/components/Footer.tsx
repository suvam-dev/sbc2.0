"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      aria-label="Terms, policies, and contact"
      className="bg-[#f7ecd0] border-t border-[#321F1F]/15 py-8 sm:py-12 lg:py-14 px-3.5 sm:px-6 lg:px-8"
    >
      <div className="max-w-[1260px] mx-auto text-xs sm:text-sm lg:text-[15px] leading-relaxed text-[#321F1F]/75 space-y-3">
        <div className="mb-6">
          <img src="/images/sbc-logo.png" alt="Startup Bootcamp Logo" className="w-16 h-16 sm:w-20 sm:h-20 object-contain mix-blend-multiply" />
        </div>
        <p>
          All participants explicitly acknowledge and agree to comply with the{" "}
          <Link
            href="/privacy"
            className="text-[#972933] hover:underline font-medium"
          >
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link
            href="/terms"
            className="text-[#972933] hover:underline font-medium"
          >
            Terms and Conditions
          </Link>{" "}
          of <strong className="font-semibold text-[#321F1F]">Startup Bootcamp 9.0</strong> in its entirety listed
          here.
        </p>

        <p>
          For any inquiries, please contact us at{" "}
          <a
            href="mailto:admin@ecell-iitkgp.in"
            className="text-[#972933] hover:underline font-medium break-all"
          >
            admin@ecell-iitkgp.in
          </a>{" "}
          or reach out via the{" "}
          <a href="/#contact" className="text-[#972933] hover:underline font-medium">
            Contact Us
          </a>{" "}
          desk.
        </p>

        <div className="pt-4 border-t border-[#321F1F]/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#321F1F]/60 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Entrepreneurship Cell, IIT Kharagpur. All rights reserved.</p>
          <div className="flex items-center gap-4 min-h-[44px]">
            <Link href="/privacy" className="hover:text-[#972933] transition py-2">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-[#972933] transition py-2">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
