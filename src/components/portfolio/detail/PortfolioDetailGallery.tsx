"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Maximize2, X, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import type { PortfolioItem } from "@/lib/portfolio-data";
import LineReveal from "@/components/animations/LineReveal";

export interface PortfolioDetailGalleryProps {
  item: PortfolioItem;
}

export default function PortfolioDetailGallery({ item }: PortfolioDetailGalleryProps): React.JSX.Element {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden";
    }
  };

  const closeLightbox = useCallback(() => {
    setActiveLightboxIndex(null);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "";
    }
  }, []);

  const handlePrev = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) =>
      prev === 0 ? item.gallery.length - 1 : (prev as number) - 1
    );
  }, [activeLightboxIndex, item.gallery.length]);

  const handleNext = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) =>
      prev === item.gallery.length - 1 ? 0 : (prev as number) + 1
    );
  }, [activeLightboxIndex, item.gallery.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    if (activeLightboxIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeLightboxIndex, closeLightbox, handlePrev, handleNext]);

  return (
    <>
      <section
        id="gallery"
        className="w-full py-16 sm:py-20 md:py-24 lg:py-28 border-b border-[#e2e0d2] bg-[#fffef7]"
      >
        <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 flex flex-col gap-10 sm:gap-14">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 sm:pb-8 border-b border-[#e2e0d2]">
            <div>
              <div className="flex items-center gap-2 mb-3 sm:mb-4 select-none">
                <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block" />
                <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#888888] font-medium">
                  Exhibition Sequence // Plates 02 — 0{item.gallery.length}
                </span>
              </div>
              <LineReveal
                as="h2"
                lines={["Archival Plates."]}
                className="font-sans font-light text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-[1.12] text-black tracking-[-0.03em]"
              />
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <button
                type="button"
                onClick={() => openLightbox(0)}
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-black hover:text-[#ca8a04] transition-colors py-1 cursor-pointer"
              >
                <span>Browse All 0{item.gallery.length} in Fullscreen</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Rhythmic Editorial Photo Spread */}
          <div className="flex flex-col gap-10 sm:gap-14 lg:gap-16">
            
            {/* 1. Diptych: Plates 02 & 03 (Complementary Frames) */}
            {item.gallery.length >= 3 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
                {[1, 2].map((idx) => {
                  const frame = item.gallery[idx];
                  if (!frame) return null;
                  return (
                    <figure
                      key={idx}
                      className="group flex flex-col gap-3 cursor-pointer"
                      onClick={() => openLightbox(idx)}
                    >
                      <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-black border border-[#e2e0d2]">
                        <Image
                          src={frame.url}
                          alt={frame.caption}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-102"
                        />

                        <div className="absolute top-3 left-3 bg-black/85 text-white font-mono text-[9px] uppercase tracking-widest px-2.5 py-1">
                          PLATE 0{idx + 1}
                        </div>

                        <div className="absolute bottom-3 right-3 bg-black/85 text-white font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                          <Maximize2 className="w-3 h-3 text-[#ffd001]" />
                          <span>Inspect</span>
                        </div>
                      </div>

                      <figcaption className="flex items-baseline justify-between gap-3 text-xs font-mono text-[#666666] pt-1">
                        <span className="font-sans text-sm text-[#222222] font-normal leading-snug line-clamp-1">
                          {frame.caption}
                        </span>
                        <span className="text-[11px] text-[#888888] uppercase tracking-wider shrink-0">
                          0{idx + 1} / 0{item.gallery.length}
                        </span>
                      </figcaption>
                    </figure>
                  );
                })}
              </div>
            )}

            {/* 2. Concluding Detail / Archival Study: Plate 04 */}
            {item.gallery.length > 3 && (
              <figure
                className="group flex flex-col gap-3 cursor-pointer"
                onClick={() => openLightbox(3)}
              >
                <div className="relative w-full aspect-[16/9] sm:aspect-[21/10] max-h-[500px] overflow-hidden bg-black border border-[#e2e0d2]">
                  <Image
                    src={item.gallery[3].url}
                    alt={item.gallery[3].caption}
                    fill
                    sizes="(max-width: 1024px) 100vw, 85vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-102"
                  />

                  <div className="absolute top-3 left-3 bg-black/85 text-white font-mono text-[9px] uppercase tracking-widest px-2.5 py-1">
                    PLATE 04 // ARCHIVAL STUDY
                  </div>

                  <div className="absolute bottom-3 right-3 bg-black/85 text-white font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3 h-3 text-[#ffd001]" />
                    <span>Inspect</span>
                  </div>
                </div>

                <figcaption className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 text-xs font-mono text-[#666666] pt-1">
                  <span className="font-sans text-sm text-[#222222] font-normal leading-snug">
                    {item.gallery[3].caption}
                  </span>
                  {item.gallery[3].shotLocation && (
                    <span className="text-[11px] text-[#888888] uppercase tracking-wider shrink-0">
                      {item.gallery[3].shotLocation}
                    </span>
                  )}
                </figcaption>
              </figure>
            )}

          </div>

        </div>
      </section>

      {/* Interactive Fullscreen Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Exhibition Lightbox"
          className="fixed inset-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 select-none"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between text-white font-mono text-xs uppercase tracking-widest pb-4 border-b border-white/10">
            <span className="truncate max-w-[240px] sm:max-w-none">
              {item.title} {"//"} Plate 0{activeLightboxIndex + 1} of 0{item.gallery.length}
            </span>
            <div className="flex items-center gap-4">
              <span className="text-[#ffd001] hidden sm:inline-block text-[11px]">Use Arrow Keys to Navigate</span>
              <button
                type="button"
                onClick={closeLightbox}
                className="p-2 -m-2 hover:text-[#ffd001] transition-colors cursor-pointer flex items-center gap-1.5"
                aria-label="Close Lightbox"
              >
                <span>Close</span>
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Center Display with Previous / Next Controls */}
          <div className="relative w-full h-[68vh] sm:h-[74vh] flex items-center justify-center my-auto">
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 z-10 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-black/60 hover:bg-[#ffd001] hover:text-black text-white flex items-center justify-center transition-all cursor-pointer"
              aria-label="Previous plate"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="relative w-full h-full max-w-5xl">
              <Image
                src={item.gallery[activeLightboxIndex].url}
                alt={item.gallery[activeLightboxIndex].caption}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="absolute right-2 sm:right-4 z-10 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-black/60 hover:bg-[#ffd001] hover:text-black text-white flex items-center justify-center transition-all cursor-pointer"
              aria-label="Next plate"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Bottom Bar: Frame Caption & Location */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left font-mono text-xs text-[#aaaaaa] pt-4 border-t border-white/10">
            <span className="font-sans text-sm text-white font-light">
              {item.gallery[activeLightboxIndex].caption}
            </span>
            {item.gallery[activeLightboxIndex].shotLocation && (
              <span className="text-[11px] uppercase tracking-wider text-[#ffd001]">
                {item.gallery[activeLightboxIndex].shotLocation}
              </span>
            )}
          </div>
        </div>
      )}
    </>
  );
}
