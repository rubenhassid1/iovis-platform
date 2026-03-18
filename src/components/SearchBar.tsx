"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { eventTypes, cities } from "@/data/musicians";

export default function SearchBar() {
  const router = useRouter();
  const [eventType, setEventType] = useState("");
  const [date, setDate] = useState("");
  const [city, setCity] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (eventType) params.set("event", eventType);
    if (date) params.set("date", date);
    if (city) params.set("city", city);
    router.push(`/search?${params.toString()}`);
  };

  return (
    <div className="w-full max-w-[850px] mx-auto">
      <div className="flex items-center border border-gray-300 rounded-full shadow-sm hover:shadow-md transition-shadow bg-white">
        <div className="flex-1 px-6 py-3 border-r border-gray-200">
          <label className="block text-xs font-bold">Event Type</label>
          <select
            className="w-full text-sm text-muted outline-none bg-transparent"
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
          >
            <option value="">All events</option>
            {eventTypes.map((et) => (
              <option key={et} value={et}>{et}</option>
            ))}
          </select>
        </div>
        <div className="flex-1 px-6 py-3 border-r border-gray-200">
          <label className="block text-xs font-bold">Date</label>
          <input
            type="date"
            className="w-full text-sm text-muted outline-none bg-transparent"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="flex-1 px-6 py-3">
          <label className="block text-xs font-bold">City</label>
          <select
            className="w-full text-sm text-muted outline-none bg-transparent"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="">All Israel</option>
            {cities.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
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
