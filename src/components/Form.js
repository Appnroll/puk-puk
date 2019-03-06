import React, { Component } from 'react'
import styled from 'styled-components'
import { workingPlace, parking, superPowers } from '../constants/Buttons'
import Switch from './Switch'
import Button from './Button'
import AuthRequired from './AuthRequired'

class Form extends Component {
    constructor (props) {
        super(props)
        this.state = {
            inOffice: false,
            garageTaken: false,
            haveKey: false,
        }
    }

    mapButtons = (buttons) => {
        return ({ changeState, isActive }) => buttons.map(button => (
            <Button
                active={isActive(button.name)}
                key={button.name}
                name={button.name}
                onClick={changeState}>
                {button.title}
            </Button>
        ))
    }

    makeOptions = (from, to, space = 1) => {
        const options = []
        for (let i = from; i <= to; i = i + space) {
            options.push(<option>{i}</option>)
        }
        return options
    }

    render () {
        return (
            <AuthRequired>
                <Property>
                    <h6>Gdzie jesteś?</h6>
                    <Row>
                        <Switch oneValue>
                            {this.mapButtons(workingPlace)}
                        </Switch>
                    </Row>
                </Property>
                <Property>
                    <h6>Do której dziś pracujesz?</h6>
                    <Hours>{this.makeOptions(0, 23)}</Hours>:
                    <Hours>{this.makeOptions(0, 59, 5)}</Hours>
                </Property>
                <Property>
                    <h6>Gdzie parkujesz?</h6>
                    <Row>
                        <Switch oneValue>
                            {this.mapButtons(parking)}
                        </Switch>
                    </Row>
                </Property>
                <Property>
                    <h6>Super moce</h6>
                    <Row>
                        <Switch>
                            {this.mapButtons(superPowers)}
                        </Switch>
                    </Row>
                </Property>
            </AuthRequired>
        )
    }
}

export default Form

const Property = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 30px 0;
  filter: grayscale(${props => props.disabled ? 100 : 0}%);
  opacity: ${props => props.disabled ? 0.2 : 1};
  h6 {
    margin-bottom: 25px;
  }
`

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Hours = styled.select`
  border: none;
  height: 30px;
  width: 50px;
  font-size: 20px;
  background: none;
`