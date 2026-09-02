import type { Article } from "@/types/article";
import { categories } from "./categories";

export const articles: Article[] = [
  {
    slug: "open-models-catch-closed-labs",
    title: "Open models are finally catching the closed labs",
    excerpt:
      "A new round of open-weight releases is closing the gap on proprietary systems — and changing who gets to ship AI products.",
    body: [
      "For two years, the default assumption in applied AI was simple: if you needed frontier quality, you paid a closed lab. That story is starting to crack. The latest open-weight models are scoring within striking distance of flagship APIs on coding, reasoning, and long-context tasks — and they run on hardware a well-funded startup can actually afford.",
      "The shift is not just about leaderboard screenshots. Teams that were previously locked into token billing are running local evals, fine-tunes, and product experiments without waiting on a rate limit. That changes iteration speed more than raw IQ does.",
      "Closed labs still lead on reliability, safety tooling, and multimodal polish. But the product surface that used to require an exclusive partnership is now something a mid-size engineering org can assemble in a quarter.",
      "Investors have noticed. Several seed-stage companies that pitched “wrapper on a closed model” six months ago are rewriting decks around hybrid stacks: a cheap open model for the 90% path, a premium API for the hard 10%.",
      "The next twelve months will decide whether open weights become the default substrate for most products — or remain a serious but secondary option. Either way, the monopoly on capability is gone.",
    ],
    category: "ai",
    tags: ["Open Source", "LLMs", "Labs"],
    author: "Ada Okonkwo",
    publishedAt: "2026-08-28",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80",
    featured: true,
    headline: true,
    readTime: 6,
    imageHeight: 280,
    source: {
      name: "The Verge",
      domain: "theverge.com",
      url: "https://theverge.com",
    },
  },
  {
    slug: "seed-rounds-get-smaller-again",
    title: "Seed rounds shrink as founders learn to ship with less",
    excerpt:
      "Median seed checks are down, but the best teams are treating constraint as a product advantage.",
    body: [
      "After a brief rebound, seed checks are compressing again. Founders who once raised eighteen months of runway on a deck are now expected to show a working loop — users, retention, some path to paid — before the term sheet.",
      "That is painful for teams that need hardware or regulatory cover. It is clarifying for everyone else. Smaller rounds force earlier pricing conversations and kill vanity features before they become a culture.",
      "Operators we spoke with described a new playbook: raise enough to hire two senior generalists, keep contractors for spikes, and treat cloud bills as a product metric, not an overhead line.",
      "The companies that look healthiest are not the ones with the loudest launches. They are the ones that can narrate a 12-month plan that still works if the next round slips by a quarter.",
    ],
    category: "startups",
    tags: ["Funding", "Seed", "Founders"],
    author: "Jonah Reed",
    publishedAt: "2026-08-26",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=80",
    featured: false,
    headline: true,
    readTime: 5,
    imageHeight: 220,
    source: {
      name: "TechCrunch",
      domain: "techcrunch.com",
      url: "https://techcrunch.com",
    },
  },
  {
    slug: "foldables-leave-the-novelty-aisle",
    title: "Foldables leave the novelty aisle",
    excerpt:
      "Durability, software, and price finally line up. The form factor is no longer a demo.",
    body: [
      "Foldables spent half a decade as a punchline with a premium price. The latest generation is different: crease-resistant inner panels, hinge warranties that last more than a news cycle, and software that actually remembers you folded the device.",
      "App makers followed. Video, notes, and split productivity layouts no longer feel like stretched phone UIs. That is the real unlock — not the hinge itself.",
      "Pricing is still high, but it has crossed the threshold where a certain kind of professional will replace a tablet and a phone with one device. Once that cohort is large enough, accessories and enterprise support follow.",
      "The remaining question is repair. Until foldables are as boring to fix as a slab phone, they will stay a second device for most people. Boring is the goal.",
    ],
    category: "gadgets",
    tags: ["Hardware", "Phones", "Design"],
    author: "Mira Chen",
    publishedAt: "2026-08-24",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1600&q=80",
    featured: false,
    headline: true,
    readTime: 4,
    imageHeight: 300,
    source: {
      name: "Wired",
      domain: "wired.com",
      url: "https://wired.com",
    },
  },
  {
    slug: "typescript-takes-the-backend-too",
    title: "TypeScript is quietly winning the backend",
    excerpt:
      "Shared types across the stack are no longer a nice-to-have. They are how mid-size teams stay fast.",
    body: [
      "The argument against TypeScript on the server used to be runtime cost and “real languages have better ecosystems.” Those talking points aged poorly. End-to-end types, from form to database, are now table stakes for teams that ship weekly.",
      "Frameworks caught up. Server actions, typed RPC, and schema-first ORMs mean a junior engineer can change a field once and watch the compiler catch the rest.",
      "Performance still matters at the edges. Hot paths stay in Rust, Go, or a carefully tuned worker. Everything else — admin, billing, the product surface — lives in one language the whole team can read.",
      "That consolidation is cultural as much as technical. Fewer language walls means fewer handoffs, and fewer handoffs means fewer silent bugs in production.",
    ],
    category: "software",
    tags: ["TypeScript", "Backend", "DX"],
    author: "Samira Bello",
    publishedAt: "2026-08-22",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=80",
    featured: false,
    headline: true,
    readTime: 5,
    imageHeight: 200,
    source: {
      name: "Ars Technica",
      domain: "arstechnica.com",
      url: "https://arstechnica.com",
    },
  },
  {
    slug: "eu-ai-act-hits-product-roadmaps",
    title: "The EU AI Act is now a product roadmap item",
    excerpt:
      "Compliance is no longer a memo from legal. It is showing up in sprint boards.",
    body: [
      "High-risk classification used to be a hypothetical. Product teams shipping decision systems into hiring, credit, or healthcare now have dates, documentation, and human-oversight requirements on the same board as feature work.",
      "The practical effect is slower launches and clearer audit trails. That is annoying for growth teams and useful for anyone who has ever been asked “why did the model do that?” with no answer.",
      "US and UK firms that sell into Europe are duplicating controls globally rather than maintaining two stacks. The Act is becoming a de facto export standard, whether lawmakers intended that or not.",
      "Startups without a compliance hire are buying platforms that wrap logging, evals, and model cards. A new category of “AI ops for regulators” is forming in public.",
    ],
    category: "policy",
    tags: ["Regulation", "EU", "Compliance"],
    author: "Elena Voss",
    publishedAt: "2026-08-20",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
    featured: false,
    headline: true,
    readTime: 6,
    imageHeight: 260,
    source: {
      name: "Reuters",
      domain: "reuters.com",
      url: "https://reuters.com",
    },
  },
  {
    slug: "agents-that-actually-finish-jobs",
    title: "Agents that actually finish the job",
    excerpt:
      "The demo era is over. The products that last keep a human in the loop and a receipt for every action.",
    body: [
      "Last year’s agent demos booked flights, wrote PRs, and then quietly failed in production. The second wave is narrower: one job, one tool belt, one audit log.",
      "That sounds less exciting. It is also the only version customers will pay for. A coding agent that opens a draft PR with tests is more valuable than a general assistant that sometimes deletes a repo.",
      "The technical pattern is boring on purpose — retrieval, constrained tools, retries, and a human approval gate for anything irreversible.",
      "Expect the marketing language to stay loud. Expect the winning products to look like workflow software with a model inside, not a chat box with superpowers.",
    ],
    category: "ai",
    tags: ["Agents", "Product", "Workflows"],
    author: "Ada Okonkwo",
    publishedAt: "2026-08-18",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80",
    featured: false,
    headline: true,
    readTime: 5,
    imageHeight: 240,
    source: {
      name: "VentureBeat",
      domain: "venturebeat.com",
      url: "https://venturebeat.com",
    },
  },
  {
    slug: "climate-tech-finds-a-buyer",
    title: "Climate tech finally found a buyer: procurement",
    excerpt:
      "The second wave of climate startups is selling into existing budgets, not asking the world to change first.",
    body: [
      "The first climate-tech boom sold a future. This one sells a line item. Companies with real procurement cycles — logistics, buildings, industrials — are writing checks for software that cuts energy, waste, or reporting time this quarter.",
      "That is a different customer. They care about integrations, SLAs, and who is on the hook if the dashboard is wrong. Founders coming from consumer AI are learning that the hard part is not the model.",
      "Public incentives still matter, but they are a tailwind, not the business. The firms that survive a policy swing are the ones whose product saves money even if the subsidy disappears.",
    ],
    category: "startups",
    tags: ["Climate", "B2B", "Procurement"],
    author: "Jonah Reed",
    publishedAt: "2026-08-16",
    image:
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=1600&q=80",
    featured: false,
    headline: false,
    readTime: 4,
    imageHeight: 210,
    source: {
      name: "Bloomberg",
      domain: "bloomberg.com",
      url: "https://bloomberg.com",
    },
  },
  {
    slug: "earbuds-become-a-computer",
    title: "Earbuds are becoming a computer you forget you’re wearing",
    excerpt:
      "On-device models, better mics, and all-day batteries turn a accessory into an interface.",
    body: [
      "The next computer might not have a screen you look at. Earbuds with on-device speech models can translate, take notes, and nudge you without lighting up a phone.",
      "Privacy is the unresolved product question. Always-on microphones need a story that is more than a LED. The teams that win will make recording obvious, local, and easy to kill.",
      "Battery life finally crossed the all-day line for several flagship pairs. That is the unglamorous requirement that turns a gadget into a habit.",
    ],
    category: "gadgets",
    tags: ["Wearables", "Audio", "On-device AI"],
    author: "Mira Chen",
    publishedAt: "2026-08-14",
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1600&q=80",
    featured: false,
    headline: false,
    readTime: 4,
    imageHeight: 190,
    source: {
      name: "Engadget",
      domain: "engadget.com",
      url: "https://engadget.com",
    },
  },
  {
    slug: "rust-in-the-browser-toolchain",
    title: "Rust is eating the JavaScript toolchain",
    excerpt:
      "Bundlers, linters, and formatters rewritten in Rust are now the default — and they are not going back.",
    body: [
      "The JavaScript ecosystem spent a decade optimizing the language. It is now optimizing the tools around it. Bundlers, linters, and test runners written in Rust start in milliseconds and scale to monorepos that used to freeze CI.",
      "That speed changes behavior. Teams run full lint on every keystroke. CI no longer needs a cottage industry of cache hacks just to stay under ten minutes.",
      "The cultural fight is mostly over. Maintainers still argue about plugin APIs. Users have already moved.",
    ],
    category: "software",
    tags: ["Rust", "Tooling", "JavaScript"],
    author: "Samira Bello",
    publishedAt: "2026-08-12",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=80",
    featured: false,
    headline: false,
    readTime: 5,
    imageHeight: 230,
    source: {
      name: "MIT Tech Review",
      domain: "technologyreview.com",
      url: "https://technologyreview.com",
    },
  },
  {
    slug: "app-store-fees-under-new-pressure",
    title: "App store fees face a second wave of pressure",
    excerpt:
      "Regulators opened the door. Developers are walking through it — slowly, and with lawyers.",
    body: [
      "Steering rules and alternative billing are no longer theoretical in several markets. The first companies through the gap are large enough to absorb the legal cost. Smaller studios are waiting to see who gets sued.",
      "Platforms are complying in the narrowest way that still preserves the bundle: identity, distribution, and a cut somewhere in the stack.",
      "Users will not notice a revolution. They will notice slightly cheaper subscriptions in some countries and more confusing checkout in others. That messy middle is the story for the next two years.",
    ],
    category: "policy",
    tags: ["App Stores", "Regulation", "Mobile"],
    author: "Elena Voss",
    publishedAt: "2026-08-10",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1600&q=80",
    featured: false,
    headline: false,
    readTime: 5,
    imageHeight: 250,
    source: {
      name: "Financial Times",
      domain: "ft.com",
      url: "https://ft.com",
    },
  },
  {
    slug: "on-device-models-hit-laptops",
    title: "On-device models finally fit on a laptop you already own",
    excerpt:
      "Quantization and better NPUs make local inference a default setting, not a hobbyist project.",
    body: [
      "You no longer need a workstation to run a useful model. Quantized weights and NPU support on mainstream laptops mean summarization, coding assist, and offline search can stay on the machine.",
      "That matters for regulated industries and anyone tired of pasting confidential docs into a chat box. It also matters for cost: inference that used to be a variable cloud bill becomes a one-time hardware purchase.",
      "Quality still trails the largest APIs. For a surprising number of internal tools, “good enough and private” beats “slightly smarter and in someone else’s logs.”",
    ],
    category: "ai",
    tags: ["On-device", "Hardware", "Privacy"],
    author: "Ada Okonkwo",
    publishedAt: "2026-08-08",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
    featured: false,
    headline: false,
    readTime: 4,
    imageHeight: 200,
    source: {
      name: "The Information",
      domain: "theinformation.com",
      url: "https://theinformation.com",
    },
  },
  {
    slug: "developer-tools-go-vertical",
    title: "Developer tools go vertical",
    excerpt:
      "Horizontal platforms still matter. The fastest-growing tools pick one industry and speak its language.",
    body: [
      "The last generation of developer tools tried to be for everyone. The next one is for hospitals, for freight, for banks. Domain-specific sandboxes, schemas, and compliance baked in from day one.",
      "That focus looks smaller on a TAM slide and larger in a sales cycle. Buyers would rather have a product that already knows their audit language than a generic IDE with plugins.",
      "Platform companies will acquire the winners. Until then, a wave of focused tools is eating the generic middle.",
    ],
    category: "startups",
    tags: ["Devtools", "Vertical SaaS", "B2B"],
    author: "Jonah Reed",
    publishedAt: "2026-08-06",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
    featured: false,
    headline: false,
    readTime: 4,
    imageHeight: 220,
    source: {
      name: "TechCrunch",
      domain: "techcrunch.com",
      url: "https://techcrunch.com",
    },
  },
  {
    slug: "e-ink-tablets-find-a-job",
    title: "E-ink tablets finally found a job: deep work",
    excerpt:
      "Not a Kindle, not an iPad. A third category is forming for people who need to think without a feed.",
    body: [
      "E-ink tablets used to be a compromise: great for novels, clumsy for notes. Better latency, better styluses, and PDF workflows have created a niche for lawyers, researchers, and anyone who wants a screen that does not shout.",
      "The category will never be mass-market. It does not need to be. A few million people who pay for focus is a real business.",
      "The risk is software. If these devices become another app store, they lose the thing that made them worth buying.",
    ],
    category: "gadgets",
    tags: ["E-ink", "Productivity", "Hardware"],
    author: "Mira Chen",
    publishedAt: "2026-08-04",
    image:
      "https://images.unsplash.com/photo-1456327102063-fb5054efe647?auto=format&fit=crop&w=1600&q=80",
    featured: false,
    headline: false,
    readTime: 3,
    imageHeight: 180,
    source: {
      name: "The Verge",
      domain: "theverge.com",
      url: "https://theverge.com",
    },
  },
  {
    slug: "postgres-keeps-winning",
    title: "Postgres keeps winning, and the forks keep multiplying",
    excerpt:
      "Every new database story still starts with Postgres — then adds vectors, time series, or a cloud wrapper.",
    body: [
      "The center of gravity in application data has not moved. Postgres is the default, and the interesting work is happening in extensions, managed offerings, and specialized forks.",
      "Vector search, analytics, and distributed writes are being bolted on rather than replaced. That is a bet that operational familiarity beats a greenfield engine for most teams.",
      "The risk is fragmentation: too many forks, too many slightly incompatible features. The opportunity is a ecosystem where the boring database is also the powerful one.",
    ],
    category: "software",
    tags: ["Postgres", "Databases", "Infrastructure"],
    author: "Samira Bello",
    publishedAt: "2026-08-02",
    image:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1600&q=80",
    featured: false,
    headline: false,
    readTime: 5,
    imageHeight: 270,
    source: {
      name: "Wired",
      domain: "wired.com",
      url: "https://wired.com",
    },
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function getFeatured() {
  return articles.find((a) => a.featured) ?? articles[0];
}

export function getHeadlines() {
  const featured = getFeatured();
  return articles.filter((a) => a.headline && a.slug !== featured.slug);
}

export function getLatest() {
  return [...articles].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getByCategory(slug: string) {
  return getLatest().filter((a) => a.category === slug);
}

export function getRelated(slug: string, category: string, limit = 3) {
  return getByCategory(category).filter((a) => a.slug !== slug).slice(0, limit);
}

export function categoryCount(slug: string) {
  return articles.filter((a) => a.category === slug).length;
}

export function getSources() {
  const map = new Map<string, { name: string; domain: string; count: number }>();
  articles.forEach((a) => {
    if (a.source) {
      const existing = map.get(a.source.domain);
      if (existing) {
        existing.count += 1;
      } else {
        map.set(a.source.domain, {
          name: a.source.name,
          domain: a.source.domain,
          count: 1,
        });
      }
    }
  });
  return Array.from(map.values()).sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export { categories };
