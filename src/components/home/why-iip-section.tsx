"use client";

import { useRef } from "react";
import { Globe, Users, Award } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { LineReveal } from "@/components/animations/line-reveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function WhyIipSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const line = lineRef.current;
      const metrics = metricsRef.current;
      const eyebrow = eyebrowRef.current;
      if (!section) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        if (line) gsap.set(line, { scaleX: 1 });
        if (metrics) gsap.set(metrics.children, { opacity: 1, y: 0 });
        if (eyebrow) gsap.set(eyebrow, { opacity: 1, y: 0 });
        return;
      }

      // Eyebrow fade in with dot pulse
      if (eyebrow) {
        gsap.fromTo(
          eyebrow,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              once: true,
            },
          }
        );
      }

      // Hairline divider drawing animation
      if (line) {
        gsap.fromTo(
          line,
          { scaleX: 0, transformOrigin: "left" },
          {
            scaleX: 1,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: line,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      // 3 Key metrics stagger reveal
      if (metrics) {
        gsap.fromTo(
          metrics.children,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.14,
            ease: "power2.out",
            scrollTrigger: {
              trigger: metrics,
              start: "top 85%",
              once: true,
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      aria-label="About IIP Nepal & Mission"
      className="w-full bg-[var(--color-bone-white)] py-20 sm:py-28 lg:py-36 border-b border-[var(--color-hairline)]"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Creative Giants "WHAT WE DO" Eyebrow & Giant Manifesto Statement */}
        <div className="max-w-4xl mb-14 sm:mb-18 lg:mb-20">
          <div
            ref={eyebrowRef}
            className="flex items-center gap-2.5 font-mono text-[12px] uppercase tracking-[0.25em] text-[var(--color-graphite)] mb-6 select-none"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-ink-black)] inline-block" />
            <span>WHAT WE DO // VISION & MISSION</span>
          </div>

          {/* Creative Giants Signature Line-by-Line Reveal on Headline */}
          <LineReveal
            as="h2"
            lines={[
              "“To emerge as ‘Institute of National Importance",
              "in promoting Cultural and Creative Arts of India, globally’",
              "by guiding and inculcating knowledge in learners mindset",
              "from world over to become artists, thinkers and leaders.”",
            ]}
            className="font-sans font-light text-[var(--color-ink-black)] text-[24px] sm:text-[34px] lg:text-[42px] leading-[1.18] tracking-[-0.03em] text-balance mb-6"
            duration={0.75}
            stagger={0.08}
            startTrigger="top 78%"
          />

          {/* Supporting Narrative with Line-by-Line Reveal */}
          <LineReveal
            as="p"
            lines={[
              "We go beyond traditional classrooms. IIP Nepal offers short-term courses,",
              "weekend workshops, and mentor-led diploma programs, designed to develop creative",
              "vision and manual exposure mastery in real-world spaces.",
            ]}
            className="font-sans text-[16px] sm:text-[18px] leading-[1.7] text-[var(--color-graphite)] max-w-2xl mt-4"
            duration={0.7}
            stagger={0.07}
            startTrigger="top 78%"
          />
        </div>

        {/* Hairline Divider Drawing */}
        <div
          ref={lineRef}
          className="w-full h-[1px] bg-[var(--color-hairline)] mb-12 sm:mb-16 will-change-transform"
        />

        {/* Creative Giants 3 Key Metrics Row */}
        <div
          ref={metricsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12"
        >
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Globe className="w-6 h-6 text-[var(--color-ink-black)] stroke-[1.25]" aria-hidden="true" />
              <span className="font-sans font-light text-[36px] sm:text-[44px] text-[var(--color-ink-black)] tracking-tight leading-none">
                13+
              </span>
            </div>
            <p className="font-sans text-[14.5px] leading-relaxed text-[var(--color-graphite)] max-w-xs">
              Years of specialized photographic education, darkroom discipline, and Kathmandu street mentorship.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-[var(--color-ink-black)] stroke-[1.25]" aria-hidden="true" />
              <span className="font-sans font-light text-[36px] sm:text-[44px] text-[var(--color-ink-black)] tracking-tight leading-none">
                5,000+
              </span>
            </div>
            <p className="font-sans text-[14.5px] leading-relaxed text-[var(--color-graphite)] max-w-xs">
              Students and alumni learning photography across Nepal, India, and global online cohorts.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-[var(--color-ink-black)] stroke-[1.25]" aria-hidden="true" />
              <span className="font-sans font-light text-[36px] sm:text-[44px] text-[var(--color-ink-black)] tracking-tight leading-none">
                100%
              </span>
            </div>
            <p className="font-sans text-[14.5px] leading-relaxed text-[var(--color-graphite)] max-w-xs">
              Hands-on practical fieldwork, dedicated one-on-one portfolio critiques, and recognized diplomas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
