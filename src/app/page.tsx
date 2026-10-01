import { HeroSection } from "@/components/home/hero-section";
import { WhyIipSection } from "@/components/home/why-iip-section";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <WhyIipSection />
    </div>
  );
}
