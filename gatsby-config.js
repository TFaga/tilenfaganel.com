module.exports = {
  siteMetadata: {
    title: 'Tilen Faganel',
    siteUrl: 'https://tilenfaganel.com',
    description: `Tilen's personal blog regarding all things in Tech, Web and Software Engineering.`,
  },
  mapping: {
    "MarkdownRemark.frontmatter.author": `AuthorsYaml`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/components`,
        name: 'components',
      },
    },
    `gatsby-transformer-yaml`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 720,
              quality: 80,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`
        ],
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Tilen Faganel",
        short_name: "Tilen Faganel",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#003399",
        display: "minimal-ui",
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
  ],
};
