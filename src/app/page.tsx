import { HeroSection } from "@/components/home/hero-section";
import { WhyIipSection } from "@/components/home/why-iip-section";
import { CoursesPreviewSection } from "@/components/home/courses-preview-section";
import { PortfolioTeaserSection } from "@/components/home/portfolio-teaser-section";
import { AdmissionsProcessSection } from "@/components/home/admissions-process-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { BrandMarqueeSection } from "@/components/home/brand-marquee-section";
import { NewsSection } from "@/components/home/news-section";
import { ClosingCtaSection } from "@/components/home/closing-cta-section";
import { GetInTouchSection } from "@/components/home/get-in-touch-section";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <WhyIipSection />
      <CoursesPreviewSection />
      <PortfolioTeaserSection />
      <AdmissionsProcessSection />
      <TestimonialsSection />
      <BrandMarqueeSection />
      <NewsSection />
      <ClosingCtaSection />
      <GetInTouchSection />
    </div>
  );
}
