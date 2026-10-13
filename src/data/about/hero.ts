export interface AboutHeroData {
  eyebrow: string;
  heading: string;
  headingLines: string[];
  subheading: string;
  parentUrl: string;
  ctaText: string;
  ctaHref: string;
}

export const aboutHeroData: AboutHeroData = {
  eyebrow: "Our Story // Kathmandu Centre",
  heading: "Photography Education in Kathmandu.",
  headingLines: [
    "Photography Education",
    "in Kathmandu.",
  ],
  subheading:
    "Kathmandu's dedicated photography academy since 2011. Regional centre of the Indian Institute of Photography, mentoring students in camera optics, darkroom craft, and studio lighting at Jyoti Bhawan, Kanti Path.",
  parentUrl: "https://www.indianinstituteofphotography.com",
  ctaText: "Admissions Consultation",
  ctaHref: "/contact",
};
