"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Mousewheel } from "swiper/modules";
import type { Swiper as SwiperCore } from "swiper";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LineReveal from "@/components/animations/LineReveal";
import { cn } from "@/lib/utils";

import "swiper/css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  slug: string;
}

const NEWS_ITEMS: NewsItem[] = [
  {
    id: "kathmandu-annual-exhibition-2026",
    title: "Annual Photography Exhibition 2026",
    excerpt:
      "Student fieldwork from Langtang, Patan, and Bhaktapur takes center stage at Nepal Art Council, celebrating documentary excellence and living cultural heritage.",
    image: "/images/portfolio-artisan.webp",
    slug: "kathmandu-annual-exhibition-2026",
  },
  {
    id: "additya-shrestha-vision",
    title: "Additya Shrestha on IIP's Vision",
    excerpt:
      "Director and alumnus Additya Shrestha speaks with national media on launching the Indian Institute of Photography in Kathmandu with White Hat Events.",
    image: "/images/flagship-mentor-darkroom.webp",
    slug: "additya-shrestha-vision",
  },
  {
    id: "high-altitude-fieldwork-everest",
    title: "High-Altitude Fieldwork in Everest",
    excerpt:
      "Master class students complete an intensive 14-day high-altitude documentary expedition, capturing glacial recession and remote Sherpa traditions at 4,800m.",
    image: "/images/portfolio-himalayas.webp",
    slug: "high-altitude-fieldwork-everest",
  },
  {
    id: "mobile-photography-revolution",
    title: "The Mobile Photography Revolution",
    excerpt:
      "How modern smartphone sensor technology and RAW capture workflows are democratizing visual journalism for emerging Nepali creators.",
    image: "/images/course-mobile.webp",
    slug: "mobile-photography-revolution",
  },
  {
    id: "living-heritage-lalitpur",
    title: "Preserving Lalitpur's Sacred Crafts",
    excerpt:
      "A long-form photo essay by IIP fellows chronicling three generations of Patan brass artisans, woodcarvers, and temple restorers.",
    image: "/images/portfolio-devotee.webp",
    slug: "living-heritage-lalitpur",
  },
  {
    id: "darkroom-to-commercial-production",
    title: "Darkroom Craft to Studio Practice",
    excerpt:
      "Inside IIP Nepal's dedicated studio lighting and commercial portfolio labs, preparing students for advertising and editorial commissions.",
    image: "/images/course-pro.webp",
    slug: "darkroom-to-commercial-production",
  },
];

