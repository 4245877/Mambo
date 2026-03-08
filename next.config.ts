import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jolybell.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "jolybell.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;