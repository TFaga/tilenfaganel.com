import React, { Component } from 'react'
import { graphql } from "gatsby"
import Img from 'gatsby-image'
import { Box, Flex } from 'grid-styled'
import styled from 'styled-components'

import Layout from "../components/Layout"
import { InsideLink, Text, Heading, Image } from '../components/Primitives'
import ContactMe from '../components/ContactMe'

const ProfileSection = styled(Box)`
  text-align: center;
`

const ProfileImage = styled(Image)`
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
    <Flex mb={5} flexWrap={['wrap', 'nowrap']}>
      <Box flex={['0 0 100%', '0 0 auto']} pr={[0, 3]}>
        <Img
          fixed={post.frontmatter.image.childImageSharp.fixed}
          alt="cover"
        />
      </Box>
      <Box pl={[0, 3]} mt={[2, 0]}>
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
    const location = this.props.location
    const posts = this.props.data.allMarkdownRemark.edges
    const me = this.props.data.me

    return (
      <Layout location={location}>
        <ProfileSection mb={[3, 4]}>
          <Box mx="auto" width={100}>
            <ProfileImage borderRadius={2}
              src={`//www.gravatar.com/avatar/${me.gravatar}?s=200`}
              alt="author"
            />
          </Box>
          <Box mx="auto" width={[1, 7 / 12]}>
            <h2>Hello, I'm Tilen.</h2>
            <p>
              Lead Software Engineer and Consultant. Author. Speaker. Creator of KumuluzEE.
              Winner of the Java Duke’s Choice Award. I live and breathe software engineering,
              microservices, automation, APIs and cloud architectures. 
            </p>
          </Box>
          <ContactMe me={me} />
        </ProfileSection>

        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => <Post key={post.fields.slug} post={post} />)}
      </Layout>
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
                fixed(width: 224, height: 118, cropFocus: CENTER, quality: 80) {
                  ...GatsbyImageSharpFixed
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
