import { AUTHORIZATION_INIT, AUTHORIZATION_SUCCESS, AUTHORIZATION_ERROR, AUTHORIZATION_CLOSED } from './../actions/auth.actions'

export const defaultState = {
    authorized: true,
    accessToken: null,
    currentUser: null,
    pending: false,
    error: null
}

const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case AUTHORIZATION_INIT:
            return { ...defaultState, pending: true }
        case AUTHORIZATION_SUCCESS:
            return { ...state, pending: false, authorized: true, accessToken: action.payload.token, user: action.payload.user }
        case AUTHORIZATION_ERROR:
            return { ...state, pending: false, error: action.payload }
        case AUTHORIZATION_CLOSED:
            return { ...defaultState }
        default:
            return { ...state }
    }
}

export default authReducer