"use client";

import React from "react";

export default function TheCase() {
  return (
    <section
      id="case"
      className="relative bg-oxblood-grain py-12 sm:py-16 lg:py-20 text-[#fffbf2] overflow-x-clip"
    >
      {/* Decorative Floating Left Clipping */}
      <div className="hidden md:block deco-edge-left" aria-hidden="true">
        <img
          src="/images/case-deco-left.png"
          alt=""
          className="h-[278px] w-auto object-cover object-bottom drop-shadow-[0_12px_22px_rgba(18,5,7,0.5)] transition-transform duration-500"
        />
      </div>

      <div className="relative z-10 max-w-[1293px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="max-w-[1000px] mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[52px] font-bold text-[#f5e0c6] tracking-tight mb-6 sm:mb-8 leading-tight">
            The Case
          </h2>

          <div className="space-y-5 text-sm sm:text-base lg:text-[18px] leading-relaxed text-[#fffbf2]/95 font-normal">
            <p>
              Sometime soon, Indians will stop doing things they&rsquo;ve done for decades.
              They&rsquo;ll stop comparing the same product across three e-commerce apps before
              they buy it. They&rsquo;ll stop sharing their location with every delivery partner on
              WhatsApp. They&rsquo;ll stop setting a 9:58am alarm to fight for a tatkal ticket.
            </p>

            <p className="font-medium text-[#f5e0c6]">
              An AI agent will do all of it, and more.
            </p>

            <p>
              For twenty years, Indian businesses have been built on owning your attention,
              your habit, or your indecision, and an agent has none of the three. As agents
              take over, value pools somewhere new and drains from someone old. This
              competition exists to work out where it goes, in what order, and what strange new
              companies get built in the space that opens up on the other side of The Great
              Rewiring.
            </p>

            <p>
              And you &mdash; students on campuses across the country &mdash; will be the ones
              who give the rest of us the first glimpse of this future. This happens across
              three stages:
            </p>
          </div>
        </div>

        {/* 3 Stages */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {/* Stage 1: Choose */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Copy */}
            <div className="lg:col-span-6 space-y-4 text-sm sm:text-base lg:text-[18px] leading-relaxed">
              <h3 className="font-bold text-base sm:text-lg lg:text-[20px] text-[#f5e0c6]">
                Stage 1: Choose
              </h3>
              <p className="font-medium text-[#fffbf2]">
                First, you&rsquo;ll have to pick what you want to solve.
              </p>
              <p className="text-[#fffbf2]/90">
                You&rsquo;ll get actual problems handed over by actual humans. Hundreds of The
                Ken&rsquo;s readers are telling us all the annoying, frustrating and repetitive
                parts of their daily lives, and the quirky workarounds they&rsquo;ve built to
                handle them. They&rsquo;re sharing vivid stories of how they currently struggle to
                solve problems across categories like health and fitness, money, transport,
                household, parenting, pets and more. We&rsquo;ll cluster those into dozens of
                opportunity spaces: each one a job someone wants done, with the evidence behind
                it, and no solution yet.
              </p>
            </div>

            {/* Media */}
            <div className="lg:col-span-6">
              <div className="relative group overflow-hidden rounded-xs border border-black shadow-[0_16px_34px_rgba(18,5,7,0.42)] transition-all duration-500 hover:shadow-[0_24px_48px_rgba(18,5,7,0.55)] hover:scale-[1.03]">
                <img
                  src="/images/case-banner-holiday.webp"
                  alt="The Holiday Group"
                  className="w-full h-auto object-cover aspect-[880/330] drift-banner-1"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>

          {/* Stage 2: Assembly (Reversed in desktop) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Media (Desktop Left) */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative group overflow-hidden rounded-xs border border-black shadow-[0_16px_34px_rgba(18,5,7,0.42)] transition-all duration-500 hover:shadow-[0_24px_48px_rgba(18,5,7,0.55)] hover:scale-[1.03]">
                <img
                  src="/images/case-banner-filing.webp"
                  alt="The Modern Indian Filing System"
                  className="w-full h-auto object-cover aspect-[880/330] drift-banner-2"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* Copy (Desktop Right) */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-4 text-sm sm:text-base lg:text-[18px] leading-relaxed">
              <h3 className="font-bold text-base sm:text-lg lg:text-[20px] text-[#f5e0c6]">
                Stage 2: Assembly
              </h3>
              <p className="font-medium text-[#fffbf2]">
                Then you put the pieces together to design your agent.
              </p>
              <p className="text-[#fffbf2]/90">
                This is where your product strategy chops are tested. You&rsquo;ll have to discover
                a unique consumer insight around which you assemble your agent. As with most
                consumer products, this insight is often unexpected and surprising &mdash;
                sometimes it&rsquo;s about asking users to hand over something they own, like their
                payment history, or access to their WhatsApp groups. In return, you&rsquo;ll have
                to make the case for how your agent will fundamentally rewire their life and
                solve a deep, emotional problem they experience every day.
              </p>
              <p className="text-[#fffbf2]/90">
                Finally, you&rsquo;ll have to design your agent across the three rails any agent has
                to be built on if it is going to work in the real world:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[#fffbf2]">
                <li>
                  <strong className="text-[#f5e0c6]">Voice</strong> &mdash; how it talks to people.
                </li>
                <li>
                  <strong className="text-[#f5e0c6]">Payments and authorisation</strong> &mdash; what it is allowed to do, and how it pays and gets paid.
                </li>
                <li>
                  <strong className="text-[#f5e0c6]">Logistics</strong> &mdash; how it moves things in the physical world.
                </li>
              </ul>
            </div>
          </div>

          {/* Stage 3: Build */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Copy */}
            <div className="lg:col-span-6 space-y-4 text-sm sm:text-base lg:text-[18px] leading-relaxed">
              <h3 className="font-bold text-base sm:text-lg lg:text-[20px] text-[#f5e0c6]">
                Stage 3: Build
              </h3>
              <p className="font-medium text-[#fffbf2]">
                This is when you test your solution against the real world.
              </p>
              <p className="text-[#fffbf2]/90">
                You&rsquo;ll take your solution to the companies that are at the frontier of
                building agentic infrastructure in India: Gnani for voice, Pine Labs for payments
                and authorisation, and Delhivery for logistics. In this round, you&rsquo;ll
                interact with their teams, get access to their rails and infrastructure, and
                build agentic prototypes. Teams on the build track will go deeper and create
                agents, while those on the product strategy track will present their solutions
                and test them against what each rail can actually do today.
              </p>
              <p className="text-[#fffbf2]/90">
                This round is all about testing the limits of India&rsquo;s agentic infrastructure,
                where it bends and breaks, and making recommendations about what needs to be
                changed and why.
              </p>
              <p className="font-bold text-[#f5e0c6] pt-1">
                The top teams will fight it out at a finale, in front of a jury of India&rsquo;s
                leading founders, CEOs, academics, operators, and market experts, for &#8377;20
                lakh in cash prizes. There are prizes for the most innovative solutions across
                each of the rails.
              </p>
            </div>

            {/* Media */}
            <div className="lg:col-span-6">
              <div className="relative group overflow-hidden rounded-xs border border-black shadow-[0_16px_34px_rgba(18,5,7,0.42)] transition-all duration-500 hover:shadow-[0_24px_48px_rgba(18,5,7,0.55)] hover:scale-[1.03]">
                <img
                  src="/images/case-banner-kyc.webp"
                  alt="The KYC Folder"
                  className="w-full h-auto object-cover aspect-[880/330] drift-banner-3"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Outro */}
        <div className="mt-12 sm:mt-16 lg:mt-20 pt-8 border-t border-[#fffbf2]/20 space-y-4 text-sm sm:text-base lg:text-[18px] leading-relaxed text-[#fffbf2]/90">
          <p>
            Finally, the best and most innovative solutions are then synthesised into The Ken&rsquo;s
            map of how agentic AI rewires India, published in October and read across the
            industry. This will be the report that companies, startups, and VCs read and reread
            for years to understand how the disruption plays out: what gets built, where it comes
            from, where consumers find new value, who wins, and who&rsquo;s exposed.
          </p>
          <p>
            The student teams whose solutions get listed here will be the ones companies compete
            to recruit and hire &mdash; or who build the next wave of influential agentic startups
            and products.
          </p>
        </div>
      </div>
    </section>
  );
}
