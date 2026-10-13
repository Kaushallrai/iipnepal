"use client";

import React from "react";
import Link from "next/link";
import { LineReveal } from "@/components/animations/LineReveal";
import { Phone, MessageSquare, ArrowUpRight } from "lucide-react";
import { homeContactData } from "@/data/home/contact";

export default function ContactSection(): React.JSX.Element {
  return (
    <section
      id="contact"
      aria-label="Admissions & Studio Contact"
      className="section_contact-cta theme-light relative w-full bg-[#fffef7] text-black overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28 select-none border-t border-[#eae8dc]"
      style={{
        fontFamily: "'Switzer', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 max-w-[105rem] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12 pb-10 sm:pb-12 border-b border-[#e2e0d2]">
          <div className="flex flex-col items-start max-w-3xl">
            {/* Eyebrow - preserved with prefix */}
            <div className="flex items-center gap-2.5 text-xs sm:text-[13px] font-mono uppercase tracking-[0.22em] text-black font-semibold mb-3 sm:mb-4">
              <span className="w-2 h-2 rounded-full bg-[#ffd001] shrink-0 inline-block shadow-[0_0_8px_rgba(255,208,1,0.6)]" />
              <span>{homeContactData.eyebrow}</span>
            </div>

            {/* Masked Headline */}
            <LineReveal
              as="h2"
              lines={[homeContactData.heading]}
              className="font-sans font-light text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.08] tracking-[-0.035em] text-black mb-4 sm:mb-5"
            />

            <p className="font-light text-[15px] sm:text-[16px] md:text-[17px] leading-[1.6] text-[#666666] tracking-[-0.018em] max-w-2xl">
              {homeContactData.description}
            </p>
          </div>

          {/* Quick Action Strip (Call, WhatsApp, Contact) */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 shrink-0">
            <a
              href={`tel:${homeContactData.phone}`}
              className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#f4f2e9] hover:bg-[#ffd001] active:scale-[0.98] text-black font-mono text-xs uppercase tracking-[0.14em] font-medium border border-[#e2e0d2] transition-all no-underline whitespace-nowrap min-h-[44px]"
              aria-label={`Call Admissions at ${homeContactData.phoneDisplay}`}
            >
              <Phone className="w-3.5 h-3.5 text-black" aria-hidden="true" />
              <span>Call</span>
            </a>

            <a
              href="https://wa.me/9779802364760?text=Hello%20IIP%20Nepal%2C%20I%20would%20like%20to%20inquire%20about%20photography%20courses."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#f4f2e9] hover:bg-[#25D366] hover:text-white active:scale-[0.98] text-black font-mono text-xs uppercase tracking-[0.14em] font-medium border border-[#e2e0d2] transition-all no-underline whitespace-nowrap min-h-[44px]"
              aria-label="Chat on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5" aria-hidden="true" />
              <span>WhatsApp</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 py-3.5 px-7 rounded-full bg-black hover:bg-[#ffd001] hover:text-black active:scale-[0.98] text-[#fffef7] font-mono text-xs uppercase tracking-[0.16em] font-semibold transition-all no-underline whitespace-nowrap min-h-[44px] w-full sm:w-auto"
            >
              <span>Contact Admissions</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Studio Location & Schedule Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-[#777777] uppercase tracking-[0.12em]">
          <div>
            <span className="text-black font-medium">{homeContactData.studioName}: </span>
            <span>{homeContactData.studioAddress}</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Sunday - Friday, 10:00 AM to 5:00 PM</span>
          </div>
        </div>
      </div>
    </section>
  );
}
