const colors = {
  text: 'var(--text)',
  textLight: 'var(--text-light)',
  link: 'var(--link)',
  linkHover: 'var(--link-hover)',
  divider: 'var(--divider)',
  border: 'var(--border)',
  white: 'var(--surface)',
  blue: 'var(--accent-blue)',
  blueLight: 'var(--accent-blue-light)',
  green: 'var(--accent-green)',
  red: 'var(--accent-red)',
}

const breakpoints = ['40em', '52em', '64em']

const radii = [0, '2rem', '4rem', '8rem']

const fontWeights = {
  normal: 300,
  bold: 700,
}

const fonts = {
  normal: '-apple-system,BlinkMacSystemFont,Helvetica Neue,Inter,sans-serif',
  mono: 'SFMono-Regular,Consolas,Liberation Mono,Courier New,monospace',
}

const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]

const fontSizes = [
  '0.75rem',
  '0.875rem',
  '1rem',
  '1.25rem',
  '1.5rem',
  '2rem',
  '3rem',
  '4rem',
  '6rem',
  '8rem',
]

const theme = {
  breakpoints,
  colors,
  radii,
  fontWeights,
  fonts,
  space,
  fontSizes,
}

export default theme
