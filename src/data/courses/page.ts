export interface CoursesPageData {
  eyebrow: string;
  heading: string;
  description: string;
  filters: string[];
  cta: {
    eyebrow: string;
    heading: string;
    description: string;
    address: string;
    phone: string;
    phoneDisplay: string;
    enrollText: string;
    enrollHref: string;
    contactText: string;
    contactHref: string;
  };
}

export const coursesPageData: CoursesPageData = {
  eyebrow: "IIP Nepal // Curricula",
  heading: "Courses & Programs.",
  description:
    "Five mentor-led photography programs in Kathmandu. Structured modules, practical shooting briefs, and one-on-one critique from working photographers.",
  filters: ["All", "Beginner", "Foundation", "Advanced"],
  cta: {
    eyebrow: "Admissions 2026 // Kathmandu Studio",
    heading: "Ready to Master the Craft of Photography?",
    description:
      "Enroll online to receive personal portal credentials and begin one-on-one mentorship, or visit our darkroom facilities at Jyoti Bhawan, Kanti Path.",
    address: "Jyoti Bhawan, Kanti Path, Kathmandu",
    phone: "+9779802364760",
    phoneDisplay: "+977 9802364760",
    enrollText: "Enroll in Course",
    enrollHref: "/enroll",
    contactText: "Contact Admissions",
    contactHref: "/contact",
  },
};
