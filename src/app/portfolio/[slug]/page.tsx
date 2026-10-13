import type { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";
import {
  getAllPortfolioItems,
  getPortfolioItemBySlug,
  getNextPortfolioItem,
  getPreviousPortfolioItem,
  getRelatedPortfolioItems,
} from "@/data/portfolio";
import PortfolioDetailBento from "@/components/portfolio/detail/PortfolioDetailBento";
import PortfolioCourseBanner from "@/components/portfolio/detail/PortfolioCourseBanner";
import PortfolioDetailNav from "@/components/portfolio/detail/PortfolioDetailNav";
import Footer from "@/components/layout/Footer";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const items = getAllPortfolioItems();
  return items.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getPortfolioItemBySlug(slug);

  if (!item) {
    return {
      title: "Exhibition Not Found | IIP Nepal",
      description: "The requested photography project could not be found in our archive.",
    };
  }

  return {
    title: `${item.title} // ${item.photographer} | IIP Nepal Archive`,
    description: `${item.summary} Photographed in ${item.location} by ${item.photographer}. IIP Nepal (Indian Institute of Photography).`,
    openGraph: {
      title: `${item.title} // ${item.photographer} | IIP Nepal`,
      description: item.summary,
      url: `https://iipnepal.com/portfolio/${item.slug}`,
      images: [
        {
          url: item.coverImage,
          width: 1200,
          height: 800,
          alt: `${item.title} by ${item.photographer}`,
        },
      ],
      type: "article",
    },
  };
}

export default async function PortfolioDetailPage({ params }: PageProps): Promise<React.JSX.Element> {
  const { slug } = await params;
  const item = getPortfolioItemBySlug(slug);

  if (!item) {
    notFound();
  }

  const nextItem = getNextPortfolioItem(item.slug);
  const prevItem = getPreviousPortfolioItem(item.slug);
  const relatedItems = getRelatedPortfolioItems(item.slug, 2);

  return (
    <main
      className="min-h-screen bg-[#fffef7] text-black overflow-x-clip selection:bg-[#ffd001] selection:text-black"
      style={{
        fontFamily: "'Switzer', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* 1. EDITORIAL BENTO GRID — 4 Multi-Picture Plates + Camera Specs, Student Statement, Mentor Critique & Fieldwork */}
      <PortfolioDetailBento item={item} />

      {/* 4. ACADEMIC PROVENANCE & COURSE BRIDGE */}
      <PortfolioCourseBanner item={item} />

      {/* 5. ARCHIVAL TRAVERSAL & MORE EXHIBITIONS */}
      <PortfolioDetailNav
        currentItem={item}
        nextItem={nextItem}
        prevItem={prevItem}
        relatedItems={relatedItems}
      />

      {/* 6. ARCHITECTURAL FOOTER */}
      <Footer />
    </main>
  );
}
