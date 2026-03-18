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
  pricePerHour: number;
  currency: string;
  description: string;
  longDescription: string;
  highlights: { icon: string; title: string; description: string }[];
  hostName: string;
  hostImage: string;
  hostTitle: string;
  availableDates: { date: string; time: string; spotsLeft: number }[];
  reviews: { name: string; location: string; date: string; rating: number; text: string; avatar: string }[];
  meetingPoint: string;
  tags: string[];
  isFavorite?: boolean;
  spotsLabel?: string;
}

export const musicians: Musician[] = [
  {
    id: "1",
    name: "Live Jazz Trio at a Hidden Rooftop Bar",
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
    pricePerHour: 258,
    currency: "₪",
    description: "Experience an intimate jazz performance on a secret rooftop overlooking the Mediterranean.",
    longDescription: "Step into a magical evening where live jazz fills the air on a hidden rooftop in the heart of Tel Aviv. Our trio — piano, double bass, and saxophone — will take you on a 2-hour journey through classic and contemporary jazz standards.\n\nEnjoy a curated selection of Israeli wines and artisan appetizers while the sun sets over the Mediterranean. This is more than a concert — it's an experience that combines world-class musicianship with Tel Aviv's vibrant nightlife culture.\n\nWhether you're a jazz aficionado or a curious newcomer, our intimate setting (max 20 guests) ensures a personal and unforgettable evening.",
    highlights: [
      { icon: "🎵", title: "Meet at the secret entrance", description: "A hidden door on Rothschild Boulevard leads to the rooftop venue." },
      { icon: "🎹", title: "World-class musicians", description: "Our trio features graduates of the Berklee College of Music and Rimon School." },
      { icon: "🍷", title: "Wine & appetizers included", description: "Enjoy Israeli wines paired with Mediterranean tapas throughout the performance." },
      { icon: "🌅", title: "Sunset views", description: "Watch the sun set over the Mediterranean as the music plays." },
    ],
    hostName: "Yoni",
    hostImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    hostTitle: "Founder of Tel Aviv Jazz Collective",
    availableDates: [
      { date: "Tomorrow, March 19", time: "19:00 – 21:00", spotsLeft: 3 },
      { date: "Tomorrow, March 19", time: "21:30 – 23:30", spotsLeft: 0 },
      { date: "Friday, March 20", time: "19:00 – 21:00", spotsLeft: 1 },
      { date: "Tuesday, March 24", time: "19:00 – 21:00", spotsLeft: 10 },
      { date: "Thursday, March 26", time: "19:00 – 21:00", spotsLeft: 8 },
    ],
    reviews: [
      { name: "Sarah", location: "New York, United States", date: "Today", rating: 5, text: "Absolutely magical evening! The jazz trio was incredible and the rooftop setting made it even more special. Yoni was a wonderful host.", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
      { name: "David", location: "London, United Kingdom", date: "Today", rating: 5, text: "Best experience in Tel Aviv. The musicianship was world-class and the atmosphere was intimate and warm. Highly recommend!", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
      { name: "Noa", location: "Tel Aviv, Israel", date: "1 day ago", rating: 5, text: "I've been to many jazz shows but this rooftop experience is truly unique. The wine pairing was perfect.", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" },
      { name: "Michael", location: "Berlin, Germany", date: "1 day ago", rating: 5, text: "A hidden gem! The musicians are top-tier and the view is breathtaking. Will definitely come back.", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" },
      { name: "Amit", location: "Haifa, Israel", date: "3 days ago", rating: 5, text: "Great host and an incredible musical experience!", avatar: "https://images.unsplash.com/photo-1599566150163-29194dcabd9c?w=100&h=100&fit=crop" },
      { name: "Rachel", location: "Los Angeles, United States", date: "5 days ago", rating: 5, text: "We loved the jazz trio so much that we came back the next night. The saxophonist is extraordinarily talented.", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop" },
    ],
    meetingPoint: "Secret entrance, Rothschild Boulevard 42, Tel Aviv",
    tags: ["Jazz", "Live Music", "Rooftop"],
    spotsLabel: "3 spots left",
  },
  {
    id: "2",
    name: "Classical Guitar Sunset Session by the Sea",
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
    pricePerHour: 180,
    currency: "₪",
    description: "A solo classical guitar performance on the Jaffa shore as the sun goes down.",
    longDescription: "Join acclaimed guitarist Daniel for a serene hour of classical guitar on the ancient shores of Jaffa. As the Mediterranean waves lap against the rocks and the sun paints the sky, experience Bach, Rodrigo, and original compositions in an unforgettable seaside setting.",
    highlights: [
      { icon: "🎸", title: "Award-winning guitarist", description: "Daniel has performed at international festivals across Europe and the Middle East." },
      { icon: "🌊", title: "Seaside ambiance", description: "Listen to classical masterpieces with the Mediterranean as your backdrop." },
    ],
    hostName: "Daniel",
    hostImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
    hostTitle: "Concert Guitarist & Composer",
    availableDates: [
      { date: "Tomorrow, March 19", time: "17:00 – 18:30", spotsLeft: 5 },
      { date: "Saturday, March 22", time: "17:00 – 18:30", spotsLeft: 8 },
    ],
    reviews: [
      { name: "Elena", location: "Rome, Italy", date: "2 days ago", rating: 5, text: "One of the most peaceful and beautiful experiences of my trip. Daniel is a virtuoso.", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop" },
    ],
    meetingPoint: "Jaffa Port, Old Jaffa, Tel Aviv",
    tags: ["Classical", "Guitar", "Seaside"],
    spotsLabel: "5 spots left",
  },
  {
    id: "3",
    name: "Middle Eastern Oud & Percussion Night",
    type: "Oud Player & Percussionist",
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
    pricePerHour: 220,
    currency: "₪",
    description: "An enchanting evening of oud and darbuka music in a centuries-old stone courtyard.",
    longDescription: "Discover the soul of the Middle East through the mesmerizing sounds of the oud and darbuka percussion. Set in a beautiful stone courtyard in the Old City of Jerusalem, this intimate gathering brings together the ancient and the contemporary.\n\nMaster oud player Sami and percussionist Khalil will guide you through traditional maqam scales, Sufi-inspired improvisations, and rhythmic journeys that have been passed down through generations. Tea and traditional sweets are served.",
    highlights: [
      { icon: "🏛️", title: "Historic setting", description: "Perform in a courtyard that's been hosting music for centuries." },
      { icon: "🎶", title: "Traditional instruments", description: "Experience the oud and darbuka — instruments with thousands of years of history." },
      { icon: "🍵", title: "Tea & sweets", description: "Enjoy traditional Middle Eastern tea and sweets during the performance." },
    ],
    hostName: "Sami",
    hostImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop",
    hostTitle: "Master Oud Player & Cultural Guide",
    availableDates: [
      { date: "Tomorrow, March 19", time: "20:00 – 22:00", spotsLeft: 2 },
      { date: "Sunday, March 23", time: "20:00 – 22:00", spotsLeft: 7 },
      { date: "Wednesday, March 26", time: "20:00 – 22:00", spotsLeft: 10 },
    ],
    reviews: [
      { name: "Thomas", location: "Paris, France", date: "3 days ago", rating: 5, text: "An absolutely transcendent experience. The music, the setting, the hospitality — everything was perfect.", avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=100&h=100&fit=crop" },
      { name: "Maya", location: "Jerusalem, Israel", date: "1 week ago", rating: 5, text: "Sami is a master of his craft. I've brought friends here three times now and each visit is unique.", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" },
    ],
    meetingPoint: "Armenian Quarter, Old City, Jerusalem",
    tags: ["Middle Eastern", "Oud", "Cultural"],
    spotsLabel: "2 spots left",
  },
  {
    id: "4",
    name: "Electronic Music Production Workshop",
    type: "DJ & Producer",
    genre: "Electronic",
    city: "Tel Aviv",
    image: "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop",
    ],
    rating: 4.86,
    reviewCount: 456,
    pricePerHour: 350,
    currency: "₪",
    description: "Learn the art of electronic music production from a top Tel Aviv DJ in a professional studio.",
    longDescription: "Dive into the world of electronic music production with one of Tel Aviv's most recognized DJs and producers. In this hands-on 3-hour workshop, you'll learn the fundamentals of creating electronic music — from sound design to arrangement to mixing.\n\nThe session takes place in a fully equipped professional studio in south Tel Aviv's creative district. No prior experience needed.",
    highlights: [
      { icon: "🎧", title: "Professional studio", description: "Work with industry-standard equipment in a real production studio." },
      { icon: "💻", title: "Hands-on learning", description: "Create your own track during the workshop and take it home." },
    ],
    hostName: "Nir",
    hostImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop",
    hostTitle: "DJ, Producer & Music Educator",
    availableDates: [
      { date: "Friday, March 20", time: "14:00 – 17:00", spotsLeft: 4 },
      { date: "Monday, March 23", time: "14:00 – 17:00", spotsLeft: 6 },
    ],
    reviews: [
      { name: "Alex", location: "Amsterdam, Netherlands", date: "1 week ago", rating: 5, text: "Amazing workshop! Nir is patient and knowledgeable. I left with a track I'm actually proud of.", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop" },
    ],
    meetingPoint: "Studio 12, Florentin, Tel Aviv",
    tags: ["Electronic", "Workshop", "Production"],
    spotsLabel: "4 spots left",
  },
  {
    id: "5",
    name: "Acoustic Folk & Stories by the Galilee",
    type: "Singer-Songwriter",
    genre: "Folk",
    city: "Tiberias",
    image: "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=800&h=600&fit=crop",
    ],
    rating: 4.92,
    reviewCount: 634,
    pricePerHour: 150,
    currency: "₪",
    description: "Intimate folk songs and storytelling by the shores of the Sea of Galilee.",
    longDescription: "Join singer-songwriter Tamar for an evening of original folk music and stories inspired by the landscapes and legends of the Galilee. The performance takes place on a wooden deck overlooking the Sea of Galilee, under a canopy of stars.\n\nTamar weaves Hebrew and English lyrics with fingerpicked guitar, creating an atmosphere that feels both ancient and modern. Herbal tea and homemade cookies are served.",
    highlights: [
      { icon: "🌟", title: "Under the stars", description: "An open-air performance under the Galilee night sky." },
      { icon: "📖", title: "Stories & songs", description: "Each song comes with the story behind it — from Galilee legends to personal journeys." },
    ],
    hostName: "Tamar",
    hostImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop",
    hostTitle: "Singer-Songwriter & Storyteller",
    availableDates: [
      { date: "Saturday, March 22", time: "20:00 – 21:30", spotsLeft: 6 },
      { date: "Saturday, March 29", time: "20:00 – 21:30", spotsLeft: 10 },
    ],
    reviews: [
      { name: "Jonathan", location: "Haifa, Israel", date: "5 days ago", rating: 5, text: "Tamar's voice and stories are captivating. A truly special evening by the lake.", avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop" },
    ],
    meetingPoint: "Lakeside Deck, Tiberias Promenade",
    tags: ["Folk", "Acoustic", "Storytelling"],
  },
  {
    id: "6",
    name: "Klezmer Band: A Journey Through Eastern Europe",
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
    pricePerHour: 280,
    currency: "₪",
    description: "An energetic klezmer performance in a historic Jerusalem venue with dancing and refreshments.",
    longDescription: "Experience the joy and soul of klezmer music with a six-piece band performing in a beautiful stone-walled hall in Jerusalem's Nachlaot neighborhood. From haunting melodies to exuberant dance tunes, this 2-hour show takes you on a musical journey through Eastern European Jewish culture.\n\nDancing is encouraged! Light refreshments and drinks are included.",
    highlights: [
      { icon: "🎻", title: "Six-piece ensemble", description: "Violin, clarinet, accordion, bass, drums, and vocals." },
      { icon: "💃", title: "Dancing welcome", description: "The music will move you — literally. Dancing is part of the experience!" },
    ],
    hostName: "Moshe",
    hostImage: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&h=200&fit=crop",
    hostTitle: "Klezmer Bandleader & Violinist",
    availableDates: [
      { date: "Thursday, March 20", time: "20:00 – 22:00", spotsLeft: 12 },
      { date: "Thursday, March 27", time: "20:00 – 22:00", spotsLeft: 15 },
    ],
    reviews: [
      { name: "Rebecca", location: "Chicago, United States", date: "3 days ago", rating: 5, text: "What an incredible night! The music had everyone on their feet dancing. Moshe and the band are phenomenal.", avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop" },
    ],
    meetingPoint: "Nachlaot Community Hall, Jerusalem",
    tags: ["Klezmer", "Band", "Dancing"],
  },
  {
    id: "7",
    name: "Flamenco Guitar Under the Desert Stars",
    type: "Flamenco Guitarist",
    genre: "Flamenco",
    city: "Eilat",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=800&h=600&fit=crop",
    ],
    rating: 4.95,
    reviewCount: 389,
    pricePerHour: 200,
    currency: "₪",
    description: "A passionate flamenco guitar performance in the heart of the Negev desert near Eilat.",
    longDescription: "Under a blanket of stars in the Negev desert, experience the fire and passion of flamenco guitar. Guitarist Carlos brings the spirit of Andalusia to the desert, performing traditional flamenco alongside original compositions inspired by the Israeli landscape.",
    highlights: [
      { icon: "🌵", title: "Desert setting", description: "An open-air stage in the stunning Negev desert." },
      { icon: "🔥", title: "Passionate performance", description: "Feel the intensity and emotion of authentic flamenco guitar." },
    ],
    hostName: "Carlos",
    hostImage: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=200&h=200&fit=crop",
    hostTitle: "Flamenco Guitarist",
    availableDates: [
      { date: "Friday, March 20", time: "20:30 – 22:00", spotsLeft: 8 },
    ],
    reviews: [
      { name: "Sofia", location: "Madrid, Spain", date: "1 week ago", rating: 5, text: "As a Spaniard, I was skeptical about flamenco in the desert. Carlos proved me wrong — it was breathtaking.", avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop" },
    ],
    meetingPoint: "Desert Stage, 20 min north of Eilat",
    tags: ["Flamenco", "Guitar", "Desert"],
  },
  {
    id: "8",
    name: "Piano Recital in a Historic Haifa Mansion",
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
    pricePerHour: 190,
    currency: "₪",
    description: "An intimate piano recital in a beautifully restored Ottoman-era mansion on Mount Carmel.",
    longDescription: "Experience classical piano at its finest in an intimate setting — a lovingly restored Ottoman mansion perched on Mount Carmel with panoramic views of Haifa Bay. Pianist Lena performs works by Chopin, Debussy, and Israeli composers in a salon that seats just 15 guests.\n\nWine and cheese are served in the garden before the performance.",
    highlights: [
      { icon: "🏠", title: "Historic venue", description: "A stunning Ottoman-era mansion with original stone walls and arched windows." },
      { icon: "🎹", title: "World-class pianist", description: "Lena has performed at concert halls across Europe and Israel." },
    ],
    hostName: "Lena",
    hostImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop",
    hostTitle: "Concert Pianist",
    availableDates: [
      { date: "Sunday, March 22", time: "18:00 – 19:30", spotsLeft: 3 },
      { date: "Sunday, March 29", time: "18:00 – 19:30", spotsLeft: 7 },
    ],
    reviews: [
      { name: "Anna", location: "Vienna, Austria", date: "4 days ago", rating: 5, text: "Lena's Chopin was magnificent. The mansion setting was like stepping back in time. A must-do in Haifa.", avatar: "https://images.unsplash.com/photo-1541823709867-1b206113eafd?w=100&h=100&fit=crop" },
    ],
    meetingPoint: "Ottoman Mansion, Mount Carmel, Haifa",
    tags: ["Classical", "Piano", "Historic"],
    spotsLabel: "3 spots left",
  },
  {
    id: "9",
    name: "Reggae & Drum Circle on the Beach",
    type: "Reggae Band",
    genre: "Reggae",
    city: "Tel Aviv",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=600&fit=crop",
    ],
    rating: 4.82,
    reviewCount: 1045,
    pricePerHour: 120,
    currency: "₪",
    description: "Join a reggae band and drum circle right on the Tel Aviv beach at sunset.",
    longDescription: "Feel the rhythm of Tel Aviv with this unique beach reggae experience. A live reggae band sets the vibe as the sun goes down, and everyone is invited to join the drum circle. Drums and percussion instruments are provided — no experience needed.\n\nThis communal music experience captures the free-spirited energy of Tel Aviv's beach culture.",
    highlights: [
      { icon: "🥁", title: "Join the drum circle", description: "Instruments provided — play along with the band!" },
      { icon: "🏖️", title: "Beach vibes", description: "Right on the sand at sunset — the perfect Tel Aviv experience." },
    ],
    hostName: "Avi",
    hostImage: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&h=200&fit=crop",
    hostTitle: "Reggae Musician & Community Builder",
    availableDates: [
      { date: "Tomorrow, March 19", time: "17:30 – 19:30", spotsLeft: 15 },
      { date: "Friday, March 21", time: "17:30 – 19:30", spotsLeft: 20 },
    ],
    reviews: [
      { name: "Tom", location: "Melbourne, Australia", date: "2 days ago", rating: 5, text: "Such a fun and inclusive experience! The band was great and the drum circle was the highlight of my trip.", avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop" },
    ],
    meetingPoint: "Frishman Beach, Tel Aviv",
    tags: ["Reggae", "Drums", "Beach"],
  },
  {
    id: "10",
    name: "Opera Night in a Caesarea Amphitheater",
    type: "Opera Singer",
    genre: "Opera",
    city: "Caesarea",
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop",
    ],
    rating: 4.96,
    reviewCount: 412,
    pricePerHour: 320,
    currency: "₪",
    description: "A breathtaking opera performance in the ancient Roman amphitheater of Caesarea.",
    longDescription: "Experience the power of the human voice in one of the world's most spectacular settings — the 2,000-year-old Roman amphitheater in Caesarea. Soprano Marina and tenor Eitan perform arias from Verdi, Puccini, and Bizet, accompanied by a pianist.\n\nThe ancient acoustics, the Mediterranean breeze, and the star-filled sky create an evening you'll never forget.",
    highlights: [
      { icon: "🏛️", title: "2,000-year-old venue", description: "Perform in a Roman amphitheater with legendary acoustics." },
      { icon: "🎤", title: "World-class vocalists", description: "Marina and Eitan have performed with the Israeli Opera and international companies." },
    ],
    hostName: "Marina",
    hostImage: "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?w=200&h=200&fit=crop",
    hostTitle: "Soprano & Artistic Director",
    availableDates: [
      { date: "Saturday, March 22", time: "20:00 – 21:30", spotsLeft: 25 },
      { date: "Saturday, March 29", time: "20:00 – 21:30", spotsLeft: 30 },
    ],
    reviews: [
      { name: "Claire", location: "Lyon, France", date: "1 week ago", rating: 5, text: "Hearing opera in the Caesarea amphitheater was a once-in-a-lifetime experience. Marina's voice gave me chills.", avatar: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=100&h=100&fit=crop" },
    ],
    meetingPoint: "Caesarea National Park, Amphitheater Entrance",
    tags: ["Opera", "Historic", "Amphitheater"],
  },
  {
    id: "11",
    name: "Rock Band Live at Underground Bar",
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
    pricePerHour: 160,
    currency: "₪",
    description: "High-energy rock show at one of Tel Aviv's best underground music venues.",
    longDescription: "Experience Tel Aviv's legendary underground rock scene firsthand. Four-piece band The Voltage plays a high-energy set of original songs and classic covers at a gritty, intimate venue in south Tel Aviv. The bar serves craft beers from local microbreweries.",
    highlights: [
      { icon: "🎸", title: "Raw energy", description: "Up-close rock experience in a venue that holds just 80 people." },
      { icon: "🍺", title: "Craft beer", description: "Local microbrews on tap to fuel the night." },
    ],
    hostName: "Gal",
    hostImage: "https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?w=200&h=200&fit=crop",
    hostTitle: "Lead Singer, The Voltage",
    availableDates: [
      { date: "Thursday, March 20", time: "22:00 – 00:00", spotsLeft: 20 },
      { date: "Thursday, March 27", time: "22:00 – 00:00", spotsLeft: 25 },
    ],
    reviews: [
      { name: "Jake", location: "Austin, United States", date: "1 week ago", rating: 5, text: "As someone from Austin, I know good live music — and this was fantastic. Great band, great venue.", avatar: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=100&h=100&fit=crop" },
    ],
    meetingPoint: "The Bunker, Florentin, Tel Aviv",
    tags: ["Rock", "Live Band", "Underground"],
  },
  {
    id: "12",
    name: "Violin & Cello Duo in a Wine Cave",
    type: "String Duo",
    genre: "Classical",
    city: "Zichron Ya'akov",
    image: "https://images.unsplash.com/photo-1612225330812-01a9c73fcbdc?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1612225330812-01a9c73fcbdc?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1474030474879-4f8f74a72966?w=800&h=600&fit=crop",
    ],
    rating: 4.93,
    reviewCount: 321,
    pricePerHour: 250,
    currency: "₪",
    description: "A violin and cello performance in an actual wine cave, paired with local wines.",
    longDescription: "Descend into a beautiful wine cave in the historic wine village of Zichron Ya'akov for an intimate classical music experience. Violinist Ori and cellist Shira perform duets by Handel, Ravel, and contemporary Israeli composers, while you sip wines from the estate's own vineyards.\n\nThe cave's natural acoustics create a sound quality that rivals any concert hall.",
    highlights: [
      { icon: "🍷", title: "Wine tasting included", description: "Three wines from the estate paired with the music." },
      { icon: "🕯️", title: "Candlelit cave", description: "A magical atmosphere in a centuries-old wine cave." },
    ],
    hostName: "Ori",
    hostImage: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?w=200&h=200&fit=crop",
    hostTitle: "Violinist & Musical Director",
    availableDates: [
      { date: "Saturday, March 22", time: "19:00 – 20:30", spotsLeft: 2 },
      { date: "Saturday, March 29", time: "19:00 – 20:30", spotsLeft: 5 },
    ],
    reviews: [
      { name: "Pierre", location: "Bordeaux, France", date: "6 days ago", rating: 5, text: "Music and wine in a cave — it sounds like a dream and it was. The acoustics were phenomenal.", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" },
    ],
    meetingPoint: "Wine Estate, Zichron Ya'akov",
    tags: ["Classical", "Wine", "String Duo"],
    spotsLabel: "2 spots left",
  },
];

export const cities = ["Tel Aviv", "Jerusalem", "Haifa", "Eilat", "Tiberias", "Caesarea", "Zichron Ya'akov"];
export const genres = ["Jazz", "Classical", "Middle Eastern", "Electronic", "Folk", "Klezmer", "Flamenco", "Reggae", "Opera", "Rock"];

export function getMusiciansByCity(city: string): Musician[] {
  return musicians.filter((m) => m.city === city);
}

export function getMusiciansByGenre(genre: string): Musician[] {
  return musicians.filter((m) => m.genre === genre);
}

export function getMusicianById(id: string): Musician | undefined {
  return musicians.find((m) => m.id === id);
}

export function getFeaturedMusicians(): Musician[] {
  return musicians.filter((m) => m.rating >= 4.9).slice(0, 7);
}

export function getPopularInCity(city: string): Musician[] {
  return musicians.filter((m) => m.city === city).sort((a, b) => b.reviewCount - a.reviewCount);
}
