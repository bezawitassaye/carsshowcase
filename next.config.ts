import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.imagin.studio'], // ✅ Allow car images from Imagin Studio
  },
  outputFileTracingRoot: path.join(__dirname, '.'), // ✅ Keeps build references local
};

export default nextConfig;
