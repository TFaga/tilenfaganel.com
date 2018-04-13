import React from 'react'
import { Box } from 'grid-styled'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faRssSquare from '@fortawesome/fontawesome-free-solid/faRssSquare'

import { Input, Button, InsideLink } from '../Primitives' 

const SubscribeSection = Box.extend`
  text-align: center;
  border-top: 1px solid ${props => props.theme.colors.divider};
`

const Subscribe = () => (
  <SubscribeSection mt={4} pt={4}>
    <p>
      Don't miss out!
    </p>
    <form>
      <Input type="email" name="email" placeholder="you@email.com" width={250} />
      <Button type="submit" ml={[0, 3]} mt={[3, 0]}>Subscribe</Button>
    </form>
    <InsideLink to='/feed.xml'>
      <FontAwesomeIcon icon={faRssSquare} size="lg" />
    </InsideLink>
  </SubscribeSection>
)

export default Subscribe