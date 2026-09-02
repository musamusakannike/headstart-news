import Image from "next/image";
import Link from "next/link";
import { getFeatured, categories, formatDate } from "@/data/articles";

export default function Hero() {
  const article = getFeatured();
  const category = categories.find((c) => c.slug === article.category);

  return (
    <section className="w-full px-6 sm:px-8 lg:px-16 pt-12 lg:pt-20 pb-8">
      <div className="max-w-[1280px] mx-auto">
        <Link
          href={`/article/${article.slug}`}
          className="group grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
        >
          <div className="lg:col-span-7 relative w-full aspect-[16/10] overflow-hidden border-2 border-black bg-[#F3F4F6]"
            style={{ boxShadow: "6px 6px 0px #0A0E11" }}
          >
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
            />
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
            <div className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-wide">
              <span className="border border-black px-2.5 py-1 bg-tint text-primary">
                {category?.name}
              </span>
              <span className="text-[#737373]">{formatDate(article.publishedAt)}</span>
            </div>

            <h1
              className="text-[36px] sm:text-[44px] lg:text-[52px] font-bold uppercase leading-[1.08] tracking-tight text-[#171717]"
              style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
            >
              <span className="relative inline">
                <span className="relative z-10">{article.title}</span>
                <span className="absolute left-0 right-0 bottom-1 h-[12px] lg:h-[16px] bg-primary/35 z-0" />
              </span>
            </h1>

            <p className="text-[#525252] text-[17px] lg:text-[18px] leading-relaxed font-medium max-w-lg">
              {article.excerpt}
            </p>

            <div className="flex items-center gap-4 text-[14px] font-medium text-[#737373]">
              <span>{article.author}</span>
              <span>·</span>
              <span>{article.readTime} min read</span>
            </div>

            <span className="inline-flex w-fit items-center justify-center border-[3px] border-black bg-primary text-white font-bold uppercase tracking-wider text-[14px] px-6 py-3 shadow-[4px_4px_0px_#0A0E11] group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-[2px_2px_0px_#0A0E11] transition-all">
              Read story
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
