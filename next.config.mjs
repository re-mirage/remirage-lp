/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
  },
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts', 'xml'],
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
// https://hmhceahmonkrwcpviaoa.supabase.co/storage/v1/object/public/projects/4otakus/2-.jpg