import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com'],
    // You can also add other image hosts you might use:
    // domains: ['images.unsplash.com', 'example.com', 'another-domain.com'],
  },
  /* config options here */
};

export default nextConfig;
