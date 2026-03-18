import { Search, Calendar, MessageCircle, Shield, Star, Users, Music } from "lucide-react";
import Link from "next/link";

export default function EventPlannersPage() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-[1120px] mx-auto px-6 md:px-10 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find the perfect musician for your event</h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Browse verified musicians, compare packages, and book directly. From intimate dinners to 500-guest galas — Iovis connects you with Israel&apos;s best talent.
          </p>
          <Link
            href="/search"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors"
          >
            <Search className="w-5 h-5" />
            Browse Musicians
          </Link>
        </div>
      </div>

      {/* How it works */}
      <div className="max-w-[1120px] mx-auto px-6 md:px-10 py-16">
        <h2 className="text-[28px] font-semibold text-center mb-12">How Iovis works for event planners</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">1. Browse & compare</h3>
            <p className="text-muted text-sm">Search by event type, genre, date, and city. Compare packages, listen to samples, and read reviews from other event planners.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">2. Book a package</h3>
            <p className="text-muted text-sm">Choose a package that fits your event, select your date, and send a booking request. Musicians respond within hours.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Music className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">3. Enjoy the performance</h3>
            <p className="text-muted text-sm">The musician arrives at your venue, sets up, and delivers an unforgettable performance. You provide the venue, they bring the music.</p>
          </div>
        </div>
      </div>

      {/* Why Iovis */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-[1120px] mx-auto px-6 md:px-10">
          <h2 className="text-[28px] font-semibold text-center mb-12">Why event planners choose Iovis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <Shield className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold text-lg mb-2">Verified musicians</h3>
              <p className="text-sm text-muted">Every musician is vetted. We verify credentials, check references, and ensure professional standards before they appear on Iovis.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <Star className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold text-lg mb-2">Real reviews from event planners</h3>
              <p className="text-sm text-muted">All reviews come from verified bookings. You&apos;re reading feedback from event professionals who have actually worked with these musicians.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <MessageCircle className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold text-lg mb-2">Direct communication</h3>
              <p className="text-sm text-muted">Message musicians directly to discuss your event details, custom requests, and logistics. No middlemen, no delays.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <Users className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold text-lg mb-2">Clear, upfront pricing</h3>
              <p className="text-sm text-muted">Every musician lists transparent packages with clear pricing. No hidden fees, no surprises. What you see is what you pay.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-[1120px] mx-auto px-6 md:px-10 py-16 text-center">
        <h2 className="text-[28px] font-semibold mb-4">Ready to find your musician?</h2>
        <p className="text-muted mb-8">Join hundreds of event planners who book through Iovis every month.</p>
        <div className="flex items-center justify-center gap-4">
          <Link href="/search" className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3 rounded-full transition-colors">
            Browse Musicians
          </Link>
          <Link href="#" className="border border-foreground font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
            Sign Up Free
          </Link>
        </div>
      </div>
    </div>
  );
}
