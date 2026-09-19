export default function TestimonialsSection() {
  return (
    <section
      className="py-20 lg:py-28 bg-navy"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Decorative quote icon */}
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 rounded-full border-2 border-orange/30 flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FF7900"
              strokeWidth="1.5"
              opacity="0.8"
            >
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
              <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
            </svg>
          </div>
        </div>

        <h2
          id="testimonials-heading"
          className="text-white text-3xl sm:text-4xl font-bold mb-4 tracking-tight"
        >
          Your Journey.{" "}
          <span className="text-orange">Your Story.</span>
        </h2>

        <p className="text-white/60 text-base lg:text-lg max-w-xl mx-auto leading-relaxed mb-12">
          Traveller experiences and stories from across South India will appear
          here. Be part of the first group to explore with The Routes.
        </p>

        {/* Placeholder cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-xl border border-white/10 p-6 text-left bg-white/5"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg
                    key={s}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="#FF7900"
                    className="opacity-30"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              {/* Placeholder lines */}
              <div className="space-y-2">
                <div className="h-2.5 bg-white/10 rounded-full w-full" />
                <div className="h-2.5 bg-white/10 rounded-full w-5/6" />
                <div className="h-2.5 bg-white/10 rounded-full w-4/6" />
              </div>
              <div className="flex items-center gap-3 mt-5">
                <div className="w-8 h-8 rounded-full bg-white/10" />
                <div className="space-y-1">
                  <div className="h-2 bg-white/10 rounded-full w-20" />
                  <div className="h-2 bg-white/10 rounded-full w-14" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-white/35 text-xs tracking-wider">
          Real stories from real travellers — coming soon
        </p>
      </div>
    </section>
  );
}
