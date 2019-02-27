import React, { Component } from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'
import styled from 'styled-components'
import Form from './Form'
import Login from './Login'
import Menu from './Menu'

import logo from './../assets/puk-puk-logo.png'
import AuthRequired from './AuthRequired'
import Logout from './Logout'

class RootComponent extends Component {
    render () {
        return (
            <HashRouter>
                <Wrapper>
                    <Header>
                        <Logo>
                            <img src={logo}/>
                        </Logo>
                        <Menu/>
                    </Header>
                    <Switch>
                        <Route exact path="/" component={Form}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/logout" component={Logout}/>
                        <Route path="/auth" component={AuthRequired}/>
                    </Switch>
                </Wrapper>
            </HashRouter>
        )
    }
}

export default RootComponent

const Wrapper = styled.main`
  margin: 0 auto;
  padding: 0 20px;
  max-width: 940px;
  width: 100%;
  box-sizing: border-box;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`
const Logo = styled.div`
  display: inline-block;
  height: 85px;
  @media (max-width: 680px) {
    height: 65px;
  }
  img {
    height: 100%;
  }
`
