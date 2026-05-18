export type Holiday = "halloween" | "christmas" | "both" | "neither";
export type Topic =
  | "diy"
  | "recipes"
  | "decor"
  | "costumes"
  | "events"
  | "media"
  | "gifts"
  | "traditions";

export const TOPICS_IN_ORDER: Topic[] = [
  "diy",
  "decor",
  "costumes",
  "events",
  "media",
  "traditions",
  "gifts",
];
export type Audience = "family" | "adults" | "date-night" | "kids";
export type PostType =
  | "article"
  | "review"
  | "guide"
  | "roundup"
  | "recipe"
  | "event";

export type RecipeSubcategory = "dessert" | "drink" | "appetizer" | "meal";

export interface RecipeIngredient {
  text: string;
  affiliateUrl?: string;
}

export interface RecipeTool {
  name: string;
  description?: string;
  image: {
    src: string;
    alt: string;
  };
  affiliateUrl: string;
}

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
      align: "wide" | "left" | "right" | "center";
    }
  | {
      type: "paragraphWithImage";
      text: string;
      image: { src: string; alt: string };
      align: "left" | "right";
    }
  | { type: "list"; items: string[]; ordered: boolean }
  | { type: "callout"; variant: "note" | "tip" | "warning"; text: string }
  | {
      type: "shopCards";
      heading?: string;
      intro?: string;
      items: RecipeTool[];
    }
  | { type: "notes"; text: string };

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  body?: ContentBlock[];
  image: { src: string; alt: string };
  author: string;
  publishedAt: string;
  holiday: Holiday;
  topic: Topic;
  postType: PostType;
  audience?: Audience[];
  featured?: boolean;
  sponsored?: boolean;
  readTime?: number;

  recipeSubcategory?: RecipeSubcategory;
  prepTime?: number;
  cookTime?: number;
  servings?: number;
  servingUnit?: string;
  ingredients?: (string | RecipeIngredient)[];
  tools?: RecipeTool[];
  instructions?: string[];
  notes?: string;

  // Review-specific (only used when postType === "review")
  rating?: number; // 1-5
  reviewSubject?: string;

  // Event-specific (only used when postType === "event")
  eventDate?: string;
  eventLocation?: string;
  eventNeighborhood?: string;
  ticketUrl?: string;
}

// Recipe subcategories in display order
export const RECIPE_SUBCATEGORIES_IN_ORDER: RecipeSubcategory[] = [
  "dessert",
  "drink",
  "appetizer",
  "meal",
];

// Plural labels for UI
export const RECIPE_SUBCATEGORY_LABELS: Record<RecipeSubcategory, string> = {
  dessert: "Desserts",
  drink: "Drinks",
  appetizer: "Appetizers",
  meal: "Meals",
};

export const POST_TYPE_LABELS: Record<PostType, string> = {
  article: "Article",
  review: "Review",
  guide: "Guide",
  roundup: "Roundup",
  recipe: "Recipe",
  event: "Event",
};

