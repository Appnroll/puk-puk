import React, { Component } from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'
import styled from 'styled-components'
import Form from './Form'
import Login from './Login'

class RootComponent extends Component {
    render () {
        return (
            <Wrapper>
                <Header>PUK PUK</Header>
                <HashRouter>
                    <Switch>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/" component={Form}/>
                    </Switch>
                </HashRouter>
            </Wrapper>
        )
    }
}

export default RootComponent

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
