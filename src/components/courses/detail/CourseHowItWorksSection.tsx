"use client";

import React from "react";
import Image from "next/image";
import type { CourseItem } from "@/data/courses";

export interface CourseHowItWorksSectionProps {
  course: CourseItem;
}

export default function CourseHowItWorksSection({
  course,
}: CourseHowItWorksSectionProps): React.JSX.Element {
  const steps = [
    {
      number: "01",
      verb: "BRIEF",
      title: "Structured Creative Brief",
      summary: "Receive weekly shooting constraints, optical targets, and visual references.",
    },
    {
      number: "02",
      verb: "EXECUTION",
      title: "Field & Studio Shooting",
      summary: "Apply theory into practical shooting assignments in Kathmandu or online.",
    },
    {
      number: "03",
      verb: "CRITIQUE",
      title: "1-on-1 Mentor Evaluation",
      summary: "Working photographers review your contact sheets for lighting, tone, and framing.",
    },
    {
      number: "04",
      verb: "GRADUATION",
      title: "Curated Portfolio Pass",
      summary: "Compile exhibition-ready files and earn your official IIP certificate.",
    },
  ];

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-[#fffef7]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        
        {/* Header */}
        <div className="pb-4 mb-8 sm:mb-12 border-b border-[#e2e0d2] flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <h2 className="font-sans font-light text-3xl sm:text-4xl md:text-5xl text-black tracking-[-0.03em] leading-tight">
            How You Learn.
          </h2>
          <span className="font-mono text-xs uppercase tracking-wider text-[#888888]">
            The 4-Step IIP Mentorship Loop
          </span>
        </div>

        {/* 4-Column High-Clarity Progressive Methodology Rail */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col">
              <div className="flex items-center justify-between pb-3 border-b border-black mb-3.5">
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#ca8a04] font-semibold">
                  Step {step.number}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#888888]">
                  {step.verb}
                </span>
              </div>

              <h3 className="font-sans font-light text-lg sm:text-xl text-black mb-2 leading-snug">
                {step.title}
              </h3>

              <p className="font-sans text-xs sm:text-sm text-[#555555] leading-relaxed">
                {step.summary}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
