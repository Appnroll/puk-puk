class Garage {
    constructor (props) {
        this.big = props.big
        this.small = props.small
        this.inFrontOfBig = props.inFrontOfBig
        this.inFrontOfSmall = props.inFrontOfSmall
    }

    static fromApi (data) {
        return new Garage({
            big: data.big,
            small: data.small,
            inFrontOfBig: data.inFrontOfBig,
            inFrontOfSmall: data.inFrontOfSmall
        })
    }
}

export default Garage
