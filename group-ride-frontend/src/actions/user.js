// import { FormSelect } from 'react-bootstrap'
import { resetLoginForm } from './loginForm'
import { resetSignupForm } from './signupForm'
import { getRides } from './ride'
import { clearRides } from './ride'

export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}

export const clearCurrentUser = () => {
    return {
        type: "CLEAR_CURRENT_USER"
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
            dispatch(getRides())
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
            dispatch(getRides())
            dispatch(resetSignupForm())
            history.push('/')
        })
        .catch(err => console.log(err))
    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch(clearCurrentUser())
        dispatch(clearRides())
        return fetch('http://localhost:3001/logout', {
            credentials: 'include',
            method: "DELETE"
        })
    }
}

export const getCurrentUser = () => {
    return (dispatch) => {
        return fetch("http://localhost:3001/get_current_user", {
            credentials: 'include',    
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
        })
        .then(r => r.json())
        .then(resp => {
            if (resp.error) {
                console.log(resp.error)
            } else {
                dispatch(setCurrentUser(resp.data))
                dispatch(getRides())
            }
        })
        .catch(err => console.log(err))
    }
}