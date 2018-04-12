import React, { Component } from 'react'
import Img from 'gatsby-image'
import { Box, Flex } from 'grid-styled'
import styled from 'styled-components'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin'
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope'

import { OutsideLink, InsideLink, Text, Heading } from '../components/Primitives'

const ProfileSection = Box.extend`
  text-align: center;
`

const ProfileImage = styled.img`
  border-radius: ${props => props.theme.radii[2]};
  height: 100px;
  width: 100px;
`

const PostLink = styled(InsideLink)`
  color: ${props => props.theme.colors.text};

  :hover,
  :active,
  :focus {
    color: ${props => props.theme.colors.text};
    text-decoration: none;
  }
`

const Post = ({ post }) => (
  <Box>
    <h2>Recent posts</h2>
    <Flex mb={5}>
      <Box width={1 / 4} pr={3}>
        <Img
          resolutions={post.frontmatter.image.childImageSharp.resolutions}
          alt="cover"
        />
      </Box>
      <Box width={3 / 4} pl={3}>
        <Box fontSize={0}>
          {post.frontmatter.date}&nbsp; • &nbsp;{post.frontmatter.timeToRead}{' '}
          minute read
        </Box>
        <Box>
          <PostLink to={post.fields.slug}>
            <Heading.h3 mb={1}>{post.frontmatter.title}</Heading.h3>
          </PostLink>
          <Text mb={0}>{post.excerpt}</Text>
        </Box>
        <Box fontSize={0} mt={2} color="textLight">
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
            <ProfileImage
              src={`//www.gravatar.com/avatar/${me.gravatar}?s=200`}
              alt="author"
            />
          </Box>
          <Box mx="auto" width={7 / 12}>
            <h2>Hello, I'm Tilen.</h2>
            <p>
              Lead Software engineer. Java nut. Author. Creator of KumuluzEE. I
              live and breathe software development, microservices, APIs and the
              cloud. Winner of the Java Duke’s Choice Award for extreme
              innovation.
            </p>
          </Box>
          <Box>
            <OutsideLink
              href={`https://github.com/${me.github}`}
              mx={1}
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </OutsideLink>
            <OutsideLink
              href={`https://twitter.com/${me.twitter}`}
              mx={1}
              target="_blank"
            >
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </OutsideLink>
            <OutsideLink
              href={`https://www.linkedin.com/in/${me.linkedin}`}
              mx={1}
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </OutsideLink>
            <OutsideLink href={`mailto:${me.email}`} mx={1}>
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </OutsideLink>
          </Box>
        </ProfileSection>

        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => <Post key={post.fields.slug} post={post} />)}
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
      gravatar
      github
      twitter
      linkedin
      email
    }
  }
`
