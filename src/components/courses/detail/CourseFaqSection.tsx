"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowUpRight, Phone } from "lucide-react";
import type { CourseItem } from "@/data/courses";

export interface CourseFaqSectionProps {
  course: CourseItem;
}

export default function CourseFaqSection({
  course,
}: CourseFaqSectionProps): React.JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = course.faqs && course.faqs.length > 0 ? course.faqs : [
    {
      question: "Is this course suitable for beginners?",
      answer: "Yes, our foundation tracks assume no prior technical background and start with camera mechanics and manual exposure principles.",
    },
    {
      question: "What equipment do I need to begin?",
      answer: "A functioning camera body (or smartphone for the mobile track) and access to a computer for photo editing submissions.",
    },
    {
      question: "How does the mentor feedback process work?",
      answer: "For every shooting assignment, you upload your contact sheet to the portal. Your assigned instructor provides a detailed voice/written evaluation within 48 hours.",
    },
    {
      question: "Do I receive a certificate upon graduation?",
      answer: "Yes, students who submit all required assignments and pass the final portfolio review receive the official IIP Certificate of Completion.",
    },
  ];

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-[#fffef7]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="pb-4 mb-8 sm:mb-12 border-b border-[#e2e0d2]">
          <h2 className="font-sans font-light text-3xl sm:text-4xl md:text-5xl text-black tracking-[-0.03em] leading-tight">
            Frequently Asked Questions.
          </h2>
        </div>

        {/* 2-Column Split: Clean Editorial Q&A Left (8 Cols) + Open Advisor Information Right (4 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* FAQ Accordion List (8 Cols) */}
          <div className="lg:col-span-8 flex flex-col divide-y divide-[#e2e0d2]">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="py-6">
                  <button
                    type="button"
                    onClick={() => toggleAccordion(idx)}
                    className="w-full flex items-center justify-between text-left cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <h3 className="font-sans font-light text-lg sm:text-xl md:text-2xl text-black group-hover:text-[#ca8a04] transition-colors pr-6">
                      {faq.question}
                    </h3>
                    <div className="w-8 h-8 rounded-full border border-[#d8d6c8] flex items-center justify-center shrink-0 group-hover:border-black transition-colors">
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-black" />
                      ) : (
                        <Plus className="w-4 h-4 text-black" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="pt-3.5 pr-10">
                      <p className="font-sans text-sm sm:text-base text-[#555555] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Open Advisor Guidance Strip (4 Cols) — Zero Card Box */}
          <div className="lg:col-span-4 flex flex-col justify-between pt-2">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#ca8a04] font-semibold block mb-2.5">
                Admissions Advisory
              </span>

              <h4 className="font-sans font-light text-2xl text-black mb-3">
                Need Help Choosing a Track?
              </h4>

              <p className="font-sans text-xs sm:text-sm text-[#666666] leading-relaxed mb-6">
                Our faculty desk is available weekdays to evaluate your current portfolio and recommend the right course level for your artistic goals.
              </p>
            </div>

            <div className="pt-6 border-t border-[#e2e0d2] flex flex-col gap-3 font-mono text-xs">
              <a
                href="tel:+9779802364760"
                className="text-black font-semibold hover:text-[#ca8a04] transition-colors flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#ca8a04]" />
                <span>+977 9802364760</span>
              </a>
              <Link
                href="/contact"
                className="text-[#666666] hover:text-black transition-colors flex items-center gap-1.5"
              >
                <span>Visit Campus at Jyoti Bhawan, Kanti Path</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
