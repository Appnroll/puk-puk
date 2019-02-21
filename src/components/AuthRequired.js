import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router'

class AuthRequired extends Component {
    constructor (props) {
        super(props)
    }

    checkToken = () => {
        if (this.props && this.props.location.search) {
            const query = new URLSearchParams(this.props.location.search)
            return query.get('token')
        }
        return false
    }

    render () {
        return this.checkToken() ? this.props.children : <Redirect to={"/login"}/>
    }
}

export default withRouter(AuthRequired)
