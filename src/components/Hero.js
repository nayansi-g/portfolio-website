"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Hero() {
  const floatSlow = {
    duration: 8,
    repeat: Infinity,
    repeatType: "mirror",
    ease: "easeInOut",
  };

  const floatMedium = {
    duration: 5,
    repeat: Infinity,
    repeatType: "mirror",
    ease: "easeInOut",
  };

  const floatFast = {
    duration: 3.5,
    repeat: Infinity,
    repeatType: "mirror",
    ease: "easeInOut",
  };

  return (
    <div className="overflow-x-hidden bg-[#f6f3ff]">
      <main>
        <section
          className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 pb-20 pt-12 text-center"
          aria-labelledby="hero-title"
        >
          {/* Ambient blobs */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(142,120,255,0.35),transparent_65%)] blur-2xl"
            animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
            transition={floatSlow}
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -right-28 bottom-10 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,178,120,0.35),transparent_65%)] blur-2xl"
            animate={{ scale: [1, 1.06, 1], opacity: [0.7, 1, 0.7] }}
            transition={floatSlow}
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute right-16 top-24 h-6 w-6 rounded-full bg-[#ffe59a] shadow-[0_0_12px_rgba(255,198,85,0.8)]"
            animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
            transition={floatMedium}
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute left-12 top-40 h-4 w-4 rounded-full bg-[#9bb7ff]"
            animate={{ y: [0, 8, 0], x: [0, -6, 0] }}
            transition={floatFast}
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute left-10 bottom-44 h-3 w-3 rounded-full bg-[#ff8aa0]"
            animate={{ y: [0, -6, 0], x: [0, 5, 0] }}
            transition={floatFast}
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute right-24 bottom-32 h-10 w-10 rounded-full bg-[#f7d7ff] opacity-70 blur-[1px]"
            animate={{ y: [0, 10, 0], x: [0, -8, 0], scale: [1, 1.05, 1] }}
            transition={floatMedium}
          />

          {/* Rocket */}
          <motion.div
            className="absolute top-10 left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full bg-white shadow-lg"
            animate={{ y: [0, 50, 0], rotate: [0, 2, 0] }}
            transition={floatMedium}
          >
            <svg
              className="h-10 w-10"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32 6c10 8 14 18 14 30 0 6-2 12-6 18-4-2-8-3-8-3s-4 1-8 3c-4-6-6-12-6-18 0-12 4-22 14-30Z"
                fill="#ff8a00"
              />
              <circle cx="32" cy="26" r="6" fill="#fff2d6" />
              <path d="M24 52 18 60l10-4 4-8-8 4Z" fill="#ff5d5d" />
              <path d="M40 52 46 60l-10-4-4-8 8 4Z" fill="#ff5d5d" />
            </svg>
          </motion.div>

          {/* Pill */}
          <div className="mt-16 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#ff7a00] shadow-md">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ff7a00] text-white">
              <svg
                aria-hidden="true"
                className="h-3 w-3"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M4 3.5v9l8-4.5-8-4.5Z" />
              </svg>
            </span>
            Tubehelper Lite
          </div>

          {/* Headline */}
          <h1
            id="hero-title"
            className="mt-6 max-w-3xl text-center text-3xl font-bold leading-tight text-[#1b1f2a] md:text-4xl lg:text-6xl"
          >
            Websites That Don&apos;t Just Look{" "}
            <span className="text-[#ff7a00]">Beautiful</span> — They{" "}
            <span className="text-[#ff7a00]">Generate Business</span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-[#6b6f7a] md:text-base">
            Tubehelper Lite designs high-performance, visually stunning, and
            conversion-focused websites that turn visitors into customers.
          </p>

          {/* Feature cards */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {[
              "5+ Years Experience",
              "Professional Builders",
              "Conversion Focused",
            ].map((label) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-[#2b2f3a] shadow-md shadow-black/5"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#fff1e6] text-[#ff7a00]">
                 <Star className=" w-4 h-4"/>
                </span>
                {label}
              </div>
            ))}
            <div className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-[#2b2f3a] shadow-md shadow-black/5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#fff1e6] text-[#ff7a00]">
               <Star className=" w-4 h-4" />
              </span>
              Fast & SEO Optimized
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <button className="rounded-full bg-[#ff7a00] px-7 py-[14px] text-sm font-semibold text-white shadow-lg shadow-orange-200">
              View Our Work
            </button>
            <div className="flex flex-col items-center gap-2">
              <button className="rounded-full border-2 border-[#ff7a00] px-7 py-3 text-sm font-semibold text-[#ff7a00] shadow-sm">
                Get Your Website
              </button>
            </div>
          </div>

          {/* Decorative teddy */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-16 right-10 h-14 w-14 rounded-full bg-[#ffb37a] shadow-inner"
            animate={{ y: [0, -100, 0], rotate: [0, -1, 0] }}
            transition={floatMedium}
          >
            <div className="absolute left-2 top-2 h-4 w-4 rounded-full bg-[#ffc89f]" />
            <div className="absolute right-2 top-2 h-4 w-4 rounded-full bg-[#ffc89f]" />
            <div className="absolute left-1/2 top-6 h-5 w-5 -translate-x-1/2 rounded-full bg-[#ffcfab]" />
          </motion.div>
        </section>
      </main>
    </div>
  );
}
