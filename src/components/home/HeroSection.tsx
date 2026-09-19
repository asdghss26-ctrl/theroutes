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
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-24 pb-12 lg:pt-32 lg:pb-16">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-6 opacity-0 animate-fade-in animation-delay-100">
          <span className="h-px w-8 bg-orange" />
          <span className="text-orange text-xs font-semibold tracking-[0.2em] uppercase">
            South India Travel
          </span>
          <span className="h-px w-8 bg-orange" />
        </div>

        {/* Headline */}
        <h1 className="text-white font-bold tracking-tight leading-[1.05] mb-5 opacity-0 animate-fade-in-up animation-delay-200">
          <span className="block text-4xl sm:text-5xl lg:text-7xl">
            Explore South India,
          </span>
          <span className="block text-4xl sm:text-5xl lg:text-7xl">
            <span className="text-white">Your</span>{" "}
            <span className="text-orange">Way.</span>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-white/80 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed mb-8 opacity-0 animate-fade-in-up animation-delay-300">
          Curated journeys across Tamil Nadu, Kerala & Karnataka — designed for
          unforgettable experiences.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mb-0 opacity-0 animate-fade-in-up animation-delay-400">
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 bg-orange text-white font-semibold px-7 py-3.5 rounded hover:bg-orange/90 transition-all duration-150 shadow-lg active:scale-[0.98]"
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
            className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white font-semibold px-7 py-3.5 rounded border border-white/30 hover:bg-white/25 transition-all duration-150"
          >
            Plan My Trip
          </Link>
        </div>

        {/* Stats strip */}
        <div className="flex items-center gap-6 sm:gap-10 mt-12 opacity-0 animate-fade-in animation-delay-500">
          {[
            { value: "23+", label: "Destinations" },
            { value: "3", label: "States" },
            { value: "4", label: "Duration Options" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-orange font-bold text-xl sm:text-2xl">
                {stat.value}
              </div>
              <div className="text-white/60 text-xs sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Travel Search panel — overlaps hero bottom */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 -mb-6 lg:-mb-8">
        <TravelSearch />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce opacity-60">
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
