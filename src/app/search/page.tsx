"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal, Music } from "lucide-react";
import Link from "next/link";
import MusicianCard from "@/components/MusicianCard";
import { musicians, genres, cities } from "@/data/musicians";
import { Suspense } from "react";

function SearchContent() {
  const searchParams = useSearchParams();
  const initialCity = searchParams.get("city") || "";
  const initialGenre = searchParams.get("genre") || "";

  const [selectedCity, setSelectedCity] = useState(initialCity);
  const [selectedGenre, setSelectedGenre] = useState(initialGenre);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMusicians = useMemo(() => {
    return musicians.filter((m) => {
      if (selectedCity && m.city !== selectedCity) return false;
      if (selectedGenre && m.genre !== selectedGenre) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        return (
          m.name.toLowerCase().includes(q) ||
          m.type.toLowerCase().includes(q) ||
          m.genre.toLowerCase().includes(q) ||
          m.city.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [selectedCity, selectedGenre, searchQuery]);

  return (
    <div>
      {/* Search header */}
      <div className="sticky top-20 z-40 bg-white border-b border-gray-200">
        <div className="max-w-[1760px] mx-auto px-6 md:px-10 xl:px-20">
          {/* Top bar with search context */}
          <div className="flex items-center gap-3 py-3">
            <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-full px-4 py-2.5 shadow-sm flex-1 max-w-md">
              <Music className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold">
                {selectedCity || "All Israel"}
              </span>
              <span className="text-muted text-sm">·</span>
              <span className="text-sm text-muted">
                {selectedGenre || "All genres"}
              </span>
              <span className="text-muted text-sm">·</span>
              <span className="text-sm text-muted">Any date</span>
            </div>
            <button className="p-2.5 border border-gray-300 rounded-full hover:shadow-md">
              <Search className="w-4 h-4" />
            </button>
          </div>

          {/* Filter chips */}
          <div className="flex items-center gap-2 py-3 overflow-x-auto hide-scrollbar">
            {/* Genre filters */}
            <button
              onClick={() => setSelectedGenre("")}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-medium border whitespace-nowrap transition-colors ${
                !selectedGenre
                  ? "bg-foreground text-white border-foreground"
                  : "bg-white text-foreground border-gray-300 hover:border-foreground"
              }`}
            >
              All genres
            </button>
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(selectedGenre === genre ? "" : genre)}
                className={`px-4 py-2.5 rounded-full text-sm font-medium border whitespace-nowrap transition-colors ${
                  selectedGenre === genre
                    ? "bg-foreground text-white border-foreground"
                    : "bg-white text-foreground border-gray-300 hover:border-foreground"
                }`}
              >
                {genre}
              </button>
            ))}
            <div className="w-px h-8 bg-gray-300 mx-1 flex-shrink-0"></div>
            {/* City filter */}
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="px-4 py-2.5 rounded-full text-sm font-medium border border-gray-300 bg-white hover:border-foreground cursor-pointer outline-none"
            >
              <option value="">All cities</option>
              {cities.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
            {/* More filters button */}
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium border border-gray-300 hover:border-foreground whitespace-nowrap">
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-[1760px] mx-auto px-6 md:px-10 xl:px-20 py-8">
        {/* Search input */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <input
              type="text"
              placeholder="Search musicians, genres, venues..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full text-sm outline-none focus:border-foreground focus:shadow-sm"
            />
          </div>
        </div>

        {filteredMusicians.length === 0 ? (
          <div className="text-center py-20">
            <Music className="w-12 h-12 text-muted mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No musicians found</h3>
            <p className="text-muted text-sm">Try adjusting your filters or search terms.</p>
          </div>
        ) : (
          <>
            <p className="text-sm text-muted mb-6">
              {filteredMusicians.length} musician{filteredMusicians.length !== 1 ? "s" : ""} available
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
              {filteredMusicians.map((m) => (
                <MusicianCard key={m.id} musician={m} variant="featured" />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-muted">Loading...</div>}>
      <SearchContent />
    </Suspense>
  );
}
