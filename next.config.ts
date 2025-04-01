import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: false, // ✅ Explicitly disable the App Router
  },
};

export default nextConfig;
