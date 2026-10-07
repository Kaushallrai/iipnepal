"use client";

import React from "react";
import LineReveal from "@/components/animations/LineReveal";
import ScrollReveal from "@/components/animations/ScrollReveal";
import type { CourseItem } from "@/lib/courses-data";

export interface CourseEssentialsSectionProps {
  course: CourseItem;
}

export default function CourseEssentialsSection({
  course,
}: CourseEssentialsSectionProps): React.JSX.Element {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-28 border-b border-[#e2e0d2] bg-[#fffef7]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-start">
          
          {/* Left: What You'll Learn */}
          <div className="lg:col-span-6 flex flex-col gap-8 sm:gap-10">
            <div className="pb-4 sm:pb-5 border-b border-[#e2e0d2]">
              <div className="flex items-center gap-2 mb-2.5 select-none">
                <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block" />
                <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#888888] font-medium">
                  Learning Outcomes
                </span>
              </div>
              <LineReveal
                as="h2"
                lines={["What You Will Master."]}
                className="font-sans font-light text-2xl sm:text-3xl md:text-4xl lg:text-[44px] text-black tracking-[-0.03em] leading-[1.12]"
              />
            </div>

            <ScrollReveal variant="stagger-children" stagger={0.05} start="top 88%">
              <ul className="flex flex-col gap-5 sm:gap-6 list-none p-0 m-0">
                {course.whatYoullLearn.map((item, idx) => (
                  <li key={idx} className="scroll-item flex items-start gap-4 text-xs sm:text-sm md:text-base text-black leading-relaxed">
                    <span className="font-mono text-xs sm:text-[13px] text-[#888888] shrink-0 font-medium pt-0.5">
                      0{idx + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          {/* Right: Prerequisites & Format */}
          <div className="lg:col-span-6 flex flex-col gap-8 sm:gap-10">
            <ScrollReveal variant="fade-up" delay={0.1} start="top 88%">
              <div className="pb-4 sm:pb-5 border-b border-[#e2e0d2]">
                <div className="flex items-center gap-2 mb-2.5 select-none">
                  <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block" />
                  <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#888888] font-medium">
                    Prerequisites & Method
                  </span>
                </div>
                <LineReveal
                  as="h3"
                  lines={["Equipment & Readiness."]}
                  className="font-sans font-light text-2xl sm:text-3xl md:text-4xl lg:text-[44px] text-black tracking-[-0.03em] leading-[1.12]"
                />
              </div>

            <div className="flex flex-col gap-6 sm:gap-8 pt-2">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#888888] block mb-3">
                  Entry Requirements:
                </span>
                <ul className="flex flex-col gap-3 sm:gap-4 list-none p-0 m-0">
                  {course.prerequisites.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm md:text-[15px] text-[#444444] leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ffd001] shrink-0 mt-2" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-[#e2e0d2]">
                <span className="font-mono text-xs uppercase tracking-wider text-[#888888] block mb-2.5">
                  Instruction Model:
                </span>
                <p className="font-sans font-normal text-xs sm:text-sm md:text-[15px] text-[#555555] leading-relaxed">
                  Self-paced reading with 5 mandatory practical photo submissions per chapter.
                  Your mentor provides technical grading and aesthetic recommendations before
                  you advance to the next module.
                </p>
              </div>
            </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
