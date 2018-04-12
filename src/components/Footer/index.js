import React from 'react'
import { Box } from 'grid-styled'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faCode from '@fortawesome/fontawesome-free-solid/faCode'
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart'
import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'

import { Container, Span } from '../Primitives'

const FooterContent = Box.extend`
  text-align: center;
`

const FooterContentTop = Box.extend`
  border-bottom: 1px solid ${props => props.theme.colors.divider};
`

const Footer = () => (
    <Box mt={6}>
      <Container px={4} >
        <FooterContent py={4} color='textLight' >
          <FooterContentTop fontSize={0} pb={2} mb={2}>
            <Span mx={1}>
              <FontAwesomeIcon icon={faCode} size="lg" />
            </Span>
            with
            <Span mx={1}>
              <FontAwesomeIcon icon={faHeart} size="lg" />
            </Span>
            &amp;
            <Span mx={1}>
              <FontAwesomeIcon icon={faCoffee} size="lg" />
            </Span>
          </FooterContentTop>
          <Box fontSize={0}>Copyright © {new Date().getFullYear()} Tilen Faganel.</Box>
        </FooterContent>
      </Container>
    </Box>
)

export default Footer