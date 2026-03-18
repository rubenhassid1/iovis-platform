"use client";

import Link from "next/link";
import { Search, Globe, Menu, Music } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-[1760px] mx-auto px-6 md:px-10 xl:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Music className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold text-primary hidden sm:block">iovis</span>
          </Link>

          {/* Center nav tabs */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-semibold text-foreground border-b-2 border-foreground pb-[26px] pt-[28px]">
              Musicians
            </Link>
            <Link href="/search" className="text-sm font-semibold text-muted hover:text-foreground pb-[26px] pt-[28px]">
              Experiences
            </Link>
            <Link href="/search?type=private" className="text-sm font-semibold text-muted hover:text-foreground pb-[26px] pt-[28px] relative">
              Private Events
              <span className="absolute -top-1 -right-6 text-[10px] bg-primary text-white px-1.5 py-0.5 rounded-full font-bold">NEW</span>
            </Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <Link href="#" className="hidden md:block text-sm font-semibold hover:bg-gray-100 rounded-full px-4 py-3">
              List your talent
            </Link>
            <button className="hidden md:flex items-center justify-center w-10 h-10 hover:bg-gray-100 rounded-full">
              <Globe className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-3 border border-gray-300 rounded-full pl-3 pr-2 py-1.5 hover:shadow-md transition-shadow"
            >
              <Menu className="w-4 h-4" />
              <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
                <svg viewBox="0 0 32 32" className="w-full h-full text-white fill-current">
                  <path d="M16 .7C7.56.7.7 7.56.7 16S7.56 31.3 16 31.3 31.3 24.44 31.3 16 24.44.7 16 .7zm0 28c-4.02 0-7.6-1.88-9.93-4.81a12.43 12.43 0 0 1 6.45-4.4A6.5 6.5 0 0 1 9.5 14a6.5 6.5 0 1 1 13 0 6.51 6.51 0 0 1-3.02 5.5 12.42 12.42 0 0 1 6.45 4.4A12.67 12.67 0 0 1 16 28.7z" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="absolute right-6 top-[72px] w-64 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
          <Link href="/search" className="block px-4 py-3 hover:bg-gray-100 text-sm font-semibold">Sign up</Link>
          <Link href="/search" className="block px-4 py-3 hover:bg-gray-100 text-sm">Log in</Link>
          <div className="border-t border-gray-200 my-1"></div>
          <Link href="#" className="block px-4 py-3 hover:bg-gray-100 text-sm">List your talent</Link>
          <Link href="#" className="block px-4 py-3 hover:bg-gray-100 text-sm">Help Center</Link>
        </div>
      )}
    </header>
  );
}
