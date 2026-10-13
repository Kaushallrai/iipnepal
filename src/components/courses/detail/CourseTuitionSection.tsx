"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Phone, ShieldCheck, CreditCard } from "lucide-react";
import type { CourseItem } from "@/data/courses";

export interface CourseTuitionSectionProps {
  course: CourseItem;
}

export default function CourseTuitionSection({
  course,
}: CourseTuitionSectionProps): React.JSX.Element {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-[#0a0a0a] text-[#fffef7]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        
        {/* Header */}
        <div className="pb-6 sm:pb-8 border-b border-white/10 mb-10 sm:mb-14 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <h2 className="font-sans font-light text-3xl sm:text-4xl md:text-5xl text-white tracking-[-0.03em] leading-tight">
            Transparent Tuition.
          </h2>
          <span className="font-mono text-xs uppercase tracking-wider text-[#ffd001]">
            Official Certification Included
          </span>
        </div>

        {/* 2-Column Split: Price & Inclusions Left + Payment Channels Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column (6 Cols): Price & Inclusions */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="mb-6">
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/50 block mb-1">
                Total Tuition Fee
              </span>
              <div className="flex items-baseline gap-3">
                <span className="font-sans font-light text-4xl sm:text-5xl lg:text-6xl text-white tabular-nums leading-none">
                  {course.payableFee}
                </span>
                {course.totalFee !== course.payableFee && (
                  <span className="font-mono text-base sm:text-lg text-white/40 line-through tabular-nums">
                    {course.totalFee}
                  </span>
                )}
                {course.discount && (
                  <span className="font-mono text-xs font-bold text-black bg-[#ffd001] px-2 py-0.5 rounded-full uppercase tracking-wider">
                    {course.discount}
                  </span>
                )}
              </div>
            </div>

            {/* Inclusions Ledger */}
            <div className="flex flex-col gap-2 pb-6 border-b border-white/15 mb-6 text-xs sm:text-sm text-white/80">
              <div className="flex items-center gap-2">
                <span className="text-[#ffd001] font-bold">✓</span>
                <span>Full syllabus access & guided shooting briefs</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#ffd001] font-bold">✓</span>
                <span>1-on-1 mentor evaluations for all assignments</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#ffd001] font-bold">✓</span>
                <span>Kathmandu studio equipment & lighting access</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#ffd001] font-bold">✓</span>
                <span>Official IIP Certificate of Completion</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={`/enroll?course=${course.slug}`}
                className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#ffd001] hover:bg-white text-black font-mono text-xs uppercase tracking-[0.14em] font-semibold transition-all leading-none cursor-pointer"
              >
                <span>Enroll in Track</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              <a
                href="tel:+9779802364760"
                className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-transparent hover:bg-white/10 text-white border border-white/20 font-mono text-xs uppercase tracking-wider transition-all leading-none"
              >
                <Phone className="w-3.5 h-3.5 text-[#ffd001]" />
                <span>+977 9802364760</span>
              </a>
            </div>
          </div>

          {/* Right Column (6 Cols): Settlement Channels & Policy */}
          <div className="lg:col-span-6 flex flex-col gap-6 lg:pl-8 lg:border-l lg:border-white/15">
            <div>
              <div className="flex items-center gap-2 pb-3 border-b border-white/15 mb-3 font-mono text-xs uppercase tracking-wider text-[#ffd001]">
                <CreditCard className="w-4 h-4" />
                <span>Accepted Settlement Channels</span>
              </div>

              <div className="flex flex-col divide-y divide-white/10 font-sans text-xs sm:text-sm text-white/80">
                <div className="py-2.5 flex justify-between items-baseline">
                  <span className="font-medium text-white">Digital Wallets</span>
                  <span className="text-white/60 font-mono text-xs">eSewa • Khalti • ConnectIPS</span>
                </div>
                <div className="py-2.5 flex justify-between items-baseline">
                  <span className="font-medium text-white">Bank Transfer</span>
                  <span className="text-white/60 font-mono text-xs">NIMB & Nabil Bank</span>
                </div>
                <div className="py-2.5 flex justify-between items-baseline">
                  <span className="font-medium text-white">Campus Front Desk</span>
                  <span className="text-white/60 font-mono text-xs">Cash • Cheque • POS Card</span>
                </div>
              </div>
            </div>

            {/* Flexible Policy Note */}
            <div className="pt-4 border-t border-white/15">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-white mb-1.5">
                <ShieldCheck className="w-4 h-4 text-[#ffd001]" />
                <span>Rescheduling Policy</span>
              </div>
              <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed">
                Need to postpone? Reschedule your intake date up to 7 days before cohort start with zero fee penalty.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
