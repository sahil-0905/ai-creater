import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import MouseAnimation from "@/components/MouseAnimation";
import PlatformShowcaseTab from "@/components/PlatformShowcaseTab";
import SocialProofStats from "@/components/SocialProofStats";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-green-900/20 animate-pulse" />
      <MouseAnimation />
      <HeroSection />
      <FeatureSection />
      <PlatformShowcaseTab />
      <SocialProofStats />
      <Testimonial />
    </div>
  );
}
