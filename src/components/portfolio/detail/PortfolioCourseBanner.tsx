"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { PortfolioItem } from "@/data/portfolio";
import { getCourseBySlug } from "@/data/courses";
import LineReveal from "@/components/animations/LineReveal";

export interface PortfolioCourseBannerProps {
  item: PortfolioItem;
}

export default function PortfolioCourseBanner({ item }: PortfolioCourseBannerProps): React.JSX.Element {
  const course = getCourseBySlug(item.relatedCourseSlug);

  if (!course) {
    return <></>;
  }

  return (
    <section
      data-theme="dark"
      className="section_portfolio-course-banner w-full bg-[#0a0a0a] text-[#fffef7] py-16 sm:py-20 md:py-24 border-t border-b border-[#222222]"
    >
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-14">
          
          {/* Narrative & Academic Credentials */}
          <div className="max-w-3xl flex flex-col items-start">
            <div className="flex items-center gap-2 mb-3 sm:mb-4 select-none">
              <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block" />
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#888888] font-semibold">
                07 // ACADEMIC PROVENANCE
              </span>
            </div>

            <LineReveal
              as="h2"
              className="font-sans font-light text-2xl sm:text-3xl md:text-4xl lg:text-[46px] xl:text-[50px] leading-[1.12] tracking-[-0.035em] text-[#fffef7] mb-3 sm:mb-4"
              lines={[`Mastered in the ${course.title}.`]}
            />

            <p className="font-sans font-normal text-sm sm:text-base md:text-lg text-[#aaaaaa] max-w-2xl leading-relaxed mb-4">
              Authored under 1-on-1 mentorship at IIP Nepal. Next cohort begins 1st of every month at Jyoti Bhawan, Kanti Path.
            </p>

            <div className="font-mono text-xs text-[#888888] uppercase tracking-wider flex items-center gap-3 flex-wrap">
              <span className="text-white font-medium">{course.level} Track</span>
              <span>•</span>
              <span>{course.duration}</span>
              <span>•</span>
              <span className="text-[#ffd001] font-semibold">{course.payableFee}</span>
            </div>
          </div>

          {/* Action Buttons: View course pill button */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 shrink-0 w-full sm:w-auto">
            <Link
              href={`/courses/${course.slug}`}
              className="inline-flex items-center justify-center gap-2 font-mono text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase bg-[#ffd001] text-black px-8 py-4 rounded-full hover:bg-white transition-all text-center leading-none shadow-sm whitespace-nowrap w-full sm:w-auto"
            >
              <span>View course</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
