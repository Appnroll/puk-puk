import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router'
import { loginInit, loginSuccess, loginError } from '../store/actions/auth.actions'
import { connect } from 'react-redux'
import _get from 'lodash.get'

class AuthRequired extends Component {
    constructor (props) {
        super(props)
    }

    getTokenFromStore () {
        const { authorized, accessToken, currentUser } = this.props
        return authorized ? {
            token: accessToken,
            user: currentUser
        } : false
    }

    getTokenFromLocalStorage () {
        let token = localStorage.getItem('pukpuk-authentication-token')
        return token ? JSON.parse(token) : false
    }

    getTokenFromUrl = () => {
        const query = new URLSearchParams(_get(this.props, 'location.search', null))
        const token = query.get('token')
        const user = query.get('user')
        return query ? { token, user } : false
    }
    verifyAuthorization () {
        const authData = this.getTokenFromStore() || this.getTokenFromLocalStorage() || this.getTokenFromUrl()
        if (authData) {
            localStorage.setItem('pukpuk-authentication-token', JSON.stringify(authData))
            loginSuccess({
                token: authData.token,
                user: authData.user
            })
        } else {
            loginError({
                error: ''
            })
        }
    }

    componentDidMount () {
        if(!this.verifyAuthorization()) {
            this.props.history.push('/login')
        }
    }

    render () {
        return null
    }

}

const mapStateToProps = state => ({
    authorized: state.auth.authorized,
    pending: state.auth.pending,
    accessToken: state.auth
})

const mapDispatchToProps = dispatch => ({
    loginInit: () => dispatch(loginInit()),
    loginSuccess: () => dispatch(loginSuccess()),
    loginError: () => dispatch(loginError()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthRequired))
