"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import LineReveal from "@/components/animations/LineReveal";

interface StudioFeaturePlate {
  id: string;
  badge: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  meta: string;
}

const STUDIO_PLATES: StudioFeaturePlate[] = [
  {
    id: "studio-critique",
    badge: "PRINT LAB · CRITIQUE SUITE",
    title: "1-on-1 Print & Proof Critiques",
    description:
      "One-on-one reviews of physical prints and contact sheets. Dissect tonal separation, contrast, and sequencing with faculty.",
    imageSrc: "/images/about/studio-critique-session.jpg",
    imageAlt: "Photography mentor reviewing physical black and white prints and contact sheets with a student in Kathmandu studio",
    meta: "Kanti Path Studio · Weekly Sessions",
  },
  {
    id: "studio-lighting",
    badge: "STUDIO B · LIGHTING & STROBES",
    title: "Commercial Strobe & Lighting Lab",
    description:
      "Master commercial strobes, octaboxes, and C-stands. Learn light shaping, direction, and falloff for studio portraiture.",
    imageSrc: "/images/about/studio-lighting-setup.jpg",
    imageAlt: "Photography students adjusting studio strobe lighting with octabox modifier on C-stand in Kathmandu academy",
    meta: "Kathmandu Academy · Lighting Workshops",
  },
  {
    id: "field-mentoring",
    badge: "FIELD LAB · VALLEY EXPEDITIONS",
    title: "Guided Heritage Fieldwork",
    description:
      "Guided field shooting in Kathmandu's historic gallis and squares. Practice street rapport and rapid manual exposure.",
    imageSrc: "/images/about/fieldwork-mentoring-session.jpg",
    imageAlt: "Photography mentor and students analyzing camera playback during historic courtyard shooting masterclass in Kathmandu Valley",
    meta: "Valley Fieldwork · Morning & Twilight",
  },
];

export default function AboutStudioGallery(): React.JSX.Element {
  return (
    <section className="section_about-studio w-full bg-[#fffef7] text-black py-20 sm:py-24 md:py-28 lg:py-32 border-b border-[#e2e0d2]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-12 lg:mb-14 pb-6 sm:pb-8 border-b border-[#e2e0d2]">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3 sm:mb-4 select-none">
              <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block" />
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#888888] font-medium">
                Kathmandu Studio & Fieldwork // Authentic Practice
              </span>
            </div>
            <LineReveal
              as="h2"
              className="font-sans font-light text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-[1.12] tracking-[-0.03em] text-black"
              lines={["Where photographic craft", "becomes tangible reality."]}
            />
            <p className="mt-3 text-sm sm:text-base text-[#555555] font-normal leading-relaxed">
              From commercial strobe modifiers and contact sheet critiques to dawn field shooting in Kathmandu&apos;s ancient courtyards.
            </p>
          </div>

          <Link
            href="/courses"
            className="inline-flex items-center justify-center gap-2 py-3 sm:py-2.5 px-5 rounded-full bg-black text-white hover:bg-[#ffd001] hover:text-black active:scale-[0.99] transition-all duration-200 font-mono text-xs uppercase tracking-[0.14em] font-semibold self-start sm:self-auto shrink-0 w-full sm:w-auto text-center touch-manipulation min-h-[44px]"
          >
            <span>Explore Courses</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 3-Plate Photographic Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {STUDIO_PLATES.map((plate, idx) => (
            <article
              key={plate.id}
              className="flex flex-col justify-between group bg-white border border-[#e2e0d2] hover:border-black transition-colors duration-200 overflow-hidden"
            >
              {/* Photo Frame */}
              <div className="relative w-full aspect-[3/2] overflow-hidden bg-black select-none border-b border-[#e2e0d2]">
                <Image
                  src={plate.imageSrc}
                  alt={plate.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  priority={idx === 0}
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-103"
                />
                <div className="absolute top-3 left-3 bg-black/85 text-white font-mono text-[9px] uppercase tracking-widest px-2.5 py-1">
                  {plate.badge}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-[#888888] pb-2 mb-3 border-b border-[#f0eee4]">
                    {plate.meta}
                  </div>

                  <h3 className="font-sans font-normal text-lg sm:text-xl text-black tracking-[-0.02em] mb-2 leading-snug">
                    {plate.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-[13px] text-[#555555] leading-relaxed">
                    {plate.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#f0eee4] flex items-center justify-between font-mono text-[11px] text-[#666666]">
                  <span className="text-[#888888]">Supervised by Faculty</span>
                  <span className="text-black font-semibold uppercase tracking-wider group-hover:text-[#ca8a04] transition-colors">
                    Practical Studio
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
