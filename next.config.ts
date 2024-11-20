import type { NextConfig } from "next";

module.exports = {
  distDir: "dist",
  // output: "export",
};

const nextConfig: NextConfig = {
  output: "standalone",
};

export default nextConfig;
