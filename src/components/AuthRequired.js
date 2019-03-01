import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { loginInit, loginSuccess, loginError } from '../store/actions/auth.actions'
import { connect } from 'react-redux'
import _get from 'lodash.get'

export const authorizationItemKey = 'pukpuk-authentication-token'

class AuthRequired extends Component {

    saveInLocalStorage (data) {
        localStorage.setItem(authorizationItemKey, JSON.stringify(data))
    }

    getTokenFromStore () {
        const { authorized, accessToken, currentUser } = this.props
        return authorized ? {
            token: accessToken,
            user: currentUser,
        } : false
    }

    getTokenFromLocalStorage () {
        let token = localStorage.getItem(authorizationItemKey)
        return token ? JSON.parse(token) : false
    }

    getTokenFromUrl = () => {
        const query = new URLSearchParams(_get(this.props, 'location.search', null))
        const token = query.get('token')
        const user = query.get('name')
        return query ? { token, user } : false
    }

    getToken = () => {
        const currentPath = _get(this.props, 'location.pathname', null)
        if (currentPath === '/auth') {
            return this.getTokenFromUrl()
        } else {
            return this.getTokenFromStore() || this.getTokenFromLocalStorage()
        }
    }

    verifyAuthorization () {
        const { loginInit, loginSuccess, loginError } = this.props
        loginInit()
        const authData = this.getToken()
        if (authData) {
            this.saveInLocalStorage(authData)
            loginSuccess({
                token: authData.token,
                user: authData.user,
            })
            return true
        } else {
            loginError({
                error: 'Cannot authorize',
            })
            return false
        }
    }

    componentDidMount () {
        this.props.history.push(this.verifyAuthorization() ? '/' : '/login')
    }

    render () {
        return this.props.children
    }

}

const mapStateToProps = ({ auth }) => ({
    authorized: auth.authorized,
    pending: auth.pending,
    accessToken: auth.accessToken,
})

const mapDispatchToProps = dispatch => ({
    loginInit: () => dispatch(loginInit()),
    loginSuccess: payload => dispatch(loginSuccess(payload)),
    loginError: payload => dispatch(loginError(payload)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthRequired))
