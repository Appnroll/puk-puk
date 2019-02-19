import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Form from './Form'
import Login from './Login'

class RootComponent extends Component {
    render () {
        const { authorized, pending } = this.props
        return (
            <Wrapper>
                <Header>PUK PUK</Header>
                {pending && <div>Trwa pukanie...</div>}
                {authorized ? <Form/> : <Login/>}
            </Wrapper>
        )
    }
}

const mapStateToProps = state => ({
    authorized: state.auth.authorized,
    pending: state.auth.pending,
})

export default connect(mapStateToProps)(RootComponent)

const Wrapper = styled.main`
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1240px;
  width: 100%;
  box-sizing: border-box;
`

const Header = styled.header`
  font-size: 36px;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  padding: 20px 0;
`
