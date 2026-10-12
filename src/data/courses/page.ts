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
  eyebrow: "01 // PROGRAMMES",
  heading: "Find your photography course.",
  description:
    "Five mentor-led tracks in Kathmandu, from smartphone craft to studio strobe lighting and commercial production.",
  filters: ["All", "Beginner", "Foundation", "Advanced"],
  cta: {
    eyebrow: "02 // ADMISSIONS",
    heading: "Ready to Master the Craft of Photography?",
    description:
      "Enroll online for one-on-one mentorship, or visit our studio facilities at Jyoti Bhawan, Kanti Path.",
    address: "Jyoti Bhawan, Kanti Path, Kathmandu",
    phone: "+9779802364760",
    phoneDisplay: "+977 9802364760",
    enrollText: "Enroll",
    enrollHref: "/enroll",
    contactText: "Contact Admissions",
    contactHref: "/contact",
  },
};
