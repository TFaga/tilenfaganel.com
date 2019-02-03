import Typography from 'typography'

import theme from './theme'

const typography = new Typography({
  baseFontSize: '17px',
  bodyFontFamily: theme.fonts.normal.split(','),
  bodyWeight: theme.fontWeights.normal,
  overrideThemeStyles: () => ({
    'a': {
      color: theme.colors.link,
      textDecoration: 'none',
    },
    'a:active,a:hover': {
      outline: 0
    },
    'a:hover,a:focus': {
      color: theme.colors.linkHover,
      textDecoration: 'underline'
    }
  })
})

export default typography
