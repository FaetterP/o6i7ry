/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['react-syntax-highlighter/dist/esm/styles/hljs',],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.ibb.co',
                port: '',
                pathname: '/**',
            },
        ],
    },
}

module.exports = nextConfig
