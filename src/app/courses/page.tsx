import type { Metadata } from "next";
import React from "react";
import { getAllCourses } from "@/data/courses";
import CoursesCatalog from "@/components/courses/CoursesCatalog";
import CoursesCta from "@/components/courses/CoursesCta";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Photography Courses in Nepal | IIP Nepal — Indian Institute of Photography",
  description:
    "Explore professional photography courses in Kathmandu, Nepal. Mentor-led programs from Mobile Photography to Pro-Level Commercial productions at IIP Nepal.",
  openGraph: {
    title: "Photography Courses & Academic Programs | IIP Nepal",
    description:
      "Accredited photography education in Kathmandu. 1-on-1 mentor critiques, structured assignments, and professional certification.",
    url: "https://iipnepal.com/courses",
    type: "website",
  },
};

export default function CoursesPage(): React.JSX.Element {
  const courses = getAllCourses();

  return (
    <main
      className="min-h-screen bg-[#fffef7] text-black overflow-x-clip selection:bg-[#ffd001] selection:text-black"
      style={{
        fontFamily: "'Switzer', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* 1. COURSES HERO & COMPACT ROSTER */}
      <CoursesCatalog initialCourses={courses} />

      {/* 2. FULL-SPACE ADMISSIONS CTA */}
      <ScrollReveal variant="fade-up" distance={24} duration={0.8} className="w-full">
        <CoursesCta />
      </ScrollReveal>

      {/* 3. SITE FOOTER */}
      <Footer />
    </main>
  );
}
