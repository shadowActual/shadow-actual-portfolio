import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV == "production";

const nextConfig: NextConfig = {
  basePath: isProd ? "/shadow-actual-portfolio" : "",
  output: "export",
};

export default nextConfig;