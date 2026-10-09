export interface AboutCtaData {
  eyebrow: string;
  heading: string;
  subtext: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  addressShort: string;
}

export const aboutCtaData: AboutCtaData = {
  eyebrow: "Kathmandu Admissions",
  heading: "Start your creative journey in Kathmandu.",
  subtext:
    "Admissions are open for upcoming terms at Jyoti Bhawan, Kanti Path. Meet with our counselors to review your portfolio or select a foundation module.",
  primaryCtaText: "Submit Admissions Enquiry",
  primaryCtaHref: "/contact",
  secondaryCtaText: "View All Courses",
  secondaryCtaHref: "/courses",
  phone: "+9779802364760",
  phoneDisplay: "+977 9802364760",
  email: "info@iipnepal.com",
  addressShort: "Jyoti Bhawan, Kanti Path, Kathmandu",
};
