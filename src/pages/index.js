import React, { Component } from 'react'
import { graphql } from "gatsby"
import { Box } from 'grid-styled'
import styled from 'styled-components'

import Layout from "../components/Layout"
import { Image } from '../components/Primitives'
import ContactMe from '../components/ContactMe'

const ProfileSection = styled(Box)`
  text-align: center;
`

const ProfileImage = styled(Image)`
  height: 100px;
  width: 100px;
`

class IndexPage extends Component {
  render() {
    const location = this.props.location
    const me = this.props.data.me

    return (
      <Layout location={location}>
        <ProfileSection mb={[3, 4]} mt={[5]}>
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
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    me: authorsYaml(id: { eq: "tfaga" }) {
      gravatar
      github
      twitter
      linkedin
      email
    }
  }
`
