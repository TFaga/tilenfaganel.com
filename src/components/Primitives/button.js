import styled from 'styled-components'
import { space, color } from 'styled-system'

export const Button = styled.button`
  ${space}
  ${color}

  border-radius: 4px;
  border-width: 0;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: ${props => props.theme.colors.blueLight} 0 0 0 1px inset;

  &:focus {
    outline: none;
    box-shadow: 0 0 1px 1px ${props => props.theme.colors.blueLight};
  }

  &:active {
    background-color: ${props => props.theme.colors.blueLight},
    box-shadow: inset 0 0 8px ${props => props.theme.colors.blueLight}
  }

  &:disabled {
    opacity: .25;
    cursor: default;
  }
`

Button.defaultProps = {
  m: 0,
  px: 3,
  py: 2,
  color: 'blueLight',
  bg: 'white'
}

Button.displayName = 'Button'

export default Button
