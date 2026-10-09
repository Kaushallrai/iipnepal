export interface CourseOption {
  id: string;
  number: string;
  title: string;
  duration: string;
  slug: string;
}

export interface HomeContactData {
  eyebrow: string;
  heading: string;
  description: string;
  studioName: string;
  studioAddress: string;
  phoneLabel: string;
  phone: string;
  phoneDisplay: string;
  emailLabel: string;
  email: string;
  courses: CourseOption[];
}

export const homeContactData: HomeContactData = {
  eyebrow: "Get in touch",
  heading: "Speak to us.",
  description:
    "If you want to start a course, share a portfolio idea, or simply schedule a one-on-one darkroom visit in Kathmandu, we want to hear from you.",
  studioName: "Kathmandu Centre",
  studioAddress: "Jyoti Bhawan, Kanti Path, Kathmandu, Bagmati Province 44600",
  phoneLabel: "Direct Admissions",
  phone: "+9779802364760",
  phoneDisplay: "+977 9802364760",
  emailLabel: "Faculty Admissions",
  email: "info@iipnepal.com",
  courses: [
    {
      id: "mobile-photography-course",
      number: "01",
      title: "Mobile Photography Course",
      duration: "1 Month",
      slug: "mobile-photography-course",
    },
    {
      id: "beginners-course",
      number: "02",
      title: "Basic Photography Course",
      duration: "1 Month",
      slug: "beginners-course",
    },
    {
      id: "foundation-course",
      number: "03",
      title: "Foundation Photography Course",
      duration: "3 Months",
      slug: "foundation-course",
    },
    {
      id: "pro-level-foundation-photography-course",
      number: "04",
      title: "Pro-Level Foundation Photography Course",
      duration: "3 Months",
      slug: "pro-level-foundation-photography-course",
    },
    {
      id: "pro-level-advanced-photography-course",
      number: "05",
      title: "Pro-Level Advanced Photography Course",
      duration: "6 Months",
      slug: "pro-level-advanced-photography-course",
    },
  ],
};
