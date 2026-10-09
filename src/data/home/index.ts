export * from "./hero";
export * from "./what-we-do";
export * from "./courses";
export * from "./how-it-works";
export * from "./portfolio";
export * from "./testimonials";
export * from "./brands";
export * from "./news";
export * from "./contact";

import { heroData } from "./hero";
import { whatWeDoData } from "./what-we-do";
import { homeCoursesData } from "./courses";
import { howItWorksData } from "./how-it-works";
import { homePortfolioData } from "./portfolio";
import { testimonialsData } from "./testimonials";
import { brandsData } from "./brands";
import { newsData } from "./news";
import { homeContactData } from "./contact";

export const homeData = {
  hero: heroData,
  whatWeDo: whatWeDoData,
  courses: homeCoursesData,
  howItWorks: howItWorksData,
  portfolio: homePortfolioData,
  testimonials: testimonialsData,
  brands: brandsData,
  news: newsData,
  contact: homeContactData,
};
