import { Globe, Music } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="max-w-[1760px] mx-auto px-6 md:px-10 xl:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-sm font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted hover:underline">Help Center</a></li>
              <li><a href="#" className="text-sm text-muted hover:underline">Safety information</a></li>
              <li><a href="#" className="text-sm text-muted hover:underline">Cancellation options</a></li>
              <li><a href="#" className="text-sm text-muted hover:underline">Report a concern</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">For Musicians</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted hover:underline">List your talent on Iovis</a></li>
              <li><a href="#" className="text-sm text-muted hover:underline">Resources for musicians</a></li>
              <li><a href="#" className="text-sm text-muted hover:underline">Community forum</a></li>
              <li><a href="#" className="text-sm text-muted hover:underline">How booking works</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Iovis</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted hover:underline">About</a></li>
              <li><a href="#" className="text-sm text-muted hover:underline">Careers</a></li>
              <li><a href="#" className="text-sm text-muted hover:underline">Press</a></li>
              <li><a href="#" className="text-sm text-muted hover:underline">Investors</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted">
            <span>© 2026 Iovis, Inc.</span>
            <span>·</span>
            <a href="#" className="hover:underline">Privacy</a>
            <span>·</span>
            <a href="#" className="hover:underline">Terms</a>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <button className="flex items-center gap-2 hover:underline">
              <Globe className="w-4 h-4" />
              English (US)
            </button>
            <span className="text-muted">₪ ILS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
