"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { ORIGINAL_COURSES, CourseItem } from "@/lib/courses-data";

interface CoursesPreviewProps {
  courses?: CourseItem[];
}

export function CoursesPreviewSection({ courses }: CoursesPreviewProps) {
  const allCourses = courses && courses.length > 0 ? courses : ORIGINAL_COURSES;
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"all" | "diploma" | "modular">("all");

  const flagshipCourses = allCourses.filter(
    (c) => c.slug.includes("pro-level") || c.courseType.includes("Mentor-Led")
  );
  const modularCourses = allCourses.filter(
    (c) => !c.slug.includes("pro-level") && !c.courseType.includes("Mentor-Led")
  );

  const displayedCourses =
    activeTab === "diploma"
      ? flagshipCourses
      : activeTab === "modular"
      ? modularCourses
      : allCourses;

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.85;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      aria-label="Courses available at Kathmandu Centre"
      className="w-full bg-[var(--color-bone-white)] py-24 sm:py-32 lg:py-40 border-b border-[var(--color-hairline)]"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 sm:mb-18 lg:mb-20">
          <div>
            <ScrollReveal yOffset={14} duration={0.5}>
              <span className="font-mono text-[12px] uppercase tracking-[0.25em] text-[var(--color-graphite)] block mb-3">
                Curriculum · 5 Core Programs
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.08} yOffset={16} duration={0.6}>
              <h2 className="font-sans font-light text-[var(--color-ink-black)] text-[30px] sm:text-[38px] lg:text-[54px] leading-[1.05] tracking-[-0.023em]">
                Courses Available at Kathmandu Centre
              </h2>
            </ScrollReveal>
          </div>

          <div className="flex items-center gap-4 self-start sm:self-end">
            {/* Tablet/Mobile Carousel Controls */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => scrollCarousel("left")}
                aria-label="Previous courses"
                className="w-9 h-9 rounded-full border border-[var(--color-ash)] hover:border-[var(--color-ink-black)] flex items-center justify-center text-[var(--color-ink-black)] transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollCarousel("right")}
                aria-label="Next courses"
                className="w-9 h-9 rounded-full border border-[var(--color-ash)] hover:border-[var(--color-ink-black)] flex items-center justify-center text-[var(--color-ink-black)] transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <ScrollReveal delay={0.16} yOffset={12} duration={0.5}>
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 font-sans font-normal text-[15px] text-[var(--color-ink-black)] group transition-colors pb-1"
              >
                <span className="group-hover:border-b-2 group-hover:border-[var(--color-iip-yellow)] transition-all">
                  Explore all course syllabi
                </span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[var(--color-ink-black)]" aria-hidden="true" />
              </Link>
            </ScrollReveal>
          </div>
        </div>

        {/* Category Filter Pills (Editorial interactive selection) */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          <button
            type="button"
            onClick={() => setActiveTab("all")}
            className={`font-mono text-[12px] uppercase tracking-[0.15em] py-2 px-5 rounded-[1440px] transition-all whitespace-nowrap ${
              activeTab === "all"
                ? "bg-[var(--color-ink-black)] text-[var(--color-bone-white)]"
                : "border border-[var(--color-ash)] text-[var(--color-ink-black)] hover:border-[var(--color-ink-black)]"
            }`}
          >
            All Courses (5)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("diploma")}
            className={`font-mono text-[12px] uppercase tracking-[0.15em] py-2 px-5 rounded-[1440px] transition-all whitespace-nowrap ${
              activeTab === "diploma"
                ? "bg-[var(--color-ink-black)] text-[var(--color-bone-white)]"
                : "border border-[var(--color-ash)] text-[var(--color-ink-black)] hover:border-[var(--color-ink-black)]"
            }`}
          >
            Mentor-Led Diplomas (2)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("modular")}
            className={`font-mono text-[12px] uppercase tracking-[0.15em] py-2 px-5 rounded-[1440px] transition-all whitespace-nowrap ${
              activeTab === "modular"
                ? "bg-[var(--color-ink-black)] text-[var(--color-bone-white)]"
                : "border border-[var(--color-ash)] text-[var(--color-ink-black)] hover:border-[var(--color-ink-black)]"
            }`}
          >
            Foundation & Mobile (3)
          </button>
        </div>

        {/* Mobile & Tablet: Horizontal Touch Snap Carousel / Desktop: Editorial Grid */}
        <div
          ref={carouselRef}
          className="flex lg:grid lg:grid-cols-12 gap-8 lg:gap-12 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory pb-6 scrollbar-none"
        >
          {displayedCourses.map((course, index) => {
            const isFlagship = course.slug.includes("pro-level") || course.courseType.includes("Mentor-Led");
            // Grid column span for desktop: 2 flagships take 6 cols each; 3 modular take 4 cols each
            const colSpan =
              activeTab === "all"
                ? index < 2
                  ? "lg:col-span-6"
                  : "lg:col-span-4"
                : activeTab === "diploma"
                ? "lg:col-span-6"
                : "lg:col-span-4";

            return (
              <div
                key={course.id}
                className={`${colSpan} min-w-[290px] sm:min-w-[340px] md:min-w-[380px] lg:min-w-0 snap-start flex-shrink-0 lg:flex-shrink flex flex-col justify-between group`}
              >
                <div>
                  {/* Sharp 0px Image Frame — No AI bento curves or fake shadows */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/5 mb-5 border border-[var(--color-hairline)]">
                    <Image
                      src={course.coverImage}
                      alt={course.title}
                      fill
                      sizes="(max-width: 768px) 85vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-103"
                    />
                    <div className="absolute top-3 right-3 px-3 py-1 bg-black/80 text-white font-mono text-[10.5px] uppercase tracking-[0.2em]">
                      {course.duration}
                    </div>
                  </div>

                  {/* 12px All-Caps Context Eyebrow */}
                  <span className="font-mono text-[11.5px] uppercase tracking-[0.2em] text-[var(--color-graphite)] block mb-2">
                    {course.courseType}
                  </span>

                  {/* 20px Weight 300 Title */}
                  <h3 className="font-sans font-light text-[20px] sm:text-[22px] leading-snug tracking-[-0.018em] text-[var(--color-ink-black)] mb-2.5">
                    {course.title}
                  </h3>

                  {/* 14px Graphite Description, 3-line clamp */}
                  <p className="font-sans text-[14.5px] leading-[1.65] text-[var(--color-graphite)] line-clamp-3 mb-6">
                    {course.description}
                  </p>
                </div>

                {/* Bottom Metadata & Links */}
                <div className="pt-4 border-t border-[var(--color-hairline)] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-col">
                    <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--color-ash)]">
                      {course.duration} · {course.level}
                    </span>
                    <span className="font-sans font-normal text-[14px] text-[var(--color-ink-black)] mt-0.5">
                      {course.discount ? (
                        <>
                          <span className="line-through text-[var(--color-ash)] mr-2">{course.totalFee}</span>
                          <span>{course.payableFee}</span>
                          <span className="text-emerald-800 font-mono text-[11px] ml-1.5 font-normal">({course.discount})</span>
                        </>
                      ) : (
                        <span>Fee: {course.totalFee}</span>
                      )}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Link
                      href={`/courses/${course.slug}`}
                      className="font-sans font-normal text-[14px] text-[var(--color-ink-black)] inline-flex items-center gap-1 group/link"
                    >
                      <span className="group-hover/link:border-b-2 group-hover/link:border-[var(--color-iip-yellow)] transition-all">
                        View course
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" aria-hidden="true" />
                    </Link>

                    <Link
                      href="/enroll"
                      className="hidden sm:inline-flex font-sans font-normal text-[12.5px] py-1.5 px-3.5 rounded-[1440px] bg-[var(--color-iip-yellow)] text-[var(--color-ink-black)] hover:bg-[#f5bc14] transition-colors"
                    >
                      Enroll
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex lg:hidden items-center justify-center gap-2 pt-4 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-ash)]">
          <span>← Swipe horizontally to browse courses →</span>
        </div>
      </div>
    </section>
  );
}
