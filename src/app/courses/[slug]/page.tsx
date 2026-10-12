import type { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";
import { getAllCourses, getCourseBySlug, getRelatedCourses } from "@/data/courses";
import CourseDetailHero from "@/components/courses/detail/CourseDetailHero";
import CoursePriceBand from "@/components/courses/detail/CoursePriceBand";
import CourseOutcomesBento from "@/components/courses/detail/CourseOutcomesBento";
import CourseHowItWorksSection from "@/components/courses/detail/CourseHowItWorksSection";
import CourseCurriculumSection from "@/components/courses/detail/CourseCurriculumSection";
import CourseStudentWorkSection from "@/components/courses/detail/CourseStudentWorkSection";
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
      {/* 1. HERO (pt-24, split 7/5, level eyebrow, 4:5 cover photo, Enroll pill + Contact link) */}
      <CourseDetailHero course={course} />

      {/* 2. PRICE BAND (Navy Ink card, page's single dark field: 4 facts, price, struck old price, intake, Enroll pill) */}
      <CoursePriceBand course={course} />

      {/* 3. OUTCOMES (Asymmetric 3-cell bento: large Mint card, image cell, cream card) */}
      <CourseOutcomesBento course={course} />

      {/* 4. HOW IT WORKS (3 stacked steps + sample mentor-feedback image) */}
      <CourseHowItWorksSection />

      {/* 5. SYLLABUS (Phase tabs on D and T, accordion on M, shortened module titles) */}
      <CourseCurriculumSection course={course} />

      {/* 6. STUDENT WORK (Snap row of 4 photos linked to stories, student name captions) */}
      <CourseStudentWorkSection />

      {/* 7. DETAILS + FAQ (3 grouped clusters left + 4 course FAQs right) */}
      <CourseTuitionFaqSection course={course} />

      {/* 8. PROGRESSION (Previous & next course as 2 large cards with one pastel + closing Enroll pill) */}
      <CourseRelatedSection
        relatedCourses={relatedCourses}
        currentCourseSlug={course.slug}
        currentCourseTitle={course.title}
      />

      {/* ARCHITECTURAL FOOTER */}
      <Footer />
    </main>
  );
}
