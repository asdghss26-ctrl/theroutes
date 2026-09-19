import Link from "next/link";
import Image from "next/image";

const FOOTER_LINKS = {
  explore: [
    { label: "Tamil Nadu", href: "/packages?region=Tamil+Nadu" },
    { label: "Kerala", href: "/packages?region=Kerala" },
    { label: "Karnataka", href: "/packages?region=Karnataka" },
    { label: "All Packages", href: "/packages" },
  ],
  destinations: [
    { label: "Munnar", href: "/destinations/munnar" },
    { label: "Ooty", href: "/destinations/ooty" },
    { label: "Kodaikanal", href: "/destinations/kodaikanal" },
    { label: "Coorg", href: "/destinations/coorg" },
    { label: "Wayanad", href: "/destinations/wayanad" },
    { label: "Alleppey + Munnar", href: "/destinations/alleppey-munnar" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Terms", href: "/contact" },
    { label: "Privacy", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" aria-label="The Routes — Home">
              <Image
                src="/logo.jpeg"
                alt="The Routes — Connecting Every Way"
                width={140}
                height={56}
                className="h-12 w-auto object-contain mb-4 brightness-0 invert"
              />
            </Link>
            <p className="text-white/65 text-sm leading-relaxed max-w-[240px]">
              Curated journeys across Tamil Nadu, Kerala & Karnataka — designed
              for unforgettable South India experiences.
            </p>
            <p className="mt-4 text-orange text-xs font-semibold tracking-widest uppercase">
              Connecting Every Way
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-white/40 mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.explore.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-orange text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-white/40 mb-4">
              Popular Destinations
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.destinations.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-orange text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-white/40 mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 mb-6">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-orange text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-sm font-semibold tracking-widest uppercase text-white/40 mb-3">
              Contact
            </h3>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-orange transition-colors"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Send an Enquiry
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} The Routes. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Curated journeys across South India
          </p>
        </div>
      </div>
    </footer>
  );
}
