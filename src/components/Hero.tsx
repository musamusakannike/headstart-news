import Image from "next/image";
import Link from "next/link";
import { articles, getFeatured, categories, formatDate } from "@/data/articles";

export default function Hero() {
  const featured = getFeatured();
  const featuredCategory = categories.find((c) => c.slug === featured.category);

  // 2 secondary articles for the middle stacked column
  const secondary = articles
    .filter((a) => a.slug !== featured.slug)
    .slice(0, 2);

  // 5 top headlines for the right rail
  const topHeadlines = articles
    .filter(
      (a) =>
        a.slug !== featured.slug &&
        !secondary.some((s) => s.slug === a.slug),
    )
    .slice(0, 5);

  return (
    <section className="w-full px-6 sm:px-8 lg:px-16 pt-8 sm:pt-10 lg:pt-14 pb-8">
      <div className="max-w-[1280px] mx-auto">
        {/* Desktop Layout (3 columns): Active on larger screens */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-6 xl:gap-8 items-stretch">
          {/* Column 1: Main Featured Story (Col span 6) */}
          <Link
            href={`/article/${featured.slug}`}
            className="lg:col-span-6 group relative w-full h-[580px] border-2 border-black bg-[#0A0E11] overflow-hidden flex flex-col justify-end p-6 xl:p-8 hover:-translate-y-1 transition-all duration-300"
            style={{ boxShadow: "6px 6px 0px #0A0E11" }}
          >
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover opacity-80 group-hover:opacity-95 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-3.5">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="border border-white/20 bg-primary text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 w-fit">
                  {featuredCategory?.name}
                </span>
                {featured.source && (
                  <span className="inline-flex items-center gap-1.5 border border-white/20 bg-black/60 backdrop-blur-sm text-white font-semibold text-[11px] px-2 py-0.5">
                    <Image
                      src={`/api/favicon?domain=${encodeURIComponent(featured.source.domain)}`}
                      alt={`${featured.source.name} logo`}
                      width={14}
                      height={14}
                      unoptimized
                      className="w-3.5 h-3.5 object-contain rounded-xs shrink-0"
                    />
                    <span>{featured.source.name}</span>
                  </span>
                )}
              </div>
              <h2
                className="text-2xl xl:text-[34px] font-bold uppercase leading-[1.08] tracking-tight text-white group-hover:text-primary transition-colors line-clamp-3"
                style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
              >
                {featured.title}
              </h2>
              <div className="flex items-center gap-3 text-white/80 text-[13px] font-medium">
                <span>{featured.author}</span>
                <span>·</span>
                <span>{formatDate(featured.publishedAt)}</span>
              </div>
            </div>
          </Link>

          {/* Column 2: 2 Stacked Secondary Stories (Col span 3) */}
          <div className="lg:col-span-3 flex flex-col gap-5 h-[580px]">
            {secondary.map((item, index) => {
              const itemCat = categories.find((c) => c.slug === item.category);
              return (
                <Link
                  key={item.slug}
                  href={`/article/${item.slug}`}
                  className="group relative flex-1 w-full border-2 border-black bg-[#0A0E11] overflow-hidden flex flex-col justify-end p-5 hover:-translate-y-1 transition-all duration-300"
                  style={{ boxShadow: "4px 4px 0px #0A0E11" }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 1024px) 100vw, 25vw"
                    className="object-cover opacity-80 group-hover:opacity-95 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />

                  <div className="relative z-10 flex flex-col gap-2">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="border border-white/20 bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 w-fit">
                        {itemCat?.name}
                      </span>
                      {item.source && (
                        <span className="inline-flex items-center gap-1 border border-white/20 bg-black/60 backdrop-blur-sm text-white font-semibold text-[10px] px-1.5 py-0.5">
                          <Image
                            src={`/api/favicon?domain=${encodeURIComponent(item.source.domain)}`}
                            alt={`${item.source.name} logo`}
                            width={12}
                            height={12}
                            unoptimized
                            className="w-3 h-3 object-contain rounded-xs shrink-0"
                          />
                          <span>{item.source.name}</span>
                        </span>
                      )}
                    </div>
                    <h3
                      className="text-[17px] xl:text-[18px] font-bold uppercase leading-snug tracking-tight text-white group-hover:text-primary transition-colors line-clamp-3"
                      style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
                    >
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-white/70 text-[12px] font-medium">
                      <span>{item.author}</span>
                      <span>·</span>
                      <span>{formatDate(item.publishedAt)}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Column 3: Top Headlines List Rail (Col span 3) */}
          <div
            className="lg:col-span-3 flex flex-col justify-between h-[580px] bg-white border-2 border-black p-5 xl:p-6"
            style={{ boxShadow: "4px 4px 0px #0A0E11" }}
          >
            <div className="flex items-center gap-2.5 pb-3.5 border-b-2 border-black">
              <span className="w-2.5 h-2.5 bg-primary rotate-45 shrink-0" />
              <h2
                className="text-xl xl:text-2xl font-bold uppercase tracking-tight text-[#171717]"
                style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
              >
                Top Headlines
              </h2>
            </div>

            <div className="flex flex-col divide-y divide-black/10 flex-1 justify-between py-2">
              {topHeadlines.map((item) => (
                <Link
                  key={item.slug}
                  href={`/article/${item.slug}`}
                  className="group flex items-start gap-2.5 py-2.5 first:pt-1 last:pb-1"
                >
                  <span className="w-2 h-2 bg-primary shrink-0 mt-1.5 group-hover:scale-125 transition-transform" />
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <h3
                      className="text-[13px] xl:text-[14px] font-bold uppercase leading-snug text-[#171717] group-hover:text-primary transition-colors line-clamp-2"
                      style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
                    >
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-[11px] text-[#737373] font-medium">
                      {item.source && (
                        <span className="inline-flex items-center gap-1 text-[#171717] font-semibold">
                          <Image
                            src={`/api/favicon?domain=${encodeURIComponent(item.source.domain)}`}
                            alt=""
                            width={12}
                            height={12}
                            unoptimized
                            className="w-3 h-3 object-contain rounded-xs shrink-0"
                          />
                          <span>{item.source.name}</span>
                          <span>·</span>
                        </span>
                      )}
                      <span>{formatDate(item.publishedAt)}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Layout (< lg): Clean single-story hero */}
        <div className="lg:hidden">
          <Link
            href={`/article/${featured.slug}`}
            className="group flex flex-col gap-6"
          >
            <div
              className="relative w-full aspect-[16/10] overflow-hidden border-2 border-black bg-[#F3F4F6]"
              style={{ boxShadow: "4px 4px 0px #0A0E11" }}
            >
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                priority
                sizes="100vw"
                className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
              />
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-wide flex-wrap">
                <span className="border border-black px-2.5 py-1 bg-tint text-primary">
                  {featuredCategory?.name}
                </span>
                {featured.source && (
                  <span className="inline-flex items-center gap-1.5 border border-black px-2 py-0.5 bg-white text-[#171717] font-semibold text-[11px] tracking-normal normal-case shadow-[1px_1px_0px_#0A0E11]">
                    <Image
                      src={`/api/favicon?domain=${encodeURIComponent(featured.source.domain)}`}
                      alt={`${featured.source.name} logo`}
                      width={14}
                      height={14}
                      unoptimized
                      className="w-3.5 h-3.5 object-contain rounded-xs shrink-0"
                    />
                    <span>{featured.source.name}</span>
                  </span>
                )}
                <span className="text-[#737373]">{formatDate(featured.publishedAt)}</span>
              </div>

              <h1
                className="text-[30px] sm:text-[40px] font-bold uppercase leading-[1.08] tracking-tight text-[#171717]"
                style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
              >
                <span className="relative inline">
                  <span className="relative z-10">{featured.title}</span>
                  <span className="absolute left-0 right-0 bottom-1 h-[10px] sm:h-[14px] bg-primary/35 z-0" />
                </span>
              </h1>

              <p className="text-[#525252] text-[16px] sm:text-[17px] leading-relaxed font-medium">
                {featured.excerpt}
              </p>

              <div className="flex items-center gap-4 text-[14px] font-medium text-[#737373]">
                <span>{featured.author}</span>
                <span>·</span>
                <span>{featured.readTime} min read</span>
              </div>

              <span className="inline-flex w-fit items-center justify-center border-[3px] border-black bg-primary text-white font-bold uppercase tracking-wider text-[14px] px-6 py-3 shadow-[4px_4px_0px_#0A0E11] group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-[2px_2px_0px_#0A0E11] transition-all">
                Read story
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
