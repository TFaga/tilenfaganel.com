import React, { Component } from 'react'
import { Box } from 'grid-styled'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faRssSquare from '@fortawesome/fontawesome-free-solid/faRssSquare'

import { Input, Button, InsideLink, Span } from '../Primitives'

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

    this.state = {
      data: {},
      submitted: false,
      error: false
    }
  }

  handleChange = e => {
    this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value } })
  }

  handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'subscribe', ...this.state.data }),
    })
      .then(() => this.setState({ submitted: true, error: false }))
      .catch(error => this.setState({ error: true }))

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
          <input name="bot-field" hidden />
          <Input
            type="email"
            name="email"
            required
            placeholder="you@email.com"
            width={250}
            onChange={this.handleChange}
            disabled={this.state.submitted}
          />

          <Button type="submit" ml={[0, 3]} mt={[3, 0]} disabled={this.state.submitted}>
            Subscribe
          </Button>

          { this.state.submitted &&
            <Box fontSize={0} pt={1}>
              <Span color='green'>Subscribed!</Span>
            </Box>
          }
          { this.state.error &&
            <Box fontSize={0} pt={1}>
              <Span color='red'>An error occured!</Span>
            </Box>
          }
        </form>
        <InsideLink to="/feed.xml">
          <FontAwesomeIcon icon={faRssSquare} size="lg" />
        </InsideLink>
      </SubscribeSection>
    )
  }
}

export default Subscribe
