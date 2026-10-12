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

const ASPECT_RATIOS = [
  "aspect-[4/3]",
  "aspect-[16/10]",
  "aspect-[4/3.8]",
  "aspect-[16/11]",
  "aspect-[4/3]",
];

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
          <div className="hidden lg:block w-full overflow-x-auto border border-[#e2e0d2] bg-[#fffef7]">
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
                        {course.number} // {course.keyOutcome}
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
                    <td className="py-5 px-6">
                      <div className="font-sans font-normal text-base text-black tabular-nums">
                        {course.payableFee}
                      </div>
                      {course.totalFee !== course.payableFee && (
                        <div className="font-mono text-[11px] text-[#999999] line-through tabular-nums">
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
        {/* ASYMMETRIC MASONRY GRID VIEW (D 3-col, T 2-col, M 1-col)      */}
        {/* Visible when not in compare mode, or on screens < lg           */}
        {/* ============================================================ */}
        <div
          className={`${
            isCompareMode ? "lg:hidden" : ""
          } grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 items-start`}
        >
          {courses.map((course, idx) => {
            const aspectClass = ASPECT_RATIOS[idx % ASPECT_RATIOS.length];
            const isFeatured = idx === 0 || idx === 3;

            return (
              <ScrollReveal
                key={course.id}
                variant="fade-up"
                distance={20}
                duration={0.7}
                delay={(idx % 3) * 0.1}
                className="w-full"
              >
                <Link
                  href={`/courses/${course.slug}`}
                  className={`group block w-full bg-[#fffef7] border border-[#e8e6d9] hover:border-black transition-all p-5 sm:p-6 no-underline text-inherit ${
                    isFeatured ? "bg-[#fdfcf5]" : ""
                  }`}
                  aria-label={`View ${course.title}`}
                >
                  {/* Photo: Sharp 0px, varied editorial ratio, no badges on top */}
                  <div className={`relative w-full ${aspectClass} overflow-hidden bg-black mb-5 border border-[#ece9db]`}>
                    <Image
                      src={course.coverImage}
                      alt={course.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={idx === 0}
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-104"
                    />
                  </div>

                  {/* Course Number & Category Metadata */}
                  <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-[#777777] mb-2.5">
                    <span className="font-semibold text-black">
                      COURSE {course.number}
                    </span>
                    <span>{course.level}</span>
                  </div>

                  {/* Title: 20px 300 Light */}
                  <h2 className="font-sans font-light text-[20px] leading-tight text-black mb-2 group-hover:text-black">
                    {course.title}
                  </h2>

                  {/* One-line outcome: 14px Graphite */}
                  <p className="font-sans text-[14px] text-[#666666] leading-normal line-clamp-1 mb-4">
                    {course.keyOutcome}
                  </p>

                  {/* Duration and Mode on one line */}
                  <div className="font-mono text-xs uppercase tracking-[0.14em] text-[#777777] pb-4 mb-4 border-b border-[#f0eee3]">
                    {course.duration} • {course.deliveryMode}
                  </div>

                  {/* Tuition & Single Action Pill */}
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-baseline gap-2">
                      <span className="font-sans font-normal text-lg sm:text-xl text-black tabular-nums">
                        {course.payableFee}
                      </span>
                      {course.totalFee !== course.payableFee && (
                        <span className="font-mono text-xs text-[#999999] line-through tabular-nums">
                          {course.totalFee}
                        </span>
                      )}
                    </div>

                    {/* Single View course pill */}
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.14em] bg-black text-[#fffef7] group-hover:bg-[#ffd001] group-hover:text-black px-4 py-2 rounded-full transition-all shrink-0">
                      <span>View course</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
