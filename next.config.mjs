/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    const securityHeaders = [
      {
        key: "Content-Security-Policy",
        value: `
          default-src 'self';
          script-src 'self' 'unsafe-inline' 'unsafe-eval';
          style-src 'self' 'unsafe-inline';
          img-src 'self' data: blob: res.cloudinary.com images.unsplash.com;
          connect-src 'self';
          font-src 'self';
          object-src 'none';
          frame-ancestors 'none';
          base-uri 'self';
          form-action 'self';
        `
          .replace(/\n/g, "")
          .trim(),
      },
      {
        key: "Referrer-Policy",
        value: "strict-origin-when-cross-origin",
      },
      {
        key: "X-Frame-Options",
        value: "DENY",
      },
      {
        key: "X-Content-Type-Options",
        value: "nosniff",
      },
      {
        key: "X-DNS-Prefetch-Control",
        value: "on",
      },
      {
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload",
      },
      {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
      },
    ];

    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

  // Add image domain allowlist for next/image
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  

  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;

//   After deploying, test with:

//   🔐 SecurityHeaders.com

//   🧰 Mozilla Observatory
