import type { Category } from "@/types/article";

export const categories: Category[] = [
  {
    slug: "ai",
    name: "AI",
    description: "Models, labs, and the tools reshaping how software gets built.",
  },
  {
    slug: "startups",
    name: "Startups",
    description: "Funding, founders, and the companies racing to ship first.",
  },
  {
    slug: "gadgets",
    name: "Gadgets",
    description: "Phones, wearables, and hardware that actually ships.",
  },
  {
    slug: "software",
    name: "Software",
    description: "Languages, platforms, and the stacks teams actually use.",
  },
  {
    slug: "policy",
    name: "Policy",
    description: "Regulation, privacy, and the rules around the next wave of tech.",
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
