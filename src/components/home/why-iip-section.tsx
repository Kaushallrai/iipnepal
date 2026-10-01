"use client";

import { useEffect, useRef } from "react";
import { Globe, Users, Award } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function WhyIipSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
        defaults: { ease: "power2.out" },
      });

      // Creative Giants Eyebrow reveal
      tl.from(".why-iip_eyebrow", {
        opacity: 0,
        y: 18,
        duration: 0.7,
      });

      // Creative Giants Manifesto Display Headline reveal
      tl.from(
        ".why-iip_manifesto",
        {
          opacity: 0,
          y: 30,
          duration: 0.85,
        },
        "-=0.5"
      );

      // Subtext paragraph reveal
      tl.from(
        ".why-iip_desc",
        {
          opacity: 0,
          y: 20,
          duration: 0.75,
        },
        "-=0.55"
      );

      // Architectural Hairline divider draw
      tl.from(
        ".why-iip_line",
        {
          scaleX: 0,
          transformOrigin: "left",
          duration: 0.9,
          ease: "power2.inOut",
        },
        "-=0.5"
      );

      // Creative Giants 3 Key Metrics Stagger
      tl.from(
        ".why-iip_metric",
        {
          opacity: 0,
          y: 28,
          duration: 0.8,
          stagger: 0.16,
        },
        "-=0.5"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="About IIP Nepal & Mission"
      className="w-full bg-[var(--color-bone-white)] py-20 sm:py-28 lg:py-36 border-b border-[var(--color-hairline)]"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Creative Giants "WHAT WE DO" Eyebrow & Giant Manifesto Statement */}
        <div className="max-w-4xl mb-14 sm:mb-18 lg:mb-20">
          <span className="why-iip_eyebrow font-mono text-[12px] uppercase tracking-[0.25em] text-[var(--color-graphite)] block mb-5">
            WHAT WE DO // VISION & MISSION
          </span>

          <h2 className="why-iip_manifesto font-sans font-light text-[var(--color-ink-black)] text-[26px] sm:text-[38px] lg:text-[46px] leading-[1.14] tracking-[-0.03em] text-balance">
            “To emerge as ‘Institute of National Importance in promoting Cultural and Creative Arts of India, globally’ by guiding and inculcating knowledge in learners mindset from world over to become artists, thinkers and leaders.”
          </h2>

          <p className="why-iip_desc font-sans text-[16px] sm:text-[18px] leading-[1.7] text-[var(--color-graphite)] max-w-2xl mt-6">
            We go beyond traditional classrooms. IIP Nepal offers short-term courses, weekend workshops, and mentor-led diploma programs, designed to develop creative vision and manual exposure mastery in real-world spaces.
          </p>
        </div>

        {/* Hairline Divider */}
        <div className="why-iip_line w-full h-[1px] bg-[var(--color-hairline)] mb-12 sm:mb-16" />

        {/* Creative Giants 3 Key Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12">
          <div className="why-iip_metric flex flex-col gap-3">
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

          <div className="why-iip_metric flex flex-col gap-3">
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

          <div className="why-iip_metric flex flex-col gap-3">
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
