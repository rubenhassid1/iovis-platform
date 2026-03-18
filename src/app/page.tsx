import SearchBar from "@/components/SearchBar";
import CardCarousel from "@/components/CardCarousel";
import MusicianCard from "@/components/MusicianCard";
import { musicians, getPopularInCity, getFeaturedMusicians } from "@/data/musicians";

export default function Home() {
  const telAvivMusicians = getPopularInCity("Tel Aviv");
  const jerusalemMusicians = getPopularInCity("Jerusalem");
  const featuredMusicians = getFeaturedMusicians();
  const allOtherCities = musicians.filter(
    (m) => m.city !== "Tel Aviv" && m.city !== "Jerusalem"
  );

  return (
    <div>
      {/* Hero Search */}
      <div className="bg-white py-6 px-6 md:px-10 xl:px-20">
        <SearchBar variant="full" />
      </div>

      {/* Main content */}
      <div className="max-w-[1760px] mx-auto px-6 md:px-10 xl:px-20 py-8">
        {/* Popular in Tel Aviv */}
        <CardCarousel
          title="Popular musicians in Tel Aviv"
          href="/search?city=Tel+Aviv"
        >
          {telAvivMusicians.map((m) => (
            <MusicianCard key={m.id} musician={m} />
          ))}
        </CardCarousel>

        {/* Featured experiences */}
        <CardCarousel
          title="Featured live experiences"
          subtitle="Handpicked performances by top-rated musicians"
          href="/search"
        >
          {featuredMusicians.map((m) => (
            <MusicianCard key={m.id} musician={m} variant="featured" />
          ))}
        </CardCarousel>

        {/* Popular in Jerusalem */}
        <CardCarousel
          title="Popular musicians in Jerusalem"
          href="/search?city=Jerusalem"
        >
          {jerusalemMusicians.map((m) => (
            <MusicianCard key={m.id} musician={m} />
          ))}
        </CardCarousel>

        {/* Available across Israel */}
        <CardCarousel
          title="Available across Israel"
          subtitle="Discover musicians in Haifa, Eilat, Tiberias, and more"
          href="/search"
        >
          {allOtherCities.map((m) => (
            <MusicianCard key={m.id} musician={m} />
          ))}
        </CardCarousel>
      </div>
    </div>
  );
}
