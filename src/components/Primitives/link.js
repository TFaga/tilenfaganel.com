import React, { Component } from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'

export const Link = styled.a`
  ${space}
`

Link.displayName = 'Link'

export class ShareLink extends Component {

  constructor(props) {
    super(props)

    this.sharePage = this.sharePage.bind(this);
  }

  sharePage(e) {
    e.preventDefault()

    const left = (window.screen.width / 2) - (550 / 2),
          top = (window.screen.height / 2) - (420 / 2);

    window.open(
      this.props.href,
      '',
      `menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=550,height=420,top=${top},left=${left}`
    );
  }

  render() {

    return (
      <Link {...this.props} onClick={this.sharePage}/>
    )
  }
}

ShareLink.displayName = 'ShareLink'

export default Link