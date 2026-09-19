import Link from "next/link";
import Image from "next/image";
import { EXPERIENCE_CATEGORIES } from "@/lib/data";

export default function ExperienceSection() {
  return (
    <section
      className="py-20 lg:py-28 bg-surface"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-xl mb-12">
          <span className="text-orange text-xs font-semibold tracking-[0.2em] uppercase">
            Travel Styles
          </span>
          <h2
            id="experience-heading"
            className="text-navy text-3xl sm:text-4xl font-bold mt-2 mb-3 tracking-tight"
          >
            Find Your Experience
          </h2>
          <p className="text-muted text-base leading-relaxed">
            Choose the kind of journey that speaks to you.
          </p>
        </div>

        {/* Experience grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {EXPERIENCE_CATEGORIES.map((cat) => (
            <Link
              href={`/packages?experience=${encodeURIComponent(cat.slug)}`}
              key={cat.slug}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] sm:aspect-square flex flex-col justify-end cursor-pointer"
              aria-label={`${cat.label} packages`}
            >
              {/* Background image */}
              <Image
                src={cat.image}
                alt={cat.label}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 20vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/30 to-navy/10 group-hover:from-navy/90 transition-all duration-300" />

              {/* Content */}
              <div className="relative z-10 p-4 lg:p-5">
                <h3 className="text-white font-bold text-base lg:text-lg leading-tight mb-1">
                  {cat.label}
                </h3>
                <p className="text-white/65 text-xs leading-snug mb-3 hidden sm:block">
                  {cat.description}
                </p>
                <div className="flex items-center gap-1.5 text-orange text-xs font-semibold group-hover:gap-2 transition-all duration-200">
                  Explore
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
