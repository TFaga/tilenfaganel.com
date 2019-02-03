import React, { Component } from 'react'
import { graphql } from "gatsby"
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import { Box, Flex } from 'grid-styled'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
import { faRedditSquare } from '@fortawesome/free-brands-svg-icons/faRedditSquare'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight'

import Layout from "../components/Layout"
import { Heading, ShareLink, InsideLink, Image } from '../components/Primitives'
import Subscribe from '../components/Subscribe'

const PostContent = styled(Box)`
  line-height: 1.55;

  img {
    width: 100%;
  }

  code[class*='language-'],
  pre[class*='language-'] {
    background: none;
    font-family: ${props => props.theme.fonts.mono};
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  .gatsby-highlight {
    code[class*='language-'],
    pre[class*='language-'] {
      color: #f8f8f2;
      text-shadow: 0 1px rgba(0, 0, 0, 0.3);
    }

    /* Code blocks */
    pre[class*='language-'] {
      padding: 1em;
      margin: 1em 0;
      overflow: auto;
      border-radius: 0.3em;
    }

    :not(pre) > code[class*='language-'],
    pre[class*='language-'] {
      background: #272822;
    }

    /* Inline code */
    :not(pre) > code[class*='language-'] {
      padding: 0.1em;
      border-radius: 0.3em;
      white-space: normal;
    }

    .token.comment,
    .token.prolog,
    .token.doctype,
    .token.cdata {
      color: slategray;
    }

    .token.punctuation {
      color: #f8f8f2;
    }

    .namespace {
      opacity: 0.7;
    }

    .token.property,
    .token.tag,
    .token.constant,
    .token.symbol,
    .token.deleted {
      color: #f92672;
    }

    .token.boolean,
    .token.number {
      color: #ae81ff;
    }

    .token.selector,
    .token.attr-name,
    .token.string,
    .token.char,
    .token.builtin,
    .token.inserted {
      color: #a6e22e;
    }

    .token.operator,
    .token.entity,
    .token.url,
    .language-css .token.string,
    .style .token.string,
    .token.variable {
      color: #f8f8f2;
    }

    .token.atrule,
    .token.attr-value,
    .token.function {
      color: #e6db74;
    }

    .token.keyword {
      color: #66d9ef;
    }

    .token.regex,
    .token.important {
      color: #fd971f;
    }

    .token.important,
    .token.bold {
      font-weight: bold;
    }
    .token.italic {
      font-style: italic;
    }

    .token.entity {
      cursor: help;
    }
  }
`

const AuthorImage = styled(Image)`
  height: 60px;
  width: 60px;
`

const SharePostSection = styled(Box)`
  text-align: center;
`

const PostAuthorSection = styled(Flex)`
  border-top: 1px solid ${props => props.theme.colors.divider};

  @media screen and (max-width: ${props => props.theme.breakpoints[0]}) {
    text-align: center;
  }
`

const PostPaginationSection = styled(Flex)`
  border-top: 1px solid ${props => props.theme.colors.divider};
`

const PreviousPostTitle = styled(Box)`
  margin-left: -1.2rem;

  svg {
    margin-right: .425rem;
  }
`

const NextPostSection = styled(Box)`
  text-align: right;
`

const NextPostTitle = styled(Box)`
  margin-right: -1.2rem;

  svg {
    margin-left: .425rem;
  }
`

class BlogPostTemplate extends Component {

