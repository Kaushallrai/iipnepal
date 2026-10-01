"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { ORIGINAL_COURSES, CourseItem } from "@/lib/courses-data";

interface CoursesPreviewProps {
  courses?: CourseItem[];
}

export function CoursesPreviewSection({ courses }: CoursesPreviewProps) {
  const allCourses = courses && courses.length > 0 ? courses : ORIGINAL_COURSES;

  // Split into 2 flagship mentor-led diplomas (Top Row) and 3 foundation/online courses (Bottom Row)
  const flagshipCourses = allCourses.filter(
    (c) => c.slug.includes("pro-level") || c.courseType.includes("Mentor-Led")
  );
  const foundationCourses = allCourses.filter(
    (c) => !c.slug.includes("pro-level") && !c.courseType.includes("Mentor-Led")
  );

  return (
    <section
      aria-label="Courses available at Kathmandu Centre"
      className="w-full bg-[var(--color-workshop-ivory)] py-28 sm:py-36 lg:py-48 border-b border-[var(--color-drafting-line)]"
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header with Generous Separation */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-20 sm:mb-24 lg:mb-28">
          <div>
            <ScrollReveal yOffset={14} duration={0.5}>
              <span className="font-mono text-[11.5px] uppercase tracking-[0.25em] text-[var(--color-faded-graphite)] block mb-3">
                Curriculum · 5 Core Programs
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.08} yOffset={16} duration={0.6}>
              <h2 className="font-sans font-medium text-[var(--color-charcoal-ink)] text-[30px] sm:text-[38px] lg:text-[44px] leading-[1.12] tracking-[-1.2px]">
                Courses Available at Kathmandu Centre
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.16} yOffset={12} duration={0.5}>
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 font-sans font-medium text-[15px] text-[var(--color-charcoal-ink)] hover:text-black group transition-colors self-start sm:self-end pb-1.5"
            >
              <span className="group-hover:border-b-2 group-hover:border-[var(--color-iip-yellow)] transition-all">
                Explore all course syllabi
              </span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[var(--color-charcoal-ink)]" aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </div>

        {/* Row 1: Flagship Mentor-Led Diplomas (2 Columns, Wide & Prominent) */}
        <div className="mb-10 sm:mb-14">
          <ScrollReveal yOffset={20} duration={0.65} stagger={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
              {flagshipCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-[var(--color-drafting-line)] rounded-[20px] p-6 sm:p-8 flex flex-col justify-between group transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-sm"
                >
                  <div>
                    {/* 16:9 Aspect Ratio with generous bottom margin */}
                    <div className="relative aspect-[16/9] w-full rounded-[12px] overflow-hidden bg-black/10 mb-6 sm:mb-7">
                      <Image
                        src={course.coverImage}
                        alt={course.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-103"
                      />
                      <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-[1440px] bg-black/75 backdrop-blur-md text-white font-mono text-[10.5px] tracking-[0.25px] uppercase font-medium">
                        {course.duration}
                      </div>
                    </div>

                    <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-quiet-graphite)] block mb-2">
                      {course.courseType}
                    </span>

                    <h3 className="font-sans font-medium text-[22px] sm:text-[25px] leading-snug tracking-[-0.5px] text-[var(--color-charcoal-ink)] mb-3">
                      {course.title}
                    </h3>

                    <p className="font-sans text-[15px] leading-[1.7] text-[var(--color-quiet-graphite)] mb-6">
                      {course.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[var(--color-drafting-line)]/90 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-col">
                      <span className="font-mono text-[11.5px] uppercase tracking-[0.2px] text-[var(--color-faded-graphite)]">
                        {course.duration} · {course.level}
                      </span>
                      <span className="font-sans font-medium text-[13.5px] text-[var(--color-charcoal-ink)] mt-0.5">
                        {course.discount ? (
                          <>
                            <span className="line-through text-[var(--color-faded-graphite)] mr-2">{course.totalFee}</span>
                            <span>{course.payableFee}</span>
                            <span className="text-emerald-700 font-mono text-[11px] ml-1.5 font-normal">({course.discount})</span>
                          </>
                        ) : (
                          <span>Fee: {course.totalFee}</span>
                        )}
                      </span>
                    </div>

                    <Link
                      href={`/courses/${course.slug}`}
                      className="font-sans font-medium text-[14px] text-[var(--color-charcoal-ink)] inline-flex items-center gap-1.5 group/link"
                    >
                      <span className="group-hover/link:border-b-2 group-hover/link:border-[var(--color-iip-yellow)] transition-all">
                        View course
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 text-[var(--color-charcoal-ink)]" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Row 2: Foundation & Online Programs (3 Columns, Balanced Base) */}
        <div>
          <ScrollReveal yOffset={20} duration={0.65} stagger={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
              {foundationCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-[var(--color-drafting-line)] rounded-[20px] p-6 sm:p-7 flex flex-col justify-between group transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-sm"
                >
                  <div>
                    {/* 4:3 Aspect Ratio for Foundation/Online Courses */}
                    <div className="relative aspect-[4/3] w-full rounded-[12px] overflow-hidden bg-black/10 mb-5 sm:mb-6">
                      <Image
                        src={course.coverImage}
                        alt={course.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-103"
                      />
                      <div className="absolute top-3 right-3 px-3 py-1 rounded-[1440px] bg-black/75 backdrop-blur-md text-white font-mono text-[10.5px] tracking-[0.25px] uppercase font-medium">
                        {course.duration}
                      </div>
                    </div>

                    <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-quiet-graphite)] block mb-2">
                      {course.courseType}
                    </span>

                    <h3 className="font-sans font-medium text-[20px] sm:text-[21px] leading-snug tracking-[-0.4px] text-[var(--color-charcoal-ink)] mb-2.5">
                      {course.title}
                    </h3>

                    <p className="font-sans text-[14.5px] leading-[1.7] text-[var(--color-quiet-graphite)] mb-6">
                      {course.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[var(--color-drafting-line)]/90 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-col">
                      <span className="font-mono text-[11px] uppercase tracking-[0.2px] text-[var(--color-faded-graphite)]">
                        {course.duration} · {course.level}
                      </span>
                      <span className="font-sans font-medium text-[13px] text-[var(--color-charcoal-ink)] mt-0.5">
                        {course.discount ? (
                          <>
                            <span className="line-through text-[var(--color-faded-graphite)] mr-1.5">{course.totalFee}</span>
                            <span>{course.payableFee}</span>
                            <span className="text-emerald-700 font-mono text-[10.5px] ml-1 font-normal">({course.discount})</span>
                          </>
                        ) : (
                          <span>Fee: {course.totalFee}</span>
                        )}
                      </span>
                    </div>

                    <Link
                      href={`/courses/${course.slug}`}
                      className="font-sans font-medium text-[13.5px] text-[var(--color-charcoal-ink)] inline-flex items-center gap-1.5 group/link"
                    >
                      <span className="group-hover/link:border-b-2 group-hover/link:border-[var(--color-iip-yellow)] transition-all">
                        View course
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 text-[var(--color-charcoal-ink)]" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
