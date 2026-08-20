import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'

export const Heading = styled.h2`
  ${space}
`

Heading.displayName = 'Heading'

Heading.h1 = (props) => <Heading {...props} as="h1" />
Heading.h2 = (props) => <Heading {...props} as="h2" />
Heading.h3 = (props) => <Heading {...props} as="h3" />
Heading.h4 = (props) => <Heading {...props} as="h4" />
Heading.h5 = (props) => <Heading {...props} as="h5" />
Heading.h6 = (props) => <Heading {...props} as="h6" />

export default Heading
