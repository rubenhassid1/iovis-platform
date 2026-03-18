"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, Star } from "lucide-react";
import { Musician } from "@/data/musicians";
import { useState } from "react";

export default function MusicianCard({ musician, variant = "default" }: { musician: Musician; variant?: "default" | "featured" }) {
  const [liked, setLiked] = useState(false);

  if (variant === "featured") {
    return (
      <Link href={`/musicians/${musician.id}`} className="group min-w-[280px] flex-shrink-0">
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-2">
          <Image
            src={musician.image}
            alt={musician.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="280px"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              setLiked(!liked);
            }}
            className="absolute top-3 right-3 z-10"
          >
            <Heart className={`w-6 h-6 drop-shadow-md ${liked ? "fill-primary text-primary" : "fill-white/70 text-white stroke-[1.5]"}`} />
          </button>
          {musician.spotsLabel && (
            <div className="absolute top-3 left-3 bg-white text-foreground text-xs font-semibold px-2.5 py-1 rounded-full">
              {musician.spotsLabel}
            </div>
          )}
        </div>
        <div className="flex justify-between items-start gap-1">
          <h3 className="text-sm font-semibold leading-tight line-clamp-2">{musician.name}</h3>
          <div className="flex items-center gap-1 flex-shrink-0">
            <Star className="w-3 h-3 fill-foreground" />
            <span className="text-sm">{musician.rating.toFixed(2)}</span>
          </div>
        </div>
        <p className="text-sm text-muted mt-0.5">{musician.type}</p>
        <p className="text-sm text-muted">{musician.availableDates[0]?.time || ""}</p>
        <p className="text-sm mt-0.5">
          <span className="font-semibold">From {musician.currency}{musician.pricePerHour}</span>
          <span className="text-muted"> / guest</span>
          {musician.reviewCount > 0 && <span className="text-muted"> · {musician.reviewCount.toLocaleString()} reviews</span>}
        </p>
      </Link>
    );
  }

  return (
    <Link href={`/musicians/${musician.id}`} className="group min-w-[280px] flex-shrink-0">
      <div className="relative aspect-[1/1] rounded-xl overflow-hidden mb-3">
        <Image
          src={musician.image}
          alt={musician.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="280px"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            setLiked(!liked);
          }}
          className="absolute top-3 right-3 z-10"
        >
          <Heart className={`w-6 h-6 drop-shadow-md ${liked ? "fill-primary text-primary" : "fill-white/70 text-white stroke-[1.5]"}`} />
        </button>
        {musician.spotsLabel && (
          <div className="absolute top-3 left-3 bg-white text-foreground text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
            {musician.spotsLabel}
          </div>
        )}
      </div>
      <div className="flex justify-between items-start gap-2">
        <div className="min-w-0">
          <h3 className="text-[15px] font-semibold truncate">{musician.type} in {musician.city}</h3>
          <p className="text-sm text-muted">{musician.genre}</p>
          <p className="text-sm mt-1">
            <span className="font-semibold">{musician.currency}{musician.pricePerHour} / hr</span>
            <span className="text-muted"> total</span>
          </p>
        </div>
        <div className="flex items-center gap-1 flex-shrink-0 pt-0.5">
          <Star className="w-3 h-3 fill-foreground" />
          <span className="text-sm">{musician.rating.toFixed(1)}</span>
        </div>
      </div>
    </Link>
  );
}