export default function NewsSection(): React.JSX.Element {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);
  const swiperInstanceRef = useRef<SwiperCore | null>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  // Scroll entrance animation matching Creative Giants data-fade data-y="50"
  useEffect(() => {
    const section = sectionRef.current;
    const eyebrow = eyebrowRef.current;
    if (!section || !eyebrow) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        eyebrow,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="news"
      className="section_news-cta theme-light relative w-full bg-[#fffef7] text-black overflow-hidden pt-16 sm:pt-20 md:pt-24 pb-24 sm:pb-28 md:pb-32 lg:pb-36 select-none"
      style={{ overscrollBehaviorX: "contain" }}
    >
      <div className="padding-global w-full px-6 sm:px-8 md:px-12 lg:px-16 max-w-[105rem] mx-auto">
        <div className="news-cta_component">
          <div className="slider-blog_wrap flex flex-col gap-12 sm:gap-14 md:gap-16">
            {/* Top Header Lockup: Eyebrow above, Headline + Arrow Buttons beside each other */}
            <div className="slider-blog_header flex flex-col gap-3 sm:gap-4 md:gap-5 mb-2 sm:mb-4">
              {/* Eyebrow with glowing signal yellow dot */}
              <div
                ref={eyebrowRef}
                className="eyebrow-wrap flex items-center gap-2.5 text-xs sm:text-[13px] font-mono uppercase tracking-[0.22em] text-black font-semibold"
              >
                <span className="eyebrow-dot w-2 h-2 rounded-full bg-[#ffd001] shrink-0 inline-block shadow-[0_0_8px_rgba(255,208,1,0.6)]" />
                <div>News &amp; opinion</div>
              </div>

              {/* Headline with Decreased Size + Arrow Buttons Beside It (On Mobile, Tablet & Desktop) */}
              <div className="slider-blog_action_row flex items-center justify-between gap-4">
                <LineReveal
                  as="h2"
                  lines={["Stay up to date"]}
                  className="heading-style-h1 font-sans font-light text-2xl sm:text-3xl md:text-4xl lg:text-[46px] xl:text-[54px] leading-[1.08] tracking-[-0.03em] text-black"
                />

                {/* Slider Navigation Buttons (Beside the Headline - Exact dimensions as TestimonialsSection) */}
                <div className="slider-blog_btn_layout flex items-center gap-3 shrink-0">
                  {/* Prev Button */}
                  <button
                    ref={prevButtonRef}
                    type="button"
                    disabled={isBeginning}
                    onClick={() => swiperInstanceRef.current?.slidePrev()}
                    aria-label="Previous articles"
                    className={cn(
                      "slider_button relative w-10 h-10 md:w-11 md:h-11 rounded-full border border-black/30 flex items-center justify-center transition-all duration-200",
                      "hover:border-black hover:bg-[#ffd001] active:scale-95 cursor-pointer",
                      isBeginning && "opacity-25 border-black/15 pointer-events-none cursor-not-allowed"
                    )}
                  >
                    <div className="slider_icon w-4 h-4 flex items-center justify-center text-black">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.6846 3.41603L2.1005 12.0001L10.684 20.5836L11.5191 19.7484L4.36134 12.5906L21.309 12.5906L21.309 11.4095L4.36134 11.4095L11.5197 4.25118L10.6846 3.41603Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </button>

                  {/* Next Button */}
                  <button
                    ref={nextButtonRef}
                    type="button"
                    disabled={isEnd}
                    onClick={() => swiperInstanceRef.current?.slideNext()}
                    aria-label="Next articles"
                    className={cn(
                      "slider_button relative w-10 h-10 md:w-11 md:h-11 rounded-full border border-black/30 flex items-center justify-center transition-all duration-200",
                      "hover:border-black hover:bg-[#ffd001] active:scale-95 cursor-pointer",
                      isEnd && "opacity-25 border-black/15 pointer-events-none cursor-not-allowed"
                    )}
                  >
                    <div className="slider_icon w-4 h-4 flex items-center justify-center text-black">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.3154 3.41603L21.8995 12.0001L13.316 20.5836L12.4809 19.7484L19.6387 12.5906L2.69105 12.5906L2.69105 11.4095L19.6387 11.4095L12.4803 4.25118L13.3154 3.41603Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Swiper Slider Track: 3 columns on desktop, 2 on tablet, 1 on mobile */}
            <div
              className="slider-blog_trim overflow-visible"
              style={{ clipPath: "inset(0 -100vw 0 0)" }}
            >
              <Swiper
                modules={[Navigation, Keyboard, Mousewheel]}
                slidesPerView="auto"
                spaceBetween={28}
                speed={600}
                grabCursor={true}
                watchSlidesProgress={true}
                touchAngle={45}
                preventClicks={true}
                preventClicksPropagation={true}
                resistanceRatio={0.85}
                edgeSwipeDetection={false}
                keyboard={{ enabled: true, onlyInViewport: true }}
                mousewheel={{ forceToAxis: true }}
                onSwiper={(swiper) => {
                  swiperInstanceRef.current = swiper;
                  setIsBeginning(swiper.isBeginning);
                  setIsEnd(swiper.isEnd);
                }}
                onSlideChange={(swiper) => {
                  setIsBeginning(swiper.isBeginning);
                  setIsEnd(swiper.isEnd);
                }}
                className="w-full !overflow-visible"
              >
                {NEWS_ITEMS.map((item) => (
                  <SwiperSlide
                    key={item.id}
                    className="slider-blog_cms_item !w-[86vw] sm:!w-[calc((100%-28px)/2)] lg:!w-[calc((100%-56px)/3)] !h-auto flex flex-col"
                  >
                    <article className="group flex flex-col h-full cursor-pointer select-none">
                      {/* 3:2 Aspect Ratio Image Wrap with smooth subtle zoom on hover */}
                      <div className="news-cta_image-wrap relative w-full aspect-[3/2] overflow-hidden bg-[#e8e6df]">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 640px) 86vw, (max-width: 1024px) 50vw, 33vw"
                          className="news-cta_image object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                        />
                      </div>

                      {/* Text Wrap (Exact Creative Giants Switzer Light 300 typography with breathing room) */}
                      <div className="news-cta_text-wrap mt-5 sm:mt-6 flex flex-col gap-3.5 sm:gap-4 max-w-[42ch]">
                        <h3 className="news-cta_heading font-sans font-light text-[19px] sm:text-[20px] md:text-[21px] leading-[1.35] tracking-[-0.02em] text-black">
                          {item.title}
                        </h3>
                        <p className="text-size-small text-color-secondary font-sans font-light text-[13.5px] sm:text-[14px] leading-[1.62] tracking-normal text-[#666666] line-clamp-3">
                          {item.excerpt}
                        </p>
                      </div>
                    </article>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
