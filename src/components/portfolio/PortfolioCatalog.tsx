"use client";

import React, { useState, useMemo } from "react";
import type { PortfolioItem } from "@/lib/portfolio-data";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioRoster from "@/components/portfolio/PortfolioRoster";
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
    return initialItems.filter(
      (item) => item.category.toLowerCase() === activeFilter.toLowerCase()
    );
  }, [initialItems, activeFilter]);

  return (
    <>
      <PortfolioHero
        totalCount={initialItems.length}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        categories={categories}
      />
      <PortfolioRoster items={filteredItems} />
      <PortfolioManifesto />
      <PortfolioCta />
    </>
  );
}
