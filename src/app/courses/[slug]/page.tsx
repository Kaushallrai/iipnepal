import type { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";
import { getAllCourses, getCourseBySlug, getRelatedCourses } from "@/data/courses";
import CourseDetailHero from "@/components/courses/detail/CourseDetailHero";
import CourseCurriculumSection from "@/components/courses/detail/CourseCurriculumSection";
import CourseEssentialsSection from "@/components/courses/detail/CourseEssentialsSection";
import CourseTuitionFaqSection from "@/components/courses/detail/CourseTuitionFaqSection";
import CourseRelatedSection from "@/components/courses/detail/CourseRelatedSection";
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
    title: `${course.title} | IIP Nepal — Indian Institute of Photography`,
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
      {/* 1. EDITORIAL HERO & PROGRAM SPECIFICATIONS */}
      <CourseDetailHero course={course} />

      {/* 2. STRUCTURED SYLLABUS & MODULES */}
      <CourseCurriculumSection course={course} />

      {/* 3. LEARNING OUTCOMES & EQUIPMENT PREREQUISITES */}
      <CourseEssentialsSection course={course} />

      {/* 4. FINANCIAL SUMMARY & FOCUSED COURSE FAQS */}
      <CourseTuitionFaqSection course={course} />

      {/* 5. COMPACT ALTERNATIVE TRACKS */}
      <CourseRelatedSection relatedCourses={relatedCourses} />

      {/* 6. ARCHITECTURAL FOOTER */}
      <Footer />
    </main>
  );
}
