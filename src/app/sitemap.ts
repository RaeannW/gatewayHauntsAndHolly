import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { getAllNonRecipeSlugs, getAllRecipeSlugs } from "@/sanity/lib/queries";

// /christmas and /stl are left out while they're showing "coming soon" —
// add back once each has content behind it.
const STATIC_ROUTES = [
  "",
  "/halloween",
  "/recipes",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
  "/disclosure",
  "/accessibility",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [postSlugs, recipeSlugs] = await Promise.all([
    getAllNonRecipeSlugs(),
    getAllRecipeSlugs(),
  ]);

  const staticEntries = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));

  const postEntries = postSlugs.map((slug) => ({
    url: `${SITE_URL}/posts/${slug}`,
    lastModified: new Date(),
  }));

  const recipeEntries = recipeSlugs.map((slug) => ({
    url: `${SITE_URL}/recipes/${slug}`,
    lastModified: new Date(),
  }));

  return [...staticEntries, ...postEntries, ...recipeEntries];
}
