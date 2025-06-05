import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    domains: [
      'scontent.fmnl30-2.fna.fbcdn.net',
      'scontent.fmnl30-3.fna.fbcdn.net',
      'scontent.xx.fbcdn.net',
      'scontent.fna.fbcdn.net',
      'scontent.cdninstagram.com',
      'scontent.fmnl10-1.fna.fbcdn.net', // ⬅️ Add this line
    ],
  },
};

export default nextConfig;
