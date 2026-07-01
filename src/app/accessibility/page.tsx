import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage/LegalPage";

export const metadata: Metadata = {
  title: "Accessibility | Gateway Haunts & Holly",
  description:
    "Gateway Haunts & Holly's commitment to web accessibility, our approach to WCAG standards, and how to report an accessibility issue.",
};

export default function AccessibilityPage() {
  return (
    <LegalPage title="Accessibility" lastUpdated="07/01/2026">
      <p>
        Gateway Haunts & Holly is committed to making our site accessible to
        as many people as possible, including those who use assistive
        technologies like screen readers, keyboard navigation, or browser
        zoom.
      </p>

      <h2>Our Approach</h2>
      <p>
        We aim to follow the Web Content Accessibility Guidelines (WCAG) 2.1
        Level AA as a baseline. This is a widely recognized standard for
        digital accessibility.
      </p>
      <p>Specific practices we follow:</p>
      <ul>
        <li>
          <strong>Semantic HTML</strong> so screen readers can understand
          page structure
        </li>
        <li>
          <strong>Alt text on images</strong> that convey information
          (decorative images are marked appropriately)
        </li>
        <li>
          <strong>Keyboard navigation</strong> — all interactive elements
          should be reachable and operable without a mouse
        </li>
        <li>
          <strong>Color contrast</strong> that meets readability standards
        </li>
        <li>
          <strong>Clear, readable typography</strong> at scalable sizes
        </li>
        <li>
          <strong>Logical heading structure</strong> to help screen readers
          and outline tools
        </li>
      </ul>

      <h2>Known Limitations</h2>
      <p>
        {"We're a small independent site, and accessibility is an ongoing process. Some content — particularly older posts, third-party embeds, or community-submitted content — may not yet fully meet our standards. We're working to improve."}
      </p>
      <p>If something on the site isn&apos;t accessible to you, we want to know.</p>

      <h2>Reporting an Accessibility Issue</h2>
      <p>
        If you encounter an accessibility issue or have suggestions for
        improvement, please email us at rae@gatewayhauntsandholly.com with:
      </p>
      <ul>
        <li>The page or feature affected</li>
        <li>{"The assistive technology you're using (if applicable)"}</li>
        <li>A description of the issue</li>
      </ul>
      <p>{"We'll respond as quickly as we can and work to address the issue."}</p>

      <h2>Continuous Improvement</h2>
      <p>
        We treat accessibility as ongoing work, not a checklist. As we add
        new content and features, we keep accessibility in mind from the
        start. We update this page as our practices evolve.
      </p>

      <h2>Third-Party Content</h2>
      <p>
        {"Some content on our site comes from third-party services (embedded social posts, affiliate widgets, ad networks). We do our best to choose services that prioritize accessibility, but we don't fully control their behavior."}
      </p>

      <h2>Contact</h2>
      <p>
        For accessibility questions or to report an issue:
        rae@gatewayhauntsandholly.com
      </p>
    </LegalPage>
  );
}
