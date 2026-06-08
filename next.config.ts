import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    COMING_SOON: process.env.COMING_SOON ?? "",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
