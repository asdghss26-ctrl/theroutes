export type State = "Tamil Nadu" | "Kerala" | "Karnataka";

export type Duration = "1N2D" | "2N3D" | "3N4D" | "4N5D";

export type Experience =
  | "Hill Station"
  | "Beach"
  | "Heritage"
  | "Nature"
  | "Wildlife"
  | "Adventure"
  | "Family"
  | "Couple"
  | "Backwaters"
  | "Coffee Estate"
  | "Coastal";

export const DURATION_LABELS: Record<Duration, string> = {
  "1N2D": "1N / 2D",
  "2N3D": "2N / 3D",
  "3N4D": "3N / 4D",
  "4N5D": "4N / 5D",
};

export const DURATION_NIGHTS: Record<Duration, { nights: number; days: number }> = {
  "1N2D": { nights: 1, days: 2 },
  "2N3D": { nights: 2, days: 3 },
  "3N4D": { nights: 3, days: 4 },
  "4N5D": { nights: 4, days: 5 },
};

export const ALL_DURATIONS: Duration[] = ["1N2D", "2N3D", "3N4D", "4N5D"];

export const FILTER_EXPERIENCES: Experience[] = [
  "Hill Station",
  "Beach",
  "Heritage",
  "Nature",
  "Wildlife",
  "Adventure",
  "Family",
  "Couple",
];

export interface Destination {
  id: string;
  slug: string;
  name: string;
  state: State;
  image: string;
  shortDescription: string;
  longDescription?: string;
  experiences: Experience[];
  highlights?: string[];
  availableDurations: Duration[];
  primaryDestinations?: string[];
}

export interface ExperienceCategory {
  label: string;
  slug: string;
  description: string;
  experiences: Experience[];
  destinations: string[];
  image: string;
}

export interface RegionInfo {
  state: State;
  label: string;
  description: string;
  destinationNames: string[];
  image: string;
}
