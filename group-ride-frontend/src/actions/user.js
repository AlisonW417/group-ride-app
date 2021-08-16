export const signup = (signupData, history) => {
    return (dispatch) => {
        const newUserData = {
            user: signupData
        }
        return fetch("http://localhost:3001/signup", {
            credentials: 'include',
            method: 'POST',
            header: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(newUserData)
        })
        .then(r => r.json())
        .then(resp => {
            console.log(resp)
            // add actions here later!!
        })
        .catch(err => console.log(err))
    }
}