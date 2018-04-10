/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it
const { createFilePath } = require('gatsby-source-filesystem');

const path = require("path");
const slug = require('slug');

const BLOG_POST_SLUG_REGEX = /^\/([\d]{4})-([\d]{2})-([\d]{2})-(.+)\/$/

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {

  const { createNodeField } = boundActionCreators

  if (node.internal.type === `MarkdownRemark`) {

    const value = createFilePath({ node, getNode, basePath: 'posts' })

    const match = BLOG_POST_SLUG_REGEX.exec(value)
    const year = match[1]
    const month = match[2]
    const day = match[3]
    const name = match[4]
    
    createNodeField({
      name: `slug`,
      node,
      value: `/${year}/${month}/${day}/${name}/`
    })
  }
}

exports.createPages = ({ boundActionCreators, graphql }) => {
  
  const { createPage } = boundActionCreators;

  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);

  return graphql(`{
    allMarkdownRemark(
      limit: 1000
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }`)
    .then(result => {

      if (result.errors) {
        return Promise.reject(result.errors);
      }

      // Create blog posts pages.
      const posts = result.data.allMarkdownRemark.edges;

      posts.forEach((post, index ) => {

        const previous = index === posts.length - 1 ? false : posts[index + 1].node;
        const next = index === 0 ? false : posts[index - 1].node;

        createPage({
          path: `${post.node.fields.slug}`,
          component: blogPostTemplate,
          context: {
            slug: post.node.fields.slug,
            previous,
            next,
          },
        })
      })
    });
};