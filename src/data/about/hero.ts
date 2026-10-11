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
    "Established in 2011 in partnership with White Hat Events and directed by alumnus Additya Shrestha, IIP Nepal serves as the regional centre of the Indian Institute of Photography. Backed by 14+ years of institutional heritage, we deliver disciplined camera craft, analog darkroom chemistry, and studio lighting mentorship at Jyoti Bhawan, Kanti Path.",
  parentUrl: "https://www.indianinstituteofphotography.com",
  ctaText: "Admissions Consultation",
  ctaHref: "/contact",
};
