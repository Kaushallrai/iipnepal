"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import LineReveal from "@/components/animations/LineReveal";

export interface WhatWeDoStat {
  value: string;
  label: string;
  icon: "globe" | "audience" | "prism";
  delay?: number;
}

export interface WhatWeDoProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  stats?: WhatWeDoStat[];
}

export default function WhatWeDo({
  eyebrow = "What we do",
  heading = "We are artists, designers, producers, creatives, clients and technicians. We work together to create immersive experiences and bring ideas to life in real-world spaces.",
  description = "We go beyond the traditional agency model and empower people across different industries to realise their creative ambitions. From the marketing director looking for more impact, to the artist reaching out to new audiences - we have the experience, the dedication, the skills and the resources to make seemingly impossible projects happen. Our clients don’t hire us, they join us. And in doing so, become Creative Giants themselves.",
  stats = [
    {
      value: "100+",
      label: "Years of combined experience in creative production, design.",
      icon: "globe",
      delay: 0,
    },
    {
      value: "2.5m",
      label: "People reached annually through art experiences and installations.",
      icon: "audience",
      delay: 0.15,
    },
    {
      value: "20+",
      label: "Large-scale projects delivered for festivals, agencies, and brands.",
      icon: "prism",
      delay: 0.3,
    },
  ],
}: WhatWeDoProps): React.JSX.Element {
  const sectionRef = useRef<HTMLElement>(null);
  const statIconsRef = useRef<(HTMLDivElement | null)[]>([]);
  const hasAnimatedStatsRef = useRef(false);

  useEffect(() => {
    const validIcons = statIconsRef.current.filter(Boolean);
    if (validIcons.length === 0) return;

    if (hasAnimatedStatsRef.current) {
      gsap.set(validIcons, { opacity: 1, scale: 1, y: 0 });
      return;
    }

    gsap.set(validIcons, { opacity: 0, scale: 0.85, y: 12 });

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimatedStatsRef.current) {
          hasAnimatedStatsRef.current = true;
          observer.disconnect();

          gsap.to(validIcons, {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.15,
            stagger: 0.12,
            ease: "power3.out",
          });
        }
      },
      { rootMargin: "0px 0px -15% 0px", threshold: 0.02 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      if (hasAnimatedStatsRef.current) {
        gsap.set(validIcons, { opacity: 1, scale: 1, y: 0 });
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section_what w-full bg-[#fffef7] text-black relative z-20 py-24 sm:py-28 md:py-32 lg:py-36 overflow-hidden"
    >
      {/* Full-bleed container with consistent fixed side spacing across all screens */}
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        {/* ============================================================ */}
        {/* 1. SECTION HEADER: Eyebrow + Statement Headline (TO THE LEFT) */}
        {/* Starts directly at the left margin, utilizing horizontal space */}
        {/* ============================================================ */}
        <div className="w-full text-left mb-10 sm:mb-12 md:mb-14">
          {/* Eyebrow with Line Reveal & Yellow Accent Dot */}
          <div className="flex items-center gap-2.5 mb-4 sm:mb-5 select-none">
            <span className="w-2 h-2 rounded-full bg-[#ffd001] shrink-0 inline-block shadow-[0_0_8px_rgba(255,208,1,0.6)]" />
            <LineReveal
              as="span"
              lines={[eyebrow]}
              className="font-mono text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold text-black"
            />
          </div>

          {/* Statement Headline with Creative Giants line reveal */}
          <LineReveal
            as="h2"
            lines={[heading]}
            className="font-sans font-light text-2xl sm:text-3xl md:text-4xl lg:text-[46px] xl:text-[52px] leading-[1.14] tracking-[-0.035em] text-black max-w-5xl xl:max-w-6xl"
          />
        </div>

        {/* ============================================================ */}
        {/* 2. MAIN CONTENT (Description + Stats): IN THE MIDDLE         */}
        {/* Balanced in the center, seamless flow with NO separator line */}
        {/* ============================================================ */}
        <div className="w-full flex flex-col items-center ">
          <div className="w-full max-w-4xl lg:max-w-5xl mx-auto flex flex-col gap-14 sm:gap-16 md:gap-20">
            {/* Subdescription with Creative Giants masked line reveal */}
            <LineReveal
              as="p"
              lines={[description]}
              className="text-base sm:text-lg md:text-xl text-[#555555] font-normal leading-[1.65] tracking-[-0.018em] text-left"
            />

            {/* Stats: Connected directly under description with zero divider */}
            <div className="w-full">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 md:gap-10 lg:gap-12">
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-start text-left gap-3 sm:gap-3.5"
                  >
                    {/* Top: Icon + Number with Smooth Motion Animation */}
                    <div className="flex items-center gap-3">
                      <div
                        ref={(el) => {
                          statIconsRef.current[idx] = el;
                        }}
                        className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 flex items-center justify-center text-black will-change-transform"
                      >
                        {stat.icon === "globe" && (
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 39 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-full h-full"
                            aria-hidden="true"
                          >
                            <path
                              d="M36.4583 27.3722C37.445 25.1122 38 22.6208 38 20C38 17.3792 37.445 14.8894 36.4583 12.6277V12.2917H36.2965C33.3657 5.93383 26.9478 1.5 19.5 1.5C12.0522 1.5 5.63425 5.93383 2.70354 12.2917H2.54167V12.6277C1.555 14.8878 1 17.3792 1 20C1 22.6208 1.555 25.1106 2.54167 27.3722V27.7083H2.70354C5.63425 34.0662 12.0507 38.5 19.5 38.5C26.9493 38.5 33.3657 34.0662 36.2965 27.7083H36.4583V27.3722ZM35.2805 26.1667H27.7186C28.3415 24.2427 28.75 22.1753 28.75 20C28.75 17.8247 28.3415 15.7573 27.7186 13.8333H35.2805C36.0313 15.7481 36.4583 17.8232 36.4583 20C36.4583 22.1768 36.0313 24.2519 35.2805 26.1667ZM12.9186 26.1667C12.2418 24.2442 11.7917 22.1691 11.7917 20C11.7917 17.8309 12.2418 15.7542 12.9171 13.8333H26.0814C26.7582 15.7558 27.2083 17.8309 27.2083 20C27.2083 22.1691 26.7582 24.2442 26.0814 26.1667H12.9186ZM25.477 27.7083C23.5823 32.0836 20.6732 35.4012 19.4985 36.6315C18.3237 35.4012 15.4146 32.0836 13.5199 27.7083H25.477ZM13.5199 12.2917C15.4146 7.91179 18.3252 4.59567 19.5 3.36696C20.6747 4.59721 23.5839 7.91487 25.4786 12.2917H13.5199ZM34.5867 12.2917H27.1652C25.5202 8.17696 22.9842 4.92096 21.4132 3.15729C27.1698 3.80633 32.0523 7.34908 34.5883 12.2917H34.5867ZM17.5837 3.15729C16.0035 4.93021 13.4705 8.18929 11.8333 12.2917H4.41325C6.94929 7.35062 11.8287 3.80942 17.5837 3.15729ZM3.7195 13.8333H11.2798C10.6585 15.7558 10.25 17.8247 10.25 20C10.25 22.1753 10.6585 24.2427 11.2814 26.1667H3.7195C2.96871 24.2519 2.54167 22.1768 2.54167 20C2.54167 17.8232 2.96871 15.7481 3.7195 13.8333ZM4.41325 27.7083H11.8364C13.4813 31.823 16.0174 35.079 17.5883 36.8427C11.8318 36.1937 6.94929 32.6509 4.41325 27.7083ZM21.4117 36.8427C22.9826 35.079 25.5187 31.8215 27.1636 27.7083H34.5852C32.0492 32.6509 27.1682 36.1937 21.4117 36.8427Z"
                              fill="currentColor"
                            />
                          </svg>
                        )}
                        {stat.icon === "audience" && (
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 41 42"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-full h-full"
                            aria-hidden="true"
                          >
                            <path
                              d="M20.5 10.2083C18.374 10.2083 16.6458 8.47858 16.6458 6.35417C16.6458 4.22975 18.374 2.5 20.5 2.5C22.626 2.5 24.3542 4.22975 24.3542 6.35417C24.3542 8.47858 22.626 10.2083 20.5 10.2083ZM20.5 4.04167C19.225 4.04167 18.1875 5.07921 18.1875 6.35417C18.1875 7.62912 19.225 8.66667 20.5 8.66667C21.775 8.66667 22.8125 7.62912 22.8125 6.35417C22.8125 5.07921 21.775 4.04167 20.5 4.04167ZM25.125 25.625H28.2083V15.6042C28.2083 13.4797 26.4801 11.75 24.3542 11.75H16.6458C14.5199 11.75 12.7917 13.4797 12.7917 15.6042V25.625H15.875V34.875H17.4167V24.0833H14.3333V15.6042C14.3333 14.3292 15.3709 13.2917 16.6458 13.2917H24.3542C25.6291 13.2917 26.6667 14.3292 26.6667 15.6042V24.0833H23.5833V34.875H25.125V25.625ZM28.2083 27.7124V29.2556C34.0636 30.1421 37.4583 31.935 37.4583 33.3333C37.4583 35.265 31.0065 37.9583 20.5 37.9583C9.99354 37.9583 3.54167 35.265 3.54167 33.3333C3.54167 31.935 6.93642 30.1421 12.7917 29.2556V27.7124C6.80229 28.585 2 30.492 2 33.3333C2 37.3386 11.5321 39.5 20.5 39.5C29.4679 39.5 39 37.3386 39 33.3333C39 30.492 34.1977 28.5835 28.2083 27.7124Z"
                              fill="currentColor"
                            />
                          </svg>
                        )}
                        {stat.icon === "prism" && (
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 42 42"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-full h-full"
                            aria-hidden="true"
                          >
                            <path
                              d="M40.9183 13.4947L21 1.19141L1.08 13.4947L21 25.7981L40.9183 13.4947ZM16.5817 21.1097L28.6167 13.7214L33.0133 16.4197L21.0017 23.8397L16.5833 21.1114L16.5817 21.1097ZM17.9033 12.1231L22.9683 15.2314L14.9933 20.1264L9.945 17.0081L17.9033 12.1231ZM24.5617 14.2531L19.4967 11.1447L26.7417 6.69641L31.79 9.81474L24.56 14.2531H24.5617ZM34.6017 15.4364L30.21 12.7414L33.38 10.7947L37.7483 13.4931L34.6017 15.4364ZM25.155 5.71474L13.3033 12.9897L9.17333 10.4547L21 3.15141L25.1533 5.71641L25.155 5.71474ZM7.58333 11.4364L11.7083 13.9697L8.355 16.0281L4.25167 13.4931L7.58167 11.4364H7.58333ZM21 34.0414L41 21.6181V23.5764L21 35.9997L1 23.5764V21.6181L21 34.0414ZM41 16.6181V18.5764L21 30.9997L1 18.5764V16.6181L21 29.0414L41 16.6181ZM21 39.0414L41 26.6181V28.5764L21 40.9997L1 28.5764V26.6181L21 39.0414Z"
                              fill="currentColor"
                            />
                          </svg>
                        )}
                      </div>
                      <LineReveal
                        as="span"
                        lines={[stat.value]}
                        className="font-sans font-light text-3xl sm:text-4xl md:text-5xl leading-none tracking-[-0.035em] text-black"
                      />
                    </div>

                    {/* Bottom: Caption Label with Line Reveal */}
                    <LineReveal
                      as="p"
                      lines={[stat.label]}
                      className="text-xs sm:text-[13px] md:text-sm text-[#666666] leading-snug font-normal max-w-[28ch]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
