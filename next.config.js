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
    mailSendFrom: 'nimpweb-mailler@yandex.ru',
    mailConfiguration: {
      host: 'smtp.yandex.ru',
      port: 465,
      auth: {
        user: 'nimpweb-mailler@yandex.ru',
        pass: 'Hjvfirf1983!',
      },
    },
  },
};

module.exports = nextConfig
