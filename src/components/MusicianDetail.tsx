"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Star, Share, MapPin, ArrowLeft, CheckCircle } from "lucide-react";
import { Musician } from "@/data/musicians";
import { useState } from "react";

export default function MusicianDetail({ musician }: { musician: Musician }) {
  const [liked, setLiked] = useState(false);
  const [showAllDates, setShowAllDates] = useState(false);

  const visibleDates = showAllDates ? musician.availableDates : musician.availableDates.slice(0, 5);

  return (
    <div className="max-w-[1120px] mx-auto px-6 md:px-10 py-6">
      {/* Back button */}
      <Link href="/search" className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground mb-4">
        <ArrowLeft className="w-4 h-4" />
        Back to search
      </Link>

      {/* Photo Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 rounded-xl overflow-hidden mb-8">
        <div className="md:col-span-2 md:row-span-2 relative aspect-[4/3] md:aspect-auto">
          <Image
            src={musician.images[0]}
            alt={musician.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        {musician.images.slice(1, 5).map((img, i) => (
          <div key={i} className="relative aspect-[4/3] hidden md:block">
            <Image
              src={img}
              alt={`${musician.name} photo ${i + 2}`}
              fill
              className="object-cover"
              sizes="25vw"
            />
          </div>
        ))}
      </div>

      {/* Content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">
        {/* Left column */}
        <div>
          {/* Title section */}
          <h1 className="text-[26px] font-semibold leading-tight mb-2">{musician.name}</h1>
          <p className="text-base text-muted mb-3">{musician.description}</p>

          <div className="flex items-center gap-2 text-sm mb-4">
            <Star className="w-4 h-4 fill-foreground" />
            <span className="font-semibold">{musician.rating.toFixed(2)}</span>
            <span className="text-muted">·</span>
            <span className="underline font-semibold">{musician.reviewCount.toLocaleString()} reviews</span>
            <span className="text-muted">·</span>
            <span>{musician.city}</span>
            <span className="text-muted">·</span>
            <span>{musician.genre}</span>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-4 pb-6 border-b border-gray-200">
            <button className="flex items-center gap-2 text-sm font-semibold underline">
              <Share className="w-4 h-4" />
              Share
            </button>
            <button
              onClick={() => setLiked(!liked)}
              className="flex items-center gap-2 text-sm font-semibold underline"
            >
              <Heart className={`w-4 h-4 ${liked ? "fill-primary text-primary" : ""}`} />
              Save
            </button>
          </div>

          {/* Host info */}
          <div className="py-6 border-b border-gray-200">
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <Image src={musician.hostImage} alt={musician.hostName} fill className="object-cover" sizes="48px" />
              </div>
              <div>
                <p className="font-semibold">Hosted by {musician.hostName}</p>
                <p className="text-sm text-muted">{musician.hostTitle}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <MapPin className="w-4 h-4 text-muted flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold">{musician.meetingPoint.split(",")[0]}</p>
                <p className="text-sm text-muted">{musician.meetingPoint}</p>
              </div>
            </div>

            {musician.reviews[0] && (
              <div className="flex items-start gap-3 mt-4">
                <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold">Recent guest review</p>
                  <p className="text-sm text-muted">&ldquo;{musician.reviews[0].text.slice(0, 80)}...&rdquo;</p>
                </div>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="py-6 border-b border-gray-200">
            <h2 className="text-[22px] font-semibold mb-4">What you&apos;ll experience</h2>
            {musician.longDescription.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-[15px] leading-relaxed text-foreground mb-4">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Highlights */}
          <div className="py-6 border-b border-gray-200">
            {musician.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-4 mb-6 last:mb-0">
                <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center text-2xl flex-shrink-0">
                  {h.icon}
                </div>
                <div>
                  <p className="font-semibold text-[15px]">{h.title}</p>
                  <p className="text-sm text-muted mt-0.5">{h.description}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted py-4 border-b border-gray-200">
            This experience is hosted in English.
          </p>

          {/* Reviews */}
          <div className="py-6">
            <div className="flex items-center gap-2 mb-6">
              <Star className="w-5 h-5 fill-foreground" />
              <h2 className="text-[22px] font-semibold">
                {musician.rating.toFixed(2)} · {musician.reviewCount.toLocaleString()} reviews
              </h2>
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

            <button className="mt-6 px-6 py-3 border border-foreground rounded-lg text-sm font-semibold hover:bg-gray-100">
              Show all reviews
            </button>
          </div>

          {/* Where we'll meet */}
          <div className="py-6 border-t border-gray-200">
            <h2 className="text-[22px] font-semibold mb-4">Where you&apos;ll be</h2>
            <p className="text-sm mb-2 font-semibold">{musician.meetingPoint.split(",")[0]}</p>
            <p className="text-sm text-muted">{musician.meetingPoint}</p>
            {/* Map placeholder */}
            <div className="mt-4 rounded-xl bg-gray-100 h-[300px] flex items-center justify-center">
              <div className="text-center text-muted">
                <MapPin className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm">Map view</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column - Booking widget */}
        <div>
          <div className="sticky top-24 border border-gray-200 rounded-xl shadow-lg p-6">
            <div className="flex items-baseline justify-between mb-2">
              <div>
                <span className="text-[22px] font-semibold">From {musician.currency}{musician.pricePerHour}</span>
                <span className="text-muted text-sm"> / guest</span>
              </div>
              <button className="bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-5 py-3 rounded-lg transition-colors">
                Show dates
              </button>
            </div>
            <p className="text-sm text-green-600 font-medium mb-6">Free cancellation</p>

            {/* Available dates */}
            <div className="space-y-2">
              {visibleDates.map((date, i) => (
                <button
                  key={i}
                  disabled={date.spotsLeft === 0}
                  className={`w-full flex items-center justify-between p-4 rounded-xl border transition-colors text-left ${
                    date.spotsLeft === 0
                      ? "border-gray-200 opacity-50 cursor-not-allowed line-through"
                      : "border-gray-200 hover:border-foreground cursor-pointer"
                  }`}
                >
                  <div>
                    <p className="text-sm font-semibold">{date.date}</p>
                    <p className="text-sm text-muted">{date.time}</p>
                  </div>
                  <div className="text-right">
                    {date.spotsLeft === 0 ? (
                      <span className="text-sm text-muted">Sold out</span>
                    ) : date.spotsLeft <= 3 ? (
                      <span className="text-sm text-primary font-semibold">{date.spotsLeft} spot{date.spotsLeft > 1 ? "s" : ""} left</span>
                    ) : (
                      <span className="text-sm text-muted">{date.spotsLeft} spots available</span>
                    )}
                  </div>
                </button>
              ))}
            </div>

            {musician.availableDates.length > 5 && !showAllDates && (
              <button
                onClick={() => setShowAllDates(true)}
                className="w-full text-center text-sm font-semibold underline mt-4 hover:text-primary"
              >
                Show all dates
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
