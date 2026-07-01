import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/ui/LegalPage/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions | Gateway Haunts & Holly",
  description:
    "The terms that govern your use of Gateway Haunts & Holly, including content ownership, affiliate relationships, and limitations of liability.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions" lastUpdated="07/01/2026">
      <p>
        {`Welcome to Gateway Haunts & Holly. These terms apply to your use of the site. By accessing or using the site, you agree to these terms. If you don't agree, please don't use the site.`}
      </p>

      <h2>About the Site</h2>
      <p>
        {`Gateway Haunts & Holly is an editorial website covering Halloween, Christmas, and seasonal content in the St. Louis metro area. The site is owned and operated by Raeann Hoelker.`}
      </p>

      <h2>Use of the Site</h2>
      <p>
        You may browse, read, and share our content for personal,
        non-commercial use. You may not:
      </p>
      <ul>
        <li>
          Copy, reproduce, or republish our content elsewhere without
          written permission
        </li>
        <li>
          Use our content to train artificial intelligence or machine
          learning models without permission
        </li>
        <li>Use the site for any unlawful purpose</li>
        <li>
          {"Attempt to interfere with the site's normal operation (including scraping, bot abuse, or denial-of-service attacks)"}
        </li>
        <li>
          Submit false, misleading, or harmful information through any forms
        </li>
      </ul>

      <h2>Intellectual Property</h2>
      <p>
        {`All content on this site — including articles, recipes, photography, illustrations, layouts, code, and the Gateway Haunts & Holly name and branding — is the intellectual property of Raeann Hoelker, except where otherwise credited.`}
      </p>
      <p>You may:</p>
      <ul>
        <li>Share links to our content</li>
        <li>Quote brief excerpts with attribution</li>
        <li>Save and print recipes for personal use</li>
        <li>Pin our images on Pinterest with attribution to the original post</li>
      </ul>
      <p>You may not:</p>
      <ul>
        <li>Republish our content on another site</li>
        <li>Use our photos, illustrations, or designs in your own commercial work</li>
        <li>Remove copyright notices or attributions</li>
        <li>
          Use our brand name or logo in a way that suggests endorsement or
          affiliation
        </li>
      </ul>
      <p>
        {`If you'd like to use our content in a way not covered above, contact us at rae@gatewayhauntsandholly.com.`}
      </p>

      <h2>User-Submitted Content</h2>
      <p>
        {`If you submit content to us — through the contact form, newsletter replies, tip submissions, or any other means — you grant us a non-exclusive, royalty-free license to use, edit, and publish it in connection with the site. You confirm that any content you submit is your own and doesn't violate anyone else's rights.`}
      </p>
      <p>
        {`We're not obligated to publish anything you submit, and we may edit submissions for clarity, length, or appropriateness.`}
      </p>

      <h2>Accuracy of Information</h2>
      <p>
        We work to provide accurate, up-to-date information about events,
        recipes, and local happenings. However:
      </p>
      <ul>
        <li>
          Event details, dates, times, and prices can change. We recommend
          verifying directly with the venue before attending.
        </li>
        <li>
          Recipes are tested and shared in good faith, but cooking results
          may vary based on equipment, ingredients, and technique.
        </li>
        <li>
          Reviews and recommendations reflect our personal opinions, not
          professional endorsements.
        </li>
      </ul>
      <p>
        We make no warranties or guarantees about the accuracy, completeness,
        or timeliness of content on the site. Use of the information here is
        at your own discretion.
      </p>

      <h2>Affiliate Relationships</h2>
      <p>
        This site participates in affiliate marketing programs, including
        Amazon Associates. We earn commissions on qualifying purchases made
        through affiliate links. This does not affect the price you pay. We
        only recommend products we genuinely believe in.
      </p>
      <p>
        See our <Link href="/disclosure">Disclosure page</Link> for full
        details.
      </p>

      <h2>Sponsored Content</h2>
      <p>
        {`When we publish sponsored content — paid placements from brands or local businesses — we will clearly identify it as sponsored. We maintain editorial independence over our content and will not publish sponsored material we don't believe genuinely serves our readers.`}
      </p>

      <h2>Boo Boxes and Product Sales</h2>
      <p>
        If we offer products for sale (such as Boo Boxes), separate terms
        will apply to those purchases. Those terms will be presented at the
        time of purchase and will govern any sale.
      </p>

      <h2>Third-Party Links</h2>
      <p>
        {`Our site links to other websites we don't operate, including affiliate partners, event venues, local businesses, and source material. We're not responsible for the content, privacy practices, or accuracy of third-party sites.`}
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        {`The site is provided "as is" without warranties of any kind. To the fullest extent permitted by law, Raeann Hoelker is not liable for:`}
      </p>
      <ul>
        <li>
          Any direct, indirect, incidental, or consequential damages arising
          from your use of the site
        </li>
        <li>Errors, inaccuracies, or omissions in content</li>
        <li>Loss of data, revenue, or business opportunity</li>
        <li>
          Outcomes from following recipes, instructions, or recommendations
          published here
        </li>
      </ul>
      <p>You use the site at your own risk.</p>

      <h2>Indemnification</h2>
      <p>
        You agree to defend and hold harmless Raeann Hoelker from any
        claims, damages, or expenses arising out of your use of the site or
        violation of these terms.
      </p>

      <h2>Termination</h2>
      <p>
        {`We may suspend or terminate your access to the site at any time, with or without notice, if we believe you've violated these terms.`}
      </p>

      <h2>Governing Law</h2>
      <p>
        These terms are governed by the laws of the State of Missouri,
        United States. Any disputes will be resolved in courts located in
        Missouri.
      </p>

      <h2>Changes to These Terms</h2>
      <p>
        {`We may update these terms from time to time. The "Last updated" date at the top reflects the most recent revision. Continued use of the site after changes means you accept the updated terms.`}
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms? Email us at
        rae@gatewayhauntsandholly.com.
      </p>
    </LegalPage>
  );
}
