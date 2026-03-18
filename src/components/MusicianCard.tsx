"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, Star, BadgeCheck } from "lucide-react";
import { Musician } from "@/data/musicians";
import { useState } from "react";

export default function MusicianCard({ musician }: { musician: Musician }) {
  const [liked, setLiked] = useState(false);
  const lowestPrice = Math.min(...musician.packages.map((p) => p.price));

  return (
    <Link href={`/musicians/${musician.id}`} className="group min-w-[280px] flex-shrink-0">
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3">
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
        {musician.verified && (
          <div className="absolute top-3 left-3 bg-white text-foreground text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
            <BadgeCheck className="w-3.5 h-3.5 text-primary" />
            Verified
          </div>
        )}
      </div>
      <div className="flex justify-between items-start gap-2">
        <div className="min-w-0">
          <h3 className="text-[15px] font-semibold truncate">{musician.name}</h3>
          <p className="text-sm text-muted">{musician.type} · {musician.city}</p>
          <p className="text-sm text-muted mt-0.5">
            {musician.eventTypes.slice(0, 2).join(", ")}
          </p>
          <p className="text-sm mt-1">
            From <span className="font-semibold">{musician.currency}{lowestPrice.toLocaleString()}</span>
            <span className="text-muted"> / package</span>
          </p>
        </div>
        <div className="flex items-center gap-1 flex-shrink-0 pt-0.5">
          <Star className="w-3 h-3 fill-foreground" />
          <span className="text-sm font-medium">{musician.rating.toFixed(2)}</span>
          <span className="text-xs text-muted">({musician.reviewCount})</span>
        </div>
      </div>
    </Link>
  );
}
