import React from 'react'
import styled from 'styled-components'

import { Container, Box } from '../Primitives'

const FooterContent = styled(Box)`
  text-align: center;
`

const FooterContentTop = styled(Box)`
  border-bottom: 1px solid ${(props) => props.theme.colors.divider};
`

const Footer = () => (
  <Box mt={6}>
    <Container px={4}>
      <FooterContent py={4} color="textLight">
        <FooterContentTop pb={2} mb={2}></FooterContentTop>
        <Box fontSize={0}>
          Copyright © {new Date().getFullYear()} Tilen Faganel. All rights
          reserved.
        </Box>
      </FooterContent>
    </Container>
  </Box>
)

export default Footer
