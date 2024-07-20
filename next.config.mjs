import './src/env/index.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true
    }
};

export default nextConfig;
