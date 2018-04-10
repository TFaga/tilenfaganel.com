import React from 'react'
import { Flex, Box, Container, Divider, Link } from 'rebass'
import styled from 'styled-components'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin'
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope'
import faCode from '@fortawesome/fontawesome-free-solid/faCode'
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart'
import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'

const FooterContent = Box.extend`
  font-weight: 300;
  text-align: center;
`

const FooterContentTop = Box.extend`
  border-bottom: 1px solid #f5f3f7;
`

const FooterLink = styled(Link)`
  color: ${props => props.theme.main.textColor};

  :hover,
  :active,
  :focus {
    color: ${props => props.theme.colors.gray9};
    text-decoration: none;
  }
`

const Footer = () => (
    <Box mt={6} >
      <Container px={4} >
        <FooterContent py={4} color='#888' >
          <FooterContentTop fontSize={0} pb={2} mb={2}>
            <FooterLink mx={1}>
              <FontAwesomeIcon icon={faCode} size="lg" />
            </FooterLink>
            with
            <FooterLink mx={1}>
              <FontAwesomeIcon icon={faHeart} size="lg" />
            </FooterLink>
            &amp;
            <FooterLink mx={1}>
              <FontAwesomeIcon icon={faCoffee} size="lg" />
            </FooterLink>
          </FooterContentTop>
          <Box fontSize={0}>Copyright © {new Date().getFullYear()} Tilen Faganel.</Box>
        </FooterContent>
      </Container>
    </Box>
)

export default Footer