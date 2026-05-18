import { ContentBlock } from "@/lib/sample-data";
import ParagraphBlock from "@/components/post/blocks/ParagraphBlock";
import HeadingBlock from "@/components/post/blocks/HeadingBlock";
import ImageBlock from "@/components/post/blocks/ImageBlock";
import ParagraphWithImageBlock from "@/components/post/blocks/ParagraphWithImageBlock";
import ListBlock from "@/components/post/blocks/ListBlock";
import CalloutBlock from "@/components/post/blocks/CalloutBlock";
import ShopCardsBlock from "@/components/post/blocks/ShopCardsBlock";
import Notes from "@/components/post/Notes/Notes";
import styles from "./PostBody.module.css";

interface PostBodyProps {
  blocks: ContentBlock[];
}

export default function PostBody({ blocks }: PostBodyProps) {
  if (blocks.length === 0) return null;

  return (
    <div className={styles.body}>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "paragraph":
            return <ParagraphBlock key={i} text={block.text} />;
          case "heading":
            return <HeadingBlock key={i} level={block.level} text={block.text} />;
          case "image":
            return (
              <ImageBlock
                key={i}
                src={block.src}
                alt={block.alt}
                caption={block.caption}
                align={block.align}
              />
            );
          case "paragraphWithImage":
            return (
              <ParagraphWithImageBlock
                key={i}
                text={block.text}
                image={block.image}
                align={block.align}
              />
            );
          case "list":
            return <ListBlock key={i} items={block.items} ordered={block.ordered} />;
          case "callout":
            return <CalloutBlock key={i} variant={block.variant} text={block.text} />;
          case "shopCards":
            return (
              <ShopCardsBlock
                key={i}
                heading={block.heading}
                intro={block.intro}
                items={block.items}
              />
            );
          case "notes":
            return (
              <Notes key={i}>
                <p>{block.text}</p>
              </Notes>
            );
        }
      })}
    </div>
  );
}
