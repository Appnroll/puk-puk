import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import LoginWithSlackButton from './LoginWithSlackButton'
import { login } from '../store/actions/auth.actions'
import Button from './Button'

class Login extends Component {
    render () {
        return (
            <Container>
                <h4>Kto tam?</h4>
                {/*<LoginWithSlackButton/>*/}
                <Button onClick={this.props.login} name={'hipopotam'}>Hipopotam</Button>
            </Container>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    login: () => dispatch(login()),
})

export default connect(null, mapDispatchToProps)(Login)

const Container = styled.div`
    margin-top: 20px;
    h4 {
      margin-bottom: 20px;
    }
`
