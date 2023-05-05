/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    PDF_PATH: "/CV.pdf",
  },
};

module.exports = nextConfig;
