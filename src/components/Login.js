import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import LoginWithSlackButton from './LoginWithSlackButton'
import { loginInit } from '../store/actions/auth.actions'

class Login extends Component {
    render () {
        const { pending } = this.props;
        return (
            <Container>
                <h4>Kto tam?</h4>

                <h5>HIPOPOTAM</h5>
                <LoginWithSlackButton/>
                {/*{pending && <div>Trwa pukanie...</div>}*/}
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    authorized: state.auth.authorized,
    pending: state.auth.pending,
})

const mapDispatchToProps = dispatch => ({
    loginInit: () => dispatch(loginInit()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    h4, h5 {
      margin-bottom: 30px;
    }
    h5 {
      font-size: 26px;
    }
`
