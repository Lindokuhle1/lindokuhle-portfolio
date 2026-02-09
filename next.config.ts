/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/lindokuhle-portfolio", // repo name
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
