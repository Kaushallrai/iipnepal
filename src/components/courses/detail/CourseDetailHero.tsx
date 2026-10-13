"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowDown, Phone } from "lucide-react";
import type { CourseItem } from "@/data/courses";

export interface CourseDetailHeroProps {
  course: CourseItem;
}

export default function CourseDetailHero({ course }: CourseDetailHeroProps): React.JSX.Element {
  return (
    <section className="w-full pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-12 sm:pb-16 md:pb-20 border-b border-[#e2e0d2] bg-[#fffef7]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        
        {/* 1. Unified Archival Breadcrumb */}
        <div className="flex items-center justify-between gap-4 pb-4 mb-6 sm:mb-8 border-b border-[#e2e0d2] text-xs font-mono uppercase tracking-[0.22em] text-[#888888] select-none">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 min-w-0">
            <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block" />
            <Link href="/courses" className="hover:text-black transition-colors font-medium shrink-0">
              Courses Archive
            </Link>
            <span>/</span>
            <span className="text-black font-semibold truncate">
              {course.title}
            </span>
          </nav>

          <span className="text-black font-mono text-xs uppercase tracking-[0.22em] shrink-0 hidden sm:inline-block">
            Series [{course.number}] · {course.level.toUpperCase()} TRACK
          </span>
        </div>

        {/* 2. Unified Hero Title & Subheading Lockup (Exact alignment with catalog pages) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 pb-8 sm:pb-10 lg:pb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.16em] text-[#666666] mb-3">
              <span className="px-2.5 py-0.5 rounded-full bg-[#f2efe4] text-black font-semibold border border-[#e2e0d2]">
                {course.level.toUpperCase()} TRACK
              </span>
              <span>•</span>
              <span>{course.duration.toUpperCase()}</span>
              <span>•</span>
              <span>{course.deliveryMode}</span>
            </div>

            <h1 className="font-sans font-light text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.08] tracking-[-0.035em] text-black mb-3">
              {course.title}
            </h1>

            <p className="font-sans font-normal text-sm sm:text-base md:text-[17px] text-[#555555] leading-relaxed max-w-2xl">
              {course.keyOutcome || course.description}
            </p>
          </div>

          {/* Quick Action Lockup on Header */}
          <div className="shrink-0 flex items-center gap-4">
            <div className="text-left lg:text-right hidden sm:block">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#888888] block mb-0.5">
                Tuition Fee
              </span>
              <span className="font-sans font-light text-2xl sm:text-3xl leading-none text-black tabular-nums">
                {course.payableFee}
              </span>
            </div>
            <Link
              href={`/enroll?course=${course.slug}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-black text-[#fffef7] hover:bg-[#ffd001] hover:text-black font-mono text-xs uppercase tracking-[0.16em] font-semibold transition-colors cursor-pointer"
            >
              <span>Enroll Now</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 3. Balanced Blueprint Grid: Media Left + Full Specs Right */}
        <div className="pt-8 sm:pt-10 border-t border-[#e2e0d2] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-start">
          
          {/* LEFT: Photographic frame (3:2 camera aspect) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative w-full aspect-[3/2] overflow-hidden bg-black border border-[#e2e0d2]">
              <Image
                src={course.coverImage}
                alt={course.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center grayscale contrast-105"
              />

              <div className="absolute top-2.5 left-2.5 bg-black/90 text-white font-mono text-[9px] sm:text-[10px] uppercase tracking-wider px-2 py-0.5">
                {course.deliveryMode}
              </div>

              {course.discount && (
                <div className="absolute top-2.5 right-2.5 bg-[#ffd001] text-black font-mono text-[9px] sm:text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider">
                  {course.discount}
                </div>
              )}
            </div>

            <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-[#888888] uppercase tracking-wider">
              <span>Kathmandu Studio Track</span>
              <span className="text-black font-medium">{course.assignmentsCount}</span>
            </div>
          </div>

          {/* RIGHT: Course Specifications Matrix & Key Anchors */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            
            {/* 4-Item Program Specifications Ledger */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 py-5 border-y border-[#e2e0d2] font-mono">
              <div className="flex flex-col">
                <span className="text-[#888888] uppercase tracking-wider text-[10px] mb-1">
                  Duration
                </span>
                <span className="text-black font-semibold text-xs sm:text-sm">
                  {course.duration}
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-[#888888] uppercase tracking-wider text-[10px] mb-1">
                  Delivery
                </span>
                <span className="text-black font-semibold text-xs sm:text-sm">
                  {course.deliveryMode}
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-[#888888] uppercase tracking-wider text-[10px] mb-1">
                  Next Intake
                </span>
                <span className="text-black font-medium text-xs sm:text-sm">
                  {course.intake}
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-[#888888] uppercase tracking-wider text-[10px] mb-1">
                  Gear Needed
                </span>
                <span className="text-black font-medium text-xs sm:text-sm">
                  {course.equipment}
                </span>
              </div>
            </div>

            {/* Tuition Breakdown & Enrollment Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 pt-2">
              <div className="shrink-0">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#888888] block mb-1">
                  Full Program Tuition
                </span>
                <div className="flex items-baseline gap-2.5 whitespace-nowrap">
                  <span className="font-sans font-light text-2xl sm:text-3xl lg:text-[34px] leading-none text-black tabular-nums">
                    {course.payableFee}
                  </span>
                  {course.totalFee !== course.payableFee && (
                    <span className="font-mono text-xs sm:text-sm text-[#999999] line-through tabular-nums">
                      {course.totalFee}
                    </span>
                  )}
                  {course.discount && (
                    <span className="font-mono text-[10px] font-bold text-black bg-[#ffd001] px-2 py-0.5 rounded-full uppercase tracking-wider">
                      {course.discount}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
                <Link
                  href={`/enroll?course=${course.slug}`}
                  className="inline-flex items-center justify-center gap-1.5 py-3 px-5 sm:px-6 rounded-full bg-[#ffd001] hover:bg-black hover:text-[#fffef7] text-black font-mono text-xs uppercase tracking-[0.14em] font-semibold transition-all leading-none cursor-pointer whitespace-nowrap shadow-sm"
                >
                  <span>Enroll in Program</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href="#syllabus"
                  className="inline-flex items-center justify-center gap-1 py-3 px-3.5 sm:px-4 rounded-full bg-black/5 hover:bg-black hover:text-white text-black font-mono text-xs uppercase tracking-wider transition-all leading-none cursor-pointer whitespace-nowrap"
                >
                  <span>Syllabus</span>
                  <ArrowDown className="w-3 h-3" />
                </a>

                <a
                  href="tel:+9779802364760"
                  className="inline-flex items-center justify-center p-3 rounded-full bg-white border border-[#d8d6c8] hover:border-black text-black transition-colors shrink-0"
                  title="Phone Admissions"
                  aria-label="Call Admissions Desk"
                >
                  <Phone className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
