import styled from 'styled-components'
import {
  space,
  layout,
  color,
  typography,
  flexbox,
  border,
} from 'styled-system'

export const Box = styled.div`
  ${space}
  ${layout}
  ${color}
  ${typography}
  ${flexbox}
  ${border}
`

Box.displayName = 'Box'

export default Box
