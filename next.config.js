/** @type {import('next').NextConfig} */

const runtimeCaching = require("next-pwa/cache");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      loader: "imgix",
      path: "public/assets/portfolio.gif",
      unoptimized: true,
    },
  },
  pwa: {
    dest: "public",
    runtimeCaching,
  },
  output: "export",
};
