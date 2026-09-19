import type { Metadata } from "next";
import ContactForm from "./_components/ContactForm";

export const metadata: Metadata = {
  title: "Plan My Trip — The Routes | South India Travel Enquiry",
  description:
    "Send an enquiry to The Routes and we'll plan your perfect South India journey. Tamil Nadu, Kerala, Karnataka packages for all group sizes.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <div className="bg-navy pt-28 pb-12 lg:pt-32 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-orange text-xs font-semibold tracking-[0.2em] uppercase">
            Get In Touch
          </span>
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-4 tracking-tight">
            Plan My Trip
          </h1>
          <p className="text-white/60 text-base max-w-xl leading-relaxed">
            Tell us where you want to go and we&apos;ll create a personalised
            South India journey for you.
          </p>
        </div>
      </div>

      {/* Form section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Info sidebar */}
          <aside className="space-y-6">
            <div className="bg-white rounded-xl border border-border p-6">
              <h3 className="text-navy font-bold text-lg mb-4">What Happens Next?</h3>
              <div className="space-y-4">
                {[
                  {
                    step: "01",
                    title: "Submit your enquiry",
                    desc: "Fill in your preferences and travel details.",
                  },
                  {
                    step: "02",
                    title: "We get back to you",
                    desc: "Our team reviews your request within 24 hours.",
                  },
                  {
                    step: "03",
                    title: "Receive your plan",
                    desc: "Get a customised itinerary tailored to your group.",
                  },
                  {
                    step: "04",
                    title: "Confirm & travel",
                    desc: "Approve the plan, confirm booking, and go.",
                  },
                ].map((s) => (
                  <div key={s.step} className="flex gap-4">
                    <div className="w-7 h-7 rounded-full bg-orange/10 text-orange text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {s.step}
                    </div>
                    <div>
                      <p className="text-navy font-semibold text-sm">{s.title}</p>
                      <p className="text-muted text-sm">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-navy rounded-xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">Flexible Planning</h3>
              <p className="text-white/65 text-sm leading-relaxed mb-4">
                We offer packages for solo travellers, couples, families, and
                groups. Every trip is planned around your preferences.
              </p>
              <div className="space-y-2">
                {[
                  "Customised itineraries",
                  "Flexible durations",
                  "Group-friendly planning",
                  "Budget-aware options",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-white/70">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF7900" strokeWidth="2.5">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
