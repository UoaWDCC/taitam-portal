/** @type {import('next').NextConfig} */

const withLinaria = require("next-with-linaria");

const nextConfig = {
  experimental: {
    appDir: true,
  },
};

module.exports = withLinaria(nextConfig);
