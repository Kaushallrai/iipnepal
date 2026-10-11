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

  const filteredCourses = useMemo(() => {
    return initialCourses.filter((course) => {
      if (activeFilter === "All") return true;
      return course.level.toLowerCase().includes(activeFilter.toLowerCase());
    });
  }, [initialCourses, activeFilter]);

  return (
    <>
      <CoursesHero
        totalCoursesCount={filteredCourses.length}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        filters={coursesPageData.filters}
      />
      <CoursesList courses={filteredCourses} />
    </>
  );
}
