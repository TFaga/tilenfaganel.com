import React, { Component } from 'react'
import { Box } from 'grid-styled'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faRssSquare from '@fortawesome/fontawesome-free-solid/faRssSquare'

import { Input, Button, InsideLink } from '../Primitives'

const SubscribeSection = Box.extend`
  text-align: center;
  border-top: 1px solid ${props => props.theme.colors.divider};
`

const encode = data =>
  Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')

class Subscribe extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'subscribe', ...this.state }),
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error))

    e.preventDefault()
  }

  render() {
    return (
      <SubscribeSection mt={4} pt={4}>
        <p>Don't miss out!</p>
        <form
          name="subscribe"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <input name="bot-field" style={{display: 'none'}} />
          <Input
            type="email"
            name="email"
            required
            placeholder="you@email.com"
            width={250}
            onChange={this.handleChange}
          />
          <Button type="submit" ml={[0, 3]} mt={[3, 0]}>
            Subscribe
          </Button>
        </form>
        <InsideLink to="/feed.xml">
          <FontAwesomeIcon icon={faRssSquare} size="lg" />
        </InsideLink>
      </SubscribeSection>
    )
  }
}

export default Subscribe
