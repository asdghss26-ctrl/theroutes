"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import PackageCard from "@/components/shared/PackageCard";
import { destinations } from "@/lib/data";
import type { Duration, Experience, State } from "@/lib/types";
import { DURATION_LABELS, ALL_DURATIONS, FILTER_EXPERIENCES } from "@/lib/types";

const STATES: State[] = ["Tamil Nadu", "Kerala", "Karnataka"];

interface PopularPackagesProps {
  initialRegion?: string;
  initialDuration?: string;
  initialExperience?: string;
}

export default function PopularPackages({
  initialRegion = "",
  initialDuration = "",
  initialExperience = "",
}: PopularPackagesProps) {
  const [region, setRegion] = useState(initialRegion);
  const [duration, setDuration] = useState(initialDuration);
  const [experience, setExperience] = useState(initialExperience);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return destinations.filter((d) => {
      if (region && d.state !== region) return false;
      if (duration && !d.availableDurations.includes(duration as Duration)) return false;
      if (experience && !d.experiences.includes(experience as Experience)) return false;
      if (query) {
        const q = query.toLowerCase();
        if (!d.name.toLowerCase().includes(q) && !d.state.toLowerCase().includes(q))
          return false;
      }
      return true;
    });
  }, [region, duration, experience, query]);

  const clearFilters = () => {
    setRegion("");
    setDuration("");
    setExperience("");
    setQuery("");
  };

  const hasFilters = !!(region || duration || experience || query);

  return (
    <section className="py-20 lg:py-28 bg-surface" aria-labelledby="packages-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-orange text-xs font-semibold tracking-[0.2em] uppercase">
              Tour Packages
            </span>
            <h2
              id="packages-heading"
              className="text-navy text-3xl sm:text-4xl font-bold mt-2 tracking-tight"
            >
              Find Your Next Escape
            </h2>
          </div>
          <Link
            href="/packages"
            className="text-sm text-navy font-medium border-b border-navy/30 hover:border-orange hover:text-orange transition-colors self-start sm:self-auto"
          >
            View all packages →
          </Link>
        </div>

        {/* Filter bar */}
        <div className="bg-white rounded-xl border border-border p-4 mb-8 flex flex-wrap gap-3 items-center">
          {/* Region */}
          <div className="flex gap-1.5 flex-wrap">
            <button
              type="button"
              onClick={() => setRegion("")}
              className={`text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-all duration-150 ${
                !region
                  ? "bg-navy text-white border-navy"
                  : "border-border text-muted hover:border-navy/30 hover:text-navy"
              }`}
            >
              All
            </button>
            {STATES.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setRegion(region === s ? "" : s)}
                className={`text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-all duration-150 ${
                  region === s
                    ? "bg-navy text-white border-navy"
                    : "border-border text-muted hover:border-navy/30 hover:text-navy"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="hidden sm:block h-6 w-px bg-border" />

          {/* Duration */}
          <div className="flex gap-1.5 flex-wrap">
            {ALL_DURATIONS.map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => setDuration(duration === d ? "" : d)}
                className={`text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-all duration-150 ${
                  duration === d
                    ? "bg-orange text-white border-orange"
                    : "border-border text-muted hover:border-orange/30 hover:text-orange"
                }`}
              >
                {DURATION_LABELS[d]}
              </button>
            ))}
          </div>

          {/* Clear */}
          {hasFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="ml-auto text-xs text-muted hover:text-orange transition-colors flex items-center gap-1"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
              Clear
            </button>
          )}
        </div>

        {/* Result count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-muted">
            <span className="text-navy font-semibold">{filtered.length}</span>{" "}
            {filtered.length === 1 ? "trip" : "trips"} found
          </p>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.slice(0, 9).map((dest) => (
              <PackageCard key={dest.id} destination={dest} selectedDuration={duration || undefined} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-14 h-14 rounded-full bg-surface border border-border flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </div>
            <h3 className="text-navy font-semibold mb-2">No packages found</h3>
            <p className="text-muted text-sm mb-5">Try different filters or explore all destinations</p>
            <button
              type="button"
              onClick={clearFilters}
              className="text-sm font-semibold text-orange hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* See all */}
        {filtered.length > 9 && (
          <div className="text-center mt-10">
            <Link
              href={`/packages${region ? `?region=${encodeURIComponent(region)}` : ""}`}
              className="inline-flex items-center gap-2 border-2 border-navy text-navy font-semibold px-7 py-3 rounded-lg hover:bg-navy hover:text-white transition-all duration-150"
            >
              See all {filtered.length} packages
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
