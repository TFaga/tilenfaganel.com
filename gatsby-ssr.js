/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require('react')

const config = require('./gatsby-config')

exports.onRenderBody = ({ setHeadComponents }) => {

  if (process.env.NODE_ENV === `production`) {
    setHeadComponents([
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${config.siteMetadata.gaTrackingId}`} />,
      <script
        dangerouslySetInnerHTML={{
          __html: 
          `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${config.siteMetadata.gaTrackingId}');`,
        }}
      />,
    ])
  }
}
