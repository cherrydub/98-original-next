/** @type {import('next').NextConfig} */

//possible to remove below? const nextConfig = {};
// const nextConfig = {};

const withOptimizedImages = require("next-optimized-images");

module.exports = withOptimizedImages({
  optimizeImages: false, // Set to true if you want to optimize images as well
  optimizeCss: false, // Set to true to optimize CSS files
});

//possible to remove below? module.exports = nextConfig;
// module.exports = nextConfig;
