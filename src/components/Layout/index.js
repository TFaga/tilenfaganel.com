import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from "gatsby"
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components';
import { config as FontAwesomeConfig } from '@fortawesome/fontawesome-svg-core'

import theme from '../../utils/theme'

import { Container } from '../Primitives'
import Header from '../Header'
import Footer from '../Footer'

import '@fortawesome/fontawesome-svg-core/styles.css'

FontAwesomeConfig.autoAddCss = false 

const Layout = ({ children, location }) => (
  <StaticQuery
      query={layoutQuery}
      render={data => (
        <ThemeProvider theme={theme}>
          <div>
            <Helmet defaultTitle={data.site.siteMetadata.title} titleTemplate={`%s | Tilen Faganel`}>
              <meta name="description" content={data.site.siteMetadata.description}/>
              <meta name="keywords" content="Tilen Faganel, blog, personal, portfolio, tech" />

              <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
              <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
              <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
              <link rel="mask-icon" href="/safari-pinned-tab.svg" color={theme.colors.blue} />
              <meta name="msapplication-config" content="/browserconfig.xml" />

              <meta property="og:type" content="website" />
              <meta property="og:site_name" content={data.me.name} />
              <meta property="og:url" content={`${data.site.siteMetadata.siteUrl}${location.pathname}`} />
              <meta property="og:image" content={data.defaultCover.childImageSharp.resize.src}/>
              <meta name="twitter:site" content={`@${data.me.twitter}`} />
              <meta name="twitter:image" content={data.defaultCover.childImageSharp.resize.src} />
              <meta property="article:publisher" content={`https://facebook.com/${data.me.facebook}`} />
              <meta property="article:section" content="blog technology software" />
            </Helmet>
            <Header me={data.me} />
            <Container pt={[4, 5]} px={4}>
              {children}
            </Container>
            <Footer />
          </div>
        </ThemeProvider>
      )}
  />
)

Layout.propTypes = {
  location: PropTypes.object,
}

export default Layout

const layoutQuery = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        siteUrl
        description
      }
    }
    me: authorsYaml(id: { eq: "tfaga" }) {
      name
      twitter
      github
      facebook
    }
    defaultCover: file(relativePath: { eq: "Layout/default-cover.png" }) {
      childImageSharp {
        resize(width: 1200, quality: 80) {
          src
        }
      }
    }
  }
`