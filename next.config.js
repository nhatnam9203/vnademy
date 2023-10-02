/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/dang-ky-khoa-hoc',
        destination: '/ActivateCourse',
      },
      {
        source: '/dang-ky-vnademy',
        destination: '/Register',
      },
      {
        source: '/dang-nhap',
        destination: '/LoginPage',
      },
      {
        source: '/quen-mat-khau',
        destination: '/ForgotPassword',
      },
    ]
  },
}

module.exports = nextConfig
