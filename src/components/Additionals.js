import React, { Component } from 'react'
import styled from 'styled-components'
import Button from "./Button";

class Additionals extends Component {
    constructor(props) {
        super(props)
        this.state = {
            key: false
        }
    }

    setCurrentState = () => {
        this.setState({ key: !this.state.key})
    }

    render () {
        return (
            <Row>
                <Button active={this.state.key} onClick={this.setCurrentState.bind(this, 'key')}>
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