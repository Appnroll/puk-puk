import React, { Component } from 'react'
import styled from 'styled-components'
import Location from "./Location";

class RootComponent extends Component {
    constructor (props) {
       super(props)
       this.state = {
           isAuthorized: true,
           inOffice: false,
           garageTaken: false,
           haveKey: false
       }
    }

    render () {
        return (
            <Wrapper>
                <Header>PUK PUK</Header>
                <Property disabled={!this.state.isAuthorized}>
                    <h6>Gdzie jesteś?</h6>
                    <Location/>
                </Property>
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

const Property = styled.div`
  border-top: 1px solid #ddd;
  padding: 20px 0;
  filter: grayscale(${props => props.disabled ? 100 : 0}%);
  opacity: ${props => props.disabled ? 0.2 : 1};
  h6 {
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 15px;
  }
`
