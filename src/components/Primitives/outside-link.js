import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'
import tag from 'clean-tag'

const OutsideLinkBase = (props) => (
  <tag.a
    {...props}
    onClick={e => {
      let redirect = true
      
      if (
        e.button !== 0 ||
        e.altKey ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey ||
        e.defaultPrevented
      ) {
        redirect = false
      }
      
      if (props.target && props.target.toLowerCase() !== `_self`) {
        redirect = false
      }
      
      if (window.gtag) {
        gtag('event', 'click', {
          'event_category': 'Outbound Links',
          'event_label': props.href,
          'transport_type': 'beacon',
          'event_callback': () => {document.location = props.href;}
        });
      } else {
        if (redirect) {
          document.location = props.href
        }
      }

      return false
    }}
  />
)

export const OutsideLink = styled(OutsideLinkBase)`
  ${space}
`

OutsideLink.displayName = 'OutsideLink'

export default OutsideLink