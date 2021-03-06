import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'grid-styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'

import { OutsideLink } from '../Primitives'

const ContactMe = ({ me, ...props }) => (
  <Box {...props}>
    <OutsideLink
      href={`https://github.com/${me.github}`}
      mx={1}
      target="_blank"
    >
      <FontAwesomeIcon icon={faGithub} size="lg" />
    </OutsideLink>
    <OutsideLink
      href={`https://twitter.com/${me.twitter}`}
      mx={1}
      target="_blank"
    >
      <FontAwesomeIcon icon={faTwitter} size="lg" />
    </OutsideLink>
    <OutsideLink
      href={`https://www.linkedin.com/in/${me.linkedin}`}
      mx={1}
      target="_blank"
    >
      <FontAwesomeIcon icon={faLinkedin} size="lg" />
    </OutsideLink>
    <OutsideLink href={`mailto:${me.email}`} mx={1}>
      <FontAwesomeIcon icon={faEnvelope} size="lg" />
    </OutsideLink>
  </Box>
)

ContactMe.propTypes = {
  me: PropTypes.object,
}

export default ContactMe