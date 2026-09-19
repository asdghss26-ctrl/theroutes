import Link from "next/link";
import Image from "next/image";
import { REGIONS, destinations } from "@/lib/data";

export default function DestinationExplorer() {
  return (
    <section className="py-20 lg:py-28 bg-white" aria-labelledby="discover-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-orange text-xs font-semibold tracking-[0.2em] uppercase">
            Three States
          </span>
          <h2
            id="discover-heading"
            className="text-navy text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-4 tracking-tight"
          >
            Discover South India
          </h2>
          <p className="text-muted text-base lg:text-lg leading-relaxed">
            Three distinct landscapes. Endless journeys. One platform.
          </p>
        </div>

        {/* Region cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {REGIONS.map((region) => {
            const count = destinations.filter(
              (d) => d.state === region.state
            ).length;

            return (
              <Link
                href={`/packages?region=${encodeURIComponent(region.state)}`}
                key={region.state}
                className="group relative overflow-hidden rounded-xl aspect-[4/5] lg:aspect-[3/4] flex flex-col justify-end cursor-pointer"
                aria-label={`Explore ${region.label} packages`}
              >
                {/* Image */}
                <Image
                  src={region.image}
                  alt={`${region.label} — South India`}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />

                {/* State badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-orange text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    {count} routes
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10 p-6">
                  <h3 className="text-white text-2xl lg:text-3xl font-bold mb-1 tracking-tight">
                    {region.label}
                  </h3>
                  <p className="text-white/75 text-sm leading-relaxed mb-4">
                    {region.description}
                  </p>

                  {/* Destination chips */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {region.destinationNames.slice(0, 5).map((name) => (
                      <span
                        key={name}
                        className="text-white/70 text-xs border border-white/25 px-2 py-0.5 rounded-full"
                      >
                        {name}
                      </span>
                    ))}
                    {region.destinationNames.length > 5 && (
                      <span className="text-white/50 text-xs px-2 py-0.5">
                        +{region.destinationNames.length - 5} more
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-orange font-semibold text-sm group-hover:gap-3 transition-all duration-200">
                    Explore {region.label}
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
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
