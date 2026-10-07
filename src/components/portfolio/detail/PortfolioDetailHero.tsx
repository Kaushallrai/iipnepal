"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Maximize2, X } from "lucide-react";
import type { PortfolioItem } from "@/lib/portfolio-data";
import LineReveal from "@/components/animations/LineReveal";

export interface PortfolioDetailHeroProps {
  item: PortfolioItem;
}

export default function PortfolioDetailHero({ item }: PortfolioDetailHeroProps): React.JSX.Element {
  const [showLightbox, setShowLightbox] = useState<boolean>(false);
  const mentorName = item.mentor.split("·")[0].replace("Mentor", "").trim();
  const masterFrame = item.gallery[0] || {
    url: item.coverImage,
    caption: item.title,
    shotLocation: item.location,
  };

  const openLightbox = () => {
    setShowLightbox(true);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden";
    }
  };

  const closeLightbox = useCallback(() => {
    setShowLightbox(false);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "";
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    if (showLightbox) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showLightbox, closeLightbox]);

  return (
    <>
      <section className="w-full pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-12 sm:pb-14 md:pb-16 border-b border-[#e2e0d2] bg-[#fffef7]">
        <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          
          {/* Breadcrumb & Year Reference */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-5 sm:pb-6 border-b border-[#e2e0d2] text-xs font-mono uppercase tracking-[0.18em] text-[#888888]">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2.5">
              <Link href="/portfolio" className="hover:text-black transition-colors">
                Portfolio
              </Link>
              <span>/</span>
              <span className="text-[#888888] hidden sm:inline-block">{item.category}</span>
              <span className="hidden sm:inline-block">/</span>
              <span className="text-black font-semibold truncate max-w-[200px] sm:max-w-none">
                {item.title}
              </span>
            </nav>

            <div className="flex items-center gap-2 text-black font-medium">
              <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)]" />
              <span>Catalog No. {item.number} // {item.year}</span>
            </div>
          </div>

          {/* Title & Concise Tagline */}
          <div className="pt-6 sm:pt-8 pb-6 sm:pb-8 max-w-5xl">
            <LineReveal
              as="h1"
              lines={[item.title]}
              className="font-sans font-light text-3xl sm:text-4xl md:text-5xl lg:text-[58px] xl:text-[64px] leading-[1.08] tracking-[-0.035em] text-black mb-3 sm:mb-4"
            />

            <LineReveal
              as="p"
              lines={[item.tagline || item.summary]}
              className="font-mono text-xs sm:text-sm md:text-base text-[#666666] tracking-[0.03em] uppercase leading-relaxed"
            />
          </div>

          {/* 2-Column Split: Master Frame Plate + Typographic Specifications (Balanced on md: and up) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 md:gap-10 lg:gap-14 xl:gap-16 items-center">
            
            {/* Master Photo Plate */}
            <div className="md:col-span-7">
              <div
                onClick={openLightbox}
                className="relative w-full aspect-[16/10] sm:aspect-[16/10] overflow-hidden bg-black border border-[#e2e0d2] cursor-pointer group select-none"
              >
                <Image
                  src={masterFrame.url}
                  alt={masterFrame.caption || item.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 58vw, 55vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-102"
                />

                <div className="absolute top-3 left-3 bg-black/85 text-white font-mono text-[9px] uppercase tracking-widest px-2.5 py-1">
                  FRAME 01 // ARCHIVE {item.number}
                </div>

                <div className="absolute top-3 right-3 bg-[#ffd001] text-black font-mono text-[10px] sm:text-[11px] font-semibold px-2.5 py-1 uppercase tracking-wider">
                  {item.discipline}
                </div>

                <div className="absolute bottom-3 right-3 bg-black/85 text-white font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3 h-3 text-[#ffd001]" />
                  <span>Inspect</span>
                </div>
              </div>

              {/* Minimal caption line beneath master frame */}
              <div className="flex items-center justify-between pt-2.5 text-xs font-mono text-[#888888]">
                <span className="truncate">{masterFrame.caption}</span>
                {masterFrame.shotLocation && (
                  <span className="shrink-0 pl-3 hidden sm:inline-block text-[#aaaaaa]">
                    {masterFrame.shotLocation}
                  </span>
                )}
              </div>
            </div>

            {/* Typographic Specifications (Minimal & Clean like Course Factsheet) */}
            <div className="md:col-span-5 flex flex-col justify-between gap-6 sm:gap-8 lg:gap-10">
              <div className="flex flex-col gap-5 sm:gap-6">
                <div className="pb-3.5 border-b border-[#e2e0d2]">
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#888888]">
                    Exhibition Specifications
                  </span>
                </div>

                <dl className="grid grid-cols-2 gap-y-4 sm:gap-y-5 lg:gap-y-6 gap-x-6 text-xs sm:text-[13px] font-mono">
                  <div>
                    <dt className="text-[#888888] uppercase tracking-wider mb-1 text-[11px]">Photographer</dt>
                    <dd className="font-medium text-black text-sm sm:text-base truncate">{item.photographer}</dd>
                  </div>
                  <div>
                    <dt className="text-[#888888] uppercase tracking-wider mb-1 text-[11px]">Location</dt>
                    <dd className="font-medium text-black text-sm sm:text-base truncate">{item.location.split(",")[0]}</dd>
                  </div>
                  <div>
                    <dt className="text-[#888888] uppercase tracking-wider mb-1 text-[11px]">Curatorial Track</dt>
                    <dd className="font-medium text-black text-sm sm:text-base truncate">{item.course.split("(")[0].trim()}</dd>
                  </div>
                  <div>
                    <dt className="text-[#888888] uppercase tracking-wider mb-1 text-[11px]">Mentorship</dt>
                    <dd className="font-medium text-black text-sm sm:text-base truncate">{mentorName}</dd>
                  </div>
                </dl>

                {/* Technical Footprint Line */}
                <div className="pt-4 sm:pt-5 border-t border-[#e2e0d2]">
                  <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#888888] block mb-1">
                    Camera & Rig
                  </span>
                  <div className="flex items-baseline gap-2 text-black font-sans font-light text-base sm:text-lg lg:text-xl truncate">
                    <span>{item.specs.camera}</span>
                    <span className="text-[#888888] text-xs sm:text-sm font-mono truncate">· {item.specs.lens}</span>
                  </div>
                </div>
              </div>

              {/* Minimal Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <a
                  href="#gallery"
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#ffd001] hover:bg-black hover:text-[#fffef7] text-black font-mono text-xs sm:text-[13px] uppercase tracking-[0.16em] font-semibold transition-all shadow-sm leading-none whitespace-nowrap cursor-pointer"
                >
                  <span>Exhibition Plates ({item.gallery.length})</span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </a>

                <Link
                  href={`/courses/${item.relatedCourseSlug}`}
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-full bg-black/5 hover:bg-black/10 text-black font-mono text-xs sm:text-[13px] uppercase tracking-[0.16em] transition-all leading-none whitespace-nowrap"
                >
                  <span>Course Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#888888]" />
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Fullscreen Lightbox for Master Frame */}
      {showLightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Master Frame Fullscreen View"
          className="fixed inset-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 select-none"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between text-white font-mono text-xs uppercase tracking-widest pb-4 border-b border-white/10">
            <span>{item.title} // Plate 01 of 0{item.gallery.length}</span>
            <button
              type="button"
              onClick={closeLightbox}
              className="p-2 -m-2 hover:text-[#ffd001] transition-colors cursor-pointer flex items-center gap-2"
              aria-label="Close fullscreen view"
            >
              <span>Close</span>
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Centered Image */}
          <div className="relative w-full h-[70vh] sm:h-[75vh] flex items-center justify-center">
            <Image
              src={masterFrame.url}
              alt={masterFrame.caption || item.title}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Bottom Caption */}
          <div className="text-center font-mono text-xs text-[#aaaaaa] pt-4 border-t border-white/10">
            <span>{masterFrame.caption}</span>
            {masterFrame.shotLocation && <span> — {masterFrame.shotLocation}</span>}
          </div>
        </div>
      )}
    </>
  );
}
