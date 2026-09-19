import Image from "next/image";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative py-24 lg:py-36" aria-label="Start your journey">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1593604572577-1c6c44fa1ab3?auto=format&fit=crop&w=2400&q=80"
          alt="South India landscape"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-navy/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Decorative route line */}
        <div className="flex items-center justify-center gap-3 mb-8 opacity-60">
          <div className="h-px w-12 bg-orange" />
          <div className="w-2 h-2 rounded-full bg-orange" />
          <div className="h-px w-12 bg-orange" />
        </div>

        <h2 className="text-white font-bold tracking-tight mb-5 leading-[1.05]">
          <span className="block text-3xl sm:text-4xl lg:text-6xl">
            Your South India
          </span>
          <span className="block text-3xl sm:text-4xl lg:text-6xl text-orange">
            Journey Starts Here
          </span>
        </h2>

        <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          Choose a destination. Pick your duration. We&apos;ll help you plan
          the rest — curated experiences, personalised for you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 bg-orange text-white font-semibold px-8 py-4 rounded hover:bg-orange/90 transition-all duration-150 shadow-xl active:scale-[0.98] text-base"
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
            className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-semibold px-8 py-4 rounded hover:bg-white hover:text-navy transition-all duration-150 text-base"
          >
            Plan My Trip
          </Link>
        </div>
      </div>
    </section>
  );
}
