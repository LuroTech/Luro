import type { NextConfig } from "next";

// basePath só no CI: o site publica em lurotech.github.io/Luro,
// mas em dev/build local continua servido na raiz.
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGitHubActions ? "/Luro" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
