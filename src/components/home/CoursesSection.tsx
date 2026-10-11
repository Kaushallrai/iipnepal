"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Mousewheel } from "swiper/modules";
import type { Swiper as SwiperCore } from "swiper";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LineReveal from "@/components/animations/LineReveal";
import { homeCoursesData, type HomeCourseItem } from "@/data/home/courses";

import "swiper/css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export type CourseItem = HomeCourseItem;

export const COURSES_LIST: CourseItem[] = homeCoursesData.courses;

export interface CoursesSectionProps {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  courses?: CourseItem[];
}

export default function CoursesSection({
  eyebrow = homeCoursesData.eyebrow,
  heading = homeCoursesData.heading,
  subheading = homeCoursesData.subheading,
  courses = homeCoursesData.courses,
}: CoursesSectionProps): React.JSX.Element {
  const sectionRef = useRef<HTMLElement>(null);
  const pinnedRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const stageElementsRef = useRef<HTMLDivElement>(null);
  const viewAllBtnRef = useRef<HTMLDivElement>(null);
  const polaroidColRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const courseRowsRef = useRef<(HTMLDivElement | null)[]>([]);

  const [scrollIndex, setScrollIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Swiper state for mobile & tablet peek carousel
  const swiperInstanceRef = useRef<SwiperCore | null>(null);
  const [swiperActiveIndex, setSwiperActiveIndex] = useState(0);

  // Active index prioritized by hover, falling back to scroll position on desktop
  const activeIndex = hoveredIndex !== null ? hoveredIndex : scrollIndex;

  // Jump smoothly to a specific course
  const handleJumpToCourse = useCallback(
    (index: number) => {
      setHoveredIndex(null);
      setScrollIndex(index);

      if (scrollTriggerRef.current) {
        const st = scrollTriggerRef.current;
        const total = courses.length;
        // Target exact snap point for each course (aligned with rail notches)
        const targetScroll =
          st.start + (index / (total - 1)) * (st.end - st.start);

        const lenis = (window as unknown as { lenis?: { scrollTo: (target: number, opts?: { duration?: number }) => void } }).lenis;
        if (lenis && typeof lenis.scrollTo === "function") {
          lenis.scrollTo(targetScroll, { duration: 0.5 });
        } else {
          window.scrollTo({
            top: targetScroll,
            behavior: "smooth",
          });
        }
      }
    },
    [courses.length]
  );

  const handleNextCourse = useCallback(() => {
    if (typeof window !== "undefined" && window.innerWidth < 1024 && swiperInstanceRef.current) {
      swiperInstanceRef.current.slideNext();
    } else {
      const nextIdx = Math.min(courses.length - 1, activeIndex + 1);
      handleJumpToCourse(nextIdx);
    }
  }, [activeIndex, courses.length, handleJumpToCourse]);

  const handlePrevCourse = useCallback(() => {
    if (typeof window !== "undefined" && window.innerWidth < 1024 && swiperInstanceRef.current) {
      swiperInstanceRef.current.slidePrev();
    } else {
      const prevIdx = Math.max(0, activeIndex - 1);
      handleJumpToCourse(prevIdx);
    }
  }, [activeIndex, handleJumpToCourse]);

  // Set up pinning and scroll-based course progression on desktop screens
  useEffect(() => {
    if (!sectionRef.current || !pinnedRef.current) return;

    const mm = gsap.matchMedia();

    // Desktop pinning experience (screens >= 1024px)
    mm.add("(min-width: 1024px)", () => {
      const totalCourses = courses.length;

      const st = ScrollTrigger.create({
        trigger: sectionRef.current,
        pin: pinnedRef.current,
        start: "top top",
        end: () => `+=${(totalCourses - 1) * 280}`,
        scrub: 0.25,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress;
          setScrollProgress(progress);

          // Divide scroll range into equal segments centered on snap notches
          const courseProgress = progress * (totalCourses - 1);
          const clampedIdx = Math.max(
            0,
            Math.min(totalCourses - 1, Math.round(courseProgress))
          );
          setScrollIndex(clampedIdx);
        },
      });

      scrollTriggerRef.current = st;

      return () => {
        st.kill();
        scrollTriggerRef.current = null;
      };
    });

    return () => {
      mm.revert();
    };
  }, [courses.length]);

  // GSAP entrance motion animation for stage elements, Polaroid, and course list
  useEffect(() => {
    const polaroidEl = polaroidColRef.current;
    const railEl = railRef.current;
    const validRows = courseRowsRef.current.filter(Boolean);
    const viewBtn = viewAllBtnRef.current;
    const section = sectionRef.current;

    if (!section || (!polaroidEl && validRows.length === 0)) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          once: true,
        },
      });

      // 1. View all courses button entrance
      if (viewBtn) {
        tl.from(
          viewBtn,
          {
            opacity: 0,
            y: 15,
            duration: 0.8,
            ease: "power3.out",
          },
          0
        );
      }

      // 2. Polaroid entrance animation
      if (polaroidEl) {
        tl.from(
          polaroidEl,
          {
            opacity: 0,
            y: 35,
            rotate: -2,
            duration: 1.0,
            ease: "power3.out",
          },
          0.1
        );

        const polaroidMedia = polaroidEl.querySelector(".polaroid-media");
        const polaroidChin = polaroidEl.querySelector(".polaroid-chin");
        const polaroidButtons = polaroidEl.querySelector(".polaroid-buttons");

        if (polaroidMedia) {
          tl.from(
            polaroidMedia,
            { scale: 1.06, duration: 1.0, ease: "power2.out" },
            0.15
          );
        }

        if (polaroidChin) {
          tl.from(
            polaroidChin,
            { opacity: 0, y: 8, duration: 0.7, ease: "power3.out" },
            0.25
          );
        }

        if (polaroidButtons) {
          tl.from(
            polaroidButtons,
            { opacity: 0, scale: 0.94, duration: 0.6, ease: "back.out(1.5)" },
            0.35
          );
        }
      }

      // 3. Central rail entrance
      if (railEl) {
        tl.from(
          railEl,
          {
            opacity: 0,
            scaleY: 0.8,
            transformOrigin: "top center",
            duration: 0.8,
            ease: "power2.out",
          },
          0.2
        );
      }

      // 4. Staggered entrance for course list rows
      if (validRows.length > 0) {
        tl.from(
          validRows,
          {
            opacity: 0,
            y: 24,
            duration: 0.75,
            stagger: 0.08,
            ease: "power3.out",
          },
          0.2
        );
      }
    }, section);

    return () => ctx.revert();
  }, [courses.length]);

  return (
    <section
      id="courses"
      data-theme="dark"
      ref={sectionRef}
      className="relative w-full bg-[#0a0a0a] text-white z-20 py-24 sm:py-28 md:py-32 lg:py-0 overflow-visible"
      aria-label="Photography Courses"
      style={{ overscrollBehaviorX: "contain" }}
    >
      {/* Viewport Container (Standard flow on mobile/tablet, pinned 100vh on desktop) */}
      <div
        ref={pinnedRef}
        data-theme="dark"
        className="w-full lg:h-screen flex flex-col justify-center lg:justify-between px-6 sm:px-8 md:px-12 lg:px-16 max-w-[105rem] mx-auto overflow-visible lg:pt-[108px] lg:pb-12 bg-[#0a0a0a]"
      >
        {/* ============================================================ */}
        {/* ============================================================ */}
        {/* 1. EDITORIAL HEADER: Eyebrow + Heading                       */}
        {/* ============================================================ */}
        <div className="w-full flex flex-col gap-4 mb-6 lg:mb-8 shrink-0 select-none">
          <div className="max-w-3xl text-left">
            {/* Eyebrow with Line Reveal */}
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="w-2 h-2 rounded-full bg-[#ffd001] shrink-0 inline-block" />
              <LineReveal
                as="span"
                lines={[eyebrow]}
                className="font-mono text-xs sm:text-[13px] tracking-[0.22em] uppercase font-semibold text-white/90"
              />
            </div>

            {/* Statement Headline with Creative Giants masked line reveal */}
            <LineReveal
              as="h2"
              lines={[heading]}
              className="font-sans font-light text-2xl sm:text-3xl lg:text-[40px] leading-[1.12] tracking-[-0.035em] text-white mb-2"
            />

            {/* Subheading with Creative Giants masked line reveal */}
            <LineReveal
              as="p"
              lines={[subheading]}
              className="font-sans font-normal text-sm sm:text-base text-white/60 max-w-2xl leading-relaxed tracking-[-0.01em]"
            />
          </div>

          {/* Action Row: [ VIEW ALL COURSES ] on Left & Arrows on Right (Mobile & Tablet) */}
          <div className="w-full flex items-center justify-between pt-1 select-none">
            <div ref={viewAllBtnRef} className="shrink-0">
              <Link
                href="/courses"
                className="group/all inline-flex items-center gap-0.5 font-mono text-xs sm:text-[13px] tracking-[0.16em] uppercase text-white hover:bg-[#ffd001] hover:text-black px-2 py-1 transition-all duration-150 font-medium leading-none"
              >
                <span className="text-[#ffd001] group-hover/all:text-black font-semibold transition-colors">[</span>
                <span className="px-1">VIEW ALL COURSES</span>
                <span className="text-[#ffd001] group-hover/all:text-black font-semibold transition-colors">]</span>
              </Link>
            </div>

            {/* Circular Arrow Nav Buttons (Active on Desktop, Mobile & Tablet) */}
            <div className="flex items-center gap-2.5 shrink-0">
              <button
                type="button"
                onClick={handlePrevCourse}
                disabled={activeIndex === 0}
                aria-label="Previous course"
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center transition-all duration-200 text-sm ${activeIndex === 0
                  ? "opacity-25 border-white/10 pointer-events-none cursor-not-allowed text-white/30"
                  : "hover:border-[#ffd001] hover:bg-[#ffd001] hover:text-black active:scale-95 text-white/80 cursor-pointer"
                  }`}
              >
                ←
              </button>

              <button
                type="button"
                onClick={handleNextCourse}
                disabled={activeIndex === courses.length - 1}
                aria-label="Next course"
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center transition-all duration-200 text-sm ${activeIndex === courses.length - 1
                  ? "opacity-25 border-white/10 pointer-events-none cursor-not-allowed text-white/30"
                  : "hover:border-[#ffd001] hover:bg-[#ffd001] hover:text-black active:scale-95 text-white/80 cursor-pointer"
                  }`}
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 2. MAIN STAGE                                                */}
        {/* ============================================================ */}
        <div ref={stageElementsRef} className="w-full flex-1 flex flex-col justify-center min-h-0 py-2 sm:py-4">
          {/* ============================================================ */}
          {/* MOBILE & TABLET VIEW (< lg / < 1024px): SWIPER PEEK CAROUSEL */}
          {/* ============================================================ */}
          <div className="flex lg:hidden flex-col w-full overflow-visible">
            {/* Swiper Slider Track: cards peek from right side like Testimonials */}
            <div className="w-full overflow-visible" style={{ clipPath: "inset(0 -100vw 0 0)" }}>
              <Swiper
                modules={[Navigation, Keyboard, Mousewheel]}
                slidesPerView="auto"
                spaceBetween={20}
                speed={500}
                grabCursor={true}
                watchSlidesProgress={true}
                touchAngle={45}
                preventClicks={true}
                preventClicksPropagation={true}
                resistanceRatio={0.85}
                keyboard={{ enabled: true, onlyInViewport: true }}
                mousewheel={{ forceToAxis: true }}
                onSwiper={(swiper) => {
                  swiperInstanceRef.current = swiper;
                  setSwiperActiveIndex(swiper.activeIndex);
                }}
                onSlideChange={(swiper) => {
                  setSwiperActiveIndex(swiper.activeIndex);
                }}
                className="w-full !overflow-visible"
              >
                {courses.map((course, idx) => {
                  return (
                    <SwiperSlide
                      key={course.id}
                      className="!w-[76vw] sm:!w-[340px] md:!w-[420px] max-w-[440px] !h-auto flex flex-col cursor-pointer"
                      onClick={() => {
                        if (swiperActiveIndex !== idx) {
                          swiperInstanceRef.current?.slideTo(idx);
                        }
                      }}
                    >
                      {/* Physical Polaroid Photo Print Card */}
                      <div
                        className="relative w-full bg-[#fffef7] text-black border border-[#e8e4d8] p-3.5 sm:p-4 pb-4 sm:pb-5 flex flex-col select-none transition-transform duration-200"
                        style={{
                          boxShadow:
                            "0 20px 48px -12px rgba(0, 0, 0, 0.95), 0 0 0 1px rgba(255, 255, 255, 0.08)",
                        }}
                      >
                        {/* Polaroid Top Bar: Course Number on Left & Archive on Right */}
                        <div className="polaroid-top w-full flex items-baseline justify-between pb-2">
                          <span className="font-mono text-xl sm:text-2xl text-black/50 leading-none">
                            {course.number}
                          </span>
                          <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-black/50 font-semibold leading-none">
                            {"IIP • ARCHIVE // 35MM"}
                          </span>
                        </div>

                        {/* Photo Emulsion Area */}
                        <div className="polaroid-media relative w-full aspect-[4/3.4] overflow-hidden">
                          <Image
                            src={course.coverImage}
                            alt={course.title}
                            fill
                            priority={idx === 0}
                            sizes="(max-width: 640px) 76vw, (max-width: 1024px) 420px, 440px"
                            className="object-cover object-center"
                            style={{
                              filter: "grayscale(100%) contrast(1.08) brightness(1.02)",
                            }}
                          />

                          {/* Glossy Plastic Sheen Overlays */}
                          <div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                              background:
                                "linear-gradient(130deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.20) 16%, rgba(255,255,255,0.02) 40%, transparent 55%, rgba(255,255,255,0.06) 78%, rgba(255,255,255,0.22) 100%)",
                            }}
                          />
                          <div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                              boxShadow:
                                "inset 0 1px 1px 0 rgba(255, 255, 255, 0.45), inset 1px 0 1px 0 rgba(255, 255, 255, 0.2)",
                            }}
                          />
                        </div>

                        {/* Polaroid Bottom Chin: Course Title, Duration, Pricing & Buttons */}
                        <div className="polaroid-chin w-full pt-3 sm:pt-3.5 flex flex-col justify-between">
                          <h3 className="font-mono text-base sm:text-lg leading-snug text-[#111111] tracking-[-0.02em] line-clamp-1">
                            {course.title}
                          </h3>

                          <div className="font-mono text-[10.5px] sm:text-[11px] tracking-[0.14em] uppercase text-[#666666] font-medium mt-1 mb-2.5">
                            DURATION: {course.duration} • MENTOR-LED
                          </div>

                          {/* Chin Action & Pricing Row */}
                          <div className="w-full flex items-end justify-between pt-2 border-t border-black/10 gap-2">
                            <div className="flex flex-col text-left gap-0.5">
                              {course.discount && course.totalFee !== course.payableFee && (
                                <div className="flex items-center gap-1 font-mono text-[11px] text-[#888888] leading-none">
                                  <span className="line-through">{course.totalFee}</span>
                                  <span className="text-[#dc2626] font-mono">({course.discount})</span>
                                </div>
                              )}
                              <div className="font-mono font-semibold text-[15px] sm:text-base text-black leading-none">
                                {course.payableFee}
                              </div>
                            </div>

                            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 select-none font-mono text-xs sm:text-[12.5px] tracking-[0.12em] uppercase">
                              <Link
                                href={`/enroll?course=${course.slug}`}
                                onClick={(e) => e.stopPropagation()}
                                className="group/enroll inline-flex items-center gap-0.5 text-black hover:bg-[#ffd001] hover:text-black px-1.5 py-1 transition-all duration-150 font-medium leading-none"
                              >
                                <span className="text-[#ca8a04] group-hover/enroll:text-black font-semibold transition-colors">[</span>
                                <span className="px-0.5">ENROLL</span>
                                <span className="text-[#ca8a04] group-hover/enroll:text-black font-semibold transition-colors">]</span>
                              </Link>

                              <Link
                                href={`/courses/${course.slug}`}
                                onClick={(e) => e.stopPropagation()}
                                className="group/view inline-flex items-center gap-0.5 text-black/70 hover:bg-[#ffd001] hover:text-black px-1.5 py-1 transition-all duration-150 font-medium leading-none"
                              >
                                <span className="text-[#ca8a04] group-hover/view:text-black font-semibold transition-colors">[</span>
                                <span className="px-0.5">VIEW</span>
                                <span className="text-[#ca8a04] group-hover/view:text-black font-semibold transition-colors">]</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Minimal & Elegant Detail Section (Clean, Structured & Borderless) */}
                      <div className="w-full pt-3.5 pb-1 px-1 text-left flex flex-col gap-2 select-none">
                        {/* Micro-meta row */}
                        <div className="flex items-center justify-between gap-2 text-[11px] font-mono tracking-[0.18em] uppercase">
                          <span className="text-[#ffd001] font-medium">
                            {"// SYNOPSIS"}
                          </span>
                          <span className="text-white/50">
                            LEVEL: {course.level.toUpperCase()}
                          </span>
                        </div>

                        {/* Description Paragraph */}
                        <p className="font-sans font-light text-xs sm:text-[13px] text-white/75 leading-relaxed line-clamp-2 sm:line-clamp-3">
                          {course.description}
                        </p>

                        {/* Subtle Explore Link */}
                        <div className="pt-0.5">
                          <Link
                            href={`/courses/${course.slug}`}
                            onClick={(e) => e.stopPropagation()}
                            className=" group/detail inline-flex items-center gap-1.5 font-mono text-[11.5px] uppercase tracking-[0.16em] text-white/60 hover:text-[#ffd001] transition-colors"
                          >

                            <span className="underline underline-offset-4">Explore Curriculum</span>
                            <span className="transition-transform duration-150 group-hover/detail:translate-x-1 text-[#ffd001]">→</span>
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>

            {/* Minimal Centered [ 01 / 05 ] Indicator Below Details */}
            <div className="w-full flex items-center justify-center pt-10 sm:pt-10 pb-2 select-none">
              <div className="inline-flex items-center gap-1.5 font-mono text-xs sm:text-[13px] tracking-[0.24em] text-white/50">
                <span className="text-[#ffd001] font-semibold">[</span>
                <span className="text-white font-medium">{courses[swiperActiveIndex]?.number}</span>
                <span className="text-white/30">/</span>
                <span>0{courses.length}</span>
                <span className="text-[#ffd001] font-semibold">]</span>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* DESKTOP VIEW (>= lg / >= 1024px): 3-COLUMN SCRUB STAGE       */}
          {/* ============================================================ */}
          <div className="hidden lg:flex w-full max-w-7xl xl:max-w-[92rem] 2xl:max-w-[98rem] mx-auto flex-row items-center justify-between gap-8 lg:gap-14 xl:gap-20 2xl:gap-24">
            {/* ======================================================== */}
            {/* COLUMN 1: POLAROID PHOTOGRAPH (MUSEUM ARTIFACT)          */}
            {/* ======================================================== */}
            <div ref={polaroidColRef} className="w-[300px] lg:w-[360px] xl:w-[390px] 2xl:w-[420px] shrink-0 flex flex-col items-center justify-center my-auto">
              {/* The Physical Polaroid Paper Print in Authentic Bone Color */}
              <div
                className="relative w-full bg-[#fffef7] text-black border border-[#e8e4d8] p-3.5 sm:p-4 pb-5 sm:pb-6 flex flex-col select-none transition-transform duration-300"
                style={{
                  boxShadow:
                    "0 24px 56px -12px rgba(0, 0, 0, 0.95), 0 0 0 1px rgba(255, 255, 255, 0.08)",
                }}
              >
                {/* Polaroid Top Bar: 01 on Top Left & IIP Archive on Top Right */}
                <div className="polaroid-top w-full flex items-baseline justify-between pb-2">
                  <span className="font-mono text-xl sm:text-2xl text-black/50 leading-none">
                    {courses[activeIndex]?.number}
                  </span>

                  <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-black/50 font-semibold leading-none">
                    {"IIP • ARCHIVE // 35MM"}
                  </span>
                </div>

                {/* Photo Emulsion Area */}
                <div className="polaroid-media relative w-full aspect-[4/3.8] overflow-hidden">
                  {courses.map((course, idx) => {
                    const isActive = idx === activeIndex;
                    return (
                      <div
                        key={course.id}
                        className={`absolute inset-0 transition-opacity duration-300 ease-out ${isActive ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                          }`}
                      >
                        <Image
                          src={course.coverImage}
                          alt={course.title}
                          fill
                          priority={idx === 0 || idx === 3}
                          sizes="(max-width: 1024px) 340px, 430px"
                          className="object-cover object-center"
                          style={{
                            filter: "grayscale(100%) contrast(1.08) brightness(1.02)",
                          }}
                        />
                      </div>
                    );
                  })}

                  {/* Specular plastic gloss overlays */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(130deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.20) 16%, rgba(255,255,255,0.02) 40%, transparent 55%, rgba(255,255,255,0.06) 78%, rgba(255,255,255,0.22) 100%)",
                    }}
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(110deg, transparent 18%, rgba(255,255,255,0.26) 32%, rgba(255,255,255,0.08) 42%, transparent 58%)",
                      mixBlendMode: "screen",
                    }}
                  />
                  <div
                    className="absolute top-0 inset-x-0 h-[1.5px] pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to right, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.3) 60%, rgba(255,255,255,0.05) 100%)",
                    }}
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      boxShadow:
                        "inset 0 1px 1px 0 rgba(255, 255, 255, 0.45), inset 1px 0 1px 0 rgba(255, 255, 255, 0.2)",
                    }}
                  />
                </div>

                {/* Polaroid Bottom Chin */}
                <div className="polaroid-chin w-full pt-3.5 sm:pt-4 flex flex-col justify-between">
                  <h3 className="font-mono text-base sm:text-lg lg:text-[19px] leading-[1.22] text-[#111111] tracking-[-0.02em] line-clamp-2 min-h-[2.4em]">
                    {courses[activeIndex]?.title}
                  </h3>

                  <div className="font-mono text-[11px] sm:text-xs tracking-[0.14em] uppercase text-[#666666] font-medium mb-2.5">
                    DURATION: {courses[activeIndex]?.duration} • MENTOR-LED
                  </div>

                  <div className="w-full flex items-end justify-between pt-2.5 border-t border-black/10 gap-3">
                    <div className="flex flex-col text-left gap-1.5">
                      {courses[activeIndex]?.discount &&
                        courses[activeIndex]?.totalFee !== courses[activeIndex]?.payableFee && (
                          <div className="flex items-center gap-1.5 font-mono text-xs text-[#888888] leading-none mb-0.5">
                            <span className="line-through">{courses[activeIndex]?.totalFee}</span>
                            <span className="text-[#dc2626] font-mono">({courses[activeIndex]?.discount})</span>
                          </div>
                        )}

                      <div className="font-mono font-semibold text-base text-black leading-none">
                        {courses[activeIndex]?.payableFee}
                      </div>
                    </div>

                    <div className="polaroid-buttons flex items-center gap-2 sm:gap-2.5 shrink-0 select-none font-mono text-xs sm:text-[13px] tracking-[0.14em] uppercase">
                      <Link
                        href={`/enroll?course=${courses[activeIndex]?.slug}`}
                        className="group/enroll inline-flex items-center gap-0.5 text-black hover:bg-[#ffd001] hover:text-black px-1.5 py-1 transition-all duration-150 font-medium leading-none"
                      >
                        <span className="text-[#ca8a04] group-hover/enroll:text-black font-semibold transition-colors">[</span>
                        <span className="px-0.5">ENROLL</span>
                        <span className="text-[#ca8a04] group-hover/enroll:text-black font-semibold transition-colors">]</span>
                      </Link>

                      <Link
                        href={`/courses/${courses[activeIndex]?.slug}`}
                        className="group/view inline-flex items-center gap-0.5 text-black/70 hover:bg-[#ffd001] hover:text-black px-1.5 py-1 transition-all duration-150 font-medium leading-none"
                      >
                        <span className="text-[#ca8a04] group-hover/view:text-black font-semibold transition-colors">[</span>
                        <span className="px-0.5">VIEW</span>
                        <span className="text-[#ca8a04] group-hover/view:text-black font-semibold transition-colors">]</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ======================================================== */}
            {/* COLUMN 2: VERTICAL SCROLL RAIL (Desktop >= 1024px Only)  */}
            {/* ======================================================== */}
            <div
              ref={railRef}
              className="hidden lg:flex flex-col items-center justify-center shrink-0 w-16 xl:w-20 px-2 lg:px-4 self-stretch my-auto"
            >
              <div className="relative h-[270px] xl:h-[300px] w-full flex flex-col items-center justify-between py-1 select-none">
                <span className="font-mono text-[10px] tracking-wider text-white/40 font-semibold">
                  01
                </span>

                <div className="relative w-[2px] h-[220px] xl:h-[250px] bg-white/20 rounded-full my-auto flex items-center justify-center">
                  {courses.map((course, idx) => {
                    const notchPercent = (idx / (courses.length - 1)) * 100;
                    const isCurrent = idx === activeIndex;

                    return (
                      <button
                        key={course.id}
                        type="button"
                        onClick={() => handleJumpToCourse(idx)}
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        title={`Jump to ${course.title}`}
                        className="absolute left-1/2 -translate-x-1/2 w-6 h-6 flex items-center justify-center group cursor-pointer z-20"
                        style={{ top: `${notchPercent}%`, transform: "translate(-50%, -50%)" }}
                        aria-label={`Select ${course.title}`}
                      >
                        <span
                          className={`w-3.5 h-[1.5px] transition-all duration-200 ${isCurrent
                            ? "bg-[#ffd001] scale-x-125"
                            : "bg-white/30 group-hover:bg-white group-hover:scale-x-110"
                            }`}
                        />
                      </button>
                    );
                  })}

                  <div
                    className="absolute left-1/2 -translate-x-1/2 w-[4px] h-[34px] bg-[#ffd001] rounded-full pointer-events-none transition-transform duration-100 ease-out shadow-[0_0_12px_rgba(255,208,1,0.7)]"
                    style={{
                      top: `${scrollProgress * (220 - 34)}px`,
                      willChange: "top",
                    }}
                  >
                    <span className="w-2 h-2 rounded-full bg-black border-2 border-[#ffd001] absolute top-1/2 -translate-y-1/2 -left-[2px]" />
                  </div>
                </div>

                <span className="font-mono text-[10px] tracking-wider text-white/40 font-semibold ">
                  0{courses.length}
                </span>
              </div>
            </div>

            {/* ======================================================== */}
            {/* COLUMN 3: COURSE LIST (Tablet & Desktop)                  */}
            {/* ======================================================== */}
            <div className="flex-1 max-w-2xl xl:max-w-3xl flex flex-col justify-center my-auto">
              <div
                className="w-full flex flex-col divide-y divide-white/10"
                role="tablist"
                aria-label="Course Curriculum List"
              >
                {courses.map((course, idx) => {
                  const isActive = idx === activeIndex;

                  return (
                    <div
                      key={course.id}
                      ref={(el) => {
                        courseRowsRef.current[idx] = el;
                      }}
                      onMouseEnter={() => setHoveredIndex(idx)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      onClick={() => handleJumpToCourse(idx)}
                      className="group py-4 sm:py-4.5 lg:py-5 xl:py-5.5 cursor-pointer transition-colors duration-200"
                      role="tab"
                      aria-selected={isActive}
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          handleJumpToCourse(idx);
                        }
                      }}
                    >
                      <div className="w-full flex items-center justify-between gap-4 select-none">
                        <div className="flex items-center gap-3.5 sm:gap-4 flex-1">
                          <div
                            className={`course-marker w-4 h-4 rounded-none transition-all duration-200 shrink-0 flex items-center justify-center ${isActive
                              ? "bg-[#ffd001] border-2 border-[#ffd001]"
                              : "border border-white/35 group-hover:border-white bg-transparent"
                              }`}
                            aria-hidden="true"
                          >
                            {isActive && <span className="w-1.5 h-1.5 bg-black block" />}
                          </div>

                          <h4
                            className={`course-title font-sans text-base sm:text-lg md:text-xl lg:text-[21px] xl:text-[23px] tracking-[-0.025em] transition-colors duration-200 leading-tight ${isActive
                              ? "font-normal text-white"
                              : "font-light text-white/50 group-hover:text-white"
                              }`}
                          >
                            {course.title}
                          </h4>
                        </div>

                        <div className="flex items-center gap-2.5 shrink-0 pl-2">
                          <span
                            className={`course-duration font-mono text-xs sm:text-[13px] uppercase tracking-[0.16em] transition-colors ${isActive
                              ? "text-[#ffd001] font-semibold"
                              : "text-white/40 group-hover:text-white/80 font-normal"
                              }`}
                          >
                            {course.duration}
                          </span>

                          <span
                            className={`font-sans text-xs transition-transform duration-200 ${isActive ? "text-[#ffd001] translate-x-0.5" : "text-white/30 group-hover:text-white/80"
                              }`}
                          >
                            →
                          </span>
                        </div>
                      </div>

                      <div
                        className={`grid transition-all duration-300 ease-out overflow-hidden ${isActive ? "grid-rows-[1fr] opacity-100 mt-2 sm:mt-2.5" : "grid-rows-[0fr] opacity-0"
                          }`}
                      >
                        <div className="min-h-0 pl-7 sm:pl-8 flex flex-col md:flex-row md:items-end md:justify-between gap-3 pt-1">
                          <p className="font-sans font-light text-xs sm:text-sm text-white/70 leading-relaxed max-w-xl">
                            {course.description}
                          </p>

                          <div className="shrink-0 pb-0.5">
                            <Link
                              href={`/courses/${course.slug}`}
                              className="group/link inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.18em] text-[#ffd001] hover:text-white font-semibold transition-colors whitespace-nowrap"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <span>View Course</span>
                              <span className="text-sm transition-transform duration-200 group-hover/link:translate-x-1">→</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}
