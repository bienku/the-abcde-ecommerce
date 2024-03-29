/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        appDir: true,
    },
};

module.exports = {
    i18n: {
        locales: ['en'],
        defaultLocale: 'en',
    },
    images: {
        domains: ['imgur.com', 'mir-s3-cdn-cf.behance.net', 'lh3.googleusercontent.com'],
    },
    env: {
        stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
    },
    ...nextConfig,
};
