"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LineReveal from "@/components/animations/LineReveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface CourseItem {
  id: string;
  number: string;
  title: string;
  duration: string;
  level: string;
  totalFee: string;
  payableFee: string;
  discount: string;
  description: string;
  coverImage: string;
  slug: string;
}

export const COURSES_LIST: CourseItem[] = [
  {
    id: "course-1",
    number: "01",
    title: "Mobile Photography Course",
    duration: "1 Month",
    level: "Beginner",
    totalFee: "Rs. 5,200",
    payableFee: "Rs. 4,160",
    discount: "-20%",
    description:
      "Master professional camera controls, composition rules, natural lighting, and mobile post-processing using your smartphone.",
    coverImage: "/images/course-mobile.jpg",
    slug: "mobile-photography-course",
  },
  {
    id: "course-2",
    number: "02",
    title: "Basic Photography Course",
    duration: "1 Month",
    level: "Beginner",
    totalFee: "Rs. 12,000",
    payableFee: "Rs. 9,600",
    discount: "-20%",
    description:
      "Start your photography journey with camera fundamentals, exposure triangle (aperture, shutter, ISO), composition, and practical field assignments.",
    coverImage: "/images/course-basic.jpg",
    slug: "beginners-course",
  },
  {
    id: "course-3",
    number: "03",
    title: "Foundation Photography Course",
    duration: "3 Months",
    level: "Foundation",
    totalFee: "Rs. 19,500",
    payableFee: "Rs. 15,600",
    discount: "-20%",
    description:
      "A comprehensive foundation course covering every vital topic in photography with one-on-one mentor critique and systematic skill development.",
    coverImage: "/images/course-foundation.jpg",
    slug: "foundation-course",
  },
  {
    id: "course-4",
    number: "04",
    title: "Pro-Level Foundation Photography Course",
    duration: "3 Months",
    level: "Foundation / Pro",
    totalFee: "Rs. 56,000",
    payableFee: "Rs. 32,000",
    discount: "-20%",
    description:
      "An intensive mentor-led foundation course that takes you from beginner to professional level with live critique and real commercial briefs.",
    coverImage: "/images/course-pro-foundation.jpg",
    slug: "pro-level-foundation-photography-course",
  },
  {
    id: "course-5",
    number: "05",
    title: "Pro-Level Advanced Photography Course",
    duration: "6 Months",
    level: "Advanced",
    totalFee: "Rs. 56,000",
    payableFee: "Rs. 44,800",
    discount: "-20%",
    description:
      "An advanced mentor-led masterclass for photographers looking to master studio lighting, commercial productions, and launch an industry career.",
    coverImage: "/images/course-pro.jpg",
    slug: "pro-level-advanced-photography-course",
  },
];

export interface CoursesSectionProps {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  courses?: CourseItem[];
}

