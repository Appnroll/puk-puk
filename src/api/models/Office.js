import Garage from './Garage'
import User from './User'
import WorkingPlace from './WorkingPlace'

class Office {
    constructor (props) {
        this.opened = props.opened
        this.garage = new Garage(props.garage)
        this.peopleWithKey = props.peopleWithKey.map(person => new User(person))
        this.lastLeft = new User(props.lastLeft)
    }

    static fromApi (data) {
        return new Office({
            opened: data.opened,
            garage: Garage.fromApi(data.garage),
            peopleWithKey: data.peopleWithKey.map(person => User.fromApi(person)),
            lastLeft: User.fromApi(data.lastLeft)
        })
    }
}

export default Office
