import { Component } from 'react'

class Switch extends Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    isActive = (prop) => {
        return this.state[prop]
    }

    setCurrentState = (prop) => {
        if (this.props.oneValue) {
            this.setState({
                ...Object.keys(this.state)
                    .reduce((acc, current) => ({
                        ...acc,
                        [current]: false
                    }), {}),
                [prop]: !this.state[prop]
            })
        } else {
            this.setState({ [prop]: !this.state[prop] })
        }
    }

    render () {
        return this.props.children({
            changeState: this.setCurrentState,
            isActive: this.isActive
        })
    }
}

export default Switch
