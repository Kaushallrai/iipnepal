export * from "./items";
export * from "./page";

import { masterCoursesList, CourseItem } from "./items";
import { coursesPageData } from "./page";

export const ORIGINAL_COURSES = masterCoursesList;

export function getAllCourses(): CourseItem[] {
  return masterCoursesList;
}

export function getCourseBySlug(slug: string): CourseItem | undefined {
  return masterCoursesList.find((course) => course.slug === slug);
}

export function getRelatedCourses(currentSlug: string, count = 2): CourseItem[] {
  // Define progressive learning pathway mappings
  const pathwayMap: Record<string, string[]> = {
    "mobile-photography-course": ["beginners-course", "foundation-course"],
    "beginners-course": ["foundation-course", "pro-level-foundation-photography-course"],
    "foundation-course": ["pro-level-foundation-photography-course", "pro-level-advanced-photography-course"],
    "pro-level-foundation-photography-course": ["pro-level-advanced-photography-course", "foundation-course"],
    "pro-level-advanced-photography-course": ["pro-level-foundation-photography-course", "foundation-course"],
  };

  const targetSlugs = pathwayMap[currentSlug];
  if (targetSlugs) {
    const matches = targetSlugs
      .map((slug) => masterCoursesList.find((c) => c.slug === slug))
      .filter((c): c is CourseItem => Boolean(c));
    if (matches.length > 0) return matches.slice(0, count);
  }

  return masterCoursesList.filter((course) => course.slug !== currentSlug).slice(0, count);
}

export function getFeaturedCourses(): CourseItem[] {
  return masterCoursesList.filter((course) => course.featured);
}

export const coursesData = {
  page: coursesPageData,
  items: masterCoursesList,
};
