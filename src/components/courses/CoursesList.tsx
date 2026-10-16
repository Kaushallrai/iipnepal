"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import type { CourseItem } from "@/data/courses";

export interface CoursesListProps {
  courses: CourseItem[];
  isCompareMode?: boolean;
}

export default function CoursesList({
  courses,
  isCompareMode = false,
}: CoursesListProps): React.JSX.Element {
  if (courses.length === 0) {
    return (
      <div className="py-24 text-center bg-[#fffef7]">
        <p className="font-mono text-xs text-[#888888] uppercase tracking-wider">
          No courses found in this category.
        </p>
      </div>
    );
  }

  return (
    <section id="courses-catalog" className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-[#fffef7]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        {/* ============================================================ */}
        {/* DESKTOP-ONLY COMPARE TABLE VIEW                                */}
        {/* ============================================================ */}
        {isCompareMode ? (
          <div className="hidden lg:block w-full overflow-x-auto border border-[#e2e0d2] bg-[#fffef7] mb-12">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#e2e0d2] bg-[#fbf9f0] font-mono text-xs uppercase tracking-[0.16em] text-[#666666]">
                  <th className="py-4 px-6 font-semibold">Track</th>
                  <th className="py-4 px-6 font-semibold">Duration</th>
                  <th className="py-4 px-6 font-semibold">Mode</th>
                  <th className="py-4 px-6 font-semibold">Required Gear</th>
                  <th className="py-4 px-6 font-semibold">Level</th>
                  <th className="py-4 px-6 font-semibold">Tuition</th>
                  <th className="py-4 px-6 text-right font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e8e6d9] font-sans">
                {courses.map((course) => (
                  <tr
                    key={course.id}
                    className="hover:bg-[#f8f6ec] transition-colors group"
                  >
                    <td className="py-5 px-6">
                      <Link
                        href={`/courses/${course.slug}`}
                        className="font-light text-lg text-black hover:underline"
                      >
                        {course.title}
                      </Link>
                      <div className="font-mono text-[11px] text-[#777777] uppercase tracking-wider mt-0.5">
                        COURSE [{course.number}] // {course.keyOutcome}
                      </div>
                    </td>
                    <td className="py-5 px-6 font-mono text-xs text-[#444444]">
                      {course.duration}
                    </td>
                    <td className="py-5 px-6 font-mono text-xs text-[#444444]">
                      {course.deliveryMode}
                    </td>
                    <td className="py-5 px-6 font-mono text-xs text-[#555555] max-w-xs">
                      {course.equipment}
                    </td>
                    <td className="py-5 px-6 font-mono text-xs uppercase tracking-wider text-[#666666]">
                      {course.level}
                    </td>
                    <td className="py-5 px-6 whitespace-nowrap">
                      <div className="font-sans font-medium text-base text-black tabular-nums whitespace-nowrap">
                        {course.payableFee}
                      </div>
                      {course.totalFee !== course.payableFee && (
                        <div className="font-mono text-[11px] text-[#999999] line-through tabular-nums whitespace-nowrap">
                          {course.totalFee}
                        </div>
                      )}
                    </td>
                    <td className="py-5 px-6 text-right">
                      <Link
                        href={`/courses/${course.slug}`}
                        className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.14em] px-4 py-2 rounded-full bg-black text-[#fffef7] hover:bg-[#ffd001] hover:text-black transition-all"
                      >
                        <span>View course</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}

        {/* ============================================================ */}
        {/* UNIFORM EDITORIAL COURSE CARD GRID (Equal Size, Responsive)  */}
        {/* ============================================================ */}
        <div
          className={`${
            isCompareMode ? "lg:hidden" : ""
          } grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 items-stretch`}
        >
          {courses.map((course, idx) => {
            return (
              <ScrollReveal
                key={course.id}
                variant="fade-up"
                distance={20}
                duration={0.7}
                delay={(idx % 3) * 0.08}
                className="w-full flex"
              >
                <article
                  className="relative w-full h-full bg-[#fffef7] border border-[#e8e6d9] hover:border-black transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between group shadow-none cursor-pointer"
                  aria-label={`Course: ${course.title}`}
                >
                  {/* Top Bar: Course Number & Level Badge */}
                  <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-[#777777] mb-3">
                    <span className="font-semibold text-black">
                      COURSE [{course.number}]
                    </span>
                    <span className="bg-[#f2efe4] text-black px-2.5 py-0.5 rounded-full font-medium text-[10.5px] border border-[#e2e0d2]">
                      {course.level}
                    </span>
                  </div>

                  {/* Photo: Exact Uniform Aspect Ratio 16/10 across all cards */}
                  <div
                    className="relative block w-full aspect-[16/10] overflow-hidden bg-black mb-4 border border-[#e2e0d2]"
                    aria-hidden="true"
                  >
                    <Image
                      src={course.coverImage}
                      alt={course.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={idx === 0}
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Delivery Mode Tag */}
                    <div
                      className={`absolute top-2.5 left-2.5 font-mono text-[9.5px] sm:text-[10px] uppercase tracking-wider px-2.5 py-1 ${
                        course.deliveryMode.toLowerCase().includes("studio")
                          ? "bg-black text-[#ffd001] border border-[#ffd001]/40 font-semibold"
                          : "bg-black/85 text-white backdrop-blur-xs"
                      }`}
                    >
                      {course.deliveryMode}
                    </div>

                    {/* Discount Badge in Signal Yellow */}
                    {course.discount && (
                      <div className="absolute top-2.5 right-2.5 bg-[#ffd001] text-black font-mono text-[9.5px] sm:text-[10px] font-bold px-2.5 py-1 uppercase tracking-wider shadow-xs">
                        {course.discount}
                      </div>
                    )}
                  </div>

                  {/* Flexible Middle Content */}
                  <div className="flex-1 flex flex-col justify-start">
                    {/* Title with Stretched Link covering the entire card */}
                    <h2 className="font-sans font-light text-xl sm:text-[22px] leading-snug text-black mb-2 line-clamp-2 min-h-[3.2rem]">
                      <Link
                        href={`/courses/${course.slug}`}
                        className="hover:opacity-75 transition-opacity no-underline text-inherit"
                      >
                        <span className="absolute inset-0 z-0" aria-hidden="true" />
                        {course.title}
                      </Link>
                    </h2>

                    {/* Outcome / Synopsis */}
                    <p className="font-sans text-xs sm:text-[13.5px] text-[#555555] leading-relaxed line-clamp-2 mb-3.5 min-h-[2.4rem]">
                      {course.keyOutcome || course.description}
                    </p>

                    {/* Key Specs Breakdown */}
                    <div className="flex flex-col gap-1.5 pt-3 border-t border-[#f0eee3] mb-4 font-mono text-[11px] text-[#666666]">
                      <div className="flex items-center justify-between">
                        <span className="text-[#888888] uppercase tracking-wider text-[10px]">Duration:</span>
                        <span className="text-black font-medium">{course.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#888888] uppercase tracking-wider text-[10px]">Required Gear:</span>
                        <span className="text-black font-medium truncate max-w-[170px]" title={course.equipment}>
                          {course.equipment}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom: Tuition & Direct Action Pills */}
                  <div className="pt-3.5 border-t border-[#f0eee3] flex items-center justify-between gap-3 mt-auto">
                    {/* Pricing */}
                    <div className="flex flex-col min-w-0 shrink-0">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#888888] whitespace-nowrap">
                        Tuition
                      </span>
                      <div className="flex items-baseline gap-2 whitespace-nowrap flex-nowrap">
                        <span className="font-sans font-medium text-lg sm:text-xl text-black tabular-nums whitespace-nowrap">
                          {course.payableFee}
                        </span>
                        {course.totalFee !== course.payableFee && (
                          <span className="font-mono text-xs text-[#999999] line-through tabular-nums whitespace-nowrap">
                            {course.totalFee}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Actions: View is hidden on mobile, whole card navigates to course */}
                    <div className="relative z-10 flex items-center gap-2 shrink-0">
                      <Link
                        href={`/courses/${course.slug}`}
                        className="hidden sm:inline-flex items-center gap-1 font-mono text-xs uppercase tracking-[0.14em] px-3.5 py-2 rounded-full border border-black/20 hover:border-black bg-transparent text-black hover:bg-black hover:text-[#fffef7] transition-all font-medium text-center whitespace-nowrap min-h-[44px]"
                      >
                        <span>View</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                      <Link
                        href={`/enroll?course=${course.slug}`}
                        className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.14em] px-3.5 py-2 rounded-full bg-[#ffd001] hover:bg-black hover:text-[#fffef7] text-black font-semibold transition-all text-center leading-none shadow-xs whitespace-nowrap min-h-[44px]"
                      >
                        <span>Enroll</span>
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
