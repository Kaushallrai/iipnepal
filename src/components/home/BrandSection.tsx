"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface BrandItem {
  id: string;
  name: string;
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

const BRANDS: BrandItem[] = [
  {
    id: "nikon",
    name: "Nikon",
    src: "/images/brands/nikon.svg",
    alt: "Nikon Optics & Professional Imaging Systems",
    className: "h-7 sm:h-8 md:h-[36px]",
    width: 382,
    height: 108,
  },
  {
    id: "canon",
    name: "Canon",
    src: "/images/brands/canon.svg",
    alt: "Canon Professional Cameras & Cinema EOS",
    className: "h-7 sm:h-8 md:h-[36px]",
    width: 118,
    height: 25,
  },
  {
    id: "sony",
    name: "Sony",
    src: "/images/brands/sony.svg",
    alt: "Sony Alpha Imaging Technology",
    className: "h-6 sm:h-7 md:h-[32px]",
    width: 1280,
    height: 225,
  },
  {
    id: "fujifilm",
    name: "Fujifilm",
    src: "/images/brands/fujifilm.svg",
    alt: "Fujifilm X-Series & GFX Medium Format",
    className: "h-6 sm:h-7 md:h-[32px]",
    width: 1029,
    height: 171,
  },
  {
    id: "leica",
    name: "Leica",
    src: "/images/brands/leica.svg",
    alt: "Leica Camera Heritage & Rangefinders",
    className: "h-8 sm:h-9 md:h-[40px]",
    width: 768,
    height: 768,
  },
  {
    id: "hasselblad",
    name: "Hasselblad",
    src: "/images/brands/hasselblad.svg",
    alt: "Hasselblad Medium Format Photography",
    className: "h-5 sm:h-5.5 md:h-[26px]",
    width: 201,
    height: 19,
  },
  {
    id: "national-geographic",
    name: "National Geographic",
    src: "/images/brands/national-geographic.svg",
    alt: "National Geographic Storytelling & Documentary",
    className: "h-8 sm:h-9 md:h-[38px]",
    width: 1000,
    height: 379,
  },
  {
    id: "magnum-photos",
    name: "Magnum Photos",
    src: "/images/brands/magnum-photos.svg",
    alt: "Magnum Photos Photographic Cooperative",
    className: "h-8 sm:h-9 md:h-[38px]",
    width: 57,
    height: 57,
  },
  {
    id: "ilford-photo",
    name: "Ilford Photo",
    src: "/images/brands/ilford-photo.svg",
    alt: "Ilford Black and White Darkroom Chemistry & Film",
    className: "h-7 sm:h-8 md:h-[36px]",
    width: 500,
    height: 150,
  },
  {
    id: "kodak",
    name: "Kodak",
    src: "/images/brands/kodak.svg",
    alt: "Eastman Kodak Film Heritage",
    className: "h-7 sm:h-8 md:h-[36px]",
    width: 348,
    height: 89,
  },
  {
    id: "dji",
    name: "DJI",
    src: "/images/brands/dji.svg",
    alt: "DJI Aerial Cinematography & Gimbal Technology",
    className: "h-6.5 sm:h-7.5 md:h-[32px]",
    width: 24,
    height: 16,
  },
  {
    id: "white-hat-events",
    name: "White Hat Events",
    src: "/images/brands/white-hat-events.svg",
    alt: "White Hat Events Kathmandu Regional Partner",
    className: "h-6.5 sm:h-7.5 md:h-[34px]",
    width: 220,
    height: 48,
  },
];

export default function BrandSection(): React.JSX.Element {
  return (
    <section
      id="brands"
      aria-label="Industry & Camera Partners"
      className="section_brand-marquee relative w-full bg-[#fffef7] text-black overflow-hidden py-18 sm:py-22 md:py-26 lg:py-28 select-none"
    >
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
