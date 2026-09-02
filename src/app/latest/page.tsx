import type { Metadata } from "next";
import { getLatest, getSources } from "@/data/articles";
import SectionHeader from "@/components/SectionHeader";
import LatestNewsFeed from "@/components/LatestNewsFeed";

export const metadata: Metadata = {
  title: "Latest News",
  description: "Every Headstart briefing, newest first.",
};

export default function LatestPage() {
  const latest = getLatest();
  const sources = getSources();

  return (
    <main className="flex-1 bg-white px-6 sm:px-8 lg:px-16 py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader
          kicker="// Latest News"
          title="The full desk"
          description="Every story we have published, newest first."
        />
        <LatestNewsFeed articles={latest} sources={sources} />
      </div>
    </main>
  );
}

