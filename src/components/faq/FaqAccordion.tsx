"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowUpRight, Search } from "lucide-react";
import type { FaqCategory } from "@/data/faq";
import { siteConfig } from "@/data/site";

export interface FaqAccordionProps {
  categories: FaqCategory[];
}

export default function FaqAccordion({ categories }: FaqAccordionProps): React.JSX.Element {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  // Track open state by unique key: `category-index`
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "courses-0": true,
    "format-0": true,
  });

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const filteredCategories = categories
    .map((cat) => {
      if (activeCategory !== "all" && cat.id !== activeCategory) {
        return null;
      }
      if (!searchQuery.trim()) {
        return cat;
      }
      const filteredQuestions = cat.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (filteredQuestions.length === 0) return null;
      return { ...cat, questions: filteredQuestions };
    })
    .filter((cat): cat is FaqCategory => cat !== null);

  return (
    <div className="flex flex-col gap-10 sm:gap-14">
      {/* Category Filter Pills & Search Input */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 pb-6 border-b border-[#e2e0d2]">
        
        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={`font-mono text-xs uppercase tracking-[0.14em] py-2 px-4 rounded-full transition-colors whitespace-nowrap cursor-pointer ${
              activeCategory === "all"
                ? "bg-black text-[#fffef7] font-semibold"
                : "bg-transparent text-[#666666] hover:text-black border border-[#e2e0d2]"
            }`}
          >
            All Questions
          </button>

          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`font-mono text-xs uppercase tracking-[0.14em] py-2 px-4 rounded-full transition-colors whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-black text-[#fffef7] font-semibold"
                    : "bg-transparent text-[#666666] hover:text-black border border-[#e2e0d2]"
                }`}
              >
                {cat.name.split(" &")[0]}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72 shrink-0">
          <Search className="w-4 h-4 text-[#888888] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions..."
            aria-label="Search frequently asked questions"
            className="w-full bg-[#faf8ee] border border-[#e2e0d2] text-black text-xs font-mono py-2 pl-9 pr-3 outline-none focus:border-black rounded-none transition-colors placeholder:text-[#aaaaaa]"
          />
        </div>
      </div>

      {/* Accordion Categories List */}
      {filteredCategories.length === 0 ? (
        <div className="py-16 text-center border border-[#e2e0d2] bg-[#faf8ee] p-8">
          <p className="font-sans font-light text-xl text-black mb-2">No matching questions found.</p>
          <p className="font-mono text-xs text-[#777777]">
            Try a different search term or{" "}
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="underline text-black hover:text-[#ca8a04] cursor-pointer"
            >
              reset filters
            </button>
            .
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-12 sm:gap-16">
          {filteredCategories.map((category) => (
            <section
              key={category.id}
              id={category.id}
              className="flex flex-col gap-6"
            >
              {/* Category Group Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3.5 border-b-2 border-black">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block" />
                  <h2 className="font-sans font-light text-2xl sm:text-3xl text-black tracking-[-0.03em]">
                    {category.name}
                  </h2>
                </div>
                <span className="font-mono text-xs text-[#777777] uppercase tracking-wider">
                  {category.questions.length} Questions
                </span>
              </div>

              {/* Accordion Rows */}
              <div className="flex flex-col divide-y divide-[#e2e0d2] border-b border-[#e2e0d2]">
                {category.questions.map((item, idx) => {
                  const key = `${category.id}-${idx}`;
                  const isOpen = !!openItems[key];
                  const qId = `faq-q-${category.id}-${idx}`;
                  const aId = `faq-a-${category.id}-${idx}`;

                  return (
                    <div key={qId} className="py-5 sm:py-6">
                      <button
                        type="button"
                        id={qId}
                        onClick={() => toggleItem(key)}
                        aria-expanded={isOpen}
                        aria-controls={aId}
                        className="w-full flex items-start justify-between gap-6 text-left cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd001]"
                      >
                        <span className="font-sans font-normal text-base sm:text-lg lg:text-xl text-black group-hover:text-black/75 transition-colors leading-snug">
                          {item.question}
                        </span>
                        
                        <span className="w-7 h-7 rounded-full border border-black/20 flex items-center justify-center shrink-0 mt-0.5 text-black group-hover:border-black transition-colors">
                          {isOpen ? (
                            <Minus className="w-3.5 h-3.5 stroke-[1.75]" />
                          ) : (
                            <Plus className="w-3.5 h-3.5 stroke-[1.75]" />
                          )}
                        </span>
                      </button>

                      <div
                        id={aId}
                        role="region"
                        aria-labelledby={qId}
                        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="overflow-hidden min-h-0">
                          <div className="pt-3.5 pr-8 sm:pr-14">
                            <p className="font-sans font-light text-sm sm:text-base text-[#444444] leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      )}

      {/* Bottom Admissions Help Box */}
      <div className="p-8 sm:p-10 bg-[#faf8ee] border border-[#e2e0d2] flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex flex-col gap-2 max-w-xl">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#888888]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ffd001]" />
            <span>Still have questions about admissions or equipment?</span>
          </div>
          <h3 className="font-sans font-light text-2xl text-black tracking-[-0.03em]">
            Speak directly with an IIP Nepal faculty advisor.
          </h3>
          <p className="font-sans text-xs sm:text-sm text-[#555555]">
            Our admissions desk is open Sunday through Friday from 10:00 AM to 5:00 PM at Jyoti Bhawan, Kanti Path.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 py-3 px-6 rounded-full bg-black text-[#fffef7] hover:bg-[#ffd001] hover:text-black font-mono text-xs uppercase tracking-wider font-semibold transition-colors leading-none"
          >
            <span>Contact Desk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="inline-flex items-center gap-1.5 py-3 px-5 rounded-full border border-black/20 text-black hover:border-black font-mono text-xs uppercase tracking-wider transition-colors leading-none"
          >
            <span>{siteConfig.contact.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
