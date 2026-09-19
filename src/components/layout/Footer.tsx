import Link from "next/link";
import Image from "next/image";

const ENQUIRY_NUMBER = "7397408284";
const WHATSAPP_LINK = `https://wa.me/91${ENQUIRY_NUMBER}`;
const CALL_LINK = `tel:+91${ENQUIRY_NUMBER}`;

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <Link href="/" aria-label="The Routes — Home" className="inline-block mb-5">
              <Image
                src="/logo.png"
                alt="The Routes — Connecting Every Way"
                width={180}
                height={72}
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-white/65 text-sm leading-relaxed max-w-[240px] mb-4">
              Curated journeys across Tamil Nadu, Kerala &amp; Karnataka — designed
              for unforgettable South India experiences.
            </p>
            <p className="text-orange text-xs font-semibold tracking-widest uppercase mb-6">
              Connecting Every Way
            </p>

            {/* Contact CTAs */}
            <div className="flex flex-col gap-2.5">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#25D366]/15 border border-[#25D366]/30 text-[#4ade80] hover:bg-[#25D366]/25 text-sm font-medium px-4 py-2.5 rounded-lg transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
              <a
                href={CALL_LINK}
                className="inline-flex items-center gap-2.5 text-white/70 hover:text-white text-sm transition-colors px-1"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.07 2.2 2 2 0 012.03 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                +91 {ENQUIRY_NUMBER}
              </a>
            </div>
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
                    className="text-white/70 hover:text-orange text-sm transition-colors py-1 block"
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
                    className="text-white/70 hover:text-orange text-sm transition-colors py-1 block"
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
            <ul className="space-y-2.5">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-orange text-sm transition-colors py-1 block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/40 text-xs text-center sm:text-left">
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
