/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.student.uni-stuttgart.de", "www.usus.uni-stuttgart.de"],
  },
};

module.exports = nextConfig;
