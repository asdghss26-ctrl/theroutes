import type { Metadata } from "next";
import PackagesClient from "./_components/PackagesClient";

export const metadata: Metadata = {
  title: "Tour Packages — The Routes | South India Travel",
  description:
    "Browse all South India tour packages across Tamil Nadu, Kerala & Karnataka. Filter by region, duration, and experience type. 23+ curated destinations.",
};

interface PackagesPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function PackagesPage({ searchParams }: PackagesPageProps) {
  const sp = await searchParams;

  const initialRegion = typeof sp.region === "string" ? sp.region : "";
  const initialDuration = typeof sp.duration === "string" ? sp.duration : "";
  const initialExperience = typeof sp.experience === "string" ? sp.experience : "";
  const initialQuery = typeof sp.q === "string" ? sp.q : "";

  return (
    <PackagesClient
      initialRegion={initialRegion}
      initialDuration={initialDuration}
      initialExperience={initialExperience}
      initialQuery={initialQuery}
    />
  );
}
