import { SET_HOME, SET_OFFICE, SET_BIG_GARAGE, SET_SMALL_GARAGE, SET_FRONT_OF_BIG_GARAGE, SET_FRONT_OF_SMALL_GARAGE, SET_KEY } from './../actions/status.actions'

export const defaultState = {
    office: false,
    home: false,
    smallGarage: false,
    bigGarage: false,
    inFrontOfSmallGarage: false,
    inFrontOfBigGarage: false,
    hasKey: false
}

const statusReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_HOME:
            return { ...state, office: false, home: true }
        case SET_OFFICE:
            return { ...state, office: true, home: false }
    }
    return {
        ...state
    }
}

export default statusReducer