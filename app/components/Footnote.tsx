"use client";

import React from "react";

export default function Footnote() {
  return (
    <footer
      aria-label="Terms and contact"
      className="bg-white border-t border-[#321F1F]/15 py-8 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-[1260px] mx-auto text-xs sm:text-sm lg:text-[15px] leading-relaxed text-[#321F1F]/75 space-y-2">
        <p>
          All participants explicitly acknowledge and agree to comply with the{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://the-ken.com/privacy-policy/"
            className="text-[#972933] hover:underline"
          >
            Privacy Policy
          </a>{" "}
          and{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://the-ken.com/case-competition-2026/terms-and-conditions/"
            className="text-[#972933] hover:underline"
          >
            Terms and Conditions
          </a>{" "}
          of <em className="italic">The Ken</em>&rsquo;s Case Competition in its entirety listed
          here.
        </p>
        <p>
          For any inquiries, please contact us{" "}
          <a
            href="mailto:casecompetition@the-ken.com"
            className="text-[#972933] hover:underline font-medium"
          >
            casecompetition@the-ken.com
          </a>
        </p>
      </div>
    </footer>
  );
}
