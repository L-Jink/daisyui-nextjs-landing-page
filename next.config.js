import('next').NextConfig
const nextConfig = {
  reactStrictMode: false,
  transpilePackages: ['react-hotjar'],
  images: {
    // domains: ["plus.unsplash.com"], // deprecated
    remotePatterns: [ // docs: https://nextjs.org/docs/pages/api-reference/components/image-legacy#remote-patterns
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        port: '',
        pathname: '/**',
      }
    ],
  }
}

module.exports = nextConfig
