const initialState = {
    email: "",
    username: "",
    password: ""
}

const signupForm = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_SIGNUP_FORM":
            return action.formData
        default:
            return state
    }
}

export default signupForm;