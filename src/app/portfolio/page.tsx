import type { Metadata } from "next";
import React from "react";
import { getAllPortfolioItems, getPortfolioCategories } from "@/lib/portfolio-data";
import PortfolioCatalog from "@/components/portfolio/PortfolioCatalog";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Student Portfolio & Fieldwork Archive | IIP Nepal // Indian Institute of Photography",
  description:
    "Explore exhibition-grade photography projects by students and alumni of IIP Nepal. From 35mm street documentary in Kathmandu to high-altitude Himalayan landscapes and wet darkroom silver chemistry.",
  openGraph: {
    title: "Photography Portfolio & Fieldwork Archive | IIP Nepal",
    description:
      "Curated student and alumni photography exhibitions born out of mentor-led residencies in Kathmandu, Nepal.",
    url: "https://iipnepal.com/portfolio",
    type: "website",
  },
};

export default function PortfolioPage(): React.JSX.Element {
  const items = getAllPortfolioItems();
  const categories = getPortfolioCategories();

  return (
    <main
      className="min-h-screen bg-[#fffef7] text-black overflow-x-clip selection:bg-[#ffd001] selection:text-black"
      style={{
        fontFamily: "'Switzer', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* 1. PORTFOLIO CATALOG (HERO + ROSTER + MANIFESTO + CTA) */}
      <PortfolioCatalog initialItems={items} categories={categories} />

      {/* 2. ARCHITECTURAL FOOTER */}
      <Footer />
    </main>
  );
}
