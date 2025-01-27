import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cxynzlvx5hoav5tl.public.blob.vercel-storage.com",
        port: "",
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "4mb", // Set desired value here
    },
  },
};

export default nextConfig;
