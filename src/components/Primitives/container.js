import { Box } from 'grid-styled'
import styled from 'styled-components'

export const Container = styled(Box)`
  max-width: 1024px;
`

Container.defaultProps = {
  px: 3,
  mx: 'auto'
}

Container.displayName = 'Container'

export default Container