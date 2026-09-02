"use client";

import { useState } from "react";
import Image from "next/image";
import type { Article } from "@/types/article";
import ArticleCard from "@/components/ArticleCard";

interface SourceOption {
  name: string;
  domain: string;
  count: number;
}

interface LatestNewsFeedProps {
  articles: Article[];
  sources: SourceOption[];
}

export default function LatestNewsFeed({ articles, sources }: LatestNewsFeedProps) {
  const [selectedSourceDomain, setSelectedSourceDomain] = useState<string | null>(null);

  const filteredArticles = selectedSourceDomain
    ? articles.filter((a) => a.source?.domain === selectedSourceDomain)
    : articles;

  return (
    <div className="flex flex-col gap-8">
      {/* Source Filter Bar */}
      <div className="flex flex-col gap-3 pb-6 border-b-2 border-black">
        <div className="flex items-center justify-between">
          <span className="text-[12px] font-bold uppercase tracking-wider text-[#737373]">
            Filter by source:
          </span>
          {selectedSourceDomain && (
            <button
              type="button"
              onClick={() => setSelectedSourceDomain(null)}
              className="text-[12px] font-bold uppercase tracking-wide text-primary hover:underline cursor-pointer"
            >
              Reset filter
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
          <button
            type="button"
            onClick={() => setSelectedSourceDomain(null)}
            className={`shrink-0 inline-flex items-center gap-2 px-3 py-1.5 border-2 border-black text-[12px] font-bold uppercase tracking-wide transition-all ${
              selectedSourceDomain === null
                ? "bg-primary text-white shadow-[2px_2px_0px_#0A0E11]"
                : "bg-white text-[#171717] hover:bg-tint shadow-[2px_2px_0px_#0A0E11] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#0A0E11]"
            }`}
          >
            <span>All Sources</span>
            <span
              className={`px-1.5 py-0.2 text-[10px] rounded-xs font-black ${
                selectedSourceDomain === null ? "bg-white/20 text-white" : "bg-black/5 text-[#737373]"
              }`}
            >
              {articles.length}
            </span>
          </button>

          {sources.map((src) => {
            const isSelected = selectedSourceDomain === src.domain;
            return (
              <button
                key={src.domain}
                type="button"
                onClick={() => setSelectedSourceDomain(isSelected ? null : src.domain)}
                className={`shrink-0 inline-flex items-center gap-2 px-3 py-1.5 border-2 border-black text-[12px] font-bold tracking-wide transition-all ${
                  isSelected
                    ? "bg-primary text-white shadow-[2px_2px_0px_#0A0E11]"
                    : "bg-white text-[#171717] hover:bg-tint shadow-[2px_2px_0px_#0A0E11] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#0A0E11]"
                }`}
              >
                <Image
                  src={`/api/favicon?domain=${encodeURIComponent(src.domain)}`}
                  alt=""
                  width={14}
                  height={14}
                  unoptimized
                  className="w-3.5 h-3.5 object-contain rounded-xs shrink-0"
                />
                <span>{src.name}</span>
                <span
                  className={`px-1.5 py-0.2 text-[10px] rounded-xs font-black ${
                    isSelected ? "bg-white/20 text-white" : "bg-black/5 text-[#737373]"
                  }`}
                >
                  {src.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Articles List */}
      {filteredArticles.length > 0 ? (
        <div className="flex flex-col gap-8">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} variant="row" />
          ))}
        </div>
      ) : (
        <div className="p-12 border-2 border-black bg-tint text-center flex flex-col items-center justify-center gap-4">
          <p className="font-bold text-lg text-[#171717]">No articles found for this source.</p>
          <button
            type="button"
            onClick={() => setSelectedSourceDomain(null)}
            className="px-5 py-2 border-2 border-black bg-white text-black font-bold uppercase tracking-wider text-[13px] shadow-[2px_2px_0px_#0A0E11]"
          >
            Show all articles
          </button>
        </div>
      )}
    </div>
  );
}
