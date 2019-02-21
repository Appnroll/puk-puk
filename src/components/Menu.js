import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Colors from '../constants/Colors'

class Menu extends Component {
    render () {
        const links = [
            {
                to: { pathname: '/', search: '?token=test' },
                title: 'dashboard',
                exact: true,
            },
            {
                to: { pathname: '/login' },
                title: 'login',
            },
        ]
        return (
            <nav>
                <MenuList>
                    {
                        links.map(link => (
                            <li>
                                <NavLink exact={link.exact} to={link.to} activeStyle={{ color: Colors.Mustard }}>
                                    {link.title}
                                </NavLink>
                            </li>
                        ))
                    }
                </MenuList>
            </nav>
        )
    }
}

export default Menu

const MenuList = styled.ul`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  @media (max-width: 680px) {
    flex-direction: column;
  }
  li {
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 14px;
    position: relative;
    margin-bottom: 2px;
    margin-left: 30px;
    &:before {
      position: absolute;
      content: '';
      width: 8px;
      height: 8px;
      left: -20px;
      top: calc(50% - 4px);
      border-radius: 50%;
      background-color: ${Colors.Mustard};
    }
    &:hover {
      cursor: pointer;
      @media (min-width: 680px) {
        margin-bottom: 0;
        border-bottom: 2px solid ${Colors.Mustard};
      }  
    }
  }
`
