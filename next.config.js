/** @type {import('next').NextConfig} */

const withLinaria = require("next-with-linaria");

const nextConfig = {
  experimental: {
    appDir: true,
  },
};

// const importImages = {
//   images: {
//     domains: ['example.s3.us-west-2.amazonaws.com'],
//   }
// }

module.exports = withLinaria(nextConfig);
