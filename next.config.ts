import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Local dev is reached over loopback and the Tailnet; production ignores this.
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  /* config options here */
};

export default nextConfig;
