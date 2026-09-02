export type CategorySlug = "ai" | "startups" | "gadgets" | "software" | "policy";

export type Category = {
  slug: CategorySlug;
  name: string;
  description: string;
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  category: CategorySlug;
  tags: string[];
  author: string;
  publishedAt: string;
  image: string;
  featured: boolean;
  headline: boolean;
  readTime: number;
  imageHeight?: number;
};
