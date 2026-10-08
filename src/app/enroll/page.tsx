import type { Metadata } from "next";
import React, { Suspense } from "react";
import { getAllCourses } from "@/lib/courses-data";
import EnrollmentPageContent from "@/components/enroll/EnrollmentPageContent";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Enroll in Photography Courses | IIP Nepal — Indian Institute of Photography",
  description:
    "Enroll in accredited photography courses in Kathmandu, Nepal. 1-on-1 mentor critiques, structured assignments, and professional certification at IIP Nepal.",
  openGraph: {
    title: "Official Admissions & Course Enrollment | IIP Nepal",
    description:
      "Join the 2026 intake at IIP Nepal. Secure your dedicated faculty mentor, student portal access, and darkroom facilities at Jyoti Bhawan, Kanti Path.",
    url: "https://iipnepal.com/enroll",
    type: "website",
  },
};

function EnrollmentFallback(): React.JSX.Element {
  return (
    <div className="w-full min-h-[60vh] flex flex-col items-center justify-center py-32 px-6">
      <div className="w-8 h-8 rounded-full border-2 border-black border-t-transparent animate-spin mb-4" />
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#888888]">
        Loading Admissions Dossier...
      </span>
    </div>
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
        <EnrollmentPageContent courses={courses} />
      </Suspense>

      {/* Persistent Full-Bleed Site Footer */}
      <Footer />
    </main>
  );
}
