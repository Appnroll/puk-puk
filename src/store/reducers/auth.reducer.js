import { AUTHORIZATION_INIT, AUTHORIZATION_SUCCESS, AUTHORIZATION_ERROR } from './../actions/auth.actions'

export const defaultState = {
    authorized: false,
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
            return { ...state, pending: false, authorized: true, accessToken: action.token, user: action.user }
        case AUTHORIZATION_ERROR:
            return { ...state, pending: false, error: action.payload }
    }
    return {
        ...state
    }
}

export default authReducer