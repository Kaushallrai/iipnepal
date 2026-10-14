import type { Metadata } from "next";
import React, { Suspense } from "react";
import { getAllCourses } from "@/data/courses";
import EnrollmentPageContent from "@/components/enroll/EnrollmentPageContent";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Footer from "@/components/layout/Footer";
import { enrollData } from "@/data/enroll";

export const metadata: Metadata = {
  title: enrollData.meta.title,
  description: enrollData.meta.description,
  openGraph: {
    title: "Official Admissions & Course Enrollment | IIP Nepal",
    description:
      "Join the photography programs at IIP Nepal. Dedicated 1-on-1 faculty mentorship, practical shooting assignments, and recognized certificate courses at Jyoti Bhawan, Kanti Path, Kathmandu.",
    url: "https://iipnepal.com/enroll",
    type: "website",
  },
};

function EnrollmentFallback(): React.JSX.Element {
  return (
    <section className="relative w-full pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-20 sm:pb-28 px-4 sm:px-6 md:px-10 lg:px-16 max-w-[1440px] mx-auto">
      <div className="flex flex-col gap-12 sm:gap-16">
        {/* Editorial Top Grid Shell */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end">
          <div className="md:col-span-7 flex flex-col items-start gap-4 sm:gap-5">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#666666]">
              <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block" />
              <span>{enrollData.eyebrow}</span>
            </div>
            <h1 className="font-sans font-light text-3xl sm:text-4xl md:text-5xl lg:text-[58px] xl:text-[64px] leading-[1.08] tracking-[-0.035em] text-black">
              {enrollData.heading}
            </h1>
          </div>

          <div className="md:col-span-5 flex flex-col justify-end gap-3 font-mono text-xs text-[#888888]">
            <div className="flex items-center gap-2 text-black">
              <span className="w-2 h-2 rounded-full bg-[#ffd001]" />
              <span>{enrollData.deskPhone.value}</span>
            </div>
            <div className="text-[#666666]">{enrollData.studioLocation.value}</div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#e2e0d2]" />

        {/* Loading Form Skeleton Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-start">
          <div className="lg:col-span-6 aspect-[16/10] bg-[#f0eee4] animate-pulse rounded-none border border-[#e2e0d2]" />
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="h-10 bg-[#f0eee4] animate-pulse w-3/4" />
            <div className="h-12 bg-[#f0eee4] animate-pulse w-full" />
            <div className="h-12 bg-[#f0eee4] animate-pulse w-full" />
            <div className="h-32 bg-[#f0eee4] animate-pulse w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function EnrollPage(): React.JSX.Element {
  const courses = getAllCourses();

  return (
    <main
      className="min-h-screen bg-[#fffef7] text-black overflow-x-clip selection:bg-[#ffd001] selection:text-black"
      style={{
        fontFamily: "'Switzer', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <Suspense fallback={<EnrollmentFallback />}>
        <ScrollReveal variant="fade-up" distance={24} duration={0.8} className="w-full">
          <EnrollmentPageContent courses={courses} />
        </ScrollReveal>
      </Suspense>

      {/* Persistent Full-Bleed Site Footer */}
      <Footer />
    </main>
  );
}
