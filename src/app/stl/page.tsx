import type { Metadata } from "next";
import ComingSoon from "@/components/ui/ComingSoon/ComingSoon";

export const metadata: Metadata = {
  title: "Coming Soon | Gateway Haunts & Holly",
  description: "Our St. Louis Metro guide is on its way.",
  robots: { index: false, follow: false },
};

export default function StlPage() {
  return (
    <ComingSoon
      tagline="St. Louis Metro"
      message="We're gathering the best local haunts, holiday markets, and seasonal traditions the St. Louis Metro area has to offer. Check back soon. This guide is on its way."
    />
  );
}
