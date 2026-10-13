"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { PortfolioItem } from "@/data/portfolio";

export interface PortfolioDetailGalleryProps {
  item: PortfolioItem;
  externalLightboxIndex?: number | null;
  onCloseLightbox?: () => void;
}

export default function PortfolioDetailGallery({
  item,
  externalLightboxIndex,
  onCloseLightbox,
}: PortfolioDetailGalleryProps): React.JSX.Element {
  const [internalLightboxIndex, setInternalLightboxIndex] = useState<number | null>(null);

  // Sync with external or internal index
  const activeIndex = externalLightboxIndex !== undefined ? externalLightboxIndex : internalLightboxIndex;

  const openLightbox = (index: number) => {
    setInternalLightboxIndex(index);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden";
    }
  };

  const closeLightbox = useCallback(() => {
    setInternalLightboxIndex(null);
    if (onCloseLightbox) onCloseLightbox();
    if (typeof document !== "undefined") {
      document.body.style.overflow = "";
    }
  }, [onCloseLightbox]);

  // Construct a sequence of 8 rhythmic photos using available documentary gallery images
  const fallbackGallery = [
    item.coverImage,
    item.gallery[0]?.url || item.coverImage,
    item.gallery[1]?.url || "/images/portfolio-artisan.webp",
    item.gallery[2]?.url || "/images/portfolio-street.webp",
    item.gallery[3]?.url || "/images/portfolio-himalayas.webp",
    "/images/portfolio/bhaktapur-temple-dawn.jpg",
    "/images/portfolio/patan-copper-artisan.jpg",
    "/images/portfolio/asan-market-dawn.jpg",
  ];

  const photoList = fallbackGallery.slice(0, 8).map((url, idx) => ({
    url,
    caption: item.gallery[idx % item.gallery.length]?.caption || `Exhibition Frame 0${idx + 1} // ${item.title}`,
    aspect: idx % 3 === 0 ? "wide" : idx % 2 === 0 ? "portrait" : "standard",
  }));

  const handlePrev = useCallback(() => {
    if (activeIndex === null) return;
    const newIdx = activeIndex === 0 ? photoList.length - 1 : activeIndex - 1;
    setInternalLightboxIndex(newIdx);
  }, [activeIndex, photoList.length]);

  const handleNext = useCallback(() => {
    if (activeIndex === null) return;
    const newIdx = activeIndex === photoList.length - 1 ? 0 : activeIndex + 1;
    setInternalLightboxIndex(newIdx);
  }, [activeIndex, photoList.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    if (activeIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, closeLightbox, handlePrev, handleNext]);

  return (
    <>
      {/* Photo Sequence: The Core of the Page (90% Photographs) */}
      <section className="w-full py-16 sm:py-20 md:py-24 border-b border-[#e2e0d2] bg-[#fffef7]">
        <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 flex flex-col gap-14 sm:gap-18 md:gap-24">
          
          {/* Header */}
          <div className="flex flex-col items-start max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#888888] font-semibold mb-2">
              02 // PHOTO SEQUENCE
            </span>
            <h2 className="font-sans font-light text-2xl sm:text-3xl md:text-4xl text-black tracking-[-0.03em]">
              The Visual Narrative.
            </h2>
          </div>

          {/* 1. Full-Bleed Wide Master Frame */}
          <div className="w-full">
            <div
              onClick={() => openLightbox(0)}
              className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-black border border-[#e2e0d2] cursor-pointer group"
            >
              <Image
                src={photoList[0].url}
                alt={photoList[0].caption}
                fill
                sizes="(max-width: 1440px) 100vw, 1680px"
                className="object-cover object-center grayscale contrast-110 group-hover:scale-[1.01] transition-transform duration-700"
              />
            </div>
            <div className="pt-2 text-right">
              <span className="font-sans text-xs text-[#777777] italic">
                {photoList[0].caption}
              </span>
            </div>
          </div>

          {/* 2. 7/5 Asymmetric Pair */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* 7 Columns */}
            <div className="md:col-span-7">
              <div
                onClick={() => openLightbox(1)}
                className="relative aspect-[16/10] w-full overflow-hidden bg-black border border-[#e2e0d2] cursor-pointer group"
              >
                <Image
                  src={photoList[1].url}
                  alt={photoList[1].caption}
                  fill
                  sizes="(max-width: 768px) 100vw, 58vw"
                  className="object-cover object-center grayscale contrast-110 group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="pt-2 text-left">
                <span className="font-sans text-xs text-[#777777] italic">
                  {photoList[1].caption}
                </span>
              </div>
            </div>

            {/* 5 Columns */}
            <div className="md:col-span-5">
              <div
                onClick={() => openLightbox(2)}
                className="relative aspect-[4/5] w-full overflow-hidden bg-black border border-[#e2e0d2] cursor-pointer group"
              >
                <Image
                  src={photoList[2].url}
                  alt={photoList[2].caption}
                  fill
                  sizes="(max-width: 768px) 100vw, 42vw"
                  className="object-cover object-center grayscale contrast-110 group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="pt-2 text-left">
                <span className="font-sans text-xs text-[#777777] italic">
                  {photoList[2].caption}
                </span>
              </div>
            </div>
          </div>

          {/* 3. Centered Portrait with Caption */}
          <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
            <div
              onClick={() => openLightbox(3)}
              className="relative aspect-[4/5] w-full overflow-hidden bg-black border border-[#e2e0d2] cursor-pointer group"
            >
              <Image
                src={photoList[3].url}
                alt={photoList[3].caption}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover object-center grayscale contrast-110 group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            <div className="pt-3 text-center">
              <span className="font-sans text-xs sm:text-sm text-[#666666] italic">
                {photoList[3].caption}
              </span>
            </div>
          </div>

          {/* 4. Rhythmic Triptych (3 Frames) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[4, 5, 6].map((photoIdx) => (
              <div key={photoIdx} className="flex flex-col">
                <div
                  onClick={() => openLightbox(photoIdx)}
                  className="relative aspect-[4/5] sm:aspect-[3/2] md:aspect-[4/5] w-full overflow-hidden bg-black border border-[#e2e0d2] cursor-pointer group"
                >
                  <Image
                    src={photoList[photoIdx].url}
                    alt={photoList[photoIdx].caption}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center grayscale contrast-110 group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="pt-2 text-left">
                  <span className="font-sans text-[11px] text-[#777777] italic line-clamp-1">
                    {photoList[photoIdx].caption}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. Lightbox: Clean, Swipable, Arrow Keys, Captions + Gear Info */}
      {activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 sm:p-6 md:p-8 select-none"
        >
          {/* Top Bar: Counter & Close */}
          <div className="w-full flex items-center justify-between text-white font-mono text-xs uppercase tracking-wider z-20">
            <div>
              [ {activeIndex + 1} / {photoList.length} ]
            </div>
            <button
              type="button"
              onClick={closeLightbox}
              className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Stage: Image with Left & Right Arrows */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#ffd001] hover:text-black text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="relative w-full h-full max-w-5xl max-h-[75vh]">
              <Image
                src={photoList[activeIndex].url}
                alt={photoList[activeIndex].caption}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="absolute right-2 sm:right-4 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#ffd001] hover:text-black text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Bar: Caption + Gear Specs */}
          <div className="w-full max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-white/80 text-center sm:text-left z-20 border-t border-white/15 pt-3">
            <span className="font-sans text-xs sm:text-sm text-white/90">
              {photoList[activeIndex].caption}
            </span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#ffd001] shrink-0">
              {item.specs.camera} · {item.specs.lens}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