export default function CoursesSection({
  eyebrow = "Curriculum & Programs",
  heading = "Crafted for Serious Photographers.",
  subheading = "Five intensive, mentor-led programs taking you from raw camera fundamentals to exhibition-grade commercial productions.",
  courses = COURSES_LIST,
}: CoursesSectionProps): React.JSX.Element {
  const sectionRef = useRef<HTMLElement>(null);
  const pinnedRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const stageElementsRef = useRef<HTMLDivElement>(null);
  const viewAllBtnRef = useRef<HTMLDivElement>(null);
  const polaroidColRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const courseRowsRef = useRef<(HTMLDivElement | null)[]>([]);
  const hasAnimatedStageRef = useRef(false);

  const [scrollIndex, setScrollIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Active index prioritized by hover, falling back to scroll position
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
          lenis.scrollTo(targetScroll, { duration: 1.0 });
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
        end: () => `+=${window.innerHeight * 4.2}`,
        scrub: 0.5,
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

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);

    return () => {
      clearTimeout(refreshTimer);
      mm.revert();
    };
  }, [courses.length]);

  // Entrance motion animation for stage elements, Polaroid, and each course list item at 85% viewport
  useEffect(() => {
    const polaroidEl = polaroidColRef.current;
    const railEl = railRef.current;
    const validRows = courseRowsRef.current.filter(Boolean);
    const viewBtn = viewAllBtnRef.current;

    if (!polaroidEl && validRows.length === 0) return;

    if (hasAnimatedStageRef.current) {
      if (polaroidEl) gsap.set(polaroidEl, { opacity: 1, y: 0, rotate: 0 });
      if (railEl) gsap.set(railEl, { opacity: 1, scaleY: 1 });
      if (viewBtn) gsap.set(viewBtn, { opacity: 1, y: 0 });
      gsap.set(validRows, { opacity: 1, y: 0 });
      return;
    }

    // Initial hidden state
    if (polaroidEl) gsap.set(polaroidEl, { opacity: 0, y: 40, rotate: -2 });
    if (railEl) gsap.set(railEl, { opacity: 0, scaleY: 0.75, transformOrigin: "top center" });
    if (viewBtn) gsap.set(viewBtn, { opacity: 0, y: 15 });
    if (validRows.length > 0) gsap.set(validRows, { opacity: 0, y: 28 });

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimatedStageRef.current) {
          hasAnimatedStageRef.current = true;
          observer.disconnect();

          const tl = gsap.timeline();

          // 1. View all courses button entrance
          if (viewBtn) {
            tl.to(viewBtn, {
              opacity: 1,
              y: 0,
              duration: 0.95,
              ease: "power3.out",
            });
          }

          // 2. Polaroid entrance animation with child component reveals
          if (polaroidEl) {
            tl.to(
              polaroidEl,
              {
                opacity: 1,
                y: 0,
                rotate: 0,
                duration: 1.2,
                ease: "power3.out",
              },
              viewBtn ? "-=0.75" : 0
            );

            const polaroidMedia = polaroidEl.querySelector(".polaroid-media");
            const polaroidChin = polaroidEl.querySelector(".polaroid-chin");
            const polaroidButtons = polaroidEl.querySelector(".polaroid-buttons");

            if (polaroidMedia) {
              tl.fromTo(
                polaroidMedia,
                { scale: 1.05, opacity: 0.7 },
                { scale: 1, opacity: 1, duration: 1.1, ease: "power2.out" },
                "-=0.95"
              );
            }

            if (polaroidChin) {
              tl.fromTo(
                polaroidChin,
                { opacity: 0, y: 8 },
                { opacity: 1, y: 0, duration: 0.85, ease: "power3.out" },
                "-=0.8"
              );
            }

            if (polaroidButtons) {
              tl.fromTo(
                polaroidButtons,
                { opacity: 0, scale: 0.92 },
                { opacity: 1, scale: 1, duration: 0.75, ease: "back.out(1.5)" },
                "-=0.6"
              );
            }
          }

          // 3. Central rail entrance
          if (railEl) {
            tl.to(
              railEl,
              {
                opacity: 1,
                scaleY: 1,
                duration: 1.0,
                ease: "power2.out",
              },
              "-=1.0"
            );
          }

          // 4. Staggered entrance for EACH component from the course list
          if (validRows.length > 0) {
            tl.to(
              validRows,
              {
                opacity: 1,
                y: 0,
                duration: 1.0,
                stagger: 0.1,
                ease: "power3.out",
              },
              "-=0.9"
            );
          }
        }
      },
      { rootMargin: "0px 0px -15% 0px", threshold: 0.02 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      if (hasAnimatedStageRef.current) {
        if (polaroidEl) gsap.set(polaroidEl, { opacity: 1, y: 0, rotate: 0 });
        if (railEl) gsap.set(railEl, { opacity: 1, scaleY: 1 });
        if (viewBtn) gsap.set(viewBtn, { opacity: 1, y: 0 });
        gsap.set(validRows, { opacity: 1, y: 0 });
      }
    };
  }, []);

  return (
    <section
      id="courses"
      ref={sectionRef}
      className="relative w-full bg-[#0a0a0a] text-white z-20"
      aria-label="Photography Courses"
    >
      {/* Pinned Viewport Container (Spacious layout matching WhatWeDo container scale) */}
      <div
        ref={pinnedRef}
        className="w-full min-h-screen lg:h-screen flex flex-col justify-between pt-[92px] sm:pt-[98px] md:pt-[104px] lg:pt-[108px] pb-6 sm:pb-8 lg:pb-8 px-6 sm:px-8 md:px-12 lg:px-16 max-w-[105rem] mx-auto overflow-hidden"
      >
        {/* ============================================================ */}
        {/* 1. EDITORIAL HEADER: Eyebrow + Heading + View All Courses   */}
        {/* Left-aligned editorial hierarchy with top View All Courses  */}
        {/* ============================================================ */}
        <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 lg:mb-8 shrink-0 select-none">
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

          {/* Top Action: View All Courses Button Spiced with Yellow Accent */}
          <div ref={viewAllBtnRef} className="shrink-0 pt-1 md:pt-0 select-none will-change-transform">
            <Link
              href="/courses"
              className="group/all inline-flex items-center gap-0.5 font-mono text-xs sm:text-[13px] tracking-[0.16em] uppercase text-white hover:bg-[#ffd001] hover:text-black px-2 py-1 transition-all duration-150 font-medium leading-none"
            >
              <span className="text-[#ffd001] group-hover/all:text-black font-semibold transition-colors">[</span>
              <span className="px-1">VIEW ALL COURSES</span>
              <span className="text-[#ffd001] group-hover/all:text-black font-semibold transition-colors">]</span>
            </Link>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 2. MAIN STAGE: Centered with decreased side spacing &        */}
        {/* generous breathing room beside the central scroll rail       */}
        {/* ============================================================ */}
        <div ref={stageElementsRef} className="w-full flex-1 flex flex-col justify-center min-h-0 py-2 sm:py-4 will-change-transform">
          <div className="w-full max-w-7xl xl:max-w-[92rem] 2xl:max-w-[98rem] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14 xl:gap-20 2xl:gap-24">
            {/* ======================================================== */}
            {/* COLUMN 1: POLAROID PHOTOGRAPH (MUSEUM ARTIFACT)          */}
            {/* Prominent, authentic photographic paper, generous bounds */}
            {/* ======================================================== */}
            <div ref={polaroidColRef} className="w-full lg:w-[360px] xl:w-[390px] 2xl:w-[420px] shrink-0 flex flex-col items-center justify-center my-auto will-change-transform">
              {/* The Physical Polaroid Paper Print in Authentic Bone Color */}
              <div
                className="relative w-full max-w-[390px] lg:max-w-none bg-[#fffef7] text-black border border-[#e8e4d8] p-3.5 sm:p-4 pb-5 sm:pb-6 flex flex-col select-none transition-transform duration-300"
                style={{
                  boxShadow:
                    "0 24px 56px -12px rgba(0, 0, 0, 0.95), 0 0 0 1px rgba(255, 255, 255, 0.08)",
                }}
              >
                {/* Polaroid Top Bar: 01 on Top Left & IIP Archive on Top Right */}
                {/* Both share the exact same font-mono, tracking-[0.22em] and color (text-black/50), keeping 01 size */}
                <div className="polaroid-top w-full flex items-baseline justify-between pb-2">
                  {/* Top left 01: same font and color as IIP archive, keeping larger font size */}
                  <span className="font-mono text-xl sm:text-2xl   text-black/50 leading-none">
                    {courses[activeIndex]?.number}
                  </span>

                  {/* Top right archival marking */}
                  <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-black/50 font-semibold leading-none">
                    IIP • ARCHIVE // 35MM
                  </span>
                </div>

                {/* Photo Emulsion Area: Pure Black & White Instant Film with Glossy Sheen (NO BLACK BORDER) */}
                <div className="polaroid-media relative w-full aspect-[4/3.8] overflow-hidden">
                  {courses.map((course, idx) => {
                    const isActive = idx === activeIndex;
                    return (
                      <div
                        key={course.id}
                        className={`absolute inset-0 transition-opacity duration-300 ease-out ${isActive ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                          }`}
                      >
                        {/* Pure Black and White Photographic Print */}
                        <Image
                          src={course.coverImage}
                          alt={course.title}
                          fill
                          priority={idx === 0 || idx === 3}
                          sizes="(max-width: 1024px) 370px, 430px"
                          className="object-cover object-center"
                          style={{
                            filter: "grayscale(100%) contrast(1.08) brightness(1.02)",
                          }}
                        />
                      </div>
                    );
                  })}

                  {/* ============================================================ */}
                  {/* PLASTICKY SHINING OVERLAYS (Acetate/Mylar Gloss Reflections) */}
                  {/* ============================================================ */}

                  {/* 1. Primary diagonal specular plastic shine / light glare */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(130deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.20) 16%, rgba(255,255,255,0.02) 40%, transparent 55%, rgba(255,255,255,0.06) 78%, rgba(255,255,255,0.22) 100%)",
                    }}
                  />

                  {/* 2. Plastic specular sheen band (studio softbox reflection) */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(110deg, transparent 18%, rgba(255,255,255,0.26) 32%, rgba(255,255,255,0.08) 42%, transparent 58%)",
                      mixBlendMode: "screen",
                    }}
                  />

                  {/* 3. Top-edge glossy hairline refraction */}
                  <div
                    className="absolute top-0 inset-x-0 h-[1.5px] pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to right, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.3) 60%, rgba(255,255,255,0.05) 100%)",
                    }}
                  />

                  {/* 4. Beveled inner plastic edge reflection (clean white specular highlight only, NO dark border) */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      boxShadow:
                        "inset 0 1px 1px 0 rgba(255, 255, 255, 0.45), inset 1px 0 1px 0 rgba(255, 255, 255, 0.2)",
                    }}
                  />
                </div>

                {/* Polaroid Bottom Chin: Editorial & Clean Layout on Bone Paper */}
                <div className="polaroid-chin w-full pt-3.5 sm:pt-4 flex flex-col justify-between">
                  {/* Course Title in Clean Modern Typography */}
                  <h3 className="font-mono  text-base sm:text-lg lg:text-[19px] leading-[1.22] text-[#111111] tracking-[-0.02em] line-clamp-2 min-h-[2.4em] ">
                    {courses[activeIndex]?.title}
                  </h3>

                  {/* Duration note printed in instant film monospace style */}
                  <div className="font-mono text-[11px] sm:text-xs tracking-[0.14em] uppercase text-[#666666] font-medium mb-2.5">
                    DURATION: {courses[activeIndex]?.duration} • MENTOR-LED
                  </div>

                  {/* Bottom Row: Price on left, Separate View and Enroll Buttons on right */}
                  <div className="w-full flex items-end justify-between pt-2.5 border-t border-black/10 gap-3">
                    {/* Left: Price written in clean film mono, discount in RED */}
                    <div className="flex flex-col text-left gap-2">
                      <div className="flex items-center gap-1.5 font-mono text-xs text-[#888888] leading-none mb-0.5">
                        <span className="line-through">{courses[activeIndex]?.totalFee}</span>
                        <span className="text-[#dc2626] font-mono">({courses[activeIndex]?.discount})</span>
                      </div>

                      <div className="font-mono font-semibold text-base     text-black  leading-none">
                        {courses[activeIndex]?.payableFee}
                      </div>
                    </div>

                    {/* Right: Simple [ ENROLL ] [ VIEW ] Buttons Spiced with Yellow Accent */}
                    <div className="polaroid-buttons flex items-center gap-2 sm:gap-2.5 shrink-0 select-none font-mono text-xs sm:text-[13px] tracking-[0.14em] uppercase">
                      {/* Enroll Button (First) with Yellow Accent Brackets & Yellow Hover */}
                      <Link
                        href={`/enroll?course=${courses[activeIndex]?.slug}`}
                        className="group/enroll inline-flex items-center gap-0.5 text-black hover:bg-[#ffd001] hover:text-black px-1.5 py-1 transition-all duration-150 font-medium leading-none"
                      >
                        <span className="text-[#ca8a04] group-hover/enroll:text-black font-semibold transition-colors">[</span>
                        <span className="px-0.5">ENROLL</span>
                        <span className="text-[#ca8a04] group-hover/enroll:text-black font-semibold transition-colors">]</span>
                      </Link>

                      {/* View Button (Second) with Yellow Accent Brackets & Yellow Hover */}
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
            {/* COLUMN 2: CUSTOM VERTICAL SCROLL IN THE MIDDLE           */}
            {/* Generous spacing beside the scroll rail so it breathes   */}
            {/* ======================================================== */}
            <div
              ref={railRef}
              className="hidden lg:flex flex-col items-center justify-center shrink-0 w-16 xl:w-20 px-2 lg:px-4 self-stretch my-auto"
            >
              <div className="relative h-[270px] xl:h-[300px] w-full flex flex-col items-center justify-between py-1 select-none">
                {/* Top Label */}
                <span className="font-mono text-[10px] tracking-wider text-white/40 font-semibold">
                  01
                </span>

                {/* The Central Vertical Rail on dark background */}
                <div className="relative w-[2px] h-[220px] xl:h-[250px] bg-white/20 rounded-full my-auto flex items-center justify-center">
                  {/* Clickable Step Notches (5 courses) */}
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
                        {/* Horizontal Notch Tick */}
                        <span
                          className={`w-3.5 h-[1.5px] transition-all duration-200 ${isCurrent
                            ? "bg-[#ffd001] scale-x-125"
                            : "bg-white/30 group-hover:bg-white group-hover:scale-x-110"
                            }`}
                        />
                      </button>
                    );
                  })}

                  {/* Traveling Progress Thumb */}
                  <div
                    className="absolute left-1/2 -translate-x-1/2 w-[4px] h-[34px] bg-[#ffd001] rounded-full pointer-events-none transition-transform duration-100 ease-out shadow-[0_0_12px_rgba(255,208,1,0.7)]"
                    style={{
                      top: `${scrollProgress * (220 - 34)}px`,
                      willChange: "top",
                    }}
                  >
                    {/* Glowing Focus Dot */}
                    <span className="w-2 h-2 rounded-full bg-black border-2 border-[#ffd001] absolute top-1/2 -translate-y-1/2 -left-[2px]" />
                  </div>
                </div>

                {/* Bottom Label */}
                <span className="font-mono text-[10px] tracking-wider text-white/40 font-semibold">
                  0{courses.length}
                </span>
              </div>
            </div>

            {/* ======================================================== */}
            {/* COLUMN 3: SPACIOUS COURSE LIST (RIGHT)                   */}
            {/* Generous vertical spacing, NO dashes, View Course on right */}
            {/* ======================================================== */}
            <div className="w-full lg:flex-1 max-w-2xl xl:max-w-3xl flex flex-col justify-center my-auto">
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
                      className="group py-4.5 sm:py-5 lg:py-5 xl:py-5.5 cursor-pointer transition-colors duration-200"
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
                      {/* Header Row: Marker [ ] / [■] + Title + Duration (NO DASHES) */}
                      <div className="w-full flex items-center justify-between gap-4 select-none">
                        <div className="flex items-center gap-3.5 sm:gap-4 flex-1">
                          {/* Square Checkbox / Focus Point Marker (Sketch: [ ] vs [■]) */}
                          <div
                            className={`course-marker w-4 h-4 rounded-none transition-all duration-200 shrink-0 flex items-center justify-center ${isActive
                              ? "bg-[#ffd001] border-2 border-[#ffd001]"
                              : "border border-white/35 group-hover:border-white bg-transparent"
                              }`}
                            aria-hidden="true"
                          >
                            {isActive && (
                              <span className="w-1.5 h-1.5 bg-black block" />
                            )}
                          </div>

                          {/* Course Title */}
                          <h4
                            className={`course-title font-sans text-base sm:text-lg md:text-xl lg:text-[21px] xl:text-[23px] tracking-[-0.025em] transition-colors duration-200 leading-tight ${isActive
                              ? "font-normal text-white"
                              : "font-light text-white/50 group-hover:text-white"
                              }`}
                          >
                            {course.title}
                          </h4>
                        </div>

                        {/* Duration on right (NO DASHED LINES) */}
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
                            className={`font-sans text-xs transition-transform duration-200 ${isActive
                              ? "text-[#ffd001] translate-x-0.5"
                              : "text-white/30 group-hover:text-white/80"
                              }`}
                          >
                            →
                          </span>
                        </div>
                      </div>

                      {/* Collapsible / Expandable Description Area */}
                      {/* View Course positioned cleanly on the right */}
                      <div
                        className={`grid transition-all duration-300 ease-out overflow-hidden ${isActive
                          ? "grid-rows-[1fr] opacity-100 mt-2.5 sm:mt-3"
                          : "grid-rows-[0fr] opacity-0"
                          }`}
                      >
                        <div className="min-h-0 pl-7 sm:pl-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4 pt-1">
                          {/* Description Paragraph on left */}
                          <p className="font-sans font-light text-xs sm:text-sm text-white/70 leading-relaxed max-w-xl">
                            {course.description}
                          </p>

                          {/* "View Course →" link positioned strictly on the right */}
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
