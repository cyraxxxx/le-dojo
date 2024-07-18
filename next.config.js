/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    //remotePatterns: [
     domains: [
      'uploadthing.com',
      'utfs.io',
      'img.clerk.com',
      'subdomain',
      'files.stripe.com',
    ],
  },
  reactStrictMode: false,
  //reactStrictMode: false,

}

module.exports = nextConfig

