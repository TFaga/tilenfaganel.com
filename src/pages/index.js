import React, { Component } from 'react'
import InsideLink from 'gatsby-link'
import Img from "gatsby-image";
import { Box, Flex, Image, Link } from 'rebass'
import styled from 'styled-components'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin'
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope'

const ProfileSection = Box.extend`
  text-align: center;
`

const ProfileImage = Image.extend`
  border-radius: ${props => props.theme.radius}rem ;
`

const PostTitle = styled.h3`
  margin-bottom: ${props => props.theme.space[1]}px;
`

const PostLink = styled(InsideLink)`
  color: ${props => props.theme.main.textColor};

  :hover,
  :active,
  :focus {
    color: ${props => props.theme.colors.gray9};
    text-decoration: none;
  }
`

const PostExcerpt = styled.p`
  margin-bottom: 0;
`

const Post = ({ post }) => (
  <Box>
    <h2>Recent posts</h2>
    <Flex mb={5}>
      <Box width={1/4} pr={3}>
        <Img resolutions={post.frontmatter.image.childImageSharp.resolutions} alt='cover' />
      </Box>
      <Box width={3/4} pl={3}>
        <Box fontSize={0}><span>{post.frontmatter.date}&nbsp; • &nbsp;{post.frontmatter.timeToRead} minute read</span></Box>
        <Box>
          <PostLink to={post.fields.slug}>
            <PostTitle pb={1}>{post.frontmatter.title}</PostTitle>
          </PostLink>
          <PostExcerpt>
            {post.excerpt}
          </PostExcerpt>
        </Box>
        <Box fontSize={0} mt={2} color='gray8'>
          <em>By {post.frontmatter.author.name}</em>
        </Box>
      </Box>
    </Flex>
  </Box>
)

class IndexPage extends Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const me = this.props.data.me

    return (
      <div>
        <ProfileSection mb={[2, 5]}>
          <Box mx="auto" width={100}>
            <ProfileImage src='//www.gravatar.com/avatar/3d707dfe5cda586bb8dd67a6d2bec79d?s=200' alt="author" />
          </Box>
          <Box mx="auto" width={7/12}>
            <h2>Hello, I'm Tilen.</h2>
            <p>
              Software engineer. Java nut. Author. Lives and breathes software development, microservices, APIs and the cloud. Creator of KumuluzEE. Won the Java Duke’s Choice Award for extreme innovation.
            </p>
          </Box>
          <Box>
            <Link href={`https://github.com/${me.github}`} mx={1} target='_blank'>
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </Link>
            <Link href={`https://twitter.com/${me.twitter}`} mx={1} target='_blank'>
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </Link>
            <Link href={`https://www.linkedin.com/in/${me.linkedin}`} mx={1} target='_blank'>
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </Link>
            <Link href={`mailto:${me.email}`} mx={1}>
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </Link>
          </Box>
        </ProfileSection>

        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => <Post key={post.fields.slug} post={post}/>)}
      </div>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            timeToRead
            image {
              childImageSharp {
                resolutions(width: 224, height: 118, cropFocus: CENTER) {
                  ...GatsbyImageSharpResolutions
                }
              }
            }
            author {
              name
            }
          }
        }
      }
    }
    me: authorsYaml(id: { eq: "tfaga" }) {
      github
      twitter
      linkedin
      email
    }
  }
`
