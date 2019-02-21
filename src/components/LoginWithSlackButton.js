import React, { Component } from 'react'
import styled from 'styled-components'
import Colors from './../constants/Colors'

const scope = 'identity.basic'
const clientId = '' // TODO: possibly move to ENV
const redirectUri = encodeURIComponent('https://...')
const slackUrl = `https://slack.com/oauth/authorize?scope=${scope}&client_id=${clientId}&redirect_uri=${redirectUri}`

class LoginWithSlackButton extends Component {
    render () {
        return (
            <StyledLink href={slackUrl}>
                <img
                    alt="Login with Slack"
                    src="https://a.slack-edge.com/b1fe1/marketing/img/_rebrand/icons/icon_slack_hash_colored.png"
                    height={'20px'}/>
                <span>Zaloguj się przez Slack</span>
            </StyledLink>
        )
    }
}

export default LoginWithSlackButton

const StyledLink = styled.a`
  border-radius: 5px;
  padding: 10px 15px;
  border: 1px solid ${Colors.SoftDarkBlue};
  display: flex;
  align-items: center;
  width: 190px;
  span {
    line-height: 25px;
  }
  img {
    margin-right: 10px;
  }
`