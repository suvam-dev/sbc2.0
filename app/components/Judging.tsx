"use client";

import React from "react";

export default function Judging() {
  const criteria = [
    {
      title: "Evidence.",
      text: "Did a real person tell you this? Interviews, recordings, and what you found that you weren’t looking for while designing the solution.",
    },
    {
      title: "Creativity.",
      text: "Is the solution fresh, counterintuitive, unique, and different? This is usually where AI-generated solutions fail.",
    },
    {
      title: "Clarity.",
      text: "Is the solution communicated clearly? Is it specific?",
    },
    {
      title: "Feasibility.",
      text: "Is it a practical solution? Can it be implemented in a reasonable way?",
    },
    {
      title: "Thoroughness.",
      text: "Is the solution meticulous and detailed?",
    },
  ];

  return (
    <section
      id="evaluation-criteria"
      className="relative bg-ochre-grain py-12 sm:py-16 lg:py-20 text-[#fff8e8] overflow-x-clip"
    >
      {/* Decorative Floating Left Deco */}
      <div className="hidden lg:block deco-edge-eval" aria-hidden="true">
        <img
          src="/images/evaluation-deco-right.png"
          alt=""
          className="w-[219px] h-auto object-contain drop-shadow-[0_12px_22px_rgba(50,25,5,0.42)]"
        />
      </div>

      <div className="relative z-10 max-w-[1292px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[50px] font-bold text-[#fff8e8] tracking-tight mb-6 sm:mb-8">
          Judging
        </h2>

        <p className="max-w-[800px] text-sm sm:text-base lg:text-[18px] leading-relaxed text-[#fff8e8]/95 mb-8">
          Every submission is read against the same five things, whichever track you enter
          and whether or not you write code.
        </p>

        <ul className="max-w-[800px] list-disc pl-5 space-y-5 text-sm sm:text-base lg:text-[18px] leading-relaxed text-[#fff8e8]">
          {criteria.map((item, idx) => (
            <li key={idx}>
              <strong className="font-bold text-white">{item.title}</strong> {item.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
