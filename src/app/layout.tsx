import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileFloatingCTA from "@/components/layout/MobileFloatingCTA";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Routes — South India Travel",
  description:
    "Curated tour packages across Tamil Nadu, Kerala & Karnataka. Discover destinations, explore packages, and plan your perfect South India journey with The Routes.",
  keywords:
    "South India travel, Kerala packages, Tamil Nadu tours, Karnataka trips, Munnar, Ooty, Coorg, Alleppey, tour packages",
  openGraph: {
    title: "The Routes — South India Travel",
    description:
      "Curated journeys across Tamil Nadu, Kerala & Karnataka — designed for unforgettable experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full`}
    >
      {/* Extra bottom padding on mobile so content isn't hidden behind floating CTA */}
      <body className="min-h-full flex flex-col antialiased pb-[56px] lg:pb-0">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileFloatingCTA />
      </body>
    </html>
  );
}
