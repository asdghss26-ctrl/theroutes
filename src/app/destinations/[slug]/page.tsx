import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { destinations, getDestinationBySlug } from "@/lib/data";
import { DURATION_LABELS, DURATION_NIGHTS } from "@/lib/types";

const ENQUIRY_NUMBER = "7397408284";
const WHATSAPP_BASE = `https://wa.me/91${ENQUIRY_NUMBER}`;

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

  const whatsappLink = `${WHATSAPP_BASE}?text=Hi, I'm interested in the ${encodeURIComponent(dest.name)} package. Please share details.`;

  return (
    <article className="min-h-screen bg-white">
      {/* Hero */}
      <section
        className="relative h-[55vh] sm:h-[60vh] lg:h-[70vh] flex items-end"
        aria-label="Destination hero"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={dest.image}
            alt={`${dest.name} — ${dest.state}`}
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-navy/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-10 lg:pb-14 w-full">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-2 text-white/60 text-xs sm:text-sm mb-4"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
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
            className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border mb-3 ${
              STATE_COLOR_MAP[dest.state] ?? "bg-white/20 text-white"
            }`}
          >
            {dest.state}
          </span>

          <h1 className="text-white text-3xl sm:text-4xl lg:text-6xl font-bold mb-3 tracking-tight leading-tight">
            {dest.name}
          </h1>
          <p className="text-white/80 text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed">
            {dest.shortDescription}
          </p>

          {/* Experience tags */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4">
            {dest.experiences.map((exp) => (
              <span
                key={exp}
                className="text-white/80 text-[11px] sm:text-xs border border-white/25 px-2.5 py-0.5 rounded-full"
              >
                {exp}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
          {/* Left: Details */}
          <div className="lg:col-span-2 space-y-10 sm:space-y-12">
            {/* About */}
            {dest.longDescription && (
              <div>
                <h2 className="text-navy text-xl sm:text-2xl font-bold mb-4 tracking-tight">
                  About {dest.name}
                </h2>
                <p className="text-muted leading-relaxed text-sm sm:text-base">
                  {dest.longDescription}
                </p>
              </div>
            )}

            {/* The Experience — replaces highlights */}
            <div className="bg-surface rounded-2xl p-6 sm:p-8 border border-border">
              <h2 className="text-navy text-xl sm:text-2xl font-bold mb-3 tracking-tight">
                The Experience
              </h2>
              <p className="text-muted leading-relaxed text-sm sm:text-base mb-4">
                Explore {dest.name} through a carefully curated itinerary designed around
                your travel style — whether you seek adventure, relaxation, culture, or
                a mix of everything.
              </p>
              <p className="text-muted leading-relaxed text-sm sm:text-base">
                Our team crafts every journey with local knowledge, ensuring you
                discover the best of {dest.name} in a way that feels effortless
                and memorable.
              </p>
              <div className="mt-5 pt-5 border-t border-border">
                <p className="text-sm font-semibold text-navy mb-1">
                  Want the complete itinerary?
                </p>
                <p className="text-xs text-muted">
                  The detailed sightseeing plan is shared with you personally after
                  enquiry — so every experience feels exclusive, not generic.
                </p>
              </div>
            </div>

            {/* Available Packages / Duration selection */}
            <div>
              <h2 className="text-navy text-xl sm:text-2xl font-bold mb-2 tracking-tight">
                Choose Your Duration
              </h2>
              <p className="text-muted text-sm mb-5">
                Select a duration that works for your schedule. All packages are
                tailored to your group.
              </p>
              <div className="grid grid-cols-1 min-[400px]:grid-cols-2 gap-3 sm:gap-4">
                {dest.availableDurations.map((dur) => {
                  const info = DURATION_NIGHTS[dur];
                  return (
                    <div
                      key={dur}
                      className="p-4 sm:p-5 rounded-xl border border-border bg-white hover:border-orange/40 hover:shadow-md transition-all duration-200 group"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <span className="text-orange font-bold text-lg sm:text-xl">
                            {DURATION_LABELS[dur]}
                          </span>
                          <p className="text-muted text-xs sm:text-sm mt-0.5">
                            {info.nights} {info.nights === 1 ? "night" : "nights"} ·{" "}
                            {info.days} days
                          </p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center group-hover:bg-orange group-hover:border-orange group-hover:text-white text-muted transition-all duration-200">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                      <p className="text-muted text-xs leading-relaxed">
                        Detailed itinerary shared after enquiry.
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Package Inclusions */}
            <div>
              <h2 className="text-navy text-xl sm:text-2xl font-bold mb-2 tracking-tight">
                General Inclusions
              </h2>
              <p className="text-muted text-xs sm:text-sm mb-5 leading-relaxed">
                Specific inclusions vary by duration and travel date. Contact us
                for a detailed breakdown tailored to your group.
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
                    <span className="font-medium text-navy text-xs sm:text-sm">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-muted mt-3 italic">
                * Specific inclusions confirmed at time of booking
              </p>
            </div>

            {/* Enquiry nudge block */}
            <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
              <p className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-3">
                Enquiry-First Experience
              </p>
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-3">
                Want the complete itinerary?
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-md mx-auto">
                The detailed sightseeing plan, day-by-day schedule, and personalised
                recommendations are shared exclusively through our enquiry process.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#25D366]/90 transition-colors text-sm w-full sm:w-auto justify-center"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Enquire on WhatsApp
                </a>
                <Link
                  href={`/contact?destination=${encodeURIComponent(dest.name)}`}
                  className="inline-flex items-center gap-2 bg-orange text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange/90 transition-colors text-sm w-full sm:w-auto justify-center"
                >
                  Send an Enquiry →
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Enquiry CTA sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-navy rounded-2xl p-5 sm:p-6 lg:p-7 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#FF7900">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  </svg>
                  <span className="text-orange text-xs font-semibold tracking-wider uppercase">
                    {dest.state}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-1">{dest.name}</h3>
                <p className="text-white/60 text-sm mb-5 leading-relaxed">
                  Ready to explore? Reach out and we&apos;ll plan your perfect journey.
                </p>

                <div className="space-y-2.5 mb-5">
                  {dest.availableDurations.map((dur) => (
                    <div
                      key={dur}
                      className="flex items-center justify-between py-2 border-b border-white/10"
                    >
                      <span className="text-white/80 text-sm">{DURATION_LABELS[dur]}</span>
                      <span className="text-white/40 text-xs">Contact for price</span>
                    </div>
                  ))}
                </div>

                {/* 3 CTA buttons */}
                <div className="space-y-2.5">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-semibold py-3 rounded-lg hover:bg-[#25D366]/90 transition-colors text-sm"
                  >
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp Us
                  </a>
                  <a
                    href={`tel:+91${ENQUIRY_NUMBER}`}
                    className="flex items-center justify-center gap-2 w-full bg-white/10 text-white font-semibold py-3 rounded-lg hover:bg-white/20 transition-colors text-sm border border-white/20"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.07 2.2 2 2 0 012.03 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                    Call Us
                  </a>
                  <Link
                    href={`/contact?destination=${encodeURIComponent(dest.name)}`}
                    className="block w-full text-center bg-orange text-white font-semibold py-3 rounded-lg hover:bg-orange/90 transition-colors text-sm"
                  >
                    Enquire Now
                  </Link>
                </div>

                <p className="text-white/40 text-xs text-center mt-3">
                  We&apos;ll respond within 24 hours
                </p>
              </div>

              {/* Related destinations */}
              <div className="mt-5 p-4 sm:p-5 rounded-xl border border-border bg-surface">
                <h4 className="text-navy text-sm font-bold mb-3">
                  More in {dest.state}
                </h4>
                <div className="space-y-1">
                  {destinations
                    .filter((d) => d.state === dest.state && d.id !== dest.id)
                    .slice(0, 4)
                    .map((related) => (
                      <Link
                        key={related.id}
                        href={`/destinations/${related.slug}`}
                        className="flex items-center justify-between py-2 text-sm text-muted hover:text-orange transition-colors group"
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
