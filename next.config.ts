/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'out',       // export 결과 폴더
    basePath: '/app',     // Spring에서 /app/* 으로 서빙
    images: { unoptimized: true }, // export에 필요
    env: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    }
};
module.exports = nextConfig;