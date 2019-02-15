import React, { Component } from 'react'

const scope = 'identity.basic'
const clientId = '' // TODO: possibly move to ENV
const redirectUri = encodeURIComponent('https://...')
const slackUrl = `https://slack.com/oauth/authorize?scope=${scope}&client_id=${clientId}&redirect_uri=${redirectUri}`

class LoginWithSlackButton extends Component {
    render () {
        return (
            <a href={slackUrl}>
                <img
                    alt="Login with Slack"
                    src="https://platform.slack-edge.com/img/sign_in_with_slack.png"
                    srcSet="https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x"/>
            </a>
        )
    }
}

export default LoginWithSlackButton