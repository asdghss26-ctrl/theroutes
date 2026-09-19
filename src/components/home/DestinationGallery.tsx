"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { destinations, GALLERY_SLUGS } from "@/lib/data";

export default function DestinationGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const galleryDestinations = GALLERY_SLUGS.map((slug) =>
    destinations.find((d) => d.slug === slug)
  ).filter(Boolean);

  const onMouseDown = useCallback(
    (e: React.MouseEvent) => {
      setIsDragging(true);
      setStartX(e.pageX - (scrollRef.current?.offsetLeft ?? 0));
      setScrollLeft(scrollRef.current?.scrollLeft ?? 0);
    },
    []
  );

  const onMouseLeave = useCallback(() => setIsDragging(false), []);
  const onMouseUp = useCallback(() => setIsDragging(false), []);

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging || !scrollRef.current) return;
      e.preventDefault();
      const x = e.pageX - (scrollRef.current.offsetLeft ?? 0);
      const walk = (x - startX) * 1.5;
      scrollRef.current.scrollLeft = scrollLeft - walk;
    },
    [isDragging, startX, scrollLeft]
  );

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "right" ? 320 : -320, behavior: "smooth" });
  };

  return (
    <section
      className="py-20 lg:py-28 bg-white overflow-hidden"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-orange text-xs font-semibold tracking-[0.2em] uppercase">
              Destinations
            </span>
            <h2
              id="gallery-heading"
              className="text-navy text-3xl sm:text-4xl font-bold mt-2 tracking-tight"
            >
              Your Next Destination
            </h2>
          </div>
          {/* Scroll controls — desktop */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-navy hover:border-navy hover:bg-navy hover:text-white transition-all duration-150"
              aria-label="Scroll left"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-navy hover:border-navy hover:bg-navy hover:text-white transition-all duration-150"
              aria-label="Scroll right"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable gallery */}
      <div
        ref={scrollRef}
        className={`flex gap-4 overflow-x-auto pb-4 px-4 sm:px-8 lg:px-16 gallery-scroll select-none ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        role="list"
        aria-label="Destination gallery"
      >
        {galleryDestinations.map((dest) => {
          if (!dest) return null;
          return (
            <Link
              href={`/destinations/${dest.slug}`}
              key={dest.id}
              className="group relative flex-shrink-0 w-[240px] sm:w-[280px] aspect-[3/4] overflow-hidden rounded-xl"
              role="listitem"
              aria-label={`${dest.name}, ${dest.state}`}
              onClick={(e) => {
                if (isDragging) e.preventDefault();
              }}
            >
              <Image
                src={dest.image}
                alt={`${dest.name} — ${dest.state}`}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="280px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />

              {/* State badge */}
              <div className="absolute top-3 left-3">
                <span className="text-[10px] font-semibold bg-white/20 backdrop-blur-sm text-white px-2 py-0.5 rounded-full border border-white/20">
                  {dest.state}
                </span>
              </div>

              {/* Destination info */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-center gap-1.5 mb-1">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="#FF7900">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span className="text-white/70 text-[10px] font-medium">{dest.state}</span>
                </div>
                <h3 className="text-white font-bold text-lg leading-tight">{dest.name}</h3>
                <div className="flex gap-1 mt-2 flex-wrap">
                  {dest.experiences.slice(0, 2).map((exp) => (
                    <span
                      key={exp}
                      className="text-[9px] font-medium text-white/70 border border-white/20 px-1.5 py-0.5 rounded-full"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Mobile hint */}
      <p className="text-center text-muted text-xs mt-4 sm:hidden">
        Swipe to explore →
      </p>
    </section>
  );
}
