/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "appletradein.likewize.com"
    ]
  },
  env: {
    BACKEND_URL: "http://localhost:8080"
  }
}

module.exports = nextConfig
