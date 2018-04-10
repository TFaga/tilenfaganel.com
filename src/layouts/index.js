import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Provider, Container } from 'rebass'
import { injectGlobal } from 'styled-components';

import theme from './theme'

import Header from '../components/Header'
import Footer from '../components/Footer'

injectGlobal`
  a {
    color: ${theme.main.linkColor};
    text-decoration: none;

    :active, :hover {
      outline: 0;
    }

    :hover, :focus {
      color: ${theme.main.linkHoverColor};
      text-decoration: underline;
    }
  }
`

const TemplateWrapper = ({ children, data }) => (
  <Provider theme={theme}>
    <Helmet defaultTitle={`Tilen Faganel`} titleTemplate={`%s | Tilen Faganel`}>
      <meta name="description" content="Tilen's personal blog regarding all things in Tech, Web and Software Engineering." />
      <meta name="keywords" content="Tilen Faganel, blog, personal, portfolio, tech" />
    </Helmet>
    <Header me={data.me} />
    <Container pt={[2, 5]} px={4}>
      {children()}
    </Container>
    <Footer />
  </Provider>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object,
}

export default TemplateWrapper

export const pageQuery = graphql`
  query LayoutQuery {
    me: authorsYaml(id: { eq: "tfaga" }) {
      twitter
      github
    }
  }
`