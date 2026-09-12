import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        pathname: "/gh/devicons/devicon@latest/icons/**",
      },
      {
        protocol: "https",
        hostname: "opencode.ai",
        pathname: "/_build/assets/preview-opencode-logo-light-square-C1O1sac-.png",
        search: "",
      },
    ],
  },
};

export default nextConfig;
