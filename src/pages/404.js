import React from 'react'
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
  <Seo location={location} pageTitle="404" />
)
