"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";
import type { CourseItem } from "@/data/courses";

export interface CourseOutcomesSectionProps {
  course: CourseItem;
}

export default function CourseOutcomesSection({
  course,
}: CourseOutcomesSectionProps): React.JSX.Element {
  // Take top 4 focused skills to eliminate text overload
  const skills = course.whatYoullLearn.slice(0, 4);

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-[#fffef7]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        
        {/* Focused Headline — Zero Eyebrow Number, No Split Explainer */}
        <div className="pb-4 mb-8 sm:mb-12 border-b border-[#e2e0d2]">
          <h2 className="font-sans font-light text-3xl sm:text-4xl md:text-5xl text-black tracking-[-0.03em] leading-tight">
            Skills You Will Master.
          </h2>
        </div>

        {/* 2-Column Asymmetric Grid: Core Skills Left (7 cols) + Credential & Institutional Standard Right (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* LEFT: 4 Core Competency Ledger Rows */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-[#e2e0d2]">
            {skills.map((skill, idx) => (
              <div key={idx} className="py-5 sm:py-6 flex items-start gap-4 sm:gap-6 group">
                <span className="font-mono text-xs sm:text-sm text-[#ca8a04] font-semibold pt-0.5 shrink-0">
                  0{idx + 1}
                </span>
                <p className="font-sans text-base sm:text-lg text-black font-light leading-snug group-hover:text-[#ca8a04] transition-colors">
                  {skill}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT: Institutional Standard & Awarded Credential (Zero Card Box) */}
          <div className="lg:col-span-5 flex flex-col justify-between lg:pl-6">
            <div className="flex flex-col gap-6 pb-8 border-b border-[#e2e0d2]">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#888888] block mb-1">
                  Awarded Credential
                </span>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#ca8a04] shrink-0" />
                  <span className="font-sans font-normal text-base sm:text-lg text-black">
                    {course.certification}
                  </span>
                </div>
              </div>

              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#888888] block mb-1">
                  Graduation Requirement
                </span>
                <span className="font-sans text-sm sm:text-base text-[#444444]">
                  {course.assignmentsCount}
                </span>
              </div>
            </div>

            {/* Program Standards — Short 2-point focus */}
            <div className="pt-6">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#888888] block mb-3">
                Learning Standard
              </span>
              <div className="flex flex-col gap-2.5">
                {course.courseAdvantage.slice(0, 2).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#555555]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ffd001] shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
