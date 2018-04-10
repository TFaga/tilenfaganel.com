module.exports = {
  siteMetadata: {
    title: 'Tilen Faganel',
    siteUrl: 'https://tilenfaganel.com',
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
    `gatsby-transformer-yaml`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`
  ],
};
