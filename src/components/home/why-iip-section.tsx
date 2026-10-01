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
        {/* Section Header: Section Title Block per DESIGN.md */}
        <div className="max-w-4xl mb-18 sm:mb-22 lg:mb-28">
          <ScrollReveal yOffset={14} duration={0.5}>
            <span className="font-mono text-[12px] uppercase tracking-[0.25em] text-[var(--color-graphite)] block mb-5">
              Vision & Institute Mission
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.08} yOffset={16} duration={0.6}>
            <h2 className="font-sans font-light text-[var(--color-ink-black)] text-[26px] sm:text-[34px] lg:text-[44px] leading-[1.2] tracking-[-0.023em] text-balance">
              “To emerge as ‘Institute of National Importance in promoting Cultural and Creative Arts of India, globally’ by guiding and inculcating knowledge in learners mindset from world over to become artists, thinkers and leaders.”
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.16} yOffset={14} duration={0.6}>
            <p className="font-sans text-[16px] sm:text-[17px] leading-[1.7] text-[var(--color-graphite)] max-w-2xl mt-6">
              IIP Nepal offers short-term courses, weekend workshops, and diploma programs, designed to develop both creative and technical photography skills.
            </p>
          </ScrollReveal>
        </div>

        {/* 4-Column Grid per DESIGN.md — No card fills, clean line icons, whitespace separation */}
        <ScrollReveal yOffset={20} duration={0.6} stagger={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 lg:gap-x-14 gap-y-12 sm:gap-y-16">
            {PILLARS.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.number} className="flex flex-col gap-4 group">
                  {/* Top hairline rule with line icon and mono number */}
                  <div className="flex items-center justify-between pb-4 border-b border-[var(--color-hairline)]">
                    <Icon className="w-5 h-5 text-[var(--color-ink-black)] group-hover:text-[var(--color-iip-yellow)] transition-colors duration-200 stroke-[1.5]" aria-hidden="true" />
                    <span className="font-mono text-[12px] text-[var(--color-ash)] tracking-[0.2em]">
                      {item.number}
                    </span>
                  </div>

                  {/* 20px weight-300 heading */}
                  <h3 className="font-sans font-light text-[20px] leading-snug tracking-[-0.018em] text-[var(--color-ink-black)] mt-1">
                    {item.title}
                  </h3>

                  {/* 14-16px Graphite body copy */}
                  <p className="font-sans text-[14.5px] leading-[1.65] text-[var(--color-graphite)]">
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
