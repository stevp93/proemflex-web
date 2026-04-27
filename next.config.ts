import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/proemflex-web",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
