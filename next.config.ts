import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Enable static export
  trailingSlash: true, // Optional: ensures all routes have a trailing slash in the URL
    // images: {
    //   unoptimized: true,
    //   },
};

export default nextConfig;
