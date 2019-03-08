import { baseUrl } from '../index'
import User from '../models/User'

export const getUserState = (id) => {
    return fetch(baseUrl + '/user/state/' + id)
        .then(response => {
            return new User(response.data)
        }).catch(error => {
            console.error(error)
        })
}

export const setUserState = (id, payload) => {
    return fetch(baseUrl + '/user/state/' + id, { method: 'POST' })
        .then(response => {
            return new User(response.data)
        }).catch(error => {
            console.error(error)
        })
}