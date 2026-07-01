import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Gateway Haunts & Holly",
  description:
    "How Gateway Haunts & Holly collects, uses, and protects your information, including newsletter signups, analytics, cookies, and your privacy rights.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="07/01/2026">
      <p>
        {`Gateway Haunts & Holly ("we," "our," or "the site") respects your privacy. This policy explains what information we collect, how we use it, and the choices you have. We aim to keep this in plain English.`}
      </p>
      <p>By using this site, you agree to the terms of this policy.</p>

      <h2>Who We Are</h2>
      <p>
        {`Gateway Haunts & Holly is a content website covering Halloween and Christmas traditions, events, recipes, and local life in the St. Louis metro area. The site is owned and operated by Raeann Hoelker.`}
      </p>
      <p>
        For privacy-related questions, contact us at rae@gatewayhauntsandholly.com.
      </p>

      <h2>What We Collect</h2>

      <h3>Information You Give Us Directly</h3>
      <ul>
        <li>
          <strong>Email signups.</strong> If you subscribe to our newsletter,
          sign up for the Boo Boxes waitlist, or use our contact form, we
          collect your email address and any other information you submit
          (such as your name and message).
        </li>
        <li>
          <strong>Contact form submissions.</strong> When you fill out our
          contact form, we collect the information you provide so we can
          respond.
        </li>
      </ul>

      <h3>Information Collected Automatically</h3>
      <p>
        When you visit our site, we automatically collect certain information
        through cookies and similar technologies, including:
      </p>
      <ul>
        <li>
          <strong>Analytics data.</strong> We use Vercel Analytics, a
          privacy-friendly analytics service provided by Vercel, to
          understand how visitors use our site. Vercel Analytics collects
          aggregate, anonymized data such as page views, referring source,
          device type, and general geographic region. It does not use
          cookies, does not collect personally identifiable information, and
          does not track individual visitors across sessions or sites.
        </li>
        <li>
          <strong>Server logs.</strong> Standard web server information like
          IP address, browser type, and timestamps. This is used for
          security and to keep the site running.
        </li>
      </ul>

      <h3>Information from Third Parties</h3>
      <p>
        If you click an affiliate link or make a purchase through our site,
        the third-party service (such as Amazon Associates) may share
        information with us about that interaction.
      </p>

      <h2>How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>
          {"Send newsletters and product updates to subscribers (only if you've opted in)"}
        </li>
        <li>Respond to your messages</li>
        <li>Understand how the site is used and improve content</li>
        <li>Detect and prevent fraud or abuse</li>
        <li>Comply with legal obligations</li>
      </ul>
      <p>We do not sell your personal information.</p>

      <h2>Cookies</h2>
      <p>This site uses very limited cookies. Specifically:</p>
      <ul>
        <li>
          <strong>Essential cookies:</strong> may be used to remember basic
          preferences (such as accepted cookie notices, if applicable).
          Required for the site to function normally.
        </li>
        <li>
          <strong>Affiliate tracking cookies:</strong> set by affiliate
          networks (such as Amazon) when you click an affiliate link,
          allowing them to credit us for any resulting purchases
        </li>
      </ul>
      <p>
        {`We do not use cookies for analytics. Our analytics provider (Vercel Analytics) is cookieless. You can disable cookies in your browser settings, though some functionality may not work as intended.`}
      </p>

      <h2>Affiliate Links</h2>
      <p>
        {`Some posts on this site contain affiliate links — when you click them and make a purchase, we may earn a small commission at no extra cost to you. We disclose affiliate relationships on individual posts, and our Disclosure page provides more detail.`}
      </p>

      <h2>Advertising (Future)</h2>
      <p>
        We do not currently display third-party advertising. In the future,
        we may use ad networks (such as Mediavine or Google AdSense) to serve
        advertisements. If we do, those networks may use cookies and similar
        technologies to deliver relevant ads. This policy will be updated
        before any advertising launches, and the ad networks themselves will
        have their own privacy policies you can review.
      </p>

      <h2>Third-Party Services We Use</h2>
      <p>
        This site is supported by several third-party services that may have
        access to your information for the limited purposes described:
      </p>
      <ul>
        <li>
          <strong>Vercel</strong> — hosts our website
        </li>
        <li>
          <strong>Sanity</strong> — content management system that stores our
          published articles
        </li>
        <li>
          <strong>Vercel Analytics</strong> — measures site usage (cookieless,
          aggregate data only)
        </li>
        <li>
          <strong>Resend</strong> — manages our newsletter subscriber list
        </li>
        <li>
          <strong>Formspree</strong> — processes contact form submissions
        </li>
        <li>
          <strong>Amazon Associates and other affiliate networks</strong> —
          tracks affiliate link clicks
        </li>
      </ul>
      <p>
        Each of these services has its own privacy practices. We encourage
        you to review them.
      </p>

      <h2>Your Choices</h2>
      <p>You can:</p>
      <ul>
        <li>
          <strong>Unsubscribe from our newsletter</strong> at any time using
          the link at the bottom of every email
        </li>
        <li>
          <strong>Disable cookies</strong> in your browser settings
        </li>
        <li>
          <strong>
            Request access to or deletion of your personal information
          </strong>{" "}
          by contacting us at rae@gatewayhauntsandholly.com
        </li>
      </ul>

      <h2>Data Retention</h2>
      <p>
        {`We keep your information only as long as needed for the purposes described above, or as required by law. If you unsubscribe from our newsletter, we remove your email from active mailing lists, though we may retain a record that you unsubscribed to honor your preference.`}
      </p>

      <h2>{"Children's Privacy"}</h2>
      <p>
        {`This site is not directed at children under 13, and we do not knowingly collect information from children under 13. If you believe a child has provided us with personal information, please contact us so we can remove it.`}
      </p>

      <h2>Your Rights Under State Laws</h2>
      <p>
        Depending on where you live, you may have additional rights
        regarding your personal information. For example:
      </p>
      <ul>
        <li>
          <strong>California residents</strong> have rights under the
          California Consumer Privacy Act (CCPA), including the right to know
          what personal information we collect and the right to request
          deletion.
        </li>
        <li>
          <strong>EU/UK residents</strong> have rights under GDPR, including
          the right to access, correct, or delete your personal data.
        </li>
      </ul>
      <p>
        To exercise any of these rights, contact us at
        rae@gatewayhauntsandholly.com.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        {`We may update this policy from time to time. The "Last updated" date at the top reflects the most recent revision. Significant changes will be flagged on the site or via email if you're a subscriber.`}
      </p>

      <h2>Contact</h2>
      <p>
        Questions about privacy? Email us at rae@gatewayhauntsandholly.com.
      </p>
    </LegalPage>
  );
}
