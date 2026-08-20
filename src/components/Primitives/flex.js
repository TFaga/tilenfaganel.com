import styled from 'styled-components'
import { space, layout, color, typography, flexbox } from 'styled-system'

export const Flex = styled.div`
  display: flex;
  ${space}
  ${layout}
  ${color}
  ${typography}
  ${flexbox}
`

Flex.displayName = 'Flex'

export default Flex
