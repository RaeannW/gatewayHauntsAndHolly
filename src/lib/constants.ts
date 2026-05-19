import type { PostType } from "@/sanity/lib/queries";

export const POST_TYPE_LABELS: Record<PostType, string> = {
  article: "Article",
  review: "Review",
  guide: "Guide",
  roundup: "Roundup",
  recipe: "Recipe",
  event: "Event",
};

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://gatewayhauntsandholly.com";

export const SITE_NAME = "Gateway Haunts & Holly";

export const SITE_TAGLINE =
  "Halloween & Christmas Blog Featuring Holiday Events in St. Louis";
