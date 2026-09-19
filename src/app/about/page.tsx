import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { REGIONS } from "@/lib/data";

export const metadata: Metadata = {
  title: "About The Routes — South India Travel Platform",
  description:
    "The Routes is a South India travel platform connecting travellers with curated journeys across Tamil Nadu, Kerala, and Karnataka.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-navy pt-28 pb-12 lg:pt-32 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-orange text-xs font-semibold tracking-[0.2em] uppercase">
            About Us
          </span>
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-4 tracking-tight">
            The Routes
          </h1>
          <p className="text-white/60 text-base max-w-xl">
            Connecting Every Way
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Text */}
          <div>
            <h2 className="text-navy text-2xl sm:text-3xl font-bold mb-6 tracking-tight">
              One platform for every South India journey
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                The Routes is a South India travel platform built for travellers
                who want to go beyond the obvious. We focus on curated journeys
                across Tamil Nadu, Kerala, and Karnataka — three states that
                together hold some of the most diverse and spectacular landscapes
                in India.
              </p>
              <p>
                From Munnar&apos;s emerald tea estates to the red-cliffed beaches of
                Varkala, from Mysore&apos;s palace grandeur to the wild adventure
                country of Dandeli — our platform brings together destinations
                that speak to different kinds of travellers.
              </p>
              <p>
                The idea behind The Routes is simple: travel should be easy to
                plan, flexible in duration, and deeply personal. Whether
                you&apos;re a couple looking for a quiet getaway, a family planning
                their first South India trip, or an adventurer seeking something
                off the beaten path — The Routes helps you find your way.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1570459287564-b786e6b1de71?auto=format&fit=crop&w=1200&q=80"
              alt="South India landscape"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-navy/20" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                <p className="text-orange font-bold text-xs tracking-widest uppercase mb-1">
                  The Routes
                </p>
                <p className="text-navy text-sm font-semibold">
                  Connecting Every Way
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What we cover */}
        <div className="mb-20">
          <h2 className="text-navy text-2xl font-bold mb-8 tracking-tight">
            What We Cover
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REGIONS.map((region) => (
              <Link
                key={region.state}
                href={`/packages?region=${encodeURIComponent(region.state)}`}
                className="group relative aspect-[3/2] rounded-xl overflow-hidden"
              >
                <Image
                  src={region.image}
                  alt={region.label}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-xl">{region.label}</h3>
                  <p className="text-white/70 text-sm">{region.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="bg-surface rounded-2xl p-8 lg:p-12 mb-12">
          <h2 className="text-navy text-2xl font-bold mb-8 tracking-tight">
            How We Think About Travel
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Curation over quantity",
                desc: "We focus on destinations that offer genuine, memorable experiences — not just popular names.",
              },
              {
                title: "Flexibility first",
                desc: "Every destination is available in multiple duration options so you can travel on your own terms.",
              },
              {
                title: "Routes, not just destinations",
                desc: "Many of our packages combine multiple destinations into a thoughtful journey with narrative.",
              },
              {
                title: "Honest planning",
                desc: "We don't oversell. What you see is what we can genuinely plan and support.",
              },
            ].map((v) => (
              <div key={v.title}>
                <div className="w-1 h-6 bg-orange rounded-full mb-4" />
                <h3 className="text-navy font-bold text-base mb-2">{v.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-navy text-2xl font-bold mb-4">
            Ready to plan your South India journey?
          </h2>
          <p className="text-muted text-base mb-8 max-w-md mx-auto">
            Browse our destinations and packages, or send us an enquiry and
            we&apos;ll plan the perfect trip for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 bg-orange text-white font-semibold px-7 py-3.5 rounded hover:bg-orange/90 transition-all"
            >
              Explore Packages
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-navy text-navy font-semibold px-7 py-3.5 rounded hover:bg-navy hover:text-white transition-all"
            >
              Plan My Trip
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
