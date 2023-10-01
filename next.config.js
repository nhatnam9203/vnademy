/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/dang-ky-khoa-hoc',
        destination: '/ActivateCourse', // The :path parameter is used here so will not be automatically passed in the query
      },
    ]
  },
}

module.exports = nextConfig
