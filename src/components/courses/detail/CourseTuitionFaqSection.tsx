"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
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

  // Ensure 4 course-specific FAQs
  const displayFaqs = course.faqs.slice(0, 4);

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 border-b border-[#e2e0d2] bg-[#fffef7]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10 sm:mb-14">
          <h2 className="font-sans font-light text-3xl sm:text-4xl md:text-5xl text-black tracking-[-0.03em] leading-tight">
            Key Logistics & Answers.
          </h2>
        </div>

        {/* 2-Column Grid: Left 3 Grouped Clusters + Right 4 FAQ Accordions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (5 Cols): 3 Grouped Clusters with One Divider Each */}
          <div className="lg:col-span-5 flex flex-col">
            
            {/* Cluster 1: Equipment */}
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#888888] font-semibold">
                01 / Equipment Requirements
              </span>
              <h3 className="font-sans font-normal text-lg sm:text-xl text-black">
                {course.equipment}
              </h3>
              <p className="font-sans text-sm text-[#555555] leading-relaxed">
                Students need a working camera body, basic zoom or prime lens, and a computer capable of running editing software for project submissions. Studio flash units are provided on campus.
              </p>
            </div>

            <div className="w-full border-b border-[#e2e0d2] my-8" />

            {/* Cluster 2: Payment */}
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#888888] font-semibold">
                02 / Accepted Payment Methods
              </span>
              <h3 className="font-sans font-normal text-lg sm:text-xl text-black">
                eSewa, Khalti, Bank & In-Person
              </h3>
              <p className="font-sans text-sm text-[#555555] leading-relaxed">
                Direct transfers accepted through eSewa, Khalti, NIMB, and Nabil Bank. Cash and card payments can be settled at the Jyoti Bhawan front desk during studio hours.
              </p>
            </div>

            <div className="w-full border-b border-[#e2e0d2] my-8" />

            {/* Cluster 3: Policies & Refund */}
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#888888] font-semibold">
                03 / Enrollment & Policies
              </span>
              <h3 className="font-sans font-normal text-lg sm:text-xl text-black">
                Rolling Cohorts & Rescheduling
              </h3>
              <p className="font-sans text-sm text-[#555555] leading-relaxed">
                Seats are strictly limited to maintain 1-on-1 critique quality. If you need to reschedule your intake, notify admissions up to 7 days before orientation without penalty.
              </p>
            </div>

          </div>

          {/* Right Column (7 Cols): 4 Course-Specific FAQ Accordions */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex flex-col divide-y divide-[#e2e0d2] border-y border-[#e2e0d2]">
              {displayFaqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={idx} className="py-5 sm:py-6">
                    <button
                      type="button"
                      onClick={() => toggleAccordion(idx)}
                      className="w-full flex items-center justify-between text-left cursor-pointer group"
                      aria-expanded={isOpen}
                    >
                      <h4 className="font-sans font-light text-lg sm:text-xl md:text-[22px] text-black group-hover:text-[#ca8a04] transition-colors pr-6">
                        {faq.question}
                      </h4>
                      <span className="w-8 h-8 rounded-full border border-[#d8d6c8] flex items-center justify-center shrink-0 text-black group-hover:border-black transition-colors">
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="pt-4 pr-10">
                        <p className="font-sans text-sm sm:text-base text-[#555555] leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Link to Contact / Support */}
            <div className="pt-8 flex items-center justify-between">
              <span className="font-mono text-xs text-[#888888] uppercase tracking-wider">
                Need more information?
              </span>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.16em] text-black hover:text-[#ca8a04] font-semibold transition-colors"
              >
                <span>Contact Admissions Team</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
