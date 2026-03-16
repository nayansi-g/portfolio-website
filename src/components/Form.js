"use client";

import { useState } from "react";

export default function WebsiteForm() {
  const [details, setDetails] = useState("");

  return (
    <section className="bg-white pb-20 px-6 flex justify-center">
      <div className="bg-gray-50 rounded-2xl shadow-xl w-full max-w-lg p-8">

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-8">
          Get Started with Tubehelper Lite
        </h2>

        <form className="space-y-5">

          {/* Name */}
          <div>
            <label className="text-sm font-medium">Your Name *</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full mt-1 px-4 py-3 rounded-lg border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium">Email Address *</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full mt-1 px-4 py-3 rounded-lg border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm font-medium">Phone Number</label>
            <input
              type="tel"
              placeholder="+1 (555) 000-0000"
              className="w-full mt-1 px-4 py-3 rounded-lg border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Website Type */}
          <div>
            <label className="text-sm font-medium">Type of Website Needed</label>
            <select
              className="w-full mt-1 px-4 py-3 rounded-lg border border-orange-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option>Select a type</option>
              <option>Business Website</option>
              <option>Ecommerce Website</option>
              <option>Portfolio Website</option>
              <option>Landing Page</option>
            </select>
          </div>

          {/* Project Details */}
          <div>
            <label className="text-sm font-medium">
              Project Details <span className="text-gray-500">(Max 500 characters)</span>
            </label>

            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value.slice(0, 500))}
              placeholder="Tell us about your project..."
              className="w-full mt-1 px-4 py-3 rounded-lg border border-orange-200 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <p className="text-xs text-gray-500 mt-1">
              Characters remaining: {500 - details.length}
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-4 bg-gradient-to-r from-orange-500 to-orange-400 text-white py-3 rounded-full font-semibold hover:opacity-90 transition"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
}