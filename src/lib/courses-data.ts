export interface CourseItem {
  id: string;
  slug: string;
  title: string;
  tagline?: string;
  description: string;
  duration: string;
  level: string;
  courseType: string;
  coverImage: string;
  featured: boolean;
}

export const ORIGINAL_COURSES: CourseItem[] = [
  {
    id: "course-1",
    slug: "mobile-photography-course",
    title: "Online Mobile Photography Course",
    tagline: "1-Month intensive smartphone visual storytelling",
    description:
      "Master composition, mobile camera controls, street aesthetics, and digital editing techniques on your phone.",
    duration: "1 Month",
    level: "Beginner",
    courseType: "Online Workshop",
    coverImage: "/images/course-mobile.jpg",
    featured: true,
  },
  {
    id: "course-2",
    slug: "foundation-course",
    title: "3-Month Online Foundation Photography Course",
    tagline: "Comprehensive optical principles and visual grammar",
    description:
      "In-depth technical grounding across camera mechanics, manual triangle exposure, optics, lighting, and critique.",
    duration: "3 Months",
    level: "Foundation",
    courseType: "Online Foundation",
    coverImage: "/images/course-foundation.jpg",
    featured: true,
  },
  {
    id: "course-3",
    slug: "pro-level-advanced-photography-course",
    title: "Pro Level Advanced Photography Course (Mentor-led)",
    tagline: "6-Month professional diploma at Kathmandu Centre",
    description:
      "Intensive mentorship covering studio strobe lighting, darkroom discipline, portfolio curation, and juried exhibition.",
    duration: "6 Months",
    level: "Professional",
    courseType: "Mentor-Led Diploma",
    coverImage: "/images/course-pro.jpg",
    featured: true,
  },
  {
    id: "course-4",
    slug: "beginners-course",
    title: "1-Month Online Basic Photography Course",
    tagline: "Essential manual exposure foundations",
    description:
      "A fast-paced introduction to shutter speed, aperture, ISO, and framing for beginning photographers.",
    duration: "1 Month",
    level: "Beginner",
    courseType: "Online Basic",
    coverImage: "/images/course-foundation.jpg",
    featured: false,
  },
  {
    id: "course-5",
    slug: "pro-level-foundation-photography-course",
    title: "Pro Level Foundation Photography Course (Mentor-led)",
    tagline: "3-Month hands-on studio and field mentorship",
    description:
      "Direct weekly mentorship, studio lighting basics, and Kathmandu field assignments with practicing photographers.",
    duration: "3 Months",
    level: "Pro Foundation",
    courseType: "Mentor-Led Foundation",
    coverImage: "/images/course-pro.jpg",
    featured: false,
  },
];
