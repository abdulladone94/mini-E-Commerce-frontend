/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["example.com", "media.gettyimages.com", "plus.unsplash.com"], // Add allowed domains here
  },
};

export default nextConfig;
