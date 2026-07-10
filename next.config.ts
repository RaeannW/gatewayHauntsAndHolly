import type { NextConfig } from "next";

const svgrRule = {
  loader: "@svgr/webpack",
  options: {
    svgoConfig: {
      plugins: [
        {
          name: "preset-default",
          params: {
            overrides: {
              removeViewBox: false,
              cleanupIds: false,
            },
          },
        },
      ],
    },
  },
};

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
  turbopack: {
    rules: {
      "*.svg": {
        loaders: [svgrRule],
        as: "*.js",
      },
    },
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: [svgrRule],
    });
    return config;
  },
};

export default nextConfig;