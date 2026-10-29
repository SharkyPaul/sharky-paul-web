import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/prirucka", destination: "/downloads/sharky-paul-prevence-zraloci.pdf", permanent: false },
    ];
  },
};

export default nextConfig;
