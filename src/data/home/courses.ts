export interface HomeCourseItem {
  id: string;
  number: string;
  title: string;
  duration: string;
  level: string;
  totalFee: string;
  payableFee: string;
  discount?: string;
  description: string;
  coverImage: string;
  slug: string;
}

export interface HomeCoursesData {
  eyebrow: string;
  heading: string;
  subheading: string;
  viewAllText: string;
  viewAllHref: string;
  courses: HomeCourseItem[];
}

export const homeCoursesData: HomeCoursesData = {
  eyebrow: "Curriculum & Programs",
  heading: "Crafted for Serious Photographers.",
  subheading:
    "Five intensive, mentor-led programs taking you from raw camera fundamentals to exhibition-grade commercial productions.",
  viewAllText: "VIEW ALL COURSES",
  viewAllHref: "/courses",
  courses: [
    {
      id: "course-1",
      number: "01",
      title: "Mobile Photography Course",
      duration: "1 Month",
      level: "Beginner",
      totalFee: "Rs.5,200",
      payableFee: "Rs.4,160",
      discount: "-20%",
      description:
        "Master professional camera controls, composition rules, natural lighting, and mobile post-processing using your smartphone.",
      coverImage: "/images/course-mobile.webp",
      slug: "mobile-photography-course",
    },
    {
      id: "course-2",
      number: "02",
      title: "Basic Photography Course",
      duration: "1 Month",
      level: "Beginner",
      totalFee: "Rs.12,000",
      payableFee: "Rs.9,600",
      discount: "-20%",
      description:
        "Start your photography journey with camera fundamentals, exposure triangle (aperture, shutter, ISO), composition, and practical field assignments.",
      coverImage: "/images/course-basic.webp",
      slug: "beginners-course",
    },
    {
      id: "course-3",
      number: "03",
      title: "Foundation Photography Course",
      duration: "3 Months",
      level: "Foundation",
      totalFee: "Rs.19,500",
      payableFee: "Rs.15,600",
      discount: "-20%",
      description:
        "A comprehensive foundation course covering every vital topic in photography with one-on-one mentor critique and systematic skill development.",
      coverImage: "/images/course-foundation.webp",
      slug: "foundation-course",
    },
    {
      id: "course-4",
      number: "04",
      title: "Pro-Level Foundation Photography Course",
      duration: "3 Months",
      level: "Pro Foundation",
      totalFee: "Rs.26,800",
      payableFee: "Rs.26,800",
      description:
        "An intensive mentor-led foundation course that takes you from beginner to professional level with live critique and real commercial briefs.",
      coverImage: "/images/course-pro-foundation.webp",
      slug: "pro-level-foundation-photography-course",
    },
    {
      id: "course-5",
      number: "05",
      title: "Pro-Level Advanced Photography Course",
      duration: "6 Months",
      level: "Advanced",
      totalFee: "Rs.56,000",
      payableFee: "Rs.56,000",
      description:
        "An advanced mentor-led masterclass for photographers looking to master studio lighting, commercial productions, and launch an industry career.",
      coverImage: "/images/course-pro.webp",
      slug: "pro-level-advanced-photography-course",
    },
  ],
};
