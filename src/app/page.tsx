import { HeroSection } from "@/components/home/hero-section";
import { WhyIipSection } from "@/components/home/why-iip-section";
import { CoursesPreviewSection } from "@/components/home/courses-preview-section";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <WhyIipSection />
      <CoursesPreviewSection />
    </div>
  );
}
