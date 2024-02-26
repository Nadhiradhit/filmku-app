/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'm.media-amazon.com'
            }
        ]
    }
};

export default nextConfig;
