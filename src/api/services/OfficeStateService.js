import { baseUrl } from '../index'
import Office from '../models/Office'
import User from '../models/User'

export const getOfficeState = () => {
    return fetch(baseUrl + '/office/state')
        .then(response => {
            return Office.fromApi(response.data)
        }).catch(error => {
            console.error(error)
        })
}

export const getOfficePeople = () => {
    return fetch(baseUrl + '/office/people/inhouse')
        .then(response => {
            return response.data.map(person => User.fromApi(person))
        }).catch(error => {
            console.error(error)
        })
}

export const getRemotePeople = () => {
    return fetch(baseUrl + '/office/people/remote')
        .then(response => {
            return response.data.map(person => User.fromApi(person))
        }).catch(error => {
            console.error(error)
        })
}