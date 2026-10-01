"use client";

import { Smartphone, BookOpen, Layers, Users } from "lucide-react";
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
    title: "Short-Term & Online Courses",
    description:
      "1-Month Online Mobile Photography and Basic Photography courses designed to develop creative and technical fundamentals rapidly for all learners.",
  },
  {
    icon: BookOpen,
    number: "02",
    title: "Foundation Photography",
    description:
      "3-Month Online Foundation and Pro Level Foundation courses providing structured training across camera mechanics, composition, and visual thinking.",
  },
  {
    icon: Layers,
    number: "03",
    title: "Mentor-Led Pro Advanced",
    description:
      "6-Month intensive mentor-led diploma program taking students deep into studio strobe lighting, documentary fieldwork, and professional commercial execution.",
  },
  {
    icon: Users,
    number: "04",
    title: "Regional Leadership & Mentorship",
    description:
      "Led by IIP alumnus Additya Shrestha alongside experienced mentors including Jhaggu Roka and Kishor Shrestha, backed by the global IIP Foundation.",
  },
];

export function WhyIipSection() {
  return (
    <section
      aria-label="About IIP Nepal & Mission"
      className="w-full bg-[var(--color-workshop-ivory)] py-24 sm:py-32 lg:py-40 border-b border-[var(--color-drafting-line)]"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24">
        {/* Section Header: Eyebrow + Original Vision & Mission */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <ScrollReveal yOffset={16} duration={0.5}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[1440px] border border-[var(--color-drafting-line)] bg-white/70 mb-6 text-[11px] font-mono uppercase tracking-[0.3px] text-[var(--color-faded-graphite)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-charcoal-ink)]" aria-hidden="true" />
              About IIP Nepal · Vision & Mission
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} yOffset={18} duration={0.6}>
            <h2 className="font-sans font-medium text-[var(--color-charcoal-ink)] text-[28px] sm:text-[34px] lg:text-[42px] leading-[1.12] tracking-[-1.2px] text-balance">
              “To emerge as an Institute of National Importance, guiding and inculcating knowledge in learners from world over to become artists, thinkers, and leaders.”
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2} yOffset={16} duration={0.6}>
            <p className="font-sans text-[15px] sm:text-[16px] leading-relaxed text-[var(--color-quiet-graphite)] max-w-2xl mt-5">
              IIP Nepal offers short-term courses, weekend workshops, and diploma programs, designed to develop both creative and technical photography skills at our Kathmandu Centre.
            </p>
          </ScrollReveal>
        </div>

        {/* 4-Column Grid Reflecting IIP Nepal's Actual Course Pathways */}
        <ScrollReveal yOffset={20} duration={0.6} stagger={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 lg:gap-x-12 xl:gap-x-16 gap-y-12 sm:gap-y-16">
            {PILLARS.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.number} className="flex flex-col gap-4 group">
                  {/* Top metadata line with icon and mono index */}
                  <div className="flex items-center justify-between pb-3 border-b border-[var(--color-drafting-line)]/70">
                    <div className="w-9 h-9 rounded-full bg-white/80 border border-[var(--color-drafting-line)] flex items-center justify-center text-[var(--color-charcoal-ink)] group-hover:bg-[var(--color-iip-yellow)] transition-colors duration-200">
                      <Icon className="w-4 h-4 text-[var(--color-charcoal-ink)]" aria-hidden="true" />
                    </div>
                    <span className="font-mono text-[12px] text-[var(--color-faded-graphite)] tracking-[0.2em]">
                      {item.number}
                    </span>
                  </div>

                  {/* Heading */}
                  <h3 className="font-sans font-medium text-[19px] sm:text-[21px] leading-tight tracking-[-0.4px] text-[var(--color-charcoal-ink)]">
                    {item.title}
                  </h3>

                  {/* Body copy */}
                  <p className="font-sans text-[15px] leading-relaxed text-[var(--color-quiet-graphite)]">
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
