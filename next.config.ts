import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // disable ESLint errors from failing production builds
  eslint: {
    ignoreDuringBuilds: true,
    // (optional) skip linting on `next dev` as well
    dirs: [],
  },
  // …other config options
};

export default nextConfig;
