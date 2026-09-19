"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Destinations", href: "/packages" },
  { label: "Packages", href: "/packages" },
  { label: "Tamil Nadu", href: "/packages?region=Tamil+Nadu" },
  { label: "Kerala", href: "/packages?region=Kerala" },
  { label: "Karnataka", href: "/packages?region=Karnataka" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const transparent = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group" aria-label="The Routes — Home">
            <Image
              src="/logo.jpeg"
              alt="The Routes — Connecting Every Way"
              width={140}
              height={56}
              className="h-11 lg:h-13 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" role="navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={`${link.label}-${link.href}`}
                href={link.href}
                className={`relative px-3 py-2 text-sm font-medium rounded transition-colors duration-150 group ${
                  transparent
                    ? "text-white/90 hover:text-white hover:bg-white/10"
                    : "text-navy hover:text-orange hover:bg-surface"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-orange text-white text-sm font-semibold px-5 py-2.5 rounded hover:bg-orange/90 active:scale-[0.98] transition-all duration-150 shadow-sm"
            >
              Plan Your Trip
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className={`lg:hidden p-2 rounded-md transition-colors ${
              transparent
                ? "text-white hover:bg-white/10"
                : "text-navy hover:bg-surface"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-100 shadow-lg">
          <nav className="px-4 py-3 space-y-0.5" role="navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={`mobile-${link.label}-${link.href}`}
                href={link.href}
                className="block py-3 px-4 text-navy font-medium text-[15px] hover:bg-surface hover:text-orange rounded transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="px-4 py-4 border-t border-gray-100">
            <Link
              href="/contact"
              className="block w-full text-center bg-orange text-white font-semibold py-3 rounded hover:bg-orange/90 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Plan Your Trip
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
