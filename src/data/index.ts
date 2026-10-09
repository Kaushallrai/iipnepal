// Central data hub for IIP Nepal
// Single source of truth for all content across the entire application

export * from "./site";
export * from "./home";
export * from "./about";
export * from "./courses";
export * from "./portfolio";
export * from "./contact";
export * from "./enroll";

import { siteConfig, navigationData, footerData } from "./site";
import { homeData } from "./home";
import { aboutData } from "./about";
import { coursesData } from "./courses";
import { portfolioData } from "./portfolio";
import { contactData } from "./contact";
import { enrollData } from "./enroll";

export const allSiteData = {
  site: siteConfig,
  navigation: navigationData,
  footer: footerData,
  home: homeData,
  about: aboutData,
  courses: coursesData,
  portfolio: portfolioData,
  contact: contactData,
  enroll: enrollData,
};

export default allSiteData;
