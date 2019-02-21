import React, { Component } from 'react'
import styled from 'styled-components'

class Button extends Component {
    onClickTrigger = () => {
        const { name, onClick } = this.props
        onClick(name)
    }
    render () {
        const { active, className, children } = this.props
        return (
            <StyledButton active={active} onClick={this.onClickTrigger} className={className}>
                <div>{ children }</div>
            </StyledButton>
        )
    }
}

export default Button

const StyledButton = styled.button`
  width: 125px;
  height: 125px;
  border-radius: 50%;
  color: white;
  background-color: ${props => props.active ? 'forestgreen' : '#bbb'};
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
