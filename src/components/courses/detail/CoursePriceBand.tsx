"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CourseItem } from "@/data/courses";

export interface CoursePriceBandProps {
  course: CourseItem;
}

export default function CoursePriceBand({ course }: CoursePriceBandProps): React.JSX.Element {
  // Estimated weekly hours based on course duration/intensity
  const weeklyHours =
    course.duration === "1 Month"
      ? "6 Hours / Week"
      : course.duration === "3 Months"
      ? "8 Hours / Week"
      : "10 Hours / Week";

  return (
    <section className="w-full py-8 sm:py-10 md:py-12 bg-[#fffef7]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        {/* Navy Ink Card: Single Dark Field on the Entire Page */}
        <div className="w-full bg-[#0c1322] text-[#fffef7] p-8 sm:p-10 md:p-12 lg:p-14 border border-white/10 shadow-[0_24px_64px_-16px_rgba(0,0,0,0.4)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* 4 Core Facts: 7 Columns */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 font-mono border-b lg:border-b-0 lg:border-r border-white/15 pb-8 lg:pb-0 lg:pr-8">
              <div>
                <span className="text-[11px] uppercase tracking-[0.18em] text-[#999999] block mb-1.5">
                  Duration
                </span>
                <span className="font-sans font-light text-xl sm:text-2xl text-white">
                  {course.duration}
                </span>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-[0.18em] text-[#999999] block mb-1.5">
                  Delivery Mode
                </span>
                <span className="font-sans font-light text-xl sm:text-2xl text-white">
                  {course.deliveryMode}
                </span>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-[0.18em] text-[#999999] block mb-1.5">
                  Commitment
                </span>
                <span className="font-sans font-light text-xl sm:text-2xl text-white">
                  {weeklyHours}
                </span>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-[0.18em] text-[#999999] block mb-1.5">
                  Cohort
                </span>
                <span className="font-sans font-light text-xl sm:text-2xl text-white">
                  {course.intake}
                </span>
              </div>
            </div>

            {/* Price & Primary Enroll Pill: 5 Columns */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex flex-col">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#ffd001] mb-1 font-medium">
                  Tuition Investment
                </span>
                <div className="flex items-baseline gap-3">
                  <span className="font-sans font-light text-3xl sm:text-4xl lg:text-[42px] text-white tabular-nums leading-none">
                    {course.payableFee}
                  </span>
                  {course.totalFee !== course.payableFee && (
                    <span className="font-mono text-sm sm:text-base text-white/50 line-through tabular-nums">
                      {course.totalFee}
                    </span>
                  )}
                  {course.discount && (
                    <span className="font-mono text-xs font-semibold text-[#ffd001] uppercase tracking-wider">
                      {course.discount}
                    </span>
                  )}
                </div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-white/50 mt-1.5">
                  Next intake: 1st of every month
                </span>
              </div>

              <Link
                href={`/enroll?course=${course.slug}`}
                className="inline-flex items-center justify-center gap-2 py-4 px-8 rounded-full bg-[#ffd001] hover:bg-white text-black font-mono text-xs sm:text-[13px] uppercase tracking-[0.16em] font-semibold transition-all active:scale-[0.98] shadow-md leading-none whitespace-nowrap"
              >
                <span>Enroll</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
