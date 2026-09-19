import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import DestinationExplorer from "@/components/home/DestinationExplorer";
import PopularPackages from "@/components/home/PopularPackages";
import ExperienceSection from "@/components/home/ExperienceSection";
import DestinationGallery from "@/components/home/DestinationGallery";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "The Routes — Explore South India, Your Way",
  description:
    "Curated tour packages across Tamil Nadu, Kerala & Karnataka. Discover Munnar, Ooty, Coorg, Alleppey, and 20+ more destinations. Flexible durations from 1N/2D to 4N/5D.",
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero + Travel Search */}
      <HeroSection />

      {/* Spacer for TravelSearch overlap */}
      <div className="h-14 lg:h-16 bg-white" />

      {/* 2. Discover South India */}
      <DestinationExplorer />

      {/* 3. Popular Packages */}
      <PopularPackages />

      {/* 4. Travel Experiences */}
      <ExperienceSection />

      {/* 5. Destination Gallery */}
      <DestinationGallery />

      {/* 6. Why Choose Us */}
      <WhyChooseUs />

      {/* 7. Testimonials */}
      <TestimonialsSection />

      {/* 8. Final CTA */}
      <FinalCTA />
    </>
  );
}
