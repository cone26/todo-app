import type { NextConfig } from "next";

module.exports = {
  distDir: "dist",
  output: "export",
};

const nextConfig: NextConfig = {
  output: "standalone",
  trailingSlash: true,
  images: {
    loader: "default",
    // domains: ["your-domain.com"],
  },
};

export default nextConfig;
