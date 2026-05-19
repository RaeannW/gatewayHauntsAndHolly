import { PortableText, PortableTextComponents } from "@portabletext/react";
import type {
  PortableTextBlock,
  PortableTextMarkComponentProps,
} from "@portabletext/react";
import ParagraphBlock from "@/components/post/blocks/ParagraphBlock";
import HeadingBlock from "@/components/post/blocks/HeadingBlock";
import ImageBlockComponent from "@/components/post/blocks/ImageBlock";
import ParagraphWithImageBlock from "@/components/post/blocks/ParagraphWithImageBlock";
import ListBlock from "@/components/post/blocks/ListBlock";
import CalloutBlock from "@/components/post/blocks/CalloutBlock";
import ShopCardsBlock from "@/components/post/blocks/ShopCardsBlock";
import Notes from "@/components/post/Notes/Notes";
import styles from "./PostBody.module.css";

interface PostBodyProps {
  // Sanity's portable text array — typed loosely since shapes vary by block
  blocks: PortableTextBlock[];
}

const components: PortableTextComponents = {
  // ─── Native text blocks ──────────────────────────────
  // These handle paragraph + headings. Style comes from the block's `style` field.
  block: {
    normal: ({ children }) => (
      <ParagraphBlock text={children as React.ReactNode} />
    ),
    h2: ({ children }) => (
      <HeadingBlock level={2} text={children as React.ReactNode} />
    ),
    h3: ({ children }) => (
      <HeadingBlock level={3} text={children as React.ReactNode} />
    ),
  },

  // ─── Lists ────────────────────────────────────────────
  // Portable Text emits one item per block, then groups via `list` / `listItem`.
  // The library handles grouping; we just render the list wrapper and items.
  list: {
    bullet: ({ children }) => <ListBlock ordered={false}>{children}</ListBlock>,
    number: ({ children }) => <ListBlock ordered={true}>{children}</ListBlock>,
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },

  // ─── Custom block types ──────────────────────────────
  types: {
    imageBlock: ({ value }) => (
      <ImageBlockComponent
        src={value.image?.asset?.url || "/images/placeholder-1.jpg"}
        alt={value.alt}
        caption={value.caption}
        align={value.align}
      />
    ),
    paragraphWithImage: ({ value }) => (
      <ParagraphWithImageBlock
        text={value.text}
        image={{
          src: value.image?.asset?.url || "/images/placeholder-1.jpg",
          alt: value.alt,
        }}
        align={value.align}
      />
    ),
    callout: ({ value }) => (
      <CalloutBlock variant={value.variant} text={value.text} />
    ),
    shopCards: ({ value }) => (
      <ShopCardsBlock
        heading={value.heading}
        intro={value.intro}
        items={(value.items ?? []).map(
          (item: {
            name: string;
            description?: string;
            alt: string;
            affiliateUrl: string;
            image?: { asset?: { url: string } };
          }) => ({
            name: item.name,
            description: item.description,
            affiliateUrl: item.affiliateUrl,
            image: {
              src: item.image?.asset?.url || "/images/placeholder-1.jpg",
              alt: item.alt,
            },
          }),
        )}
      />
    ),
    notesBlock: ({ value }) => (
      <Notes>
        <p>{value.text}</p>
      </Notes>
    ),
  },

  // ─── Marks (inline formatting) ───────────────────────
  marks: {
    link: ({
      value,
      children,
    }: PortableTextMarkComponentProps<{ _type: "link"; href: string }>) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
};

export default function PostBody({ blocks }: PostBodyProps) {
  if (!blocks || blocks.length === 0) return null;

  return (
    <div className={styles.body}>
      <PortableText value={blocks} components={components} />
    </div>
  );
}
