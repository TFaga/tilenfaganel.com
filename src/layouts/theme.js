import { theme } from 'rebass'

console.log(theme)

const main = {
  textColor: 'hsla(0,0%,0%,0.8)',
  linkColor: theme.colors.blue7,
  linkHoverColor: theme.colors.blue8,
}

const colors = {
  ...theme.colors,
  blue: theme.colors.blue7
}

export default {
  main,
  colors
}
