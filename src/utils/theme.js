import { theme } from 'grid-styled'

const colors = {
  ...theme.colors,
  text: 'hsla(0,0%,0%,0.8)',
  textLight: '#888',
  link: '#2d8fd5',
  linkHover: '#006fbe',
  divider: '#f5f3f7',
  border: '#ddd',
  white: '#fff',
  blue: '#039',
  blueLight: '#2d8fd5',
  green: '#15c578',
  red: '#b00e23'
}

const radii = [
  0, '2rem', '4rem', '8rem'
]

const fontWeights = {
  normal: 300,
  bold: 700
}

const fonts = {
  normal: '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
  mono: 'SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace'
}

// const space = [0, '0.25rem', '0.5rem', '1rem', '2rem', '4rem', '8rem', '16rem', '32rem']

const space = [
  0, 4, 8, 16, 32, 64, 128, 256, 512
]

const fontSizes = ['0.75rem', '0.875rem', '1rem', '1.25rem', '1.5rem', '2rem', '3rem', '4rem', '6rem', '8rem'];

export default {
  ...theme,
  colors,
  radii,
  fontWeights,
  fonts,
  space,
  fontSizes
}
