import React, { Component } from 'react'
import Helmet from 'react-helmet'

class BlogPostTemplate extends Component {
  render() {
    const post = this.props.data.markdownRemark

    return (
      <div className="blog-post-container">
        <Helmet title={`CodeStack - ${post.frontmatter.title}`} />
        <div className="blog-post">
          <h1>{post.frontmatter.title}</h1>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        rawDate: date
        author {
          id
          name
          gravatar
          bio
        }
      }
    }
  }
`