export const samplePosts: Post[] = [
  {
    slug: "witches-finger-cookies",
    title: "Witches' Finger Cookies for Your Next Gathering",
    excerpt:
      "A buttery shortbread base, a sliced almond fingernail, and a drop of strawberry jam.",
    image: {
      src: "/images/placeholder-1.jpg",
      alt: "Plate of witches finger cookies on a black surface",
    },
    author: "Eliza Hart",
    publishedAt: "2025-09-22",
    holiday: "halloween",
    topic: "recipes",
    postType: "recipe",
    recipeSubcategory: "dessert",
    audience: ["family", "adults"],
    featured: true,
    readTime: 6,
    // Recipe data:
    prepTime: 20,
    cookTime: 15,
    servings: 24,
    servingUnit: "cookies",
    ingredients: [
      { text: "1 cup unsalted butter, softened" },
      { text: "2/3 cup granulated sugar" },
      { text: "Red food coloring", affiliateUrl: "https://amzn.to/your-link" },
      { text: "24 sliced almonds" },
    ],
    tools: [
      {
        name: "Finger-shaped cookie mold",
        description: "Silicone, food-safe, dishwasher-friendly",
        image: {
          src: "/images/placeholder-1.jpg",
          alt: "Silicone finger-shaped cookie mold",
        },
        affiliateUrl: "https://amzn.to/your-link",
      },
      {
        name: "Gel food coloring set",
        description: "Vibrant colors that don't water down batter",
        image: {
          src: "/images/placeholder-1.jpg",
          alt: "Set of gel food colorings in various shades",
        },
        affiliateUrl: "https://amzn.to/another-link",
      },
      {
        name: "Gel food coloring set",
        description: "Vibrant colors that don't water down batter",
        image: {
          src: "/images/placeholder-1.jpg",
          alt: "Set of gel food colorings in various shades",
        },
        affiliateUrl: "https://amzn.to/another-link",
      },
    ],
    instructions: [
      "Preheat oven to 325°F. Line two baking sheets with parchment paper.",
      "In a large bowl, cream butter and sugar until light and fluffy, about 3 minutes.",
      "Beat in egg, vanilla, and almond extract until well combined.",
      "In a separate bowl, whisk together flour, baking powder, and salt.",
      "Gradually add dry ingredients to the wet mixture, mixing just until combined. Cover and chill dough for 30 minutes.",
      "Roll dough into small finger-shaped logs, about 3 inches long. Make small indentations to mimic knuckles using a knife.",
      "Press a sliced almond into one end of each finger for the fingernail.",
      "Bake for 12-15 minutes until edges are lightly golden. Cool on baking sheets for 5 minutes before transferring.",
      "Once cool, dab a small amount of strawberry jam under each almond fingernail so it 'oozes' slightly. Optional: paint nail with red food coloring.",
    ],
    notes:
      "These get more dramatic the longer they sit — the jam settles in and the 'fingernails' really start to look unsettling. Make them the morning of your gathering for maximum effect. Store in an airtight container for up to a week.",
  },
  {
    slug: "the-darkness-2026-review",
    title: "The Darkness 2026: Worth the Hype, and the Heart Rate",
    excerpt:
      "Soulard's most ambitious haunt yet adds two new walkthroughs and an escape-room finale. Here's how it stacks up against last year.",
    image: {
      src: "/images/placeholder-1.jpg",
      alt: "Dimly lit corridor at The Darkness haunted house",
    },
    author: "Marcus Bell",
    publishedAt: "2025-09-15",
    holiday: "halloween",
    topic: "events",
    postType: "review",
    audience: ["adults", "date-night"],
    featured: true,
    readTime: 8,
    rating: 4.5,
    reviewSubject: "The Darkness Haunted House",
    body: [
      {
        type: "paragraph",
        text: "The Darkness has been the benchmark for St. Louis haunts for years, and the 2026 version doesn't coast on that reputation. Two new walkthroughs — a Victorian surgery ward and an underwater cave — add real runtime to what was already a substantial experience.",
      },
      {
        type: "paragraphWithImage",
        text: "The surgery ward is the stronger of the two. It plays on slow dread rather than jump scares — the set design is meticulous, and the actors commit without overplaying it. The escape-room finale at the end of the main route is genuinely tense if you let yourself engage with it.",
        image: {
          src: "/images/placeholder-1.jpg",
          alt: "Dark theatrical corridor at The Darkness haunted house",
        },
        align: "left",
      },
      {
        type: "heading",
        level: 2,
        text: "What Works",
      },
      {
        type: "list",
        items: [
          "Pacing is tighter than last year — no long dead zones between actors",
          "Escape-room finale rewards groups that actually communicate",
          "Victorian surgery ward set is the best individual room in the building",
          "Staff-to-guest ratio is well managed; you never feel rushed",
        ],
        ordered: false,
      },
      {
        type: "heading",
        level: 2,
        text: "What to Know Before You Go",
      },
      {
        type: "paragraph",
        text: "Go on a Thursday. Weekend waits hit two hours in October, and the experience isn't meaningfully better than a Thursday. Buy tickets online — walk-up pricing is higher and Friday inventory does sell out.",
      },
      {
        type: "callout",
        variant: "warning",
        text: "Not recommended for children under 13 or anyone sensitive to strobe effects. The haunt uses both heavily in the final third of the main walkthrough.",
      },
    ],
  },
  {
    slug: "diy-apothecary-jars",
    title: "DIY Apothecary Jars on a Thrift Store Budget",
    excerpt:
      "Three trips to Goodwill, a hot glue gun, and an evening with a podcast. Here's how to build a witchy mantle display that doesn't look like it came from a Halloween store.",
    image: {
      src: "/images/placeholder-1.jpg",
      alt: "Vintage glass jars filled with mysterious labels and herbs",
    },
    author: "Eliza Hart",
    publishedAt: "2025-09-08",
    holiday: "halloween",
    topic: "diy",
    postType: "guide",
    audience: ["adults"],
    readTime: 5,
    body: [
      {
        type: "paragraph",
        text: "The secret to a convincing apothecary display isn't money — it's patience and mismatch. Everything should look like it accumulated over time, not like it arrived in one Amazon box. Here's the system I use.",
      },
      {
        type: "heading",
        level: 2,
        text: "Step 1: Find the Right Jars",
      },
      {
        type: "paragraph",
        text: "Goodwill and Facebook Marketplace are your starting points. You want heavy glass — old pickle jars, candle vessels, actual apothecary bottles if you get lucky. Avoid anything that looks uniform or new. The best finds are genuinely ugly before you start.",
      },
      {
        type: "image",
        src: "/images/placeholder-1.jpg",
        alt: "Assorted glass jars of different shapes and sizes on a thrift store shelf",
        align: "wide",
      },
      {
        type: "heading",
        level: 2,
        text: "Step 2: Age Your Labels",
      },
      {
        type: "paragraphWithImage",
        text: "Print labels on regular paper, then soak them in cold strong black tea for 10 minutes. Lay flat on a baking sheet and dry at 200°F for about 15 minutes. The result is convincingly aged parchment. A serif font at small sizes reads as vintage without overthinking it.",
        image: {
          src: "/images/placeholder-1.jpg",
          alt: "Apothecary label drying on a baking sheet after tea staining",
        },
        align: "right",
      },
      {
        type: "heading",
        level: 2,
        text: "What to Fill Them With",
      },
      {
        type: "list",
        items: [
          "Dried lavender or rosemary from the craft store",
          "Black salt: sea salt mixed with activated charcoal",
          "Dried orange peel and whole cloves",
          "Decorative moss or dried lichen",
          "Cork stoppers stacked as filler for tall jars",
        ],
        ordered: false,
      },
      {
        type: "callout",
        variant: "tip",
        text: "Hot glue a few extra corks to the outside of a sealed jar before labeling it. It reads as 'contents unknown, sealed for decades' and costs almost nothing extra.",
      },
      {
        type: "shopCards",
        heading: "Supplies Used",
        intro:
          "Everything linked below is what I actually use. Some links are affiliated.",
        items: [
          {
            name: "Activated charcoal powder",
            description:
              "Food-grade, for making black salt — mixes easily into sea salt",
            image: {
              src: "/images/placeholder-1.jpg",
              alt: "Bag of activated charcoal powder",
            },
            affiliateUrl: "https://amzn.to/your-link",
          },
          {
            name: "Cork stopper assortment",
            description: "Various sizes to fit different jar openings",
            image: {
              src: "/images/placeholder-1.jpg",
              alt: "Assortment of cork stoppers in various sizes",
            },
            affiliateUrl: "https://amzn.to/your-link",
          },
          {
            name: "Low-temp hot glue gun",
            description: "Safer on glass than full-temp — less cracking risk",
            image: {
              src: "/images/placeholder-1.jpg",
              alt: "Low temperature hot glue gun",
            },
            affiliateUrl: "https://amzn.to/your-link",
          },
        ],
      },
      {
        type: "notes",
        text: "This project gets easier the second time around — once you have a jar stash going, you can add to it all year. I keep a bin in my garage and drop in anything interesting I find at estate sales or thrift stores.",
      },
    ],
  },
  {
    slug: "stl-pumpkin-patches-2025",
    title: "The Best Pumpkin Patches Within an Hour of St. Louis",
    excerpt:
      "From Eckert's to Thies Farm to a few hidden gems across the river. We ranked them by what they do best — wagon rides, corn mazes, or just a really good pumpkin.",
    image: {
      src: "/images/placeholder-1.jpg",
      alt: "Field of pumpkins at golden hour",
    },
    author: "Marcus Bell",
    publishedAt: "2025-09-01",
    holiday: "halloween",
    topic: "events",
    postType: "roundup",
    audience: ["family", "kids"],
    featured: true,
    readTime: 7,
    body: [
      {
        type: "paragraph",
        text: "Not all pumpkin patches are created equal. Some are parking lots with a hay bale photo op. The ones on this list have actual charm — real wagon rides, corn mazes, fresh cider, and pumpkins that weren't trucked in from a wholesaler.",
      },
      {
        type: "heading",
        level: 2,
        text: "1. Eckert's Country Restaurant & Farm — Belleville, IL",
      },
      {
        type: "paragraphWithImage",
        text: "Eckert's is the gold standard. Family-owned since 1837, the fall season shows it — pick-your-own pumpkins, hayrides, a corn maze, and a farm store with apple cider donuts worth the drive on their own. Go on a weekday morning; weekend afternoons get genuinely crowded.",
        image: {
          src: "/images/placeholder-1.jpg",
          alt: "Rows of pumpkins at Eckert's farm at golden hour",
        },
        align: "right",
      },
      {
        type: "heading",
        level: 2,
        text: "2. Thies Farm & Greenhouses — Maryland Heights",
      },
      {
        type: "paragraphWithImage",
        text: "Thies is smaller but more manageable for families with young kids. The pumpkin selection is excellent and the corn maze is genuinely disorienting. The on-site market has locally grown produce through November, which makes it worth a second trip.",
        image: {
          src: "/images/placeholder-1.jpg",
          alt: "Children choosing pumpkins in a field at Thies Farm",
        },
        align: "left",
      },
      {
        type: "heading",
        level: 2,
        text: "What to Bring to Any Patch",
      },
      {
        type: "list",
        items: [
          "Cash — many patches charge separately for wagon rides and mazes",
          "A wagon or rolling cart for hauling pumpkins",
          "Layers — fall mornings are cold, afternoons warm up quickly",
          "A permanent marker for labeling whose pumpkin is whose",
        ],
        ordered: false,
      },
      {
        type: "callout",
        variant: "tip",
        text: "The best pumpkins go fast on weekends. Aim for opening time, or visit midweek — most patches restock Tuesday through Thursday.",
      },
    ],
  },
  {
    slug: "eckerts-fall-festival-preview",
    title: "Eckert's Fall Festival Returns September 13",
    excerpt:
      "The 2026 lineup brings back the apple cider donut bar and a new pumpkin slingshot range. Here's what to know before you go.",
    image: {
      src: "/images/placeholder-1.jpg",
      alt: "Eckert's farm with pumpkins and visitors",
    },
    author: "Marcus Bell",
    publishedAt: "2025-08-28",
    holiday: "halloween",
    topic: "events",
    postType: "event",
    audience: ["family", "kids"],
    readTime: 4,
    eventDate: "2026-09-13",
    eventLocation: "951 S Green Mount Rd, Belleville, IL",
    eventNeighborhood: "Belleville",
    ticketUrl: "https://example.com/tickets",
  },
  {
    slug: "spritz-cookies-grandma-recipe",
    title: "Grandma's Spritz Cookies, Just Like You Remember",
    excerpt:
      "The buttery little cookies your German grandma used to press into reindeer shapes. The press matters. The almond extract matters more.",
    image: {
      src: "/images/christmasPlaceHolder.jpg",
      alt: "Tray of pastel-colored spritz cookies",
    },
    author: "Eliza Hart",
    publishedAt: "2024-12-10",
    holiday: "christmas",
    topic: "recipes",
    postType: "recipe",
    recipeSubcategory: "dessert",
    audience: ["family"],
    readTime: 5,
  },
  {
    slug: "tilles-park-winter-wonderland-review",
    title: "Tilles Park's Winter Wonderland: Still the Gold Standard",
    excerpt:
      "Forty years in, the drive-through still feels magical. Here's what's new this season, what's worth the wait, and which night to skip.",
    image: {
      src: "/images/christmasPlaceHolder.jpg",
      alt: "Christmas lights at Tilles Park",
    },
    author: "Marcus Bell",
    publishedAt: "2024-12-01",
    holiday: "christmas",
    topic: "events",
    postType: "review",
    audience: ["family", "kids", "date-night"],
    featured: true,
    readTime: 4,
    rating: 5,
    reviewSubject: "Tilles Park Winter Wonderland",
  },
  {
    slug: "cozy-christmas-mantle",
    title: "A Cozy Christmas Mantle in Five Layers",
    excerpt:
      "Garland, candles, stockings, vintage finds, and the one thing most people forget. A no-stress formula that works whether your style is farmhouse or formal.",
    image: {
      src: "/images/christmasPlaceHolder.jpg",
      alt: "Decorated Christmas mantle with garland and candles",
    },
    author: "Eliza Hart",
    publishedAt: "2024-11-25",
    holiday: "christmas",
    topic: "decor",
    postType: "guide",
    audience: ["family", "adults"],
    readTime: 6,
  },
  {
    slug: "stl-holiday-pop-up-bars",
    title: "Every Holiday Pop-Up Bar in St. Louis This Season",
    excerpt:
      "Miracle on Locust, the Sippin' Santa speakeasy, and three more we found tucked into neighborhoods you wouldn't expect. Updated weekly.",
    image: {
      src: "/images/christmasPlaceHolder.jpg",
      alt: "Festive cocktail at a holiday pop-up bar",
    },
    author: "Marcus Bell",
    publishedAt: "2024-11-20",
    holiday: "christmas",
    topic: "events",
    postType: "roundup",
    audience: ["adults", "date-night"],
    sponsored: true,
    readTime: 5,
  },
  {
    slug: "spiked-cider-cocktail",
    title: "Spiked Cider for a Cool Halloween Night",
    excerpt:
      "Warmed apple cider with bourbon, cinnamon, and a clove-studded orange peel. Built for a porch and a chill in the air.",
    image: {
      src: "/images/placeholder-1.jpg",
      alt: "Mug of warm spiked cider with cinnamon stick",
    },
    author: "Eliza Hart",
    publishedAt: "2025-10-12",
    holiday: "halloween",
    topic: "recipes",
    postType: "recipe",
    recipeSubcategory: "drink",
    audience: ["adults"],
    readTime: 4,
  },
  {
    slug: "graveyard-dip",
    title: "Graveyard Dip with Tombstone Crackers",
    excerpt:
      "A spinach-artichoke base, sour-cream ghosts, and crackers shaped like crooked headstones. Easier than it sounds.",
    image: {
      src: "/images/placeholder-1.jpg",
      alt: "Halloween dip in a serving bowl with cracker tombstones",
    },
    author: "Marcus Bell",
    publishedAt: "2025-09-30",
    holiday: "halloween",
    topic: "recipes",
    postType: "recipe",
    recipeSubcategory: "appetizer",
    audience: ["family"],
    readTime: 5,
  },
  {
    slug: "haunted-house-chili",
    title: "Cauldron Chili for a Crowd",
    excerpt:
      "A pot of chili built for trick-or-treat night. Make it in the morning, simmer all day, ladle it after the candy run.",
    image: {
      src: "/images/placeholder-1.jpg",
      alt: "Bowl of hearty chili on a wooden table",
    },
    author: "Marcus Bell",
    publishedAt: "2025-10-05",
    holiday: "halloween",
    topic: "recipes",
    postType: "recipe",
    recipeSubcategory: "meal",
    audience: ["family"],
    readTime: 6,
  },
];

