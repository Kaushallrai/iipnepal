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
  return masterCoursesList.filter((course) => course.slug !== currentSlug).slice(0, count);
}

export function getFeaturedCourses(): CourseItem[] {
  return masterCoursesList.filter((course) => course.featured);
}

export const coursesData = {
  page: coursesPageData,
  items: masterCoursesList,
};
