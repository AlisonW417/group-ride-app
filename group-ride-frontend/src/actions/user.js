import { resetSignupForm } from './signupForm'

export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
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
        .then(r => r.json())
        .then(resp => {
            console.log(resp)
            dispatch(setCurrentUser(resp.data))
            dispatch(resetSignupForm())
        })
        .catch(err => console.log(err))
    }
}