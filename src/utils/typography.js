import Typography from 'typography'

import theme from './theme'

const typography = new Typography({
  baseFontSize: '17px',
  bodyFontFamily: theme.fonts.normal.split(','),
  bodyWeight: theme.fontWeights.normal,
  overrideThemeStyles: () => ({
    ':root': {
      '--surface': '#fff',
      '--text': 'hsla(0,0%,0%,0.8)',
      '--text-light': '#888',
      '--link': '#2d8fd5',
      '--link-hover': '#006fbe',
      '--divider': '#f5f3f7',
      '--border': '#ddd',
      '--accent-blue': '#039',
      '--accent-blue-light': '#2d8fd5',
      '--accent-green': '#15c578',
      '--accent-red': '#b00e23',
      'color-scheme': 'light dark',
    },
    body: {
      color: 'var(--text)',
      backgroundColor: 'var(--surface)',
    },
    a: {
      color: theme.colors.link,
      textDecoration: 'none',
    },
    'a:active,a:hover': {
      outline: 0,
    },
    'a:hover,a:focus': {
      color: theme.colors.linkHover,
      textDecoration: 'underline',
    },
    '@media (prefers-color-scheme: dark)': {
      ':root': {
        '--surface': '#121212',
        '--text': 'hsla(0,0%,100%,0.85)',
        '--text-light': '#9e9e9e',
        '--link': '#5aa9e6',
        '--link-hover': '#82c3f4',
        '--divider': '#26262a',
        '--border': '#454549',
        '--accent-blue': '#8ab4ff',
        '--accent-blue-light': '#5aa9e6',
        '--accent-green': '#2ee59d',
        '--accent-red': '#ff6b7a',
      },
    },
  }),
})

export default typography
