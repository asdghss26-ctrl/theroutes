"use client";

import { useState, useMemo } from "react";
import PackageCard from "@/components/shared/PackageCard";
import { destinations } from "@/lib/data";
import type { Duration, Experience, State } from "@/lib/types";
import { DURATION_LABELS, ALL_DURATIONS, FILTER_EXPERIENCES } from "@/lib/types";

const STATES: State[] = ["Tamil Nadu", "Kerala", "Karnataka"];

interface PackagesClientProps {
  initialRegion: string;
  initialDuration: string;
  initialExperience: string;
  initialQuery: string;
}

export default function PackagesClient({
  initialRegion,
  initialDuration,
  initialExperience,
  initialQuery,
}: PackagesClientProps) {
  const [region, setRegion] = useState(initialRegion);
  const [duration, setDuration] = useState(initialDuration);
  const [experience, setExperience] = useState(initialExperience);
  const [query, setQuery] = useState(initialQuery);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

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

  const FilterPanel = () => (
    <div className="space-y-6">
      {/* Search */}
      <div>
        <label className="block text-[10px] font-bold tracking-widest uppercase text-orange mb-2">
          Search
        </label>
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Search destinations..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2.5 text-sm border border-border rounded-lg focus:outline-none focus:border-navy text-navy placeholder:text-muted"
          />
        </div>
      </div>

      {/* Region */}
      <div>
        <label className="block text-[10px] font-bold tracking-widest uppercase text-orange mb-3">
          Region
        </label>
        <div className="space-y-1.5">
          {["", ...STATES].map((s) => (
            <button
              key={s || "all"}
              type="button"
              onClick={() => setRegion(s)}
              className={`w-full text-left text-sm px-3 py-2 rounded-lg transition-colors ${
                region === s
                  ? "bg-navy text-white font-semibold"
                  : "text-muted hover:text-navy hover:bg-surface"
              }`}
            >
              {s || "All Regions"}
            </button>
          ))}
        </div>
      </div>

      {/* Duration */}
      <div>
        <label className="block text-[10px] font-bold tracking-widest uppercase text-orange mb-3">
          Duration
        </label>
        <div className="space-y-1.5">
          <button
            type="button"
            onClick={() => setDuration("")}
            className={`w-full text-left text-sm px-3 py-2 rounded-lg transition-colors ${
              !duration
                ? "bg-orange text-white font-semibold"
                : "text-muted hover:text-navy hover:bg-surface"
            }`}
          >
            Any Duration
          </button>
          {ALL_DURATIONS.map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => setDuration(duration === d ? "" : d)}
              className={`w-full text-left text-sm px-3 py-2 rounded-lg transition-colors ${
                duration === d
                  ? "bg-orange text-white font-semibold"
                  : "text-muted hover:text-navy hover:bg-surface"
              }`}
            >
              {DURATION_LABELS[d]}
            </button>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div>
        <label className="block text-[10px] font-bold tracking-widest uppercase text-orange mb-3">
          Experience
        </label>
        <div className="flex flex-wrap gap-1.5">
          {FILTER_EXPERIENCES.map((exp) => (
            <button
              key={exp}
              type="button"
              onClick={() => setExperience(experience === exp ? "" : exp)}
              className={`text-xs font-medium px-3 py-1 rounded-full border transition-all duration-150 ${
                experience === exp
                  ? "bg-brand-green text-white border-brand-green"
                  : "border-border text-muted hover:border-brand-green/30 hover:text-brand-green"
              }`}
            >
              {exp}
            </button>
          ))}
        </div>
      </div>

      {/* Clear */}
      {hasFilters && (
        <button
          type="button"
          onClick={clearFilters}
          className="w-full text-sm font-semibold text-orange hover:text-orange/80 border border-orange/30 hover:border-orange py-2 rounded-lg transition-all"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-surface">
      {/* Page header */}
      <div className="bg-navy pt-28 pb-10 lg:pt-32 lg:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-orange text-xs font-semibold tracking-[0.2em] uppercase">
            Explore
          </span>
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-3 tracking-tight">
            All Packages
          </h1>
          <p className="text-white/60 text-base max-w-xl">
            {destinations.length}+ curated routes across Tamil Nadu, Kerala &
            Karnataka — with flexible durations.
          </p>

          {/* Active filter badges */}
          {hasFilters && (
            <div className="flex flex-wrap gap-2 mt-5">
              {region && (
                <span className="flex items-center gap-1.5 bg-white/10 text-white text-xs font-medium px-3 py-1 rounded-full">
                  {region}
                  <button onClick={() => setRegion("")} aria-label="Remove region filter">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </span>
              )}
              {duration && (
                <span className="flex items-center gap-1.5 bg-white/10 text-white text-xs font-medium px-3 py-1 rounded-full">
                  {DURATION_LABELS[duration as Duration]}
                  <button onClick={() => setDuration("")} aria-label="Remove duration filter">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </span>
              )}
              {experience && (
                <span className="flex items-center gap-1.5 bg-white/10 text-white text-xs font-medium px-3 py-1 rounded-full">
                  {experience}
                  <button onClick={() => setExperience("")} aria-label="Remove experience filter">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mobile filter toggle */}
      <div className="lg:hidden sticky top-16 z-30 bg-white border-b border-border px-4 py-3 flex items-center justify-between shadow-sm">
        <p className="text-sm font-semibold text-navy">
          {filtered.length} {filtered.length === 1 ? "trip" : "trips"} found
        </p>
        <button
          type="button"
          onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
          className="flex items-center gap-2 text-sm font-medium text-navy border border-border px-3.5 py-1.5 rounded-lg hover:border-navy transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="8" y1="12" x2="20" y2="12" />
            <line x1="12" y1="18" x2="20" y2="18" />
          </svg>
          Filters {hasFilters && <span className="w-2 h-2 rounded-full bg-orange inline-block ml-0.5" />}
        </button>
      </div>

      {/* Mobile filters drawer */}
      {mobileFiltersOpen && (
        <div className="lg:hidden fixed inset-0 z-40 flex">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileFiltersOpen(false)} />
          <div className="relative ml-auto w-full max-w-sm bg-white h-full overflow-y-auto p-5 sm:p-6 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-bold text-navy text-lg">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} className="text-muted hover:text-navy">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <FilterPanel />
            <div className="mt-6 pt-6 border-t border-border">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full bg-navy text-white font-semibold py-3 rounded-lg"
              >
                Show {filtered.length} results
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-60 flex-shrink-0">
            <div className="sticky top-24 bg-white rounded-xl border border-border p-5">
              <FilterPanel />
            </div>
          </aside>

          {/* Package grid */}
          <div className="flex-1 min-w-0">
            {/* Desktop result count */}
            <div className="hidden lg:flex items-center justify-between mb-6">
              <p className="text-sm text-muted">
                <span className="text-navy font-semibold">{filtered.length}</span>{" "}
                {filtered.length === 1 ? "trip" : "trips"} found
              </p>
            </div>

            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
                {filtered.map((dest) => (
                  <PackageCard
                    key={dest.id}
                    destination={dest}
                    selectedDuration={duration || undefined}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-24">
                <div className="w-16 h-16 rounded-full bg-white border border-border flex items-center justify-center mx-auto mb-5">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="1.5">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                  </svg>
                </div>
                <h3 className="text-navy font-bold text-xl mb-2">No packages found</h3>
                <p className="text-muted text-sm mb-6 max-w-sm mx-auto">
                  Try adjusting your filters or explore all destinations across South India.
                </p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="inline-flex items-center gap-2 bg-orange text-white font-semibold px-6 py-3 rounded hover:bg-orange/90 transition-all"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
