const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  images: {
    domains: ["static-today.line-scdn.net", "obs.line-scdn.net"],
  },
  env: {
    API_LINE: "https://today.line.me/id/portaljson",
    IMG_API_URL: "https://obs.line-scdn.net/",
  },
});
