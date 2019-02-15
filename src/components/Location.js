import React, { Component } from 'react'
import styled from 'styled-components'
import Button from "./Button";

class Location extends Component {
    constructor(props) {
        super(props)
        this.state = {
            office: true
        }
    }

    setCurrentState = () => {
        this.setState({ active: !this.state.active})
    }

    render () {
        return (
            <Row>
                <Button active={this.state.office}>
                    OFFICE
                </Button>
            </Row>
        )
    }
}

export default Location

const Row = styled.div`
  display: flex;
`