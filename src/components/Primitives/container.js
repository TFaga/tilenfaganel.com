import { Box } from 'grid-styled'
import { maxWidth, space } from 'styled-system'

export const Container = Box.extend`
  ${space}
  ${maxWidth}
`

Container.defaultProps = {
  px: 3,
  mx: 'auto',
  maxWidth: 1024
}

Container.displayName = 'Container'

export default Container