import React from 'react'
import PropTypes from 'prop-types'
import { Flex } from 'grid-styled'
import styled from 'styled-components'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'

import { InsideLink, OutsideLink, Span } from '../Primitives'

const Nav = Flex.extend`
  min-height: 60px;
  max-width: 1024px;
`

const NavItem = Flex.extend`
  display: inline-flex;
  align-items: center;
`

const NavLink = InsideLink.extend`
  color: ${props => props.theme.colors.text};

  :hover,
  :active,
  :focus {
    color: ${props => props.theme.colors.text};
    text-decoration: none;
  }
`

const BrandLink = NavLink.extend`
  font-weight: bold;
`

const ExternalNavLink = styled(OutsideLink)`
  color: ${props => props.theme.colors.text};

  :hover,
  :active,
  :focus {
    color: ${props => props.theme.colors.text};
    text-decoration: none;
  }
`

const Header = ({ me }) => (
  <Nav px={2} mx="auto">
    <NavItem p={2} fontSize={4}>
      <BrandLink to="/">Tilen <Span color='blue'>Faganel</Span></BrandLink>
    </NavItem>
    <NavItem p={2} ml="auto">
      <NavLink to="/">Posts</NavLink>
    </NavItem>
    <NavItem p={2} pr={3}>
      <NavLink to="/">About</NavLink>
    </NavItem>
    <NavItem p={2}>
      <ExternalNavLink href={`https://twitter.com/${me.twitter}`} target='_blank'>
        <FontAwesomeIcon icon={faTwitter} size="lg" />
      </ExternalNavLink>
    </NavItem>
    <NavItem p={2}>
      <ExternalNavLink href={`https://github.com/${me.github}`} target='_blank'>
        <FontAwesomeIcon icon={faGithub} size="lg" />
      </ExternalNavLink>
    </NavItem>
  </Nav>
)

Header.propTypes = {
  me: PropTypes.object,
}

export default Header
