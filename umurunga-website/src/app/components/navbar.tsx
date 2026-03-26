"use client";
// Navbar Component
// This is the top navigation bar with logo, links, and action buttons.

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Heart } from "lucide-react";
import { siteMedia } from "@/lib/siteMedia";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Mission", href: "/mission" },
    { label: "Vision", href: "/vision" },
    { label: "Pillars", href: "/pillars" },
    { label: "Values", href: "/values" },
    { label: "Team", href: "/team" },
    { label: "Activities", href: "/activities" },
    { label: "Gallery", href: "/gallery" },
  ];

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 min-w-0 shrink">
          <Image
            src={siteMedia.logo}
            alt="Umurunga Family"
            width={180}
            height={56}
            className="h-10 sm:h-12 w-auto max-w-[min(200px,55vw)] object-contain object-left"
            priority
          />
          <div className="leading-tight hidden sm:block">
            <span className="font-bold text-[#0064A2] text-lg block">Umurunga</span>
            <span className="font-bold text-[#0DB14B] text-sm block -mt-1">Family</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-black hover:text-[#0064A2] transition-colors text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/join"
            className="px-5 py-2 border-2 border-[#0064A2] text-[#0064A2] rounded-full text-sm font-medium hover:bg-[#0064A2] hover:text-white transition-colors"
          >
            Join Us
          </Link>
          <Link
            href="/donate"
            className="px-5 py-2 bg-[#0064A2] text-white rounded-full text-sm font-medium hover:bg-[#0064A2]/90 transition-colors flex items-center gap-2"
          >
            <Heart className="h-4 w-4" />
            Donate
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden p-2"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block text-black hover:text-[#0064A2] text-sm font-medium py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-3 pt-3 border-t">
            <Link href="/join" className="px-4 py-2 border-2 border-[#0064A2] text-[#0064A2] rounded-full text-sm font-medium">
              Join Us
            </Link>
            <Link href="/donate" className="px-4 py-2 bg-[#0064A2] text-white rounded-full text-sm font-medium flex items-center gap-2">
              <Heart className="h-4 w-4" /> Donate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
