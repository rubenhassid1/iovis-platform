import SearchBar from "@/components/SearchBar";
import CardCarousel from "@/components/CardCarousel";
import MusicianCard from "@/components/MusicianCard";
import { getTopRated, getMostBooked, getByEventType } from "@/data/musicians";

export default function Home() {
  const topRated = getTopRated();
  const mostBooked = getMostBooked();
  const weddingMusicians = getByEventType("Weddings");
  const corporateMusicians = getByEventType("Corporate");

  return (
    <div>
      {/* Hero Search */}
      <div className="bg-white py-6 px-6 md:px-10 xl:px-20">
        <SearchBar />
      </div>

      {/* Main content */}
      <div className="max-w-[1760px] mx-auto px-6 md:px-10 xl:px-20 py-8">
        <CardCarousel
          title="Top rated musicians"
          subtitle="The highest-rated performers in Israel, reviewed by event planners"
          href="/search"
        >
          {topRated.map((m) => (
            <MusicianCard key={m.id} musician={m} />
          ))}
        </CardCarousel>

        <CardCarousel
          title="Most booked"
          subtitle="The musicians event planners book again and again"
          href="/search"
        >
          {mostBooked.map((m) => (
            <MusicianCard key={m.id} musician={m} />
          ))}
        </CardCarousel>

        <CardCarousel
          title="Perfect for weddings"
          href="/search?event=Weddings"
        >
          {weddingMusicians.map((m) => (
            <MusicianCard key={m.id} musician={m} />
          ))}
        </CardCarousel>

        <CardCarousel
          title="Corporate & brand events"
          href="/search?event=Corporate+Events"
        >
          {corporateMusicians.map((m) => (
            <MusicianCard key={m.id} musician={m} />
          ))}
        </CardCarousel>
      </div>
    </div>
  );
}
