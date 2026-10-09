export * from "./items";
export * from "./page";

import { masterPortfolioList, PortfolioItem } from "./items";
import { portfolioPageData } from "./page";

export const PORTFOLIO_ITEMS = masterPortfolioList;
export const ORIGINAL_PORTFOLIO_ITEMS = masterPortfolioList;

export function getAllPortfolioItems(): PortfolioItem[] {
  return masterPortfolioList;
}

export function getPortfolioItemBySlug(slug: string): PortfolioItem | undefined {
  return masterPortfolioList.find((item) => item.slug === slug);
}

export function getRelatedPortfolioItems(currentSlug: string, count = 2): PortfolioItem[] {
  const currentItem = getPortfolioItemBySlug(currentSlug);
  if (!currentItem) return masterPortfolioList.slice(0, count);

  const sameCategory = masterPortfolioList.filter(
    (item) => item.slug !== currentSlug && item.category === currentItem.category
  );
  const others = masterPortfolioList.filter(
    (item) => item.slug !== currentSlug && item.category !== currentItem.category
  );

  return [...sameCategory, ...others].slice(0, count);
}

export function getNextPortfolioItem(currentSlug: string): PortfolioItem {
  const currentIndex = masterPortfolioList.findIndex((item) => item.slug === currentSlug);
  if (currentIndex === -1 || currentIndex === masterPortfolioList.length - 1) {
    return masterPortfolioList[0];
  }
  return masterPortfolioList[currentIndex + 1];
}

export function getPreviousPortfolioItem(currentSlug: string): PortfolioItem {
  const currentIndex = masterPortfolioList.findIndex((item) => item.slug === currentSlug);
  if (currentIndex <= 0) {
    return masterPortfolioList[masterPortfolioList.length - 1];
  }
  return masterPortfolioList[currentIndex - 1];
}

export function getPortfolioCategories(): string[] {
  const categories = Array.from(new Set(masterPortfolioList.map((item) => item.category)));
  return ["All", ...categories];
}

export function getFeaturedPortfolioItems(): PortfolioItem[] {
  return masterPortfolioList.filter((item) => item.featured);
}

export const portfolioData = {
  page: portfolioPageData,
  items: masterPortfolioList,
};
