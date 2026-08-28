"use client";

import React from "react";

export default function Bulletin() {
  return (
    <section className="bg-[#d2e5e9] py-8 sm:py-10 lg:py-12 border-b border-[#321F1F]/10">
      <div className="max-w-[1167px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* New Updates Group */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-lg sm:text-xl lg:text-[22px] font-semibold text-[#321F1F]/85">
            <span
              className="w-2 h-2 rounded-full bg-[#a3b74e] shrink-0 animate-pulse"
              aria-hidden="true"
            />
            <span>New updates</span>
          </div>

          {/* Item 1 */}
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 lg:gap-6 text-sm sm:text-base lg:text-[17px] leading-relaxed text-[#321F1F]/80">
            <span className="font-bold text-xs sm:text-sm lg:text-base uppercase tracking-wider text-[#321F1F] shrink-0 w-28">
              15 August
            </span>
            <div className="flex-1">
              Registration is open to students in every discipline. Form your team, then
              answer a few questions about who you are and how you think.{" "}
              <a
                href="#register-team"
                className="font-semibold text-[#972933] inline-flex items-center gap-1 group whitespace-nowrap"
              >
                <span className="link-hover-line">Register Now</span>
                <svg
                  className="w-4 h-3 inline-block transition-transform group-hover:translate-x-1"
                  viewBox="0 0 18.75 11.05"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.5303 6.0533C18.8232 5.76041 18.8232 5.28553 18.5303 4.99264L13.7574 0.21967C13.4645 -0.0732231 12.9896 -0.0732231 12.6967 0.21967C12.4038 0.512564 12.4038 0.987437 12.6967 1.28033L16.9393 5.52297L12.6967 9.76561C12.4038 10.0585 12.4038 10.5334 12.6967 10.8263C12.9896 11.1192 13.4645 11.1192 13.7574 10.8263L18.5303 6.0533ZM0 5.52297V6.27297H18V5.52297V4.77297H0V5.52297Z"
                    fill="#972933"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 lg:gap-6 text-sm sm:text-base lg:text-[17px] leading-relaxed text-[#321F1F]/80">
            <span className="font-bold text-xs sm:text-sm lg:text-base uppercase tracking-wider text-[#321F1F] shrink-0 w-28">
              06 August
            </span>
            <div className="flex-1">
              The Great Rewiring survey is live. Readers across India are stating all the
              problems they face every day, and their answers become the problems teams pick
              from.{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://theken.typeform.com/great-rewiring"
                className="font-semibold text-[#972933] inline-flex items-center gap-1 group whitespace-nowrap"
              >
                <span className="link-hover-line">Start with yours</span>
                <svg
                  className="w-4 h-3 inline-block transition-transform group-hover:translate-x-1"
                  viewBox="0 0 18.75 11.05"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.5303 6.0533C18.8232 5.76041 18.8232 5.28553 18.5303 4.99264L13.7574 0.21967C13.4645 -0.0732231 12.9896 -0.0732231 12.6967 0.21967C12.4038 0.512564 12.4038 0.987437 12.6967 1.28033L16.9393 5.52297L12.6967 9.76561C12.4038 10.0585 12.4038 10.5334 12.6967 10.8263C12.9896 11.1192 13.4645 11.1192 13.7574 10.8263L18.5303 6.0533ZM0 5.52297V6.27297H18V5.52297V4.77297H0V5.52297Z"
                    fill="#972933"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[0.5px] bg-[#321F1F]/20 my-6 sm:my-8" />

        {/* Upcoming Group */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-lg sm:text-xl lg:text-[22px] font-semibold text-[#321F1F]/85">
            <span
              className="w-2 h-2 rounded-full bg-[#9d0026] shrink-0"
              aria-hidden="true"
            />
            <span>Upcoming</span>
          </div>

          {/* Upcoming 1 */}
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 lg:gap-6 text-sm sm:text-base lg:text-[17px] leading-relaxed text-[#321F1F]/80">
            <span className="font-bold text-xs sm:text-sm lg:text-base uppercase tracking-wider text-[#321F1F] shrink-0 w-28">
              31 August
            </span>
            <div className="flex-1">
              Around 30 opportunities are published, drawn from the survey with the reader
              signals behind each. This is the list teams pick from.
            </div>
          </div>

          {/* Upcoming 2 */}
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 lg:gap-6 text-sm sm:text-base lg:text-[17px] leading-relaxed text-[#321F1F]/80">
            <span className="font-bold text-xs sm:text-sm lg:text-base uppercase tracking-wider text-[#321F1F] shrink-0 w-28">
              31 August
            </span>
            <div className="flex-1">
              Solution assembly opens. Teams submit how their agent does the job for the
              problem they&rsquo;ve identified.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
