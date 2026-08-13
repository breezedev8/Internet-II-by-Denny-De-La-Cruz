/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  basePath: '/Internet-II-by-Denny-De-La-Cruz',

  images: {
    unoptimized: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig