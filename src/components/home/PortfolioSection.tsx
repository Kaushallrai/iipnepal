"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Mousewheel } from "swiper/modules";
import type { Swiper as SwiperCore } from "swiper";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LineReveal from "@/components/animations/LineReveal";
import { homePortfolioData, type HomePortfolioItem } from "@/data/home/portfolio";

import "swiper/css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export type PortfolioItem = HomePortfolioItem;

export const PORTFOLIO_ITEMS: PortfolioItem[] = homePortfolioData.items;

export interface PortfolioSectionProps {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  items?: PortfolioItem[];
}

export default function PortfolioSection({
  eyebrow = homePortfolioData.eyebrow,
  heading = homePortfolioData.heading,
  subheading = homePortfolioData.subheading,
  items = homePortfolioData.items,
}: PortfolioSectionProps): React.JSX.Element {
  const sectionRef = useRef<HTMLElement>(null);
  const pinnedRef = useRef<HTMLDivElement>(null);
  const stageContainerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  // Jump smoothly to a specific project on desktop
  const handleJumpToSlide = useCallback(
    (index: number) => {
      const st = scrollTriggerRef.current;
      if (!st) return;

      const targetProgress = index / (items.length - 1);
      const targetScroll = st.start + targetProgress * (st.end - st.start);
      const lenis = (window as unknown as {
        lenis?: { scrollTo: (target: number, opts?: { duration?: number }) => void };
      }).lenis;

      if (lenis && typeof lenis.scrollTo === "function") {
        lenis.scrollTo(targetScroll, { duration: 0.5 });
      } else {
        window.scrollTo({
          top: targetScroll,
          behavior: "smooth",
        });
      }
    },
    [items.length]
  );

  const handlePrevDesktop = useCallback(() => {
    const st = scrollTriggerRef.current;
    if (!st) return;
    const currentProgress = st.progress;
    const currentIdx = Math.round(currentProgress * (items.length - 1));
    const prevIdx = Math.max(0, currentIdx - 1);
    handleJumpToSlide(prevIdx);
  }, [handleJumpToSlide, items.length]);

  const handleNextDesktop = useCallback(() => {
    const st = scrollTriggerRef.current;
    if (!st) return;
    const currentProgress = st.progress;
    const currentIdx = Math.round(currentProgress * (items.length - 1));
    const nextIdx = Math.min(items.length - 1, currentIdx + 1);
    handleJumpToSlide(nextIdx);
  }, [handleJumpToSlide, items.length]);

  // Creative Giants Continuous Smooth Horizontal Glide with Multi-Plane Parallax (NO Snapping)
  useEffect(() => {
    if (!sectionRef.current || !pinnedRef.current || !stageContainerRef.current || !trackRef.current) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const stage = stageContainerRef.current;
      const track = trackRef.current;
      const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
      if (!stage || !track || cards.length === 0) return;

      const stageWidth = stage.clientWidth;
      const cardWidth = cards[0].clientWidth;
      const gap = 96; // generous distance between cards

      // Calculate the offset required to center Card 1 directly in the viewport initially
      const initialCenterOffset = Math.max(0, (stageWidth - cardWidth) / 2);

      // Set symmetric track padding so Card 1 starts centered and Card 3 finishes centered
      track.style.paddingLeft = `${initialCenterOffset}px`;
      track.style.paddingRight = `${initialCenterOffset}px`;
      track.style.gap = `${gap}px`;

      // Total horizontal translation distance from Card 1 center to Card 3 center
      const totalScrollDistance = (cards.length - 1) * (cardWidth + gap);

      // 1. Primary Continuous Horizontal Scroll Tween (ease: "none" for direct linear scrub)
      const horizontalTween = gsap.to(track, {
        x: -totalScrollDistance,
        ease: "none",
        scrollTrigger: {
          id: "portfolio-horizontal",
          trigger: sectionRef.current,
          pin: pinnedRef.current,
          start: "top top",
          end: () => `+=${(cards.length - 1) * 360}`, // calibrated so 1 scroll advances to the next project
          scrub: 0.25, // responsive, instant scrub without sluggish lag
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const p = self.progress;

            // Instant GPU scaleX update on the bottom progress bar (No React lag!)
            if (progressBarRef.current) {
              const currentScale = Math.max(0.08, Math.min(1, p));
              progressBarRef.current.style.transform = `scaleX(${currentScale})`;
            }

            // Direct DOM update on active index counter [ 01 / 03 ] (No React re-render overhead!)
            if (counterRef.current) {
              const slideIndex = Math.min(
                items.length,
                Math.floor(p * items.length + 0.35) + 1
              );
              counterRef.current.textContent = `0${slideIndex}`;
            }
          },
        },
      });

      scrollTriggerRef.current = horizontalTween.scrollTrigger || null;

      // 2. Creative Giants Multi-Plane Parallax on Text Column & Photo Frame
      cards.forEach((card) => {
        const textCol = card.querySelector<HTMLElement>(".card-text-wrap");
        const photoInner = card.querySelector<HTMLElement>(".card-inner-photo");
        const metaStamp = card.querySelector<HTMLElement>(".card-meta-stamp");

        // Text translates at distinct rate creating layered spatial depth
        if (textCol) {
          gsap.fromTo(
            textCol,
            { xPercent: 18 },
            {
              xPercent: -18,
              ease: "none",
              scrollTrigger: {
                containerAnimation: horizontalTween,
                trigger: card,
                start: "left right",
                end: "right left",
                scrub: true,
              },
            }
          );
        }

        // Photograph pans horizontally inside its overflow-hidden exhibition frame
        if (photoInner) {
          gsap.fromTo(
            photoInner,
            { xPercent: 15, scale: 1.08 },
            {
              xPercent: -15,
              scale: 1.08,
              ease: "none",
              scrollTrigger: {
                containerAnimation: horizontalTween,
                trigger: card,
                start: "left right",
                end: "right left",
                scrub: true,
              },
            }
          );
        }

        // Museum stamp subtle float
        if (metaStamp) {
          gsap.fromTo(
            metaStamp,
            { xPercent: 25 },
            {
              xPercent: -20,
              ease: "none",
              scrollTrigger: {
                containerAnimation: horizontalTween,
                trigger: card,
                start: "left right",
                end: "right left",
                scrub: true,
              },
            }
          );
        }
      });

      const refreshTimer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 250);

      return () => {
        clearTimeout(refreshTimer);
        horizontalTween.kill();
        const existingSt = ScrollTrigger.getById("portfolio-horizontal");
        if (existingSt) existingSt.kill();
        scrollTriggerRef.current = null;
        gsap.set(track, { x: 0 });
      };
    });

    return () => {
      mm.revert();
    };
  }, [items.length]);

  const [swiperActiveIndex, setSwiperActiveIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperInstanceRef = useRef<SwiperCore | null>(null);

  const handlePrevSlide = useCallback(() => {
    swiperInstanceRef.current?.slidePrev();
  }, []);

  const handleNextSlide = useCallback(() => {
    swiperInstanceRef.current?.slideNext();
  }, []);

  return (
    <section
      id="portfolio"
      data-theme="dark"
      ref={sectionRef}
      aria-label="Photography Portfolio and Student Fieldwork"
      className="relative w-full bg-[#0a0a0a] text-white z-20 overflow-hidden py-24 sm:py-28 md:py-32 lg:py-0"
    >
      {/* ========================================================================= */}
      {/* 1. DESKTOP VIEWPORT: Pinned Stage with Fixed Editorial Header             */}
      {/* Centered Initial Card, Pure Linear Smooth Glide, and Zero Snapping       */}
      {/* ========================================================================= */}
      <div
        ref={pinnedRef}
        data-theme="dark"
        className="hidden lg:flex flex-col justify-between w-full h-screen min-h-[720px] max-h-[1080px] pt-[108px] pb-12 px-6 sm:px-8 md:px-12 lg:px-16 max-w-[105rem] mx-auto overflow-hidden bg-[#0a0a0a]"
      >
        {/* ============================================================ */}
        {/* 1. EDITORIAL HEADER: Eyebrow + Heading + View All Archive    */}
        {/* Fixed at top-left, matching Courses & How It Works           */}
        {/* ============================================================ */}
        <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-4 mb-3 lg:mb-4 shrink-0 select-none">
          <div className="max-w-3xl text-left">
            {/* Eyebrow with Line Reveal & Signal Yellow Dot */}
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#ffd001] shrink-0 inline-block shadow-[0_0_8px_rgba(255,208,1,0.6)]" />
              <LineReveal
                as="span"
                lines={[eyebrow]}
                className="font-mono text-xs sm:text-[13px] tracking-[0.22em] uppercase font-semibold text-white/90"
              />
            </div>

            {/* Statement Headline with masked line reveal */}
            <LineReveal
              as="h2"
              lines={[heading]}
              className="font-sans font-light text-2xl sm:text-3xl lg:text-[40px] leading-[1.12] tracking-[-0.035em] text-white mb-2"
            />

            {/* Subheading with masked line reveal */}
            <LineReveal
              as="p"
              lines={[subheading]}
              className="font-sans font-normal text-sm sm:text-base text-white/60 max-w-2xl leading-relaxed tracking-[-0.01em]"
            />
          </div>

          {/* Top Action: View All Portfolio Button with Signal Yellow Accent & Desktop Nav Arrows */}
          <div className="shrink-0 pt-1 md:pt-0 select-none flex items-center gap-3">
            <Link
              href="/portfolio"
              className="group/all inline-flex items-center gap-0.5 font-mono text-xs sm:text-[13px] tracking-[0.16em] uppercase text-white hover:bg-[#ffd001] hover:text-black px-2 py-1 transition-all duration-150 font-medium leading-none"
            >
              <span className="text-[#ffd001] group-hover/all:text-black font-semibold transition-colors">[</span>
              <span className="px-1">VIEW ALL PORTFOLIO</span>
              <span className="text-[#ffd001] group-hover/all:text-black font-semibold transition-colors">]</span>
            </Link>

            <div className="hidden lg:flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrevDesktop}
                aria-label="Previous portfolio project"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 hover:border-[#ffd001] hover:bg-[#ffd001] hover:text-black active:scale-95 text-white/80 flex items-center justify-center transition-all duration-200 text-sm cursor-pointer"
              >
                ←
              </button>

              <button
                type="button"
                onClick={handleNextDesktop}
                aria-label="Next portfolio project"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 hover:border-[#ffd001] hover:bg-[#ffd001] hover:text-black active:scale-95 text-white/80 flex items-center justify-center transition-all duration-200 text-sm cursor-pointer"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 2. MAIN STAGE: Centered Initial Card + Continuous Parallax   */}
        {/* ============================================================ */}
        <div
          ref={stageContainerRef}
          className="w-full flex-1 min-h-0 relative flex items-center overflow-hidden my-auto py-2"
        >
          <div
            ref={trackRef}
            className="flex flex-row items-center h-full w-max select-none will-change-transform"
          >
            {items.map((item, index) => {
              return (
                <div
                  key={item.id}
                  ref={(el) => {
                    cardsRef.current[index] = el;
                  }}
                  className="portfolio-card shrink-0 w-[78vw] max-w-[1180px] xl:max-w-[1280px] 2xl:max-w-[1360px] h-[92%] max-h-[570px] grid grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center"
                >
                  {/* --------------------------------------------------------- */}
                  {/* LEFT COLUMN: 5 Columns for Title, Metadata & Story Copy   */}
                  {/* --------------------------------------------------------- */}
                  <div className="card-text-wrap col-span-5 flex flex-col justify-center gap-4 text-left will-change-transform pr-2">
                    {/* Top Index & Tagline */}
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#ffd001] font-semibold">
                        PORTFOLIO // {item.number}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-white/30" />
                      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/50">
                        {item.tag}
                      </span>
                    </div>

                    {/* Headline in Clean Poster Sans Light */}
                    <h3 className="font-sans font-light text-3xl lg:text-[38px] xl:text-[44px] 2xl:text-[48px] leading-[1.08] tracking-[-0.035em] text-white text-balance">
                      {item.title}
                    </h3>

                    {/* Photographer & Fieldwork Spec Metadata */}
                    <div className="flex flex-col gap-1.5 font-mono text-xs uppercase tracking-[0.16em] text-white/50 pt-3 border-t border-white/10">
                      <div className="flex items-center justify-between text-white/85">
                        <span className="font-medium text-white">{item.photographer}</span>
                        <span className="text-[#ffd001]">{item.discipline}</span>
                      </div>
                      <div className="text-[11px] text-white/40">
                        {item.location} • {item.year}
                      </div>
                    </div>

                    {/* Editorial Description */}
                    <p className="font-sans font-light text-xs sm:text-sm lg:text-[14.5px] leading-relaxed text-white/70 max-w-lg">
                      {item.description}
                    </p>

                    {/* View Story Action Button with Yellow Bracket Accents */}
                    <div className="pt-2">
                      <Link
                        href={`/portfolio/${item.slug}`}
                        className="group/story inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.18em] text-[#ffd001] hover:text-white font-semibold transition-colors"
                      >
                        <span className="border-b border-[#ffd001]/50 group-hover/story:border-white pb-0.5 transition-colors">
                          View story
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/story:translate-x-0.5 group-hover/story:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>

                  {/* --------------------------------------------------------- */}
                  {/* RIGHT COLUMN: 7 Columns for Exhibition Frame Photo & Sheen */}
                  {/* --------------------------------------------------------- */}
                  <div className="card-photo-wrap col-span-7 flex items-center justify-center relative">
                    <Link
                      href={`/portfolio/${item.slug}`}
                      className="block w-full group overflow-hidden border border-white/15 bg-[#050505] shadow-[0_24px_64px_-16px_rgba(0,0,0,0.95)] select-none"
                    >
                      <div className="relative aspect-[16/10] xl:aspect-[16/9.5] w-full overflow-hidden">
                        {/* Pure Black and White Photographic Print with Parallax Panning */}
                        <div className="card-inner-photo absolute -inset-x-14 inset-y-0 will-change-transform">
                          <Image
                            src={item.image}
                            alt={`${item.title} by ${item.photographer}`}
                            fill
                            sizes="(max-width: 1440px) 720px, 860px"
                            priority={index === 0}
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                            style={{
                              filter: "grayscale(100%) contrast(1.12) brightness(1.02)",
                            }}
                          />
                        </div>

                        {/* Top-Right Museum Spec Marking */}
                        <div className="card-meta-stamp absolute top-3 right-3 font-mono text-[9.5px] uppercase tracking-[0.25em] text-white/80 bg-black/60 px-2 py-0.5 backdrop-blur-sm border border-white/10 pointer-events-none will-change-transform">
                          {item.medium}
                        </div>

                        {/* Refined Glassmorphism Sheen & Specular Highlights */}
                        <div
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 45%, rgba(255,255,255,0.02) 100%)",
                          }}
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ============================================================ */}
        {/* 3. FIXED BOTTOM BAR: Generous Spacing, Instant GPU Progress  */}
        {/* Clean minimal [ 01 / 03 ] index and zero staggering         */}
        {/* ============================================================ */}
        <div className="w-full pt-4 pb-4 lg:pb-6 shrink-0 select-none pointer-events-auto">
          <div className="flex flex-col gap-5">
            {/* 2px Hairline Progress Track with instant hardware-accelerated GPU scaleX (NO CSS delay!) */}
            <div className="w-full h-[2px] bg-white/15 relative overflow-hidden">
              <div
                ref={progressBarRef}
                className="h-full bg-[#ffd001] w-full origin-left will-change-transform shadow-[0_0_10px_rgba(255,208,1,0.6)]"
                style={{ transform: "scaleX(0.08)" }}
              />
            </div>

            {/* Pagination Numbers & Action with comfortable spacing */}
            <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.2em]">
              {/* Left: Clean [ 01 / 03 ] without dots */}
              <div className="text-white/60 flex items-center gap-1 font-mono text-xs sm:text-[13px] tracking-[0.25em] pl-10 sm:pl-14">
                <span>[ </span>
                <span ref={counterRef} className="text-white font-semibold text-sm">
                  01
                </span>
                <span> / 0{items.length} ]</span>
              </div>

              {/* Right: Direct Link to Complete Archive */}
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-1.5 text-white/80 hover:text-[#ffd001] transition-colors font-medium tracking-[0.2em]"
              >
                <span>COMPLETE ARCHIVE</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. MOBILE / TABLET VIEWPORT: Touch Peek Swiper (< 1024px)                 */}
      {/* Museum Darkroom Exhibition Cards with Live Indicator & Direct Touch Swipe */}
      {/* ========================================================================= */}
      <div className="lg:hidden px-6 sm:px-8 md:px-12 lg:px-16 max-w-[105rem] mx-auto flex flex-col gap-6 overflow-visible">
        {/* Mobile Header: Clean, borderless header with Eyebrow, Heading & Navigation Arrows */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-2 gap-4 select-none">
          <div className="flex flex-col gap-1.5 max-w-xl text-left">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ffd001] shrink-0 inline-block shadow-[0_0_8px_rgba(255,208,1,0.6)]" />
              <LineReveal
                as="span"
                lines={[eyebrow]}
                className="font-mono text-xs tracking-[0.22em] uppercase font-semibold text-white/90"
              />
            </div>
            <LineReveal
              as="h2"
              lines={[heading]}
              className="font-sans font-light text-2xl sm:text-3xl leading-tight text-white tracking-[-0.03em]"
            />
            <LineReveal
              as="p"
              lines={[subheading]}
              className="font-sans font-normal text-xs sm:text-[13px] text-white/60 leading-relaxed"
            />
          </div>

          {/* Action Row & Circular Arrow Buttons */}
          <div className="flex items-center justify-between sm:justify-end gap-3 pt-1 sm:pt-0 shrink-0">
            <Link
              href="/portfolio"
              className="group/all inline-flex items-center gap-0.5 font-mono text-xs uppercase tracking-[0.16em] text-white hover:bg-[#ffd001] hover:text-black px-2 py-1 transition-all duration-150 font-medium leading-none"
            >
              <span className="text-[#ffd001] group-hover/all:text-black font-semibold transition-colors">[</span>
              <span className="px-1">ARCHIVE</span>
              <span className="text-[#ffd001] group-hover/all:text-black font-semibold transition-colors">]</span>
            </Link>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrevSlide}
                disabled={isBeginning}
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center transition-all duration-200 text-sm ${
                  isBeginning
                    ? "opacity-25 border-white/10 pointer-events-none cursor-not-allowed text-white/30"
                    : "hover:border-[#ffd001] hover:bg-[#ffd001] hover:text-black active:scale-95 text-white/80 cursor-pointer"
                }`}
                aria-label="Previous portfolio item"
              >
                ←
              </button>
              <button
                type="button"
                onClick={handleNextSlide}
                disabled={isEnd}
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center transition-all duration-200 text-sm ${
                  isEnd
                    ? "opacity-25 border-white/10 pointer-events-none cursor-not-allowed text-white/30"
                    : "hover:border-[#ffd001] hover:bg-[#ffd001] hover:text-black active:scale-95 text-white/80 cursor-pointer"
                }`}
                aria-label="Next portfolio item"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Swipeable Track: Touch Peek Cards */}
        <div className="w-full overflow-visible" style={{ clipPath: "inset(0 -100vw 0 0)" }}>
          <Swiper
            modules={[Navigation, Keyboard, Mousewheel]}
            slidesPerView="auto"
            spaceBetween={18}
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
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
              setSwiperActiveIndex(swiper.activeIndex);
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
              setSwiperActiveIndex(swiper.activeIndex);
            }}
            className="w-full !overflow-visible"
          >
            {items.map((item, idx) => (
              <SwiperSlide
                key={item.id}
                className="!w-[88vw] sm:!w-[520px] md:!w-[600px] max-w-[620px] !h-auto flex flex-col cursor-pointer"
                onClick={() => {
                  if (swiperActiveIndex !== idx) {
                    swiperInstanceRef.current?.slideTo(idx);
                  }
                }}
              >
                {/* Museum Exhibition Card Shell - Clean, Focused, High-Impact */}
                <div className="relative w-full bg-[#111111] border border-white/10 p-4 sm:p-5 flex flex-col gap-3.5 text-left select-none group transition-all duration-200 hover:border-white/25 shadow-[0_24px_54px_-12px_rgba(0,0,0,0.95)]">
                  {/* Top Bar: Index & Tagline ABOVE the photo */}
                  <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.2em] text-white/50">
                    <span className="text-[#ffd001] font-semibold">
                      PORTFOLIO // {item.number}
                    </span>
                    <span className="text-white/60 tracking-[0.14em]">{item.tag}</span>
                  </div>

                  {/* Photo Frame: Maximum Visual Impact */}
                  <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden bg-black border border-white/10">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      priority={idx === 0}
                      sizes="(max-width: 640px) 88vw, (max-width: 1024px) 600px, 620px"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      style={{
                        filter: "grayscale(100%) contrast(1.12) brightness(1.02)",
                      }}
                    />

                    {/* Specular sheen overlay */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(130deg, rgba(255,255,255,0.2) 0%, transparent 40%, rgba(255,255,255,0.05) 100%)",
                      }}
                    />

                    {/* Medium / Gear Badge */}
                    <div className="absolute bottom-2.5 right-2.5 bg-black/85 backdrop-blur-sm border border-white/20 px-2 py-0.5 text-[10px] font-mono tracking-wider uppercase text-white/90">
                      {item.medium}
                    </div>
                  </div>

                  {/* Card Content Below Photo: Title, Description, Author & Circle View Button */}
                  <div className="flex flex-col gap-2 pt-0.5">
                    {/* Title */}
                    <h3 className="font-sans font-light text-xl sm:text-2xl text-white leading-tight tracking-[-0.025em]">
                      {item.title}
                    </h3>

                    {/* Concise Narrative */}
                    <p className="font-sans font-light text-xs sm:text-[13px] text-white/70 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>

                    {/* Photographer & Circular Arrow View Button */}
                    <div className="pt-2.5 flex items-center justify-between border-t border-white/10 mt-1">
                      <div className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-white/60">
                        <span className="text-white font-medium">{item.photographer}</span>
                        <span className="text-white/30">·</span>
                        <span className="text-white/50">{item.location}</span>
                      </div>

                      {/* Clean Circular Arrow Button */}
                      <Link
                        href={`/portfolio/${item.slug}`}
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`View ${item.title}`}
                        className="w-8 h-8 rounded-full border border-white/25 flex items-center justify-center text-white/80 hover:text-black hover:bg-[#ffd001] hover:border-[#ffd001] active:scale-95 transition-all duration-200 shrink-0 group/circle"
                      >
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover/circle:translate-x-0.5 group-hover/circle:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Minimal Centered [ 01 / 03 ] Indicator Below Cards */}
        <div className="w-full flex items-center justify-center pt-1 select-none">
          <div className="inline-flex items-center gap-1.5 font-mono text-xs sm:text-[13px] tracking-[0.24em] text-white/50">
            <span className="text-[#ffd001] font-semibold">[</span>
            <span className="text-white font-medium">{items[swiperActiveIndex]?.number}</span>
            <span className="text-white/30">/</span>
            <span>0{items.length}</span>
            <span className="text-[#ffd001] font-semibold">]</span>
          </div>
        </div>
      </div>
    </section>
  );
}
