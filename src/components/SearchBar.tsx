"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar({ variant = "full" }: { variant?: "full" | "compact" }) {
  const router = useRouter();
  const [where, setWhere] = useState("");
  const [when, setWhen] = useState("");
  const [who, setWho] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (where) params.set("city", where);
    if (when) params.set("date", when);
    if (who) params.set("genre", who);
    router.push(`/search?${params.toString()}`);
  };

  if (variant === "compact") {
    return (
      <button
        onClick={() => router.push("/search")}
        className="flex items-center gap-3 border border-gray-300 rounded-full px-4 py-2 shadow-sm hover:shadow-md transition-shadow"
      >
        <Search className="w-4 h-4" />
        <div className="text-sm">
          <span className="font-semibold">Anywhere</span>
          <span className="text-muted mx-1">·</span>
          <span className="text-muted">Any week</span>
          <span className="text-muted mx-1">·</span>
          <span className="text-muted">Any genre</span>
        </div>
      </button>
    );
  }

  return (
    <div className="w-full max-w-[850px] mx-auto">
      <div className="flex items-center border border-gray-300 rounded-full shadow-sm hover:shadow-md transition-shadow bg-white">
        <div className="flex-1 px-6 py-3 border-r border-gray-200">
          <label className="block text-xs font-bold">Where</label>
          <input
            type="text"
            placeholder="Search cities"
            className="w-full text-sm text-muted outline-none bg-transparent placeholder:text-muted"
            value={where}
            onChange={(e) => setWhere(e.target.value)}
          />
        </div>
        <div className="flex-1 px-6 py-3 border-r border-gray-200">
          <label className="block text-xs font-bold">When</label>
          <input
            type="text"
            placeholder="Add dates"
            className="w-full text-sm text-muted outline-none bg-transparent placeholder:text-muted"
            value={when}
            onChange={(e) => setWhen(e.target.value)}
          />
        </div>
        <div className="flex-1 px-6 py-3">
          <label className="block text-xs font-bold">Genre</label>
          <input
            type="text"
            placeholder="Search genres"
            className="w-full text-sm text-muted outline-none bg-transparent placeholder:text-muted"
            value={who}
            onChange={(e) => setWho(e.target.value)}
          />
        </div>
        <button
          onClick={handleSearch}
          className="bg-primary hover:bg-primary-dark text-white rounded-full p-3 mr-2 transition-colors"
        >
          <Search className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
