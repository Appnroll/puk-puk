import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Colors from '../constants/Colors'
import { withRouter } from 'react-router'

class Menu extends Component {
    render () {
        const links = [
            {
                to: { pathname: '/' },
                title: 'ty',
                exact: true,
            },
            {
                to: { pathname: '/list' },
                title: 'inni',
            },
            {
                to: { pathname: '/logout' },
                title: 'wyjście',
            },
        ]
        return (
            <nav>
                <MenuList>
                    {
                        this.props.authorized &&
                            links.map(link => (
                                <li key={link.title}>
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

const mapStateToProps = state => ({
    authorized: state.auth.authorized,
})

export default withRouter(connect(mapStateToProps)(Menu))

const MenuList = styled.ul`
  display: flex;
  justify-content: flex-end;
  margin-top: 5px;
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
