import Garage from './Garage'
import User from './User'

class Office {
    constructor (props) {
        this.opened = props.opened
        this.garage = new Garage(props.garage)
        this.peopleWithKey = props.peopleWithKey.map(person => new User(person))
        this.lastLeft = new User(props.lastLeft)
    }
}

export default Office