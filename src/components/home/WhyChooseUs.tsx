const BENEFITS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Curated Destinations",
    description:
      "Every route is handpicked across Tamil Nadu, Kerala, and Karnataka for authentic, memorable experiences.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: "Flexible Durations",
    description:
      "Choose from 1N/2D to 4N/5D journeys. Every destination offers multiple duration options.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: "Personalised Trips",
    description:
      "Travel plans designed around your preferences, travel style, and group size.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Local Experiences",
    description:
      "Discover destinations and experiences beyond the usual tourist trail.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Easy Enquiry",
    description:
      "Plan your trip with a simple enquiry. We'll handle the rest and get back to you promptly.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="py-20 lg:py-28 bg-white"
      aria-labelledby="why-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-orange text-xs font-semibold tracking-[0.2em] uppercase">
            Why Travel With Us
          </span>
          <h2
            id="why-heading"
            className="text-navy text-3xl sm:text-4xl font-bold mt-2 mb-3 tracking-tight"
          >
            The Routes Difference
          </h2>
          <p className="text-muted text-base leading-relaxed">
            More than a booking platform — a curated journey partner.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {BENEFITS.map((b, i) => (
            <div
              key={b.title}
              className="group flex flex-col items-start p-6 rounded-xl border border-border hover:border-orange/30 hover:shadow-lg transition-all duration-200 bg-white"
            >
              {/* Icon */}
              <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-surface text-navy group-hover:bg-orange group-hover:text-white transition-all duration-200 mb-5">
                {b.icon}
              </div>

              {/* Step number */}
              <div className="text-orange text-xs font-bold mb-2 opacity-60">
                0{i + 1}
              </div>

              <h3 className="text-navy font-semibold text-base mb-2">
                {b.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
