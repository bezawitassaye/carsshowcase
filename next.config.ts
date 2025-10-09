import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  
  images: {
    domains: ['cdn.imagin.studio'], // ✅ Add this
  },
  // Explicitly set the tracing root to this project so Next doesn't pick a parent lockfile
  outputFileTracingRoot: path.join(__dirname, '.'),
};

export default nextConfig;
