/** @type {import('next').NextConfig} */
const nextConfig = {
// Solve NextJs don't permit render as correct image format : Modern
//     images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 's3-inventorymanagement.s3.us-east-2.amazonaws.com',
//         pathname: '/**',
//       },
//     ],
//   },
// Solve NextJs don't permit render as correct image format : Classic
images: {
    domains: ['s3-inventorymanagement.s3.us-east-2.amazonaws.com'],
  },
};

export default nextConfig;
