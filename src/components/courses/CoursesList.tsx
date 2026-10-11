"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import LineReveal from "@/components/animations/LineReveal";
import ScrollReveal from "@/components/animations/ScrollReveal";
import type { CourseItem } from "@/data/courses";

export interface CoursesListProps {
  courses: CourseItem[];
}

export default function CoursesList({ courses }: CoursesListProps): React.JSX.Element {
  if (courses.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="font-mono text-xs text-[#888888] uppercase tracking-wider">
          No courses found in this category.
        </p>
      </div>
    );
  }

  return (
    <section id="courses-catalog" className="w-full py-16 sm:py-20 md:py-24 lg:py-28 bg-[#fffef7]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        
        {/* Editorial Course Roster: Clean Rows with Hairline Separators (No Nested Box Cards) */}
        <div className="flex flex-col divide-y divide-[#e2e0d2]">
          {courses.map((course, idx) => {
            return (
              <ScrollReveal key={course.id} variant="fade-up" distance={20} duration={0.75} start="top 92%">
                <article
                  className="py-10 sm:py-12 md:py-16 lg:py-20 grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 xl:gap-18 items-center group"
                >
                {/* 1. Left: Photography (Sharp 0px, Compact on Mobile) */}
                <div className="md:col-span-5 lg:col-span-4">
                  <Link
                    href={`/courses/${course.slug}`}
                    className="relative block w-full aspect-[16/9] sm:aspect-[4/3] md:aspect-[16/11] max-h-[190px] sm:max-h-none overflow-hidden bg-black border border-[#e2e0d2]"
                  >
                    <Image
                      src={course.coverImage}
                      alt={course.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 35vw"
                      priority={idx === 0}
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Informative Delivery Mode Badge */}
                    <div
                      className={`absolute top-2.5 left-2.5 font-mono text-[9px] sm:text-[10px] uppercase tracking-widest px-2.5 py-1 ${
                        course.deliveryMode.toLowerCase().includes("studio")
                          ? "bg-black text-[#ffd001] border border-[#ffd001]/40 font-semibold"
                          : "bg-black/85 text-white"
                      }`}
                    >
                      {course.deliveryMode}
                    </div>

                    {course.discount && (
                      <div className="absolute top-2.5 right-2.5 bg-[#ffd001] text-black font-mono text-[9px] sm:text-[10px] font-semibold px-2.5 py-1 uppercase tracking-wider">
                        {course.discount}
                      </div>
                    )}
                  </Link>
                </div>

                {/* 2. Middle: Metadata, Title & Synopsis */}
                <div className="md:col-span-7 lg:col-span-5 flex flex-col gap-3.5 sm:gap-4 lg:gap-5">
                  {/* Meta Specs */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#777777]">
                    <span className="text-black font-semibold">[{course.number}]</span>
                    <span>/</span>
                    <span className="text-black font-medium">{course.level}</span>
                    <span>•</span>
                    <span
                      className={`font-medium ${
                        course.deliveryMode.toLowerCase().includes("studio")
                          ? "text-[#ca8a04]"
                          : "text-[#059669]"
                      }`}
                    >
                      {course.deliveryMode}
                    </span>
                    <span>•</span>
                    <span>{course.duration}</span>
                  </div>

                  {/* Title with LineReveal */}
                  <h2 className="font-sans font-light text-xl sm:text-2xl lg:text-[32px] xl:text-[36px] leading-tight text-black">
                    <Link
                      href={`/courses/${course.slug}`}
                      className="hover:opacity-75 transition-opacity no-underline text-inherit block"
                    >
                      <LineReveal
                        as="span"
                        lines={[course.title]}
                        className="font-sans font-light text-xl sm:text-2xl lg:text-[32px] xl:text-[36px] leading-tight text-black"
                      />
                    </Link>
                  </h2>

                  {/* Concise Description */}
                  <p className="font-sans font-normal text-xs sm:text-sm md:text-[15px] lg:text-[16px] text-[#555555] leading-relaxed line-clamp-2 sm:line-clamp-3 max-w-2xl">
                    {course.description}
                  </p>

                  {/* Key Specs for Rapid Comparison */}
                  <div className="flex flex-col gap-1.5 pt-2 border-t border-[#f0eee3] font-mono text-[11px] sm:text-xs">
                    <div className="flex items-center gap-2 text-[#555555]">
                      <span className="text-[#888888] uppercase tracking-wider text-[10px] shrink-0">EQUIPMENT:</span>
                      <span className="text-black font-medium truncate">{course.equipment}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#555555]">
                      <span className="text-[#888888] uppercase tracking-wider text-[10px] shrink-0">OUTCOME:</span>
                      <span className="text-black font-normal truncate">{course.keyOutcome}</span>
                    </div>
                  </div>
                </div>

                {/* 3. Right: Pricing & Direct Actions */}
                <div className="md:col-span-12 lg:col-span-3 flex items-center justify-between lg:flex-col lg:items-end lg:justify-center gap-5 sm:gap-6 lg:gap-7 pt-4 md:pt-0 border-t border-[#f0eee3] sm:border-t-0">
                  <div className="flex flex-col lg:items-end shrink-0">
                    <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#888888] mb-0.5">
                      Tuition
                    </span>
                    <div className="flex items-baseline gap-2.5 whitespace-nowrap shrink-0">
                      <span className="font-sans font-light text-lg sm:text-xl lg:text-2xl xl:text-3xl text-black whitespace-nowrap tabular-nums">
                        {course.payableFee}
                      </span>
                      {course.totalFee !== course.payableFee && (
                        <span className="font-mono text-xs text-[#999999] line-through whitespace-nowrap tabular-nums">
                          {course.totalFee}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 shrink-0">
                    <Link
                      href={`/courses/${course.slug}`}
                      className="inline-flex items-center gap-1 font-mono text-[11px] sm:text-xs uppercase tracking-[0.14em] text-black bg-black/5 hover:bg-black hover:text-[#fffef7] px-4 py-2.5 rounded-full transition-colors font-medium whitespace-nowrap leading-none"
                    >
                      <span>View Course</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      href={`/enroll?course=${course.slug}`}
                      className="inline-flex items-center gap-1 font-mono text-[11px] sm:text-xs uppercase tracking-[0.14em] text-black bg-[#ffd001] hover:bg-black hover:text-[#fffef7] px-4.5 py-2.5 rounded-full transition-colors font-semibold whitespace-nowrap leading-none"
                    >
                      <span>Enroll Now</span>
                    </Link>
                  </div>
                </div>

              </article>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
