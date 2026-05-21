import type { StructureResolver } from "sanity/structure";

const SINGLETON_TYPES = new Set(["homepageCarousel"]);

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Homepage Carousel")
        .id("homepageCarousel")
        .child(
          S.document()
            .schemaType("homepageCarousel")
            .documentId("homepageCarousel"),
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => !SINGLETON_TYPES.has(item.getId() ?? ""),
      ),
    ]);
