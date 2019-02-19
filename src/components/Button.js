import React, { Component } from 'react'
import styled from 'styled-components'

class Button extends Component {
    render () {
        const { active, name, onClick, className, children } = this.props
        return (
            <StyledButton active={active} onClick={() => onClick(name)} className={className}>
                <div>{ children }</div>
            </StyledButton>
        )
    }
}

export default Button

const StyledButton = styled.button`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  color: white;
  background-color: ${props => props.active ? 'forestgreen' : '#aaa'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 10px 0 0;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
  > div {
    text-align: center;
    font-size: 14px;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
  }
`
