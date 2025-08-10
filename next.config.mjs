/** @type {import('next').NextConfig} */
export default {
    output: "export",
    images: { unoptimized: true },
    // no basePath, no assetPrefix
    // optional: trailingSlash can help with some static hosting edge-cases
    trailingSlash: true,
  };