"use client";

import { useState } from "react";
import type { Duration } from "@/lib/types";
import { DURATION_LABELS, DURATION_NIGHTS } from "@/lib/types";

interface DurationTabsProps {
  availableDurations: Duration[];
}

export default function DurationTabs({ availableDurations }: DurationTabsProps) {
  const [selected, setSelected] = useState<Duration>(availableDurations[0]);
  const info = DURATION_NIGHTS[selected];

  return (
    <div className="flex items-center gap-0 overflow-x-auto py-0">
      {availableDurations.map((dur) => (
        <button
          key={dur}
          type="button"
          onClick={() => setSelected(dur)}
          className={`flex-shrink-0 px-5 py-4 text-sm font-semibold border-b-2 transition-all duration-150 whitespace-nowrap ${
            selected === dur
              ? "border-orange text-orange"
              : "border-transparent text-muted hover:text-navy"
          }`}
        >
          {DURATION_LABELS[dur]}
        </button>
      ))}
      {/* Selected info */}
      <div className="ml-auto flex-shrink-0 px-4 py-3 text-xs text-muted hidden sm:block">
        {info.nights} {info.nights === 1 ? "night" : "nights"} · {info.days} days
      </div>
    </div>
  );
}
