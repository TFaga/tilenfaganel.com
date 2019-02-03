import React from 'react'
import { Box } from 'grid-styled'
import styled from 'styled-components'

import Layout from "../components/Layout"
import { InsideLink } from '../components/Primitives'

const NotFoundSection = styled(Box)`
  text-align: center;
`

const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <NotFoundSection>
      <h1>404</h1>
      <p>
        You just hit a route that doesn&#39;t exist... the sadness, the
        loneliness.<br />Do find your way back!
      </p>
      
      <InsideLink to='/'>Go home</InsideLink>
    </NotFoundSection>
  </Layout>
)

export default NotFoundPage
