import nextMDX from "@next/mdx";
import path from "node:path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import remarkHeadingId from "./mdxPlugins/remark-heading-id.js";
/**
 * @type {import('next').NextConfig}
 */
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const webpackConfig = (config, options) => {
  config.module.rules.push({});
  return config;
};

const nextConfig = {
  turbopack: {
    resolveExtensions: [".mdx", ".tsx", ".ts", ".jsx", ".js", ".mjs", ".json"],
  },
  pageExtensions: ["md", "mdx", "ts", "tsx"],
  experimental: {
    mdxRs: false,
  },
  transpilePackages: ["@repo/design-system"],
  async rewrites() {
    return {
      afterFiles: [
        {
          // source: "/\\^\\(\\(\\?\\!projects\\|posts\\)\\.\\)\\*\\$/:slug*",
          source: "/((?!projects|posts).*)",
          // source: "/non-existent",
          destination: "/",
        },
      ],
      fallback: [
        // These rewrites are checked after both pages/public files
        // and dynamic routes are checked
        // {
        //   source: "/non-existent",
        //   destination: "/notes/english_pronunciation",
        // },
      ],
    };
  },
};
if (process.env.NODE_ENV === "development") {
  nextConfig.outputFileTracingRoot = path.join(__dirname, "../../");
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  // CAUTION: Plugins configured here won't be used by next-mdx-remote
  options: {
    remarkPlugins: [remarkHeadingId],
    rehypePlugins: [],
  },
});
export default withMDX(nextConfig);
