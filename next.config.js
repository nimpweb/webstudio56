/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    images: {
      allowFutureImage: true,
    },
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
