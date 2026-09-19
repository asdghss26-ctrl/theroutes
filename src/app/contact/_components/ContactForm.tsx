"use client";

import { useState, useCallback } from "react";
import { destinations } from "@/lib/data";
import { DURATION_LABELS, ALL_DURATIONS } from "@/lib/types";

type FormStatus = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  phone: string;
  email: string;
  destination: string;
  duration: string;
  travellers: string;
  travelDate: string;
  travelType: string;
  message: string;
}

const INITIAL_FORM: FormData = {
  name: "",
  phone: "",
  email: "",
  destination: "",
  duration: "",
  travellers: "",
  travelDate: "",
  travelType: "",
  message: "",
};

const TRAVEL_TYPES = [
  "Hill Station",
  "Beach",
  "Heritage",
  "Nature",
  "Wildlife",
  "Adventure",
  "Family",
  "Couple",
];

const TRAVELLERS_OPTIONS = ["1", "2", "3", "4", "5-10", "10+"];

const inputClass =
  "w-full px-4 py-3 text-sm border border-border rounded-lg text-navy placeholder:text-muted focus:outline-none focus:border-navy transition-colors bg-white";
const labelClass = "block text-xs font-semibold text-navy mb-1.5 uppercase tracking-wide";
const errorClass = "text-[11px] text-red-500 mt-1";

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const set = useCallback((field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  }, []);

  const validate = (): boolean => {
    const errs: Partial<FormData> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.phone.trim()) errs.phone = "Phone is required";
    else if (!/^\+?[\d\s\-()]{7,}$/.test(form.phone))
      errs.phone = "Enter a valid phone number";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Enter a valid email address";
    if (!form.destination) errs.destination = "Please select a destination";
    if (!form.travellers) errs.travellers = "Please select number of travellers";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    // TODO: Replace with real API endpoint
    await new Promise((resolve) => setTimeout(resolve, 1200));

    // Simulate success (no real submission)
    setStatus("success");
  };

  const reset = () => {
    setForm(INITIAL_FORM);
    setErrors({});
    setStatus("idle");
  };

  if (status === "success") {
    return (
      <div className="bg-white rounded-2xl border border-border p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto mb-5">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#45882D"
            strokeWidth="2"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h2 className="text-navy font-bold text-2xl mb-3">Enquiry Received!</h2>
        <p className="text-muted text-base leading-relaxed mb-2 max-w-md mx-auto">
          Thank you, <strong className="text-navy">{form.name}</strong>. We&apos;ve
          received your enquiry for{" "}
          <strong className="text-navy">{form.destination}</strong>.
        </p>
        <p className="text-muted text-sm mb-8">
          Our team will be in touch within 24 hours to plan your journey.
        </p>
        <button
          type="button"
          onClick={reset}
          className="text-sm font-semibold text-orange hover:underline"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl border border-border p-6 lg:p-8"
      noValidate
    >
      <h2 className="text-navy text-xl font-bold mb-6 tracking-tight">
        Your Trip Details
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className={labelClass}>
            Name <span className="text-orange">*</span>
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your full name"
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            className={inputClass}
            autoComplete="name"
          />
          {errors.name && <p className={errorClass}>{errors.name}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone <span className="text-orange">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+91 98765 43210"
            value={form.phone}
            onChange={(e) => set("phone", e.target.value)}
            className={inputClass}
            autoComplete="tel"
          />
          {errors.phone && <p className={errorClass}>{errors.phone}</p>}
        </div>

        {/* Email */}
        <div className="sm:col-span-2">
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-orange">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@email.com"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            className={inputClass}
            autoComplete="email"
          />
          {errors.email && <p className={errorClass}>{errors.email}</p>}
        </div>

        {/* Destination */}
        <div>
          <label htmlFor="destination" className={labelClass}>
            Destination <span className="text-orange">*</span>
          </label>
          <select
            id="destination"
            value={form.destination}
            onChange={(e) => set("destination", e.target.value)}
            className={inputClass}
          >
            <option value="">Select a destination</option>
            {destinations.map((d) => (
              <option key={d.id} value={d.name}>
                {d.name} ({d.state})
              </option>
            ))}
          </select>
          {errors.destination && (
            <p className={errorClass}>{errors.destination}</p>
          )}
        </div>

        {/* Duration */}
        <div>
          <label htmlFor="duration" className={labelClass}>
            Preferred Duration
          </label>
          <select
            id="duration"
            value={form.duration}
            onChange={(e) => set("duration", e.target.value)}
            className={inputClass}
          >
            <option value="">Any duration</option>
            {ALL_DURATIONS.map((d) => (
              <option key={d} value={d}>
                {DURATION_LABELS[d]}
              </option>
            ))}
          </select>
        </div>

        {/* Travellers */}
        <div>
          <label htmlFor="travellers" className={labelClass}>
            No. of Travellers <span className="text-orange">*</span>
          </label>
          <select
            id="travellers"
            value={form.travellers}
            onChange={(e) => set("travellers", e.target.value)}
            className={inputClass}
          >
            <option value="">Select</option>
            {TRAVELLERS_OPTIONS.map((o) => (
              <option key={o} value={o}>
                {o} {Number(o) === 1 ? "person" : "people"}
              </option>
            ))}
          </select>
          {errors.travellers && (
            <p className={errorClass}>{errors.travellers}</p>
          )}
        </div>

        {/* Travel Date */}
        <div>
          <label htmlFor="travelDate" className={labelClass}>
            Preferred Travel Date
          </label>
          <input
            id="travelDate"
            type="date"
            value={form.travelDate}
            onChange={(e) => set("travelDate", e.target.value)}
            className={inputClass}
            min={new Date().toISOString().split("T")[0]}
          />
        </div>

        {/* Travel Type */}
        <div className="sm:col-span-2">
          <label htmlFor="travelType" className={labelClass}>
            Travel Type
          </label>
          <select
            id="travelType"
            value={form.travelType}
            onChange={(e) => set("travelType", e.target.value)}
            className={inputClass}
          >
            <option value="">Select travel type</option>
            {TRAVEL_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Tell us about your trip expectations, special requirements, or any questions..."
            value={form.message}
            onChange={(e) => set("message", e.target.value)}
            className={`${inputClass} resize-none`}
          />
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 bg-orange text-white font-semibold py-4 rounded-lg hover:bg-orange/90 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-150 text-base"
      >
        {status === "loading" ? (
          <>
            <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
              <path d="M12 2a10 10 0 0 1 10 10" />
            </svg>
            Sending...
          </>
        ) : (
          <>
            Request My Trip Plan
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
          </>
        )}
      </button>

      <p className="text-center text-[11px] text-muted mt-4">
        We typically respond within 24 hours.
      </p>
    </form>
  );
}
