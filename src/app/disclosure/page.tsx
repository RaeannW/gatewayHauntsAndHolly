import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/ui/LegalPage/LegalPage";

export const metadata: Metadata = {
  title: "Disclosure | Gateway Haunts & Holly",
  description:
    "How Gateway Haunts & Holly is supported through affiliate links, sponsored content, and gifted products, and how we keep recommendations honest.",
};

export default function DisclosurePage() {
  return (
    <LegalPage title="Disclosure" lastUpdated="07/01/2026">
      <p>
        {`In the interest of transparency, here's how Gateway Haunts & Holly is supported, what financial relationships exist behind the content, and how we keep our recommendations honest.`}
      </p>

      <h2>Affiliate Links</h2>
      <p>
        This site participates in affiliate marketing programs, including
        the <strong>Amazon Services LLC Associates Program</strong>, an
        affiliate advertising program designed to provide a means for sites
        to earn advertising fees by advertising and linking to Amazon.com.
      </p>
      <p>
        We may also participate in other affiliate programs (for example,
        ShareASale, Awin, or direct partnerships with retailers and brands).
      </p>
      <p>
        <strong>What this means in plain language:</strong>
      </p>
      <ul>
        <li>
          When you click an affiliate link on our site and make a purchase,
          we may earn a small commission
        </li>
        <li>
          <strong>This costs you nothing extra</strong> — you pay the same
          price you would otherwise
        </li>
        <li>
          Commissions help cover the costs of running this site (hosting,
          domain, tools) and support the time it takes to create content
        </li>
      </ul>
      <p>
        <strong>{"Where you'll see affiliate links:"}</strong>
      </p>
      <ul>
        <li>{'Recipe pages, in the "Tools & Supplies" section'}</li>
        <li>Gift guides and product roundups</li>
        <li>Inline product links within blog posts</li>
      </ul>
      <p>
        <strong>{"How we'll let you know a post contains affiliate links:"}</strong>
      </p>
      <p>
        {`Posts that contain affiliate links include a brief disclosure in the article. We do this because we believe you should know the relationship before reading. Individual links may also be marked with `}
        <code>rel=&quot;sponsored&quot;</code>
        {` for search engines to identify them.`}
      </p>

      <h2>Our Commitment to Honest Recommendations</h2>
      <p>
        We only recommend products and services we genuinely believe in.
        Specifically:
      </p>
      <ul>
        <li>{"We don't recommend products we wouldn't use or buy ourselves"}</li>
        <li>
          {"A product's affiliate availability is "}
          <strong>not</strong> a factor in whether we recommend it
        </li>
        <li>
          {"We may recommend products that don't have affiliate programs because they're the best choice"}
        </li>
        <li>
          Negative reviews or critical opinions will be shared honestly,
          even when an affiliate relationship exists
        </li>
      </ul>

      <h2>Sponsored Content</h2>
      <p>
        {"If we publish content that's paid for or sponsored by a brand, business, or organization, we will:"}
      </p>
      <ul>
        <li>
          Clearly mark the post as <strong>&quot;Sponsored&quot;</strong>
        </li>
        <li>Identify the sponsor by name</li>
        <li>{"Maintain editorial control over the content's substance"}</li>
        <li>
          Only accept sponsorships from brands and businesses we believe
          serve our readers
        </li>
      </ul>
      <p>
        We currently have no active sponsors. If this changes, we will
        update this section.
      </p>

      <h2>Gifted Products</h2>
      <p>
        {`If a brand sends us a product to review or feature at no cost, we'll disclose that clearly in the relevant post. Receiving a free product does not guarantee a positive review — we share our honest experience.`}
      </p>

      <h2>Advertising</h2>
      <p>
        We do not currently display third-party advertising on the site. We
        may, in the future, work with display advertising networks (such as
        Mediavine or Google AdSense). When we do:
      </p>
      <ul>
        <li>Ads will be clearly identifiable as advertisements</li>
        <li>
          {"We won't allow ads in places that would deceive readers about whether content is editorial or paid"}
        </li>
        <li>
          The networks may use cookies to deliver relevant ads — see our{" "}
          <Link href="/privacy">Privacy Policy</Link> for details
        </li>
      </ul>

      <h2>Personal Recommendations</h2>
      <p>
        When we share opinions, recommendations, or experiences with local
        businesses, events, or products, those reflect our genuine
        perspective. We are not paid by venues, restaurants, or event
        organizers to write favorably about them unless that relationship
        is explicitly disclosed as sponsored content.
      </p>

      <h2>Boo Boxes</h2>
      <p>
        {`Boo Boxes are our curated seasonal product line. While some items are designed or created by Gateway Haunts & Holly, some boxes may also include products sourced from carefully selected third-party vendors, including local artists and small businesses. Product descriptions will accurately represent the contents of each box, and we're always transparent about pricing and shipping.`}
      </p>

      <h2>How to Spot Disclosures</h2>
      <p>
        {`We believe in making disclosures easy to find and understand. When content includes affiliate links, sponsored partnerships, gifted products, or other material relationships, we'll clearly identify them within the post using labels or disclosure statements that are easy to notice.`}
      </p>
      <p>
        Depending on the type of content, disclosures may appear at the
        beginning of the post, near the relevant content, or at the end of
        the post.
      </p>
      <p>You may see notices such as:</p>
      <ul>
        <li>This post contains affiliate links.</li>
        <li>Sponsored by [Brand Name].</li>
        <li>Product provided by [Brand Name].</li>
        <li>Paid partnership.</li>
        <li>Advertisement.</li>
      </ul>

      <h2>Questions?</h2>
      <p>
        If you have any questions about our affiliate relationships,
        sponsorships, or how we keep our content honest, please email us at
        rae@gatewayhauntsandholly.com.
      </p>
      <p>We believe transparency builds trust.</p>
    </LegalPage>
  );
}
