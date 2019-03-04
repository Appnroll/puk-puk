import React, { Component } from 'react'
import styled from 'styled-components'
import Colors from './../constants/Colors'
import AuthRequired from './AuthRequired'

class Status extends Component {
    constructor (props) {
        super(props)
    }

    people = [
        'kgajowy',
        'Ula',
        'tuhaj',
        'dota'
    ]

    render () {
        return (
            <AuthRequired>
                <Property>
                    <h6>W biurze:</h6>
                    <PeopleList>
                        {this.people.map(person => (
                            <Person office key={person}>
                                { person }
                            </Person>
                        ))}
                    </PeopleList>
                </Property>
                <Property>
                    <h6>Online:</h6>
                    <PeopleList>
                        {this.people.map(person => (
                            <Person office key={person}>
                                { person }
                            </Person>
                        ))}
                    </PeopleList>
                </Property>
            </AuthRequired>
        )
    }
}

export default Status

const Property = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 30px 0;
  filter: grayscale(${props => props.disabled ? 100 : 0}%);
  opacity: ${props => props.disabled ? 0.2 : 1};
`

const PeopleList = styled.ul`
  margin-top: 15px;
`

const Person = styled.li`
  margin-bottom: 10px;
  margin-left: 20px;
  margin-right: 15px;
  position: relative;
  letter-spacing: 0.3px;
  // display: inline-block;
  // width: calc(25% - 50px);
  &:before {
      position: absolute;
      content: '';
      width: 8px;
      height: 8px;
      left: -20px;
      top: calc(50% - 4px);
      border-radius: 50%;
      background-color: ${props => props.office ? Colors.SoftDarkBlue : Colors.Mustard};
    }
`
