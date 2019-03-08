class WorkingPlace {
    constructor (props) {
        this.office = props.office
        this.home = props.home
    }

    static fromApi (data) {
        return new WorkingPlace({
            office: data.office,
            home: data.home
        })
    }
}

export default WorkingPlace
