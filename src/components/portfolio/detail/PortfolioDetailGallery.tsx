"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";
import type { PortfolioItem } from "@/lib/portfolio-data";
import LineReveal from "@/components/animations/LineReveal";
import ScrollReveal from "@/components/animations/ScrollReveal";

export interface PortfolioDetailGalleryProps {
  item: PortfolioItem;
}

export default function PortfolioDetailGallery({ item }: PortfolioDetailGalleryProps): React.JSX.Element {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden";
    }
  };

  const closeLightbox = useCallback(() => {
    setActiveImageIndex(null);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "";
    }
  }, []);

  const handlePrev = useCallback(() => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) =>
      prev === null || prev === 0 ? item.gallery.length - 1 : prev - 1
    );
  }, [activeImageIndex, item.gallery.length]);

  const handleNext = useCallback(() => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) =>
      prev === null || prev === item.gallery.length - 1 ? 0 : prev + 1
    );
  }, [activeImageIndex, item.gallery.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImageIndex, closeLightbox, handlePrev, handleNext]);

  return (
    <section id="exhibition-gallery" className="w-full py-16 sm:py-20 md:py-24 lg:py-28 border-b border-[#e2e0d2] bg-[#fffef7]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 flex flex-col gap-10 sm:gap-14">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 sm:pb-8 border-b border-[#e2e0d2]">
          <div>
            <div className="flex items-center gap-2 mb-3 sm:mb-4 select-none">
              <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block" />
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#888888] font-medium">
                Visual Narrative // Complete Photographic Sequence
              </span>
            </div>
            <LineReveal
              as="h2"
              lines={["Curated Exhibition Frames."]}
              className="font-sans font-light text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-[1.12] text-black tracking-[-0.03em]"
            />
          </div>

          <div className="font-mono text-xs sm:text-[13px] text-[#888888] tracking-wider flex items-center gap-3">
            <span className="text-black font-semibold">{item.gallery.length} Exhibition Frames</span>
            <span>•</span>
            <span>{item.location}</span>
          </div>
        </div>

        {/* Disciplined 2-Column Exhibition Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 lg:gap-16 xl:gap-20">
          {item.gallery.map((image, idx) => {
            return (
              <ScrollReveal
                key={idx}
                variant="fade-up"
                distance={20}
                delay={idx * 0.08}
                duration={0.7}
              >
                <div className="flex flex-col gap-3 sm:gap-4 group">
                  {/* Image Frame with controlled aspect ratio */}
                  <div
                    onClick={() => openLightbox(idx)}
                    className="relative w-full aspect-[16/10] sm:aspect-[4/3] md:aspect-[16/11] max-h-[340px] sm:max-h-none overflow-hidden bg-black cursor-pointer select-none border border-[#e2e0d2]"
                  >
                    <Image
                      src={image.url}
                      alt={image.caption}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-103"
                    />

                    {/* Corner Frame Stamp */}
                    <div className="absolute top-3 left-3 bg-black/85 text-white font-mono text-[9px] uppercase tracking-widest px-2.5 py-0.5">
                      FRAME 0{idx + 1}
                    </div>

                    {/* Hover Inspect Indicator */}
                    <div className="absolute bottom-3 right-3 bg-black/75 text-white font-mono text-[10px] uppercase tracking-wider px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5">
                      <Maximize2 className="w-3 h-3 text-[#ffd001]" />
                      <span>Inspect</span>
                    </div>
                  </div>

                  {/* Clean Archival Caption Underneath */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 font-mono text-xs text-[#666666]">
                    <span className="font-sans text-xs sm:text-sm text-black leading-snug">
                      <strong className="font-mono text-xs text-[#888888] font-normal mr-1.5">0{idx + 1}.</strong>
                      {image.caption}
                    </span>
                    {image.shotLocation && (
                      <span className="text-[11px] text-[#888888] shrink-0 font-mono uppercase tracking-wider pt-0.5">
                        {image.shotLocation}
                      </span>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Full-screen frame view"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col justify-between p-4 sm:p-6 md:p-8 select-none"
        >
          {/* Top Bar */}
          <div className="w-full flex items-center justify-between text-white font-mono text-xs border-b border-white/15 pb-4">
            <span className="text-white/80 uppercase tracking-wider">
              FRAME 0{activeImageIndex + 1} OF 0{item.gallery.length} // {item.title}
            </span>

            <button
              type="button"
              onClick={closeLightbox}
              className="p-2 text-white/70 hover:text-white transition-colors cursor-pointer"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </div>

          {/* Central Image with Navigation */}
          <div className="relative flex-1 w-full max-h-[78vh] my-4 flex items-center justify-center">
            <div className="relative w-full h-full max-w-5xl">
              <Image
                src={item.gallery[activeImageIndex].url}
                alt={item.gallery[activeImageIndex].caption}
                fill
                priority
                className="object-contain"
              />
            </div>

            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous frame"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next frame"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>

          {/* Bottom Caption */}
          <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-white/80 font-mono text-xs border-t border-white/15 pt-4">
            <p className="font-sans text-xs sm:text-sm text-white">
              {item.gallery[activeImageIndex].caption}
            </p>
            {item.gallery[activeImageIndex].shotLocation && (
              <span className="text-[#ffd001] text-[11px] shrink-0 font-mono">
                {item.gallery[activeImageIndex].shotLocation}
              </span>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
