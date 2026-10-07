"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, GraduationCap } from "lucide-react";
import type { PortfolioItem } from "@/lib/portfolio-data";
import { getCourseBySlug } from "@/lib/courses-data";
import LineReveal from "@/components/animations/LineReveal";
import ScrollReveal from "@/components/animations/ScrollReveal";

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
      className="section_portfolio-course-banner w-full py-16 sm:py-20 md:py-24 lg:py-28 bg-[#0a0a0a] text-[#fffef7] border-t border-b border-[#222222]"
    >
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <ScrollReveal variant="fade-up" distance={24} duration={0.8} start="top 88%">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-20 items-center">
            
            {/* Left 7 Columns: Context & Narrative */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="flex items-center gap-2 mb-3 sm:mb-4 select-none">
                <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block" />
                <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#888888] font-medium">
                  Academic Provenance // IIP Curriculum
                </span>
              </div>

              <LineReveal
                as="h2"
                lines={[`Mastered Through the ${course.title}.`]}
                className="font-sans font-light text-2xl sm:text-3xl md:text-4xl lg:text-[46px] xl:text-[50px] leading-[1.12] tracking-[-0.035em] text-[#fffef7] mb-3 sm:mb-4"
              />

              <p className="font-sans font-normal text-sm sm:text-base lg:text-[17px] text-[#aaaaaa] leading-relaxed max-w-2xl">
                This exhibition project by <strong className="text-white font-medium">{item.photographer}</strong> was
                authored within the structured curriculum of the{" "}
                <span className="text-[#ffd001]">{course.title}</span>. Through guided assignments, camera
                optics mastery, and 1:1 critique under <span className="text-white">{item.mentor}</span>, students
                transform from passionate shooters into published visual authors.
              </p>

              {/* Architectural Credentials Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10 pt-8 sm:pt-10 border-t border-[#222222] w-full text-left">
                <div className="flex flex-col gap-1.5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#777777]">
                    Curriculum Level
                  </span>
                  <span className="font-mono text-xs sm:text-sm text-white">
                    {course.level} Track
                  </span>
                </div>

                <div className="flex flex-col gap-1.5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#777777]">
                    Program Duration
                  </span>
                  <span className="font-mono text-xs sm:text-sm text-white">
                    {course.duration}
                  </span>
                </div>

                <div className="col-span-2 sm:col-span-1 flex flex-col gap-1.5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#777777]">
                    Kathmandu Studio
                  </span>
                  <span className="font-mono text-xs sm:text-sm text-[#ffd001]">
                    Jyoti Bhawan Labs
                  </span>
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Direct Academic Enrollment Bridge */}
            <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 lg:p-12 xl:p-14 bg-[#121212] border border-[#262626] gap-8">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#ffd001]" />
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#888888]">
                    Course Admissions 2026
                  </span>
                </div>

                <h3 className="font-sans font-light text-xl sm:text-2xl lg:text-[26px] text-white leading-snug">
                  Learn to author photography at this standard.
                </h3>

                <p className="font-sans text-xs sm:text-sm text-[#888888] leading-relaxed">
                  Join upcoming cohorts at Jyoti Bhawan. Receive darkroom clearance, high-output lighting equipment access, and individual project mentoring.
                </p>
              </div>

              <div className="flex items-baseline justify-between pt-4 sm:pt-5 border-t border-[#222222] gap-2">
                <span className="font-mono text-xs uppercase tracking-wider text-[#777777] truncate">
                  Tuition Investment
                </span>
                <span className="font-sans font-light text-xl sm:text-2xl text-[#ffd001] whitespace-nowrap tabular-nums shrink-0">
                  {course.payableFee}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5">
                <Link
                  href={`/courses/${course.slug}`}
                  className="inline-flex items-center justify-center gap-2 font-mono text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase bg-[#ffd001] text-black px-7 py-4 rounded-full hover:bg-white transition-all text-center leading-none shadow-md"
                >
                  <span>Explore Syllabus & Modules</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <Link
                  href={`/enroll?course=${course.slug}`}
                  className="inline-flex items-center justify-center gap-2 font-mono text-xs sm:text-sm font-normal tracking-[0.16em] uppercase bg-transparent text-[#fffef7] border border-white/20 px-7 py-3.5 rounded-full hover:border-[#ffd001] hover:text-[#ffd001] transition-all text-center leading-none"
                >
                  <span>Direct Enrollment</span>
                </Link>
              </div>

            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
