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
      className="w-full bg-[var(--color-workshop-ivory)] py-18 sm:py-20 lg:py-24 border-b border-[var(--color-drafting-line)]"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div>
            <ScrollReveal yOffset={12} duration={0.5}>
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-faded-graphite)] block mb-2">
                Curriculum · 5 Core Programs
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.08} yOffset={14} duration={0.6}>
              <h2 className="font-sans font-medium text-[var(--color-charcoal-ink)] text-[26px] sm:text-[32px] lg:text-[36px] leading-[1.15] tracking-[-1px]">
                Courses Available at Kathmandu Centre
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.14} yOffset={10} duration={0.5}>
            <Link
              href="/courses"
              className="inline-flex items-center gap-1.5 font-sans font-medium text-[14px] text-[var(--color-charcoal-ink)] hover:text-black group transition-colors self-start sm:self-end pb-1"
            >
              <span className="group-hover:border-b-2 group-hover:border-[var(--color-iip-yellow)] transition-all">
                Explore all courses
              </span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </div>

        {/* Row 1: Flagship Mentor-Led Programs (2 Columns, Prominent Editorial Presence) */}
        <div className="mb-8 sm:mb-10">
          <ScrollReveal yOffset={18} duration={0.6} stagger={0.08}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {flagshipCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-[var(--color-drafting-line)] rounded-[16px] p-4 sm:p-5 flex flex-col justify-between group transition-transform duration-250 hover:-translate-y-0.5"
                >
                  <div>
                    {/* 16:9 Aspect Ratio for Flagship Diplomas */}
                    <div className="relative aspect-[16/9] w-full rounded-[10px] overflow-hidden bg-black/10 mb-4">
                      <Image
                        src={course.coverImage}
                        alt={course.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-103"
                      />
                      <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-[1440px] bg-black/70 backdrop-blur-sm text-white font-mono text-[10px] tracking-[0.2px] uppercase">
                        {course.duration}
                      </div>
                    </div>

                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-quiet-graphite)] block mb-1">
                      {course.courseType}
                    </span>

                    <h3 className="font-sans font-medium text-[20px] sm:text-[22px] leading-snug tracking-[-0.4px] text-[var(--color-charcoal-ink)] mb-2">
                      {course.title}
                    </h3>

                    <p className="font-sans text-[14px] leading-relaxed text-[var(--color-quiet-graphite)] mb-4">
                      {course.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[var(--color-drafting-line)]/90 flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-[0.2px] text-[var(--color-faded-graphite)]">
                      {course.duration} · {course.level}
                    </span>

                    <Link
                      href={`/courses/${course.slug}`}
                      className="font-sans font-medium text-[13px] text-[var(--color-charcoal-ink)] inline-flex items-center gap-1 group/link"
                    >
                      <span className="group-hover/link:border-b-2 group-hover/link:border-[var(--color-iip-yellow)] transition-all">
                        View details
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Row 2: Foundation & Online Programs (3 Columns, Balanced Base) */}
        <div>
          <ScrollReveal yOffset={18} duration={0.6} stagger={0.08}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {foundationCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-[var(--color-drafting-line)] rounded-[16px] p-4 sm:p-5 flex flex-col justify-between group transition-transform duration-250 hover:-translate-y-0.5"
                >
                  <div>
                    {/* 4:3 Aspect Ratio for Foundation/Online Courses */}
                    <div className="relative aspect-[4/3] w-full rounded-[10px] overflow-hidden bg-black/10 mb-4">
                      <Image
                        src={course.coverImage}
                        alt={course.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-103"
                      />
                      <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-[1440px] bg-black/70 backdrop-blur-sm text-white font-mono text-[10px] tracking-[0.2px] uppercase">
                        {course.duration}
                      </div>
                    </div>

                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-quiet-graphite)] block mb-1">
                      {course.courseType}
                    </span>

                    <h3 className="font-sans font-medium text-[19px] sm:text-[20px] leading-snug tracking-[-0.4px] text-[var(--color-charcoal-ink)] mb-2">
                      {course.title}
                    </h3>

                    <p className="font-sans text-[13.5px] leading-relaxed text-[var(--color-quiet-graphite)] mb-4">
                      {course.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[var(--color-drafting-line)]/90 flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-[0.2px] text-[var(--color-faded-graphite)]">
                      {course.duration} · {course.level}
                    </span>

                    <Link
                      href={`/courses/${course.slug}`}
                      className="font-sans font-medium text-[13px] text-[var(--color-charcoal-ink)] inline-flex items-center gap-1 group/link"
                    >
                      <span className="group-hover/link:border-b-2 group-hover/link:border-[var(--color-iip-yellow)] transition-all">
                        View details
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" aria-hidden="true" />
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
