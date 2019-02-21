import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import LoginWithSlackButton from './LoginWithSlackButton'
import { login } from '../store/actions/auth.actions'
import Button from './Button'

class Login extends Component {
    render () {
        const { pending } = this.props;
        return (
            <Container>
                <h4>Kto tam?</h4>
                {/*<LoginWithSlackButton/>*/}
                <Button onClick={this.props.login} name={'hipopotam'}>Hipopotam</Button>
                {pending && <div>Trwa pukanie...</div>}
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    authorized: state.auth.authorized,
    pending: state.auth.pending,
})

const mapDispatchToProps = dispatch => ({
    login: () => dispatch(login()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)

const Container = styled.div`
    margin-top: 20px;
    h4 {
      margin-bottom: 20px;
    }
`
