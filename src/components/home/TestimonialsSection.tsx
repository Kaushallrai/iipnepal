"use client";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Mousewheel } from "swiper/modules";
import type { Swiper as SwiperCore } from "swiper";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { testimonialsData, type TestimonialItem } from "@/data/home/testimonials";

import "swiper/css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export type { TestimonialItem };

const TESTIMONIALS: TestimonialItem[] = testimonialsData.testimonials;

export default function TestimonialsSection(): React.JSX.Element {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);
  const swiperInstanceRef = useRef<SwiperCore | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  // Scroll entrance animation
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
      id="testimonials"
      className="section_testimonials relative w-full bg-[#fffef7] text-black overflow-hidden pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16 sm:pb-20 md:pb-24 select-none"
      style={{ overscrollBehaviorX: "contain" }}
    >
      <div className="padding-global w-full px-6 sm:px-8 md:px-12 lg:px-16 max-w-[105rem] mx-auto">
        {/* Top Control Bar: Eyebrow on left, Simple Circular Prev/Next Arrow Buttons on right */}
        <div className="slider_layout flex items-center justify-between gap-6 mb-10 sm:mb-12 md:mb-14">
          {/* Eyebrow lockup */}
          <div
            ref={eyebrowRef}
            className="eyebrow-wrap flex items-center gap-2.5 text-xs sm:text-[13px] font-mono uppercase tracking-[0.22em] text-black font-semibold"
          >
            <span className="w-2 h-2 rounded-full bg-[#ffd001] shrink-0 inline-block shadow-[0_0_8px_rgba(255,208,1,0.6)]" />
            <span>{testimonialsData.eyebrow}</span>
          </div>

          {/* Slider Navigation Buttons (Clean Creative Giants style circles) */}
          <div className="slider_btn_layout flex items-center gap-3">
            {/* Prev Button */}
            <button
              ref={prevButtonRef}
              type="button"
              disabled={isBeginning}
              onClick={() => swiperInstanceRef.current?.slidePrev()}
              aria-label="Previous testimonial"
              className={cn(
                "relative w-10 h-10 md:w-11 md:h-11 rounded-full border border-black/30 flex items-center justify-center transition-all duration-200",
                "hover:border-black hover:bg-[#ffd001] active:scale-95 cursor-pointer",
                isBeginning && "opacity-25 border-black/15 pointer-events-none cursor-not-allowed"
              )}
            >
              <div className="w-4 h-4 flex items-center justify-center text-black">
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
              aria-label="Next testimonial"
              className={cn(
                "relative w-10 h-10 md:w-11 md:h-11 rounded-full border border-black/30 flex items-center justify-center transition-all duration-200",
                "hover:border-black hover:bg-[#ffd001] active:scale-95 cursor-pointer",
                isEnd && "opacity-25 border-black/15 pointer-events-none cursor-not-allowed"
              )}
            >
              <div className="w-4 h-4 flex items-center justify-center text-black">
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

        {/* Swiper Slider Track: No borders on cards, no highlights, smooth swipe mechanics */}
        <div className="slider_trim overflow-visible" style={{ clipPath: "inset(0 -100vw 0 0)" }}>
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
              setActiveIndex(swiper.activeIndex);
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            className="w-full !overflow-visible"
          >
            {TESTIMONIALS.map((item, idx) => (
              <SwiperSlide
                key={item.id}
                className="!w-[88vw] sm:!w-[75vw] md:!w-[65vw] lg:!w-[58vw] max-w-[920px] !h-auto flex"
              >
                {/* Simple Creative Giants Card: Flat uniform #f4f2ea surface, NO borders, NO separator, NO highlights, identical size */}
                <div
                  className="slider_card w-full h-[380px] sm:h-[400px] md:h-[430px] lg:h-[440px] flex flex-col justify-between bg-[#f4f2ea] p-8 sm:p-10 md:p-12 lg:p-14 select-none"
                  onClick={() => {
                    if (activeIndex !== idx) {
                      swiperInstanceRef.current?.slideTo(idx);
                    }
                  }}
                >
                  {/* Top Wrap: Display Quote and Yellow Accent Quote Mark SVG */}
                  <div className="testimonial_text-wrap flex items-start justify-between gap-6 md:gap-10">
                    <p className="testimonials_quote heading-style-h4 flex-1 font-sans font-light text-xl sm:text-2xl md:text-3xl lg:text-[32px] leading-[1.26] tracking-[-0.035em] text-black">
                      {item.quote}
                    </p>

                    {/* Creative Giants Double Quotation SVG in Signal Yellow */}
                    <div className="testimonial_icon-wrap flex-none w-10 h-8 sm:w-12 sm:h-9 md:w-14 md:h-11">
                      <div className="testimonial_icon w-full h-full text-[#ffd001]">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 65 49"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M24.5408 49H0V27.9186C0 24.1202 0.442177 20.5749 1.32653 17.2829C2.35828 13.8643 3.8322 10.8889 5.7483 8.35659C7.81179 5.82429 10.3912 3.79845 13.4864 2.27907C16.5816 0.759692 20.1927 0 24.3197 0V9.49613C21.8141 9.49613 19.7506 10.0659 18.1293 11.2054C16.5079 12.2184 15.1814 13.6111 14.1497 15.3837C13.1179 17.1563 12.381 19.1822 11.9388 21.4612C11.644 23.6137 11.4966 25.7662 11.4966 27.9186H24.5408V49ZM65 49H40.4592V27.9186C40.4592 24.1202 40.9014 20.5749 41.7857 17.2829C42.8175 13.8643 44.2914 10.8889 46.2075 8.35659C48.271 5.82429 50.8503 3.79845 53.9456 2.27907C57.0408 0.759692 60.6519 0 64.7789 0V9.49613C62.2732 9.49613 60.2098 10.0659 58.5884 11.2054C56.9671 12.2184 55.6406 13.6111 54.6088 15.3837C53.5771 17.1563 52.8401 19.1822 52.398 21.4612C52.1032 23.6137 51.9558 25.7662 51.9558 27.9186H65V49Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Info: Author Name, Role, Location (NO separator line) */}
                  <div className="testimonial_info-wrap mt-auto flex items-center justify-between gap-4">
                    <div>
                      <div className="text-base sm:text-lg font-medium text-black tracking-[-0.015em]">
                        {item.author}
                      </div>
                      <div className="text-xs sm:text-sm text-[#666666] mt-0.5">
                        {item.role}
                      </div>
                    </div>

                    <div className="text-xs font-mono uppercase tracking-wider text-[#888888]">
                      {item.location}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
