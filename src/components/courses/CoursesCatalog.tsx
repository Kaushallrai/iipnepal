"use client";

import React, { useState, useMemo } from "react";
import type { CourseItem } from "@/data/courses";
import CoursesHero from "@/components/courses/CoursesHero";
import CoursesList from "@/components/courses/CoursesList";
import { coursesPageData } from "@/data/courses/page";

export interface CoursesCatalogProps {
  initialCourses: CourseItem[];
}

export default function CoursesCatalog({ initialCourses }: CoursesCatalogProps): React.JSX.Element {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeFormat, setActiveFormat] = useState("All");

  const filteredCourses = useMemo(() => {
    return initialCourses.filter((course) => {
      // Level filter match
      let matchesLevel = true;
      if (activeFilter !== "All") {
        matchesLevel = course.level.toLowerCase().includes(activeFilter.toLowerCase());
      }

      // Delivery Format filter match
      let matchesFormat = true;
      if (activeFormat === "Studio") {
        matchesFormat = course.deliveryMode.toLowerCase().includes("studio");
      } else if (activeFormat === "Online") {
        matchesFormat = course.deliveryMode.toLowerCase().includes("online");
      }

      return matchesLevel && matchesFormat;
    });
  }, [initialCourses, activeFilter, activeFormat]);

  return (
    <>
      <CoursesHero
        totalCoursesCount={filteredCourses.length}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        filters={coursesPageData.filters}
        activeFormat={activeFormat}
        onFormatChange={setActiveFormat}
      />
      <CoursesList courses={filteredCourses} />
    </>
  );
}
