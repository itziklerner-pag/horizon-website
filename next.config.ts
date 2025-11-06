import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable TypeScript checks during build (for deployment)
  typescript: {
    ignoreBuildErrors: true,
  },

  // Performance Optimization Configuration

  // Image Optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year for immutable images
    dangerouslyAllowSVG: true,
    contentDispositionType: 'inline',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'omo-oss-image.thefastimg.com',
        pathname: '/**',
      },
    ],
  },

  // Enable React compiler for better performance
  reactStrictMode: true,

  // Optimize production builds
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Experimental features for performance
  experimental: {
    optimizePackageImports: ['recharts', 'react-dom'],
  },

  // Production build optimizations
  poweredByHeader: false,
  compress: true,

  // Static page generation for better performance
  // output: 'standalone', // Commented out for Vercel deployment

  // Headers for caching and security
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|gif|webp|avif|woff|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
