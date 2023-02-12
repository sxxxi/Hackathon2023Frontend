/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["appletradein.likewize.com"],
  },
  env: {
    BACKEND_URL: "http://192.18.149.98:8080",
  },
};

module.exports = nextConfig
