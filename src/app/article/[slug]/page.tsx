import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  articles,
  getArticle,
  getRelated,
  categories,
  formatDate,
} from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";
import Newsletter from "@/components/Newsletter";
import type { Metadata } from "next";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Story not found" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const category = categories.find((c) => c.slug === article.category);
  const related = getRelated(article.slug, article.category);

  return (
    <main className="flex-1 bg-white">
      <article className="px-6 sm:px-8 lg:px-16 pt-12 lg:pt-16 pb-8">
        <div className="max-w-[1280px] mx-auto">
          <nav className="text-[13px] font-medium text-[#737373] mb-10 flex flex-wrap gap-2">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span>/</span>
            <Link href={`/category/${article.category}`} className="hover:text-primary">
              {category?.name}
            </Link>
            <span>/</span>
            <span className="text-[#171717] line-clamp-1">{article.title}</span>
          </nav>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-wide mb-6 flex-wrap">
              <span className="border border-black px-2.5 py-1 bg-tint text-primary">
                {category?.name}
              </span>
              {article.source && (
                <a
                  href={article.source.url || `https://${article.source.domain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-black px-2.5 py-1 bg-white hover:bg-tint text-[#171717] transition-all shadow-[2px_2px_0px_#0A0E11] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#0A0E11]"
                  title={`Visit ${article.source.name}`}
                >
                  <Image
                    src={`/api/favicon?domain=${encodeURIComponent(article.source.domain)}`}
                    alt={`${article.source.name} logo`}
                    width={16}
                    height={16}
                    unoptimized
                    className="w-4 h-4 object-contain rounded-xs"
                  />
                  <span className="normal-case">Source: {article.source.name}</span>
                  <span className="text-[10px] text-primary font-black">↗</span>
                </a>
              )}
              <span className="text-[#737373]">{formatDate(article.publishedAt)}</span>
            </div>
            <h1
              className="text-[36px] sm:text-[48px] lg:text-[56px] font-bold uppercase leading-[1.08] tracking-tight text-[#171717]"
              style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
            >
              {article.title}
            </h1>
            <p className="mt-6 text-[#525252] text-[19px] leading-relaxed font-medium">
              {article.excerpt}
            </p>
            <p className="mt-6 text-[14px] font-medium text-[#737373]">
              {article.author} · {article.readTime} min read
            </p>
          </div>

          <div
            className="relative w-full mt-12 aspect-[16/8] overflow-hidden border-2 border-black bg-[#F3F4F6]"
            style={{ boxShadow: "6px 6px 0px #0A0E11" }}
          >
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <div className="max-w-3xl mx-auto mt-16 flex flex-col gap-8">
            {article.body.map((p) => (
              <p key={p.slice(0, 24)} className="text-[18px] leading-[1.8] text-[#171717]">
                {p}
              </p>
            ))}
            <div className="flex flex-wrap gap-2 pt-4">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-bold uppercase tracking-wide border border-black px-2 py-0.5 bg-[#F3F4F6]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      <div className="px-6 sm:px-8 lg:px-16 py-16 max-w-[1280px] mx-auto w-full">
        <Newsletter variant="inline" />
      </div>

      {related.length > 0 ? (
        <section className="px-6 sm:px-8 lg:px-16 pb-20 lg:pb-28 bg-tint pt-20">
          <div className="max-w-[1280px] mx-auto">
            <h2
              className="text-3xl font-bold uppercase mb-10"
              style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
            >
              More in {category?.name}
            </h2>
            <div className="flex flex-col gap-8">
              {related.map((a) => (
                <ArticleCard key={a.slug} article={a} variant="row" />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
