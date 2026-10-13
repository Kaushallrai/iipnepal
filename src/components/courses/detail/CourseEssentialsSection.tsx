"use client";

import React from "react";
import { Camera, Clock, CheckCircle2, Laptop, Building2 } from "lucide-react";
import type { CourseItem } from "@/data/courses";

export interface CourseEssentialsSectionProps {
  course: CourseItem;
}

export default function CourseEssentialsSection({
  course,
}: CourseEssentialsSectionProps): React.JSX.Element {
  const weeklyHours =
    course.duration === "1 Month"
      ? "4 - 6 Hours / Week"
      : course.duration === "3 Months"
      ? "6 - 8 Hours / Week"
      : "8 - 10 Hours / Week";

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-[#fffef7]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        
        {/* Header */}
        <div className="pb-4 mb-8 sm:mb-12 border-b border-[#e2e0d2] flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <h2 className="font-sans font-light text-3xl sm:text-4xl md:text-5xl text-black tracking-[-0.03em] leading-tight">
            Equipment & Readiness.
          </h2>
          <span className="font-mono text-xs uppercase tracking-wider text-[#888888]">
            Level: {course.level} • {weeklyHours}
          </span>
        </div>

        {/* 2-Column High-Density Manifest */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 divide-y lg:divide-y-0 lg:divide-x divide-[#e2e0d2]">
          
          {/* Column 1: Hardware & Software Checklist */}
          <div className="flex flex-col lg:pr-12">
            <div className="flex items-center gap-2 pb-3 border-b border-black mb-4 font-mono text-xs uppercase tracking-[0.16em] text-black font-semibold">
              <Camera className="w-4 h-4 text-[#ca8a04]" />
              <span>Gear & Studio Access</span>
            </div>

            <div className="flex flex-col divide-y divide-[#e2e0d2]">
              <div className="py-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <span className="font-mono text-xs text-[#888888] uppercase tracking-wider shrink-0 sm:w-40">
                  Required Gear:
                </span>
                <span className="font-sans text-sm sm:text-base font-medium text-black">
                  {course.equipment}
                </span>
              </div>

              <div className="py-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <span className="font-mono text-xs text-[#888888] uppercase tracking-wider shrink-0 sm:w-40">
                  Editing Software:
                </span>
                <span className="font-sans text-xs sm:text-sm text-[#444444]">
                  Lightroom Mobile, Snapseed, or desktop RAW editor
                </span>
              </div>

              <div className="py-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <span className="font-mono text-xs text-[#888888] uppercase tracking-wider shrink-0 sm:w-40">
                  Provided by IIP:
                </span>
                <span className="font-sans text-xs sm:text-sm text-[#444444]">
                  Studio strobes, softboxes, reflectors & backdrops
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Entry Prerequisites & Time */}
          <div className="flex flex-col pt-8 lg:pt-0 lg:pl-12">
            <div className="flex items-center gap-2 pb-3 border-b border-black mb-4 font-mono text-xs uppercase tracking-[0.16em] text-black font-semibold">
              <Clock className="w-4 h-4 text-[#ca8a04]" />
              <span>Commitment & Prerequisites</span>
            </div>

            <div className="flex flex-col divide-y divide-[#e2e0d2]">
              <div className="py-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <span className="font-mono text-xs text-[#888888] uppercase tracking-wider shrink-0 sm:w-40">
                  Weekly Effort:
                </span>
                <span className="font-sans text-sm sm:text-base font-medium text-black">
                  {weeklyHours}
                </span>
              </div>

              <div className="py-4 flex flex-col gap-2">
                <span className="font-mono text-xs text-[#888888] uppercase tracking-wider">
                  Prerequisites:
                </span>
                <ul className="flex flex-col gap-2 list-none p-0 m-0">
                  {course.prerequisites.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#444444] leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ffd001] shrink-0 mt-1.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
