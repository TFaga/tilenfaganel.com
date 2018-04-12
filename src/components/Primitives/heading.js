import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'
import tag from 'clean-tag'

export const Heading = styled(tag.h2)`
  ${space}
`

Heading.displayName = 'Heading'

Heading.h1 = props => <Heading {...props} is='h1' />
Heading.h2 = props => <Heading {...props} is='h2' />
Heading.h3 = props => <Heading {...props} is='h3' />
Heading.h4 = props => <Heading {...props} is='h4' />
Heading.h5 = props => <Heading {...props} is='h5' />
Heading.h6 = props => <Heading {...props} is='h6' />

export default Heading