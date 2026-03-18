"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Star, Share, ArrowLeft, BadgeCheck, Clock, MessageCircle, Calendar, Check } from "lucide-react";
import { Musician } from "@/data/musicians";
import { useState } from "react";

export default function MusicianDetail({ musician }: { musician: Musician }) {
  const [liked, setLiked] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(0);

  return (
    <div className="max-w-[1120px] mx-auto px-6 md:px-10 py-6">
      <Link href="/search" className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground mb-4">
        <ArrowLeft className="w-4 h-4" />
        Back to search
      </Link>

      {/* Photo Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 rounded-xl overflow-hidden mb-8">
        <div className="md:col-span-2 md:row-span-2 relative aspect-[4/3] md:aspect-auto">
          <Image src={musician.images[0]} alt={musician.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" priority />
        </div>
        {musician.images.slice(1, 5).map((img, i) => (
          <div key={i} className="relative aspect-[4/3] hidden md:block">
            <Image src={img} alt={`${musician.name} photo ${i + 2}`} fill className="object-cover" sizes="25vw" />
          </div>
        ))}
      </div>

      {/* Content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">
        {/* Left column */}
        <div>
          <div className="flex items-start justify-between gap-4 mb-2">
            <h1 className="text-[26px] font-semibold leading-tight">{musician.name}</h1>
            <div className="flex items-center gap-3 flex-shrink-0">
              <button className="flex items-center gap-1.5 text-sm font-semibold underline">
                <Share className="w-4 h-4" /> Share
              </button>
              <button onClick={() => setLiked(!liked)} className="flex items-center gap-1.5 text-sm font-semibold underline">
                <Heart className={`w-4 h-4 ${liked ? "fill-primary text-primary" : ""}`} /> Save
              </button>
            </div>
          </div>

          <p className="text-lg text-muted mb-3">{musician.type} · {musician.genre}</p>

          <div className="flex flex-wrap items-center gap-3 text-sm mb-6">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-foreground" />
              <span className="font-semibold">{musician.rating.toFixed(2)}</span>
              <span className="text-muted">({musician.reviewCount} reviews)</span>
            </div>
            <span className="text-muted">·</span>
            <span>{musician.city}</span>
            {musician.verified && (
              <>
                <span className="text-muted">·</span>
                <span className="flex items-center gap-1 text-primary font-medium">
                  <BadgeCheck className="w-4 h-4" /> Verified
                </span>
              </>
            )}
            {musician.bookingsCount && (
              <>
                <span className="text-muted">·</span>
                <span className="font-medium">{musician.bookingsCount}+ bookings</span>
              </>
            )}
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 py-5 border-y border-gray-200 mb-6">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <Image src={musician.avatar} alt={musician.name} fill className="object-cover" sizes="48px" />
              </div>
              <div>
                <p className="text-sm font-semibold">{musician.experience} experience</p>
                <p className="text-xs text-muted">{musician.languages.join(", ")}</p>
              </div>
            </div>
            {musician.responseTime && (
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-muted" />
                <div>
                  <p className="text-sm font-semibold">Responds {musician.responseTime.toLowerCase()}</p>
                </div>
              </div>
            )}
          </div>

          {/* Bio */}
          <div className="mb-6 pb-6 border-b border-gray-200">
            <h2 className="text-[22px] font-semibold mb-4">About</h2>
            {musician.longBio.split("\n\n").map((p, i) => (
              <p key={i} className="text-[15px] leading-relaxed mb-4">{p}</p>
            ))}
          </div>

          {/* Event types */}
          <div className="mb-6 pb-6 border-b border-gray-200">
            <h2 className="text-[22px] font-semibold mb-4">Ideal for</h2>
            <div className="flex flex-wrap gap-2">
              {musician.eventTypes.map((et) => (
                <span key={et} className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">{et}</span>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="mb-6 pb-6 border-b border-gray-200">
            <h2 className="text-[22px] font-semibold mb-4">Why book {musician.name.split(" ")[0]}</h2>
            {musician.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-4 mb-5 last:mb-0">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-xl flex-shrink-0">{h.icon}</div>
                <div>
                  <p className="font-semibold text-[15px]">{h.title}</p>
                  <p className="text-sm text-muted mt-0.5">{h.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Packages (mobile view) */}
          <div className="lg:hidden mb-6 pb-6 border-b border-gray-200">
            <h2 className="text-[22px] font-semibold mb-4">Packages</h2>
            <div className="space-y-3">
              {musician.packages.map((pkg, i) => (
                <div key={i} className={`p-4 rounded-xl border-2 cursor-pointer transition-colors ${selectedPackage === i ? "border-primary bg-red-50" : "border-gray-200 hover:border-gray-400"}`} onClick={() => setSelectedPackage(i)}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold">{pkg.name}</h3>
                      <p className="text-sm text-muted">{pkg.duration}</p>
                    </div>
                    <p className="text-lg font-semibold">{musician.currency}{pkg.price.toLocaleString()}</p>
                  </div>
                  <p className="text-sm text-muted mb-3">{pkg.description}</p>
                  <ul className="space-y-1">
                    {pkg.includes.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm"><Check className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-lg transition-colors">
              Request to Book
            </button>
          </div>

          {/* Reviews */}
          <div className="py-6">
            <div className="flex items-center gap-2 mb-6">
              <Star className="w-5 h-5 fill-foreground" />
              <h2 className="text-[22px] font-semibold">{musician.rating.toFixed(2)} · {musician.reviewCount.toLocaleString()} reviews</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {musician.reviews.map((review, i) => (
                <div key={i}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                      <Image src={review.avatar} alt={review.name} fill className="object-cover" sizes="40px" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{review.name}</p>
                      <p className="text-xs text-muted">{review.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mb-1">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <Star key={j} className="w-3 h-3 fill-foreground" />
                    ))}
                    <span className="text-xs text-muted ml-1">{review.date}</span>
                  </div>
                  <p className="text-sm leading-relaxed">{review.text}</p>
                </div>
              ))}
            </div>
            <button className="mt-6 px-6 py-3 border border-foreground rounded-lg text-sm font-semibold hover:bg-gray-100">Show all reviews</button>
          </div>
        </div>

        {/* Right column - Booking widget */}
        <div className="hidden lg:block">
          <div className="sticky top-24 border border-gray-200 rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Choose a package</h3>

            {/* Package selector */}
            <div className="space-y-2 mb-4">
              {musician.packages.map((pkg, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedPackage(i)}
                  className={`w-full text-left p-3 rounded-lg border-2 transition-colors ${
                    selectedPackage === i ? "border-primary bg-red-50" : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-semibold">{pkg.name}</p>
                      <p className="text-xs text-muted">{pkg.duration}</p>
                    </div>
                    <p className="font-semibold">{musician.currency}{pkg.price.toLocaleString()}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* Selected package details */}
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <p className="text-sm font-semibold mb-2">{musician.packages[selectedPackage].name} includes:</p>
              <ul className="space-y-1.5">
                {musician.packages[selectedPackage].includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="w-3.5 h-3.5 text-green-600 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Date picker */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1.5">Event date</label>
              <input type="date" className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm outline-none focus:border-foreground" />
            </div>

            {/* CTA */}
            <button className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-lg transition-colors mb-3">
              Request to Book
            </button>
            <p className="text-xs text-center text-muted mb-4">You won&apos;t be charged yet</p>

            {/* Total */}
            <div className="flex justify-between items-center pt-4 border-t border-gray-200">
              <span className="font-semibold">Total</span>
              <span className="font-semibold text-lg">{musician.currency}{musician.packages[selectedPackage].price.toLocaleString()}</span>
            </div>

            {/* Contact */}
            <button className="w-full mt-4 flex items-center justify-center gap-2 py-2.5 border border-gray-300 rounded-lg text-sm font-semibold hover:bg-gray-50">
              <MessageCircle className="w-4 h-4" />
              Contact {musician.name.split(" ")[0]}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
