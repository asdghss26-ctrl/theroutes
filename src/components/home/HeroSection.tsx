import Link from "next/link";
import Image from "next/image";
import TravelSearch from "./TravelSearch";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col" aria-label="Hero">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1570459287564-b786e6b1de71?auto=format&fit=crop&w=2400&q=80"
          alt="Western Ghats landscape — South India"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Navy gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/55 to-navy/75" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-24 pb-8 lg:pt-32 lg:pb-16">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-5 sm:mb-6 opacity-0 animate-fade-in animation-delay-100">
          <span className="h-px w-6 sm:w-8 bg-orange" />
          <span className="text-orange text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase">
            South India Travel
          </span>
          <span className="h-px w-6 sm:w-8 bg-orange" />
        </div>

        {/* Headline */}
        <h1 className="text-white font-bold tracking-tight leading-[1.05] mb-4 sm:mb-5 opacity-0 animate-fade-in-up animation-delay-200">
          <span className="block text-[2rem] xs:text-4xl sm:text-5xl lg:text-7xl">
            Explore South India,
          </span>
          <span className="block text-[2rem] xs:text-4xl sm:text-5xl lg:text-7xl">
            <span className="text-white">Your</span>{" "}
            <span className="text-orange">Way.</span>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-white/80 text-sm sm:text-base lg:text-xl max-w-xl sm:max-w-2xl leading-relaxed mb-7 sm:mb-8 opacity-0 animate-fade-in-up animation-delay-300 px-2">
          Curated journeys across Tamil Nadu, Kerala &amp; Karnataka — crafted around
          your travel style, your pace, your story.
        </p>

        {/* CTAs */}
        <div className="flex flex-col xs:flex-row items-center gap-3 mb-0 opacity-0 animate-fade-in-up animation-delay-400 w-full xs:w-auto">
          <Link
            href="/packages"
            className="inline-flex items-center justify-center gap-2 bg-orange text-white font-semibold px-6 sm:px-7 py-3.5 rounded-lg hover:bg-orange/90 transition-all duration-150 shadow-lg active:scale-[0.98] text-sm sm:text-base w-full xs:w-auto"
          >
            Explore Packages
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm text-white font-semibold px-6 sm:px-7 py-3.5 rounded-lg border border-white/30 hover:bg-white/25 transition-all duration-150 text-sm sm:text-base w-full xs:w-auto"
          >
            Plan My Trip
          </Link>
        </div>

        {/* Stats strip */}
        <div className="flex items-center justify-center gap-5 sm:gap-10 mt-10 sm:mt-12 opacity-0 animate-fade-in animation-delay-500">
          {[
            { value: "23+", label: "Destinations" },
            { value: "3", label: "States" },
            { value: "4", label: "Duration Options" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-orange font-bold text-lg sm:text-2xl">
                {stat.value}
              </div>
              <div className="text-white/60 text-[10px] sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Travel Search panel — overlaps hero bottom */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 -mb-6 lg:-mb-8">
        <TravelSearch />
      </div>

      {/* Scroll indicator — hidden on small screens to avoid overlap */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce opacity-60 hidden sm:block">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
