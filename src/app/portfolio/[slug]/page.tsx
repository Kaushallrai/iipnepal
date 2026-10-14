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
import PortfolioProjectDetails from "@/components/portfolio/detail/PortfolioProjectDetails";
import PortfolioCourseBanner from "@/components/portfolio/detail/PortfolioCourseBanner";
import PortfolioDetailNav from "@/components/portfolio/detail/PortfolioDetailNav";
import ScrollReveal from "@/components/animations/ScrollReveal";
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
      {/* 1. EXHIBITION PHOTO BENTO GRID (8 Plates, Pure Images, Minimal Short Captions) */}
      <PortfolioDetailBento item={item} />

      {/* 2. DEDICATED PROJECT DETAILS & CURATORIAL RECORD (Under the Bento Grid) */}
      <ScrollReveal variant="fade-up" distance={24} duration={0.8} className="w-full">
        <PortfolioProjectDetails item={item} />
      </ScrollReveal>

      {/* 3. ACADEMIC PROVENANCE & COURSE BRIDGE */}
      <ScrollReveal variant="fade-up" distance={24} duration={0.8} className="w-full">
        <PortfolioCourseBanner item={item} />
      </ScrollReveal>

      {/* 5. ARCHIVAL TRAVERSAL & MORE EXHIBITIONS */}
      <ScrollReveal variant="fade-up" distance={24} duration={0.8} className="w-full">
        <PortfolioDetailNav
          currentItem={item}
          nextItem={nextItem}
          prevItem={prevItem}
          relatedItems={relatedItems}
        />
      </ScrollReveal>

      {/* 6. ARCHITECTURAL FOOTER */}
      <Footer />
    </main>
  );
}
