import React, { Component } from 'react'
import styled from 'styled-components'
import Button from "./Button";

class Additionals extends Component {
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
                    MAM KLUCZ
                </Button>
            </Row>
        )
    }
}

export default Additionals

const Row = styled.div`
  display: flex;
`