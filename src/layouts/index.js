import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components';
import fontawesome from '@fortawesome/fontawesome'

import theme from '../utils/theme'

import { Container } from '../components/Primitives'
import Header from '../components/Header'
import Footer from '../components/Footer'

import '@fortawesome/fontawesome/styles.css'

fontawesome.config.autoAddCss = false 

const TemplateWrapper = ({ children, data, location }) => (
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
        <meta property="og:image" content={data.defaultDover.childImageSharp.resize.src}/>
        <meta name="twitter:site" content={`@${data.me.twitter}`} />
        <meta name="twitter:image" content={data.defaultDover.childImageSharp.resize.src} />
        <meta property="article:publisher" content={`https://facebook.com/${data.me.facebook}`} />
        <meta property="article:section" content="blog technology software" />
      </Helmet>
      <Header me={data.me} />
      <Container pt={[4, 5]} px={4}>
        {children()}
      </Container>
      <Footer />
    </div>
  </ThemeProvider>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object,
}

export default TemplateWrapper

export const pageQuery = graphql`
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
    defaultDover: file(relativePath: { eq: "default-cover.png" }) {
      childImageSharp {
        resize(width: 1200, quality: 80) {
          src
        }
      }
    }
  }
`