import { resetLoginForm } from './loginForm'
import { resetSignupForm } from './signupForm'

export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}

export const login = (loginData, history) => {
    return (dispatch) => {
        return fetch("http://localhost:3001/login", {
            credentials: 'include',
            method: 'POST', 
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(loginData)
        })
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp)
            dispatch(setCurrentUser(resp.data))
            dispatch(resetLoginForm())
            history.push('/')
        })
        .catch(err => console.log(err))
    }
}

export const signup = (signupData, history) => {
    return (dispatch) => {
        const newUserData = {
            user: signupData
        }
        return fetch("http://localhost:3001/signup", {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(newUserData)
        })
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp)
            dispatch(setCurrentUser(resp.data))
            dispatch(resetSignupForm())
            history.push('/')
        })
        .catch(err => console.log(err))
    }
}