"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { Globe, Users, Layers } from "lucide-react";
import LineReveal from "@/components/animations/LineReveal";

export interface WhatWeDoStat {
  value: string;
  label: string;
  icon: "globe" | "audience" | "prism";
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
  heading = "We are artists, designers, producers, creatives, clients and technicians. We work together to create immersive experiences and bring ideas to life in real-world spaces.",
  description = "We go beyond the traditional agency model and empower people across different industries to realise their creative ambitions. From the marketing director looking for more impact, to the artist reaching out to new audiences - we have the experience, the dedication, the skills and the resources to make seemingly impossible projects happen. Our clients don’t hire us, they join us. And in doing so, become Creative Giants themselves.",
  stats = [
    {
      value: "100+",
      label: "Years of combined experience in creative production, design.",
      icon: "globe",
      delay: 0,
    },
    {
      value: "2.5m",
      label: "People reached annually through art experiences and installations.",
      icon: "audience",
      delay: 0.15,
    },
    {
      value: "20+",
      label: "Large-scale projects delivered for festivals, agencies, and brands.",
      icon: "prism",
      delay: 0.3,
    },
  ],
}: WhatWeDoProps): React.JSX.Element {
  const sectionRef = useRef<HTMLElement>(null);
  const statIconsRef = useRef<(HTMLDivElement | null)[]>([]);
  const hasAnimatedStatsRef = useRef(false);

  useEffect(() => {
    const validIcons = statIconsRef.current.filter(Boolean);
    if (validIcons.length === 0) return;

    if (hasAnimatedStatsRef.current) {
      gsap.set(validIcons, { opacity: 1, scale: 1, y: 0 });
      return;
    }

    gsap.set(validIcons, { opacity: 0, scale: 0.85, y: 12 });

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimatedStatsRef.current) {
          hasAnimatedStatsRef.current = true;
          observer.disconnect();

          gsap.to(validIcons, {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.15,
            stagger: 0.12,
            ease: "power3.out",
          });
        }
      },
      { rootMargin: "0px 0px -15% 0px", threshold: 0.02 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      if (hasAnimatedStatsRef.current) {
        gsap.set(validIcons, { opacity: 1, scale: 1, y: 0 });
      }
    };
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
                          className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 shrink-0 flex items-center justify-center text-black will-change-transform"
                        >
                          {stat.icon === "globe" && (
                            <Globe className="w-full h-full text-black" strokeWidth={1.5} />
                          )}
                          {stat.icon === "audience" && (
                            <Users className="w-full h-full text-black" strokeWidth={1.5} />
                          )}
                          {stat.icon === "prism" && (
                            <Layers className="w-full h-full text-black" strokeWidth={1.5} />
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
