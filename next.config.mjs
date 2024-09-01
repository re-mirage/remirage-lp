/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hmhceahmonkrwcpviaoa.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/projects/**',
      },
    ],
  },
};

export default nextConfig;
