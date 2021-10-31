const siteTitle = `no title`;
const siteUrl = `https://`;
const siteDescription = ``;

const siteMetadata = {
  siteTitle,
  siteTitleAlt: ``,
  siteHeadline: ``,
  siteUrl,
  siteDescription,
  siteLanguage: `ja`,
  author: ` `,
  basePath: `/`,
};

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-glslify`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/assets`,
      },
    },
    {
      resolve: `@hpprc/gatsby-theme-core`,
      options: {
        siteTitle,
        siteUrl,
        siteDescription,
        iconPath: `./assets/icon.png`,
        googleAnalyticsTrackingId: `UA-149661454-3`,
      },
    },
  ],
};
