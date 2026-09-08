"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { UPDATES_DATA, UpdateItem } from "@/data/updates";

interface UpdatesFeedProps {
  updates?: UpdateItem[];
}

export default function UpdatesFeed({ updates = UPDATES_DATA }: UpdatesFeedProps) {
  const newUpdates = updates.filter((u) => u.category === "new");
  const upcomingUpdates = updates.filter((u) => u.category === "upcoming");

  return (
    <section className="bg-[#d2e5e9] py-8 sm:py-10 lg:py-12 border-b border-[#321F1F]/10">
      <div className="max-w-[1167px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* New Updates Group */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-lg sm:text-xl lg:text-[22px] font-semibold text-[#321F1F]/85">
            <span
              className="w-2.5 h-2.5 rounded-full bg-[#a3b74e] shrink-0 animate-pulse shadow-xs"
              aria-hidden="true"
            />
            <span>New updates</span>
          </div>

          <div className="space-y-4">
            {newUpdates.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 lg:gap-6 text-sm sm:text-base lg:text-[17px] leading-relaxed text-[#321F1F]/80"
              >
                <span className="font-bold text-xs sm:text-sm lg:text-base uppercase tracking-wider text-[#321F1F] shrink-0 w-28 sm:w-32">
                  {item.date}
                </span>
                <div className="flex-1">
                  <span>{item.text} </span>
                  {item.cta && (
                    <Link
                      href={item.cta.href}
                      className="font-semibold text-[#972933] hover:text-[#74001c] inline-flex items-center gap-1 group whitespace-nowrap transition-colors"
                    >
                      <span className="link-hover-line">{item.cta.label}</span>
                      <ArrowRight className="w-3.5 h-3.5 inline-block transition-transform group-hover:translate-x-1" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[0.5px] bg-[#321F1F]/20 my-6 sm:my-8" />

        {/* Upcoming Group */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-lg sm:text-xl lg:text-[22px] font-semibold text-[#321F1F]/85">
            <span
              className="w-2.5 h-2.5 rounded-full bg-[#50427b] shrink-0 shadow-xs"
              aria-hidden="true"
            />
            <span>Upcoming</span>
          </div>

          <div className="space-y-4">
            {upcomingUpdates.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 lg:gap-6 text-sm sm:text-base lg:text-[17px] leading-relaxed text-[#321F1F]/80"
              >
                <span className="font-bold text-xs sm:text-sm lg:text-base uppercase tracking-wider text-[#321F1F] shrink-0 w-28 sm:w-32">
                  {item.date}
                </span>
                <div className="flex-1">
                  <span>{item.text} </span>
                  {item.cta && (
                    <Link
                      href={item.cta.href}
                      className="font-semibold text-[#972933] hover:text-[#74001c] inline-flex items-center gap-1 group whitespace-nowrap transition-colors"
                    >
                      <span className="link-hover-line">{item.cta.label}</span>
                      <ArrowRight className="w-3.5 h-3.5 inline-block transition-transform group-hover:translate-x-1" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
