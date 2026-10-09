"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import LineReveal from "@/components/animations/LineReveal";
import type { CourseItem } from "@/data/courses";

export interface CourseEnrollCtaProps {
  course: CourseItem;
}

export default function CourseEnrollCta({ course }: CourseEnrollCtaProps): React.JSX.Element {
  return (
    <section
      data-theme="dark"
      className="section_course-enroll-cta w-full bg-[#0a0a0a] text-[#fffef7] py-20 sm:py-24 md:py-28 lg:py-32 select-none border-t border-[#222222]"
    >
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 lg:gap-16">
          
          <div className="max-w-3xl flex flex-col items-start">
            <div className="flex items-center gap-2 mb-3 sm:mb-4 select-none">
              <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block" />
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#888888] font-medium">
                Admissions 2026 // {course.level} Track
              </span>
            </div>

            <LineReveal
              as="h2"
              className="font-sans font-light text-2xl sm:text-3xl md:text-4xl lg:text-[56px] xl:text-[62px] leading-[1.08] tracking-[-0.035em] text-[#fffef7] mb-3 sm:mb-4"
              lines={[`Ready to Enroll in the ${course.title}?`]}
            />

            <p className="font-sans font-normal text-sm sm:text-base md:text-lg text-[#aaaaaa] max-w-2xl leading-relaxed">
              Complete your online registration to receive personal portal credentials
              within 24 hours. Connect with your mentor and begin your structured photography training.
            </p>

            <span className="font-mono text-xs sm:text-[13px] text-[#ffd001] tracking-wider flex items-center gap-3 flex-wrap pt-1">
              <span>Tuition:</span>
              <strong className="text-white font-medium text-sm sm:text-base whitespace-nowrap tabular-nums">{course.payableFee}</strong>
              <span className="text-[#888888]">• 100% Satisfaction Guarantee</span>
            </span>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 shrink-0">
            <Link
              href={`/enroll?course=${course.slug}`}
              className="inline-flex items-center justify-center gap-2 font-mono text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase bg-[#ffd001] text-black px-9 py-4 rounded-full hover:bg-white transition-all shadow-md text-center leading-none"
            >
              <span>Enroll in This Program</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href="tel:+9779802364760"
              className="inline-flex items-center justify-center gap-2 font-mono text-xs sm:text-sm font-normal tracking-[0.16em] uppercase bg-transparent text-[#fffef7] border border-white/20 px-9 py-4 rounded-full hover:border-[#ffd001] hover:text-[#ffd001] transition-all text-center leading-none"
            >
              <Phone className="w-3.5 h-3.5 text-[#ffd001]" />
              <span>Call: +977 9802364760</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
