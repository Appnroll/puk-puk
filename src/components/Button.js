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
                { this.props.children }
            </StyledButton>
        )
    }
}

export default Button

const StyledButton = styled.main`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  color: white;
  background-color: ${props => props.active ? 'forestgreen' : '#aaa'};
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`
