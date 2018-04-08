module.exports = {
  siteMetadata: {
    title: 'Tilen Faganel',
    siteUrl: 'https://tilenfaganel.com'
  },
  mapping: {
    "MarkdownRemark.frontmatter.author": `AuthorsYaml`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    `gatsby-transformer-yaml`,
    `gatsby-transformer-remark`
  ],
};
