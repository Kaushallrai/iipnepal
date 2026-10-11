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
  eyebrow: "IIP Nepal // Course Directory",
  heading: "Find your photography course.",
  description:
    "Compare five mentor-led tracks in Kathmandu — from beginner smartphone photography to comprehensive studio lighting and commercial production.",
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
