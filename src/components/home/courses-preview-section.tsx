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
  // Showcase all 5 authentic courses from IIP Nepal
  const displayCourses = courses && courses.length > 0 ? courses : ORIGINAL_COURSES;

  return (
    <section
      aria-label="Courses available at Kathmandu Centre"
      className="w-full bg-[var(--color-workshop-ivory)] py-24 sm:py-32 lg:py-40 border-b border-[var(--color-drafting-line)]"
    >
      {/* Spacious Container with Generous Screen Margins */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div className="max-w-3xl">
            <ScrollReveal yOffset={14} duration={0.5}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[1440px] border border-[var(--color-drafting-line)] bg-white/70 mb-6 text-[11px] font-mono uppercase tracking-[0.3px] text-[var(--color-faded-graphite)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-iip-yellow)]" aria-hidden="true" />
                Comprehensive Curriculum · 5 Core Programs
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1} yOffset={16} duration={0.6}>
              <h2 className="font-sans font-medium text-[var(--color-charcoal-ink)] text-[30px] sm:text-[38px] lg:text-[46px] leading-[1.1] tracking-[-1.5px] text-balance">
                Courses Available at Kathmandu Centre
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15} yOffset={14} duration={0.6}>
              <p className="font-sans text-[15px] sm:text-[16px] leading-relaxed text-[var(--color-quiet-graphite)] max-w-2xl mt-4">
                From 1-month mobile visual storytelling to our 6-month pro-level diploma, choose the right intensity and mentorship format for your photographic journey.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2} yOffset={12} duration={0.5}>
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 font-sans font-medium text-[15px] text-[var(--color-charcoal-ink)] hover:text-black group transition-colors self-start md:self-end pb-1.5"
            >
              <span className="group-hover:border-b-2 group-hover:border-[var(--color-iip-yellow)] transition-all">
                Explore course details
              </span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[var(--color-iip-yellow)]" aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </div>

        {/* 5-Course Grid (3 on top row, 2 on second row, clean balance and air) */}
        <ScrollReveal yOffset={24} duration={0.6} stagger={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-10">
            {displayCourses.map((course, idx) => (
              <div
                key={course.id}
                className="bg-[var(--color-drafting-line)] rounded-[20px] p-5 sm:p-6 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 hover:shadow-sm"
              >
                <div>
                  {/* 4:3 Course Image */}
                  <div className="relative aspect-[4/3] w-full rounded-[12px] overflow-hidden bg-black/10 mb-5">
                    <Image
                      src={course.coverImage}
                      alt={course.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Duration Badge */}
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-[1440px] bg-black/75 backdrop-blur-md text-white font-mono text-[10px] tracking-[0.3px] uppercase font-medium">
                      {course.duration}
                    </div>
                    {/* Course Index Pill */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-[1440px] bg-white/90 backdrop-blur-md text-[var(--color-charcoal-ink)] font-mono text-[10px] tracking-[0.2px] font-medium">
                      0{idx + 1}
                    </div>
                  </div>

                  {/* Course Type Label */}
                  <span className="font-mono text-[11px] uppercase tracking-[0.3px] text-[var(--color-quiet-graphite)] block mb-1.5">
                    {course.courseType}
                  </span>

                  {/* Title */}
                  <h3 className="font-sans font-medium text-[22px] sm:text-[24px] leading-[1.2] tracking-[-0.5px] text-[var(--color-charcoal-ink)] mb-2.5">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-[14px] leading-relaxed text-[var(--color-quiet-graphite)] mb-6">
                    {course.description}
                  </p>
                </div>

                {/* Card Footer: Metadata Row & Action Link */}
                <div className="pt-4 border-t border-[var(--color-drafting-line)]/80 flex items-center justify-between mt-2">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2px] text-[var(--color-faded-graphite)]">
                    {course.duration} · {course.level}
                  </span>

                  <Link
                    href={`/courses/${course.slug}`}
                    className="font-sans font-medium text-[14px] text-[var(--color-charcoal-ink)] inline-flex items-center gap-1.5 group/link"
                  >
                    <span className="group-hover/link:border-b-2 group-hover/link:border-[var(--color-iip-yellow)] transition-all">
                      View syllabus
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 text-[var(--color-charcoal-ink)]" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
