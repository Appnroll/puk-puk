import React, { Component } from 'react'
import styled from 'styled-components'

class Button extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: props.active
        }
    }


    render () {
        return (
            <StyledButton active={this.state.active}>
                <div>{ this.props.children }</div>
            </StyledButton>
        )
    }
}

export default Button

const StyledButton = styled.main`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  color: white;
  background-color: ${props => props.active ? 'forestgreen' : '#aaa'};
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
  > div {
    text-align: center;
  }
`
