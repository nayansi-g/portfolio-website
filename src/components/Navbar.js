"use client";

import { useEffect, useState } from "react";
import { Play } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-5 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2 text-orange-500 font-semibold text-lg">
          <div className="bg-orange-500 text-white p-1 rounded">
            <Play size={16} />
          </div>
          Tubehelper Lite
        </div>

        {/* CTA Button */}
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full text-sm font-medium shadow">
          Get Your Website
        </button>

      </div>
    </nav>
  );
}