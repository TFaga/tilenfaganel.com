import React from 'react'

const Seo = ({ data, location, pageTitle }) => {
  const site = data.site.siteMetadata
  const title = pageTitle ? `${pageTitle} | ${site.title}` : site.title

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={site.description} />
      <meta
        name="keywords"
        content="Tilen Faganel, blog, personal, portfolio, tech"
      />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#003399" />
      <meta name="msapplication-config" content="/browserconfig.xml" />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={data.me.name} />
      <meta property="og:url" content={`${site.siteUrl}${location.pathname}`} />
      <meta
        property="og:image"
        content={data.defaultCover.childImageSharp.resize.src}
      />
      <meta name="twitter:site" content={`@${data.me.twitter}`} />
      <meta
        name="twitter:image"
        content={data.defaultCover.childImageSharp.resize.src}
      />
      <meta
        property="article:publisher"
        content={`https://facebook.com/${data.me.facebook}`}
      />
      <meta property="article:section" content="blog technology software" />
    </>
  )
}

export default Seo
