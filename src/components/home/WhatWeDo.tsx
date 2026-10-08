"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Camera, GraduationCap, Award } from "lucide-react";
import LineReveal from "@/components/animations/LineReveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface WhatWeDoStat {
  value: string;
  label: string;
  icon: "camera" | "alumni" | "practical" | "globe" | "audience" | "prism";
  delay?: number;
}

export interface WhatWeDoProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  stats?: WhatWeDoStat[];
}

export default function WhatWeDo({
  eyebrow = "What we do",
  heading = "We train photographers, visual storytellers, and image-makers through manual camera craft, darkroom chemistry, and practical field assignments across Kathmandu.",
  description = "As the Nepal centre of the Indian Institute of Photography, established with White Hat Events, we offer structured photography courses for beginners and working professionals. Our training combines technical camera controls, studio strobe lighting, monochrome darkroom printing, and individual mentor reviews on every submitted assignment.",
  stats = [
    {
      value: "14+",
      label: "Years of photography education and training heritage.",
      icon: "camera",
      delay: 0,
    },
    {
      value: "500+",
      label: "Alumni working across documentary, commercial, and editorial photography.",
      icon: "alumni",
      delay: 0.15,
    },
    {
      value: "100%",
      label: "Hands-on field shoots, studio lighting labs, and mentor critique.",
      icon: "practical",
      delay: 0.3,
    },
  ],
}: WhatWeDoProps): React.JSX.Element {
  const sectionRef = useRef<HTMLElement>(null);
  const statIconsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const validIcons = statIconsRef.current.filter(Boolean);
    const section = sectionRef.current;
    if (!section || validIcons.length === 0) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(validIcons, {
        opacity: 0,
        scale: 0.85,
        y: 12,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          once: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);


  return (
    <section
      id="about"
      ref={sectionRef}
      className="section_what w-full bg-[#fffef7] text-black relative z-20 py-24 sm:py-28 md:py-32 lg:py-36 overflow-hidden"
    >
      {/* Full-bleed container with consistent fixed side spacing across all screens */}
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        {/* ============================================================ */}
        {/* 1. SECTION HEADER: Eyebrow + Statement Headline (TO THE LEFT) */}
        {/* Starts directly at the left margin, utilizing horizontal space */}
        {/* ============================================================ */}
        <div className="w-full text-left mb-10 sm:mb-12 md:mb-14">
          {/* Eyebrow with Line Reveal & Yellow Accent Dot */}
          <div className="flex items-center gap-2.5 mb-4 sm:mb-5 select-none">
            <span className="w-2 h-2 rounded-full bg-[#ffd001] shrink-0 inline-block shadow-[0_0_8px_rgba(255,208,1,0.6)]" />
            <LineReveal
              as="span"
              lines={[eyebrow]}
              className="font-mono text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold text-black"
            />
          </div>

          {/* Statement Headline with Creative Giants line reveal */}
          <LineReveal
            as="h2"
            lines={[heading]}
            className="font-sans font-light text-2xl sm:text-3xl md:text-4xl lg:text-[46px] xl:text-[52px] leading-[1.14] tracking-[-0.035em] text-black max-w-5xl xl:max-w-6xl"
          />
        </div>

        {/* ============================================================ */}
        {/* 2. MAIN CONTENT (Description + Stats): IN THE MIDDLE         */}
        {/* Balanced in the center, seamless flow with NO separator line */}
        {/* ============================================================ */}
        <div className="w-full flex flex-col items-center ">
          <div className="w-full max-w-4xl lg:max-w-5xl mx-auto flex flex-col gap-14 sm:gap-16 md:gap-20">
            {/* Subdescription with Creative Giants masked line reveal */}
            <LineReveal
              as="p"
              lines={[description]}
              className="text-base sm:text-lg md:text-xl text-[#555555] font-normal leading-[1.65] tracking-[-0.018em] text-left"
            />

            {/* Stats: Concept 2 (2 + 1 balanced grid on mobile, flat 3-column row on tablet/desktop) */}
            <div className="w-full pt-4 sm:pt-0">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-10 sm:gap-6 md:gap-10 lg:gap-12">
                {stats.map((stat, idx) => {
                  // On mobile: 1st and 2nd sit side-by-side in col-span-1.
                  // 3rd stat spans both columns (col-span-2) and sits centered.
                  // On tablet/desktop (sm: and up): each takes 1 column in a 3-column grid.
                  const layoutClass =
                    idx === 2
                      ? "col-span-2 sm:col-span-1 max-w-[280px] mx-auto sm:max-w-none sm:mx-0"
                      : "col-span-1";

                  return (
                    <div
                      key={idx}
                      className={`flex flex-col items-start text-left gap-3 sm:gap-3.5 ${layoutClass}`}
                    >
                      {/* Top: Icon + Number with Smooth Motion Animation */}
                      <div className="flex items-center gap-3 sm:gap-3.5">
                        <div
                          ref={(el) => {
                            statIconsRef.current[idx] = el;
                          }}
                          className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 shrink-0 flex items-center justify-center text-black"
                        >
                          {stat.icon === "camera" && (
                            <Camera className="w-full h-full text-black" strokeWidth={1.5} />
                          )}
                          {(stat.icon === "alumni" || stat.icon === "audience") && (
                            <GraduationCap className="w-full h-full text-black" strokeWidth={1.5} />
                          )}
                          {(stat.icon === "practical" || stat.icon === "prism" || stat.icon === "globe") && (
                            <Award className="w-full h-full text-black" strokeWidth={1.5} />
                          )}
                        </div>
                        <LineReveal
                          as="span"
                          lines={[stat.value]}
                          className="font-sans font-light text-3xl sm:text-4xl md:text-5xl leading-none tracking-[-0.035em] text-black"
                        />
                      </div>

                      {/* Bottom: Caption Label with Line Reveal */}
                      <LineReveal
                        as="p"
                        lines={[stat.label]}
                        className="text-xs sm:text-[13px] md:text-sm text-[#666666] leading-snug font-normal max-w-[28ch]"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
