import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { InsideLink, Box } from '../components/Primitives'

const NotFoundSection = styled(Box)`
  text-align: center;
`

const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <NotFoundSection>
      <h1>404</h1>
      <p>
        You just hit a route that doesn&#39;t exist
        <br />
        Do find your way back!
      </p>

      <InsideLink to="/">Go home</InsideLink>
    </NotFoundSection>
  </Layout>
)

export default NotFoundPage

export const Head = ({ data, location }) => (
  <Seo data={data} location={location} pageTitle="404" />
)

export const pageQuery = graphql`
  query NotFoundQuery {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    me: authorsYaml(yamlId: { eq: "tfaga" }) {
      name
      twitter
      facebook
    }
    defaultCover: file(relativePath: { eq: "Layout/default-cover.png" }) {
      childImageSharp {
        resize(width: 1200, quality: 80) {
          src
        }
      }
    }
  }
`
