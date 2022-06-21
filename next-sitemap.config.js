const config = {
  siteUrl: process.env.siteUrl || 'https://webstudio56.ru',
  changefreq: 'daily',
  priority: 0.7,
  sizemapSize: 5000,
  generateRobotTxt: true,
  alternateRefs: [
    {
      href: 'http://webstudio56.ru',
      hreflang: 'ru',
    },
    {
      href: 'http://www.webstudio56.ru',
      hreflag: 'ru',
    },
  ],
  transform: async (confing, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastMod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
  robotTxtOptions: {
    polices: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'http://webstudio56.ru/sitemap-0.xml',
      'http://webstudio56.ru/sitemap-1.xml',
      'http://webstudio56.ru/sitemap-2.xml',
    ],
  },
};

module.exports = config;
