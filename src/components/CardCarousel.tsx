"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";

interface CardCarouselProps {
  title: string;
  subtitle?: string;
  href?: string;
  children: React.ReactNode;
}

export default function CardCarousel({ title, subtitle, href, children }: CardCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 600;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-[22px] font-semibold">{title}</h2>
            {href && (
              <Link href={href} className="text-foreground hover:text-primary">
                <ArrowRight className="w-5 h-5" />
              </Link>
            )}
          </div>
          {subtitle && <p className="text-sm text-muted mt-0.5">{subtitle}</p>}
        </div>
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:shadow-md disabled:opacity-30 bg-white"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:shadow-md bg-white"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto hide-scrollbar scroll-smooth pb-2"
      >
        {children}
      </div>
    </section>
  );
}
