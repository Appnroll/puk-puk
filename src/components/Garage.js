import React, { Component } from 'react'
import styled from 'styled-components'
import Button from "./Button";

class Garage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            big: false,
            small: false,
            inFrontOfBig: false,
            inFrontOfSmall: false
        }
    }

    setCurrentState = (prop) => {
        this.setState({ [prop]: !this.state[prop]})
        for (let objProp in this.state) {
            if (this.state[objProp]) {
                this.setState({ [objProp]: false})
            }
        }
    }
    render () {
        return (
            <Row>
                <Button active={this.state.big} onClick={this.setCurrentState.bind(this, 'big')}>
                    DUŻY GARAŻ
                </Button>
                <Button active={this.state.small} onClick={this.setCurrentState.bind(this, 'small')}>
                    MAŁY GARAŻ
                </Button>
                <Button active={this.state.inFrontOfBig} onClick={this.setCurrentState.bind(this, 'inFrontOfBig')}>
                    przed dużym GARAŻem
                </Button>
                <Button active={this.state.inFrontOfSmall} onClick={this.setCurrentState.bind(this, 'inFrontOfSmall')}>
                    przed małym GARAŻem
                </Button>
            </Row>
        )
    }
}

export default Garage

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`