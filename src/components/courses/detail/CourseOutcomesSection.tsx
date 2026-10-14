"use client";

import React from "react";
import type { CourseItem } from "@/data/courses";

export interface CourseOutcomesSectionProps {
  course: CourseItem;
}

export default function CourseOutcomesSection({
  course,
}: CourseOutcomesSectionProps): React.JSX.Element {
  const skills = course.whatYoullLearn;

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-[#fffef7]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        {/* Focused Headline */}
        <div className="pb-4 mb-8 sm:mb-12 border-b border-[#e2e0d2] flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <h2 className="font-sans font-light text-3xl sm:text-4xl md:text-5xl text-black tracking-[-0.03em] leading-tight">
            Skills You Will Master.
          </h2>
          <span className="font-mono text-xs uppercase tracking-wider text-[#888888]">
            {skills.length} Core Competencies
          </span>
        </div>

        {/* Balanced 2-Column Competencies Ledger Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 border-t border-[#e2e0d2]">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="py-5 sm:py-6 flex items-start gap-4 sm:gap-6 group border-b border-[#e2e0d2]"
            >
              <span className="font-mono text-xs sm:text-sm text-[#ca8a04] font-semibold pt-0.5 shrink-0">
                0{idx + 1}
              </span>
              <p className="font-sans text-base sm:text-lg text-black font-light leading-snug group-hover:text-[#ca8a04] transition-colors">
                {skill}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