  render() {
    const location = this.props.location
    const post = this.props.data.markdownRemark
    const { previous, next } = this.props.pageContext
    const siteUrl = this.props.data.site.siteMetadata.siteUrl

    return (
      <Layout location={location}>
        <Helmet title={`${post.frontmatter.title}`}>
          <meta name="description" content={post.excerpt} />
          <meta property="og:title" content={post.frontmatter.title} />
          <meta property="og:description" content={post.excerpt} />
          <meta property="og:type" content="article" />
          <meta property="og:image" content={`${siteUrl}${post.frontmatter.image.childImageSharp.resize.src}`}/>
          <meta property="og:updated_time" content={post.frontmatter.rawDate} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={post.frontmatter.title} />
          <meta name="twitter:description" content={post.excerpt} />
          <meta name="twitter:image" content={`${siteUrl}${post.frontmatter.image.childImageSharp.resize.src}`} />
          <meta name="twitter:creator" content={`@${post.frontmatter.author.twitter}`} />
          <meta property="article:author" content={`https://facebook.com/${post.frontmatter.author.facebook}`} />
          <meta property="article:published_time" content={post.frontmatter.rawDate} />
          <meta property="article:modified_time" content={post.frontmatter.rawDate} />
        </Helmet>
        <Flex>
          <Box width={[1, 3 / 4]} ml={[0, "12.5%"]}>
            <Box fontSize={0}>
              {post.frontmatter.date}&nbsp; • &nbsp;
              {post.frontmatter.timeToRead} minute read
            </Box>
            <Heading.h1 mb={2}>{post.frontmatter.title}</Heading.h1>
            <Box fontSize={0} mb={4} color="textLight">
              <em>By {post.frontmatter.author.name}</em>
            </Box>
            <Box mb={4} mx={-4}>
              <Img
                fluid={post.frontmatter.image.childImageSharp.fluid}
                alt="cover"
              />
            </Box>

            <PostContent dangerouslySetInnerHTML={{ __html: post.html }} />

            <SharePostSection mt={3} pt={3}>
              <ShareLink href={`https://twitter.com/intent/tweet?url=${siteUrl}${post.fields.slug}&text=${post.frontmatter.title}&via=${post.frontmatter.author.twitter}`} mx={1} target="_blank">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </ShareLink>
              <ShareLink href={`https://www.linkedin.com/shareArticle?mini=true&url=${siteUrl}${post.fields.slug}&title=${post.frontmatter.title}&summary=${post.excerpt}&source=${siteUrl}`} mx={1} target="_blank">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </ShareLink>
              <ShareLink href={`https://www.facebook.com/sharer/sharer.php?u=${siteUrl}${post.fields.slug}`} mx={1} target="_blank">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </ShareLink>
              <ShareLink href={`http://www.reddit.com/submit?url=${siteUrl}${post.fields.slug}&title=${post.frontmatter.title}`} mx={1} target="_blank">
                <FontAwesomeIcon icon={faRedditSquare} size="lg" />
              </ShareLink>
            </SharePostSection>

            <PostAuthorSection fontSize={0} mt={4} pt={4} px={[0, 5]} flexWrap={['wrap', 'nowrap']}>
              <Box flex={['0 0 100%', '0 0 auto']}>
                <AuthorImage borderRadius={2} src={`//www.gravatar.com/avatar/${post.frontmatter.author.gravatar}?s=140`} />
              </Box>
              <Box ml={[0, 4]}>
                <Heading.h4 mb={2}>{post.frontmatter.author.name}</Heading.h4>
                <p>{post.frontmatter.author.bio}</p>
              </Box>
            </PostAuthorSection>
      
            { (previous || next) &&
              <PostPaginationSection mt={4} pt={4}>
                <Box width={1/2}>
                  { previous && 
                    <div>
                      <Box fontSize={0}>
                        Previous
                      </Box>
                      <PreviousPostTitle>
                        <InsideLink to={previous.fields.slug}>
                          <FontAwesomeIcon icon={faArrowLeft} size="sm" />
                          {previous.frontmatter.title}
                        </InsideLink>
                      </PreviousPostTitle>
                    </div>
                  }
                </Box>
                <NextPostSection width={1/2}>
                  { next && 
                    <div>
                      <Box fontSize={0}>
                        Next
                      </Box>
                      <NextPostTitle>
                        <InsideLink to={next.fields.slug}>
                          {next.frontmatter.title}
                          <FontAwesomeIcon icon={faArrowRight} size="sm" />
                        </InsideLink>
                      </NextPostTitle>
                    </div>
                  }
                </NextPostSection>
              </PostPaginationSection>
            }

            <Subscribe />
          </Box>
        </Flex>
      </Layout>
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
      excerpt
      html
      fields {
        slug
      }
      frontmatter {
        title
        timeToRead
        date(formatString: "DD MMMM, YYYY")
        rawDate: date
        image {
          childImageSharp {
            resize(width: 1200, quality: 80) {
              src
            }
            fluid(maxWidth: 784, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        author {
          name
          gravatar
          bio
          twitter
          facebook
        }
      }
    }
  }
`
