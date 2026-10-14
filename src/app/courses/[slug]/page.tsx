import type { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";
import { getAllCourses, getCourseBySlug, getRelatedCourses } from "@/data/courses";
import CourseDetailHero from "@/components/courses/detail/CourseDetailHero";
import CourseOutcomesSection from "@/components/courses/detail/CourseOutcomesSection";
import CourseCurriculumSection from "@/components/courses/detail/CourseCurriculumSection";
import CourseTuitionSection from "@/components/courses/detail/CourseTuitionSection";
import CourseStudentWorkSection from "@/components/courses/detail/CourseStudentWorkSection";
import CourseFaqSection from "@/components/courses/detail/CourseFaqSection";
import CourseRelatedSection from "@/components/courses/detail/CourseRelatedSection";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Footer from "@/components/layout/Footer";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const courses = getAllCourses();
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return {
      title: "Course Not Found | IIP Nepal",
      description: "The requested photography course syllabus could not be found.",
    };
  }

  return {
    title: `${course.title} | IIP Nepal - Indian Institute of Photography`,
    description: `${course.description} Duration: ${course.duration}. Mentored by working photographers in Kathmandu at IIP Nepal.`,
    openGraph: {
      title: `${course.title} | IIP Nepal`,
      description: course.description,
      url: `https://iipnepal.com/courses/${course.slug}`,
      images: [
        {
          url: course.coverImage,
          width: 1200,
          height: 630,
          alt: course.title,
        },
      ],
      type: "website",
    },
  };
}

export default async function CourseDetailPage({ params }: PageProps): Promise<React.JSX.Element> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const relatedCourses = getRelatedCourses(course.slug, 2);

  return (
    <main
      className="min-h-screen bg-[#fffef7] text-black overflow-x-clip selection:bg-[#ffd001] selection:text-black"
      style={{
        fontFamily: "'Switzer', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* 1. HERO — Side-by-side title, key specs, tuition & enrollment CTA with photographic frame */}
      <CourseDetailHero course={course} />

      {/* 2. PRACTICAL COMPETENCIES — Skills breakdown, institutional advantage & certification */}
      <ScrollReveal variant="fade-up" distance={24} duration={0.8} className="w-full">
        <CourseOutcomesSection course={course} />
      </ScrollReveal>

      {/* 3. SYLLABUS ARCHITECTURE — Open 3-phase progressive roadmap (no accordions) */}
      <ScrollReveal variant="fade-up" distance={24} duration={0.8} className="w-full">
        <CourseCurriculumSection course={course} />
      </ScrollReveal>

      {/* 4. TUITION & SETTLEMENT — Navy Ink featured pricing card, payment methods & guarantee */}
      <ScrollReveal variant="fade-up" distance={24} duration={0.8} className="w-full">
        <CourseTuitionSection course={course} />
      </ScrollReveal>

      {/* 5. STUDENT FIELDWORK — Selected student work gallery */}
      <ScrollReveal variant="fade-up" distance={24} duration={0.8} className="w-full">
        <CourseStudentWorkSection />
      </ScrollReveal>

      {/* 6. COMMON INQUIRIES — Focused FAQ accordion */}
      <ScrollReveal variant="fade-up" distance={24} duration={0.8} className="w-full">
        <CourseFaqSection course={course} />
      </ScrollReveal>

      {/* 7. PROGRESSION PATHWAYS — Follow-on tracks */}
      <ScrollReveal variant="fade-up" distance={24} duration={0.8} className="w-full">
        <CourseRelatedSection
          relatedCourses={relatedCourses}
          currentCourseSlug={course.slug}
          currentCourseTitle={course.title}
        />
      </ScrollReveal>

      {/* ARCHITECTURAL FOOTER */}
      <Footer />
    </main>
  );
}
