"use client";

import React, { useState, useMemo } from "react";
import type { CourseItem } from "@/lib/courses-data";
import CoursesHero from "@/components/courses/CoursesHero";
import CoursesList from "@/components/courses/CoursesList";

export interface CoursesCatalogProps {
  initialCourses: CourseItem[];
}

const FILTERS = ["All", "Beginner", "Foundation", "Advanced"];

export default function CoursesCatalog({ initialCourses }: CoursesCatalogProps): React.JSX.Element {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredCourses = useMemo(() => {
    if (activeFilter === "All") return initialCourses;
    return initialCourses.filter((course) => {
      const levelLower = course.level.toLowerCase();
      const filterLower = activeFilter.toLowerCase();
      return levelLower.includes(filterLower);
    });
  }, [initialCourses, activeFilter]);

  return (
    <>
      <CoursesHero
        totalCoursesCount={initialCourses.length}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        filters={FILTERS}
      />
      <CoursesList courses={filteredCourses} />
    </>
  );
}
