/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    // Will be available on both server and client
    backendUrl: process.env.SERVER_URL,
    env: process.env.ENV,
    mapsApiKey: process.env.MAPS_API_KEY
  },
}

module.exports = nextConfig
