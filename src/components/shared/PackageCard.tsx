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

const ENQUIRY_NUMBER = "7397408284";

export default function PackageCard({ destination, selectedDuration }: PackageCardProps) {
  const dur = selectedDuration ?? destination.availableDurations[0];
  const durationLabel = DURATION_LABELS[dur as keyof typeof DURATION_LABELS];

  return (
    <article className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      {/* Image — full card is tappable on mobile via the Link below */}
      <Link
        href={`/destinations/${destination.slug}`}
        className="block relative aspect-[4/3] overflow-hidden"
        tabIndex={-1}
        aria-hidden="true"
      >
        <Image
          src={destination.image}
          alt={`${destination.name} — ${destination.state}`}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Hover gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

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
      </Link>

      {/* Content */}
      <div className="p-4 sm:p-5">
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
        <Link href={`/destinations/${destination.slug}`}>
          <h3 className="text-navy font-bold text-lg leading-tight mb-2 group-hover:text-orange transition-colors">
            {destination.name}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-2">
          {destination.shortDescription}
        </p>

        {/* Experience tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {destination.experiences.slice(0, 3).map((exp) => (
            <span
              key={exp}
              className="text-[10px] font-medium text-brand-green bg-brand-green/8 border border-brand-green/20 px-2 py-0.5 rounded-full"
            >
              {exp}
            </span>
          ))}
        </div>

        {/* CTA row */}
        <div className="flex items-center gap-2 pt-4 border-t border-border">
          <Link
            href={`/destinations/${destination.slug}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-orange text-white text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-orange/90 active:scale-[0.97] transition-all duration-150 min-h-[44px]"
          >
            View Package
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <a
            href={`https://wa.me/91${ENQUIRY_NUMBER}?text=Hi, I'm interested in the ${destination.name} package`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-11 h-11 rounded-lg bg-[#25D366]/10 text-[#128C48] border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-colors"
            aria-label={`WhatsApp enquiry for ${destination.name}`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}
