const initialState = {
    name: "",
    startingLocation: "",
    startingTime: "",
    date: "",
    level: "",
    distance: "",
    description: ""
}

const rideForm = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_RIDE_FORM":
            return action.formData
        case "RESET_RIDE_FORM":
            return initialState
        default:
            return state
    }
}

export default rideForm;