import type { Metadata } from "next";
import React from "react";
import Footer from "@/components/layout/Footer";
import FaqAccordion from "@/components/faq/FaqAccordion";
import { faqData } from "@/data/faq";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | IIP Nepal",
  description:
    "Common admissions, course selection, studio equipment, fees, and certification questions answered by the Indian Institute of Photography Nepal.",
  openGraph: {
    title: "Frequently Asked Questions (FAQ) | IIP Nepal",
    description:
      "Everything you need to know about joining photography courses, studio labs, and mentorship at IIP Nepal in Kathmandu.",
    url: "https://iipnepal.com/faq",
    type: "website",
  },
};

export default function FaqPage(): React.JSX.Element {
  return (
    <main
      className="min-h-screen bg-[#fffef7] text-black overflow-x-clip selection:bg-[#ffd001] selection:text-black"
      style={{
        fontFamily: "'Switzer', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <section className="pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-20 sm:pb-28">
        <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          
          {/* Top Editorial Opener */}
          <div className="flex flex-col items-start gap-4 pb-10 sm:pb-12 md:pb-14 border-b border-[#e2e0d2] mb-12 sm:mb-16">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-[#888888] font-medium select-none">
              <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block" />
              <span>Admissions & Academic Knowledge Base</span>
            </div>

            <h1 className="font-sans font-light text-3xl sm:text-4xl md:text-5xl lg:text-[58px] xl:text-[64px] leading-[1.08] tracking-[-0.035em] text-black max-w-4xl">
              Frequently Asked Questions.
            </h1>

            <p className="font-sans font-normal text-sm sm:text-base md:text-lg text-[#666666] max-w-3xl leading-relaxed">
              Clear answers to the most common questions regarding camera gear, studio lighting sessions, course selection, tuition fees, and certification at our Kathmandu centre.
            </p>
          </div>

          {/* Accordion Component */}
          <FaqAccordion categories={faqData} />

        </div>
      </section>

      <Footer />
    </main>
  );
}
