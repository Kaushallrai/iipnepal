"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import LineReveal from "@/components/animations/LineReveal";
import ScrollReveal from "@/components/animations/ScrollReveal";
import type { CourseItem } from "@/data/courses";

export interface CourseTuitionFaqSectionProps {
  course: CourseItem;
}

export default function CourseTuitionFaqSection({
  course,
}: CourseTuitionFaqSectionProps): React.JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-28 border-b border-[#e2e0d2] bg-[#fffef7]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Tuition & Payment Methods */}
          <div className="lg:col-span-5 flex flex-col gap-8 sm:gap-10">
            <div className="pb-4 sm:pb-5 border-b border-[#e2e0d2]">
              <div className="flex items-center gap-2 mb-2.5 select-none">
                <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block" />
                <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#888888] font-medium">
                  Tuition & Enrollment
                </span>
              </div>
              <LineReveal
                as="h2"
                lines={["Program Investment."]}
                className="font-sans font-light text-2xl sm:text-3xl md:text-4xl lg:text-[44px] text-black tracking-[-0.03em] leading-[1.12]"
              />
            </div>

            <div>
              <div className="flex flex-wrap items-baseline gap-3 mb-2.5 whitespace-nowrap">
                <span className="font-sans font-light text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-black whitespace-nowrap tabular-nums">
                  {course.payableFee}
                </span>
                {course.totalFee !== course.payableFee && (
                  <span className="font-mono text-sm sm:text-base md:text-lg text-[#999999] line-through whitespace-nowrap tabular-nums">
                    {course.totalFee}
                  </span>
                )}
                {course.discount && (
                  <span className="font-mono text-xs sm:text-sm font-semibold text-[#dc2626] whitespace-nowrap">
                    ({course.discount})
                  </span>
                )}
              </div>
              <p className="font-sans font-normal text-xs sm:text-sm md:text-base text-[#666666] leading-relaxed">
                Includes all module guides, individual photo assessments, portal access,
                and accredited IIP certification.
              </p>
            </div>

            {/* Approved channels */}
            <div className="pt-6 border-t border-[#e2e0d2]">
              <span className="font-mono text-xs uppercase tracking-wider text-[#888888] block mb-2.5">
                Accepted Channels:
              </span>
              <p className="font-mono text-xs sm:text-[13px] text-[#555555] leading-relaxed">
                eSewa • Khalti • Bank Transfer (NIMB / Nabil) • Cash / Card at Jyoti Bhawan Desk
              </p>
            </div>

            <div className="pt-2">
              <Link
                href={`/enroll?course=${course.slug}`}
                className="inline-flex items-center gap-2 py-4 px-8 rounded-full bg-[#ffd001] hover:bg-black hover:text-[#fffef7] text-black font-mono text-xs sm:text-[13px] uppercase tracking-[0.16em] font-semibold transition-all shadow-sm leading-none"
              >
                <span>Enroll in This Program</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Key FAQs */}
          <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-8">
            <div className="pb-4 sm:pb-5 border-b border-[#e2e0d2]">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#888888]">
                Common Questions
              </span>
              <h3 className="font-sans font-light text-2xl sm:text-3xl md:text-4xl text-black mt-2 tracking-[-0.03em]">
                Frequently Asked.
              </h3>
            </div>

            <ScrollReveal variant="stagger-children" stagger={0.06} start="top 88%">
              <div className="flex flex-col divide-y divide-[#e2e0d2]">
                {course.faqs.map((faq, idx) => {
                  const isOpen = openIndex === idx;

                  return (
                    <div key={idx} className="scroll-item py-5 sm:py-6 lg:py-7">
                      <button
                        type="button"
                        onClick={() => toggleAccordion(idx)}
                        className="w-full flex items-start justify-between gap-6 text-left cursor-pointer group"
                        aria-expanded={isOpen}
                      >
                        <span className="font-sans font-light text-base sm:text-lg lg:text-xl text-black group-hover:text-black/75 transition-colors leading-snug">
                          {faq.question}
                        </span>
                        <span className="w-7 h-7 rounded-full border border-black/20 flex items-center justify-center shrink-0 mt-0.5 text-black group-hover:border-black transition-colors">
                          {isOpen ? (
                            <Minus className="w-3.5 h-3.5" strokeWidth={1.5} />
                          ) : (
                            <Plus className="w-3.5 h-3.5" strokeWidth={1.5} />
                          )}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="pt-4 pr-6 sm:pr-10">
                          <p className="font-sans font-normal text-xs sm:text-sm md:text-base text-[#555555] leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
