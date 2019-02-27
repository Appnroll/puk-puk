export const AUTHORIZATION_INIT = 'AUTHORIZATION_INIT'
export const AUTHORIZATION_SUCCESS = 'AUTHORIZATION_SUCCESS'
export const AUTHORIZATION_ERROR = 'AUTHORIZATION_ERROR'
export const AUTHORIZATION_CLOSED = 'AUTHORIZATION_CLOSED'

export const loginInit = () => ({
    type: AUTHORIZATION_INIT,
})

export const loginSuccess = payload => ({
    type: AUTHORIZATION_SUCCESS,
    payload,
})

export const loginError = payload => ({
    type: AUTHORIZATION_ERROR,
    payload,
})

export const logout = () => ({
    type: AUTHORIZATION_CLOSED
})
