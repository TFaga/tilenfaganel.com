import styled from 'styled-components'
import { space, width } from 'styled-system'

export const Input = styled.input`
  ${space}
  ${width}

  box-shadow: ${props => props.theme.colors.border} 0 0 0 1px inset;
  border-radius: 4px;
  border-width: 0;
  vertical-align: middle;

  &:focus {
    outline: none;
    box-shadow: inset 0 0 0 1px ${props => props.theme.colors.blueLight};
  }

  &:disabled {
    opacity: 1/4
  }
`

Input.defaultProps = {
  px: 1,
  py: 2,
  m: 0,
}

Input.displayName = 'Input'

export default Input