"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import type { Duration, Experience, State } from "@/lib/types";
import { DURATION_LABELS, ALL_DURATIONS } from "@/lib/types";

const REGIONS: State[] = ["Tamil Nadu", "Kerala", "Karnataka"];

const TRAVEL_TYPES: Experience[] = [
  "Hill Station",
  "Beach",
  "Heritage",
  "Nature",
  "Wildlife",
  "Adventure",
  "Family",
  "Couple",
];

export default function TravelSearch() {
  const router = useRouter();
  const [region, setRegion] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [experience, setExperience] = useState<string>("");

  const handleSearch = useCallback(() => {
    const params = new URLSearchParams();
    if (region) params.set("region", region);
    if (duration) params.set("duration", duration);
    if (experience) params.set("experience", experience);

    router.push(`/packages${params.toString() ? "?" + params.toString() : ""}`);
  }, [router, region, duration, experience]);

  const selectClass =
    "w-full bg-transparent text-navy text-sm font-medium appearance-none cursor-pointer focus:outline-none";

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
        {/* Where */}
        <div className="px-5 py-4 lg:px-6 lg:py-5">
          <label className="block text-[10px] font-bold tracking-widest uppercase text-orange mb-1.5">
            Where to?
          </label>
          <div className="relative">
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className={selectClass}
              aria-label="Select region or destination"
            >
              <option value="">All of South India</option>
              {REGIONS.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
            <svg
              className="absolute right-0 top-1/2 -translate-y-1/2 text-muted pointer-events-none"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>

        {/* Duration */}
        <div className="px-5 py-4 lg:px-6 lg:py-5">
          <label className="block text-[10px] font-bold tracking-widest uppercase text-orange mb-1.5">
            Duration
          </label>
          <div className="relative">
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className={selectClass}
              aria-label="Select trip duration"
            >
              <option value="">Any Duration</option>
              {ALL_DURATIONS.map((d) => (
                <option key={d} value={d}>
                  {DURATION_LABELS[d]}
                </option>
              ))}
            </select>
            <svg
              className="absolute right-0 top-1/2 -translate-y-1/2 text-muted pointer-events-none"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>

        {/* Travel Type */}
        <div className="px-5 py-4 lg:px-6 lg:py-5">
          <label className="block text-[10px] font-bold tracking-widest uppercase text-orange mb-1.5">
            Travel Type
          </label>
          <div className="relative">
            <select
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className={selectClass}
              aria-label="Select travel type"
            >
              <option value="">Any Type</option>
              {TRAVEL_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            <svg
              className="absolute right-0 top-1/2 -translate-y-1/2 text-muted pointer-events-none"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>
      </div>

      {/* Search button */}
      <div className="px-5 py-3 lg:px-6 bg-surface flex items-center justify-between gap-4">
        <p className="text-muted text-xs hidden sm:block">
          Exploring {23}+ routes across South India
        </p>
        <button
          type="button"
          onClick={handleSearch}
          className="flex-shrink-0 flex items-center gap-2 bg-orange text-white font-semibold text-sm px-6 py-2.5 rounded-lg hover:bg-orange/90 active:scale-[0.98] transition-all duration-150"
        >
          Find My Trip
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </button>
      </div>
    </div>
  );
}
