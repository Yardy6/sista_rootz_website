/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const basePath = isGitHubPages ? "/sista_rootz_website" : "";

const nextConfig = {
  assetPrefix: basePath,
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath
  },
  images: {
    unoptimized: true
  },
  output: "export",
  trailingSlash: true
};

export default nextConfig;
