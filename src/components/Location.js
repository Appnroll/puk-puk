import React, { Component } from 'react'
import styled from 'styled-components'
import Button from "./Button";

class Location extends Component {
    constructor(props) {
        super(props)
        this.state = {
            office: false,
            home: false
        }
    }

    setCurrentState = (prop) => {
        const prop2 = prop === 'office' ? 'home' : 'office'

        this.setState({ [prop]: !this.state[prop]})
        if (this.state[prop2]) {
            this.setState({ [prop2]: false})
        }
    }

    render () {
        return (
            <Row>
                <Button active={this.state.office} onClick={this.setCurrentState.bind(this, 'office')}>
                    biuro
                </Button>
                <Button active={this.state.home} onClick={this.setCurrentState.bind(this, 'home')}>
                    domek
                </Button>
            </Row>
        )
    }
}

export default Location

const Row = styled.div`
  display: flex;
`