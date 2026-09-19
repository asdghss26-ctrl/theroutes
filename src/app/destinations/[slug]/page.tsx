import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { destinations, getDestinationBySlug } from "@/lib/data";
import { DURATION_LABELS, DURATION_NIGHTS, ALL_DURATIONS } from "@/lib/types";
import DurationTabs from "./_components/DurationTabs";

interface DestinationPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: DestinationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const dest = getDestinationBySlug(slug);
  if (!dest) return { title: "Destination Not Found" };

  return {
    title: `${dest.name} — The Routes | ${dest.state} Tour Packages`,
    description: dest.shortDescription,
  };
}

export default async function DestinationPage({ params }: DestinationPageProps) {
  const { slug } = await params;
  const dest = getDestinationBySlug(slug);
  if (!dest) notFound();

  const STATE_COLOR_MAP: Record<string, string> = {
    "Tamil Nadu": "bg-orange/10 text-orange border-orange/20",
    Kerala: "bg-brand-green/10 text-brand-green border-brand-green/20",
    Karnataka: "bg-navy/10 text-navy border-navy/20",
  };

  return (
    <article className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] lg:h-[70vh] flex items-end" aria-label="Destination hero">
        <div className="absolute inset-0 z-0">
          <Image
            src={dest.image}
            alt={`${dest.name} — ${dest.state}`}
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/30 to-navy/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 lg:pb-14 w-full">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/60 text-sm mb-5" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link
              href={`/packages?region=${encodeURIComponent(dest.state)}`}
              className="hover:text-white transition-colors"
            >
              {dest.state}
            </Link>
            <span>/</span>
            <span className="text-white">{dest.name}</span>
          </nav>

          {/* State badge */}
          <span
            className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border mb-4 ${
              STATE_COLOR_MAP[dest.state] ?? "bg-white/20 text-white"
            }`}
          >
            {dest.state}
          </span>

          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight leading-tight">
            {dest.name}
          </h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl leading-relaxed">
            {dest.shortDescription}
          </p>

          {/* Experience tags */}
          <div className="flex flex-wrap gap-2 mt-5">
            {dest.experiences.map((exp) => (
              <span
                key={exp}
                className="text-white/80 text-xs border border-white/25 px-2.5 py-1 rounded-full"
              >
                {exp}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Duration selector + package info */}
      <section className="bg-white border-b border-border sticky top-16 z-20" aria-label="Duration selection">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DurationTabs availableDurations={dest.availableDurations} />
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: Details */}
          <div className="lg:col-span-2 space-y-12">
            {/* About */}
            {dest.longDescription && (
              <div>
                <h2 className="text-navy text-2xl font-bold mb-4 tracking-tight">
                  About {dest.name}
                </h2>
                <p className="text-muted leading-relaxed text-base">{dest.longDescription}</p>
              </div>
            )}

            {/* Highlights */}
            {dest.highlights && dest.highlights.length > 0 && (
              <div>
                <h2 className="text-navy text-2xl font-bold mb-6 tracking-tight">
                  Why You&apos;ll Love It
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {dest.highlights.map((h) => (
                    <div
                      key={h}
                      className="flex items-center gap-3 p-4 rounded-xl border border-border bg-surface"
                    >
                      <div className="w-8 h-8 rounded-full bg-orange/10 flex items-center justify-center flex-shrink-0">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="#FF7900">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                      </div>
                      <span className="text-navy text-sm font-medium">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Available Packages */}
            <div>
              <h2 className="text-navy text-2xl font-bold mb-6 tracking-tight">
                Available Packages
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {dest.availableDurations.map((dur) => {
                  const info = DURATION_NIGHTS[dur];
                  return (
                    <div
                      key={dur}
                      className="p-5 rounded-xl border border-border bg-white hover:border-orange/30 hover:shadow-md transition-all duration-200 group"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <span className="text-orange font-bold text-xl">{DURATION_LABELS[dur]}</span>
                          <p className="text-muted text-sm mt-0.5">
                            {info.nights} {info.nights === 1 ? "night" : "nights"} · {info.days} days
                          </p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center group-hover:bg-orange group-hover:border-orange group-hover:text-white text-muted transition-all duration-200">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                      <p className="text-muted text-sm leading-relaxed">
                        Detailed itinerary and inclusions available on enquiry.
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* What's included placeholder */}
            <div>
              <h2 className="text-navy text-2xl font-bold mb-6 tracking-tight">
                Package Inclusions
              </h2>
              <p className="text-muted text-sm mb-6 leading-relaxed">
                Inclusions vary by package duration and travel date. Contact us for a
                detailed breakdown tailored to your group.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { icon: "🏨", label: "Accommodation" },
                  { icon: "🚗", label: "Transportation" },
                  { icon: "🍽️", label: "Meals" },
                  { icon: "🗺️", label: "Sightseeing" },
                  { icon: "🧭", label: "Guide" },
                  { icon: "📋", label: "Itinerary" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 p-3 rounded-lg border border-border bg-surface text-sm text-muted"
                  >
                    <span className="text-base">{item.icon}</span>
                    <span className="font-medium text-navy">{item.label}</span>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-muted mt-3 italic">
                * Specific inclusions confirmed at time of booking
              </p>
            </div>
          </div>

          {/* Right: Enquiry CTA */}
          <aside className="lg:col-span-1">
            <div className="sticky top-36">
              <div className="bg-navy rounded-2xl p-6 lg:p-7 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#FF7900">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  </svg>
                  <span className="text-orange text-xs font-semibold tracking-wider uppercase">
                    {dest.state}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-1">{dest.name}</h3>
                <p className="text-white/60 text-sm mb-6 leading-relaxed">
                  Ready to explore? Send us an enquiry and we&apos;ll plan your perfect journey.
                </p>

                <div className="space-y-3 mb-6">
                  {dest.availableDurations.map((dur) => (
                    <div key={dur} className="flex items-center justify-between py-2 border-b border-white/10">
                      <span className="text-white/80 text-sm">{DURATION_LABELS[dur]}</span>
                      <span className="text-white/40 text-xs">Contact for price</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/contact?destination=${encodeURIComponent(dest.name)}`}
                  className="block w-full text-center bg-orange text-white font-semibold py-3.5 rounded-lg hover:bg-orange/90 transition-colors text-sm mb-3"
                >
                  Enquire Now
                </Link>
                <p className="text-white/40 text-xs text-center">
                  We&apos;ll respond within 24 hours
                </p>
              </div>

              {/* Related destinations */}
              <div className="mt-6 p-5 rounded-xl border border-border bg-surface">
                <h4 className="text-navy text-sm font-bold mb-3">
                  More in {dest.state}
                </h4>
                <div className="space-y-2">
                  {destinations
                    .filter((d) => d.state === dest.state && d.id !== dest.id)
                    .slice(0, 4)
                    .map((related) => (
                      <Link
                        key={related.id}
                        href={`/destinations/${related.slug}`}
                        className="flex items-center justify-between py-1.5 text-sm text-muted hover:text-orange transition-colors group"
                      >
                        <span>{related.name}</span>
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          className="group-hover:translate-x-0.5 transition-transform"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
