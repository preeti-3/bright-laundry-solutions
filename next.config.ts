import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Public images are edited frequently by the content team. Serving them
  // directly avoids Next's optimized-image cache showing an old replacement.
  images: { unoptimized: true },
  turbopack: { root: process.cwd() },
};

export default nextConfig;
