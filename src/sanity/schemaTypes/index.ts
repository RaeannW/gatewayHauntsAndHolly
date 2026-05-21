import { type SchemaTypeDefinition } from "sanity";
import { homepageCarousel } from "./homepageCarousel";
import { author } from "./author";
import { topic } from "./topic";
import { recipeSubcategory } from "./recipeSubcategory";
import { post } from "./post";
import { blockContent } from "./blockContent";
import { imageBlock } from "./blocks/imageBlock";
import { paragraphWithImage } from "./blocks/paragraphWithImage";
import { callout } from "./blocks/callout";
import { shopCards } from "./blocks/shopCards";
import { shopCard } from "./blocks/shopCard";
import { notesBlock } from "./blocks/notesBlock";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homepageCarousel,
    author,
    topic,
    recipeSubcategory,
    post,
    blockContent,
    imageBlock,
    paragraphWithImage,
    callout,
    shopCards,
    shopCard,
    notesBlock,
  ],
};
