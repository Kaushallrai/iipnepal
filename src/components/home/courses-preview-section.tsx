"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { ORIGINAL_COURSES, CourseItem } from "@/lib/courses-data";

interface CoursesPreviewProps {
  courses?: CourseItem[];
}

export function CoursesPreviewSection({ courses }: CoursesPreviewProps) {
  // Use provided courses or filter the 3 featured courses from authentic dataset
  const displayCourses =
    courses && courses.length > 0
      ? courses.slice(0, 3)
      : ORIGINAL_COURSES.filter((c) => c.featured).slice(0, 3);

  return (
    <section
      aria-label="Courses available at Kathmandu Centre"
      className="w-full bg-[var(--color-workshop-ivory)] py-20 sm:py-24 lg:py-32 border-b border-[var(--color-drafting-line)]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <ScrollReveal yOffset={14} duration={0.5}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[1440px] border border-[var(--color-drafting-line)] bg-white/60 mb-5 text-[11px] font-mono uppercase tracking-[0.3px] text-[var(--color-faded-graphite)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-iip-yellow)]" aria-hidden="true" />
                Curriculum
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1} yOffset={16} duration={0.6}>
              <h2 className="font-sans font-medium text-[var(--color-charcoal-ink)] text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.12] tracking-[-1.2px] text-balance">
                Courses Available at Kathmandu Centre
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.15} yOffset={12} duration={0.5}>
            <Link
              href="/courses"
              className="inline-flex items-center gap-1.5 font-sans font-medium text-[15px] text-[var(--color-charcoal-ink)] hover:text-black group transition-colors self-start md:self-end pb-1"
            >
              <span className="group-hover:border-b-2 group-hover:border-[var(--color-iip-yellow)] transition-all">
                Explore all courses
              </span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </div>

        {/* 3-Column Course Card Grid */}
        <ScrollReveal yOffset={24} duration={0.6} stagger={0.12}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {displayCourses.map((course) => (
              <div
                key={course.id}
                className="bg-[var(--color-drafting-line)] rounded-[16px] p-3 flex flex-col justify-between group transition-transform duration-200 hover:-translate-y-1"
              >
                {/* 4:3 Course Image */}
                <div>
                  <div className="relative aspect-[4/3] w-full rounded-[8px] overflow-hidden bg-black/10 mb-4">
                    <Image
                      src={course.coverImage}
                      alt={course.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-[1440px] bg-black/65 backdrop-blur-sm text-white font-mono text-[10px] tracking-[0.2px] uppercase">
                      {course.duration}
                    </div>
                  </div>

                  {/* Course Type Label */}
                  <span className="font-mono text-[11px] uppercase tracking-[0.3px] text-[var(--color-quiet-graphite)] block mb-1">
                    {course.courseType}
                  </span>

                  {/* Title */}
                  <h3 className="font-sans font-medium text-[22px] sm:text-[24px] leading-[1.2] tracking-[-0.5px] text-[var(--color-charcoal-ink)] mb-2">
                    {course.title}
                  </h3>

                  {/* One-line Description */}
                  <p className="font-sans text-[14px] leading-relaxed text-[var(--color-quiet-graphite)] mb-4">
                    {course.description}
                  </p>
                </div>

                {/* Card Footer: Metadata Row & Action Link */}
                <div className="pt-3 border-t border-[var(--color-drafting-line)]/80 flex items-center justify-between mt-2">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2px] text-[var(--color-faded-graphite)]">
                    {course.duration} · {course.level}
                  </span>

                  <Link
                    href={`/courses/${course.slug}`}
                    className="font-sans font-medium text-[14px] text-[var(--color-charcoal-ink)] inline-flex items-center gap-1 group/link"
                  >
                    <span className="group-hover/link:border-b-2 group-hover/link:border-[var(--color-iip-yellow)] transition-all">
                      View course
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" aria-hidden="true" />
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
