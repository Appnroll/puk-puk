import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../store/actions/auth.actions'
import { authorizationItemKey } from './AuthRequired'
import { Redirect } from 'react-router'

class Logout extends Component {
    componentDidMount () {
        localStorage.removeItem(authorizationItemKey)
        this.props.logout()
    }

    render() {
        return <Redirect to='/login'/>
    }
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
})

export default connect(null, mapDispatchToProps)(Logout)
