/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

 // You can delete this file if you're not using it
 exports.onRouteUpdate = ({ location }) => {
    
  if (process.env.NODE_ENV === `production` && typeof gtag === `function`) {
    
    window.gtag('config','UA-65296810-1', {
      'page_path': location ? location.pathname + location.search + location.hash : undefined
    });
  }
}