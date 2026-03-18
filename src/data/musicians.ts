export interface Package {
  name: string;
  description: string;
  duration: string;
  price: number;
  includes: string[];
}

export interface Musician {
  id: string;
  name: string;
  type: string;
  genre: string;
  city: string;
  image: string;
  images: string[];
  rating: number;
  reviewCount: number;
  currency: string;
  bio: string;
  longBio: string;
  packages: Package[];
  highlights: { icon: string; title: string; description: string }[];
  avatar: string;
  experience: string;
  languages: string[];
  eventTypes: string[];
  reviews: { name: string; location: string; date: string; rating: number; text: string; avatar: string }[];
  tags: string[];
  verified?: boolean;
  responseTime?: string;
  bookingsCount?: number;
}

export const musicians: Musician[] = [
  {
    id: "1",
    name: "Yoni Levy",
    type: "Jazz Trio",
    genre: "Jazz",
    city: "Tel Aviv",
    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop",
    ],
    rating: 4.99,
    reviewCount: 2847,
    currency: "₪",
    bio: "Jazz trio led by Berklee-trained pianist Yoni Levy. We bring smooth, sophisticated jazz to any event — from intimate dinners to large corporate galas.",
    longBio: "We're a three-piece jazz ensemble — piano, double bass, and saxophone — based in Tel Aviv. I founded the trio after studying at Berklee College of Music and performing across Europe and the US.\n\nOur repertoire spans classic standards (Coltrane, Miles Davis, Bill Evans) to contemporary jazz and original compositions. We tailor every setlist to your event, whether it's a relaxed cocktail hour, an elegant dinner, or a lively celebration.\n\nWe bring our own sound equipment for events up to 200 guests. For larger events, we work with your AV team. We're flexible, professional, and passionate about making your event unforgettable.",
    packages: [
      { name: "Cocktail Hour", description: "Smooth background jazz for cocktail receptions and networking events", duration: "2 hours", price: 3500, includes: ["Full trio (piano, bass, sax)", "Professional sound system", "Curated jazz setlist", "Smart formal attire"] },
      { name: "Full Evening", description: "Complete musical coverage for dinners, galas, and celebrations", duration: "4 hours", price: 6000, includes: ["Full trio (piano, bass, sax)", "Professional sound system", "2 sets with break", "Custom setlist consultation", "Smart formal attire", "MC announcements if needed"] },
      { name: "Ceremony + Reception", description: "From ceremony music through the reception — seamless coverage", duration: "6 hours", price: 8500, includes: ["Full trio (piano, bass, sax)", "Professional sound system", "Ceremony entrance & exit music", "Cocktail hour set", "Dinner set", "Custom setlist consultation"] },
    ],
    highlights: [
      { icon: "🎹", title: "Berklee-trained musicians", description: "All three members are graduates of top music conservatories." },
      { icon: "🔊", title: "Full sound system included", description: "We bring professional equipment — no extra AV costs for events up to 200 guests." },
      { icon: "🎵", title: "Custom setlists", description: "We tailor every performance to your event's mood and audience." },
      { icon: "⚡", title: "Fast setup", description: "We arrive 1 hour early and set up quietly — no disruption to your event." },
    ],
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    experience: "12 years",
    languages: ["Hebrew", "English"],
    eventTypes: ["Weddings", "Corporate Events", "Private Parties", "Restaurant Nights", "Cocktail Hours"],
    reviews: [
      { name: "Sarah M.", location: "Event Planner, Tel Aviv", date: "1 week ago", rating: 5, text: "Booked Yoni's trio for a corporate gala at the Hilton. They were incredible — professional, punctual, and the music was perfect for the atmosphere. Multiple guests asked me for their contact info.", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
      { name: "David K.", location: "Wedding Planner, Jerusalem", date: "2 weeks ago", rating: 5, text: "Used them for a wedding ceremony and reception. Seamless transitions, beautiful music. The bride was in tears during the entrance. Highly recommend.", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
      { name: "Noa R.", location: "Corporate Events, Tel Aviv", date: "3 weeks ago", rating: 5, text: "Third time booking this trio. They never disappoint. Perfect for sophisticated client dinners.", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" },
      { name: "Michael B.", location: "Private Client, Herzliya", date: "1 month ago", rating: 5, text: "Hired them for my wife's birthday. The custom setlist included all her favorite songs. Absolutely magical evening.", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" },
    ],
    tags: ["Jazz", "Trio", "Corporate", "Weddings"],
    verified: true,
    responseTime: "Within 1 hour",
    bookingsCount: 340,
  },
  {
    id: "2",
    name: "Daniel Ashkenazi",
    type: "Classical Guitarist",
    genre: "Classical",
    city: "Tel Aviv",
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&h=600&fit=crop",
    ],
    rating: 4.94,
    reviewCount: 1203,
    currency: "₪",
    bio: "Award-winning classical guitarist available for weddings, ceremonies, and intimate events. Elegant, refined music for your most important moments.",
    longBio: "I'm a concert guitarist and composer based in Tel Aviv, with over 15 years of performance experience at international festivals, concert halls, and private events across Europe and the Middle East.\n\nMy repertoire includes Bach, Rodrigo, Albéniz, Barrios, and original compositions. I specialize in creating the perfect musical atmosphere for wedding ceremonies, cocktail hours, and intimate gatherings.\n\nI perform solo or as a duo with a flutist or violinist. I bring my own amplification for outdoor events.",
    packages: [
      { name: "Ceremony", description: "Beautiful classical guitar for your wedding or event ceremony", duration: "1 hour", price: 1800, includes: ["Solo classical guitar", "Processional & recessional music", "Pre-ceremony background music", "Portable amplification"] },
      { name: "Cocktail & Dinner", description: "Elegant background music for receptions and dinners", duration: "3 hours", price: 3200, includes: ["Solo classical guitar", "Curated repertoire", "Portable amplification", "2 sets with break"] },
      { name: "Duo Performance", description: "Guitar + flute or violin for a richer sound", duration: "3 hours", price: 4800, includes: ["Classical guitar + flute or violin", "Curated repertoire", "Professional sound", "2 sets with break", "Custom song requests"] },
    ],
    highlights: [
      { icon: "🎸", title: "International performer", description: "Performed at festivals in Spain, France, Germany, and across the Middle East." },
      { icon: "🎼", title: "Versatile repertoire", description: "From Bach to Bossa Nova — music tailored to your event's style." },
      { icon: "🤵", title: "Elegant presentation", description: "Professional attire and demeanor for formal occasions." },
    ],
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
    experience: "15 years",
    languages: ["Hebrew", "English", "Spanish"],
    eventTypes: ["Weddings", "Ceremonies", "Private Dinners", "Corporate Events", "Art Exhibitions"],
    reviews: [
      { name: "Elena S.", location: "Wedding Planner, Herzliya", date: "5 days ago", rating: 5, text: "Daniel played at a beachfront wedding ceremony. His music was breathtaking — every guest commented on it. He's our go-to guitarist now.", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop" },
    ],
    tags: ["Classical", "Guitar", "Weddings", "Ceremonies"],
    verified: true,
    responseTime: "Within 2 hours",
    bookingsCount: 215,
  },
  {
    id: "3",
    name: "Sami & Khalil",
    type: "Oud & Percussion Duo",
    genre: "Middle Eastern",
    city: "Jerusalem",
    image: "https://images.unsplash.com/photo-1504898770365-14faca6a7320?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1504898770365-14faca6a7320?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=800&h=600&fit=crop",
    ],
    rating: 4.97,
    reviewCount: 892,
    currency: "₪",
    bio: "Master oud player and percussionist bringing the rich sounds of Middle Eastern music to weddings, cultural events, and celebrations.",
    longBio: "We are Sami (oud) and Khalil (darbuka & riq), a duo rooted in the rich musical traditions of the Middle East. Together, we've been performing for over 20 years at weddings, festivals, corporate events, and cultural gatherings.\n\nOur music blends traditional maqam scales with contemporary arrangements. We're equally at home at an elegant reception as we are at a lively celebration with dancing.\n\nWe can expand to a full ensemble (adding violin, qanun, and vocals) for larger events.",
    packages: [
      { name: "Duo Set", description: "Intimate oud and percussion performance", duration: "2 hours", price: 2800, includes: ["Oud + percussion duo", "Traditional & contemporary repertoire", "Sound system for up to 100 guests"] },
      { name: "Full Ensemble", description: "Expanded group with violin, qanun, and vocals", duration: "3 hours", price: 5500, includes: ["5-piece ensemble", "Full Middle Eastern repertoire", "Professional sound system", "Dance sets available", "Custom song requests"] },
      { name: "Wedding Package", description: "Complete musical coverage for Middle Eastern weddings", duration: "5 hours", price: 8000, includes: ["5-piece ensemble", "Ceremony music", "Reception & dinner music", "Dabke dance sets", "Professional sound & lighting", "MC services in Hebrew, Arabic & English"] },
    ],
    highlights: [
      { icon: "🎶", title: "20+ years together", description: "A duo with decades of experience performing at hundreds of events." },
      { icon: "🌍", title: "Multilingual", description: "We perform in Arabic, Hebrew, and English — perfect for multicultural events." },
      { icon: "💃", title: "Dance-ready", description: "High-energy dabke and celebration sets to get everyone on their feet." },
    ],
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop",
    experience: "20 years",
    languages: ["Arabic", "Hebrew", "English"],
    eventTypes: ["Weddings", "Cultural Events", "Corporate Events", "Festivals", "Private Celebrations"],
    reviews: [
      { name: "Thomas L.", location: "Event Manager, Jerusalem", date: "1 week ago", rating: 5, text: "Booked Sami & Khalil for a multicultural corporate event. They read the room perfectly and had everyone engaged. Truly masterful.", avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=100&h=100&fit=crop" },
      { name: "Maya D.", location: "Wedding Planner, Jerusalem", date: "2 weeks ago", rating: 5, text: "They made our client's wedding unforgettable. The dabke set had 200 people dancing. We've already booked them for three more events.", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" },
    ],
    tags: ["Middle Eastern", "Oud", "Weddings", "Cultural"],
    verified: true,
    responseTime: "Within 3 hours",
    bookingsCount: 280,
  },
  {
    id: "4",
    name: "DJ Nir",
    type: "DJ & Producer",
    genre: "Electronic",
    city: "Tel Aviv",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop",
    ],
    rating: 4.86,
    reviewCount: 456,
    currency: "₪",
    bio: "Top Tel Aviv DJ for corporate events, parties, weddings, and brand launches. High-energy sets tailored to your crowd.",
    longBio: "I've been DJing professionally for 10 years, working the Tel Aviv club scene and private event circuit. I specialize in reading the room and creating the perfect energy for every moment — from chill lounge vibes to peak-hour dance floor madness.\n\nI bring my own professional DJ setup including Pioneer CDJs, mixer, and speakers for events up to 300 guests. For larger events, I work with your production team.\n\nGenres: house, techno, disco, funk, pop, hip-hop, Israeli hits — whatever your event needs.",
    packages: [
      { name: "Party Set", description: "High-energy DJ set for parties and celebrations", duration: "4 hours", price: 3500, includes: ["Professional DJ set", "Pioneer CDJ/mixer setup", "Speakers for up to 150 guests", "LED lighting", "Custom playlist consultation"] },
      { name: "Full Night", description: "Complete DJ coverage from cocktails to last dance", duration: "6 hours", price: 5000, includes: ["Professional DJ set", "Full sound system for up to 300 guests", "LED lighting package", "Background music during dinner", "Dance floor sets", "Custom playlist consultation"] },
      { name: "Premium Package", description: "DJ + live percussion or saxophone for an elevated experience", duration: "5 hours", price: 7000, includes: ["DJ + live musician", "Full sound & lighting", "Background & dance sets", "Custom playlist", "Event coordination"] },
    ],
    highlights: [
      { icon: "🎧", title: "10 years experience", description: "Hundreds of events from intimate parties to festivals." },
      { icon: "🔊", title: "Full production", description: "Sound, lighting, and DJ equipment included in every package." },
      { icon: "🎤", title: "Add live musicians", description: "Pair with a live saxophonist, percussionist, or vocalist." },
    ],
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop",
    experience: "10 years",
    languages: ["Hebrew", "English"],
    eventTypes: ["Parties", "Weddings", "Corporate Events", "Brand Launches", "Club Nights"],
    reviews: [
      { name: "Alex V.", location: "Event Planner, Tel Aviv", date: "2 weeks ago", rating: 5, text: "DJ Nir crushed it at our product launch. Perfect energy, perfect song selection. Clients were dancing until midnight.", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop" },
    ],
    tags: ["DJ", "Electronic", "Parties", "Weddings"],
    verified: true,
    responseTime: "Within 1 hour",
    bookingsCount: 420,
  },
  {
    id: "5",
    name: "Tamar Golan",
    type: "Singer-Songwriter",
    genre: "Folk / Pop",
    city: "Tel Aviv",
    image: "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=800&h=600&fit=crop",
    ],
    rating: 4.92,
    reviewCount: 634,
    currency: "₪",
    bio: "Acoustic singer-songwriter for intimate events, weddings, and private celebrations. Warm vocals, guitar, and heartfelt performances.",
    longBio: "I'm Tamar — a singer-songwriter based in Tel Aviv with a repertoire that spans folk, pop, and Israeli classics. I perform with acoustic guitar and vocals, creating an intimate and personal atmosphere perfect for weddings, private dinners, and small celebrations.\n\nI love learning special songs for events — whether it's a couple's first-dance song or a meaningful family melody. Music should tell your story.",
    packages: [
      { name: "Acoustic Set", description: "Solo voice and guitar for intimate gatherings", duration: "2 hours", price: 2000, includes: ["Solo performance (voice + guitar)", "Portable amplification", "Custom song requests", "2 sets with break"] },
      { name: "Wedding Ceremony", description: "Ceremony music including processional and special songs", duration: "1.5 hours", price: 2500, includes: ["Solo performance", "Processional & recessional", "Up to 2 custom songs learned for your event", "Pre-ceremony background music", "Sound system"] },
      { name: "Full Wedding", description: "Ceremony through dinner — complete acoustic coverage", duration: "5 hours", price: 5500, includes: ["Solo or duo (add pianist)", "Ceremony music", "Cocktail hour", "Dinner background music", "Up to 3 custom songs", "Full sound system"] },
    ],
    highlights: [
      { icon: "🎤", title: "Personal touch", description: "I learn special songs for your event — your story, your music." },
      { icon: "🎸", title: "Acoustic warmth", description: "Intimate, unplugged sound perfect for emotional moments." },
    ],
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop",
    experience: "8 years",
    languages: ["Hebrew", "English"],
    eventTypes: ["Weddings", "Private Dinners", "Ceremonies", "Birthday Parties", "Proposals"],
    reviews: [
      { name: "Jonathan R.", location: "Groom, Haifa", date: "1 week ago", rating: 5, text: "Tamar learned our first-dance song and performed it beautifully. There wasn't a dry eye in the room. She made our wedding truly special.", avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop" },
    ],
    tags: ["Acoustic", "Singer", "Weddings", "Folk"],
    verified: true,
    responseTime: "Within 2 hours",
    bookingsCount: 180,
  },
  {
    id: "6",
    name: "Moshe & The Klezmorim",
    type: "Klezmer Band",
    genre: "Klezmer",
    city: "Jerusalem",
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&h=600&fit=crop",
    ],
    rating: 4.88,
    reviewCount: 567,
    currency: "₪",
    bio: "Six-piece klezmer band for Jewish weddings, bar/bat mitzvahs, and cultural celebrations. High-energy, joyful, and unforgettable.",
    longBio: "We're a six-piece klezmer ensemble — violin, clarinet, accordion, bass, drums, and vocals — dedicated to bringing the joy and soul of Eastern European Jewish music to celebrations across Israel.\n\nFrom the haunting melodies of the hora to the exuberant energy of the freylekhs, our music gets everyone — from grandparents to grandchildren — dancing together.\n\nWe also perform Israeli classics, Mizrachi hits, and modern celebration music. We're the complete musical package for Jewish celebrations.",
    packages: [
      { name: "Simcha Set", description: "High-energy klezmer for celebrations and parties", duration: "3 hours", price: 5000, includes: ["6-piece klezmer band", "Professional sound system", "Hora & freylekhs sets", "Israeli & Mizrachi hits", "Dance-floor focused"] },
      { name: "Wedding Package", description: "Full wedding coverage with ceremony, dinner & celebration", duration: "5 hours", price: 8500, includes: ["6-piece klezmer band", "Chuppah ceremony music", "Cocktail hour", "Dinner background music", "Hora & celebration sets", "Full sound system", "Wireless microphone for speeches"] },
    ],
    highlights: [
      { icon: "🎻", title: "Six-piece ensemble", description: "Violin, clarinet, accordion, bass, drums, and vocals." },
      { icon: "💃", title: "Everyone dances", description: "Our hora sets are legendary — we guarantee a packed dance floor." },
    ],
    avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&h=200&fit=crop",
    experience: "18 years",
    languages: ["Hebrew", "Yiddish", "English"],
    eventTypes: ["Jewish Weddings", "Bar/Bat Mitzvahs", "Holiday Celebrations", "Cultural Events"],
    reviews: [
      { name: "Rebecca G.", location: "Wedding Planner, Jerusalem", date: "1 week ago", rating: 5, text: "The hora went on for 40 minutes because nobody wanted to stop! Moshe and his band are the gold standard for Jewish celebrations.", avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop" },
    ],
    tags: ["Klezmer", "Jewish Weddings", "Band", "Celebrations"],
    verified: true,
    responseTime: "Within 4 hours",
    bookingsCount: 310,
  },
  {
    id: "7",
    name: "Carlos Fuentes",
    type: "Flamenco Guitarist",
    genre: "Flamenco",
    city: "Tel Aviv",
    image: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=800&h=600&fit=crop",
    ],
    rating: 4.95,
    reviewCount: 389,
    currency: "₪",
    bio: "Passionate flamenco guitarist for elegant events, wine tastings, Mediterranean-themed parties, and intimate dinners.",
    longBio: "Born in Seville and based in Tel Aviv, I bring authentic flamenco guitar to events across Israel. My performances range from quiet, atmospheric background music to fiery, show-stopping solos.\n\nI can perform solo or with a flamenco dancer and cajón player for a full flamenco show. Perfect for Mediterranean-themed events, wine dinners, corporate receptions, and restaurant ambiance.",
    packages: [
      { name: "Solo Guitar", description: "Atmospheric flamenco guitar for elegant events", duration: "2 hours", price: 2200, includes: ["Solo flamenco guitar", "Background & feature sets", "Portable amplification"] },
      { name: "Flamenco Show", description: "Guitar + dancer + percussion — a full flamenco experience", duration: "1.5 hours", price: 5500, includes: ["Flamenco guitar", "Professional dancer", "Cajón percussion", "Choreographed show", "Sound system", "2 show sets"] },
    ],
    highlights: [
      { icon: "🔥", title: "Authentic Andalusian", description: "Born and trained in Seville — the home of flamenco." },
      { icon: "💃", title: "Add a dancer", description: "Elevate the experience with a professional flamenco dancer." },
    ],
    avatar: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=200&h=200&fit=crop",
    experience: "14 years",
    languages: ["Spanish", "Hebrew", "English"],
    eventTypes: ["Corporate Events", "Wine Dinners", "Private Parties", "Restaurant Events", "Themed Nights"],
    reviews: [
      { name: "Sofia L.", location: "Event Manager, Herzliya", date: "2 weeks ago", rating: 5, text: "Carlos and his dancer performed at our company's Mediterranean-themed dinner. It was the highlight of the evening — guests couldn't stop talking about it.", avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop" },
    ],
    tags: ["Flamenco", "Guitar", "Shows", "Mediterranean"],
    verified: true,
    responseTime: "Within 3 hours",
    bookingsCount: 165,
  },
  {
    id: "8",
    name: "Lena Petrova",
    type: "Concert Pianist",
    genre: "Classical",
    city: "Haifa",
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1552422535-c45813c61732?w=800&h=600&fit=crop",
    ],
    rating: 4.91,
    reviewCount: 723,
    currency: "₪",
    bio: "Concert pianist for upscale events, galas, and ceremonies. Elegant classical and jazz piano for venues with a piano or digital keyboard.",
    longBio: "I'm a classically trained concert pianist who has performed at venues across Europe and Israel. I specialize in creating elegant, sophisticated atmospheres for high-end events.\n\nMy repertoire includes classical (Chopin, Debussy, Rachmaninoff), jazz standards, film scores, and popular arrangements. I perform on your venue's piano or bring a high-quality digital piano.\n\nIdeal for hotel lobbies, corporate galas, cocktail receptions, wedding ceremonies, and art gallery openings.",
    packages: [
      { name: "Cocktail Piano", description: "Elegant piano for receptions and cocktail hours", duration: "2 hours", price: 2500, includes: ["Solo piano performance", "Classical & jazz repertoire", "Digital piano if needed", "Formal attire"] },
      { name: "Gala Evening", description: "Full-evening piano for galas and formal dinners", duration: "4 hours", price: 4000, includes: ["Solo piano", "Custom repertoire", "Digital piano if needed", "3 sets with breaks", "Formal attire"] },
    ],
    highlights: [
      { icon: "🎹", title: "Concert-hall quality", description: "Performances that rival the Philharmonic — at your event." },
      { icon: "🏨", title: "Brings her own piano", description: "High-quality digital piano available if your venue doesn't have one." },
    ],
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop",
    experience: "16 years",
    languages: ["Hebrew", "English", "Russian"],
    eventTypes: ["Corporate Galas", "Hotel Events", "Wedding Ceremonies", "Art Exhibitions", "Cocktail Receptions"],
    reviews: [
      { name: "Anna T.", location: "Hotel Event Manager, Haifa", date: "1 week ago", rating: 5, text: "Lena has been our resident pianist for VIP events for the past year. Every performance is flawless. She elevates the entire atmosphere.", avatar: "https://images.unsplash.com/photo-1541823709867-1b206113eafd?w=100&h=100&fit=crop" },
    ],
    tags: ["Classical", "Piano", "Galas", "Upscale"],
    verified: true,
    responseTime: "Within 2 hours",
    bookingsCount: 290,
  },
  {
    id: "9",
    name: "Avi & The Groove",
    type: "Cover Band",
    genre: "Pop / Rock",
    city: "Tel Aviv",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=600&fit=crop",
    ],
    rating: 4.82,
    reviewCount: 1045,
    currency: "₪",
    bio: "High-energy 5-piece cover band playing pop, rock, funk, and Israeli hits. The ultimate party band for events that need a packed dance floor.",
    longBio: "We're Avi & The Groove — five musicians who live for making people dance. Our setlists span decades of hits: from classic rock and Motown to current pop, funk, disco, and Israeli favorites.\n\nWe bring full production — sound, lighting, and the energy of a stadium show. Whether it's a wedding, corporate party, or birthday bash, we guarantee an unforgettable night.\n\nBand lineup: vocals, guitar, bass, keys, drums. Add horns for the premium experience.",
    packages: [
      { name: "Party Band", description: "5-piece cover band — non-stop hits and dancing", duration: "3 hours", price: 7000, includes: ["5-piece band", "Full sound system", "LED stage lighting", "3 sets of hits", "Custom song requests", "MC between sets"] },
      { name: "Wedding Celebration", description: "Complete wedding entertainment from first dance to last song", duration: "5 hours", price: 11000, includes: ["5-piece band", "Full sound & lighting", "First dance performance", "Hora set", "Pop, rock, Israeli hits", "DJ set during breaks", "Wireless mic for speeches"] },
      { name: "Premium Show", description: "Full band + horn section for the ultimate party", duration: "4 hours", price: 12000, includes: ["7-piece band (add horns)", "Premium sound & lighting", "Choreographed show elements", "All genres covered", "DJ during breaks"] },
    ],
    highlights: [
      { icon: "🎸", title: "Every genre covered", description: "Pop, rock, funk, disco, Israeli, Mizrachi — we play it all." },
      { icon: "🔊", title: "Full production", description: "Professional sound and lighting included — we bring the show." },
      { icon: "🎷", title: "Add a horn section", description: "Upgrade to a 7-piece with trumpet and saxophone." },
    ],
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&h=200&fit=crop",
    experience: "12 years",
    languages: ["Hebrew", "English"],
    eventTypes: ["Weddings", "Corporate Parties", "Birthday Parties", "Bar/Bat Mitzvahs", "Festivals"],
    reviews: [
      { name: "Tom S.", location: "Event Planner, Tel Aviv", date: "5 days ago", rating: 5, text: "Avi & The Groove turned a corporate party into a concert. The dance floor was packed from the first song to the last. Best party band in Israel.", avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop" },
    ],
    tags: ["Cover Band", "Pop", "Rock", "Weddings", "Parties"],
    verified: true,
    responseTime: "Within 1 hour",
    bookingsCount: 520,
  },
  {
    id: "10",
    name: "Marina & Eitan",
    type: "Opera Duo",
    genre: "Opera / Classical Vocals",
    city: "Tel Aviv",
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop",
    ],
    rating: 4.96,
    reviewCount: 412,
    currency: "₪",
    bio: "Soprano and tenor duo from the Israeli Opera. Stunning vocal performances for galas, ceremonies, and special celebrations.",
    longBio: "We are Marina (soprano) and Eitan (tenor), professional opera singers who have performed with the Israeli Opera, the Zurich Opera House, and at festivals worldwide.\n\nWe perform arias, duets, and popular crossover classics accompanied by a pianist. From Puccini to Andrea Bocelli, our performances bring drama, beauty, and emotion to any event.\n\nPerfect for grand entrances, ceremony highlights, gala entertainment, and surprise performances.",
    packages: [
      { name: "Vocal Highlight", description: "A show-stopping 30-minute performance for your event's special moment", duration: "30 min", price: 3000, includes: ["Soprano + tenor", "Pianist accompaniment", "3-4 arias/duets", "Grand entrance option"] },
      { name: "Gala Performance", description: "Full opera program for galas and formal events", duration: "2 hours", price: 6500, includes: ["Soprano + tenor", "Pianist", "Full program of arias, duets & crossover", "2 sets with intermission", "Sound system"] },
    ],
    highlights: [
      { icon: "🎤", title: "Israeli Opera soloists", description: "Active performers with Israel's national opera company." },
      { icon: "✨", title: "Wow factor", description: "Perfect for grand entrances, surprise performances, and emotional moments." },
    ],
    avatar: "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?w=200&h=200&fit=crop",
    experience: "15 years",
    languages: ["Hebrew", "English", "Italian", "German"],
    eventTypes: ["Galas", "Corporate Events", "Weddings", "Charity Events", "Special Celebrations"],
    reviews: [
      { name: "Claire M.", location: "Charity Gala Organizer, Tel Aviv", date: "2 weeks ago", rating: 5, text: "Marina and Eitan performed at our annual charity gala. The room went completely silent during their duet — then erupted in a standing ovation. Worth every shekel.", avatar: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=100&h=100&fit=crop" },
    ],
    tags: ["Opera", "Vocals", "Galas", "Classical"],
    verified: true,
    responseTime: "Within 4 hours",
    bookingsCount: 145,
  },
  {
    id: "11",
    name: "The Voltage",
    type: "Rock Band",
    genre: "Rock",
    city: "Tel Aviv",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1501612780327-45045538702b?w=800&h=600&fit=crop",
    ],
    rating: 4.78,
    reviewCount: 890,
    currency: "₪",
    bio: "High-energy rock band for parties, product launches, and events that need raw energy. Original music and classic rock covers.",
    longBio: "We're a four-piece rock band — vocals, guitar, bass, and drums — known for electrifying live shows. We play a mix of original music and classic/modern rock covers (Arctic Monkeys, Foo Fighters, Red Hot Chili Peppers, Israeli rock).\n\nOur sound is big, bold, and guaranteed to bring energy to any event. We're perfect for product launches, company parties, music festivals, and celebrations that want something different from the usual band.\n\nFull backline and sound system included.",
    packages: [
      { name: "Rock Set", description: "High-energy rock performance", duration: "2 hours", price: 4500, includes: ["4-piece rock band", "Full backline & sound", "Stage lighting", "2 sets of rock hits"] },
      { name: "Full Night Rock", description: "Complete evening of live rock music", duration: "4 hours", price: 7500, includes: ["4-piece rock band", "Full production (sound + lighting)", "4 sets covering all decades", "DJ between sets", "Custom song requests"] },
    ],
    highlights: [
      { icon: "🎸", title: "Raw energy", description: "Bring the energy of a rock concert to your event." },
      { icon: "🔊", title: "Full production", description: "Backline, PA, and lighting — we bring everything." },
    ],
    avatar: "https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?w=200&h=200&fit=crop",
    experience: "8 years",
    languages: ["Hebrew", "English"],
    eventTypes: ["Product Launches", "Company Parties", "Festivals", "Birthday Parties"],
    reviews: [
      { name: "Jake R.", location: "Marketing Director, Tel Aviv", date: "2 weeks ago", rating: 5, text: "Hired The Voltage for our product launch party. They absolutely killed it — the energy was incredible and our brand got amazing social media coverage from the performance.", avatar: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=100&h=100&fit=crop" },
    ],
    tags: ["Rock", "Band", "Parties", "Launches"],
    verified: true,
    responseTime: "Within 2 hours",
    bookingsCount: 195,
  },
  {
    id: "12",
    name: "Ori & Shira",
    type: "String Duo",
    genre: "Classical",
    city: "Tel Aviv",
    image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&h=600&fit=crop",
    ],
    rating: 4.93,
    reviewCount: 321,
    currency: "₪",
    bio: "Violin and cello duo for wedding ceremonies, cocktail hours, and elegant events. Beautiful classical and contemporary arrangements.",
    longBio: "We're Ori (violin) and Shira (cello) — a string duo that brings elegance and emotion to events across Israel. Our repertoire spans classical masterpieces (Bach, Pachelbel, Handel) to contemporary arrangements of pop songs, film scores, and Israeli music.\n\nWe specialize in wedding ceremonies — from the processional to the first dance. We also perform at cocktail hours, corporate receptions, and art gallery openings.\n\nWe can expand to a string quartet for larger events.",
    packages: [
      { name: "Ceremony Duo", description: "Violin & cello for wedding ceremonies and special moments", duration: "1 hour", price: 2200, includes: ["Violin + cello duo", "Processional & recessional", "Custom song arrangement (1 song)", "Background music"] },
      { name: "Elegant Reception", description: "String duo for cocktail hours and receptions", duration: "3 hours", price: 4000, includes: ["Violin + cello duo", "Classical & pop arrangements", "3 sets", "Amplification if needed"] },
      { name: "String Quartet", description: "Full quartet for a richer, grander sound", duration: "3 hours", price: 7000, includes: ["String quartet (2 violins, viola, cello)", "Full classical & contemporary repertoire", "Custom arrangements available", "Sound amplification"] },
    ],
    highlights: [
      { icon: "🎻", title: "Custom arrangements", description: "We arrange pop songs and personal favorites for strings." },
      { icon: "💒", title: "Wedding specialists", description: "Over 200 weddings performed — we know every moment that matters." },
    ],
    avatar: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?w=200&h=200&fit=crop",
    experience: "10 years",
    languages: ["Hebrew", "English"],
    eventTypes: ["Wedding Ceremonies", "Cocktail Hours", "Corporate Receptions", "Art Events", "Formal Dinners"],
    reviews: [
      { name: "Pierre D.", location: "Wedding Planner, Tel Aviv", date: "1 week ago", rating: 5, text: "Ori and Shira played at a rooftop wedding ceremony. Their arrangement of the couple's song had everyone in tears. Pure magic.", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" },
    ],
    tags: ["Strings", "Classical", "Weddings", "Duo"],
    verified: true,
    responseTime: "Within 2 hours",
    bookingsCount: 230,
  },
];

export const cities = ["Tel Aviv", "Jerusalem", "Haifa", "Eilat"];
export const genres = ["Jazz", "Classical", "Middle Eastern", "Electronic", "Folk / Pop", "Klezmer", "Flamenco", "Pop / Rock", "Opera / Classical Vocals", "Rock"];
export const eventTypes = ["Weddings", "Corporate Events", "Private Parties", "Bar/Bat Mitzvahs", "Galas", "Product Launches", "Festivals"];

export function getMusicianById(id: string): Musician | undefined {
  return musicians.find((m) => m.id === id);
}

export function getTopRated(): Musician[] {
  return [...musicians].sort((a, b) => b.rating - a.rating).slice(0, 8);
}

export function getMostBooked(): Musician[] {
  return [...musicians].sort((a, b) => (b.bookingsCount || 0) - (a.bookingsCount || 0)).slice(0, 8);
}

export function getByEventType(eventType: string): Musician[] {
  return musicians.filter((m) => m.eventTypes.some((e) => e.toLowerCase().includes(eventType.toLowerCase())));
}
