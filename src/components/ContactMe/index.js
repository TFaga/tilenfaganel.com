import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faXTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { Box, OutsideLink } from '../Primitives'

const ContactMe = ({ me, ...props }) => (
  <Box {...props}>
    <OutsideLink
      href={`https://github.com/${me.github}`}
      mx={1}
      target="_blank"
    >
      <FontAwesomeIcon icon={faGithub} size="lg" className="fa-width-auto" />
    </OutsideLink>
    <OutsideLink href={`https://x.com/${me.twitter}`} mx={1} target="_blank">
      <FontAwesomeIcon icon={faXTwitter} size="lg" className="fa-width-auto" />
    </OutsideLink>
    <OutsideLink
      href={`https://www.linkedin.com/in/${me.linkedin}`}
      mx={1}
      target="_blank"
    >
      <FontAwesomeIcon icon={faLinkedin} size="lg" className="fa-width-auto" />
    </OutsideLink>
    <OutsideLink href={`mailto:${me.email}`} mx={1}>
      <FontAwesomeIcon icon={faEnvelope} size="lg" className="fa-width-auto" />
    </OutsideLink>
  </Box>
)

ContactMe.propTypes = {
  me: PropTypes.object,
}

export default ContactMe
