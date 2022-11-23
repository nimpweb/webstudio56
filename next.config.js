/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    images: { allowFutureImage: true },
  },
  reactStrictMode: true,
  images: {
    // allowFutureImage: true,
    domains: ['mc.yandex.ru'],
  },
  env: {
    siteUrl: 'https://webstudio56.ru',
    mailSendTo: 'nimpweb@yandex.ru',
    mailSendFrom: 'nimpweb@yandex.ru',
    mailConfiguration: {
      host: 'smtp.yandex.ru',
      port: 465,
      auth: {
        user: 'nimpweb@yandex.ru',
        pass: 'Ghjnjnbg1983@',
      },
    },
  },
};

module.exports = nextConfig
