"use client";

import React from "react";
import Image from "next/image";

export default function CourseHowItWorksSection(): React.JSX.Element {
  const steps = [
    {
      number: "01",
      verb: "LEARN",
      title: "Study the Principles & Mechanics",
      description:
        "Master manual exposure triangles, sensor dynamics, and lighting theory through focused curriculum modules.",
    },
    {
      number: "02",
      verb: "SHOOT",
      title: "Execute Directed Shooting Briefs",
      description:
        "Head into Kathmandu street alleys, studio setups, or documentary fieldwork with explicit creative challenges.",
    },
    {
      number: "03",
      verb: "GET FEEDBACK",
      title: "Individual 1-on-1 Mentor Critique",
      description:
        "Submit your contact sheets for detailed frame grading, composition review, and colour correction before advancing.",
    },
  ];

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 border-b border-[#e2e0d2] bg-[#fffef7]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10 sm:mb-14">
          <div className="flex items-center gap-2 mb-3 select-none">
            <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block" />
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#888888] font-semibold">
              04 // METHODOLOGY
            </span>
          </div>
          <h2 className="font-sans font-light text-3xl sm:text-4xl md:text-5xl text-black tracking-[-0.03em] leading-tight">
            How The Course Works.
          </h2>
        </div>

        {/* 2-Column Split: 3 Plain Stacked Steps Left + 1 Mentor Feedback Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-18 items-center">
          
          {/* Left: 3 Stacked Steps (6 Columns) */}
          <div className="lg:col-span-6 flex flex-col divide-y divide-[#e2e0d2]">
            {steps.map((step) => (
              <div key={step.number} className="py-7 sm:py-8 first:pt-0 last:pb-0 flex flex-col gap-2">
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-black font-semibold">
                  {step.number} // {step.verb}
                </div>
                <h3 className="font-sans font-light text-xl sm:text-2xl text-black">
                  {step.title}
                </h3>
                <p className="font-sans text-sm sm:text-base text-[#666666] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right: 1 Mentor Feedback Sample Image (6 Columns) */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-black border border-[#e2e0d2]">
              <Image
                src="/images/course-foundation.webp"
                alt="Sample mentor feedback critique on student frame"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center grayscale contrast-110"
              />

              {/* Graphic Overlays Mimicking Contact Sheet & Mentor Critique Lines */}
              <div className="absolute inset-0 pointer-events-none p-5 sm:p-6 flex flex-col justify-between">
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-[#ffd001] bg-black/80 px-3 py-1.5 backdrop-blur-sm self-start border border-[#ffd001]/30">
                  <span>CRITIQUE SAMPLE // FRAME #014</span>
                </div>

                <div className="bg-black/85 backdrop-blur-md p-4 border-l-2 border-[#ffd001] max-w-md self-end text-left">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-white/50 mb-1">
                    Mentor Note · Senior Faculty
                  </div>
                  <p className="font-sans text-xs sm:text-[13px] text-white/90 leading-snug">
                    &ldquo;Strong rule-of-thirds alignment on the artisan hands. Stop down by 1/2 EV to preserve highlight detail on the brass plate.&rdquo;
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-2 text-right">
              <span className="font-mono text-[11px] text-[#888888] tracking-wider uppercase">
                Figure 4.1 — Live Critique Workflow
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
