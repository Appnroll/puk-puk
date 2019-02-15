import React, { Component } from 'react'
import styled from 'styled-components'
import Button from "./Button";

class Garage extends Component {
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
                    DUŻY GARAŻ
                </Button>
                <Button active={this.state.office}>
                    MAŁY GARAŻ
                </Button>
            </Row>
        )
    }
}

export default Garage

const Row = styled.div`
  display: flex;
`