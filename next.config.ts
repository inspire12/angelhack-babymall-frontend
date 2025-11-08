/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',     // 정적 export 사용
    distDir: 'out',       // export 결과 폴더
    basePath: '/app',     // Spring에서 /app/* 으로 서빙
    images: { unoptimized: true } // export에 필요
};
module.exports = nextConfig;