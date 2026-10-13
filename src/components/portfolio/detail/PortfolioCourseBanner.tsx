"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, GraduationCap } from "lucide-react";
import type { PortfolioItem } from "@/data/portfolio";
import { getCourseBySlug } from "@/data/courses";

export interface PortfolioCourseBannerProps {
  item: PortfolioItem;
}

export default function PortfolioCourseBanner({ item }: PortfolioCourseBannerProps): React.JSX.Element {
  const course = getCourseBySlug(item.relatedCourseSlug);

  if (!course) {
    return <></>;
  }

  return (
    <section className="section_portfolio-course-banner w-full bg-[#fbf9f0] text-black py-16 sm:py-20 md:py-24 border-b border-[#e2e0d2]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-14">
          
          {/* Narrative & Academic Credentials */}
          <div className="max-w-3xl flex flex-col items-start">
            <div className="flex items-center gap-2 mb-3">
              <GraduationCap className="w-4 h-4 text-[#ca8a04]" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#888888] font-semibold">
                Curricular Provenance
              </span>
            </div>

            <h2 className="font-sans font-light text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-[1.12] tracking-[-0.035em] text-black mb-3 sm:mb-4">
              Mastered in the {course.title}.
            </h2>

            <p className="font-sans font-normal text-sm sm:text-base md:text-lg text-[#555555] max-w-2xl leading-relaxed mb-5">
              Authored under 1-on-1 mentorship at IIP Nepal. Next cohort begins 1st of every month at Jyoti Bhawan, Kanti Path.
            </p>

            <div className="font-mono text-xs text-[#777777] uppercase tracking-wider flex items-center gap-3 flex-wrap">
              <span className="text-black font-semibold">{course.level} Track</span>
              <span>•</span>
              <span>{course.duration}</span>
              <span>•</span>
              <span className="text-[#ca8a04] font-semibold">{course.payableFee}</span>
            </div>
          </div>

          {/* Action Buttons: View course pill button */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 shrink-0 w-full sm:w-auto">
            <Link
              href={`/courses/${course.slug}`}
              className="inline-flex items-center justify-center gap-2 font-mono text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase bg-black text-[#fffef7] hover:bg-[#ffd001] hover:text-black px-8 py-4 rounded-full transition-colors text-center leading-none whitespace-nowrap w-full sm:w-auto cursor-pointer"
            >
              <span>View course syllabus</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
