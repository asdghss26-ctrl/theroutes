import type {
  Destination,
  ExperienceCategory,
  RegionInfo,
  State,
} from "./types";

// ─── All Destinations ──────────────────────────────────────────────────────────

export const destinations: Destination[] = [
  // ── TAMIL NADU ────────────────────────────────────────────────────────────
  {
    id: "kodaikanal",
    slug: "kodaikanal",
    name: "Kodaikanal",
    state: "Tamil Nadu",
    image:
      "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "The Princess of Hill Stations — mist, pine forests, and a shimmering lake at 2,133 metres.",
    longDescription:
      "Kodaikanal sits high in the Palani Hills, famous for its cool climate, forested trails, and the iconic Kodaikanal Lake. A rare combination of natural beauty and peaceful solitude far from the plains.",
    experiences: ["Hill Station", "Nature", "Couple", "Family"],
    highlights: [
      "Kodaikanal Lake",
      "Coaker's Walk",
      "Pillar Rocks",
      "Bryant Park",
      "Silver Cascade Falls",
    ],
    availableDurations: ["1N2D", "2N3D", "3N4D", "4N5D"],
    primaryDestinations: ["Kodaikanal"],
  },
  {
    id: "ooty",
    slug: "ooty",
    name: "Ooty",
    state: "Tamil Nadu",
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "The Queen of Hill Stations — rolling tea gardens, the iconic toy train, and the Nilgiri Blue Mountains.",
    longDescription:
      "Ooty (Udhagamandalam) is nestled in the Nilgiri Mountains and famous for its lush tea estates, colonial heritage, and the UNESCO-listed Nilgiri Mountain Railway.",
    experiences: ["Hill Station", "Nature", "Family", "Heritage"],
    highlights: [
      "Ooty Lake",
      "Botanical Gardens",
      "Doddabetta Peak",
      "Nilgiri Mountain Railway",
      "Tea Museum",
    ],
    availableDurations: ["1N2D", "2N3D", "3N4D", "4N5D"],
    primaryDestinations: ["Ooty"],
  },
  {
    id: "yercaud",
    slug: "yercaud",
    name: "Yercaud",
    state: "Tamil Nadu",
    image:
      "https://images.unsplash.com/photo-1601160296149-5e4d2ff0c4d4?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "The Jewel of the South — a quiet hill retreat amid coffee and orange plantations in the Shevaroy Hills.",
    longDescription:
      "Yercaud offers a peaceful alternative to busier hill stations, with serene lakes, spice gardens, and forested hills at around 1,515 metres in the Eastern Ghats of Salem district.",
    experiences: ["Hill Station", "Nature", "Couple", "Family"],
    highlights: [
      "Yercaud Lake",
      "Lady's Seat Viewpoint",
      "Pagoda Point",
      "Bear's Cave",
      "Shevaroyan Temple",
    ],
    availableDurations: ["1N2D", "2N3D", "3N4D", "4N5D"],
    primaryDestinations: ["Yercaud"],
  },
  {
    id: "yelagiri",
    slug: "yelagiri",
    name: "Yelagiri",
    state: "Tamil Nadu",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "A serene hilltop plateau — small, unhurried, and surrounded by lush valleys and orchards.",
    longDescription:
      "Yelagiri is a small hill station in Vellore district rising to about 1,100 metres. Known for its trekking trails, rose gardens, and the peace of its plateau landscape.",
    experiences: ["Hill Station", "Nature", "Adventure", "Couple"],
    highlights: [
      "Yelagiri Lake",
      "Jalagamparai Waterfalls",
      "Swamimalai Hills Trek",
      "Punganur Lake",
      "Velavan Temple",
    ],
    availableDurations: ["1N2D", "2N3D", "3N4D"],
    primaryDestinations: ["Yelagiri"],
  },
  {
    id: "kanyakumari",
    slug: "kanyakumari",
    name: "Kanyakumari",
    state: "Tamil Nadu",
    image:
      "https://images.unsplash.com/photo-1604154895878-5a1a7c7e3dd4?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "India's southernmost tip — where the Arabian Sea, Bay of Bengal, and Indian Ocean converge.",
    longDescription:
      "Kanyakumari is a unique pilgrimage and tourism destination at the confluence of three seas, famous for spectacular sunrises and sunsets, the Vivekananda Rock Memorial, and Thiruvalluvar Statue.",
    experiences: ["Heritage", "Coastal", "Nature", "Family"],
    highlights: [
      "Triveni Sangam",
      "Vivekananda Rock Memorial",
      "Thiruvalluvar Statue",
      "Kumari Amman Temple",
      "Sunrise Point",
    ],
    availableDurations: ["1N2D", "2N3D", "3N4D", "4N5D"],
    primaryDestinations: ["Kanyakumari"],
  },
  {
    id: "madurai-rameshwaram",
    slug: "madurai-rameshwaram",
    name: "Madurai + Rameshwaram",
    state: "Tamil Nadu",
    image:
      "https://images.unsplash.com/photo-1596177813764-0cc01bb9c56c?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "Two ancient temple cities — Madurai's Meenakshi Temple and Rameshwaram's sacred shores.",
    longDescription:
      "A heritage trail through Tamil Nadu's most revered spiritual destinations. Madurai, the Athens of the East, is dominated by the spectacular Meenakshi Amman Temple. Rameshwaram is one of Hinduism's four holy dhams.",
    experiences: ["Heritage", "Coastal", "Family"],
    highlights: [
      "Meenakshi Amman Temple",
      "Ramanathaswamy Temple",
      "Pamban Bridge",
      "Adam's Bridge",
      "Thiruparankundram",
    ],
    availableDurations: ["2N3D", "3N4D", "4N5D"],
    primaryDestinations: ["Madurai", "Rameshwaram"],
  },
  {
    id: "pondicherry",
    slug: "pondicherry",
    name: "Pondicherry",
    state: "Tamil Nadu",
    image:
      "https://images.unsplash.com/photo-1582510003544-b82f22c5bf6f?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "A slice of French India — colonial boulevards, sea-facing promenades, and spiritual Auroville.",
    longDescription:
      "Puducherry blends French colonial architecture with South Indian culture in a unique coastal setting. Famous for its heritage town, beach promenade, Auroville township, and vibrant café culture.",
    experiences: ["Heritage", "Beach", "Coastal", "Couple", "Family"],
    highlights: [
      "French Quarter",
      "Promenade Beach",
      "Auroville",
      "Aurobindo Ashram",
      "Basilica of the Sacred Heart",
    ],
    availableDurations: ["1N2D", "2N3D", "3N4D", "4N5D"],
    primaryDestinations: ["Pondicherry"],
  },

  // ── KERALA ────────────────────────────────────────────────────────────────
  {
    id: "kanthalloor-marayoor",
    slug: "kanthalloor-marayoor",
    name: "Kanthalloor + Marayoor",
    state: "Kerala",
    image:
      "https://images.unsplash.com/photo-1601922046914-2b5b3c8d27e7?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "Kerala's hidden highlands — apple orchards, natural sandalwood forests, and ancient Neolithic dolmens.",
    longDescription:
      "Kanthalloor is famed for its apple, pear, and fig plantations at high altitude. Nearby Marayoor is home to natural sandalwood forests, Neolithic dolmens, and the Pambar River flowing through pristine wilderness.",
    experiences: ["Nature", "Hill Station", "Adventure", "Couple"],
    highlights: [
      "Apple & Pear Orchards",
      "Marayoor Sandalwood Forest",
      "Muniyara Dolmens",
      "Pambar River",
      "Chinnar Wildlife Sanctuary",
    ],
    availableDurations: ["1N2D", "2N3D", "3N4D"],
    primaryDestinations: ["Kanthalloor", "Marayoor"],
  },
  {
    id: "kanthalloor-munnar",
    slug: "kanthalloor-munnar",
    name: "Kanthalloor + Munnar",
    state: "Kerala",
    image:
      "https://images.unsplash.com/photo-1593604572577-1c6c44fa1ab3?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "From apple country to tea country — two of Kerala's most scenic highland experiences in one journey.",
    longDescription:
      "Combine the fruit orchards of Kanthalloor with the iconic tea estates of Munnar for a varied highland journey through dramatic Ghats scenery and two distinct high-altitude ecosystems.",
    experiences: ["Hill Station", "Nature", "Couple", "Family"],
    highlights: [
      "Kanthalloor Orchards",
      "Munnar Tea Gardens",
      "Mattupetty Dam",
      "Eravikulam National Park",
      "Top Station",
    ],
    availableDurations: ["2N3D", "3N4D", "4N5D"],
    primaryDestinations: ["Kanthalloor", "Munnar"],
  },
  {
    id: "munnar",
    slug: "munnar",
    name: "Munnar",
    state: "Kerala",
    image:
      "https://images.unsplash.com/photo-1593604572577-1c6c44fa1ab3?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "Kerala's crown jewel — emerald tea estates carpeting endless mountain ridges at 1,600 metres.",
    longDescription:
      "Munnar, meaning 'three rivers,' sits at the confluence of the Muthirapuzha, Nallathanni, and Kundaly rivers. It is home to some of India's highest tea plantations and rich biodiversity including the endangered Nilgiri Tahr.",
    experiences: ["Hill Station", "Nature", "Couple", "Family", "Wildlife"],
    highlights: [
      "Mattupetty Dam",
      "Eravikulam National Park",
      "Tea Museum",
      "Top Station",
      "Anamudi Peak",
      "Attukal Waterfalls",
    ],
    availableDurations: ["1N2D", "2N3D", "3N4D", "4N5D"],
    primaryDestinations: ["Munnar"],
  },
  {
    id: "alleppey-munnar",
    slug: "alleppey-munnar",
    name: "Alleppey + Munnar",
    state: "Kerala",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "The perfect Kerala dual — backwater serenity followed by highland tea country.",
    longDescription:
      "This popular route combines the backwater experience of Alleppey — houseboat cruises through palm-lined canals — with the cool elevation and tea gardens of Munnar. Two contrasting and equally spectacular landscapes.",
    experiences: ["Backwaters", "Hill Station", "Nature", "Couple", "Family"],
    highlights: [
      "Alleppey Backwaters",
      "Houseboat Stay",
      "Munnar Tea Estates",
      "Vembanad Lake",
      "Eravikulam NP",
    ],
    availableDurations: ["2N3D", "3N4D", "4N5D"],
    primaryDestinations: ["Alleppey", "Munnar"],
  },
  {
    id: "alleppey-vagamon",
    slug: "alleppey-vagamon",
    name: "Alleppey + Vagamon",
    state: "Kerala",
    image:
      "https://images.unsplash.com/photo-1591195853828-11db59a44f43?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "Backwaters to meadows — Kerala's tranquil alternative highland route.",
    longDescription:
      "Begin with Alleppey's famous backwater experience before ascending to Vagamon, a quiet highland plateau known for its rolling meadows, pine forests, and paragliding — a less-crowded alternative to the standard Kerala routes.",
    experiences: ["Backwaters", "Hill Station", "Nature", "Adventure", "Couple"],
    highlights: [
      "Alleppey Backwaters",
      "Vagamon Meadows",
      "Pine Forest",
      "Paragliding",
      "Thangal Hill",
    ],
    availableDurations: ["2N3D", "3N4D", "4N5D"],
    primaryDestinations: ["Alleppey", "Vagamon"],
  },
  {
    id: "vagamon-thekkady",
    slug: "vagamon-thekkady",
    name: "Vagamon + Thekkady",
    state: "Kerala",
    image:
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "Misty meadows and wildlife country — a journey through Kerala's interior highlands.",
    longDescription:
      "Vagamon's green plateau transitions into Thekkady, home to the Periyar Wildlife Sanctuary and one of India's most important tiger reserves. This route blends pastoral highlands with dense jungle and spice plantations.",
    experiences: ["Hill Station", "Nature", "Wildlife", "Adventure", "Family"],
    highlights: [
      "Vagamon Meadows",
      "Periyar Lake",
      "Periyar Wildlife Sanctuary",
      "Spice Plantations",
      "Bamboo Rafting",
    ],
    availableDurations: ["2N3D", "3N4D", "4N5D"],
    primaryDestinations: ["Vagamon", "Thekkady"],
  },
  {
    id: "varkala",
    slug: "varkala",
    name: "Varkala",
    state: "Kerala",
    image:
      "https://images.unsplash.com/photo-1523372154702-fafbf9afb0e4?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "A clifftop paradise — dramatic red laterite cliffs meeting an impossibly blue Arabian Sea.",
    longDescription:
      "Varkala is Kerala's most distinctive beach destination, with striking cliffs dropping straight into the sea and a North Cliff promenade lined with cafes and yoga studios. Papanasam Beach below has deep sacred significance.",
    experiences: ["Beach", "Coastal", "Couple", "Nature", "Adventure"],
    highlights: [
      "North Cliff",
      "Papanasam Beach",
      "Janardanaswamy Temple",
      "Helipad Viewpoint",
      "Natural Springs",
    ],
    availableDurations: ["1N2D", "2N3D", "3N4D", "4N5D"],
    primaryDestinations: ["Varkala"],
  },
  {
    id: "alleppey-munnar-athirappilly",
    slug: "alleppey-munnar-athirappilly",
    name: "Alleppey + Munnar + Athirappilly",
    state: "Kerala",
    image:
      "https://images.unsplash.com/photo-1536165328895-90e1c0f02ca6?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "Kerala's greatest trio — backwaters, mountains, and India's most spectacular waterfall.",
    longDescription:
      "The ultimate Kerala experience combining three distinct wonders: Alleppey's serene backwaters, Munnar's tea-covered highlands, and the majestic Athirappilly Falls — South India's largest waterfall hidden in the Sholayar forests.",
    experiences: ["Backwaters", "Hill Station", "Nature", "Wildlife", "Family", "Adventure"],
    highlights: [
      "Alleppey Backwaters",
      "Munnar Tea Estates",
      "Athirappilly Falls",
      "Vazhachal Falls",
      "Eravikulam NP",
    ],
    availableDurations: ["3N4D", "4N5D"],
    primaryDestinations: ["Alleppey", "Munnar", "Athirappilly"],
  },
  {
    id: "wayanad",
    slug: "wayanad",
    name: "Wayanad",
    state: "Kerala",
    image:
      "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "Kerala's green paradise — ancient tribal heritage, dense rainforests, and wildlife.",
    longDescription:
      "Wayanad is one of Kerala's most ecologically rich districts, covered in dense forests, coffee and tea estates, and ancient Edakkal Caves. Home to elephants, leopards, and tribal communities with a deep connection to the land.",
    experiences: ["Nature", "Wildlife", "Adventure", "Heritage", "Hill Station"],
    highlights: [
      "Edakkal Caves",
      "Chembra Peak",
      "Banasura Sagar Dam",
      "Nagarhole NP",
      "Soochipara Falls",
    ],
    availableDurations: ["1N2D", "2N3D", "3N4D", "4N5D"],
    primaryDestinations: ["Wayanad"],
  },

  // ── KARNATAKA ─────────────────────────────────────────────────────────────
  {
    id: "mysore",
    slug: "mysore",
    name: "Mysore",
    state: "Karnataka",
    image:
      "https://images.unsplash.com/photo-1607427293702-036933bbf746?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "The City of Palaces — India's finest palace illuminated by 100,000 lights every Sunday.",
    longDescription:
      "Mysore (Mysuru) is Karnataka's cultural capital and one of India's most graceful cities. The magnificent Mysore Palace, Chamundi Hills, Brindavan Gardens, and Devaraja Market make it an essential heritage destination.",
    experiences: ["Heritage", "Family", "Nature", "Couple"],
    highlights: [
      "Mysore Palace",
      "Chamundi Hills",
      "Brindavan Gardens",
      "Devaraja Market",
      "St Philomena's Church",
    ],
    availableDurations: ["1N2D", "2N3D", "3N4D", "4N5D"],
    primaryDestinations: ["Mysore"],
  },
  {
    id: "mysore-coorg",
    slug: "mysore-coorg",
    name: "Mysore + Coorg",
    state: "Karnataka",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "Heritage city meets Scotland of India — palaces and coffee estates in one journey.",
    longDescription:
      "Pair Mysore's regal palace culture with Coorg's misty coffee plantations, river rapids, and lush forests. This popular Karnataka route offers a beautifully contrasting experience of history and nature.",
    experiences: ["Heritage", "Nature", "Coffee Estate", "Adventure", "Couple", "Family"],
    highlights: [
      "Mysore Palace",
      "Abbey Falls",
      "Raja's Seat",
      "Nagarhole NP",
      "Coffee Plantation Walk",
    ],
    availableDurations: ["2N3D", "3N4D", "4N5D"],
    primaryDestinations: ["Mysore", "Coorg"],
  },
  {
    id: "coorg",
    slug: "coorg",
    name: "Coorg",
    state: "Karnataka",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "The Scotland of India — misty coffee country, rolling hills, and river rapids.",
    longDescription:
      "Coorg (Kodagu) is Karnataka's most enchanting hill district, famous for its vast coffee and cardamom estates, rolling misty hills, and the vibrant Kodava culture. Abbey Falls, Nagarhole National Park, and Brahmagiri Hills await.",
    experiences: ["Hill Station", "Nature", "Adventure", "Coffee Estate", "Wildlife", "Couple", "Family"],
    highlights: [
      "Abbey Falls",
      "Nagarhole National Park",
      "Raja's Seat",
      "Talakaveri",
      "Mandalpatti Peak",
      "Cauvery River",
    ],
    availableDurations: ["1N2D", "2N3D", "3N4D", "4N5D"],
    primaryDestinations: ["Coorg"],
  },
  {
    id: "mysore-chikmagalur",
    slug: "mysore-chikmagalur",
    name: "Mysore + Chikmagalur",
    state: "Karnataka",
    image:
      "https://images.unsplash.com/photo-1472791108553-c9405341e398?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "Palace grandeur to coffee highlands — a Karnataka journey of culture and nature.",
    longDescription:
      "Start with Mysore's heritage splendour before heading to Chikmagalur's coffee-growing highlands. This route covers Karnataka's most contrasting landscapes — from ornate palace architecture to misty mountain coffee estates.",
    experiences: ["Heritage", "Nature", "Coffee Estate", "Hill Station", "Family"],
    highlights: [
      "Mysore Palace",
      "Mullayanagiri Peak",
      "Baba Budangiri",
      "Hebbe Falls",
      "Kemmanagundi",
    ],
    availableDurations: ["2N3D", "3N4D", "4N5D"],
    primaryDestinations: ["Mysore", "Chikmagalur"],
  },
  {
    id: "chikmagalur",
    slug: "chikmagalur",
    name: "Chikmagalur",
    state: "Karnataka",
    image:
      "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "Birthplace of Indian coffee — mountain trekking, misty estates, and Western Ghats wilderness.",
    longDescription:
      "Chikmagalur is where coffee first arrived in India, brought by Baba Budan from Yemen. Today it's one of Karnataka's most scenic destinations, with the peak of Mullayanagiri, dense Bhadra Wildlife Sanctuary forests, and colonial-era coffee estates.",
    experiences: ["Hill Station", "Nature", "Adventure", "Coffee Estate", "Wildlife", "Couple"],
    highlights: [
      "Mullayanagiri Peak",
      "Baba Budangiri Hills",
      "Hebbe Falls",
      "Bhadra Wildlife Sanctuary",
      "Kemmanagundi",
    ],
    availableDurations: ["1N2D", "2N3D", "3N4D", "4N5D"],
    primaryDestinations: ["Chikmagalur"],
  },
  {
    id: "gokarna-dandeli",
    slug: "gokarna-dandeli",
    name: "Gokarna + Dandeli",
    state: "Karnataka",
    image:
      "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "Sacred beaches to jungle adventures — Karnataka's coastal and wildlife contrast.",
    longDescription:
      "Gokarna offers pristine beaches and ancient temples along Karnataka's undeveloped Konkan coast. Dandeli, in the Western Ghats forest, is Karnataka's premier adventure destination with white-water rafting, wildlife safaris, and deep forest treks.",
    experiences: ["Beach", "Adventure", "Wildlife", "Nature", "Heritage", "Coastal"],
    highlights: [
      "Om Beach",
      "Gokarna Temple",
      "Kudle Beach",
      "Dandeli White-Water Rafting",
      "Dandeli Wildlife Sanctuary",
    ],
    availableDurations: ["2N3D", "3N4D", "4N5D"],
    primaryDestinations: ["Gokarna", "Dandeli"],
  },
  {
    id: "gokarna-dandeli-murudeshwar",
    slug: "gokarna-dandeli-murudeshwar",
    name: "Gokarna + Dandeli + Murudeshwar",
    state: "Karnataka",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "Karnataka's ultimate coastal-adventure-heritage trail — beaches, rapids, and temples.",
    longDescription:
      "The most complete Karnataka coastal route, combining Gokarna's sacred beaches, Dandeli's thrilling river adventures, and Murudeshwar's iconic 21-storey Shiva statue overlooking the Arabian Sea.",
    experiences: ["Beach", "Adventure", "Heritage", "Coastal", "Wildlife", "Nature"],
    highlights: [
      "Gokarna Beaches",
      "Murudeshwar Shiva Statue",
      "Dandeli Rafting",
      "RCF Beach Murudeshwar",
      "Nagara Fort",
    ],
    availableDurations: ["3N4D", "4N5D"],
    primaryDestinations: ["Gokarna", "Dandeli", "Murudeshwar"],
  },
];

