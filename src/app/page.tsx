import { HeroSection } from "@/components/home/hero-section";
import { WhyIipSection } from "@/components/home/why-iip-section";
import { CoursesPreviewSection } from "@/components/home/courses-preview-section";
import { PortfolioTeaserSection } from "@/components/home/portfolio-teaser-section";
import { AdmissionsProcessSection } from "@/components/home/admissions-process-section";
import { ClosingCtaSection } from "@/components/home/closing-cta-section";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <WhyIipSection />
      <CoursesPreviewSection />
      <PortfolioTeaserSection />
      <AdmissionsProcessSection />
      <ClosingCtaSection />
    </div>
  );
}
