exports.onCreateWebpackConfig = ({ stage, getConfig, actions }) => {
  if (stage !== `build-html`) {
    return
  }

  const config = getConfig()
  const externals = Array.isArray(config.externals)
    ? config.externals
    : [config.externals]

  for (const entry of externals) {
    if (entry && typeof entry === `object` && !Array.isArray(entry)) {
      delete entry.punycode
      delete entry[`node:punycode`]
    }
  }

  actions.replaceWebpackConfig(config)
}