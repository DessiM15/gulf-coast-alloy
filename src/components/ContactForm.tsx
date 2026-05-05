"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl bg-green-50 border border-green-200 p-8 text-center">
        <svg
          className="mx-auto h-12 w-12 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="mt-4 text-lg font-semibold text-green-800">
          Thank you!
        </h3>
        <p className="mt-2 text-sm text-green-700">
          We&apos;ve received your message and will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-steel focus:ring-2 focus:ring-steel/20 outline-none transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-steel focus:ring-2 focus:ring-steel/20 outline-none transition-colors"
            placeholder="you@company.com"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-steel focus:ring-2 focus:ring-steel/20 outline-none transition-colors"
            placeholder="(555) 123-4567"
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-steel focus:ring-2 focus:ring-steel/20 outline-none transition-colors"
            placeholder="Your company"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-steel focus:ring-2 focus:ring-steel/20 outline-none transition-colors resize-y"
          placeholder="Tell us about your project or request a quote..."
        />
      </div>
      <button
        type="submit"
        className="w-full sm:w-auto rounded-lg bg-navy px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-navy-light transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}
