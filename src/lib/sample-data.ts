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

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  body?: string;
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

  // Recipe-specific
  recipeSubcategory?: RecipeSubcategory;
  prepTime?: number;
  cookTime?: number;
  servings?: number;
  servingUnit?: string;
  ingredients?: string[];
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
      "1 cup unsalted butter, softened",
      "2/3 cup granulated sugar",
      "1 large egg",
      "1 tsp vanilla extract",
      "1 tsp almond extract",
      "2 1/2 cups all-purpose flour",
      "1 tsp baking powder",
      "1/2 tsp salt",
      "24 sliced almonds",
      "1/4 cup strawberry jam",
      "Red food coloring (optional)",
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
