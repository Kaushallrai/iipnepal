"use client";

import React, { useState, useMemo } from "react";
import type { PortfolioItem } from "@/data/portfolio";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioList from "@/components/portfolio/PortfolioList";
import PortfolioManifesto from "@/components/portfolio/PortfolioManifesto";
import PortfolioCta from "@/components/portfolio/PortfolioCta";

export interface PortfolioCatalogProps {
  initialItems: PortfolioItem[];
  categories: string[];
}

export default function PortfolioCatalog({
  initialItems,
  categories,
}: PortfolioCatalogProps): React.JSX.Element {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") return initialItems;
    const f = activeFilter.toLowerCase();
    return initialItems.filter((item) => {
      const cat = item.category.toLowerCase();
      const tag = (item.tag || "").toLowerCase();
      const disc = (item.discipline || "").toLowerCase();
      if (f === "street") return cat.includes("street") || tag.includes("street") || disc.includes("street");
      if (f === "landscape") return cat.includes("landscape") || tag.includes("landscape") || disc.includes("landscape");
      if (f === "culture") return cat.includes("culture") || cat.includes("heritage") || tag.includes("culture");
      if (f === "portraits" || f === "portrait") return cat.includes("portrait") || tag.includes("portrait");
      if (f === "darkroom") return cat.includes("darkroom") || cat.includes("archive") || disc.includes("darkroom");
      return cat.includes(f);
    });
  }, [initialItems, activeFilter]);

  return (
    <>
      <PortfolioHero
        totalCount={filteredItems.length}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        categories={categories}
      />
      <PortfolioList items={filteredItems} />
      <PortfolioManifesto />
      <PortfolioCta />
    </>
  );
}
