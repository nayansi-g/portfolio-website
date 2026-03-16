"use client";

import { Facebook, Twitter, Instagram, Linkedin, Play } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F4EFE6] py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">

        {/* Top Badge */}
        <div className="flex justify-center mb-6">
          <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow text-orange-600 font-medium">
            <Play size={16} />
            Tubehelper Lite
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Want To Explore More Of Our Work?
        </h2>

        {/* Description */}
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Visit the Tubehelper Lite main website to discover our full range of
          services and portfolio
        </p>

        {/* CTA Button */}
        <div className="mt-8">
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full font-medium shadow hover:opacity-90 transition">
            Visit Tubehelper Lite Website
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-orange-200 my-12"></div>

        {/* Logo */}
        <div className="flex justify-center items-center gap-2 text-orange-600 font-semibold mb-4">
          <Play size={18} />
          Tubehelper Lite
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-600 mb-6">
          © 2024 Tubehelper Lite. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-gray-700">
          <Facebook size={18} className="cursor-pointer hover:text-orange-500"/>
          <Twitter size={18} className="cursor-pointer hover:text-orange-500"/>
          <Instagram size={18} className="cursor-pointer hover:text-orange-500"/>
          <Linkedin size={18} className="cursor-pointer hover:text-orange-500"/>
        </div>
      </div>
    </footer>
  );
}