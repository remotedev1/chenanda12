import AboutHome from "@/components/aboutHome";
import BrandsSection from "@/components/brands";
import Hero from "@/components/hero";
import TeamCarousel from "@/components/teams";
import VideoHero from "@/components/video";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black/90">
      <Hero />
      <VideoHero />
      <TeamCarousel />
      <BrandsSection />
      <AboutHome />
    </div>
  );
}
