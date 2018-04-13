import React from 'react'
import { Box } from 'grid-styled'

import { InsideLink } from '../components/Primitives'

const NotFoundSection = Box.extend`
  text-align: center;
`

const NotFoundPage = () => (
  <NotFoundSection>
    <h1>404</h1>
    <p>
      You just hit a route that doesn&#39;t exist... the sadness, the
      loneliness.<br />Do find your way back!
    </p>
    
    <InsideLink to='/'>Go home</InsideLink>
  </NotFoundSection>
)

export default NotFoundPage