// ─── Lookup helpers ────────────────────────────────────────────────────────────

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}

export function getDestinationsByState(state: State): Destination[] {
  return destinations.filter((d) => d.state === state);
}

// ─── Region data ───────────────────────────────────────────────────────────────

export const REGIONS: RegionInfo[] = [
  {
    state: "Tamil Nadu",
    label: "Tamil Nadu",
    description:
      "From misty hill stations to ancient temples and coastal escapes.",
    destinationNames: [
      "Kodaikanal",
      "Ooty",
      "Yercaud",
      "Yelagiri",
      "Kanyakumari",
      "Madurai",
      "Rameshwaram",
      "Pondicherry",
    ],
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1600&q=80",
  },
  {
    state: "Kerala",
    label: "Kerala",
    description:
      "Backwaters, mountains, waterfalls, and slow travel through God's Own Country.",
    destinationNames: [
      "Munnar",
      "Alleppey",
      "Wayanad",
      "Vagamon",
      "Thekkady",
      "Varkala",
      "Kanthalloor",
      "Marayoor",
      "Athirappilly",
    ],
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=80",
  },
  {
    state: "Karnataka",
    label: "Karnataka",
    description:
      "Coffee country, heritage cities, wild landscapes, and sacred beaches.",
    destinationNames: [
      "Mysore",
      "Coorg",
      "Chikmagalur",
      "Gokarna",
      "Dandeli",
      "Murudeshwar",
    ],
    image:
      "https://images.unsplash.com/photo-1607427293702-036933bbf746?auto=format&fit=crop&w=1600&q=80",
  },
];

