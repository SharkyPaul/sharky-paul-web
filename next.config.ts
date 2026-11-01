import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [{ source: "/kit", destination: "/media-kit.html" }];
  },
};

export default nextConfig;
