import { Link } from 'gatsby'
import styled from 'styled-components'
import { space } from 'styled-system'

export const InsideLink = styled(Link)`
  ${space}
`

InsideLink.displayName = 'InsideLink'

export default InsideLink