// Helper functions
export function getFeaturedPosts(holiday?: Holiday): Post[] {
  return samplePosts.filter(
    (p) =>
      p.featured && (!holiday || p.holiday === holiday || p.holiday === "both"),
  );
}

export function getPostsByHoliday(holiday: Holiday): Post[] {
  return samplePosts.filter(
    (p) => p.holiday === holiday || p.holiday === "both",
  );
}

export function getPostsByTopic(topic: Topic): Post[] {
  return samplePosts.filter((p) => p.topic === topic);
}

export function getPostsByType(postType: PostType): Post[] {
  return samplePosts.filter((p) => p.postType === postType);
}

export function getPostBySlug(slug: string): Post | undefined {
  return samplePosts.find((p) => p.slug === slug);
}

export function getReviews(holiday?: Holiday): Post[] {
  return samplePosts.filter(
    (p) => p.postType === "review" && (!holiday || p.holiday === holiday),
  );
}

export function getUpcomingEvents(holiday?: Holiday): Post[] {
  const now = new Date();
  return samplePosts
    .filter(
      (p) =>
        p.postType === "event" &&
        p.eventDate &&
        new Date(p.eventDate) >= now &&
        (!holiday || p.holiday === holiday),
    )
    .sort(
      (a, b) =>
        new Date(a.eventDate!).getTime() - new Date(b.eventDate!).getTime(),
    );
}

export function getLatestRecipes(holiday: Holiday, limit: number = 3): Post[] {
  return samplePosts
    .filter(
      (p) =>
        p.postType === "recipe" &&
        (p.holiday === holiday || p.holiday === "both"),
    )
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .slice(0, limit);
}

export function getRecipeSubcategoryCounts(
  holiday: Holiday,
): Record<RecipeSubcategory, number> {
  const recipes = samplePosts.filter(
    (p) =>
      p.postType === "recipe" &&
      (p.holiday === holiday || p.holiday === "both"),
  );

  return {
    dessert: recipes.filter((p) => p.recipeSubcategory === "dessert").length,
    drink: recipes.filter((p) => p.recipeSubcategory === "drink").length,
    appetizer: recipes.filter((p) => p.recipeSubcategory === "appetizer")
      .length,
    meal: recipes.filter((p) => p.recipeSubcategory === "meal").length,
  };
}

export function getPostHref(post: Post): string {
  return post.postType === "recipe"
    ? `/recipes/${post.slug}`
    : `/posts/${post.slug}`;
}
