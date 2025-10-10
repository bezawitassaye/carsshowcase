import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ["images.pexels.com"],
  },
  outputFileTracingRoot: path.join(__dirname, '.'), // ✅ Keeps build references local
};

export default nextConfig;
