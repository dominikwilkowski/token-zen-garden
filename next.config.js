/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	basePath: process.env.NEXT_PUBLIC_LIVE_SITE ? '/token-zen-garden' : '',
};

module.exports = nextConfig;
