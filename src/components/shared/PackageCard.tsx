import Link from "next/link";
import Image from "next/image";
import type { Destination } from "@/lib/types";
import { DURATION_LABELS } from "@/lib/types";

interface PackageCardProps {
  destination: Destination;
  selectedDuration?: string;
}

const STATE_COLORS: Record<string, string> = {
  "Tamil Nadu": "bg-orange/10 text-orange border-orange/20",
  Kerala: "bg-brand-green/10 text-brand-green border-brand-green/20",
  Karnataka: "bg-navy/10 text-navy border-navy/20",
};

export default function PackageCard({ destination, selectedDuration }: PackageCardProps) {
  const dur = selectedDuration ?? destination.availableDurations[0];
  const durationLabel = DURATION_LABELS[dur as keyof typeof DURATION_LABELS];

  return (
    <article className="group bg-white rounded-xl border border-border overflow-hidden hover:shadow-xl hover:-translate-y-0.5 transition-all duration-250">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={destination.image}
          alt={`${destination.name} — ${destination.state}`}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Duration badge */}
        <div className="absolute top-3 right-3">
          <span className="bg-navy text-white text-[11px] font-semibold px-2.5 py-1 rounded-full shadow">
            {durationLabel ?? destination.availableDurations.length + " options"}
          </span>
        </div>

        {/* Available durations count */}
        {destination.availableDurations.length > 1 && (
          <div className="absolute bottom-3 left-3">
            <span className="bg-black/50 backdrop-blur-sm text-white text-[10px] px-2 py-0.5 rounded-full">
              {destination.availableDurations.length} durations available
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* State badge */}
        <div className="flex items-center justify-between mb-3">
          <span
            className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${
              STATE_COLORS[destination.state] ?? "bg-gray-100 text-gray-600"
            }`}
          >
            {destination.state}
          </span>

          {/* Location pin */}
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="#FF7900"
            className="opacity-60"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
        </div>

        {/* Name */}
        <h3 className="text-navy font-bold text-lg leading-tight mb-2 group-hover:text-orange transition-colors">
          {destination.name}
        </h3>

        {/* Description */}
        <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-2">
          {destination.shortDescription}
        </p>

        {/* Experience tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {destination.experiences.slice(0, 3).map((exp) => (
            <span
              key={exp}
              className="text-[10px] font-medium text-brand-green bg-brand-green/8 border border-brand-green/20 px-2 py-0.5 rounded-full"
            >
              {exp}
            </span>
          ))}
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <p className="text-[10px] text-muted uppercase tracking-wider">Starting</p>
            <p className="text-sm font-semibold text-navy">Contact for price</p>
          </div>
          <Link
            href={`/destinations/${destination.slug}`}
            className="inline-flex items-center gap-1.5 bg-orange text-white text-sm font-semibold px-4 py-2 rounded hover:bg-orange/90 active:scale-[0.97] transition-all duration-150"
          >
            View Package
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