// ─── Experience categories ─────────────────────────────────────────────────────

export const EXPERIENCE_CATEGORIES: ExperienceCategory[] = [
  {
    label: "Mountain Escapes",
    slug: "Hill Station",
    description: "Cool hills, mist, and mountain air across the Western Ghats",
    experiences: ["Hill Station", "Nature"],
    destinations: ["kodaikanal", "ooty", "munnar", "wayanad", "coorg", "chikmagalur"],
    image:
      "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Backwater Journeys",
    slug: "Backwaters",
    description: "Houseboat dreams drifting through Kerala's emerald canals",
    experiences: ["Backwaters"],
    destinations: ["alleppey-munnar", "alleppey-vagamon", "alleppey-munnar-athirappilly"],
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Coastal Getaways",
    slug: "Beach",
    description: "Sea, sacred beaches, and coastal escapes along India's west",
    experiences: ["Beach", "Coastal"],
    destinations: ["varkala", "gokarna-dandeli", "kanyakumari", "pondicherry"],
    image:
      "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Heritage Trails",
    slug: "Heritage",
    description: "Temples, palaces, and living history across the Deccan",
    experiences: ["Heritage"],
    destinations: ["mysore", "madurai-rameshwaram", "pondicherry", "kanyakumari"],
    image:
      "https://images.unsplash.com/photo-1607427293702-036933bbf746?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Adventure & Nature",
    slug: "Adventure",
    description: "Wildlife, rivers, jungle trails, and untamed landscapes",
    experiences: ["Adventure", "Wildlife"],
    destinations: ["gokarna-dandeli", "vagamon-thekkady", "chikmagalur", "wayanad"],
    image:
      "https://images.unsplash.com/photo-1566395724895-9f7a34e91994?auto=format&fit=crop&w=1200&q=80",
  },
];

// ─── Gallery strip ─────────────────────────────────────────────────────────────

export const GALLERY_SLUGS = [
  "kodaikanal",
  "munnar",
  "ooty",
  "coorg",
  "wayanad",
  "alleppey-munnar",
  "gokarna-dandeli",
  "chikmagalur",
  "varkala",
  "yercaud",
  "kanyakumari",
  "pondicherry",
];
