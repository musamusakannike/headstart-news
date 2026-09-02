import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import ArticleCard from "@/components/ArticleCard";
import Newsletter from "@/components/Newsletter";
import {
  getHeadlines,
  getLatest,
  categories,
  categoryCount,
} from "@/data/articles";
import Link from "next/link";

export default function Home() {
  const headlines = getHeadlines();
  const latest = getLatest().slice(0, 5);

  return (
    <main className="flex-1 bg-white">
      <Hero />

      <section id="headlines" className="w-full px-6 sm:px-8 lg:px-16 py-20 lg:py-28 bg-tint">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            kicker="// Top Headlines"
            title="Stories moving the stack"
            description="A masonry of the week’s most important pieces — not a wall of equal tiles."
          />
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8">
            {headlines.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      <section id="latest" className="w-full px-6 sm:px-8 lg:px-16 py-20 lg:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-4">
            <SectionHeader
              kicker="// Latest News"
              title="Just in"
              description="Newest briefings, in order. Same desk, less noise."
            />
            <Link
              href="/latest"
              className="shrink-0 inline-flex items-center justify-center border-[3px] border-black bg-white text-black font-bold uppercase tracking-wider text-[14px] px-6 py-3 shadow-[4px_4px_0px_#0A0E11] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#0A0E11] transition-all lg:mb-16"
            >
              View all
            </Link>
          </div>
          <div className="flex flex-col gap-8">
            {latest.map((article) => (
              <ArticleCard key={article.slug} article={article} variant="row" />
            ))}
          </div>
        </div>
      </section>

      <section id="categories" className="w-full px-6 sm:px-8 lg:px-16 py-20 lg:py-28 bg-tint">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            kicker="// Categories"
            title="Read by beat"
            description="Five desks. Pick a lane or stay on the front page."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="group flex flex-col gap-4 bg-white border-2 border-black p-8 hover:-translate-y-1 transition-transform duration-200 min-h-[220px]"
                style={{ boxShadow: "4px 4px 0px #0A0E11" }}
              >
                <span className="text-[12px] font-bold uppercase tracking-widest text-primary">
                  {categoryCount(cat.slug)} stories
                </span>
                <h3
                  className="text-3xl font-bold uppercase text-[#171717] group-hover:text-primary transition-colors"
                  style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
                >
                  {cat.name}
                </h3>
                <p className="text-[#525252] text-[15px] leading-relaxed flex-1">
                  {cat.description}
                </p>
                <span className="text-[13px] font-bold uppercase tracking-wide text-[#171717] group-hover:text-primary">
                  Browse →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  );
}
