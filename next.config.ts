import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Генерирует статические HTML файлы в /out/
  distDir: '.next', // Временная папка для билда
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Для static export нужно отключить оптимизацию картинок
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
