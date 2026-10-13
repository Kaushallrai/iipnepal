"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Phone, ArrowDown } from "lucide-react";
import type { CourseItem } from "@/data/courses";
import LineReveal from "@/components/animations/LineReveal";

export interface CourseDetailHeroProps {
  course: CourseItem;
}

export default function CourseDetailHero({ course }: CourseDetailHeroProps): React.JSX.Element {
  return (
    <section className="w-full pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-12 sm:pb-14 border-b border-[#e2e0d2] bg-[#fffef7]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        
        {/* Breadcrumb & Level Reference */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 sm:pb-6 border-b border-[#e2e0d2] text-xs font-mono uppercase tracking-[0.18em] text-[#888888]">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2.5">
            <Link href="/courses" className="hover:text-black transition-colors font-medium">
              Courses
            </Link>
            <span>/</span>
            <span className="text-black font-semibold truncate max-w-[200px] sm:max-w-none">
              {course.title}
            </span>
          </nav>

          <div className="text-black font-medium">
            <span>COURSE [{course.number}] // {course.level.toUpperCase()}</span>
          </div>
        </div>

        {/* Title & Tagline */}
        <div className="pt-6 sm:pt-8 pb-6 sm:pb-8 max-w-5xl">
          <LineReveal
            as="h1"
            lines={[course.title]}
            className="font-sans font-light text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[60px] leading-[1.08] tracking-[-0.035em] text-black mb-3"
          />

          <p className="font-mono text-xs sm:text-sm text-[#555555] tracking-[0.04em] uppercase leading-relaxed max-w-3xl">
            {course.tagline || course.keyOutcome}
          </p>
        </div>

        {/* Hero Card: Image On Top, Key Specs & Actions Directly Below It */}
        <div className="w-full border border-[#e2e0d2] bg-[#fbf9f0] overflow-hidden flex flex-col">
          
          {/* 1. Large Unobstructed Image Frame */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] lg:aspect-[16/7.5] overflow-hidden bg-black">
            <Image
              src={course.coverImage}
              alt={course.title}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />

            {/* Clean delivery badge */}
            <div className="absolute top-4 left-4 bg-black/85 text-white font-mono text-[10px] uppercase tracking-wider px-3 py-1">
              {course.deliveryMode.toUpperCase()}
            </div>

            {/* Discount pill if available */}
            {course.discount && (
              <div className="absolute top-4 right-4 bg-[#ffd001] text-black font-mono text-[11px] font-bold px-3 py-1 uppercase tracking-wider shadow-xs">
                {course.discount}
              </div>
            )}
          </div>

          {/* 2. Key Specs & Enrollment Ribbon Directly Below Image */}
          <div className="p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 border-t border-[#eae8dc]">
            
            {/* 4 Core Specifications in clean scannable columns */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 font-mono text-xs">
              <div>
                <span className="text-[#888888] uppercase tracking-wider block text-[10px] mb-1">
                  Duration
                </span>
                <span className="text-black font-semibold text-sm sm:text-base">
                  {course.duration}
                </span>
              </div>

              <div>
                <span className="text-[#888888] uppercase tracking-wider block text-[10px] mb-1">
                  Format
                </span>
                <span className="text-black font-semibold text-sm sm:text-base">
                  {course.deliveryMode}
                </span>
              </div>

              <div>
                <span className="text-[#888888] uppercase tracking-wider block text-[10px] mb-1">
                  Cohort Intake
                </span>
                <span className="text-black font-semibold text-sm sm:text-base">
                  {course.intake}
                </span>
              </div>

              <div>
                <span className="text-[#888888] uppercase tracking-wider block text-[10px] mb-1">
                  Required Gear
                </span>
                <span className="text-black font-medium text-xs sm:text-[13px] truncate block" title={course.equipment}>
                  {course.equipment}
                </span>
              </div>
            </div>

            {/* Pricing & Direct CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-4 lg:pt-0 border-t lg:border-t-0 border-[#eae8dc]">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#888888] block">
                  Tuition Investment
                </span>
                <div className="flex items-baseline gap-2.5">
                  <span className="font-sans font-medium text-2xl sm:text-3xl text-black tabular-nums">
                    {course.payableFee}
                  </span>
                  {course.totalFee !== course.payableFee && (
                    <span className="font-mono text-xs text-[#999999] line-through tabular-nums">
                      {course.totalFee}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Link
                  href={`/enroll?course=${course.slug}`}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#ffd001] hover:bg-black hover:text-[#fffef7] text-black font-mono text-xs uppercase tracking-[0.16em] font-semibold transition-all shadow-xs leading-none whitespace-nowrap cursor-pointer"
                >
                  <span>Enroll in Track</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href="#syllabus"
                  className="inline-flex items-center justify-center gap-1.5 py-3.5 px-4 rounded-full bg-black/5 hover:bg-black hover:text-white text-black font-mono text-xs uppercase tracking-wider transition-all leading-none cursor-pointer"
                  title="Jump to Syllabus"
                >
                  <span>Syllabus</span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </a>

                <a
                  href="tel:+9779802364760"
                  className="inline-flex items-center justify-center p-3.5 rounded-full bg-white border border-[#d8d6c8] hover:border-black text-black transition-colors"
                  title="Phone inquiry +977 9802364760"
                >
                  <Phone className="w-3.5 h-3.5 text-black" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
