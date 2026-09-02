import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { categories, getByCategory } from "@/data/articles";
import { getCategory } from "@/data/categories";
import SectionHeader from "@/components/SectionHeader";
import ArticleCard from "@/components/ArticleCard";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cat = getCategory(slug);
  if (!cat) return { title: "Category" };
  return { title: cat.name, description: cat.description };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cat = getCategory(slug);
  if (!cat) notFound();
  const list = getByCategory(slug);

  return (
    <main className="flex-1 bg-white px-6 sm:px-8 lg:px-16 py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader kicker="// Category" title={cat.name} description={cat.description} />
        {list.length === 0 ? (
          <p className="text-[#525252]">No stories in this desk yet.</p>
        ) : (
          <div className="flex flex-col gap-8">
            {list.map((article) => (
              <ArticleCard key={article.slug} article={article} variant="row" />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
