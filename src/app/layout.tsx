import type { Metadata } from "next";
import { Alegreya, Rozha_One } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Nav from "@/components/ui/Nav/Nav";
import Footer from "@/components/ui/Footer/Footer";
import { SITE_URL } from "@/lib/constants";

import "./globals.css";

const alegreya = Alegreya({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});

const rozhaOne = Rozha_One({
  subsets: ["latin"],
  variable: "--font-display-bold",
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Gateway Haunts & Holly",
  description:
    "Gateway Haunts & Holly is a blog dedicated to all things Halloween and Christmas, including local holiday events in the St. Louis Metro area.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${alegreya.variable} ${rozhaOne.variable}`}>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/jmm4bpu.css" />
      </head>
      <body suppressHydrationWarning>
        <Nav />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
