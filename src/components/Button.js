import React, { Component } from 'react'
import styled from 'styled-components'

class Button extends Component {
    onClickTrigger = () => {
        const { name, onClick } = this.props
        onClick(name)
    }
    render () {
        const { active, className, children, size } = this.props
        return (
            <StyledButton active={active} onClick={this.onClickTrigger} className={className} size={size}>
                <div>{ children }</div>
            </StyledButton>
        )
    }
}

export default Button

const StyledButton = styled.button`
  width: ${props => props.size ? props.size + 'px' : '125px'};
  height: ${props => props.size ? props.size + 'px' : '125px'};
  border-radius: 50%;
  color: white;
  border: none;
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
