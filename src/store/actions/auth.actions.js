export const AUTHORIZATION_INIT = 'AUTHORIZATION_INIT'
export const AUTHORIZATION_SUCCESS = 'AUTHORIZATION_SUCCESS'
export const AUTHORIZATION_ERROR = 'AUTHORIZATION_ERROR'

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

export const login = () => {
    return (dispatch, getState) => {
        // test of redux-thunk
        dispatch(loginInit())
        fetch('https://randomuser.me/api/?results=1')
            .then(response => {
                dispatch(loginSuccess(response))
            })
            .catch(error => {
                dispatch(loginError(error))
            })
    }

}