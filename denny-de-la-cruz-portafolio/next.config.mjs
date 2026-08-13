/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  basePath: '/Internet-II-by-Denny-De-La-Cruz',

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },
}

export default nextConfig