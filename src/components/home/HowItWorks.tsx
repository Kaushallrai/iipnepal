"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LineReveal from "@/components/animations/LineReveal";
import { howItWorksData, type TimelineStep } from "@/data/home/how-it-works";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export type { TimelineStep };

export const HOW_IT_WORKS_STEPS: TimelineStep[] = howItWorksData.steps;

export interface HowItWorksProps {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  steps?: TimelineStep[];
}

export default function HowItWorks({
  eyebrow = howItWorksData.eyebrow,
  heading = howItWorksData.heading,
  subheading = howItWorksData.subheading,
  steps = howItWorksData.steps,
}: HowItWorksProps): React.JSX.Element {
  const sectionRef = useRef<HTMLElement>(null);
  const spineRef = useRef<HTMLDivElement>(null);
  const nodeDotsRef = useRef<(HTMLDivElement | null)[]>([]);
  const connectorsRef = useRef<(HTMLDivElement | null)[]>([]);
  const stepBlocksRef = useRef<(HTMLDivElement | null)[]>([]);
  const apertureMotifRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const spine = spineRef.current;
    if (!section || !spine) return;

    const validBlocks = stepBlocksRef.current.filter(Boolean) as HTMLDivElement[];
    const validDots = nodeDotsRef.current.filter(Boolean) as HTMLDivElement[];
    const validConnectors = connectorsRef.current.filter(Boolean) as HTMLDivElement[];

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          once: true,
        },
      });

      // 1. Reveal aperture design motif
      if (apertureMotifRef.current) {
        masterTl.from(
          apertureMotifRef.current,
          {
            opacity: 0,
            scale: 0.88,
            rotate: -25,
            duration: 0.45,
            ease: "power2.out",
          },
          0
        );
      }

      // 2. Draw central vertical spine
      masterTl.from(
        spine,
        {
          scaleY: 0,
          transformOrigin: "top center",
          duration: 0.4,
          ease: "power2.inOut",
        },
        0.05
      );

      // 3. Reveal steps sequentially
      steps.forEach((_, idx) => {
        const dot = validDots[idx];
        const connector = validConnectors[idx];
        const block = validBlocks[idx];

        if (dot && block) {
          const stepTl = gsap.timeline();

          // Pop node dot
          stepTl.from(dot, {
            scale: 0,
            opacity: 0,
            duration: 0.15,
            ease: "back.out(2)",
          });

          // Draw connector hairline
          if (connector) {
            stepTl.from(
              connector,
              {
                scaleX: 0,
                transformOrigin: idx % 2 === 0 ? "right center" : "left center",
                opacity: 0,
                duration: 0.12,
                ease: "power2.out",
              },
              "-=0.08"
            );
          }

          // Fade block in
          stepTl.from(
            block,
            {
              opacity: 0,
              y: 16,
              duration: 0.22,
              ease: "power2.out",
            },
            "-=0.08"
          );

          masterTl.add(stepTl, idx === 0 ? "-=0.15" : "+=0.04");
        }
      });
    }, section);

    return () => ctx.revert();
  }, [steps]);


  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="w-full bg-[#fffef7] text-black relative z-20 py-24 sm:py-28 md:py-32 lg:py-36 overflow-hidden"
      aria-label="How IIP Nepal Works — Curriculum Roadmap"
    >
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 flex flex-col justify-between">
        {/* ============================================================ */}
        {/* 1. TOP HEADER: HEADING & SUBHEADING ON THE LEFT              */}
        {/* Right side features Photography Aperture Iris Motif (Design) */}
        {/* ============================================================ */}
        <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8 lg:mb-10 shrink-0 select-none">
          {/* Top-Left: Heading & Subheading ON THE LEFT with fluid responsive width */}
          <div className="flex-1 min-w-0 text-left">
            {/* Eyebrow with Yellow Accent Dot */}
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffd001] shrink-0 inline-block shadow-[0_0_8px_rgba(255,208,1,0.6)]" />
              <LineReveal
                as="span"
                lines={[eyebrow]}
                className="font-mono text-xs sm:text-sm tracking-[0.22em] uppercase font-semibold text-black/85"
              />
            </div>

            {/* Headline with clean, authoritative editorial typography that never overflows */}
            <LineReveal
              as="h2"
              lines={[heading]}
              className="font-sans font-light text-2xl sm:text-[26px] md:text-[28px] lg:text-[27px] xl:text-[30px] 2xl:text-[34px] leading-[1.14] tracking-[-0.03em] text-black mb-1.5 whitespace-normal lg:whitespace-nowrap"
            />

            {/* Subheading: concise and punchy */}
            <LineReveal
              as="p"
              lines={[subheading]}
              className="font-sans font-normal text-xs sm:text-[13px] md:text-[13.5px] lg:text-[14px] text-black/75 max-w-2xl leading-relaxed tracking-[-0.012em]"
            />
          </div>

          {/* Top-Right: Photography Aperture Iris Diaphragm Motif (Design detail, visible on tablet & desktop) */}
          <div
            ref={apertureMotifRef}
            className="hidden md:flex items-center gap-3.5 xl:gap-4 text-right shrink-0 md:ml-6"
          >
            <div className="flex flex-col items-end">
              <span className="font-mono text-[11px] xl:text-xs tracking-[0.2em] uppercase text-black/70 font-semibold">
                CURRICULUM ARCHITECTURE
              </span>
              <span className="font-mono text-[10px] xl:text-[11px] tracking-[0.16em] uppercase text-black/50">
                CONTINUOUS INTAKE // 4 STAGES
              </span>
            </div>

            {/* Geometric Optical Aperture Diaphragm SVG Graphic */}
            <div className="relative w-10 h-10 xl:w-12 xl:h-12 flex items-center justify-center">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full text-black/85"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {/* Outer Ring */}
                <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1.8" strokeDasharray="3 3" />
                <circle cx="50" cy="50" r="41" stroke="currentColor" strokeWidth="1" opacity="0.4" />
                
                {/* 8 Interlocking Iris Blade Chords */}
                <line x1="50" y1="12" x2="88" y2="50" stroke="currentColor" strokeWidth="1.4" opacity="0.5" />
                <line x1="88" y1="50" x2="50" y2="88" stroke="currentColor" strokeWidth="1.4" opacity="0.5" />
                <line x1="50" y1="88" x2="12" y2="50" stroke="currentColor" strokeWidth="1.4" opacity="0.5" />
                <line x1="12" y1="50" x2="50" y2="12" stroke="currentColor" strokeWidth="1.4" opacity="0.5" />
                <line x1="23" y1="23" x2="77" y2="23" stroke="currentColor" strokeWidth="1.4" opacity="0.5" />
                <line x1="77" y1="23" x2="77" y2="77" stroke="currentColor" strokeWidth="1.4" opacity="0.5" />
                <line x1="77" y1="77" x2="23" y2="77" stroke="currentColor" strokeWidth="1.4" opacity="0.5" />
                <line x1="23" y1="77" x2="23" y2="23" stroke="currentColor" strokeWidth="1.4" opacity="0.5" />

                {/* Center Aperture Opening & Optical Focus Point */}
                <circle cx="50" cy="50" r="14" fill="#fffef7" stroke="currentColor" strokeWidth="1.4" />
                <circle cx="50" cy="50" r="5" fill="#ffd001" />
              </svg>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 2. TIMELINE: RESPONSIVE LEFT RAIL (< lg) & CENTER SPINE (lg+) */}
        {/* Top-Left and Bottom-Right diagonal viewfinder reticles        */}
        {/* ============================================================ */}
        <div
          className="relative w-full max-w-5xl xl:max-w-6xl mx-auto flex-1 flex flex-col justify-center mt-6 sm:mt-8 lg:mt-12 mb-auto px-4 sm:px-8 md:px-12 lg:px-14 xl:px-16 pt-8 pb-8 sm:pt-10 sm:pb-10 lg:pt-8 lg:pb-8"
        >
          {/* DIAGONAL VIEWFINDER FRAMING RETICLES: Positioned outside or with breathing room */}
          <div
            className="absolute top-0 left-0 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 border-t border-l border-black/35 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 right-0 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 border-b border-r border-black/35 pointer-events-none"
            aria-hidden="true"
          />

          {/* Continuous Spine with Optical Graduation Ticks */}
          {/* Mobile/Tablet (< lg): Anchored along the left (left-3 sm:left-5) */}
          {/* Desktop (>= lg): Centered at left-1/2 */}
          <div
            ref={spineRef}
            className="absolute left-3 sm:left-5 lg:left-1/2 -translate-x-1/2 top-4 bottom-4 w-[1.5px] bg-black/15 lg:bg-black/20 pointer-events-none"
          >
            {/* Optical Lens Barrel Distance Ticks along spine */}
            <div className="absolute top-[12%] -left-1 w-2.5 h-[1px] bg-black/30 lg:bg-black/35" />
            <div className="absolute top-[37%] -left-1 w-2.5 h-[1px] bg-black/30 lg:bg-black/35" />
            <div className="absolute top-[62%] -left-1 w-2.5 h-[1px] bg-black/30 lg:bg-black/35" />
            <div className="absolute top-[87%] -left-1 w-2.5 h-[1px] bg-black/30 lg:bg-black/35" />
          </div>

          {/* 4 Timeline Rows */}
          <div className="w-full flex flex-col gap-y-7 sm:gap-y-8 lg:gap-y-3 relative">
            {steps.map((step, idx) => {
              const isLeft = idx % 2 === 0; // 0=left, 1=right, 2=left, 3=right on desktop

              return (
                <div
                  key={step.number}
                  className="w-full grid grid-cols-1 lg:grid-cols-2 relative items-start lg:items-center"
                >
                  {/* Spine Node: Camera Optical Focus Ring with Yellow Center */}
                  {/* On Mobile/Tablet: Left rail node (left-3 sm:left-5, top-1) */}
                  {/* On Desktop: Center spine node (left-1/2, top-1/2) */}
                  <div
                    ref={(el) => {
                      nodeDotsRef.current[idx] = el;
                    }}
                    className="flex absolute left-3 sm:left-5 lg:left-1/2 -translate-x-1/2 top-1 lg:top-1/2 -translate-y-0 lg:-translate-y-1/2 w-4 h-4 lg:w-4.5 lg:h-4.5 rounded-full bg-[#fffef7] border border-black/80 z-20 items-center justify-center pointer-events-none shadow-xs"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ffd001] block" />
                  </div>

                  {/* Hairline Connector to Spine */}
                  {/* Mobile/Tablet: Connects from node (left-3) to text box (w-4) */}
                  {/* Desktop: Hairline to the left or right of center */}
                  <div
                    ref={(el) => {
                      connectorsRef.current[idx] = el;
                    }}
                    className={`block absolute pointer-events-none bg-black/25 ${
                      // Mobile/Tablet: starts at circle node and points right
                      "left-3 sm:left-5 top-3 -translate-y-1/2 w-3.5 sm:w-4 h-[1px] lg:top-1/2 " +
                      // Desktop: starts at center spine
                      (isLeft
                        ? "lg:left-auto lg:right-1/2 lg:w-8 lg:xl:w-10"
                        : "lg:left-1/2 lg:w-8 lg:xl:w-10")
                    }`}
                  />

                  {/* ============================================================ */}
                  {/* STEP CONTENT                                                 */}
                  {/* Mobile/Tablet: Consistent left-aligned reading stack         */}
                  {/* Desktop: Alternates Left Column (01, 03) and Right (02, 04)  */}
                  {/* ============================================================ */}

                  {/* Desktop Left Column Slot (Steps 01, 03 on desktop) */}
                  <div
                    className={`w-full ${
                      isLeft
                        ? "flex justify-start lg:justify-end pl-9 sm:pl-12 lg:pl-0 lg:pr-8 xl:lg:pr-10"
                        : "hidden lg:flex justify-end lg:pr-8 xl:lg:pr-10 opacity-0 pointer-events-none select-none"
                    }`}
                  >
                    {isLeft && (
                      <div
                        ref={(el) => {
                          stepBlocksRef.current[idx] = el;
                        }}
                        className="w-full max-w-xl xl:max-w-[580px] flex flex-col text-left lg:text-right items-start lg:items-end select-none group"
                      >
                        {/* Step Phase & Number - Clean single line: Circle Node -> Hairline -> [ 01 ] -> Phase */}
                        <div className="flex items-center gap-2 mb-1 justify-start lg:justify-end whitespace-nowrap overflow-visible">
                          <span className="step-line-inner font-mono text-xs sm:text-[13px] font-bold tracking-[0.16em] text-[#ca8a04] shrink-0 lg:order-2">
                            [ {step.number} ]
                          </span>
                          <span className="text-black/30 text-xs shrink-0 lg:order-1">•</span>
                          <span className="step-line-inner font-mono text-[11px] sm:text-[12px] tracking-[0.14em] uppercase text-black/60 font-medium shrink-0 lg:order-0">
                            {step.phase}
                          </span>
                        </div>

                        {/* Title with Masked Line Container */}
                        <div className="overflow-hidden mb-1 sm:mb-1.5">
                          <h3 className="step-line-inner font-sans font-medium text-base sm:text-lg lg:text-[18.5px] xl:text-[19.5px] leading-snug text-black tracking-[-0.025em] group-hover:text-black transition-colors">
                            {step.title}
                          </h3>
                        </div>

                        {/* Rich, informative description */}
                        <div className="overflow-hidden">
                          <p className="step-line-inner font-sans font-normal text-[13px] sm:text-[13.5px] lg:text-[14px] xl:text-[14.5px] text-black/80 leading-relaxed max-w-xl xl:max-w-[560px]">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Desktop Right Column Slot (Steps 02, 04 on desktop) */}
                  <div
                    className={`w-full ${
                      !isLeft
                        ? "flex justify-start pl-9 sm:pl-12 lg:pl-8 xl:lg:pl-10"
                        : "hidden lg:flex justify-start lg:pl-8 xl:lg:pl-10 opacity-0 pointer-events-none select-none"
                    }`}
                  >
                    {!isLeft && (
                      <div
                        ref={(el) => {
                          stepBlocksRef.current[idx] = el;
                        }}
                        className="w-full max-w-xl xl:max-w-[580px] flex flex-col text-left items-start select-none group"
                      >
                        {/* Step Phase & Number - Clean single line: Circle Node -> Hairline -> [ 02 ] -> Phase */}
                        <div className="flex items-center gap-2 mb-1 justify-start whitespace-nowrap overflow-visible">
                          <span className="step-line-inner font-mono text-xs sm:text-[13px] font-bold tracking-[0.16em] text-[#ca8a04] shrink-0">
                            [ {step.number} ]
                          </span>
                          <span className="text-black/30 text-xs shrink-0">•</span>
                          <span className="step-line-inner font-mono text-[11px] sm:text-[12px] tracking-[0.14em] uppercase text-black/60 font-medium shrink-0">
                            {step.phase}
                          </span>
                        </div>

                        {/* Title with Masked Line Container */}
                        <div className="overflow-hidden mb-1 sm:mb-1.5">
                          <h3 className="step-line-inner font-sans font-medium text-base sm:text-lg lg:text-[18.5px] xl:text-[19.5px] leading-snug text-black tracking-[-0.025em] group-hover:text-black transition-colors">
                            {step.title}
                          </h3>
                        </div>

                        {/* Rich, informative description */}
                        <div className="overflow-hidden">
                          <p className="step-line-inner font-sans font-normal text-[13px] sm:text-[13.5px] lg:text-[14px] xl:text-[14.5px] text-black/80 leading-relaxed max-w-xl xl:max-w-[560px]">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
