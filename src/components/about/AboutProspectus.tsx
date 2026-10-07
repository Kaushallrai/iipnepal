"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import LineReveal from "@/components/animations/LineReveal";
import ScrollReveal from "@/components/animations/ScrollReveal";

export interface ProspectusItem {
  id: string;
  code: string;
  title: string;
  level: string;
  description: string;
  pdfUrl: string;
}

export const PROSPECTUS_LIST: ProspectusItem[] = [
  {
    id: "mfa",
    code: "MFA",
    title: "Master of Fine Arts in Photography",
    level: "Postgraduate Degree",
    description:
      "Advanced research-led curriculum covering visual theory, personal thesis authorship, darkroom printing, and curatorial practice.",
    pdfUrl: "https://www.iipacademy.edu.in/images/IIPCCA%20PROSPECTUS.pdf",
  },
  {
    id: "bfa",
    code: "BFA",
    title: "Bachelor of Fine Arts in Photography",
    level: "Undergraduate Degree",
    description:
      "Comprehensive multi-year program covering camera optics, lighting physics, analog processes, and professional editorial ethics.",
    pdfUrl: "https://www.iipacademy.edu.in/images/IIPCCA%20PROSPECTUS.pdf",
  },
  {
    id: "ddpc",
    code: "DDPC",
    title: "Dual Diploma in Professional Photography",
    level: "Professional Diploma",
    description:
      "Career-focused dual credential emphasizing commercial studio assignments, portraiture, fashion, and business management.",
    pdfUrl: "https://www.iipacademy.edu.in/images/IIPCCA%20PROSPECTUS.pdf",
  },
  {
    id: "opdp",
    code: "OPDP",
    title: "Online Professional Development Program",
    level: "Distance Learning",
    description:
      "Structured remote curriculum with weekly one-on-one virtual critiques, home assignments, and accredited certification.",
    pdfUrl: "https://www.iipacademy.edu.in/images/IIPCCA%20PROSPECTUS.pdf",
  },
  {
    id: "pro-foundation",
    code: "FOUNDATION",
    title: "Pro Foundation & Advanced Course Catalogue",
    level: "Certificate Track",
    description:
      "Intensive 3 to 6-month hands-on modules in manual camera controls, metering, light direction, and creative studio shoots.",
    pdfUrl: "https://iipnepal.com/files/ONLINE%20CATALOUGE%2022.pdf",
  },
  {
    id: "teenschool",
    code: "TEENSCHOOL",
    title: "TeenSchool Creative Arts Prospectus",
    level: "Youth Immersion",
    description:
      "Visual storytelling and photographic fundamentals designed for high-school students and emerging creators.",
    pdfUrl: "https://iipnepal.com/files/tsatschoolpdf.pdf",
  },
];

export default function AboutProspectus(): React.JSX.Element {
  return (
    <section className="section_about-prospectus w-full bg-[#fffef7] text-black py-16 sm:py-20 md:py-24 lg:py-28 border-b border-[#e2e0d2]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        {/* ================================================================= */}
        {/* HEADER                                                            */}
        {/* ================================================================= */}
        <div className="w-full max-w-4xl text-left mb-8 sm:mb-10 lg:mb-12">
          <div className="flex items-center gap-2 mb-3 sm:mb-4 select-none">
            <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block" />
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#888888] font-medium">
              Academic Catalogues
            </span>
          </div>
          <LineReveal
            as="h2"
            className="font-sans font-light text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-[1.12] tracking-[-0.03em] text-black mb-3 sm:mb-4"
            lines={[
              "Official Course Prospectuses &",
              "Syllabus Downloads",
            ]}
          />
          <p className="text-sm sm:text-base md:text-lg text-[#555555] font-normal leading-relaxed">
            Download detailed curriculum overviews, equipment requirements, faculty credits, and admission schedules in PDF format.
          </p>
        </div>

        {/* ================================================================= */}
        {/* ARCHITECTURAL DIRECTORY (CLEAN HAIRLINE GRID, NO CLUTTER ICONS)   */}
        {/* ================================================================= */}
        <ScrollReveal variant="stagger-children" stagger={0.08} start="top 88%">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {PROSPECTUS_LIST.map((item) => (
              <div
                key={item.id}
                className="scroll-item flex flex-col justify-between p-5 sm:p-6 lg:p-7 bg-white border border-[#e2e0d2] hover:border-black transition-colors duration-200"
              >
                <div>
                  <div className="flex items-center justify-between pb-2.5 mb-3.5 border-b border-[#f0eee4]">
                    <span className="font-mono text-xs font-bold tracking-[0.18em] text-[#ca8a04]">
                      {item.code}
                    </span>
                    <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-[#888888]">
                      {item.level}
                    </span>
                  </div>

                  <h3 className="font-sans font-normal text-base sm:text-lg lg:text-xl text-black tracking-[-0.02em] mb-2">
                    {item.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-[13px] text-[#666666] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-[#f0eee4]">
                  <a
                    href={item.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-between w-full min-h-[48px] py-2.5 px-4 text-xs font-mono uppercase tracking-[0.14em] font-semibold text-black hover:text-black hover:bg-[#ffd001] active:scale-[0.99] transition-all border border-[#e2e0d2] hover:border-[#ffd001] touch-manipulation select-none"
                    aria-label={`Download ${item.title} PDF`}
                  >
                    <span>Download PDF</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
