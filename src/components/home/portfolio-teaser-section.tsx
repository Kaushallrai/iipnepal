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
              xPercent: -18,
              ease: "none",
              scrollTrigger: {
                containerAnimation: horizontalScroll,
                trigger: item,
                start: "left right",
                end: "left left",
                scrub: 3,
              },
            });
          }

          if (middleChild) {
            gsap.to(middleChild, {
              xPercent: -45,
              ease: "none",
              scrollTrigger: {
                containerAnimation: horizontalScroll,
                trigger: item,
                start: "left right",
                end: "left left",
                scrub: 3,
              },
            });
          }

          if (rightChild) {
            gsap.to(rightChild, {
              xPercent: -75,
              ease: "none",
              scrollTrigger: {
                containerAnimation: horizontalScroll,
                trigger: item,
                start: "left right",
                end: "left left",
                scrub: 3,
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
          <div className="w-[420px] xl:w-[480px] shrink-0 mr-16 xl:mr-24 flex flex-col justify-center gap-6 border-r border-white/10 pr-12">
            <span className="font-mono text-[12px] uppercase tracking-[0.25em] text-[#888888] block">
              STUDENT WORK & FIELDWORK // 2025–2026
            </span>

            <h2 className="font-sans font-light text-[44px] xl:text-[54px] leading-[1.05] tracking-[-0.03em] text-white">
              Portfolio & Student Projects
            </h2>

            <p className="font-sans font-light text-[15px] xl:text-[16px] text-[#a3a3a3] leading-relaxed">
              Curated documentary fieldwork, street assignments, and cultural heritage studies created by IIP Nepal students and alumni under direct master mentorship in Kathmandu and across the Himalayas.
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

          {/* Project Items: Creative Giants 3-Column Parallax Slides */}
          {portfolioList.map((item, index) => {
            const projectNumber = `0${index + 1}`;

            return (
              <div
                key={item.id}
                className="projects-scroll_content relative shrink-0 w-[960px] xl:w-[1140px] 2xl:w-[1240px] h-[80%] max-h-[640px] grid grid-cols-12 items-center gap-6 xl:gap-10 mr-24 xl:mr-36"
              >
                {/* 1. Left Column: Eyebrow + Large Title + Photographer (Parallax xPercent: -18) */}
                <div className="projects-scroll_content-left col-span-4 flex flex-col justify-center gap-4 z-20 pointer-events-auto">
                  <div className="header-wrap flex flex-col gap-3">
                    <span className="font-mono text-[12px] uppercase tracking-[0.25em] text-[#888888]">
                      PROJECT {projectNumber}
                    </span>

                    <h3 className="heading-style-h1 font-sans font-light text-[38px] xl:text-[48px] 2xl:text-[56px] leading-[1.02] tracking-[-0.035em] text-white">
                      {item.title}
                    </h3>

                    <div className="flex flex-col gap-1 font-mono text-[11px] uppercase tracking-[0.2em] text-[#888888] pt-2">
                      <span className="text-white/80">{item.photographer}</span>
                      <span>{item.year} · {item.location}</span>
                    </div>
                  </div>
                </div>

                {/* 2. Middle Column: Sharp Documentary Photo Frame (Parallax xPercent: -45) */}
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

                {/* 3. Right Column: Underlined Tags + Summary + CTA (Parallax xPercent: -75) */}
                <div className="projects-scroll_content-right col-span-3 flex flex-col justify-end gap-6 z-20 pl-4 xl:pl-8 pointer-events-auto">
                  <div className="projects-scroll_tag-wrap flex flex-wrap gap-2.5">
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/80 border-b border-white/30 pb-0.5">
                      {item.category}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#888888] border-b border-white/20 pb-0.5">
                      {item.course.includes("Pro") ? "MENTOR-LED" : "PRACTICAL"}
                    </span>
                  </div>

                  <p className="font-sans font-light text-[14.5px] xl:text-[15.5px] leading-[1.65] text-[#a3a3a3]">
                    {item.summary}
                  </p>

                  <div>
                    <Link
                      href={`/portfolio/${item.slug}`}
                      className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.2em] text-white hover:text-[var(--color-iip-yellow)] group transition-colors"
                    >
                      <span className="border-b border-white/40 group-hover:border-[var(--color-iip-yellow)] pb-0.5 transition-colors">
                        Explore Project
                      </span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
                className="projects-scroll_progress-bar absolute top-0 left-0 h-full w-0 bg-[var(--color-iip-yellow)]"
              />
            </div>

            {/* Bottom Counter & Link */}
            <div className="projects-scroll_progress-pagination flex items-center justify-between pointer-events-auto">
              <div className="pagaination-count font-mono text-[12px] uppercase tracking-[0.25em] text-[#888888] flex items-center gap-2">
                <span ref={counterRef} className="number-counter text-white font-medium">
                  01
                </span>
                <span>/</span>
                <span className="number-count">
                  0{portfolioList.length}
                </span>
                <span className="hidden xl:inline ml-3 text-white/40">
                  // USE SCROLL TO EXPLORE
                </span>
              </div>

              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-[1440px] border border-white/25 hover:border-white text-white font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all"
              >
                <span>All Projects</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TABLET & MOBILE VIEWPORT: Editorial Dark Touch Carousel (< 991px) */}
      {/* ========================================================================= */}
      <div className="block lg:hidden py-16 sm:py-24 px-6 sm:px-10">
        {/* Header Lockup */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#888888] block mb-2.5">
              STUDENT WORK & FIELDWORK
            </span>
            <h2 className="font-sans font-light text-[30px] sm:text-[40px] leading-[1.08] tracking-[-0.03em] text-white">
              Portfolio & Student Projects
            </h2>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollMobile("left")}
              aria-label="Previous project"
              className="w-10 h-10 rounded-full border border-white/20 hover:border-white flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollMobile("right")}
              aria-label="Next project"
              className="w-10 h-10 rounded-full border border-white/20 hover:border-white flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Touch Snap Carousel */}
        <div
          ref={mobileCarouselRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 scrollbar-none"
        >
          {portfolioList.map((item, index) => {
            const projectNumber = `0${index + 1}`;

            return (
              <div
                key={item.id}
                className="min-w-[280px] sm:min-w-[380px] snap-start shrink-0 flex flex-col gap-4 border border-white/10 p-5 bg-[#121212]"
              >
                {/* Image Frame */}
                <Link
                  href={`/portfolio/${item.slug}`}
                  className="block relative aspect-[4/3] w-full overflow-hidden border border-white/10"
                >
                  <Image
                    src={item.coverImage}
                    alt={`${item.title} by ${item.photographer}`}
                    fill
                    sizes="(max-width: 768px) 85vw, 400px"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/85 text-white font-mono text-[10px] uppercase tracking-[0.2em]">
                    PROJECT {projectNumber}
                  </div>
                </Link>

                {/* Details */}
                <div className="flex flex-col gap-2 pt-1">
                  <div className="flex items-center justify-between font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#888888]">
                    <span>{item.category}</span>
                    <span>{item.year}</span>
                  </div>

                  <Link href={`/portfolio/${item.slug}`} className="group">
                    <h3 className="font-sans font-light text-[22px] leading-snug tracking-[-0.02em] text-white group-hover:text-[var(--color-iip-yellow)] transition-colors">
                      {item.title}
                    </h3>
                  </Link>

                  <p className="font-sans text-[13.5px] leading-relaxed text-[#a3a3a3] line-clamp-3">
                    {item.summary}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-white/10 font-mono text-[11px] text-[#888888]">
                    <span>{item.photographer}</span>
                    <Link
                      href={`/portfolio/${item.slug}`}
                      className="text-[var(--color-iip-yellow)] flex items-center gap-1 uppercase tracking-[0.18em]"
                    >
                      <span>Explore</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Counter and All Projects Link */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10 font-mono text-[11px] uppercase tracking-[0.2em] text-[#888888]">
          <span>{portfolioList.length} Projects Total</span>
          <Link
            href="/portfolio"
            className="text-white hover:text-[var(--color-iip-yellow)] flex items-center gap-1.5 transition-colors"
          >
            <span>View Full Archive</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
