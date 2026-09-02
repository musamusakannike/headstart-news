import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/types/article";
import { categories, formatDate } from "@/data/articles";

export default function ArticleCard({
  article,
  variant = "masonry",
}: {
  article: Article;
  variant?: "masonry" | "row";
}) {
  const category = categories.find((c) => c.slug === article.category);
  const height = article.imageHeight ?? 220;

  if (variant === "row") {
    return (
      <Link
        href={`/article/${article.slug}`}
        className="group flex flex-col sm:flex-row gap-6 lg:gap-8 bg-white border-2 border-black p-4 sm:p-5 hover:-translate-y-1 transition-transform duration-200"
        style={{ boxShadow: "4px 4px 0px #0A0E11" }}
      >
        <div className="relative w-full sm:w-[240px] lg:w-[280px] h-[180px] sm:h-[160px] shrink-0 overflow-hidden border-2 border-black bg-[#F3F4F6]">
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes="(max-width: 640px) 100vw, 280px"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="flex flex-col justify-center gap-3 py-1 min-w-0">
          <div className="flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-wide flex-wrap">
            <span className="border border-black px-2 py-0.5 bg-tint text-primary">
              {category?.name}
            </span>
            {article.source && (
              <span className="inline-flex items-center gap-1.5 border border-black px-2 py-0.5 bg-white text-[#171717] font-semibold text-[11px] tracking-normal normal-case shadow-[1px_1px_0px_#0A0E11]">
                <Image
                  src={`/api/favicon?domain=${encodeURIComponent(article.source.domain)}`}
                  alt={`${article.source.name} logo`}
                  width={14}
                  height={14}
                  unoptimized
                  className="w-3.5 h-3.5 object-contain rounded-xs shrink-0"
                />
                <span>{article.source.name}</span>
              </span>
            )}
            <span className="text-[#737373]">{formatDate(article.publishedAt)}</span>
          </div>
          <h3
            className="font-bold text-[#171717] text-xl lg:text-2xl leading-snug group-hover:text-primary transition-colors"
            style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
          >
            {article.title}
          </h3>
          <p className="text-[#525252] text-[15px] leading-relaxed line-clamp-2">
            {article.excerpt}
          </p>
          <div className="flex items-center gap-2 text-[13px] font-medium text-[#737373]">
            <span>{article.author}</span>
            <span>·</span>
            <span>{article.readTime} min read</span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/article/${article.slug}`}
      className="group mb-8 inline-block w-full break-inside-avoid bg-white border-2 border-black hover:-translate-y-1 transition-transform duration-200"
      style={{ boxShadow: "4px 4px 0px #0A0E11" }}
    >
      <div
        className="relative w-full overflow-hidden border-b-2 border-black bg-[#F3F4F6]"
        style={{ height }}
      >
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="flex flex-col gap-3 p-5 lg:p-6">
        <div className="flex items-center justify-between gap-2 text-[12px] font-bold uppercase tracking-wide flex-wrap">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="border border-black px-2 py-0.5 bg-tint text-primary">
              {category?.name}
            </span>
            {article.source && (
              <span className="inline-flex items-center gap-1.5 border border-black px-2 py-0.5 bg-white text-[#171717] font-semibold text-[11px] tracking-normal normal-case shadow-[1px_1px_0px_#0A0E11]">
                <Image
                  src={`/api/favicon?domain=${encodeURIComponent(article.source.domain)}`}
                  alt={`${article.source.name} logo`}
                  width={14}
                  height={14}
                  unoptimized
                  className="w-3.5 h-3.5 object-contain rounded-xs shrink-0"
                />
                <span>{article.source.name}</span>
              </span>
            )}
          </div>
          <span className="text-[#737373] text-[11px]">{formatDate(article.publishedAt)}</span>
        </div>
        <h3
          className="font-bold text-[#171717] text-xl leading-snug group-hover:text-primary transition-colors"
          style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
        >
          {article.title}
        </h3>
        <p className="text-[#525252] text-[14px] font-medium leading-relaxed">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between pt-2 border-t border-black/10 text-[12px] font-medium text-[#737373]">
          <span>{article.author}</span>
          <span>{article.readTime} min read</span>
        </div>
      </div>
    </Link>
  );
}
