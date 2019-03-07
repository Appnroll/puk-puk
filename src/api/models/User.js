import WorkingPlace from './WorkingPlace'
import Garage from './Garage'

class User {
    constructor (props) {
        this.id = props.id
        this.name = props.name
        this.avatar = props.avatar
        this.workingPlace = new WorkingPlace(props.workingPlace)
        this.garageTaken = new Garage(props.garageTaken)
        this.hasKey = props.hasKey
    }
}

export default User