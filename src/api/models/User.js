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

    getPersonalData () {
        return {
            id: this.id,
            name: this.name,
            avatar: this.avatar
        }
    }

    getState () {
        return {
            workingPlace: this.workingPlace,
            garageTaken: this.garageTaken,
            hasKey: this.hasKey
        }
    }
}

export default User
