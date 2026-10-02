"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ORIGINAL_PORTFOLIO_ITEMS, PortfolioItem } from "@/lib/portfolio-data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface PortfolioTeaserProps {
  items?: PortfolioItem[];
}

export function PortfolioTeaserSection({ items }: PortfolioTeaserProps) {
  const portfolioList =
    items && items.length > 0 ? items : ORIGINAL_PORTFOLIO_ITEMS;

  const sectionRef = useRef<HTMLElement>(null);
  const scrollContentRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const mobileCarouselRef = useRef<HTMLDivElement>(null);

  const [activeMobileIndex, setActiveMobileIndex] = useState(0);

  useGSAP(
    () => {
      const scrollContainer = sectionRef.current;
      const scrollContent = scrollContentRef.current;
      const progressBar = progressBarRef.current;
      const counterEl = counterRef.current;

      if (!scrollContainer || !scrollContent) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 991px)", () => {
        const getScrollWidth = () =>
          scrollContent.scrollWidth - window.innerWidth;

        // Main horizontal scroll animation with pinned container
        const horizontalScroll = gsap.to(scrollContent, {
          x: () => -getScrollWidth(),
          ease: "none",
          scrollTrigger: {
            trigger: scrollContainer,
            start: "top top",
            end: () => `+=${getScrollWidth()}`,
            pin: true,
            pinSpacing: true,
            scrub: 1.2,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Bottom progress bar indicator
        if (progressBar) {
          gsap.to(progressBar, {
            width: "100%",
            ease: "none",
            scrollTrigger: {
              trigger: scrollContainer,
              start: "top top",
              end: () => `+=${getScrollWidth()}`,
              scrub: 1,
            },
          });
        }

        // Project items
        const projectItems =
          scrollContent.querySelectorAll<HTMLElement>(".projects-scroll_content");

        // Sync active slide counter
        projectItems.forEach((item, index) => {
          ScrollTrigger.create({
            trigger: item,
            start: "left 50%",
            end: "right 50%",
            horizontal: true,
            containerAnimation: horizontalScroll,
            onEnter: () => {
              if (counterEl) counterEl.textContent = `0${index + 1}`;
            },
            onEnterBack: () => {
              if (counterEl) counterEl.textContent = `0${index + 1}`;
            },
          });
        });

        // Creative Giants Multi-Speed Parallax on Children Elements
        // Calibrated subtle values to strictly avoid text collision & overlapping
        projectItems.forEach((item) => {
          const leftChild = item.querySelector(".projects-scroll_content-left");
          const middleChild = item.querySelector(
            ".projects-scroll_content-middle"
          );
          const rightChild = item.querySelector(
            ".projects-scroll_content-right"
          );

          if (leftChild) {
            gsap.to(leftChild, {
              xPercent: -8,
              ease: "none",
              scrollTrigger: {
                containerAnimation: horizontalScroll,
                trigger: item,
                start: "left right",
                end: "left left",
                scrub: 2.5,
              },
            });
          }

          if (middleChild) {
            gsap.to(middleChild, {
              xPercent: -16,
              ease: "none",
              scrollTrigger: {
                containerAnimation: horizontalScroll,
                trigger: item,
                start: "left right",
                end: "left left",
                scrub: 2.5,
              },
            });
          }

          if (rightChild) {
            gsap.to(rightChild, {
              xPercent: -24,
              ease: "none",
              scrollTrigger: {
                containerAnimation: horizontalScroll,
                trigger: item,
                start: "left right",
                end: "left left",
                scrub: 2.5,
              },
            });
          }
        });

        ScrollTrigger.refresh();

        return () => {
          gsap.set(scrollContent, { x: 0 });
        };
      });
    },
    { scope: sectionRef, dependencies: [portfolioList] }
  );

  // Mobile Carousel Scroll Handler
  const scrollMobile = (direction: "left" | "right") => {
    if (mobileCarouselRef.current) {
      const scrollAmount = mobileCarouselRef.current.clientWidth * 0.88;
      mobileCarouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      const newIdx =
        direction === "left"
          ? Math.max(0, activeMobileIndex - 1)
          : Math.min(portfolioList.length - 1, activeMobileIndex + 1);
      setActiveMobileIndex(newIdx);
    }
  };

  return (
    <section
      ref={sectionRef}
      aria-label="Student Work & Fieldwork Portfolio"
      className="section_projects-scroll theme-dark relative w-full bg-[#0a0a0a] text-white border-b border-white/10"
    >
      {/* ========================================================================= */}
      {/* DESKTOP VIEWPORT: Creative Giants Pinned Horizontal Parallax Scroll (>= 991px) */}
      {/* ========================================================================= */}
      <div className="hidden lg:block relative w-full h-screen min-h-[700px] max-h-[1080px] overflow-hidden">
        {/* Horizontal Moving Content Component */}
        <div
          ref={scrollContentRef}
          className="projects-scroll_compnent flex flex-row items-center h-full w-max pl-16 xl:pl-24 pr-28 select-none"
        >
          {/* Slide 0: Section Manifesto & Editorial Intro */}
          <div className="w-[400px] xl:w-[460px] shrink-0 mr-16 xl:mr-24 flex flex-col justify-center gap-6 border-r border-white/10 pr-12">
            <span className="font-mono text-[12px] uppercase tracking-[0.25em] text-[#888888] block">
              STUDENT WORK & FIELDWORK // 2025–2026
            </span>

            <h2 className="font-sans font-light text-[42px] xl:text-[52px] leading-[1.05] tracking-[-0.03em] text-white">
              Portfolio & Student Projects
            </h2>

            <p className="font-sans font-light text-[15px] xl:text-[16px] text-[#a3a3a3] leading-relaxed">
              Curated documentary fieldwork, street assignments, and cultural heritage studies created by IIP Nepal students and alumni in Kathmandu.
            </p>

            <div className="pt-2">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2.5 font-mono text-[12px] uppercase tracking-[0.2em] text-[var(--color-iip-yellow)] hover:text-white transition-colors group"
              >
                <span>Browse Complete Archive</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Project Items: Creative Giants 3-Column Parallax Slides (Collision Free) */}
          {portfolioList.map((item, index) => {
            const projectNumber = `0${index + 1}`;

            return (
              <div
                key={item.id}
                className="projects-scroll_content relative shrink-0 w-[980px] xl:w-[1160px] 2xl:w-[1260px] h-[80%] max-h-[620px] grid grid-cols-12 items-center gap-8 xl:gap-12 mr-24 xl:mr-36"
              >
                {/* 1. Left Column: Eyebrow + Large Title + Photographer */}
                <div className="projects-scroll_content-left col-span-4 flex flex-col justify-center gap-4 z-20 pointer-events-auto">
                  <div className="header-wrap flex flex-col gap-3">
                    <span className="font-mono text-[12px] uppercase tracking-[0.25em] text-[#888888]">
                      PROJECT {projectNumber}
                    </span>

                    <h3 className="heading-style-h1 font-sans font-light text-[36px] xl:text-[46px] 2xl:text-[52px] leading-[1.04] tracking-[-0.035em] text-white">
                      {item.title}
                    </h3>

                    <div className="flex flex-col gap-1 font-mono text-[11px] uppercase tracking-[0.2em] text-[#888888] pt-2">
                      <span className="text-white/80">{item.photographer}</span>
                      <span>{item.year} · {item.location}</span>
                    </div>
                  </div>
                </div>

                {/* 2. Middle Column: Sharp Documentary Photo Frame */}
                <div className="projects-scroll_content-middle col-span-5 flex items-center justify-center relative z-10">
                  <Link
                    href={`/portfolio/${item.slug}`}
                    className="projects-scroll_link-wrap block w-full group overflow-hidden border border-white/15 bg-black"
                  >
                    <div className="relative aspect-[4/3] xl:aspect-[16/11] w-full overflow-hidden">
                      <Image
                        src={item.coverImage}
                        alt={`${item.title} photographed by ${item.photographer}`}
                        fill
                        sizes="(max-width: 1440px) 500px, 600px"
                        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-104"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                    </div>
                  </Link>
                </div>

                {/* 3. Right Column: Underlined Tags + Crisp Concise Summary + CTA (No Overlap) */}
                <div className="projects-scroll_content-right col-span-3 flex flex-col justify-end gap-5 z-20 pl-4 xl:pl-6 pointer-events-auto max-w-[340px]">
                  <div className="projects-scroll_tag-wrap flex flex-wrap gap-2">
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-white/80 border-b border-white/30 pb-0.5">
                      {item.category}
                    </span>
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#888888] border-b border-white/20 pb-0.5">
                      {item.course.includes("Pro") ? "MENTOR-LED" : "PRACTICAL"}
                    </span>
                  </div>

                  {/* Clean, tightened summary copy preventing overflow and collision */}
                  <p className="font-sans font-light text-[14px] xl:text-[14.5px] leading-[1.6] text-[#b0b0b0]">
                    {item.summary}
                  </p>

                  <div className="pt-1">
                    <Link
                      href={`/portfolio/${item.slug}`}
                      className="inline-flex items-center gap-2 font-mono text-[11.5px] uppercase tracking-[0.2em] text-white hover:text-[var(--color-iip-yellow)] group transition-colors"
                    >
                      <span className="border-b border-white/40 group-hover:border-[var(--color-iip-yellow)] pb-0.5 transition-colors">
                        Explore Project
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Creative Giants Fixed Bottom Bar: Hairline Progress + Number Pagination + CTA */}
        <div className="projects-scroll_progress-grid absolute bottom-0 left-0 right-0 z-30 px-12 xl:px-20 pb-6 pointer-events-none">
          <div className="projects-scroll_progress flex flex-col gap-4">
            {/* 1px Hairline Progress Track */}
            <div className="projects-scroll_progress-bar-wrap w-full h-[1px] bg-white/15 relative overflow-hidden">
              <div
                ref={progressBarRef}
                className="projects-scroll_progress-bar h-full bg-[var(--color-iip-yellow)] w-0"
              />
            </div>

            {/* Pagination Numbers & Action */}
            <div className="projects-scroll_progress-pagination flex items-center justify-between pointer-events-auto">
              <div className="font-mono text-[12px] uppercase tracking-[0.25em] text-[#888888]">
                <span>[ </span>
                <span ref={counterRef} className="text-white font-medium">
                  01
                </span>
                <span> / 0{portfolioList.length} ]</span>
              </div>

              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.2em] text-white/80 hover:text-[var(--color-iip-yellow)] transition-colors group"
              >
                <span>All Projects</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MOBILE / TABLET VIEWPORT: Creative Giants Touch Snap Carousel (< 991px)   */}
      {/* ========================================================================= */}
      <div className="lg:hidden py-16 px-6 sm:px-10 flex flex-col gap-10">
        {/* Mobile Header with Left/Right Controls */}
        <div className="flex items-end justify-between border-b border-white/10 pb-6">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#888888]">
              STUDENT WORK // FIELDWORK
            </span>
            <h2 className="font-sans font-light text-[28px] sm:text-[34px] leading-tight text-white">
              Portfolio & Projects
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollMobile("left")}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 active:scale-95 transition-all"
              aria-label="Previous Project"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollMobile("right")}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 active:scale-95 transition-all"
              aria-label="Next Project"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile Carousel Track */}
        <div
          ref={mobileCarouselRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-6 pb-4"
        >
          {portfolioList.map((item, idx) => (
            <div
              key={item.id}
              className="shrink-0 w-[84vw] sm:w-[500px] snap-center flex flex-col gap-4 bg-white/[0.02] border border-white/10 p-5"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                <Image
                  src={item.coverImage}
                  alt={item.title}
                  fill
                  sizes="84vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col gap-2 pt-2">
                <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.2em] text-[#888888]">
                  <span>PROJECT 0{idx + 1}</span>
                  <span className="text-[var(--color-iip-yellow)]">{item.category}</span>
                </div>

                <h3 className="font-sans font-light text-[22px] sm:text-[24px] text-white">
                  {item.title}
                </h3>

                <p className="font-sans text-[13px] text-[#a3a3a3] line-clamp-2">
                  {item.summary}
                </p>

                <div className="pt-2 flex items-center justify-between border-t border-white/10 mt-1">
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/60">
                    {item.photographer}
                  </span>
                  <Link
                    href={`/portfolio/${item.slug}`}
                    className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-iip-yellow)]"
                  >
                    <span>View</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Link to Complete Archive */}
        <div className="pt-2 flex justify-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.2em] text-white/80 hover:text-white border-b border-white/30 pb-1"
          >
            <span>Browse Complete Student Archive</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
