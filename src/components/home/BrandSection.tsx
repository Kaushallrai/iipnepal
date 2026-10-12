"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { brandsData, type BrandItem } from "@/data/home/brands";

export type { BrandItem };

const BRANDS: BrandItem[] = brandsData.brands;

export default function BrandSection(): React.JSX.Element {
  return (
    <section
      id="brands"
      aria-label="Industry Camera Systems & Creative Tools"
      className="section_brand-marquee relative w-full bg-[#fffef7] text-black overflow-hidden py-14 sm:py-16 md:py-20 select-none"
    >
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 mb-6 sm:mb-8 text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start gap-2 select-none">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ffd001] shadow-[0_0_6px_rgba(255,208,1,0.6)] shrink-0 inline-block" />
          <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#888888] font-medium">
            {brandsData.eyebrow}
          </span>
        </div>
      </div>

      {/* 
        Full-Bleed Marquee Wrapper matching Creative Giants:
        Strictly ZERO padding on left and right edges so it runs edge-to-edge across the screen
      */}
      <div className="marquee_wrap relative w-full overflow-hidden flex flex-col">
        <div className="marquee_layout flex w-full overflow-hidden">
          <div className="marquee_track flex items-center shrink-0 animate-marquee-timeline will-change-transform group">
            {/* Primary Track Set */}
            <div
              fs-marquee-element="wrapper"
              className="marquee_cms_wrap flex shrink-0"
            >
              <div
                role="list"
                fs-marquee-element="list"
                className="marquee_cms_list flex shrink-0 items-center justify-around min-w-full"
              >
                {BRANDS.map((brand) => (
                  <div
                    key={`primary-${brand.id}`}
                    role="listitem"
                    fs-marquee-element="item"
                    className="marquee_cms_item shrink-0 px-6 sm:px-14 md:px-20 lg:px-26 xl:px-30 py-4 sm:py-6 flex items-center justify-center"
                  >
                    <Image
                      src={brand.src}
                      alt={brand.alt}
                      width={brand.width || 120}
                      height={brand.height || 36}
                      draggable={false}
                      className={cn(
                        "marquee_img w-auto object-contain select-none grayscale contrast-125 opacity-75 group-hover:opacity-100 transition-all duration-300",
                        brand.className
                      )}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Duplicate Track Set for Seamless Infinite Loop */}
            <div
              aria-hidden="true"
              fs-marquee-element="wrapper"
              className="marquee_cms_wrap flex shrink-0"
            >
              <div
                role="list"
                fs-marquee-element="list"
                className="marquee_cms_list flex shrink-0 items-center justify-around min-w-full"
              >
                {BRANDS.map((brand) => (
                  <div
                    key={`duplicate-${brand.id}`}
                    role="listitem"
                    fs-marquee-element="item"
                    className="marquee_cms_item shrink-0 px-6 sm:px-14 md:px-20 lg:px-26 xl:px-30 py-4 sm:py-6 flex items-center justify-center"
                  >
                    <Image
                      src={brand.src}
                      alt={brand.alt}
                      width={brand.width || 120}
                      height={brand.height || 36}
                      draggable={false}
                      className={cn(
                        "marquee_img w-auto object-contain select-none grayscale contrast-125 opacity-75 group-hover:opacity-100 transition-all duration-300",
                        brand.className
                      )}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Embedded Marquee Animation Keyframes (Creative Giants style) */}
        <div className="marquee_embed hidden">
          <style
            dangerouslySetInnerHTML={{
              __html: `
                @keyframes marquee_timeline {
                  from { transform: translate3d(0%, 0, 0); }
                  to { transform: translate3d(-50%, 0, 0); }
                }
              `,
            }}
          />
        </div>
      </div>
    </section>
  );
}
