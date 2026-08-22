import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import { config as FontAwesomeConfig } from '@fortawesome/fontawesome-svg-core'

import theme from '../../utils/theme'

import { Container } from '../Primitives'
import Header from '../Header'
import Footer from '../Footer'

import '@fortawesome/fontawesome-svg-core/styles.css'

FontAwesomeConfig.autoAddCss = false

const Layout = ({ children, location }) => {
  const data = useStaticQuery(layoutQuery)

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header me={data.me} />
        <Container pt={[4, 5]} px={4}>
          {children}
        </Container>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  location: PropTypes.object,
}

export default Layout

const layoutQuery = graphql`
  query LayoutQuery {
    me: authorsYaml(yamlId: { eq: "tfaga" }) {
      name
      twitter
      github
      linkedin
    }
  }
`
