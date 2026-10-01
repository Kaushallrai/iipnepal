"use client";

import { Smartphone, BookOpen, Layers, Users, Globe, Award, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

interface ProgramPillar {
  icon: typeof Smartphone;
  number: string;
  title: string;
  description: string;
}

const PILLARS: ProgramPillar[] = [
  {
    icon: Smartphone,
    number: "01",
    title: "Online Mobile Photography Course",
    description:
      "1 Month duration. Learn professional photography using just your smartphone, covering camera settings, composition, and mobile editing apps.",
  },
  {
    icon: BookOpen,
    number: "02",
    title: "Basic & Foundation Photography",
    description:
      "1-Month Basic & 3-Month Foundation courses covering camera operations, exposure triangle, visual literacy, and practical assignments.",
  },
  {
    icon: Layers,
    number: "03",
    title: "Pro Level Mentor-Led Courses",
    description:
      "3-Month Pro Foundation & 6-Month Pro Advanced courses with dedicated one-on-one mentors, studio lighting, and commercial portfolio development.",
  },
  {
    icon: Users,
    number: "04",
    title: "Official Regional Partner",
    description:
      "Led by IIP alumnus Additya Shrestha alongside experienced mentors Jhaggu Roka and Kishor Shrestha, backed by IIP Foundation India.",
  },
];

export function WhyIipSection() {
  return (
    <section
      aria-label="About IIP Nepal & Mission"
      className="w-full bg-[var(--color-bone-white)] py-24 sm:py-32 lg:py-40 border-b border-[var(--color-hairline)]"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Creative Giants "WHAT WE DO" Eyebrow & Giant Manifesto Statement */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <ScrollReveal yOffset={14} duration={0.5}>
            <span className="font-mono text-[12px] uppercase tracking-[0.25em] text-[var(--color-graphite)] block mb-5">
              WHAT WE DO // VISION & MISSION
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.08} yOffset={16} duration={0.6}>
            <h2 className="font-sans font-light text-[var(--color-ink-black)] text-[28px] sm:text-[40px] lg:text-[48px] leading-[1.12] tracking-[-0.03em] text-balance">
              “To emerge as ‘Institute of National Importance in promoting Cultural and Creative Arts of India, globally’ by guiding and inculcating knowledge in learners mindset from world over to become artists, thinkers and leaders.”
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.14} yOffset={14} duration={0.6}>
            <p className="font-sans text-[16px] sm:text-[18px] leading-[1.7] text-[var(--color-graphite)] max-w-2xl mt-6">
              We go beyond traditional classrooms. IIP Nepal offers short-term courses, weekend workshops, and mentor-led diploma programs, designed to develop creative vision and manual exposure mastery in real-world spaces.
            </p>
          </ScrollReveal>
        </div>

        {/* Creative Giants 3 Key Metrics Row */}
        <ScrollReveal yOffset={16} duration={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 pb-16 sm:pb-20 border-b border-[var(--color-hairline)] mb-16 sm:mb-20">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Globe className="w-6 h-6 text-[var(--color-ink-black)] stroke-[1.25]" />
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
                <Users className="w-6 h-6 text-[var(--color-ink-black)] stroke-[1.25]" />
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
                <Award className="w-6 h-6 text-[var(--color-ink-black)] stroke-[1.25]" />
                <span className="font-sans font-light text-[36px] sm:text-[44px] text-[var(--color-ink-black)] tracking-tight leading-none">
                  100%
                </span>
              </div>
              <p className="font-sans text-[14.5px] leading-relaxed text-[var(--color-graphite)] max-w-xs">
                Hands-on practical fieldwork, dedicated one-on-one portfolio critiques, and recognized diplomas.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* 4 Program Pillars */}
        <ScrollReveal yOffset={20} duration={0.6} stagger={0.08}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 lg:gap-x-14 gap-y-12">
            {PILLARS.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.number} className="flex flex-col gap-3.5 group">
                  <div className="flex items-center justify-between pb-3.5 border-b border-[var(--color-hairline)]">
                    <Icon className="w-4 h-4 text-[var(--color-ink-black)] group-hover:text-[var(--color-iip-yellow)] transition-colors duration-200 stroke-[1.5]" aria-hidden="true" />
                    <span className="font-mono text-[11px] text-[var(--color-ash)] tracking-[0.2em]">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="font-sans font-light text-[19px] leading-snug tracking-[-0.018em] text-[var(--color-ink-black)]">
                    {item.title}
                  </h3>

                  <p className="font-sans text-[14px] leading-[1.65] text-[var(--color-graphite)]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
